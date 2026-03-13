import React, { useState } from "react";
import { Phone, Mail, Menu, X } from "lucide-react";

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
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-2 text-[11px] text-[#7a4c2c] sm:flex-row sm:px-6 sm:text-xs lg:px-8">
          <a
            href="tel:+917409955535"
            className="flex items-center gap-2 font-medium transition hover:text-[#b87333]"
          >
            <Phone
              className="h-4 w-4 shrink-0 text-[#b87333]"
              strokeWidth={2}
            />
            <span>+91 7409955535</span>
          </a>

          <a
            href="mailto:marinebeveragespvr@gmail.com"
            className="flex max-w-full items-center gap-2 font-medium transition hover:text-[#b87333]"
          >
            <Mail
              className="h-4 w-4 shrink-0 text-[#b87333]"
              strokeWidth={2}
            />
            <span className="break-all sm:break-normal">
              marinebeveragespvr@gmail.com
            </span>
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="border-b border-[#eadcca] bg-white/95 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
          {/* Logo */}
          <a href="#home" className="flex min-w-0 items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center sm:h-14 sm:w-14">
              <img
                src="/logo.png"
                alt="Marine Copper Logo"
                className="h-full w-full object-contain"
              />
            </div>

            <div className="min-w-0 leading-tight">
              <h2 className="truncate text-sm font-bold tracking-wide text-[#6b4423] sm:text-lg lg:text-xl">
                MARINE COPPER
              </h2>
              <p className="truncate text-[9px] uppercase tracking-[0.18em] text-[#b87333] sm:text-[10px] lg:text-xs">
                Premium Drinking Water
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-5 md:flex lg:gap-7">
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
              className="rounded-full bg-[#b87333] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#9f622c] lg:px-5"
            >
              Partner With Us
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#eadcca] text-[#6b4423] transition hover:bg-[#fff7ef] md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            menuOpen ? "max-h-[500px] border-t border-[#eadcca]" : "max-h-0"
          }`}
        >
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <div className="flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-md">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-1 py-1 text-sm font-medium text-[#5a3922] transition hover:text-[#b87333]"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-1 rounded-full bg-[#b87333] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#9f622c]"
              >
                Partner With Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}