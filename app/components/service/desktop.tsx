import React from "react";
import { useLanguage } from "@/app/contexts/LanguageContext";

type Props = {
  img: string;
  title: string;
  descrtiption: string;
};

const desktop: React.FC<Props> = ({ img, title, descrtiption }) => {
  const { locale } = useLanguage();

  return (
    <div className="lg:grid grid-cols-[minmax(0,1fr)_3fr_minmax(0,1fr)] items-start hidden gap-1 pb-[3rem] relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-white after:opacity-30 mb-[2.5rem]">
      <div className="flex justify-center">
        <img
          src={`/icons/0${img}-desktop.svg`}
          alt="1"
          className={`mt-[0.6rem]  ${
            img !== "1" ? "w-[20rem]" : "w-[8rem] -ml-[3rem]"
          } bg-contain`}
        />
      </div>
      <div className="flex flex-col mx-auto flex-1 w-fit mx-auto pl-[12%] lg:pl-2">
        <h2 className={`text-[2.3rem] font-bold ${locale === 'ar' ? 'font-[zain] text-right w-full mt-1' : 'w-fit'}`}>{title}</h2>
        <p className={`my-[2rem] flex  ${locale === 'ar' ? 'font-[zain] text-right w-full text-[1.4rem]' : 'font-outfit text-left  w-[85%] text-[1.1rem] '}`}>
          {descrtiption}
        </p>
        {locale === 'ar' && (
          <a
            href="/services"
            className="text-[1rem] py-[1rem] px-[2rem] border-primary rounded-full border-1 font-[zain] w-fit ml-auto"
          >
            تعرّف على المزيد
          </a>
        )}
      </div>
      {locale === 'en' && (
        <a
          href="/services"
          className="text-[1rem] py-[1rem] px-[2rem] border-primary rounded-full border-1 mt-auto ml-auto mb-[3rem] font-outfit"
        >
          Learn More
        </a>
      )}
    </div>
  );
};

export default desktop;