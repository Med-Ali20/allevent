"use client";

import Link from "@/app/ui/link";
import React, { useEffect, useRef } from "react";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { translations } from "@/app/translation";

type Props = {
  className: string;
};

const About: React.FC<Props> = ({ className }) => {
  const { locale } = useLanguage();
  //@ts-ignore
  const t = translations[locale];
  const about = t.homepage.about;

  const imageRef = useRef<HTMLImageElement | null>(null);

  // Scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <div
      className={`${className} mx-[1.4rem] md:mx-[5rem] mt-[2rem] flex flex-col lg:flex-row gap-5 items-start lg:mt-0 mb-[4rem] lg:mb-2 z-[10] relative bg-dark`}
    >
      <div
        className={`lg:w-[50%] lg:-mt-2 ${
          locale === "ar" ? "flex flex-col" : ""
        }`}
      >
        <h2
          className={`text-[2rem] md:text-[1.6rem] font-bold ${
            locale === "ar"
              ? "text-right lg:text-[1.6rem] 2xl:text-[1.5rem] font-[zain]"
              : "lg:text-[1.2rem] 2xl:text-[1rem] mt-[2rem] hidden"
          }`}
        >
          نبذة عنا
        </h2>

        <p
          style={{
            fontFamily: locale === "ar" ? "Zain" : "Outfit",
            fontWeight: "lighter",
          }}
          className={`text-[2rem] md:text-[1.6rem]  leading-[2.4rem] mb-[4rem]  ${
            locale === "ar"
              ? "text-right lg:mb-[1.5rem] lg:text-[1.4rem] 2xl:text-[1.3rem] lg:leading-[1.5rem]"
              : "lg:mb-[2.5rem] lg:text-[1.2rem] 2xl:text-[1rem] lg:leading-[1.3rem]"
          }`}
        >
          {about.aboutDescription}
        </p>

        <h3
          style={{ fontFamily: locale === "ar" ? "Zain" : "Outfit" }}
          className={`text-[2rem] md:text-[1.6rem] font-bold  ${
            locale === "ar"
              ? "text-right lg:text-[1.6rem] 2xl:text-[1.5rem]"
              : "lg:text-[1.2rem] 2xl:text-[1rem] mt-[2rem]"
          }`}
        >
          {about.missionTitle}
        </h3>

        <p
          style={{
            fontFamily: locale === "ar" ? "Zain" : "Outfit",
            fontWeight: "lighter",
          }}
          className={`text-[2rem] md:text-[1.6rem]  leading-[2.4rem] mb-[4rem]  ${
            locale === "ar"
              ? "text-right lg:mb-[1.5rem] lg:text-[1.4rem] 2xl:text-[1.3rem] lg:mt-[0] lg:leading-[1.5rem]"
              : "lg:mb-[2.5rem] lg:text-[1.2rem] 2xl:text-[1rem] lg:leading-[1.3rem] lg:mt-[0.5rem]"
          }`}
        >
          {about.missionDescription}
        </p>

        <h3
          style={{ fontFamily: locale === "ar" ? "Zain" : "Outfit" }}
          className={`text-[2rem] md:text-[1.6rem] font-bold ${
            locale === "ar"
              ? "text-right lg:text-[1.6rem] 2xl:text-[1.5rem] mt-[1rem]"
              : "lg:text-[1.2rem] 2xl:text-[1rem] mt-[2rem]"
          }`}
        >
          {about.visionTitle}
        </h3>

        <p
          style={{
            fontFamily: locale === "ar" ? "Zain" : "Outfit",
            fontWeight: "lighter",
          }}
          className={`text-[2rem] md:text-[1.6rem]  leading-[2.4rem] mb-[4rem]  ${
            locale === "ar"
              ? "text-right lg:mb-[1.5rem] lg:text-[1.4rem] 2xl:text-[1.3rem] lg:mt-[0] lg:leading-[1.5rem]"
              : "lg:mb-[2.5rem] lg:text-[1.2rem] 2xl:text-[1rem] lg:leading-[1.3rem] lg:mt-[0.5rem]"
          }`}
        >
          {about.visionDescription}
        </p>

        <Link
          className={`${locale === "ar" ? "ml-auto" : ""} mt-4`}
          href="/contact"
          text={locale === "ar" ? "تواصل معنا" : "Get in Touch"}
          color="white"
          bg="#FF002C"
        />
      </div>

      {/* Mobile image (no animation) */}
      <img
        src="/images/2-mobile.jpg"
        alt="allevent"
        className="mt-[4rem] w-full lg:hidden"
      />

      {/* Desktop image with scroll reveal */}
      <img
        ref={imageRef}
        src="/images/2-desktop.jpg"
        alt="allevent"
        className="w-[40rem] h-[35rem] hidden lg:block lg:-mr-[8rem] transition-all duration-700 ease-in-out opacity-0 translate-y-10"
      />
    </div>
  );
};

export default About;
