import React from "react";
import Value from "@/app/components/values";
import ValueDesktop from "@/app/components/values/desktop";

const Values = () => {
  return (
    <div className="mx-[1.4rem] md:mx-[5rem] lg:mx-0 lg:mb-2 lg:mt-[8rem]">
      <h2 className="font-bold text-[1.6rem] mb-[3rem] lg:w-full lg:text-center lg:mb-[11rem]">
        Our Core Values
      </h2>
      <ValueDesktop />
      <Value
        img="values-creativity"
        title="Creativity"
        text="We thrive on bold ideas and outside- the-box thinking to fuel unforgettable experiences."
      />
      <Value
        img="centricity"
        title="Client-Centricity"
        text="We listen, adapt, and tailor our services to meet or exceed each client’s unique vision and goals."
      />
      <Value
        img="excellence"
        title="Excellence"
        text="Delivering the highest standards in every detail, from concept to completion."
      />
      <Value
        img="innovation"
        title="Innovation"
        text="Embracing change, we apply next-level tools, technology, and trends to elevate every event."
      />
    </div>
  );
};

export default Values;
