"use client";

import Image from "next/image";
import Hero from "./sections/Hero";
import Description from "./sections/Description";
import Services from "./sections/Services";
import About from "./sections/About-us";
import Values from "./sections/Values";
import { ParallaxProvider } from "react-scroll-parallax";
import EveryMomentMatters from "./sections/EveryMomentMatters";
import { useLanguage } from "@/app/contexts/LanguageContext";
import Menu from "@/app/components/menu";

export default function Home() {
  const { locale } = useLanguage();

  return (
    <ParallaxProvider>
      <div className="font-montserrat text-white top-0 left-0 right-0">
        <Hero />
        <div className="w-full grid grid-cols-1 lg:grid-cols-4">
          <div className="col-span-[1] hidden lg:block relative">
            <img
              src="/icons/circles.svg"
              srcSet="/icons/circles.svg 385w, /icons/circles-mobile.svg 174w"
              sizes="(max-width: 1024px) 174px, 385px"
              className="absolute -left-[6%] top-50 lg:left-[0] lg:top-20 z-20 rotate-[180deg]"
              alt=""
            />
            <img
              src="/images/circles.png"
              alt=""
              className="absolute -left-[6%] top-90 lg:-left-[5rem] lg:top-160 z-20 rotate-[90deg]"
            />
          </div>
          <Description className="col-span-[3]" />
          <h2
            className={`col-span-[1] ml-[1.4rem] md:ml-[5rem] uppercase font-bold text-[1.6rem] ${
              locale === "ar"
                ? "lg:opacity-0 text-right mr-[1rem] md:mr-[3rem] text-[2.5rem] font-[zain]"
                : "font-outfit"
            } mb-[1.5rem] lg:mb-[3rem] mt-[4rem]`}
          >
            {locale === "en" ? "Services" : "الخدمات"}
          </h2>
          <Services className="col-span-[3]" />
          <h2
            className={`col-span-[1] ml-[1.4rem] md:ml-[5rem] font-bold text-[2rem] md:text-[1.6rem] ${
              locale === "ar"
                ? "opacity-0 text-right mr-[3rem] text-[2.5rem] font-[zain]"
                : "font-outfit"
            } mt-[4rem] lg:mt-0 relative`}
          >
            {/* {locale === "en" ? "About Us" : "نبذة عنا"} */}
          </h2>
          <About className="col-span-[3]" />
        </div>
        <Values />
      </div>
    </ParallaxProvider>
  );
}
