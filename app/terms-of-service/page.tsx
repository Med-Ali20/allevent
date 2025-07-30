"use client";

import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translation";

const Terms = () => {
  const { locale } = useLanguage();
  // @ts-ignore
  const t = translations[locale];

  const isArabic = locale === "ar";

  return (
    <div
      dir={locale === "ar" ? "rtl" : "ltr"}  
      className={`pt-40 px-6 md:px-20 text-white max-w-[90%] text-[1.4rem] relative mb-[15rem] lg:mx-auto text-justify ${
        isArabic ? "font-[zain]" : "font-outfit"
      }`}
    >
      <h1
        className={`text-3xl font-bold mb-4 text-[3rem] text-justify ${
          isArabic ? "font-[zain]" : "font-montserrat"
        }`}
      >
        {t.terms}
      </h1>
      <p className="mb-2 leading-[0.5rem] mt-[3rem] text-justify">{t.tosEffectiveDate}</p>
      <p className="mb-4 mb-[3rem] text-justify">{t.tosCompanyName}</p>
      <p className="mb-6 whitespace-pre-line text-justify">{t.tosIntro}</p>

      <div className="p-[2rem] mb-2 mt-[3rem]">
        <h2
          className={`text-2xl mb-4 font-bold text-justify ${
            isArabic ? "font-[zain]" : "font-outfit"
          }`}
        >
          {t.tosServicesHeader}
        </h2>
        <p className="mb-6 whitespace-pre-line font-light text-justify">{t.tosServices}</p>
      </div>

      <div className="p-[2rem] mb-2 mt-[1rem]">
        <h2
          className={`text-2xl mb-4 font-bold text-justify ${
            isArabic ? "font-[zain]" : "font-outfit"
          }`}
        >
          {t.tosClientResponsibilitiesHeader}
        </h2>
        <p className="mb-6 whitespace-pre-line font-light text-justify">
          {t.tosClientResponsibilities}
        </p>
      </div>

      <div className="p-[2rem] mb-2 mt-[1rem]">
        <h2
          className={`text-2xl mb-4 font-bold text-justify ${
            isArabic ? "font-[zain]" : "font-outfit"
          }`}
        >
          {t.tosPaymentTermsHeader}
        </h2>
        <p className="mb-6 whitespace-pre-line text-justify">{t.tosPaymentTerms}</p>
      </div>

      <div className="p-[2rem] mb-2 mt-[1rem]">
        <h2
          className={`text-2xl mb-4 font-bold text-justify ${
            isArabic ? "font-[zain]" : "font-outfit"
          }`}
        >
          {t.tosCancellationHeader}
        </h2>
        <p className="mb-6 whitespace-pre-line text-justify">{t.tosCancellation}</p>
      </div>

      <div className="p-[2rem] mb-2 mt-[1rem]">
        <h2
          className={`text-2xl mb-4 font-bold text-justify ${
            isArabic ? "font-[zain]" : "font-outfit"
          }`}
        >
          {t.tosForceMajeureHeader}
        </h2>
        <p className="mb-6 whitespace-pre-line text-justify">{t.tosForceMajeure}</p>
      </div>

      <div className="p-[2rem] mb-2 mt-[1rem]">
        <h2
          className={`text-2xl mb-4 font-bold text-justify ${
            isArabic ? "font-[zain]" : "font-outfit"
          }`}
        >
          {t.tosLimitationOfLiabilityHeader}
        </h2>
        <p className="mb-6 whitespace-pre-line text-justify">{t.tosLimitationOfLiability}</p>
      </div>

      <div className="p-[2rem] mb-2 mt-[1rem]">
        <h2
          className={`text-2xl mb-4 font-bold text-justify ${
            isArabic ? "font-[zain]" : "font-outfit"
          }`}
        >
          {t.tosIntellectualPropertyHeader}
        </h2>
        <p className="mb-6 whitespace-pre-line text-justify">{t.tosIntellectualProperty}</p>
      </div>

      <div className="p-[2rem] mb-2 mt-[1rem]">
        <h2
          className={`text-2xl mb-4 font-bold text-justify ${
            isArabic ? "font-[zain]" : "font-outfit"
          }`}
        >
          {t.tosConfidentialityHeader}
        </h2>
        <p className="mb-6 whitespace-pre-line text-justify">{t.tosConfidentiality}</p>
      </div>

      <div className="p-[2rem] mb-2 mt-[1rem]">
        <h2
          className={`text-2xl mb-4 font-bold text-justify ${
            isArabic ? "font-[zain]" : "font-outfit"
          }`}
        >
          {t.tosConductSafetyHeader}
        </h2>
        <p className="mb-6 whitespace-pre-line text-justify">{t.tosConductSafety}</p>
      </div>

      <div className="p-[2rem] mb-2 mt-[1rem]">
        <h2
          className={`text-2xl mb-4 font-bold text-justify ${
            isArabic ? "font-[zain]" : "font-outfit"
          }`}
        >
          {t.tosModificationsHeader}
        </h2>
        <p className="mb-6 whitespace-pre-line text-justify">{t.tosModifications}</p>
      </div>

      <div className="p-[2rem] mb-2 mt-[1rem]">
        <h2
          className={`text-2xl mb-4 font-bold text-justify ${
            isArabic ? "font-[zain]" : "font-outfit"
          }`}
        >
          {t.tosGoverningLawHeader}
        </h2>
        <p className="mb-6 whitespace-pre-line text-justify">{t.tosGoverningLaw}</p>
      </div>

      <div className="p-[2rem] mb-6 mt-[1rem]">
        <h2
          className={`text-2xl mb-4 font-bold text-justify ${
            isArabic ? "font-[zain]" : "font-outfit"
          }`}
        >
          {t.tosContactHeader}
        </h2>
        <p className="mb-6 whitespace-pre-line text-justify">{t.tosContact}</p>
      </div>
      <img
        src="/icons/circles-about.svg"
        alt=""
        className="hidden lg:block absolute top-[18rem] -left-[5rem] w-[8rem]"
      />
      <img
        src="/icons/circles-red.svg"
        alt=""
        className="hidden lg:block absolute top-[38rem] -left-[5rem] w-[4rem]"
      />
    </div>
  );
};

export default Terms;