import React, { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const quickReplies = [
  "250 ml price",
  "500 ml price",
  "1 L price",
  "20 L jar price",
  "Need bulk order",
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi 👋 Welcome to Marine Copper. How can I help you?",
    },
  ]);
  const [input, setInput] = useState("");

  const getBotReply = (text) => {
    const msg = text.toLowerCase();

    if (msg.includes("250")) {
      return "250 ml Pack of 48 bottles — Rs 220";
    }
    if (msg.includes("500")) {
      return "500 ml Pack of 24 bottles — Rs 180";
    }
    if (msg.includes("1 l") || msg.includes("1l") || msg.includes("1 liter")) {
      return "1 L Pack of 12 bottles — Rs 150";
    }
    if (msg.includes("2 l") || msg.includes("2l") || msg.includes("2 liter")) {
      return "2 L Pack of 9 bottles — Rs 120";
    }
    if (msg.includes("5 l") || msg.includes("5l") || msg.includes("5 liter")) {
      return "5 L Jar — Rs 50";
    }
    if (
      msg.includes("20 l") ||
      msg.includes("20l") ||
      msg.includes("20 liter")
    ) {
      return "20 L Jar — Rs 80";
    }
    if (msg.includes("bulk") || msg.includes("order")) {
      return "For bulk orders, please connect with us on WhatsApp or use the enquiry form.";
    }
    if (msg.includes("hello") || msg.includes("hi")) {
      return "Hello 👋 How can I help you with our water products?";
    }

    return "Please ask about bottle size, jar price, or bulk order details.";
  };

  const sendMessage = (text) => {
    if (!text.trim()) return;

    const userMessage = { from: "user", text };
    const botMessage = { from: "bot", text: getBotReply(text) };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  };

  return (
    <>
      {/* floating chatbot button */}
<div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">

  {/* animated text */}
  {!isOpen && (
    <div className="animate-bounce rounded-full bg-white px-3 py-1 text-xs font-medium text-[#5b351d] shadow-md">
      We're here to help 👋
    </div>
  )}

  <button
    onClick={() => setIsOpen(!isOpen)}
    className="flex h-14 w-14 items-center justify-center rounded-full bg-[#b87333] text-white shadow-lg transition hover:scale-105"
  >
    {isOpen ? (
      <X size={24} />
    ) : (
      <span className="text-3xl">💬</span>
    )}
  </button>

</div>

      {/* chatbot box */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[340px] overflow-hidden rounded-3xl border border-[#e8d2bc] bg-white shadow-2xl">
          {/* header */}
          <div className="bg-[#b87333] px-4 py-4 text-white">
            <h3 className="text-lg font-bold">Marine Copper</h3>
            <p className="text-sm text-white/90">
              Ask us about products & pricing
            </p>
          </div>

          {/* messages */}
          <div className="h-80 space-y-3 overflow-y-auto bg-[#fffaf6] p-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.from === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm leading-6 ${
                    msg.from === "user"
                      ? "bg-[#b87333] text-white"
                      : "bg-white text-[#5b351d] shadow-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* quick replies */}
          <div className="flex flex-wrap gap-2 border-t border-[#f0dfcf] bg-white px-3 py-3">
            {quickReplies.map((item) => (
              <button
                key={item}
                onClick={() => sendMessage(item)}
                className="rounded-full border border-[#dfc0a2] px-3 py-1 text-xs font-medium text-[#a86430] transition hover:bg-[#fff4ea]"
              >
                {item}
              </button>
            ))}
          </div>

          {/* whatsapp CTA */}
          <div className="border-t border-[#f0dfcf] bg-[#fffaf6] px-3 py-3">
            <a
              href="https://wa.me/917409955535?text=Hello%20Marine%20Copper!%20I%20have%20a%20query%20regarding%20your%20products."
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
            >
              Continue on WhatsApp
            </a>
          </div>

          {/* input */}
          <div className="flex items-center gap-2 border-t border-[#f0dfcf] bg-white p-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
              placeholder="Type your message..."
              className="flex-1 rounded-full border border-[#e5ccb4] px-4 py-2 text-sm outline-none focus:border-[#b87333]"
            />
            <button
              onClick={() => sendMessage(input)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#b87333] text-white transition hover:bg-[#9f6229]"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}