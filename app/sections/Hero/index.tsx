import React from "react";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* 🔹 Video background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/hero.mp4"
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
        <span className="flex items-center text-[1.4rem] uppercase font-bold md:hidden">
          <img
            src="/icons/play.svg"
            className="w-[50px] md:w-[60px] mr-5"
            alt="Play Video"
          />
          Play Full
        </span>
      </div>
      <img
        src="/icons/circles.svg"
        srcSet="/icons/circles.svg 385w, /icons/circles-mobile.svg 174w"
        sizes="(max-width: 1024px) 174px, 385px"
        className="absolute -right-[6%] bottom-50 lg:right-[0] lg:bottom-[40px] z-20"
        alt=""
      />
       <span className="flex items-center text-[0.8rem] uppercase font-bold hidden md:block text-white absolute left-10 bottom-10 z-20">
          <img
            src="/icons/play.svg"
            className="w-[50px] md:w-[60px] mr-5 inline"
            alt="Play Video"
          />
          Play Full
        </span>
    </section>
  );
}
