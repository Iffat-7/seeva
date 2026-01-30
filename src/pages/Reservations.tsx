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

const timeSlots = [
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
  "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM",
  "9:00 PM", "9:30 PM", "10:00 PM", "10:30 PM", "11:00 PM", "11:30 PM",
];

const guestOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"];

const WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/25980709/fc033904ad2f4cd597d89c4103eb5b86/";

const Reservations = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
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

    const payload = {
      action: formData.action,
      customer_name: formData.customerName,
      phone: formData.phone,
      email: formData.email || "",
      date: formData.date ? format(formData.date, "yyyy-MM-dd") : "",
      time: formData.time,
      guests: formData.guests,
      preferences: formData.preferences || "",
      notes: formData.notes || "",
    };

    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify(payload),
      });

      setIsSuccess(true);
      toast({
        title: "Request Received",
        description: "Your booking request has been received. Our system is confirming availability.",
      });
    } catch (error) {
      console.error("Error submitting reservation:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
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
            <p className="text-primary text-sm uppercase tracking-widest mb-3">Reservations</p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Book Your Table
            </h1>
            <div className="divider-gold mb-6" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              Complete the form below and our booking system will confirm your reservation shortly.
            </p>
          </div>

          {/* Success State */}
          {isSuccess && (
            <div className="max-w-2xl mx-auto mb-8 p-6 rounded-lg bg-primary/10 border border-primary/30 flex items-start gap-4">
              <CheckCircle className="text-primary shrink-0 mt-0.5" size={24} />
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1">Your booking request has been received.</h3>
                <p className="text-muted-foreground text-sm">Our system is confirming availability. You'll receive a confirmation shortly via phone or WhatsApp.</p>
              </div>
            </div>
          )}

          {/* Reservation Form */}
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="bg-card rounded-lg border border-border p-6 md:p-8 space-y-8">
              {/* Action Type */}
              <div className="space-y-3">
                <Label className="text-foreground font-serif text-lg">What would you like to do?</Label>
                <RadioGroup
                  value={formData.action}
                  onValueChange={(value) => handleInputChange("action", value as ActionType)}
                  className="flex flex-wrap gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="create" id="create" />
                    <Label htmlFor="create" className="cursor-pointer">New Reservation</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="update" id="update" />
                    <Label htmlFor="update" className="cursor-pointer">Update Existing</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="delete" id="delete" />
                    <Label htmlFor="delete" className="cursor-pointer">Cancel Reservation</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="h-px bg-border" />

              {/* Contact Information */}
              <div className="space-y-6">
                <h2 className="font-serif text-xl text-foreground">Contact Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="customerName">
                      Full Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="customerName"
                      placeholder="Enter your full name"
                      value={formData.customerName}
                      onChange={(e) => handleInputChange("customerName", e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">
                      Phone Number <span className="text-destructive">*</span>
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
                  <Label htmlFor="email">Email (Optional)</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />
                </div>
              </div>

              <div className="h-px bg-border" />

              {/* Reservation Details */}
              <div className="space-y-6">
                <h2 className="font-serif text-xl text-foreground">Reservation Details</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Date */}
                  <div className="space-y-2">
                    <Label>
                      Reservation Date <span className="text-destructive">*</span>
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
                          {formData.date ? format(formData.date, "PPP") : "Select date"}
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
                      Reservation Time <span className="text-destructive">*</span>
                    </Label>
                    <Select
                      value={formData.time}
                      onValueChange={(value) => handleInputChange("time", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
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
                      Number of Guests <span className="text-destructive">*</span>
                    </Label>
                    <Select
                      value={formData.guests}
                      onValueChange={(value) => handleInputChange("guests", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select guests" />
                      </SelectTrigger>
                      <SelectContent>
                        {guestOptions.map((num) => (
                          <SelectItem key={num} value={num}>
                            {num} {num === "1" ? "Guest" : "Guests"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Seating Preference */}
                  <div className="space-y-2">
                    <Label>Seating Preference (Optional)</Label>
                    <Select
                      value={formData.preferences}
                      onValueChange={(value) => handleInputChange("preferences", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="No preference" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="indoor">Indoor</SelectItem>
                        <SelectItem value="outdoor">Outdoor</SelectItem>
                        <SelectItem value="private">Private</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Special Requests */}
                <div className="space-y-2">
                  <Label htmlFor="notes">Special Requests (Optional)</Label>
                  <Textarea
                    id="notes"
                    placeholder="Any dietary requirements, celebrations, or special requests..."
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
                    Processing...
                  </>
                ) : (
                  getButtonText()
                )}
              </Button>

              {/* Info Note */}
              <div className="flex items-start gap-3 p-4 rounded-md bg-muted/50 text-sm">
                <AlertCircle className="text-muted-foreground shrink-0 mt-0.5" size={16} />
                <p className="text-muted-foreground">
                  This form submits a reservation request. Final confirmation will be provided by our team via phone or WhatsApp.
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
