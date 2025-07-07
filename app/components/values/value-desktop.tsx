import React from "react";

type Props = {
  top: number;
  left: number;
};

const value: React.FC<Props> = ({ top, left }) => {
  return (
    <>
      <div
        className={`flex flex-col px-[2rem] mb-[1rem] pb-[2rem] items-center absolute -top-[7.5vw] left-[12vw] text-center`}
      >
        <img
          src="/icons/values-creativity.svg"
          alt="creativity"
          className="w-[4.5vw] my-[3vw]"
        />
        <span className="w-[1vw] h-[1vw] bg-secondary rounded-full"></span>
        <h3 className="text-outfit font-bold mt-[2vw] text-[1vw]">
          Creativity
        </h3>
        <p className="text-outfit font-light text-[1rem] mt-2 w-[16vw]">
          We thrive on bold ideas and outside- the-box thinking to fuel
          unforgettable experiences.
        </p>
      </div>
      <div
        className={`flex flex-col px-[2rem] mb-[1rem] pb-[2rem] items-center absolute -top-[10.5vw] left-[30.6vw] text-center`}
      >
        <img
          src="/icons/centricity.svg"
          alt="creativity"
          className="w-[4.5vw] my-[3vw]"
        />
        <span className="w-[1vw] h-[1vw] bg-secondary rounded-full"></span>
        <h3 className="text-outfit font-bold mt-[2vw] text-[1vw]">
          Creativity
        </h3>
        <p className="text-outfit font-light text-[1rem] mt-2 w-[16vw]">
          We thrive on bold ideas and outside- the-box thinking to fuel
          unforgettable experiences.
        </p>
      </div>
      <div
        className={`flex flex-col px-[2rem] mb-[1rem] pb-[2rem] items-center absolute -top-[10.5vw] right-[30.6vw] text-center`}
      >
        <img
          src="/icons/excellence.svg"
          alt="creativity"
          className="w-[4.5vw] my-[3vw]"
        />
        <span className="w-[1vw] h-[1vw] bg-secondary rounded-full"></span>
        <h3 className="text-outfit font-bold mt-[2vw] text-[1vw]">
          Creativity
        </h3>
        <p className="text-outfit font-light text-[1rem] mt-2 w-[16vw]">
          We thrive on bold ideas and outside- the-box thinking to fuel
          unforgettable experiences.
        </p>
      </div>
      <div
        className={`flex flex-col px-[2rem] mb-[1rem] pb-[2rem] items-center absolute -top-[7.5vw] right-[12vw] text-center`}
      >
        <img
          src="/icons/innovation.svg"
          alt="creativity"
          className="w-[4.5vw] my-[3vw]"
        />
        <span className="w-[1vw] h-[1vw] bg-secondary rounded-full"></span>
        <h3 className="text-outfit font-bold mt-[2vw] text-[1vw]">
          Creativity
        </h3>
        <p className="text-outfit font-light text-[1rem] mt-2 w-[16vw]">
          We thrive on bold ideas and outside- the-box thinking to fuel
          unforgettable experiences.
        </p>
      </div>
    </>
  );
};

export default value;
