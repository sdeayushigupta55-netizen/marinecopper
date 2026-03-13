import React, { useState } from "react";
import { Phone, Mail } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Clientele", href: "#clientele" },
  { name: "Work With Us", href: "#work" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top Info Bar */}
      <div className="border-b border-[#eadcca] bg-[#fff7ef]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-2 text-xs text-[#7a4c2c] sm:flex-row sm:px-6 lg:px-8">
          <a
            href="tel:+91 7409955535"
            className="flex items-center gap-2 font-medium transition hover:text-[#b87333]"
          >
            <Phone className="h-4 w-4 text-[#b87333]" strokeWidth={2} />
            <span>+91 7409955535</span>
          </a>

          <a
            href="mailto:marinebeveragespvr@gmail.com
"
            className="flex items-center gap-2 font-medium transition hover:text-[#b87333]"
          >
            <Mail className="h-4 w-4 text-[#b87333]" strokeWidth={2} />
            <span>marinebeveragespvr@gmail.com
</span>
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="border-b border-[#eadcca] bg-white/90 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center ">
            <div className="flex h-15 w-30 items-center justify-center">
  <img
    src="/logo.png"
    alt="Marine Copper Logo"
    className="w-auto object-contain"
  />
</div>

            <div className="leading-tight">
              <h2 className="text-base font-bold tracking-wide text-[#6b4423] sm:text-xl">
                MARINE COPPER
              </h2>
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#b87333] sm:text-xs">
                Premium Drinking Water
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#5a3922] transition hover:text-[#b87333]"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              className="rounded-full bg-[#b87333] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#9f622c]"
            >
              Partner With Us
            </a>
          </nav>

          <button
            type="button"
            className="flex flex-col gap-1.5 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <span className="h-0.5 w-6 bg-[#6b4423]"></span>
            <span className="h-0.5 w-6 bg-[#6b4423]"></span>
            <span className="h-0.5 w-6 bg-[#6b4423]"></span>
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            menuOpen ? "max-h-[520px] border-t border-[#eadcca]" : "max-h-0"
          }`}
        >
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <div className="flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-md">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-[#5a3922] transition hover:text-[#b87333]"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="rounded-full bg-[#b87333] px-5 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-[#9f622c]"
              >
                Partner With Us
              </a>

              <div className="mt-3 space-y-3 border-t border-[#f1e3d4] pt-4 text-sm text-[#7a4c2c]">
                <a
                  href="tel:+91 7409955535"
                  className="flex items-center gap-2 transition hover:text-[#b87333]"
                >
                  <Phone
                    className="h-4 w-4 shrink-0 text-[#b87333]"
                    strokeWidth={2}
                  />
                  <span>+91 7409955535</span>
                </a>

                <a
                  href="mailto:marinebeveragespvr@gmail.com
"
                  className="flex items-center gap-2 transition hover:text-[#b87333]"
                >
                  <Mail
                    className="h-4 w-4 shrink-0 text-[#b87333]"
                    strokeWidth={2}
                  />
                  <span>marinebeveragespvr@gmail.com
</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}