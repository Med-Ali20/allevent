"use client";

import React, { useState } from "react";
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

  return (
    <div className={`${className} mx-[1.4rem] md:mx-[5rem]`}>
      <ServiceDesktop />
      <Service
        img="01"
        title={services.eventManagement}
        text={services.eventManagementDescription}
      />
      <Service
        img="02"
        title={services.eventRegisteration}
        text={services.eventRegisterationDescription}
      />
      <Service
        img="03"
        title={services.branding}
        text={services.brandingDescription}
      />
      <Service
        img="04"
        title={services.concept}
        text={services.conceptDescription}
      />
      <Service
        img="05"
        title={services.production}
        text={services.productionDescription}
      />
      <Service
        img="06"
        title={services.crowd}
        text={services.crowdDescription}
      />
    </div>
  );
};

export default Services;
