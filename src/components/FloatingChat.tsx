import { MessageCircle } from 'lucide-react';

export default function FloatingChat() {
  return (
    <a
      href="https://wa.me/919412939707?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20Su-Jok%20therapy."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#1f9d55] px-4 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
    >
      <MessageCircle size={20} /> <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}
