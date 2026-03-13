import React from "react";
import { Droplets, ShieldCheck, Truck } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#fffaf6]  py-14 sm:py-16 md:py-20 lg:py-24" >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center">
         <p className="inline-block rounded-full bg-[#fff2e6] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.35em] text-[#b87333] border border-[#f1d9c6]">
  About Us
</p>

<h2 className="mt-5 text-4xl font-black text-[#5b351d] sm:text-5xl">
  Premium Hydration for Everyday Life
</h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#b87333]" />
        </div>

        {/* Content */}
        <div className="mt-14 grid gap-10 lg:grid-cols-2 items-center">

          {/* Left Text */}
          <div>
            <p className="text-lg leading-8 text-[#6b4a34]">
              <span className="font-semibold text-[#b87333]">
                Marine Copper
              </span>{" "}
              is dedicated to delivering clean, refreshing, and premium
              packaged drinking water. Our mission is to provide safe hydration
              while maintaining the highest standards of purity, quality, and
              taste.
            </p>

            <p className="mt-6 text-lg leading-8 text-[#6b4a34]">
              From small bottles for everyday use to large containers for
              homes, offices, and events, Marine Copper ensures every drop of
              water reflects trust, freshness, and reliability.
            </p>

            <p className="mt-6 text-lg leading-8 text-[#6b4a34]">
              Our modern purification processes and strict quality control
              guarantee water that meets premium standards and delivers
              refreshing hydration anytime, anywhere.
            </p>
          </div>

          {/* Right Features */}
          <div className="grid gap-6 sm:grid-cols-2">

            <div className="rounded-2xl border border-[#f0e0cf] bg-white p-6 shadow-sm">
              <Droplets className="mb-4 text-[#b87333]" size={30} />
              <h3 className="text-lg font-semibold text-[#5b351d]">
                Pure & Fresh
              </h3>
              <p className="mt-2 text-sm text-[#6b4a34]">
                Advanced purification ensures clean and refreshing drinking
                water in every bottle.
              </p>
            </div>

            <div className="rounded-2xl border border-[#f0e0cf] bg-white p-6 shadow-sm">
              <ShieldCheck className="mb-4 text-[#b87333]" size={30} />
              <h3 className="text-lg font-semibold text-[#5b351d]">
                Quality Assured
              </h3>
              <p className="mt-2 text-sm text-[#6b4a34]">
                Strict quality standards ensure safe, reliable, and premium
                hydration.
              </p>
            </div>

            <div className="rounded-2xl border border-[#f0e0cf] bg-white p-6 shadow-sm sm:col-span-2">
              <Truck className="mb-4 text-[#b87333]" size={30} />
              <h3 className="text-lg font-semibold text-[#5b351d]">
                Reliable Distribution
              </h3>
              <p className="mt-2 text-sm text-[#6b4a34]">
                Efficient supply chain delivering Marine Copper water across
                homes, businesses, and events.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}