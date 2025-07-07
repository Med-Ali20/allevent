import Link from "@/app/ui/link";
import React from "react";

const EveryMomentMatters = () => {
  return (
    <div className="bg-primary w-full flex flex-col items-center px-[1.5rem] py-[2rem] relative lg:-mt-[10vw]">
      <h1 className="text-white font-bold text-[2.5rem] text-center mb-[1rem] flex items-center justify-center z-10">
        Every Moment{" "}
        <span className="text-black ml-[8px] font-bold text-[2.5rem]">
          Matters
        </span>
      </h1>
      <p
        className="text-outfit text-[1.6rem] text-white leading-[2rem] mb-[2rem] font-light text-center lg:max-w-[60%] lg:text-[1.1rem] lg:leading-[1.3] z-10"
        style={{ fontWeight: 300 }}
      >
        We create events that are memorable for all the right reasons. Connect
        with us today to get started. We’d love to hear about your ideas and
        show you how we can bring them to life.
      </p>
      <Link href="#" color="primary" bg="white" text="Request a Callback" />
      <img
        src="/icons/circles-callback.svg"
        alt="allevent"
        className="absolute w-[140px] lg:w-[260px] -top-[80px] lg:-top-[140px] right-[24%] lg:right-[35%]"
      />
    </div>
  );
};

export default EveryMomentMatters;
