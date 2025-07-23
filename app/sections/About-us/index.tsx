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
      className={`${className} mx-[1.4rem] md:mx-[5rem] mt-[2rem] flex flex-col gap-5 items-start lg:mt-0 mb-[4rem] lg:mb-2 z-[10] relative bg-dark`}
    >
      {/* First passage - full width on desktop */}
      <div className="w-full">
        <h2
          className={`text-[2rem] md:text-[1.6rem] font-bold mb-3 lg:mb-0 text-center ${
            locale === "ar"
              ? "lg:text-[1.8rem] 2xl:text-[1.9rem] font-[zain]"
              : "lg:text-[1.4rem] 2xl:text-[1.5rem] mt-[2rem] hidden"
          }`}
          style={{ fontFamily: locale === "ar" ? "Zain" : "Outfit" }}
        >
          نبذة عنا
        </h2>

        <p
          style={{
            fontFamily: locale === "ar" ? "Zain" : "Outfit",
            fontWeight: "lighter",
          }}
          className={`text-[2rem] md:text-[1.6rem] leading-[2.4rem] mb-[4rem] text-center ${
            locale === "ar"
              ? "lg:mb-[1.5rem] lg:text-[1.5rem] 2xl:text-[1.6rem] lg:leading-[1.7rem]"
              : "lg:mb-[2.5rem] lg:text-[1.3rem] 2xl:text-[1.4rem] lg:leading-[1.5rem]"
          }`}
        >
          {about.aboutDescription}
        </p>
      </div>

      {/* Container for image and remaining text - side by side on desktop */}
      <div className="w-full flex flex-col lg:flex-row gap-5 items-start lg:items-center">
        {/* Text content - 50% width on desktop */}
        <div className={`lg:w-[50%] ${locale === "ar" ? "flex flex-col" : ""}`}>
          <h3
            style={{ fontFamily: locale === "ar" ? "Zain" : "Outfit" }}
            className={`text-[2rem] md:text-[1.6rem] font-bold mb-6 lg:mb-0 text-center ${
              locale === "ar"
                ? "lg:text-[1.8rem] 2xl:text-[1.9rem]"
                : "lg:text-[1.4rem] 2xl:text-[1.5rem] mt-[2rem]"
            }`}
          >
            {about.missionTitle}
          </h3>

          <p
            style={{
              fontFamily: locale === "ar" ? "Zain" : "Outfit",
              fontWeight: "lighter",
            }}
            className={`text-[2rem] md:text-[1.6rem] leading-[2.4rem] mb-[4rem] text-center ${
              locale === "ar"
                ? "lg:mb-[1.5rem] lg:text-[1.5rem] 2xl:text-[1.6rem] lg:mt-[0] lg:leading-[1.7rem]"
                : "lg:mb-[2.5rem] lg:text-[1.3rem] 2xl:text-[1.4rem] lg:leading-[1.5rem] lg:mt-[0.5rem]"
            }`}
          >
            {about.missionDescription}
          </p>

          <h3
            style={{ fontFamily: locale === "ar" ? "Zain" : "Outfit" }}
            className={`text-[2rem] md:text-[1.6rem] font-bold mb-6 lg:mb-0 text-center ${
              locale === "ar"
                ? "lg:text-[1.8rem] 2xl:text-[1.9rem] mt-[1rem]"
                : "lg:text-[1.4rem] 2xl:text-[1.5rem] mt-[2rem]"
            }`}
          >
            {about.visionTitle}
          </h3>

          <p
            style={{
              fontFamily: locale === "ar" ? "Zain" : "Outfit",
              fontWeight: "lighter",
            }}
            className={`text-[2rem] md:text-[1.6rem] leading-[2.4rem] mb-[4rem] text-center ${
              locale === "ar"
                ? "lg:mb-[1.5rem] lg:text-[1.5rem] 2xl:text-[1.6rem] lg:mt-[0] lg:leading-[1.7rem]"
                : "lg:mb-[2.5rem] lg:text-[1.3rem] 2xl:text-[1.4rem] lg:leading-[1.5rem] lg:mt-[0.5rem]"
            }`}
          >
            {about.visionDescription}
          </p>

          <div className="flex justify-center w-full">
            <Link
              className="mt-4"
              href="/contact"
              text={locale === "ar" ? "تواصل معنا" : "Get in Touch"}
              color="white"
              bg="#FF002C"
            />
          </div>
        </div>

        {/* Images - 50% width on desktop */}
        <div className="lg:w-[50%]">
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
            className="w-[32rem] rounded h-[30rem] hidden lg:block transition-all duration-700 ease-in-out opacity-0 translate-y-10 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;