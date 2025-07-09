"use client";

import Image from "next/image";
import Hero from "./sections/Hero";
import Description from "./sections/Description";
import Services from "./sections/Services";
import About from "./sections/About-us";
import Values from "./sections/Values";
import { ParallaxProvider } from "react-scroll-parallax";
import EveryMomentMatters from "./sections/EveryMomentMatters";
import Menu from '@/app/components/menu'


export default function Home() {
  return (
    <ParallaxProvider>
      <div className="font-montserrat text-white top-0 left-0 right-0">
        <Hero />
        <div className="w-full grid grid-cols-1 lg:grid-cols-4">
          <div className="col-span-[1] hidden lg:block relative">
            <img
              src="/icons/circles-red.svg"
              alt=""
              className="hidden lg:block absolute top-[20rem] left-[6rem] w-[4rem]"
            />
          </div>
          <Description className="col-span-[3]" />
          <h2 className="col-span-[1] ml-[1.4rem] md:ml-[5rem] uppercase font-bold text-[1.6rem] font-outfit mb-[1.5rem] lg:mb-[3rem] mt-[4rem]">
            Services
          </h2>
          <Services className="col-span-[3]" />
          <h2 className="col-span-[1] ml-[1.4rem] md:ml-[5rem] uppercase font-bold text-[1.6rem] font-outfit mt-[4rem] lg:mt-0 relative">
            About Us
            <img
              src="/icons/circles-about.svg"
              alt=""
              className="hidden lg:block absolute top-[8rem] -left-[5rem] w-[8rem]"
            />
          </h2>
          <About className="col-span-[3]" />
        </div>
        <Values />
      </div>
      <EveryMomentMatters />
    </ParallaxProvider>
  );
}
