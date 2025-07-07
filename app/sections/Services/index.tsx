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
      <Service />
      <Service />
      <Service />
      <Service />
      <Service />
      <Service />
    </div>
  );
};

export default Services;
