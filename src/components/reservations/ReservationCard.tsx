 import { useRef } from "react";
 import html2canvas from "html2canvas";
 import { Button } from "@/components/ui/button";
 import { Download, Calendar, Clock, Users, MapPin } from "lucide-react";
 import { useLanguage } from "@/contexts/LanguageContext";
 
 interface ReservationCardProps {
   reservationId: string;
   customerName: string;
   date: string;
   time: string;
   guests: string;
   preferences?: string;
 }
 
 export function ReservationCard({
   reservationId,
   customerName,
   date,
   time,
   guests,
   preferences,
 }: ReservationCardProps) {
   const cardRef = useRef<HTMLDivElement>(null);
   const { language } = useLanguage();
 
   const handleDownload = async () => {
     if (!cardRef.current) return;
     
     try {
       const canvas = await html2canvas(cardRef.current, {
         backgroundColor: null,
         scale: 2,
         useCORS: true,
       });
       
       const link = document.createElement("a");
       link.download = `sevva-reservation-${reservationId}.png`;
       link.href = canvas.toDataURL("image/png");
       link.click();
     } catch (error) {
       console.error("Error generating image:", error);
     }
   };
 
   return (
     <div className="space-y-4">
       {/* Downloadable Card */}
       <div
         ref={cardRef}
         className="relative overflow-hidden rounded-xl bg-gradient-to-br from-charcoal-deep via-charcoal to-charcoal-deep p-1"
       >
         {/* Inner Card with Cultural Border Pattern */}
         <div className="relative rounded-lg bg-gradient-to-br from-charcoal-deep to-charcoal p-6 md:p-8">
           {/* Cultural Pattern Overlay */}
           <div 
             className="absolute inset-0 opacity-5"
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
             }}
           />
           
           {/* Corner Decorations */}
           <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-primary/40 rounded-tl-lg" />
           <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-primary/40 rounded-tr-lg" />
           <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-primary/40 rounded-bl-lg" />
           <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-primary/40 rounded-br-lg" />
 
           {/* Header */}
           <div className="relative text-center mb-6">
             <div className="flex items-center justify-center gap-3 mb-2">
               <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/60" />
               <span className="text-primary text-xs uppercase tracking-[0.3em]">
                 {language === "ur" ? "دعوت نامہ" : "Invitation"}
               </span>
               <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/60" />
             </div>
             <h2 className="font-serif text-3xl md:text-4xl text-gradient-gold tracking-wider">
               SEVVA
             </h2>
             <p className="text-muted-foreground text-sm mt-1">
               {language === "ur" ? "ذائقوں کا تجربہ" : "A Culinary Experience"}
             </p>
           </div>
 
           {/* Decorative Divider */}
           <div className="flex items-center justify-center gap-2 mb-6">
             <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40" />
             <div className="w-2 h-2 rotate-45 border border-primary/60" />
             <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40" />
           </div>
 
           {/* Guest Name */}
           <div className="text-center mb-6">
             <p className="text-muted-foreground text-sm mb-1">
               {language === "ur" ? "محترم مہمان" : "Dear Guest"}
             </p>
             <p className="font-serif text-2xl text-foreground">{customerName}</p>
           </div>
 
           {/* Reservation Details */}
           <div className="grid grid-cols-2 gap-4 mb-6">
             <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
               <Calendar className="text-primary shrink-0" size={18} />
               <div>
                 <p className="text-xs text-muted-foreground">
                   {language === "ur" ? "تاریخ" : "Date"}
                 </p>
                 <p className="text-foreground text-sm font-medium">{date}</p>
               </div>
             </div>
             <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
               <Clock className="text-primary shrink-0" size={18} />
               <div>
                 <p className="text-xs text-muted-foreground">
                   {language === "ur" ? "وقت" : "Time"}
                 </p>
                 <p className="text-foreground text-sm font-medium">{time}</p>
               </div>
             </div>
             <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
               <Users className="text-primary shrink-0" size={18} />
               <div>
                 <p className="text-xs text-muted-foreground">
                   {language === "ur" ? "مہمانان" : "Guests"}
                 </p>
                 <p className="text-foreground text-sm font-medium">{guests}</p>
               </div>
             </div>
             <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
               <MapPin className="text-primary shrink-0" size={18} />
               <div>
                 <p className="text-xs text-muted-foreground">
                   {language === "ur" ? "نشست" : "Seating"}
                 </p>
                 <p className="text-foreground text-sm font-medium capitalize">
                   {preferences || (language === "ur" ? "کوئی ترجیح نہیں" : "No preference")}
                 </p>
               </div>
             </div>
           </div>
 
           {/* Reservation ID */}
           <div className="text-center p-3 rounded-lg bg-primary/5 border border-primary/20 mb-6">
             <p className="text-xs text-muted-foreground mb-1">
               {language === "ur" ? "ریزرویشن آئی ڈی" : "Reservation ID"}
             </p>
             <p className="font-mono text-primary text-lg tracking-wider">{reservationId}</p>
           </div>
 
           {/* Footer Note */}
           <div className="text-center">
             <p className="text-muted-foreground text-xs leading-relaxed">
               {language === "ur" 
                 ? "براہ کرم اپنی بکنگ کی تصدیق کے لیے یہ کارڈ دکھائیں"
                 : "Please present this card to confirm your booking"}
             </p>
           </div>
 
           {/* Bottom Decorative Line */}
           <div className="flex items-center justify-center gap-2 mt-6">
             <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary/40" />
             <div className="text-primary text-lg">✦</div>
             <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary/40" />
           </div>
 
           {/* Branding */}
           <p className="text-center text-muted-foreground/50 text-[10px] mt-4 tracking-widest uppercase">
             Powered by Effat
           </p>
         </div>
       </div>
 
       {/* Download Button */}
       <Button
         onClick={handleDownload}
         variant="gold"
         className="w-full"
       >
         <Download size={18} />
         {language === "ur" ? "دعوت نامہ ڈاؤن لوڈ کریں" : "Download Invitation"}
       </Button>
     </div>
   );
 }