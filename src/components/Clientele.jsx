import React from "react";
import { Building2, Store, BriefcaseBusiness, Users } from "lucide-react";

const clientele = [
  {
    title: "Retail Stores",
    desc: "Supplying premium packaged drinking water to local shops and retail counters.",
    icon: Store,
  },
  {
    title: "Corporate Offices",
    desc: "Reliable hydration solutions for workspaces, teams, and office environments.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Hotels & Restaurants",
    desc: "Trusted by hospitality spaces that value quality, hygiene, and presentation.",
    icon: Building2,
  },
  {
    title: "Events & Institutions",
    desc: "Suitable for gatherings, functions, schools, colleges, and bulk requirements.",
    icon: Users,
  },
];

export default function Clientele() {
  return (
    <section
      id="clientele"
    
     className="relative overflow-hidden bg-[#fffaf6]  py-14 sm:py-16 md:py-20 lg:py-24">
  
      {/* background glow */}
      <div className="absolute left-1/2 top-16 h-52 w-[80%] -translate-x-1/2 rounded-full bg-[#b87333]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <div className="mx-auto max-w-3xl text-center">
          
 <p className="inline-block rounded-full bg-[#fff2e6] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.35em] text-[#b87333] border border-[#f1d9c6]">
  Clientele
</p>
          <h2 className="mt-4 text-4xl font-black text-[#5b351d] sm:text-5xl">
            Trusted Across Every Need
          </h2>

          <p className="mt-5 text-base leading-8 text-[#6b4a34] sm:text-lg">
            Marine Copper serves a wide range of customers with dependable,
            premium packaged drinking water for daily, commercial, and bulk
            requirements.
          </p>
        </div>

        {/* cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {clientele.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`group rounded-[28px] border border-white/60 bg-white/75 p-6 shadow-[0_18px_50px_rgba(78,47,23,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:shadow-[0_22px_55px_rgba(78,47,23,0.16)] ${
                  index % 2 !== 0 ? "xl:translate-y-6" : ""
                }`}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f6e7d8] text-[#b87333] shadow-sm">
                  <Icon size={28} strokeWidth={2} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#5b351d]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#6e4830]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* bottom strip */}
        <div className="mt-16 grid gap-4 rounded-[32px] border border-white/60 bg-white/70 p-5 shadow-[0_14px_40px_rgba(89,54,26,0.08)] backdrop-blur-xl sm:grid-cols-3 sm:p-6">
          <div className="text-center">
            <p className="text-3xl font-black text-[#b87333]">Retail</p>
            <p className="mt-1 text-xs uppercase tracking-[0.25em] text-[#6a4630]">
              Daily Supply
            </p>
          </div>

          <div className="text-center">
            <p className="text-3xl font-black text-[#b87333]">Bulk</p>
            <p className="mt-1 text-xs uppercase tracking-[0.25em] text-[#6a4630]">
              Commercial Needs
            </p>
          </div>

          <div className="text-center">
            <p className="text-3xl font-black text-[#b87333]">Trusted</p>
            <p className="mt-1 text-xs uppercase tracking-[0.25em] text-[#6a4630]">
              Quality Service
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
