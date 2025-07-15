"use client";

import { useState, useEffect } from "react";
import Link from "@/app/ui/link";
import Language from "@/app/components/language";
import { useLanguage } from "@/app/contexts/LanguageContext";

type Props = {
  setShowMenu: any;
};

const Header: React.FC<Props> = ({ setShowMenu }) => {
  const { locale } = useLanguage();

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show header when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      }
      // Hide header when scrolling down (after 10px threshold)
      else if (currentScrollY > lastScrollY && currentScrollY > 10) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`flex items-center p-4 lg:py-[1.72rem] lg:px-[4.5rem] ${
        locale === "ar" ? "font-[zain]" : "font-outfit"
      } font-light fixed top-0 right-0 left-0 z-100 transition-transform duration-600 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <a href="/" className="mr-auto">
        <img
          src="/icons/logo.svg"
          srcSet="/icons/logo-mobile.svg 179w, /icons/logo.svg 239w"
          sizes="(max-width: 768px) 178px, 239px"
          alt="allevent"
        />
      </a>
      <Language />
      <img
        src="/icons/burger-icon.svg"
        alt="menu"
        onClick={() => setShowMenu(true)}
        className="lg:hidden cursor-pointer"
      />
      <nav className="hidden lg:block">
        <ul className="flex items-center text-white">
          <li className="mx-[1.8rem]"></li>
          <li className="mx-[1.8rem]">
            <a href="/services"> {locale === 'en' ? 'Services' : 'الخدمات'} </a>
          </li>
          <li className="mx-[1.8rem]">
            <Link color="white" text={`${locale === 'en' ? "Let's talk" : 'تواصل معنا'}`} href="/contact" />
          </li>
          <li className="mr-3 ml-[1.8rem]">
            <a
              href="https://www.instagram.com/allevent_ksa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/instagram.svg" alt="instagram" />
            </a>
          </li>
          <li className="mx-3">
            <a
              href="https://www.linkedin.com/company/alleventksa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/linkedin.svg" alt="instagram" />
            </a>
          </li>
          <li className="ml-3">
            <a
              href="https://wa.me/+966555363676"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/whatsapp.svg" alt="instagram" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
