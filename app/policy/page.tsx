"use client";

import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translation";

const PrivacyPolicy = () => {
  const { locale } = useLanguage();
  // @ts-ignore
  const t = translations[locale];

  const isArabic = locale === "ar";

  return (
    <div
      dir={locale === "ar" ? "rtl" : ""}
      className={`pt-40 px-6 md:px-20 text-white  mb-[15rem] relative ${
        isArabic ? "text-justify font-[zain]" : "text-justify"
      }`}
    >
      <section className="max-w-4xl mx-auto space-y-8 leading-relaxed">
        <h1 className="text-3xl font-bold">{t.policy}</h1>

        <article className="space-y-4">
          <p
            className={`text-[2rem] md:text-[1.6rem] text-justify  leading-[2.4rem] mb-[4rem]  ${
              locale === "ar"
                ? "text-justify lg:mb-[1.5rem] leading-relaxed lg:text-[1.3rem] 2xl:text-[1.2rem] lg:mt-[0] lg:leading-[1.5rem]"
                : "lg:mb-[2.5rem] lg:text-[1.2rem] lg:leading-[1.3rem] lg:leading-[1.5rem] lg:mt-[0.5rem]"
            }`}
          >
            {t.consent}
          </p>
          <p
            className={`text-[2rem] md:text-[1.6rem] text-justify  leading-[2.4rem] mb-[4rem]  ${
              locale === "ar"
                ? "text-justify lg:mb-[1.5rem] leading-relaxed lg:text-[1.3rem] 2xl:text-[1.2rem] lg:mt-[0] lg:leading-[1.5rem]"
                : "lg:mb-[2.5rem] lg:text-[1.2rem] lg:leading-[1.3rem] lg:leading-[1.5rem] lg:mt-[0.5rem]"
            }`}
          >
            {t.collect}
          </p>
          <p
            className={`text-[2rem] md:text-[1.6rem] text-justify  leading-[2.4rem] mb-[4rem]  ${
              locale === "ar"
                ? "text-justify lg:mb-[1.5rem] leading-relaxed lg:text-[1.3rem] 2xl:text-[1.2rem] lg:mt-[0] lg:leading-[1.5rem]"
                : "lg:mb-[2.5rem] lg:text-[1.2rem] lg:leading-[1.3rem] lg:leading-[1.5rem] lg:mt-[0.5rem]"
            }`}
          >
            {t.personalData}
          </p>
          <p
            className={`text-[2rem] md:text-[1.6rem] text-justify  leading-[2.4rem] mb-[4rem]  ${
              locale === "ar"
                ? "text-justify lg:mb-[1.5rem] leading-relaxed lg:text-[1.3rem] 2xl:text-[1.2rem] lg:mt-[0] lg:leading-[1.5rem]"
                : "lg:mb-[2.5rem] lg:text-[1.2rem] lg:leading-[1.3rem] lg:leading-[1.5rem] lg:mt-[0.5rem]"
            }`}
          >
            {t.analyticsData}
          </p>
          <p
            className={`text-[2rem] md:text-[1.6rem] text-justify  leading-[2.4rem] mb-[4rem]  ${
              locale === "ar"
                ? "text-justify lg:mb-[1.5rem] leading-relaxed lg:text-[1.3rem] 2xl:text-[1.2rem] lg:mt-[0] lg:leading-[1.5rem]"
                : "lg:mb-[2.5rem] lg:text-[1.2rem] lg:leading-[1.3rem] lg:leading-[1.5rem] lg:mt-[0.5rem]"
            }`}
          >
            {t.consentWithdrawal}
          </p>
          <p
            className={`text-[2rem] md:text-[1.6rem] text-justify  leading-[2.4rem] mb-[4rem]  ${
              locale === "ar"
                ? "text-justify lg:mb-[1.5rem] leading-relaxed lg:text-[1.3rem] 2xl:text-[1.2rem] lg:mt-[0] lg:leading-[1.5rem]"
                : "lg:mb-[2.5rem] lg:text-[1.2rem] lg:leading-[1.3rem] lg:leading-[1.5rem] lg:mt-[0.5rem]"
            }`}
          >
            {t.dataUsage}
          </p>
          <p
            className={`text-[2rem] md:text-[1.6rem] text-justify  leading-[2.4rem] mb-[4rem]  ${
              locale === "ar"
                ? "text-justify lg:mb-[1.5rem] leading-relaxed lg:text-[1.3rem] 2xl:text-[1.2rem] lg:mt-[0] lg:leading-[1.5rem]"
                : "lg:mb-[2.5rem] lg:text-[1.2rem] lg:leading-[1.3rem] lg:leading-[1.5rem] lg:mt-[0.5rem]"
            }`}
          >
            {t.dataRetention}
          </p>
          <p
            className={`text-[2rem] md:text-[1.6rem] text-justify  leading-[2.4rem] mb-[4rem]  ${
              locale === "ar"
                ? "text-justify lg:mb-[1.5rem] leading-relaxed lg:text-[1.3rem] 2xl:text-[1.2rem] lg:mt-[0] lg:leading-[1.5rem]"
                : "lg:mb-[2.5rem] lg:text-[1.2rem] lg:leading-[1.3rem] lg:leading-[1.5rem] lg:mt-[0.5rem]"
            }`}
          >
            {t.externalLinks}
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-semibold">{t.dpoTitle}</h2>
          <p
            className={`text-[2rem] md:text-[1.6rem] text-justify  leading-[2.4rem] mb-[4rem]  ${
              locale === "ar"
                ? "text-justify lg:mb-[1.5rem] leading-relaxed lg:text-[1.3rem] 2xl:text-[1.2rem] lg:mt-[0] lg:leading-[1.5rem]"
                : "lg:mb-[2.5rem] lg:text-[1.2rem] lg:leading-[1.3rem] lg:leading-[1.5rem] lg:mt-[0.5rem]"
            }`}
          >
            {t.dpoContact}
          </p>
        </article>

        <h1 className="text-3xl font-bold pt-8">{t.disclaimer}</h1>

        <article className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold">{t.liability}</h2>
            <p
              className={`text-[2rem] md:text-[1.6rem] text-justify  leading-[2.4rem] mb-[4rem]  ${
                locale === "ar"
                  ? "text-justify lg:mb-[1.5rem] leading-relaxed lg:text-[1.3rem] 2xl:text-[1.2rem] lg:mt-[0] lg:leading-[1.5rem]"
                  : "lg:mb-[2.5rem] lg:text-[1.2rem] lg:leading-[1.3rem] lg:leading-[1.5rem] lg:mt-[0.5rem]"
              }`}
            >
              {t.liabilityText}
            </p>
            <p
              className={`text-[2rem] md:text-[1.6rem] text-justify  leading-[2.4rem] mb-[4rem]  ${
                locale === "ar"
                  ? "text-justify lg:mb-[1.5rem] leading-relaxed lg:text-[1.3rem] 2xl:text-[1.2rem] lg:mt-[0] lg:leading-[1.5rem]"
                  : "lg:mb-[2.5rem] lg:text-[1.2rem] lg:leading-[1.3rem] lg:leading-[1.5rem] lg:mt-[0.5rem]"
              }`}
            >
              {t.thirdPartyData}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">{t.noWarranties}</h2>
            <p
              className={`text-[2rem] md:text-[1.6rem] text-justify  leading-[2.4rem] mb-[4rem]  ${
                locale === "ar"
                  ? "text-justify lg:mb-[1.5rem] leading-relaxed lg:text-[1.3rem] 2xl:text-[1.2rem] lg:mt-[0] lg:leading-[1.5rem]"
                  : "lg:mb-[2.5rem] lg:text-[1.2rem] lg:leading-[1.3rem] lg:leading-[1.5rem] lg:mt-[0.5rem]"
              }`}
            >
              {t.noWarrantiesText}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">{t.indemnification}</h2>
            <p
              className={`text-[2rem] md:text-[1.6rem] text-justify  leading-[2.4rem] mb-[4rem]  ${
                locale === "ar"
                  ? "text-justify lg:mb-[1.5rem] leading-relaxed lg:text-[1.3rem] 2xl:text-[1.2rem] lg:mt-[0] lg:leading-[1.5rem]"
                  : "lg:mb-[2.5rem] lg:text-[1.2rem] lg:leading-[1.3rem] lg:leading-[1.5rem] lg:mt-[0.5rem]"
              }`}
            >
              {t.indemnificationText}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">{t.fraudWarning}</h2>
            <p
              className={`text-[2rem] md:text-[1.6rem] text-justify  leading-[2.4rem] mb-[4rem]  ${
                locale === "ar"
                  ? "text-justify lg:mb-[1.5rem] leading-relaxed lg:text-[1.3rem] 2xl:text-[1.2rem] lg:mt-[0] lg:leading-[1.5rem]"
                  : "lg:mb-[2.5rem] lg:text-[1.2rem] lg:leading-[1.3rem] lg:leading-[1.5rem] lg:mt-[0.5rem]"
              }`}
            >
              {t.fraudWarningText}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">{t.waiver}</h2>
            <p
              className={`text-[2rem] md:text-[1.6rem] text-justify  leading-[2.4rem] mb-[4rem]  ${
                locale === "ar"
                  ? "text-justify lg:mb-[1.5rem] leading-relaxed lg:text-[1.3rem] 2xl:text-[1.2rem] lg:mt-[0] lg:leading-[1.5rem]"
                  : "lg:mb-[2.5rem] lg:text-[1.2rem] lg:leading-[1.3rem] lg:leading-[1.5rem] lg:mt-[0.5rem]"
              }`}
            >
              {t.waiverText}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">{t.virusProtection}</h2>
            <p
              className={`text-[2rem] md:text-[1.6rem] text-justify  leading-[2.4rem] mb-[4rem]  ${
                locale === "ar"
                  ? "text-justify lg:mb-[1.5rem] leading-relaxed lg:text-[1.3rem] 2xl:text-[1.2rem] lg:mt-[0] lg:leading-[1.5rem]"
                  : "lg:mb-[2.5rem] lg:text-[1.2rem] lg:leading-[1.3rem] lg:leading-[1.5rem] lg:mt-[0.5rem]"
              }`}
            >
              {t.virusProtectionText}
            </p>
          </div>
        </article>
        <img
          src="/icons/circles-about.svg"
          alt=""
          className="hidden lg:block absolute top-[18rem] left-0 w-[8rem]"
        />
        <img
          src="/icons/circles-red.svg"
          alt=""
          className="hidden lg:block absolute top-[38rem] left-0 w-[4rem]"
        />
      </section>
    </div>
  );
};

export default PrivacyPolicy;
