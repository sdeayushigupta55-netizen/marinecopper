import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Linkedin } from "lucide-react";
export default function ContactSection() {
  return (
    <>
      {/* WORK WITH US */}
      <section id="work" className="bg-[#fffaf6] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm uppercase tracking-[0.35em] text-[#b87333] font-semibold">
              Work With Us
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#5b351d] sm:text-5xl">
              Become Our Distributor
            </h2>

            <p className="mt-5 text-[#6b4a34] text-lg leading-8">
              Partner with Marine Copper and bring premium packaged drinking
              water to your city. We are expanding our distribution network
              across retail stores, offices, and hospitality sectors.
            </p>
          </div>

          {/* cards */}
          <div className="mt-16 grid gap-6 md:grid-cols-3">

            <div className="rounded-[28px] bg-white p-8 border border-[#f1e3d4] shadow-sm">
              <h3 className="text-xl font-bold text-[#5b351d]">
                Retail Partnership
              </h3>

              <p className="mt-3 text-[#6e4830] text-sm leading-7">
                Supply Marine Copper bottles to grocery stores, supermarkets,
                and local retailers in your area.
              </p>
            </div>

            <div className="rounded-[28px] bg-white p-8 border border-[#f1e3d4] shadow-sm">
              <h3 className="text-xl font-bold text-[#5b351d]">
                Bulk Distribution
              </h3>

              <p className="mt-3 text-[#6e4830] text-sm leading-7">
                Partner with us for large scale water supply for offices,
                institutions, and corporate spaces.
              </p>
            </div>

            <div className="rounded-[28px] bg-white p-8 border border-[#f1e3d4] shadow-sm">
              <h3 className="text-xl font-bold text-[#5b351d]">
                Event Supply
              </h3>

              <p className="mt-3 text-[#6e4830] text-sm leading-7">
                We supply packaged drinking water for weddings, functions,
                festivals, and public events.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-white py-20 border-t border-[#f1e3d4]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm uppercase tracking-[0.35em] text-[#b87333] font-semibold">
              Contact
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#5b351d] sm:text-5xl">
              Get In Touch
            </h2>

            <p className="mt-5 text-[#6b4a34] text-lg">
              Have questions or want to partner with us? Reach out anytime.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">

            {/* phone */}
            <div className="rounded-[28px] bg-[#fff7ef] p-8 text-center">
              <Phone className="mx-auto text-[#b87333]" size={32} />

              <h3 className="mt-4 font-bold text-[#5b351d]">
                Call Us
              </h3>

              <p className="mt-2 text-[#6b4a34]">
                1800 121 1007
              </p>
            </div>

            {/* email */}
            <div className="rounded-[28px] bg-[#fff7ef] p-8 text-center">
              <Mail className="mx-auto text-[#b87333]" size={32} />

              <h3 className="mt-4 font-bold text-[#5b351d]">
                Email
              </h3>

              <p className="mt-2 text-[#6b4a34]">
                marinebeveragespvr@gmail.com

              </p>
            </div>

            {/* location */}
            <div className="rounded-[28px] bg-[#fff7ef] p-8 text-center">
              <MapPin className="mx-auto text-[#b87333]" size={32} />

              <h3 className="mt-4 font-bold text-[#5b351d]">
                Location
              </h3>

              <p className="mt-2 text-[#6b4a34] text-sm">
                Uttar Pradesh,Mathura,India
              </p>
            </div>

          </div>
        </div>
      </section>

    <footer className="bg-[#5b351d] text-white pt-14 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* main footer */}
        <div className="grid gap-10 md:grid-cols-3">

          {/* brand */}
          <div>
            <div className="flex items-center gap-3">

              <img
                src="/logo.png"
                alt="Marine Copper"
                className="h-12 w-auto object-contain"
              />

              <div>
                <h3 className="text-lg font-bold tracking-wide">
                  MARINE COPPER
                </h3>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#e9d6c4]">
                  Premium Drinking Water
                </p>
              </div>

            </div>

            <p className="mt-4 text-sm leading-7 text-[#e9d6c4]">
              Premium packaged drinking water crafted to deliver purity,
              freshness, and hydration across every bottle size from
              250 ml to 20 L.
            </p>
          </div>

          {/* quick links */}
          <div>
            <h4 className="text-lg font-semibold">
              Quick Links
            </h4>

            <ul className="mt-4 space-y-2 text-sm text-[#e9d6c4]">
              <li>
                <a href="#about" className="hover:text-white transition">
                  About
                </a>
              </li>

              <li>
                <a href="#products" className="hover:text-white transition">
                  Products
                </a>
              </li>

              <li>
                <a href="#clientele" className="hover:text-white transition">
                  Clientele
                </a>
              </li>

              <li>
                <a href="#work" className="hover:text-white transition">
                  Work With Us
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* contact */}
          <div>
            <h4 className="text-lg font-semibold">
              Contact
            </h4>

            <div className="mt-4 space-y-3 text-sm text-[#e9d6c4]">

              <a
                href="tel:18001211007"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <Phone size={16} />
                1800 121 1007
              </a>

              <a
                href="mailto:marinebeveragespvr@gmail.com
"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <Mail size={16} />
                marinebeveragespvr@gmail.com

              </a>

            </div>
          </div>

        </div>

        {/* bottom */}
        <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm text-[#e9d6c4] space-y-2">

          <p>
            © {new Date().getFullYear()} Marine Copper. All rights reserved.
          </p>

          <a
            href="https://www.linkedin.com/in/ayushi-gupta-89861315b/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-xs hover:text-white transition"
          >
            Website Developed by
            <span className="font-semibold text-white">
              Ayushi Gupta
            </span>
            <Linkedin size={14} />
          </a>

        </div>

      </div>
    </footer>
    </>
  );
}