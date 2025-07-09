import React from "react";

type Props = {
  className: string;
};

const index: React.FC<Props> = ({ className }) => {
  return (
    <div className={`${className} mx-[1.4rem] md:mx-[5rem] mt-[5rem] mb-[8rem] lg:mb-2`}>
      <h2 className="text-[2.3rem] md:text-[2rem] font-bold leading-none">
        <span className="text-[#959595]">
          Allevent transforms ideas into unforgettable, immersive experiences
          that leave a lasting impression.
        </span>
        From event ideation to complete execution: Our creative team does it
        all!
      </h2>
      <img src="/images/1.jpg" alt="allevent" className="my-[3rem]" />
      <p className="text-[1.25rem] md:text-[1.3rem] font-outfit">
        We deliver events with unmatched attention to detail, innovative
        concepts, and flawless execution through every touchpoint. Every element
        is precisely tailored to reflect your brand and vision, resulting in a
        guest experience beyond compare. <br /> Our passion for precision shines
        through in our commitment to excellence. Our experience, insight, and
        transparency ensure a seamless experience through every touchpoint,
        ensuring every decision is aligned with your event goals.
      </p>
    </div>
  );
};

export default index;
