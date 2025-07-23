"use client";

import React, { useState } from "react";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { translations } from "../../translation";

export default function HeroSection() {
  const { locale } = useLanguage();
  const [openService, setOpenService] = useState<string | null>(null);

  return (
    <section
      className={`relative w-full h-screen overflow-hidden ${
        locale === "ar" ? "font-[zain]" : ""
      }`}
    >
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
      <div className="relative w-[85%] md:w-full mx-auto z-20 flex flex-col items-left md:items-center md:gap-0 justify-center mt-[2rem] text-center text-white pl-9 h-full gap-[6rem]">
        {locale === "en" ? (
          <h1 className="text-[4rem] md:text-[4.5rem] font-bold text-left leading-none md:leading-[4.25rem]  ">
            Every Detail Counts{" "}
            <span className="text-primary -ml-[0.6rem]">.</span> <br /> Every
            Moment Matters{" "}
            <span className="text-secondary -ml-[0.6rem]">.</span>
          </h1>
        ) : (
          <h1 className="text-[4rem] md:text-[4.5rem] font-[zain] font-bold text-right leading-none md:leading-[4rem]  ">
            <span className="text-secondary ">.</span><span className="text-primary ">.</span>من الفكرة للتنفيذ
            <br />
            !نُبدع في تصميم التفاصيل
          </h1>
        )}
      </div>
    </section>
  );
}
