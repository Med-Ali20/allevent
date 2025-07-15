import Link from "@/app/ui/link";
import React from "react";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { translations } from "../../translation";

const EveryMomentMatters = () => {
  const { locale } = useLanguage();
    //@ts-ignore
    const { coreValues } = translations[locale].homepage;
  return (
    <div className="bg-primary w-full flex flex-col items-center px-[1.5rem] py-[2rem] relative mt-[6rem] lg:-mt-[10vw]">
      <h1 className={`text-white font-bold text-[2.5rem] text-center mb-[1rem] flex items-center justify-center z-10 ${locale === 'ar' ? 'font-[zain]' : ''}`}>
        {coreValues.closingNote.split(" ")[0]}{" "}
        <span className={`text-black ml-[8px] font-bold text-[2.5rem]`}>
          {coreValues.closingNote.split(" ").slice(1).join(" ")}
        </span>
      </h1>
      <p
        className={`text-white leading-[2rem] mb-[2rem] font-light text-center lg:max-w-[60%] lg:leading-[1.3] z-10 ${locale === 'ar' ? 'font-[zain] text-[2rem]  lg:text-[1.4rem]' : 'font-outfit text-[1.6rem]  lg:text-[1.1rem] '}`}
        style={{ fontWeight: 300 }}
      >
        {coreValues.closingNoteText}
      </p>
      <Link href="/contact" color="primary" bg="white" text={`${locale === 'ar' ? 'تواصل معنا' : 'Get in Touch'}`} />
      <img
        src="/icons/circles-callback.svg"
        alt="allevent"
        className="absolute w-[140px] lg:w-[260px] -top-[80px] lg:-top-[140px] right-[24%] lg:right-[35%]"
      />
    </div>
  );
};

export default EveryMomentMatters;
