"use client";

import React, { useState } from "react";
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
  console.log(locale);

  return (
    <div className="text-white min-h-[100vh] pt-[10rem] pl-[2rem] lg:max-w-[70vw] mx-auto">
      <div className="w-full flex flex-col items-center mb-4">
        <div className="mb-[4rem]">
          <h1 className="text-[4rem] lg:text-[3.5rem] leading-none mb-4 lg:mb-0">
            Innovative <br className="lg:hidden" /> Concepts{" "}
            <span className="text-primary -ml-[0.8rem] leading-none ">.</span>{" "}
            <br className="" /> Flawless <br className="lg:hidden" /> Execution{" "}
            <span className="text-secondary -ml-[0.8rem] leading-none ">.</span>
          </h1>

          <p className="whitespace-pre-line my-[3rem] lg:mt-[2rem] lg:mb-[3rem] text-[2rem] lg:text-[1.5rem] w-[80%] lg:w-full leading-[2.4rem] font-outfit font-light">
            {t.services.intro}
          </p>

          <Link color="white" bg="#FF002C" text="Get in Touch" href="#" />
        </div>

        {servicesKeys.map((key, index) => {
          const iconNumber = (index + 1).toString().padStart(2, "0");
          console.log(iconNumber);

          return (
            <div
              key={key}
              className="relative grid grid-cols-[minmax(0,1fr)_3fr_minmax(0,1fr)] items-start gap-1 pb-[3rem] after:absolute lg:max-w-[70vw] after:bottom-0 after:left-0 after:w-full after:h-px after:bg-white after:opacity-30 mb-[2.5rem]"
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
                    locale === "ar" ? "text-right" : ""
                  } w-full`}
                >
                  {t.services[key].title}
                </h2>
                <p
                  className={`text-[1.1rem] font-outfit my-[1rem] flex lg:w-[85%] text-left ${
                    locale === "ar" ? "text-right" : ""
                  } w-full`}
                >
                  {t.services[key].description}
                </p>

                <AnimatePresence initial={false}>
                  {openService === key && (
                    <motion.ul
                      className="list-disc list-inside text-[1rem] font-outfit lg:w-[85%] ml-4 overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      {t.services[key].items.map((item: string, i: number) => (
                        <li key={i}>{item}</li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>

              {/* Fixed-position toggle button */}
              <div className="relative flex items-start justify-end">
                <button
                  onClick={() => toggleService(key)}
                  className="absolute top-0 right-0 p-2 text-white"
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
