import { useState, useCallback } from "react";
import { useConversation } from "@elevenlabs/react";
import { Mic, MicOff, Phone, PhoneOff, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface VoiceBookingProps {
  className?: string;
}

export function VoiceBooking({ className }: VoiceBookingProps) {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isConnecting, setIsConnecting] = useState(false);

  const conversation = useConversation({
    onConnect: () => {
      console.log("Connected to voice agent");
      toast({
        title: "Connected!",
        description: "You can now speak with our booking assistant.",
      });
    },
    onDisconnect: () => {
      console.log("Disconnected from voice agent");
    },
    onError: (error) => {
      console.error("Voice agent error:", error);
      toast({
        variant: "destructive",
        title: "Connection Error",
        description: "Failed to connect to voice assistant. Please try again.",
      });
    },
  });

  const startConversation = useCallback(async () => {
    setIsConnecting(true);
    try {
      // Request microphone permission
      await navigator.mediaDevices.getUserMedia({ audio: true });

      // Get token from edge function
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/elevenlabs-conversation-token`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to get conversation token");
      }

      const data = await response.json();

      if (!data?.token) {
        throw new Error("No token received");
      }

      // Start the conversation with WebRTC
      await conversation.startSession({
        conversationToken: data.token,
        connectionType: "webrtc",
      });
    } catch (error) {
      console.error("Failed to start conversation:", error);
      toast({
        variant: "destructive",
        title: "Microphone Access Required",
        description: "Please enable microphone access to use voice booking.",
      });
    } finally {
      setIsConnecting(false);
    }
  }, [conversation, toast]);

  const stopConversation = useCallback(async () => {
    await conversation.endSession();
  }, [conversation]);

  const isConnected = conversation.status === "connected";
  const isSpeaking = conversation.isSpeaking;

  return (
    <div className={cn("flex flex-col items-center gap-4", className)}>
      {/* Voice indicator */}
      <div
        className={cn(
          "relative w-24 h-24 rounded-full flex items-center justify-center",
          "bg-gradient-to-br from-primary/20 to-primary/5 border-2",
          isConnected ? "border-primary" : "border-border",
          isSpeaking && "animate-pulse"
        )}
      >
        {/* Ripple effect when speaking */}
        {isSpeaking && (
          <>
            <span className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
            <span className="absolute inset-2 rounded-full bg-primary/10 animate-ping animation-delay-100" />
          </>
        )}
        
        <div
          className={cn(
            "w-16 h-16 rounded-full flex items-center justify-center",
            "bg-primary text-primary-foreground transition-all",
            isSpeaking && "scale-110"
          )}
        >
          {isConnecting ? (
            <Loader2 className="w-8 h-8 animate-spin" />
          ) : isConnected ? (
            isSpeaking ? (
              <Mic className="w-8 h-8" />
            ) : (
              <MicOff className="w-8 h-8 opacity-60" />
            )
          ) : (
            <Phone className="w-8 h-8" />
          )}
        </div>
      </div>

      {/* Status text */}
      <p className="text-sm text-muted-foreground text-center">
        {isConnecting
          ? "Connecting..."
          : isConnected
          ? isSpeaking
            ? "AI is speaking..."
            : "Listening to you..."
          : "Click to start voice booking"}
      </p>

      {/* Action button */}
      {isConnected ? (
        <Button
          variant="destructive"
          size="lg"
          onClick={stopConversation}
          className="gap-2"
        >
          <PhoneOff size={18} />
          {t("voice.stop")}
        </Button>
      ) : (
        <Button
          variant="gold"
          size="lg"
          onClick={startConversation}
          disabled={isConnecting}
          className="gap-2"
        >
          {isConnecting ? (
            <Loader2 size={18} className="animate-spin" />
          ) : (
            <Phone size={18} />
          )}
          {t("voice.start")}
        </Button>
      )}
    </div>
  );
}
