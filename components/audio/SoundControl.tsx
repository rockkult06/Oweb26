"use client";

import { useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function SoundControl() {
  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show sound control after a delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    // Future: Add actual audio control logic here
    // For now, this is just a UI component
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Button
        variant="outline"
        size="icon"
        onClick={toggleMute}
        className={cn(
          "glass rounded-full w-12 h-12 border-white/20 hover:border-primary/50 transition-all duration-300",
          isMuted && "opacity-60"
        )}
        aria-label={isMuted ? "Unmute ambient sound" : "Mute ambient sound"}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5" />
        ) : (
          <Volume2 className="w-5 h-5" />
        )}
      </Button>
    </div>
  );
}

