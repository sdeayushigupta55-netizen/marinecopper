import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact"  className="relative overflow-hidden bg-[#fffaf6]  py-14 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
     <div className="mx-auto max-w-3xl text-center">

  <p className="inline-block rounded-full bg-[#fff2e6] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.35em] text-[#b87333] border border-[#f1d9c6]">
    Contact
  </p>

  <h2 className="mt-5 text-4xl font-black text-[#5b351d] sm:text-5xl">
    Get In Touch
  </h2>

  <p className="mt-5 text-base leading-8 text-[#6b4a34] sm:text-lg">
    Have questions or want to partner with us? Reach out anytime.
  </p>

</div>

        {/* Contact Info Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          
          <div className="rounded-[28px] border border-[#f1e3d4] bg-white p-8 text-center">
            <Phone className="mx-auto text-[#b87333]" size={32} />

            <h3 className="mt-4 font-bold text-[#5b351d]">Call Us</h3>

            <a
              href="tel:+917409955535"
              className="mt-2 inline-block text-[#6b4a34] transition hover:text-[#b87333]"
            >
              +91 7409955535
            </a>
          </div>

          <div className="rounded-[28px] border border-[#f1e3d4] bg-white p-8 text-center">
            <Mail className="mx-auto text-[#b87333]" size={32} />

            <h3 className="mt-4 font-bold text-[#5b351d]">Email</h3>

            <a
              href="mailto:marinebeveragespvr@gmail.com"
              className="mt-2 inline-block break-all text-[#6b4a34] transition hover:text-[#b87333]"
            >
              marinebeveragespvr@gmail.com
            </a>
          </div>

          <div className="rounded-[28px] border border-[#f1e3d4] bg-white p-8 text-center">
            <MapPin className="mx-auto text-[#b87333]" size={32} />

            <h3 className="mt-4 font-bold text-[#5b351d]">Location</h3>

            <p className="mt-2 text-sm text-[#6b4a34]">
            YAMUNA SHAKTI DHAM GOKUL, 21/22, Gokul, Mathura, Uttar Pradesh 281303
            </p>
          </div>

        </div>

        {/* Contact Form */}
        <div className="mt-16 mx-auto max-w-3xl rounded-[28px] border border-[#f1e3d4] bg-white p-8 shadow-sm">

          <h3 className="text-2xl font-bold text-[#5b351d] text-center">
            Send Us a Message
          </h3>

          <form className="mt-8 grid gap-6">

            {/* Name */}
            <div>
              <label className="text-sm font-medium text-[#6b4a34]">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="mt-2 w-full rounded-xl border border-[#e9d9c7] px-4 py-3 text-sm outline-none focus:border-[#b87333]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-[#6b4a34]">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="mt-2 w-full rounded-xl border border-[#e9d9c7] px-4 py-3 text-sm outline-none focus:border-[#b87333]"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm font-medium text-[#6b4a34]">
                Phone Number
              </label>

              <input
                type="tel"
                placeholder="Enter your phone number"
                className="mt-2 w-full rounded-xl border border-[#e9d9c7] px-4 py-3 text-sm outline-none focus:border-[#b87333]"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-sm font-medium text-[#6b4a34]">
                Message
              </label>

              <textarea
                rows="4"
                placeholder="Write your message..."
                className="mt-2 w-full rounded-xl border border-[#e9d9c7] px-4 py-3 text-sm outline-none focus:border-[#b87333]"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="mt-2 rounded-full bg-[#b87333] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#9f622c]"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}