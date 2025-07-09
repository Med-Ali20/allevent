import React from "react";
import Link from "../ui/link";

const Services = () => {
  return (
    <div className="text-white min-h-[100vh] pt-[10rem] pl-[2rem]">
      <div className="w-full flex flex-col items-center mb-4">
        <div>
          <h1 className="text-[4rem] leading-none mb-4">Innovative <br /> Concepts <span className="text-primary -ml-[0.8rem] leading-none ">.</span> <br /> Flawless <br /> Execution <span className="text-secondary -ml-[0.8rem] leading-none ">.</span></h1>
          <p className="my-[3rem] text-[2rem] w-[80%] leading-[2.4rem] font-outfit font-light">From planning to strategy to execution, every moment matters.</p>
          <Link color="white" bg="#FF002C" text="Get in Touch" href="#" />
        </div>
      </div>
    </div>
  );
};

export default Services;
