import React from "react";
import Service from "@/app/components/service";
import ServiceDesktop from "@/app/components/service/parallax";

type Props = {
  className: string;
};

const Services: React.FC<Props> = ({ className }) => {
  return (
    <div className={`${className} mx-[1.4rem] md:mx-[5rem]`}>
      <ServiceDesktop />
      <Service
        img="01"
        title="Event Management"
        text="Full-service event management from concept to closing. Working closely with your team, we ensure flawless execution through every touchpoint."
      />
      <Service
        img="02"
        title="Event Registration"
        text="From branded digital platforms 
        to check-in systems and on-site support, Allevent ensures seamless registration, check-in, and credentialing."
      />
      <Service
        img="03"
        title="Branding, Visual Identity,Event Design"
        text="Keeping your brand top-of-mind with your guests, we offer end-to-end visual identity to ensure a cohesive guest experience."
      />
      <Service img="04" title="Concept Development" text="Working closely with your team, we transform ideas into impactful themes and unforgettable event experiences."  />
      <Service img="05" title="Production Management" text="We provide technical production support, stage design, and show running for conferences, trade shows, launches, and more." />
      <Service img="06" title="Crowd Control" text="Enjoy a safe, secure, enjoyable, and frictionless experience for event guests, VIPs, and all stakeholders." />
    </div>
  );
};

export default Services;
