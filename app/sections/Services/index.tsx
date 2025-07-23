"use client";

import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { translations } from "../../translation";

import Service from "@/app/components/service";
import ServiceDesktop from "@/app/components/service/parallax";

type Props = {
  className: string;
};

const Services: React.FC<Props> = ({ className }) => {
  const { locale } = useLanguage();
  const [openService, setOpenService] = useState<string | null>(null);

  //@ts-ignore
  const t = translations[locale];
  const services = t.homepage.services;

  const refs = useRef<Array<HTMLDivElement | null>>([]);

  const mobileServiceData = [
    {
      img: "01",
      title: services.eventManagement,
      text: services.eventManagementDescription,
    },
    {
      img: "02",
      title: services.eventRegisteration,
      text: services.eventRegisterationDescription,
    },
    {
      img: "03",
      title: services.branding,
      text: services.brandingDescription,
    },
    {
      img: "04",
      title: services.concept,
      text: services.conceptDescription,
    },
    {
      img: "05",
      title: services.production,
      text: services.productionDescription,
    },
    {
      img: "06",
      title: services.crowd,
      text: services.crowdDescription,
    },
  ];

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
      {
        threshold: 0.2,
      }
    );

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className={`${className} mx-[1.4rem] md:mx-[5rem]`}>
      {/* Desktop */}
      <ServiceDesktop />

      {/* Mobile (animated reveal) */}
      <div className="lg:hidden space-y-10 mt-[4rem]">
        {mobileServiceData.map((service, index) => (
          <div
            key={index}
            // @ts-ignore
            ref={(el) => (refs.current[index] = el)}
            className="transition-all duration-700 ease-in-out opacity-0 translate-y-10"
          >
            <Service
              img={service.img}
              title={service.title}
              text={service.text}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
