import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => (
  <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
    <a
      href="https://wa.me/918767274158"
      target="_blank"
      rel="noopener noreferrer"
      className="w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] text-[hsl(0,0%,100%)] flex items-center justify-center shadow-lg transition-transform hover:scale-110"
      aria-label="WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
    <a
      href="tel:+918767274158"
      className="w-14 h-14 rounded-full gradient-accent text-accent-foreground flex items-center justify-center shadow-lg transition-transform hover:scale-110"
      aria-label="Call"
    >
      <Phone size={26} />
    </a>
  </div>
);

export default FloatingButtons;
