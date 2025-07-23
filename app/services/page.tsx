"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { translations } from "../translation";
import Link from "../ui/link";
import { motion, AnimatePresence } from "framer-motion";

const Services = () => {
  const { locale } = useLanguage();
  const [openService, setOpenService] = useState<string | null>(null);

  const servicesKeys = [
    "eventManagement",
    "registration",
    "branding",
    "creativeConcept",
    "production",
    "crowd",
  ];

  const toggleService = (key: string) => {
    setOpenService(openService === key ? null : key);
  };

  //@ts-ignore
  const t = translations[locale];

  const refs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.15 }
    );

    refs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      refs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="text-white min-h-[100vh] pt-[10rem] pl-[2rem] lg:max-w-[70vw] mb-[12rem] mx-auto">
      <div className="w-full flex flex-col mb-4">
        <div className="mb-[4rem] flex flex-col pr-5">
          {locale === "en" ? (
            <h1 className="text-[4rem] font-monsterrat lg:text-[3.5rem] leading-none mb-4 lg:mb-0">
              <br className="lg:hidden" /> Our Services{" "}
              {/* <span className="text-secondary leading-none ">
                .
              </span>
              <span className="text-primary leading-none ">.</span>{" "} */}
            </h1>
          ) : (
            <h1 className="text-[4rem] lg:text-[3.5rem] text-right font-[zain] leading-none mb-4 lg:mb-0">
              خدماتنا 
            </h1>
          )}

          <p
            className={`whitespace-pre-line my-[3rem] text-[2rem] lg:text-[1.5rem] lg:w-full leading-[2.4rem] font-light ${
              locale === "ar"
                ? "font-[zain] text-right lg:mt-[0] lg:mb-[2rem] w-full"
                : "font-outfit lg:mt-[2rem] lg:mb-[3rem] w-[80%]"
            }`}
          >
            {/* {t.services.intro} */}
          </p>

          <Link
            color="white"
            bg="#FF002C"
            text={`${locale === "ar" ? "تواصل معنا" : "Get in Touch"}`}
            href="/contact"
            className={`${locale === "ar" ? "ml-auto" : "mr-auto"}`}
          />
        </div>

        {servicesKeys.map((key, index) => {
          const iconNumber = (index + 1).toString().padStart(2, "0");

          return (
            <div
              key={key}
              // @ts-ignore
              ref={(el) => (refs.current[index] = el)}
              className="relative grid grid-cols-[minmax(0,1fr)_3fr_minmax(0,1fr)] items-start gap-1 pb-[3rem] after:absolute lg:max-w-[70vw] after:bottom-0 after:left-0 after:w-full after:h-px after:bg-white after:opacity-30 mb-[2.5rem] transition-all duration-700 ease-in-out opacity-0 translate-y-10"
            >
              <div className="flex justify-center">
                <img
                  src={`/icons/${iconNumber}-desktop.svg`}
                  alt={iconNumber}
                  className={`mt-[0.6rem] bg-contain ${
                    iconNumber == "01" ? "lg:w-[8rem] lg:-ml-[5vw]" : ""
                  }`}
                />
              </div>

              <div
                className={`flex flex-col mx-auto lg:ml-[8rem] flex-1 w-fit mx-auto pl-[12%] lg:pl-2 ${
                  locale === "ar" ? "text-right" : ""
                }`}
              >
                <h2
                  className={`text-[2.3rem] font-bold w-fit ${
                    locale === "ar" ? "text-right font-[zain]" : "font-outfit"
                  } w-full`}
                >
                  {t.services[key].title}
                </h2>
                <p
                  className={`text-[1.1rem] my-[1rem] flex ${
                    locale === "ar"
                      ? "text-right font-[zain]"
                      : "text-left font-outfit"
                  } w-full`}
                >
                  {t.services[key].description}
                </p>

                <AnimatePresence initial={false}>
                  {openService === key && (
                    <motion.ul
                      className={`text-[1rem] lg:w-[85%] ml-4 overflow-hidden ${
                        locale === "ar" ? "font-[zain]" : "font-outfit"
                      }`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      {t.services[key].items.map((item: string, i: number) => (
                        <li
                          key={i}
                          className={`relative mb-2 ${
                            locale === "ar"
                              ? "pr-5 text-right"
                              : "pl-5 text-left"
                          } before:content-[''] before:absolute before:top-2 before:w-2 before:h-2 before:rounded-full ${
                            locale === "ar" ? "before:right-0" : "before:left-0"
                          } ${
                            i % 2 === 0
                              ? "before:bg-[#FF002C]"
                              : "before:bg-[#EAA8E1]"
                          }`}
                        >
                          {item}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>

              <div className="relative flex items-start justify-end pr-5">
                <button
                  onClick={() => toggleService(key)}
                  className="absolute top-0 right-0 p-2 text-white border-1 border-[#FF002C] rounded-full mr-5"
                  aria-label={`Toggle ${t.services[key].title}`}
                >
                  {openService === key ? (
                    <ChevronUp size={24} />
                  ) : (
                    <ChevronDown size={24} />
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
