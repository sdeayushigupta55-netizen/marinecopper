import React from "react";

const GALLERY = [
  { src: "/gallery/1.png", alt: "Marine Copper water bottles" },
  { src: "/gallery/2.png", alt: "Premium drinking water bottles" },
  { src: "/gallery/3.png", alt: "Marine Copper 1 liter bottle" },
  { src: "/gallery/4.png", alt: "Marine Copper 2 liter bottle" },
  { src: "/gallery/5.png", alt: "Marine Copper 5 liter bottle" },
  { src: "/gallery/6.png", alt: "Marine Copper 20 liter jar" },
//   { src: "/gallery/7.png", alt: "Marine Copper drinking water brand" },
  { src: "/gallery/8.png", alt: "Marine Copper hydration bottles" },
  { src: "/gallery/9.png", alt: "Marine Copper water bottle collection" },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-[#fff9f3] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* heading */}
        <div className="mx-auto max-w-3xl text-center">
         
            <p className="inline-block rounded-full bg-[#fff2e6] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.35em] text-[#b87333] border border-[#f1d9c6]">
    Gallery
  </p>


          <h2 className="mt-4 text-4xl font-black text-[#5b351d] sm:text-5xl">
            Our Water. Our Quality.
          </h2>

          <p className="mt-5 text-lg text-[#6b4a34] mb-2">
            Explore Marine Copper's premium packaged drinking water and
            product range designed for purity and refreshment.
          </p>
        </div>

        {/* images grid */}
       <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
  {GALLERY.map((item, i) => (
    <div
      key={i}
      className="overflow-hidden rounded-xl shadow-md"
    >
      <img
        src={item.src}
        alt={item.alt}
        className="h-60 w-full object-cover"
      />
    </div>
  ))}
</div>
      </div>
    </section>
  );
}