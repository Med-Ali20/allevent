import React from "react";
import Link from "@/app/ui/link";
import { useLanguage } from "@/app/contexts/LanguageContext";


type Props = {
  showMenu: boolean;
  setShowMenu: any;
};

const menu: React.FC<Props> = ({ showMenu, setShowMenu }) => {
    const { locale } = useLanguage();

  return (
    <div className={`lg:hidden fixed top-0 left-0 right-0 bottom-0 bg-dark z-100 transition-transform duration-300 ease-in-out ${
      showMenu ? 'translate-x-0' : 'translate-x-full'
    }`}>
      <div className="flex p-[2rem]">
        <a href="/" className="mr-auto">
          <img
            src="/icons/logo.svg"
            srcSet="/icons/logo-mobile.svg 179w, /icons/logo.svg 239w"
            sizes="(max-width: 768px) 178px, 239px"
            alt="allevent"
          />
        </a>
        <span onClick={() => setShowMenu(false)}>
          <img src="/icons/close.svg" alt="" className="cursor-pointer" />
        </span>
      </div>
      <div className="flex font-outfit flex-col items-center gap-12 h-[80%] justify-center">
        <a
          href="/services"
          className={`text-white font-light ${locale === 'ar' ? 'font-[zain] text-[2.2rem]' : 'font-outfit text-[2rem]'}`}
        >
          { locale === 'en' ? 'Services' : 'الخدمات' }
        </a>
        <Link href="/contact" color="white" bg="#FF002C" text={`${locale === 'en' ? "Let's talk" : 'تواصل معنا'}`} />
      </div>
      <ul className="flex lg:hidden items-center text-white mb-[3rem] mr-[3rem] justify-center">
        <li className="mr-3 ml-[1.8rem]">
          <a href="https://www.instagram.com/allevent_ksa/" target="_blank" rel="noopener noreferrer">
            <img src="/icons/instagram.svg" alt="instagram"/>
          </a>
        </li>
        <li className="mx-3">
          <a href="https://www.linkedin.com/company/alleventksa" target="_blank" rel="noopener noreferrer">
            <img src="/icons/linkedin.svg" alt="instagram"/>
          </a>
        </li>
        <li className="ml-3">
          <a href="https://wa.me/+966555363676" target="_blank" rel="noopener noreferrer">
            <img src="/icons/whatsapp.svg" alt="instagram"/>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default menu;