import React, { useRef } from "react";

const products = [
  {
    size: "250 ml",
    image: "/250.png",
    price: "Rs 220",
    pack: "Pack of 48 bottles",
    desc: "Compact and easy to carry for everyday refreshment.",
  },
  {
    size: "500 ml",
    image: "/500.png",
    price: "Rs 180",
    pack: "Pack of 24 bottles",
    desc: "Perfect bottle for travel, office, and daily hydration.",
  },
  {
    size: "1 L",
    image: "/1liter.png",
    price: "Rs 150",
    pack: "Pack of 12 bottles",
    desc: "Balanced size for personal hydration anytime.",
  },
  {
    size: "2 L",
    image: "/2liter.png",
    price: "Rs 120",
    pack: "Pack of 9 bottles",
    desc: "Ideal for family usage and longer hydration needs.",
  },
  {
    size: "5 L",
    image: "/5liter.png",
    price: "Rs 50",
    pack: "Jar",
    desc: "Convenient large pack for home and workplace.",
  },
  {
    size: "20 L",
    image: "/20liter.png",
    price: "Rs 80",
    pack: "Jar",
    desc: "Best for offices, events, and bulk water usage.",
  },
];

export default function Products() {
  return (
<section id="products" className="relative overflow-hidden bg-white py-14 sm:py-16 md:py-20 lg:py-24">
      <div className="absolute left-1/2 top-20 h-64 w-[85%] -translate-x-1/2 rounded-full bg-[#b87333]/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
       <div className="mx-auto max-w-3xl text-center">

  <p className="inline-block rounded-full bg-[#fff2e6] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.35em] text-[#b87333] border border-[#f1d9c6]">
    Our Products
  </p>

  <h2 className="mt-5 text-4xl font-black text-[#5b351d] sm:text-5xl">
    Premium Bottle Collection
  </h2>

  <p className="mt-5 text-base leading-8 text-[#6b4a34] sm:text-lg">
    Marine Copper provides clean, refreshing packaged drinking water
    in multiple sizes suitable for personal, family, and commercial use.
  </p>

</div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((item) => (
            <ProductCard key={item.size} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ item }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 18;
    const rotateY = (x - centerX) / 18;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-[30px] border border-[#ecd7c2] bg-white/80 p-5 shadow-[0_18px_50px_rgba(78,47,23,0.08)] backdrop-blur-xl transition duration-500"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* shine */}
      <div className="absolute inset-0 overflow-hidden rounded-[30px]">
        <div className="absolute -left-24 top-0 h-full w-20 rotate-12 bg-white/40 blur-xl transition-all duration-700 group-hover:left-[120%]" />
      </div>

      {/* bottle image */}
      <div className="relative mt-2 flex  items-center justify-center">
        <div className="absolute bottom-5 h-24 w-24 rounded-full bg-[#dca26e]/25 blur-2xl transition group-hover:h-28 group-hover:w-28" />
        <div className="absolute bottom-2 h-3 w-24 rounded-full bg-black/10 blur-md" />

        <img
          src={item.image}
          alt={item.size}
          className="relative z-10 h-full object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.15)] transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* content */}
      <div className="relative z-10 mt-5 text-center">
        <h3 className="text-2xl font-extrabold text-[#5b351d]">{item.size}</h3>

        {/* pack + price only once */}
        <div className="mt-4 rounded-2xl border border-[#ecd7c2] bg-[#fff8f2] px-4 py-3 shadow-sm">
          <div className="flex items-center justify-between gap-3 text-sm">
            <span className="font-medium text-[#6e4830]">{item.pack}</span>
            <span className="rounded-full bg-[#b87333] px-3 py-1 text-xs font-bold text-white">
              {item.price}
            </span>
          </div>
        </div>

        <p className="mt-4 text-sm leading-6 text-[#6e4830]">{item.desc}</p>
      </div>

      {/* button */}
      <div className="relative z-10 mt-6">
        <a
          href="#contact"
          className="flex items-center justify-center rounded-full bg-[#b87333] px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:scale-[1.02] hover:bg-[#9f6229]"
        >
          Enquire Now
        </a>
      </div>
    </div>
  );
}