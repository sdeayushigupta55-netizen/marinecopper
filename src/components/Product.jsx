import React, { useRef } from "react";

const products = [
  {
    size: "250 ml",
    image: "/250.png",
    price: "₹10",
    desc: "Compact and easy to carry for everyday refreshment.",
  },
  {
    size: "500 ml",
    image: "/bottles/500.png",
    price: "₹20",
    desc: "Perfect bottle for travel, office, and daily hydration.",
  },
  {
    size: "1 L",
    image: "/bottles/1l.png",
    price: "₹30",
    desc: "Balanced size for personal hydration anytime.",
  },
  {
    size: "2 L",
    image: "/bottles/2l.png",
    price: "₹40",
    desc: "Ideal for family usage and longer hydration needs.",
  },
  {
    size: "5 L",
    image: "/bottles/5l.png",
    price: "₹80",
    desc: "Convenient large pack for home and workplace.",
  },
  {
    size: "20 L",
    image: "/bottles/20l.png",
    price: "₹120",
    desc: "Best for offices, events, and bulk water usage.",
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-white py-24 relative overflow-hidden">
      
      {/* background glow */}
      <div className="absolute left-1/2 top-20 h-64 w-[85%] -translate-x-1/2 rounded-full bg-[#b87333]/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#b87333]">
            Our Products
          </p>

          <h2 className="mt-4 text-4xl font-black text-[#5b351d] sm:text-5xl">
            Premium Bottle Collection
          </h2>

          <p className="mt-5 text-base text-[#6b4a34] sm:text-lg">
            Marine Copper provides clean, refreshing packaged drinking water
            in multiple sizes suitable for personal, family, and commercial use.
          </p>
        </div>

        {/* product grid */}
       <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {products.map((item) => (
            <ProductCard key={item.size} item={item} />
          ))}

        </div>

      </div>
    </section>
  );
}

/* product card */
function ProductCard({ item }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 18;
    const rotateY = (x - centerX) / 18;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-[28px] border border-white/60 bg-white/70 p-5 backdrop-blur-xl shadow-[0_18px_50px_rgba(78,47,23,0.08)] transition duration-500"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* shine effect */}
      <div className="absolute inset-0 overflow-hidden rounded-[28px] border border-[#e7c9ab]">
        <div className="absolute -left-20 top-0 h-full w-20 rotate-12 bg-white/40 blur-xl transition-all duration-700 group-hover:left-[120%]" />
      </div>

      {/* top row */}
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-[#f6e7d8] px-3 py-1 text-[11px] font-bold tracking-wider text-[#a86430]">
          {item.size}
        </span>

        <span className="rounded-full border border-[#e7c9ab] bg-white px-3 py-1 text-[11px] font-bold text-[#b87333]">
          MRP {item.price}
        </span>
      </div>

      {/* bottle area */}
      <div className="relative mt-6 flex h-[220px] items-center justify-center">

        {/* glow */}
        <div className="absolute bottom-4 h-24 w-24 rounded-full bg-[#dca26e]/25 blur-2xl transition group-hover:h-28 group-hover:w-28" />

        {/* reflection */}
        <div className="absolute bottom-2 h-3 w-24 rounded-full bg-black/10 blur-md" />

        {/* bottle */}
        <img
          src={item.image}
          alt={item.size}
          className="relative z-10 h-full object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.15)] animate-floatBottle transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* text */}
      <div className="mt-5 text-center">
        <h3 className="text-lg font-bold text-[#5b351d]">{item.size}</h3>

        <p className="mt-2 text-sm text-[#6e4830] leading-6">
          {item.desc}
        </p>
      </div>

      {/* button */}
      <div className="mt-6">
        <a
          href="#contact"
          className="flex items-center justify-center rounded-full border border-[#d7b08b] bg-white/80 px-4 py-2 text-sm font-semibold text-[#a86430] transition hover:bg-[#b87333] hover:text-white"
        >
          Enquire
        </a>
      </div>
    </div>
  );
}