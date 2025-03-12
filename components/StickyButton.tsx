"use client";
import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";

export default function StickyButton() {
  const pathname = usePathname();

  if (pathname !== "/") return null;

  return (
    <button className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg flex items-center space-x-2 transition-all">
      <MessageCircle size={24} />
      <span>Chat</span>
    </button>
  );
}
