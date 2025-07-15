"use client";

import React from "react";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { translations } from "../../translation";
import Value from "@/app/components/values";
import ValueDesktop from "@/app/components/values/desktop";

const Values = () => {
  const { locale } = useLanguage();
  //@ts-ignore
  const { coreValues } = translations[locale].homepage;

  return (
    <div className="mx-[1.4rem] md:mx-[5rem] lg:mx-0 lg:mb-2 lg:mt-[8rem]">
      <h2 className={`font-bold text-[1.6rem] mb-[3rem] lg:w-full lg:text-center lg:mb-[11rem] ${locale === 'ar' ? 'font-[zain] text-right' : ''}`}>
        {coreValues.title}
      </h2>

      <ValueDesktop />

      {coreValues.values.map((value: any, index: any) => (
        <Value
          key={index}
          img={
            value.title.toLowerCase().includes("creativity") || value.title.toLowerCase().includes("التميز")
              ? "values-creativity"
              : value.title.toLowerCase().includes("centricity") || value.title.toLowerCase().includes("تجربة العميل")
              ? "centricity"
              : value.title.toLowerCase().includes("excellence") || value.title.toLowerCase().includes("الإبداع")
              ? "excellence"
              : "innovation"
          }
          title={value.title}
          text={value.description}
        />
      ))}
    </div>
  );
};

export default Values;
