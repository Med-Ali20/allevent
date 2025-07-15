"use client";

import Link from "@/app/ui/link";
import React from "react";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { translations } from "@/app/translation";

type Props = {
  className: string;
};

const About: React.FC<Props> = ({ className }) => {
  const { locale } = useLanguage();

  // @ts-ignore
  const t = translations[locale];
  const about = t.homepage.about;

  return (
    <div
      className={`${className} mx-[1.4rem] md:mx-[5rem] mt-[2rem] lg:mt-0 mb-[4rem] lg:mb-2 lg:flex  z-[1000] relative bg-dark`}
    >
      <div
        className={`lg:w-[50%] mr-auto ${
          locale === "ar" ? "flex flex-col" : ""
        }`}
      >
        <h2
          className={`text-[2rem] md:text-[1.6rem] font-bold ${
            locale === "ar"
              ? "text-right lg:text-[1.3rem] 2xl:text-[1.5rem] font-[zain] mt-[0]"
              : "lg:text-[0.93rem] 2xl:text-[1rem]  mt-[2rem] hidden"
          }`}
        >
          نبذة عنا
        </h2>
        <p
          style={{
            fontFamily: locale === "ar" ? "Zain" : "Outfit",
            fontWeight: "lighter",
          }}
          className={`text-[2rem] md:text-[1.6rem] mt-[2rem] lg:mt-[0] leading-[2.4rem] mb-[4rem]  ${
            locale === "ar"
              ? "text-right lg:mb-[1.5rem]  lg:text-[1.1rem] 2xl:text-[1.3rem]  lg:leading-[1.5rem]"
              : "lg:mb-[2.5rem] lg:text-[0.93rem] 2xl:text-[1rem] lg:leading-[1.3rem]"
          }`}
        >
          {about.aboutDescription}
        </p>
        <h3
          style={{ fontFamily: locale === "ar" ? "Zain" : "Outfit" }}
          className={`text-[2rem] md:text-[1.6rem]   font-bold  ${
            locale === "ar"
              ? "text-right lg:text-[1.3rem] 2xl:text-[1.5rem]"
              : "lg:text-[0.93rem] 2xl:text-[1rem] mt-[2rem]"
          }`}
        >
          {about.missionTitle}
        </h3>
        <p
          style={{
            fontFamily: locale === "ar" ? "Zain" : "Outfit",
            fontWeight: "lighter",
          }}
          className={`text-[2rem] md:text-[1.6rem] mt-[2rem] leading-[2.4rem] mb-[4rem]  ${
            locale === "ar"
              ? "text-right lg:mb-[1.5rem]  lg:text-[1.1rem] 2xl:text-[1.3rem] lg:mt-[0] lg:leading-[1.5rem]"
              : "lg:mb-[2.5rem] lg:text-[0.93rem] 2xl:text-[1rem] lg:leading-[1.3rem] lg:mt-[1.5rem] "
          }`}
        >
          {about.missionDescription}
        </p>
        <h3
          style={{ fontFamily: locale === "ar" ? "Zain" : "Outfit" }}
          className={`text-[2rem] md:text-[1.6rem] font-bold ${
            locale === "ar"
              ? "text-right lg:text-[1.3rem] 2xl:text-[1.5rem]  mt-[1rem]"
              : "lg:text-[0.93rem] 2xl:text-[1rem]  mt-[2rem]"
          }`}
        >
          {about.visionTitle}
        </h3>
        <p
          style={{
            fontFamily: locale === "ar" ? "Zain" : "Outfit",
            fontWeight: "lighter",
          }}
          className={`text-[2rem] md:text-[1.6rem] mt-[2rem] leading-[2.4rem] mb-[4rem]  ${
            locale === "ar"
              ? "text-right lg:mb-[1.5rem]  lg:text-[1.1rem] 2xl:text-[1.3rem] lg:mt-[0] lg:leading-[1.5rem]"
              : "lg:mb-[2.5rem] lg:text-[0.93rem] 2xl:text-[1rem] lg:leading-[1.3rem] lg:mt-[1.5rem] "
          }`}
        >
          {about.visionDescription}
        </p>
        <Link
          className={` ${locale === "ar" ? "ml-auto" : ""}`}
          href="/contact"
          text={locale === "ar" ? "تواصل معنا" : "Get in Touch"}
          color="white"
          bg="#FF002C"
        />
      </div>
      <img
        src="/images/2-mobile.jpg"
        alt="allevent"
        className="mt-[4rem] w-full lg:hidden"
      />
      <img
        src="/images/2-desktop.jpg"
        alt="allevent"
        className="w-[35rem] h-[31.5rem] hidden lg:block lg:-mr-[8rem]"
      />
    </div>
  );
};

export default About;
