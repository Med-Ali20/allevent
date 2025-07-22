"use client";

import React, { useEffect, useRef } from "react";
import Service from "./desktop";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { translations } from "@/app/translation";

const ServiceDesktop = () => {
  const { locale } = useLanguage();
  //@ts-ignore
  const t = translations[locale];
  const services = t.homepage.services;

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

  const serviceData = [
    {
      img: "1",
      title: services.eventManagement,
      description: services.eventManagementDescription,
    },
    {
      img: "2",
      title: services.eventRegisteration,
      description: services.eventRegisterationDescription,
    },
    {
      img: "3",
      title: services.branding,
      description: services.brandingDescription,
    },
    {
      img: "4",
      title: services.concept,
      description: services.conceptDescription,
    },
    {
      img: "5",
      title: services.production,
      description: services.productionDescription,
    },
    {
      img: "6",
      title: services.crowd,
      description: services.crowdDescription,
    },
  ];

  return (
    <div className="mt-[4rem] space-y-10">
      {serviceData.map((service, index) => (
        <div
          key={index}
          // @ts-ignore
          ref={(el) => (refs.current[index] = el)}
          className="transition-all duration-700 ease-in-out opacity-0 translate-y-10"
        >
          <Service
            img={service.img}
            title={service.title}
            descrtiption={service.description}
          />
        </div>
      ))}
    </div>
  );
};

export default ServiceDesktop;
