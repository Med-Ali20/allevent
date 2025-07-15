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
      className={`pt-40 px-6 md:px-20 text-white mb-[3rem] relative ${
        isArabic ? "text-right font-[zain]" : "text-left"
      }`}
    >
      <section className="max-w-4xl mx-auto space-y-8 leading-relaxed">
        <h1 className="text-3xl font-bold">{t.policy}</h1>

        <article className="space-y-4">
          <p>{t.consent}</p>
          <p>{t.collect}</p>
          <p>{t.personalData}</p>
          <p>{t.analyticsData}</p>
          <p>{t.consentWithdrawal}</p>
          <p>{t.dataUsage}</p>
          <p>{t.dataRetention}</p>
          <p>{t.externalLinks}</p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-semibold">{t.dpoTitle}</h2>
          <p>{t.dpoContact}</p>
        </article>

        <h1 className="text-3xl font-bold pt-8">{t.disclaimer}</h1>

        <article className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold">{t.liability}</h2>
            <p>{t.liabilityText}</p>
            <p>{t.thirdPartyData}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">{t.noWarranties}</h2>
            <p>{t.noWarrantiesText}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">{t.indemnification}</h2>
            <p>{t.indemnificationText}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">{t.fraudWarning}</h2>
            <p>{t.fraudWarningText}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">{t.waiver}</h2>
            <p>{t.waiverText}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">{t.virusProtection}</h2>
            <p>{t.virusProtectionText}</p>
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
