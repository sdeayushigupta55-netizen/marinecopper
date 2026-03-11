import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
// import Products from "../components/Product";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f4ee] text-[#3d2a1d]">
      <Navbar />
      <Hero />
      <About />
      {/* <Products /> */}
    </div>
  );
}