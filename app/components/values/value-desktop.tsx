"use client";

import React from "react";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { translations } from "../../translation";
import Value from "@/app/components/values";
import ValueDesktop from "@/app/components/values/desktop";

import { useInView } from "react-intersection-observer";

type Props = {
  top: number;
  left: number;
};

const value: React.FC<Props> = ({ top, left }) => {
  const { locale } = useLanguage();
  //@ts-ignore
  const { coreValues } = translations[locale].homepage;
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
    triggerOnce: true,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
    triggerOnce: true,
  });

  const { ref: ref3, inView: inView3 } = useInView({
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
    triggerOnce: true,
  });

  const { ref: ref4, inView: inView4 } = useInView({
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
    triggerOnce: true,
  });

  return (
    <>
      <div
        className={`flex flex-col px-[2rem] mb-[1rem] pb-[2rem] items-center absolute -top-[7.5vw] left-[12vw] text-center`}
      >
        <img
          src="/icons/values-creativity.svg"
          alt="creativity"
          className={`w-[4.5vw] my-[3vw] opacity-0 translate-y-8 ${
            inView1 ? "icon-reveal-1" : ""
          }`}
        />
        <span
          ref={ref1}
          className={`w-[1vw] h-[1vw] bg-secondary rounded-full ${
            inView1 ? "glow-effect-1" : ""
          }`}
        ></span>
        <h3
          className={`font-bold mt-[2vw] opacity-0 translate-y-8 ${
            inView1 ? "text-reveal-1" : ""
          } ${locale === 'ar' ? 'font-[zain] text-[1.2rem] leading-[1.4rem]' : 'font-outfit text-[1vw]'}` }
        >
          {coreValues.values[2].title}
        </h3>
        <p
          className={`font-light mt-2 w-[16vw] opacity-0 translate-y-8 ${
            inView1 ? "text-reveal-1-p" : ""
          } ${locale === 'ar' ? 'font-[zain] text-[1.2rem] leading-[1.4rem]' : 'font-outfit  text-[1rem]'}`}
        >
          {coreValues.values[2].description}
        </p>
      </div>
      <div
        className={`flex flex-col px-[2rem] mb-[1rem] pb-[2rem] items-center absolute -top-[9.85vw] left-[30.6vw] text-center`}
      >
        <img
          src="/icons/centricity.svg"
          alt="creativity"
          className={`w-[4.5vw] my-[3vw] opacity-0 translate-y-8 ${
            inView2 ? "icon-reveal-2" : ""
          }`}
        />
        <span
          ref={ref2}
          className={`w-[1vw] h-[1vw] bg-secondary rounded-full ${
            inView2 ? "glow-effect-2" : ""
          }`}
        ></span>
        <h3
          className={`font-bold mt-[2vw] opacity-0 translate-y-8 ${
            inView2 ? "text-reveal-2" : ""
          } ${locale === 'ar' ? 'font-[zain] text-[1.2rem] leading-[1.4rem]' : 'font-outfit text-[1vw]'}`}
        >
          {coreValues.values[1].title}
        </h3>
        <p
          className={`font-light mt-2 w-[16vw] opacity-0 translate-y-8 ${
            inView2 ? "text-reveal-2-p" : ""
          } ${locale === 'ar' ? 'font-[zain] text-[1.2rem] leading-[1.4rem]' : 'font-outfit  text-[1rem]'}`}
        >
          {coreValues.values[1].description}
        </p>
      </div>
      <div
        className={`flex flex-col px-[2rem] mb-[1rem] pb-[2rem] items-center absolute -top-[10.7vw] right-[30.6vw] text-center`}
      >
        <img
          src="/icons/excellence.svg"
          alt="creativity"
          className={`w-[4.5vw] my-[3vw] opacity-0 translate-y-8 ${
            inView3 ? "icon-reveal-3" : ""
          }`}
        />
        <span
          ref={ref3}
          className={`w-[1vw] h-[1vw] bg-secondary rounded-full ${
            inView3 ? "glow-effect-3" : ""
          }`}
        ></span>
        <h3
          className={`font-bold mt-[2vw]  opacity-0 translate-y-8 ${
            inView3 ? "text-reveal-3" : ""
          } ${locale === 'ar' ? 'font-[zain] text-[1.2rem] leading-[1.4rem]' : 'font-outfit text-[1vw]'}`}
        >
          {coreValues.values[0].title}
        </h3>
        <p
          className={`font-light mt-2 w-[16vw] opacity-0 translate-y-8 ${
            inView3 ? "text-reveal-3-p" : ""
          } ${locale === 'ar' ? 'font-[zain] text-[1.2rem] leading-[1.4rem]' : 'font-outfit  text-[1rem]'}`}
        >
          {coreValues.values[0].description}
        </p>
      </div>
      <div
        className={`flex flex-col px-[2rem] mb-[1rem] pb-[2rem] items-center absolute -top-[7.9vw] right-[12vw] text-center`}
      >
        <img
          src="/icons/innovation.svg"
          alt="creativity"
          className={`w-[4.5vw] my-[3vw] opacity-0 translate-y-8 ${
            inView4 ? "icon-reveal-4" : ""
          }`}
        />
        <span
          ref={ref4}
          className={`w-[1vw] h-[1vw] bg-secondary rounded-full ${
            inView4 ? "glow-effect-4" : ""
          }`}
        ></span>
        <h3
          className={`font-bold mt-[2vw]  opacity-0 translate-y-8 ${
            inView4 ? "text-reveal-4" : ""
          } ${locale === 'ar' ? 'font-[zain] text-[1.2rem] leading-[1.4rem]' : 'font-outfit text-[1vw]'}`}
        >
          {coreValues.values[3].title}
        </h3>
        <p
          className={`font-light mt-2 w-[16vw] opacity-0 translate-y-8 ${
            inView4 ? "text-reveal-4-p" : ""
          } ${locale === 'ar' ? 'font-[zain] text-[1.2rem] leading-[1.4rem]' : 'font-outfit  text-[1rem]'}`}
        >
          {coreValues.values[3].description}
        </p>
      </div>
    </>
  );
};

export default value;
