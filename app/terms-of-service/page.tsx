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
      className={`pt-40 px-6 md:px-20 text-white font-outfit max-w-[90%] text-[1.4rem] lg:max-w-[50%] lg:mx-auto ${
        isArabic ? "text-right" : "text-left"
      }`}
    >
      <h1 className="text-3xl font-bold mb-4 font-montserrat text-[3rem]">{t.terms}</h1>
      <p className="mb-2 leading-[0.5rem] mt-[3rem]">{t.tosEffectiveDate}</p>
      <p className="mb-4 mb-[3rem]">{t.tosCompanyName}</p>
      <p className="mb-6 whitespace-pre-line">{t.tosIntro}</p>

      <div className="bg-[#141619] p-[2rem] mb-2 mt-[3rem]">
        <h2 className="text-2xl mb-4 font-bold font-montserrat">
          {t.tosServicesHeader}
        </h2>
        <p className="mb-6 whitespace-pre-line font-light">{t.tosServices}</p>
      </div>

      <div className="bg-[#141619] p-[2rem] mb-2 mt-[1rem]">
        <h2 className="text-2xl font-semibold mb-4 font-bold font-montserrat">
          {t.tosClientResponsibilitiesHeader}
        </h2>
        <p className="mb-6 whitespace-pre-line font-light">
          {t.tosClientResponsibilities}
        </p>
      </div>

      <div className="bg-[#141619] p-[2rem] mb-2 mt-[1rem]">
        <h2 className="text-2xl font-bold mb-4 font-montserrat">
          {t.tosPaymentTermsHeader}
        </h2>
        <p className="mb-6 whitespace-pre-line">{t.tosPaymentTerms}</p>
      </div>

      <div className="bg-[#141619] p-[2rem] mb-2 mt-[1rem]">
        <h2 className="text-2xl font-bold mb-4 font-montserrat">
          {t.tosCancellationHeader}
        </h2>
        <p className="mb-6 whitespace-pre-line">{t.tosCancellation}</p>
      </div>

      <div className="bg-[#141619] p-[2rem] mb-2 mt-[1rem]">
        <h2 className="text-2xl font-bold mb-4 font-montserrat">
          {t.tosForceMajeureHeader}
        </h2>
        <p className="mb-6 whitespace-pre-line">{t.tosForceMajeure}</p>
      </div>

      <div className="bg-[#141619] p-[2rem] mb-2 mt-[1rem]">
        <h2 className="text-2xl font-bold mb-4 font-montserrat">
          {t.tosLimitationOfLiabilityHeader}
        </h2>
        <p className="mb-6 whitespace-pre-line">{t.tosLimitationOfLiability}</p>
      </div>

      <div className="bg-[#141619] p-[2rem] mb-2 mt-[1rem]">
        <h2 className="text-2xl font-bold mb-4 font-montserrat">
          {t.tosIntellectualPropertyHeader}
        </h2>
        <p className="mb-6 whitespace-pre-line">{t.tosIntellectualProperty}</p>
      </div>

      <div className="bg-[#141619] p-[2rem] mb-2 mt-[1rem]">
        <h2 className="text-2xl font-bold mb-4 font-montserrat">
          {t.tosConfidentialityHeader}
        </h2>
        <p className="mb-6 whitespace-pre-line">{t.tosConfidentiality}</p>
      </div>

      <div className="bg-[#141619] p-[2rem] mb-2 mt-[1rem]">
        <h2 className="text-2xl font-bold mb-4 font-montserrat">
          {t.tosConductSafetyHeader}
        </h2>
        <p className="mb-6 whitespace-pre-line">{t.tosConductSafety}</p>
      </div>

      <div className="bg-[#141619] p-[2rem] mb-2 mt-[1rem]">
        <h2 className="text-2xl font-bold mb-4 font-montserrat">
          {t.tosModificationsHeader}
        </h2>
        <p className="mb-6 whitespace-pre-line">{t.tosModifications}</p>
      </div>

      <div className="bg-[#141619] p-[2rem] mb-2 mt-[1rem]">
        <h2 className="text-2xl font-bold mb-4 font-montserrat">
          {t.tosGoverningLawHeader}
        </h2>
        <p className="mb-6 whitespace-pre-line">{t.tosGoverningLaw}</p>
      </div>

      <div className="bg-[#141619] p-[2rem] mb-6 mt-[1rem]">
        <h2 className="text-2xl font-bold mb-4 font-montserrat">
          {t.tosContactHeader}
        </h2>
        <p className="mb-6 whitespace-pre-line">{t.tosContact}</p>
      </div>
    </div>
  );
};

export default Terms;
