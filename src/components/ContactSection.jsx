import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, MessageCircle, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiry_type: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      loading: true,
      success: false,
      error: "",
    });

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/marinebeveragespvr@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...formData,
            _subject: "New Marine Copper Contact Form Message",
            _template: "table",
            _captcha: "false",
          }),
        }
      );

      const result = await response.json();

      if (result.success === "true" || result.success === true) {
        setStatus({
          loading: false,
          success: true,
          error: "",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          inquiry_type: "",
          message: "",
        });
      } else {
        setStatus({
          loading: false,
          success: false,
          error: "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: "Failed to send message. Please try again.",
      });
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-[#fffaf6] via-[#fff6ef] to-[#fffdf9] py-14 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-[-80px] h-56 w-56 rounded-full bg-[#f7d8b6]/40 blur-3xl sm:h-72 sm:w-72" />
        <div className="absolute bottom-[-80px] right-[-80px] h-64 w-64 rounded-full bg-[#f3c38f]/30 blur-3xl sm:h-80 sm:w-80" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center rounded-full border border-[#efd7c1] bg-white/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.28em] text-[#b87333] shadow-sm backdrop-blur sm:px-4 sm:text-[11px] sm:tracking-[0.38em]">
            Contact
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-[#5b351d] sm:mt-5 sm:text-4xl md:text-5xl lg:text-6xl">
            Let’s Start a Conversation
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#6b4a34] sm:mt-5 sm:text-base sm:leading-8 lg:text-lg">
            Reach out for bulk orders, dealership partnerships, distribution
            inquiries, or general questions about Marine Copper.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:mt-14 lg:grid-cols-[1fr_1.25fr] lg:gap-8">
          <div className="rounded-[24px] border border-[#f1e3d4] bg-white/80 p-4 shadow-[0_20px_60px_rgba(91,53,29,0.08)] backdrop-blur sm:rounded-[28px] sm:p-6 lg:rounded-[32px] lg:p-8">
            <div className="rounded-[22px] bg-gradient-to-br from-[#6b4423] via-[#8a572c] to-[#b87333] p-5 text-white sm:rounded-[24px] sm:p-6 lg:rounded-[28px] lg:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/75 sm:text-xs sm:tracking-[0.35em]">
                Marine Copper
              </p>

              <h3 className="mt-3 text-2xl font-black leading-tight sm:text-3xl lg:text-4xl">
                We’d love to hear from you
              </h3>

              <p className="mt-4 max-w-md text-sm leading-6 text-white/85 sm:text-base sm:leading-7">
                Connect with our team for product inquiries, water supply
                partnerships, retail opportunities, and business collaborations.
              </p>

              <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
                <a
                  href="tel:+917409955535"
                  className="group flex items-start gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 transition hover:bg-white/15"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 sm:h-11 sm:w-11">
                    <Phone size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-white/65 sm:text-xs sm:tracking-[0.25em]">
                      Call Us
                    </p>
                    <p className="mt-1 break-words text-sm font-semibold text-white sm:text-base">
                      +91 7409955535
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:marinebeveragespvr@gmail.com"
                  className="group flex items-start gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 transition hover:bg-white/15"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 sm:h-11 sm:w-11">
                    <Mail size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-white/65 sm:text-xs sm:tracking-[0.25em]">
                      Email
                    </p>
                    <p className="mt-1 break-all text-sm font-semibold text-white sm:text-base">
                      marinebeveragespvr@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/10 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 sm:h-11 sm:w-11">
                    <MapPin size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-white/65 sm:text-xs sm:tracking-[0.25em]">
                      Location
                    </p>
                    <p className="mt-1 break-words text-sm font-semibold leading-6 text-white sm:text-base sm:leading-7">
                      YAMUNA SHAKTI DHAM GOKUL, 21/22, Gokul, Mathura, Uttar
                      Pradesh 281303
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/917409955535"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#7a4a23] transition hover:scale-[1.02] sm:mt-8 sm:w-auto"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-[24px] border border-[#f1e3d4] bg-white/90 p-4 shadow-[0_20px_60px_rgba(91,53,29,0.08)] backdrop-blur sm:rounded-[28px] sm:p-6 md:p-8 lg:rounded-[32px] lg:p-10">
            <div className="flex flex-col gap-3">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#b87333] sm:text-xs sm:tracking-[0.35em]">
                  Send Message
                </p>
                <h3 className="mt-2 text-2xl font-black text-[#5b351d] sm:text-3xl">
                  Get in touch with our team
                </h3>
              </div>

              <p className="max-w-sm text-sm leading-6 text-[#8a6a52]">
                Fill out the form below and we’ll get back to you as soon as
                possible.
              </p>
            </div>

            {status.success && (
              <div className="mt-6 flex items-start gap-3 rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-green-700">
                <CheckCircle2 size={20} className="mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold">Message sent successfully</p>
                  <p className="text-sm">
                    Thank you for contacting Marine Copper. We’ll reach out soon.
                  </p>
                </div>
              </div>
            )}

            {status.error && (
              <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {status.error}
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="mt-6 grid gap-5 sm:mt-8 sm:gap-6"
            >
              <div className="grid gap-5 md:grid-cols-2 md:gap-6">
                <div>
                  <label className="text-sm font-semibold text-[#6b4a34]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="mt-2 h-12 w-full rounded-2xl border border-[#ead8c5] bg-[#fffdfb] px-4 text-sm text-[#5b351d] outline-none transition placeholder:text-[#b69d89] focus:border-[#b87333] focus:ring-4 focus:ring-[#b87333]/10"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-[#6b4a34]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="mt-2 h-12 w-full rounded-2xl border border-[#ead8c5] bg-[#fffdfb] px-4 text-sm text-[#5b351d] outline-none transition placeholder:text-[#b69d89] focus:border-[#b87333] focus:ring-4 focus:ring-[#b87333]/10"
                  />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2 md:gap-6">
                <div>
                  <label className="text-sm font-semibold text-[#6b4a34]">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="mt-2 h-12 w-full rounded-2xl border border-[#ead8c5] bg-[#fffdfb] px-4 text-sm text-[#5b351d] outline-none transition placeholder:text-[#b69d89] focus:border-[#b87333] focus:ring-4 focus:ring-[#b87333]/10"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-[#6b4a34]">
                    Inquiry Type
                  </label>
                  <select
                    name="inquiry_type"
                    value={formData.inquiry_type}
                    onChange={handleChange}
                    className="mt-2 h-12 w-full rounded-2xl border border-[#ead8c5] bg-[#fffdfb] px-4 text-sm text-[#5b351d] outline-none transition focus:border-[#b87333] focus:ring-4 focus:ring-[#b87333]/10"
                  >
                    <option value="">Select inquiry type</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Bulk Order">Bulk Order</option>
                    <option value="Dealership">Dealership</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Distribution">Distribution</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-[#6b4a34]">
                  Message
                </label>
                <textarea
                  rows="5"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirement..."
                  className="mt-2 w-full rounded-2xl border border-[#ead8c5] bg-[#fffdfb] px-4 py-4 text-sm text-[#5b351d] outline-none transition placeholder:text-[#b69d89] focus:border-[#b87333] focus:ring-4 focus:ring-[#b87333]/10 sm:rows-6"
                />
              </div>

              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  disabled={status.loading}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#8b5a2b] via-[#b87333] to-[#d08a45] px-7 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(184,115,51,0.28)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_35px_rgba(184,115,51,0.35)] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                >
                  <Send size={16} />
                  {status.loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-6 rounded-[24px] border border-[#f1e3d4] bg-white/90 p-3 shadow-[0_20px_60px_rgba(91,53,29,0.08)] backdrop-blur sm:mt-8 sm:rounded-[28px] sm:p-4 md:mt-10 md:p-6 lg:rounded-[32px]">
          <div className="mb-4 flex flex-col gap-2 sm:mb-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#b87333] sm:text-xs sm:tracking-[0.35em]">
                Find Us
              </p>
              <h3 className="mt-2 text-xl font-black text-[#5b351d] sm:text-2xl md:text-3xl">
                Visit Marine Beverages
              </h3>
            </div>

            <p className="max-w-md text-sm leading-6 text-[#8a6a52]">
              Locate us easily on Google Maps and visit our facility in Mathura.
            </p>
          </div>

          <div className="overflow-hidden rounded-[20px] border border-[#ead8c5] sm:rounded-[24px]">
            <div className="h-[260px] w-full sm:h-[320px] md:h-[400px] lg:h-[460px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3541.1897936545465!2d77.71239267551513!3d27.43219523757335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397377420a8355a1%3A0x97a01bc9342240fa!2sMARINE%20BEVERAGES!5e0!3m2!1sen!2sin!4v1773503250818!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
                title="Marine Beverages Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}