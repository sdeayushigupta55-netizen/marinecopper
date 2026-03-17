import {
  Phone,
  Mail,
  Linkedin,
  Facebook,
  Instagram,
  YoutubeIcon,
  X 
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#5b351d] pb-8 pt-14 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
             {/* social media */}
            <div className="mt-5">
             

              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/profile.php?id=61587736598900"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
                >
                  <Facebook size={18} />
                </a>

                <a
                  href="https://www.instagram.com/marine_copper/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
                >
                  <Instagram size={18} />
                </a>

                <a
                  href="https://www.youtube.com/@marinebeverages-braj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
                >
                  <YoutubeIcon size={18} />
                </a>
                <a
                  href="https://x.com/MarineBeverages"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
                >
                  <X size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* quick links */}
          <div>
            <h4 className="text-lg font-semibold">Quick Links</h4>

            <ul className="mt-4 space-y-2 text-sm text-[#e9d6c4]">
              <li>
                <a href="#about" className="transition hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#products" className="transition hover:text-white">
                  Products
                </a>
              </li>
              <li>
                <a href="#clientele" className="transition hover:text-white">
                  Clientele
                </a>
              </li>
              <li>
                <a href="#work" className="transition hover:text-white">
                  Work With Us
                </a>
              </li>
              <li>
                <a href="#contact" className="transition hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* contact */}
          <div>
            <h4 className="text-lg font-semibold">Contact</h4>

            <div className="mt-4 space-y-3 text-sm text-[#e9d6c4]">
              <a
                href="tel:+917409955535"
                className="flex items-center gap-2 transition hover:text-white"
              >
                <Phone size={16} />
                <span>+91 7409955535</span>
              </a>

              <a
                href="mailto:marinebeveragespvr@gmail.com"
                className="flex items-start gap-2 transition hover:text-white"
              >
                <Mail size={16} className="mt-0.5 shrink-0" />
                <span className="break-all">
                  marinebeveragespvr@gmail.com
                </span>
              </a>
            </div>

           
          </div>
        </div>

        {/* bottom */}
        <div className="mt-10 space-y-2 border-t border-white/20 pt-6 text-center text-sm text-[#e9d6c4]">
          <p>
            © {new Date().getFullYear()} Marine Copper. All rights reserved.
          </p>

          <a
            href="https://www.linkedin.com/in/ayushi-gupta-89861315b/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-xs transition hover:text-white"
          >
            Website Developed by
            <span className="font-semibold text-white">Ayushi Gupta</span>
            <Linkedin size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}