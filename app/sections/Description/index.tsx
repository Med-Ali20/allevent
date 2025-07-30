"use client";

import React, { useState } from "react";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { translations } from "../../translation";

type Props = {
  className: string;
};

const index: React.FC<Props> = ({ className }) => {
  const { locale } = useLanguage();
  const [openService, setOpenService] = useState<string | null>(null);
  

  //@ts-ignore
    const t = translations[locale];

  return (
    <div
    dir={locale === "ar" ? "rtl" : ""}
      className={`${className} mx-[1.4rem] md:mx-[5rem] mt-[5rem] mb-[8rem] lg:mb-2 ${locale === 'ar' ? 'text-justify font-[zain]' : 'text-justify'}`}
    >
      <h2 className="text-[2.3rem] md:text-[1.7rem] font-bold lg:leading-[2rem]">
        <span className="text-[#959595]">
          {t.homepage.impressions}
        </span>
        {t.homepage.ideation}
      </h2>

      <img src="/images/1.jpg" alt="allevent" className="my-[3rem]" />
      <p className={`md:text-[1.3rem] text-justify ${locale === 'en' ? 'font-outfit text-[1.6rem]' : 'font-[zain] text-[2rem] lg:text-[1.5rem] lg:leading-[1.8rem]'}`}>
        {t.homepage.attention} <br className="lg:mb-4" /> {t.homepage.passion}
      </p>
    </div>
  );
};

export default index;
