import React from "react";

const Service = () => {
  return (
    <div className="flex items-start gap-15 lg:hidden pb-[3rem] relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-white after:opacity-30 mb-[2.5rem]">
      <img src="/icons/01.svg" alt="1" className="mt-[0.6rem]" />
      <div className="flex flex-col w-[70%] md:ml-[4rem]">
        <h2 className="text-[2.3rem] font-bold">Event Management</h2>
        <p className="ml-auto text-[1.1rem] text-outfit my-[2rem]">
          Full-service event management from concept to closing. Working closely
          with your team, we ensure flawless execution through every touchpoint.
        </p>
        <a href="/services" className="text-outfit text-[1.4rem] py-[1.5rem] px-[4rem] mt-[7px] border-primary rounded-full border-1 w-fit">Learn More</a>
      </div>
    </div>
  );
};

export default Service;
