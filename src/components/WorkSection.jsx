import React from "react";

export default function WorkSection() {
  return (
    <section id="work" className="bg-white overflow-hidden py-14 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">

  <p className="inline-block rounded-full bg-[#fff2e6] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.35em] text-[#b87333] border border-[#f1d9c6]">
    Work With Us
  </p>

  <h2 className="mt-5 text-4xl font-black text-[#5b351d] sm:text-5xl">
    Become Our Distributor
  </h2>

  <p className="mt-5 text-base leading-8 text-[#6b4a34] sm:text-lg">
    Partner with Marine Copper and bring premium packaged drinking
    water to your city. We are expanding our distribution network
    across retail stores, offices, and hospitality sectors.
  </p>

</div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-[28px] border border-[#f1e3d4] bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-[#5b351d]">
              Retail Partnership
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#6e4830]">
              Supply Marine Copper bottles to grocery stores, supermarkets,
              and local retailers in your area.
            </p>
          </div>

          <div className="rounded-[28px] border border-[#f1e3d4] bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-[#5b351d]">
              Bulk Distribution
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#6e4830]">
              Partner with us for large scale water supply for offices,
              institutions, and corporate spaces.
            </p>
          </div>

          <div className="rounded-[28px] border border-[#f1e3d4] bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-[#5b351d]">
              Event Supply
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#6e4830]">
              We supply packaged drinking water for weddings, functions,
              festivals, and public events.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}