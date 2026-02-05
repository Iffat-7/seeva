import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format } from "date-fns";
import { CalendarIcon, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
 import { ReservationCard } from "@/components/reservations/ReservationCard";
 import { useLanguage } from "@/contexts/LanguageContext";

type ActionType = "create" | "update" | "delete";

interface FormData {
  customerName: string;
  phone: string;
  email: string;
  date: Date | undefined;
  time: string;
  guests: string;
  preferences: string;
  notes: string;
  action: ActionType;
}
 
 interface ReservationDetails {
   id: string;
   customerName: string;
   date: string;
   time: string;
   guests: string;
   preferences: string;
 }
 
 const generateReservationId = (): string => {
   const timestamp = Date.now().toString(36).toUpperCase();
   const random = Math.random().toString(36).substring(2, 6).toUpperCase();
   return `SVA-${timestamp}-${random}`;
 };

const timeSlots = [
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
  "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM",
  "9:00 PM", "9:30 PM", "10:00 PM", "10:30 PM", "11:00 PM", "11:30 PM",
];

const guestOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"];

const Reservations = () => {
  const { toast } = useToast();
   const { language, t } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
   const [reservationDetails, setReservationDetails] = useState<ReservationDetails | null>(null);
  const [formData, setFormData] = useState<FormData>({
    customerName: "",
    phone: "",
    email: "",
    date: undefined,
    time: "",
    guests: "",
    preferences: "",
    notes: "",
    action: "create",
  });

  const handleInputChange = (field: keyof FormData, value: string | Date | undefined) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setIsSuccess(false);
     setReservationDetails(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.customerName || !formData.phone || !formData.date || !formData.time || !formData.guests) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    const reservationId = generateReservationId();
    const now = new Date().toISOString();
    
    // Generate time slot key (e.g., "2026-02-06_16:30")
    const timeSlotKey = formData.date && formData.time 
      ? `${format(formData.date, "yyyy-MM-dd")}_${formData.time.replace(/\s/g, '').replace('PM', '').replace('AM', '')}`
      : "";

    const payload = {
      // Core identification
      reservation_id: reservationId,
      customer_name: formData.customerName,
      phone: formData.phone,
      email: formData.email || null,
      
      // Reservation details
      reservation_date: formData.date ? format(formData.date, "yyyy-MM-dd") : "",
      reservation_time: formData.time,
      guest_count: formData.guests,
      seating_preference: formData.preferences || "no_preference",
      special_requests: formData.notes || null,
      
      // Status and tracking
      status: "pending",
      action_source: "website_form",
      reservation_type: "standard",
      time_slot_key: timeSlotKey,
      
      // Capacity and assignment (to be filled by backend)
      capacity_used: parseInt(formData.guests) || 1,
      table_assigned: null,
      
      // Confirmation tracking
      confirmation_sent: false,
      confirmation_channel: null,
      handled_by: null,
      
      // Change tracking
      change_reason: formData.action === "update" ? "customer_request" : formData.action === "delete" ? "customer_cancellation" : null,
      
      // Timestamps
      created_at: now,
      last_updated: now,
      
      // Internal notes
      customer_notes_internal: null,
      booking_confidence: "high",
      
      // Action type for workflow
      action: formData.action,
    };

    try {
      console.log("Submitting reservation via edge function:", payload);
      
      const { data, error } = await supabase.functions.invoke('reservation-webhook', {
        body: payload,
      });

      if (error) {
        throw new Error(error.message || "Failed to submit reservation");
      }

      console.log("Edge function response:", data);
      
       // Generate reservation details for the card
       setReservationDetails({
         id: reservationId,
         customerName: formData.customerName,
         date: formData.date ? format(formData.date, "MMMM d, yyyy") : "",
         time: formData.time,
         guests: formData.guests,
         preferences: formData.preferences,
       });
       
      setIsSuccess(true);
      toast({
        title: language === "ur" ? "درخواست موصول ہوئی" : "Request Received",
        description: language === "ur" 
          ? "آپ کی بکنگ کی درخواست موصول ہو گئی ہے۔" 
          : "Your booking request has been received. Our system is confirming availability.",
      });
    } catch (error) {
      console.error("Error submitting reservation:", error);
      toast({
        title: language === "ur" ? "کچھ غلط ہو گیا" : "Something went wrong",
        description: language === "ur" 
          ? "براہ کرم دوبارہ کوشش کریں یا ہم سے براہ راست رابطہ کریں۔"
          : "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getButtonText = () => {
    switch (formData.action) {
      case "create":
        return "Confirm Reservation";
      case "update":
        return "Update Reservation";
      case "delete":
        return "Cancel Reservation";
    }
  };

  const getButtonVariant = () => {
    return formData.action === "delete" ? "destructive" : "gold";
  };

  return (
    <Layout>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-primary text-sm uppercase tracking-widest mb-3">
              {language === "ur" ? "ریزرویشن" : "Reservations"}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              {language === "ur" ? "اپنی ٹیبل بک کریں" : "Book Your Table"}
            </h1>
            <div className="divider-gold mb-6" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              {language === "ur" 
                ? "سیوا میں اپنی ٹیبل ریزرو کرنے کے لیے نیچے فارم مکمل کریں۔"
                : "Complete the form below to reserve your table at Sevva."}
            </p>
          </div>

          {/* Success State with Invitation Card */}
          {isSuccess && reservationDetails && formData.action !== "delete" && (
            <div className="max-w-md mx-auto mb-12">
              <div className="text-center mb-6">
                <CheckCircle className="text-primary mx-auto mb-3" size={48} />
                <h2 className="font-serif text-2xl text-foreground mb-2">
                  {language === "ur" ? "بکنگ کی درخواست موصول!" : "Booking Request Received!"}
                </h2>
                <p className="text-muted-foreground text-sm">
                  {language === "ur" 
                    ? "آپ کا دعوت نامہ تیار ہے۔ براہ کرم اسے ڈاؤن لوڈ کریں۔"
                    : "Your invitation card is ready. Please download it for your records."}
                </p>
              </div>
              <ReservationCard
                reservationId={reservationDetails.id}
                customerName={reservationDetails.customerName}
                date={reservationDetails.date}
                time={reservationDetails.time}
                guests={reservationDetails.guests}
                preferences={reservationDetails.preferences}
              />
            </div>
          )}

          {/* Delete Success State */}
          {isSuccess && formData.action === "delete" && (
            <div className="max-w-2xl mx-auto mb-8 p-6 rounded-lg bg-destructive/10 border border-destructive/30 flex items-start gap-4">
              <CheckCircle className="text-destructive shrink-0 mt-0.5" size={24} />
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1">
                  {language === "ur" ? "ریزرویشن منسوخ کر دی گئی" : "Reservation Cancelled"}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {language === "ur" 
                    ? "آپ کی منسوخی کی درخواست موصول ہو گئی ہے۔"
                    : "Your cancellation request has been received."}
                </p>
              </div>
            </div>
          )}

          {/* Reservation Form */}
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="bg-card rounded-lg border border-border p-6 md:p-8 space-y-8">
              {/* Action Type */}
              <div className="space-y-3">
                <Label className="text-foreground font-serif text-lg">
                  {language === "ur" ? "آپ کیا کرنا چاہیں گے؟" : "What would you like to do?"}
                </Label>
                <RadioGroup
                  value={formData.action}
                  onValueChange={(value) => handleInputChange("action", value as ActionType)}
                  className="flex flex-wrap gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="create" id="create" />
                    <Label htmlFor="create" className="cursor-pointer">
                      {language === "ur" ? "نئی ریزرویشن" : "New Reservation"}
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="update" id="update" />
                    <Label htmlFor="update" className="cursor-pointer">
                      {language === "ur" ? "موجودہ کو اپ ڈیٹ کریں" : "Update Existing"}
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="delete" id="delete" />
                    <Label htmlFor="delete" className="cursor-pointer">
                      {language === "ur" ? "ریزرویشن منسوخ کریں" : "Cancel Reservation"}
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="h-px bg-border" />

              {/* Contact Information */}
              <div className="space-y-6">
                <h2 className="font-serif text-xl text-foreground">
                  {language === "ur" ? "رابطے کی معلومات" : "Contact Information"}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="customerName">
                      {language === "ur" ? "پورا نام" : "Full Name"} <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="customerName"
                      placeholder={language === "ur" ? "اپنا پورا نام درج کریں" : "Enter your full name"}
                      value={formData.customerName}
                      onChange={(e) => handleInputChange("customerName", e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">
                      {language === "ur" ? "فون نمبر" : "Phone Number"} <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+92 300 0000000"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">
                    {language === "ur" ? "ای میل (اختیاری)" : "Email (Optional)"}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={language === "ur" ? "آپ کا ای میل" : "your@email.com"}
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />
                </div>
              </div>

              <div className="h-px bg-border" />

              {/* Reservation Details */}
              <div className="space-y-6">
                <h2 className="font-serif text-xl text-foreground">
                  {language === "ur" ? "ریزرویشن کی تفصیلات" : "Reservation Details"}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Date */}
                  <div className="space-y-2">
                    <Label>
                      {language === "ur" ? "ریزرویشن کی تاریخ" : "Reservation Date"} <span className="text-destructive">*</span>
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !formData.date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formData.date ? format(formData.date, "PPP") : (language === "ur" ? "تاریخ منتخب کریں" : "Select date")}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={formData.date}
                          onSelect={(date) => handleInputChange("date", date)}
                          disabled={(date) => date < new Date()}
                          initialFocus
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Time */}
                  <div className="space-y-2">
                    <Label>
                      {language === "ur" ? "ریزرویشن کا وقت" : "Reservation Time"} <span className="text-destructive">*</span>
                    </Label>
                    <Select
                      value={formData.time}
                      onValueChange={(value) => handleInputChange("time", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder={language === "ur" ? "وقت منتخب کریں" : "Select time"} />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Guests */}
                  <div className="space-y-2">
                    <Label>
                      {language === "ur" ? "مہمانوں کی تعداد" : "Number of Guests"} <span className="text-destructive">*</span>
                    </Label>
                    <Select
                      value={formData.guests}
                      onValueChange={(value) => handleInputChange("guests", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder={language === "ur" ? "مہمان منتخب کریں" : "Select guests"} />
                      </SelectTrigger>
                      <SelectContent>
                        {guestOptions.map((num) => (
                          <SelectItem key={num} value={num}>
                            {num} {num === "1" ? (language === "ur" ? "مہمان" : "Guest") : (language === "ur" ? "مہمان" : "Guests")}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Seating Preference */}
                  <div className="space-y-2">
                    <Label>
                      {language === "ur" ? "نشست کی ترجیح (اختیاری)" : "Seating Preference (Optional)"}
                    </Label>
                    <Select
                      value={formData.preferences}
                      onValueChange={(value) => handleInputChange("preferences", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder={language === "ur" ? "کوئی ترجیح نہیں" : "No preference"} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="indoor">{language === "ur" ? "اندر" : "Indoor"}</SelectItem>
                        <SelectItem value="outdoor">{language === "ur" ? "باہر" : "Outdoor"}</SelectItem>
                        <SelectItem value="private">{language === "ur" ? "نجی" : "Private"}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Special Requests */}
                <div className="space-y-2">
                  <Label htmlFor="notes">
                    {language === "ur" ? "خصوصی درخواستیں (اختیاری)" : "Special Requests (Optional)"}
                  </Label>
                  <Textarea
                    id="notes"
                    placeholder={language === "ur" 
                      ? "کوئی خوراکی ضروریات، تقریبات، یا خصوصی درخواستیں..."
                      : "Any dietary requirements, celebrations, or special requests..."}
                    value={formData.notes}
                    onChange={(e) => handleInputChange("notes", e.target.value)}
                    rows={3}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant={getButtonVariant()}
                size="lg"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    {language === "ur" ? "پروسیسنگ..." : "Processing..."}
                  </>
                ) : (
                  formData.action === "create" 
                    ? (language === "ur" ? "ریزرویشن کی تصدیق کریں" : "Confirm Reservation")
                    : formData.action === "update"
                    ? (language === "ur" ? "ریزرویشن اپ ڈیٹ کریں" : "Update Reservation")
                    : (language === "ur" ? "ریزرویشن منسوخ کریں" : "Cancel Reservation")
                )}
              </Button>

              {/* Info Note */}
              <div className="flex items-start gap-3 p-4 rounded-md bg-muted/50 text-sm">
                <AlertCircle className="text-muted-foreground shrink-0 mt-0.5" size={16} />
                <p className="text-muted-foreground">
                  {language === "ur" 
                    ? "یہ فارم ریزرویشن کی درخواست جمع کراتا ہے۔ حتمی تصدیق ہماری ٹیم فون یا واٹس ایپ کے ذریعے فراہم کرے گی۔"
                    : "This form submits a reservation request. Final confirmation will be provided by our team via phone or WhatsApp."}
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Reservations;
