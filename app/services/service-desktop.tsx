import React from "react";

type Props = {
  img: string;
  title: string;
  descrtiption: string;
}

const desktop: React.FC<Props> = ({img, title, descrtiption}) => {
  return (
    <div className="lg:grid grid-cols-[minmax(0,1fr)_3fr_minmax(0,1fr)] items-start hidden gap-1 pb-[3rem] relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-white after:opacity-30 mb-[2.5rem]">
      <div className="flex justify-center">
        <img
          src={`/icons/0${img}-desktop.svg`}
          alt="1"
          className={`mt-[0.6rem]  ${img !== '1' ? 'w-[20rem]' : 'w-[8rem] -ml-[3rem]'} bg-contain`}
        />
      </div>
      <div className="flex flex-col mx-auto flex-1 w-fit mx-auto pl-[12%] lg:pl-2">
        <h2 className="text-[2.3rem] font-bold w-fit">{title}</h2>
        <p className="text-[1.1rem] font-outfit my-[2rem] flex w-[85%] text-left">
          {descrtiption}
        </p>
      </div>
      <a
        href="/services"
        className="font-outfit text-[1rem] py-[1rem] px-[2rem] border-primary rounded-full border-1 mt-auto ml-auto mb-[3rem]"
      >
        Learn More
      </a>
    </div>
  );
};

export default desktop;