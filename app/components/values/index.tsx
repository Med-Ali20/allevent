import React from "react";
import { useLanguage } from "@/app/contexts/LanguageContext";

type Props = {
  img: string;
  title: string;
  text: string;
};

const value: React.FC<Props> = ({ img, title, text }) => {
  const { locale } = useLanguage();

  return (
    <div className="bg-[#141619] flex flex-col px-[2rem] mb-[2rem] pb-[2rem] lg:hidden">
      <img
        src={`/icons/${img}.svg`}
        alt="creativity"
        className={`w-[8.5rem] my-[3rem] ${locale === 'ar' ? 'ml-auto' : ''}`}
      />
      <h3 className={`font-bold mt-[2rem] text-[1.6rem] ${locale === 'ar' ? 'font-[zain] text-right' : 'font-outfit'}`}>{title}</h3>
      <p className={`font-light text-[1.6rem] mt-2  ${locale === 'ar' ? 'font-[zain] text-right' : 'font-outfit'}`}>{text}</p>
    </div>
  );
};

export default value;
