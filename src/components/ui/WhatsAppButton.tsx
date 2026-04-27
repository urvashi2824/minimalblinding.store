"use client";

import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  className?: string;
  variant?: "floating" | "button";
  label?: string;
}

export default function WhatsAppButton({
  phoneNumber,
  message = "Hi, I'm interested in your jewelry!",
  className,
  variant = "button",
  label = "Chat on WhatsApp",
}: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  if (variant === "floating") {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group",
          className
        )}
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={28} fill="currentColor" />
        <span className="absolute right-full mr-4 bg-white text-brand-charcoal px-3 py-1 rounded-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md">
          Need help? Chat with us!
        </span>
      </a>
    );
  }

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 bg-brand-gold text-white px-6 py-3 rounded-full font-medium hover:bg-brand-charcoal transition-colors duration-300",
        className
      )}
    >
      <MessageCircle size={20} />
      {label}
    </a>
  );
}
