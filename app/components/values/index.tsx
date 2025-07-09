import React from "react";

type Props = {
  img: string;
  title: string;
  text: string;
};

const value: React.FC<Props> = ({ img, title, text }) => {
  return (
    <div className="bg-[#141619] flex flex-col px-[2rem] mb-[2rem] pb-[2rem] lg:hidden">
      <img
        src={`/icons/${img}.svg`}
        alt="creativity"
        className="w-[8.5rem] my-[3rem]"
      />
      <h3 className="font-outfit font-bold mt-[2rem] text-[1.6rem]">{title}</h3>
      <p className="font-outfit font-light text-[1.6rem] mt-2">{text}</p>
    </div>
  );
};

export default value;
