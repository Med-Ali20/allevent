"use client";

import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translation";
import Link from "../ui/link";

const Contact = () => {
  const { locale } = useLanguage();
  // @ts-ignore
  const t = translations[locale];

  const isArabic = locale === "ar";

  return (
    <div
      className={`pt-40 px-6 md:px-20 text-white mb-[3rem] font-outfit  max-w-[90%] lg:max-w-[50%] lg:mx-auto ${
        isArabic ? "text-right" : "text-left"
      }`}
    >
      <h1 className="text-3xl font-bold mb-[3rem] font-montserrat text-[3rem]">
        {t.contact.title}
      </h1>

      <p className="font-light text-[1.8rem] leading-[2rem]">
        {t.contact.description}
      </p>
      <p className="font-light text-[2.4em] lg:text-[1.6rem] mt-[3rem] leading-[2rem]">
        info@allevent.com.sa
      </p>
      <p className="font-light text-[2.4em] lg:text-[1.6rem] ">0555363676</p>
      <h2 className="text-[2rem] my-[2rem]">{t.contact.requestQuote}</h2>
      <form
        action=""
        className={`mt-[3rem] ${isArabic ? "text-right" : "text-left"}`}
      >
        <div className="lg:flex w-full gap-6 lg:mb-[2rem]">
          <input
            type="text"
            placeholder={t.contact.name}
            className={`outline-none border-b-1 border-white w-full pb-3 mb-[2rem] lg:mb-0 ${isArabic ? "text-right" : "text-left"}`}
          />
          <input
            type="tel"
            placeholder={t.contact.phoneLabel}
            className={`outline-none border-b-1 border-white w-full pb-3 mb-[2rem] lg:mb-0 ${isArabic ? "text-right" : "text-left"}`}
          />
        </div>
        <input
          type="email"
          placeholder={t.contact.emailLabel}
          className={`outline-none border-b-1 border-white w-full pb-3 mb-[2rem] ${isArabic ? "text-right" : "text-left"}`}
        />
        <textarea
          placeholder={t.contact.message}
          className={`outline-none border-b-1 border-white w-full pb-3 mb-[3rem] ${isArabic ? "text-right" : "text-left"}`}
          rows={10}
        />
        <Link color="white" bg="#FF002C" text={t.contact.button} href="#" />
      </form>
    </div>
  );
};

export default Contact;
