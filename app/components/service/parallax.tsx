"use client";

import React from "react";
import Service from "./desktop";
import { Parallax } from "react-scroll-parallax";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { translations } from "@/app/translation";

const ServiceDesktop = () => {
  const { locale } = useLanguage();

  //@ts-ignore
  const t = translations[locale];
  const services = t.homepage.services;

  return (
    <div className="mt-[4rem]">
      <Parallax speed={5} opacity={[0, 1]} translateY={['250px', '0px']}>
        <Service
          img="1"
          title={services.eventManagement}
          descrtiption={services.eventManagementDescription}
        />
      </Parallax>

      <Parallax speed={10} opacity={[0, 1]}  translateY={['250px', '0px']}>
        <Service
          img="2"
          title={services.eventRegisteration}
          descrtiption={services.eventRegisterationDescription}
        />
      </Parallax>

      <Parallax speed={15} opacity={[0, 1]}  translateY={['250px', '0px']}>
        <Service
          img="3"
          title={services.branding}
          descrtiption={services.brandingDescription}
        />
      </Parallax>

      <Parallax speed={20} opacity={[0, 1]}  translateY={['250px', '0px']}>
        <Service
          img="4"
          title={services.concept}
          descrtiption={services.conceptDescription}
        />
      </Parallax>

      <Parallax speed={25} opacity={[0, 1]}  translateY={['250px', '0px']}>
        <Service
          img="5"
          title={services.production}
          descrtiption={services.productionDescription}
        />
      </Parallax>

      <Parallax speed={30} opacity={[0, 1]}  translateY={['250px', '0px']}>
        <Service
          img="6"
          title={services.crowd}
          descrtiption={services.crowdDescription}
        />
      </Parallax>
    </div>
  );
};

export default ServiceDesktop;
