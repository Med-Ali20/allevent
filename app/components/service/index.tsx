import React from "react";
import { useLanguage } from "@/app/contexts/LanguageContext";


type Props = {
  img: string;
  title: string;
  text: string;
};

const Service: React.FC<Props> = ({ img, title, text }) => {

    const { locale } = useLanguage();
  

  return (
    <div className="flex items-start gap-15 lg:hidden pb-[3rem] relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-white after:opacity-30 mb-[2.5rem]">
      <img src={`/icons/${img}.svg`} alt="1" className={`mt-[0.6rem] ${img === '01'? 'w-[15rem] md:w-[10rem]' : ''}`} />
      <div className={`flex flex-col w-[70%]  ${img === '01' ? '-ml-[2rem]' : ''}`}>
        <h2 className={`text-[2rem] font-bold ${locale === 'ar' ? 'font-[zain] text-right mt-1' : ''}`}>{title}</h2>
        <p className={`ml-auto text-[1.6rem]  my-[2rem] ${locale === 'ar' ? 'font-[zain] text-right' : 'font-outfit'}`}>{text}</p>
        <a
          href="/services"
          className={`text-[1.4rem] py-[1.5rem] px-[4rem] mt-[7px] border-primary rounded-full border-1 w-fit ${locale === 'ar' ? 'font-[zain] text-right' : 'font-outfit'}`}
        >
          {locale === 'en' ? 'Learn More' : 'تعرّف على المزيد'}
        </a>
      </div>
    </div>
  );
};

export default Service;
