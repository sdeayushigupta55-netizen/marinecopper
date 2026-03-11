import React from "react";

const sizes = ["250 ml", "500 ml", "1 L", "2 L", "5 L", "20 L"];

export default function Hero() {
  return (
    <>
 <section
      id="home"
      className="relative h-[900px] overflow-hidden"
    >
      {/* hero background image */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/hero.png')",
        }}
      />


      {/* extra center glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 blur-3xl" />
      </div>

    {/* content */}
<div className="relative z-10 max-w-2xl px-4 py-16 sm:px-6 lg:ml-16 lg:px-0 lg:py-24">
  <div className="rounded-[32px] border border-white/45 bg-white/28 p-6 shadow-[0_20px_60px_rgba(91,53,29,0.10)] backdrop-blur-xl sm:p-8 lg:p-10">
    {/* badge */}
    <div className="flex">
      <div className="inline-flex items-center rounded-full border border-[#c58d55]/35 bg-white/75 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#a7652f] shadow-sm sm:text-[11px]">
        Premium Packaged Drinking Water
      </div>
    </div>

    {/* heading */}
    <div className="mt-7">
      <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#b87333]/80">
        Pure • Refreshing • Premium
      </p>

      <h1 className="mt-4 text-5xl font-black leading-[0.92] tracking-[-0.03em] text-[#5b351d] sm:text-6xl lg:text-7xl">
        Marine
        <span className="mt-2 block bg-gradient-to-r from-[#b87333] via-[#d08a3c] to-[#9e6129] bg-clip-text text-transparent">
          Copper
        </span>
      </h1>

      <div className="mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-[#b87333] to-[#e3b07a]" />
    </div>

    {/* text */}
   <p className="mt-7 max-w-xl text-base leading-8 text-[#6b4a34] sm:text-lg">
  Pure hydration with a premium identity. Crafted to feel modern,
  refreshing, and memorable across every bottle size from
  <span className="font-semibold text-[#a86531] whitespace-nowrap">
    {" "}250 ml to 20 L
  </span>.
</p>

    {/* button row */}
    <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
      <a
        href="#products"
        className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#b87333] to-[#9e6129] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(184,115,51,0.30)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(184,115,51,0.38)]"
      >
        Explore Bottles
        <span className="ml-2 transition duration-300 group-hover:translate-x-1">
          →
        </span>
      </a>

      <a
        href="#contact"
        className="inline-flex items-center justify-center rounded-full border border-[#b87333]/70 bg-white/70 px-8 py-3.5 text-sm font-semibold text-[#b87333] backdrop-blur-sm transition duration-300 hover:bg-[#b87333] hover:text-white"
      >
        Become Distributor
      </a>
    </div>

    {/* bottom meta */}
    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
    

      <div className="flex flex-wrap gap-2">
        {["250 ml", "500 ml", "1 L", "2 L", "5 L", "20 L"].map((item) => (
          <span
            key={item}
            className="rounded-full border border-[#e4c7aa] bg-white/70 px-3 py-1 text-[11px] font-semibold tracking-wide text-[#8c5b34]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
      <p className="text-sm font-bold uppercase tracking-[0.38em] text-[#b87333] mt-4">
        # Kill Your Thirst
      </p>
  </div>
</div>
    </section>
      <section className="relative bg-[#fffaf6] px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* unique product stage */}
          <div className="relative mt-6">
            <div className="absolute left-1/2 top-10 h-40 w-[90%] -translate-x-1/2 rounded-full bg-[#b87333]/10 blur-3xl" />

            <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-5">
              {sizes.map((size, index) => (
                <div
                  key={size}
                  className={`group relative overflow-hidden rounded-[28px] border border-white/50 bg-white/60 p-3 shadow-[0_18px_50px_rgba(78,47,23,0.08)] backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(78,47,23,0.15)] ${
                    index === 4 || index === 5
                      ? "sm:translate-y-6 lg:translate-y-10"
                      : ""
                  } ${index === 0 || index === 1 ? "lg:translate-y-10" : ""}`}
                >
                  <div className="mb-3 flex justify-center">
                    <span className="rounded-full bg-[#f6e7d8] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#a86430] sm:text-[11px]">
                      {size}
                    </span>
                  </div>

                  <div className="relative flex h-[210px] items-end justify-center sm:h-[240px]">
                    <div className="absolute bottom-4 h-24 w-24 rounded-full bg-[#dca26e]/25 blur-2xl" />

                    <div
                      className={`relative rounded-[999px] border-[3px] border-white/70 bg-gradient-to-b from-white via-[#fffaf5] to-[#f3e3d2] shadow-inner ${
                        size === "250 ml"
                          ? "h-28 w-14"
                          : size === "500 ml"
                          ? "h-36 w-16"
                          : size === "1 L"
                          ? "h-44 w-20"
                          : size === "2 L"
                          ? "h-52 w-24"
                          : size === "5 L"
                          ? "h-56 w-28"
                          : "h-60 w-32"
                      }`}
                    >
                      <div className="absolute left-1/2 top-[-10px] h-5 w-[42%] -translate-x-1/2 rounded-t-lg rounded-b-md bg-[#b87333]" />

                      <div className="absolute left-1/2 top-[38%] w-[76%] -translate-x-1/2 rounded-2xl border border-[#d7b08b] bg-white/92 px-2 py-2 text-center shadow-sm">
                        <div className="text-[10px] font-black tracking-widest text-[#b87333]">
                          MB
                        </div>
                        <div className="mt-1 text-[9px] font-bold leading-tight text-[#5b351d]">
                          MARINE
                          <br />
                          COPPER
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 text-center">
                    <p className="text-xs font-semibold tracking-wide text-[#6e4830] sm:text-sm">
                      {size}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* bottom stats strip */}
          <div className="mt-14 grid gap-4 rounded-[30px] border border-white/50 bg-white/60 p-4 shadow-[0_14px_40px_rgba(89,54,26,0.08)] backdrop-blur-md sm:grid-cols-3 sm:p-6">
            <div className="text-center">
              <p className="text-2xl font-black text-[#b87333]">6</p>
              <p className="mt-1 text-xs uppercase tracking-[0.25em] text-[#6a4630]">
                Bottle Sizes
              </p>
            </div>

            <div className="text-center">
              <p className="text-2xl font-black text-[#b87333]">Pure</p>
              <p className="mt-1 text-xs uppercase tracking-[0.25em] text-[#6a4630]">
                Clean Hydration
              </p>
            </div>

            <div className="text-center">
              <p className="text-2xl font-black text-[#b87333]">Premium</p>
              <p className="mt-1 text-xs uppercase tracking-[0.25em] text-[#6a4630]">
                Brand Presence
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}