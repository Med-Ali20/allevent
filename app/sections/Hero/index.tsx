import React from "react";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* 🔹 Video background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://res.cloudinary.com/dl5zmlqi3/video/upload/v1752259658/hero-compressed_xh1osv.mp4 "
        autoPlay
        muted
        loop
        playsInline
      />

      {/* 🔹 Black overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10" />

      {/* 🔹 Content */}
      <div className="relative w-[85%] md:w-full mx-auto z-20 flex flex-col items-left md:items-center md:gap-0 justify-center  text-center text-white pl-9 h-full gap-[6rem]">
        <h1 className="text-[4rem] md:text-[2.5rem] font-bold text-left leading-none md:leading-[2.75rem]  ">
          Every Detail Counts{" "}
          <span className="text-primary -ml-[0.6rem]">.</span> <br /> Every
          Moment Matters <span className="text-secondary -ml-[0.6rem]">.</span>
        </h1>
      </div>
    </section>
  );
}
