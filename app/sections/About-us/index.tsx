import Link from "@/app/ui/link";
import React from "react";

type Props = {
  className: string;
};

const About: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={`${className} mx-[1.4rem] md:mx-[5rem] mt-[1rem] lg:mt-0 mb-[4rem] lg:mb-2 lg:flex`}
    >
      <div className="lg:w-[50%] mr-auto">
        <p
          style={{ fontFamily: "Outfit", fontWeight: "lighter" }}
          className="text-[2rem] md:text-[1.6rem] lg:text-[0.93rem] 2xl:text-[1rem] mt-[2rem] lg:mt-0 lg:mt-0 leading-[2.4rem] lg:leading-[1.3rem]"
        >
          Allevent is an elite creative event services agency serving Saudi
          Arabia and the Middle East. Inspired by precision, our mission is to
          deliver events that lead the way in innovative design, strategic
          planning, and seamless execution at the highest standards of our
          industry. Working closely with our clients, we transform ideas into
          reality, setting the paradigm for excellence in everything we do. From
          concept development to event design, production management, and crowd
          control, we transform ideas into unforgettable experiences.
        </p>
        <h3
          style={{ fontFamily: "Outfit" }}
          className="text-[2rem] md:text-[1.6rem] lg:text-[0.93rem] 2xl:text-[1rem] font-bold mt-[2rem]"
        >
          Our Mission
        </h3>
        <p
          style={{ fontFamily: "Outfit", fontWeight: "lighter" }}
          className="text-[2rem] md:text-[1.6rem] lg:text-[0.93rem] 2xl:text-[1rem] mt-[2rem] lg:mt-[1.5rem] leading-[2.4rem] lg:leading-[1.3rem]"
        >
          To orchestrate extraordinary, high-impact events that fuse creativity
          with elegance, leaving a lasting mark on every audience we touch.
        </p>
        <h3
          style={{ fontFamily: "Outfit" }}
          className="text-[2rem] md:text-[1.6rem] lg:text-[0.93rem] 2xl:text-[1rem] font-bold mt-[2rem]"
        >
          Our Vision
        </h3>
        <p
          style={{ fontFamily: "Outfit", fontWeight: "lighter" }}
          className="text-[2rem] md:text-[1.6rem] lg:text-[0.93rem] 2xl:text-[1rem] mt-[2rem] lg:mt-[1.5rem] leading-[2.4rem] mb-[4rem] lg:mb-[2.5rem] lg:leading-[1.3rem]"
        >
          To be the leading force in redefining the standard for elite event
          experiences in Saudi Arabia and the Middle East, transforming ideas
          into inspiring moments that leave lasting impressions.
        </p>
        <Link href="/contact" text="Get in Touch" color="white" bg="#FF002C"  />
      </div>
      <img
        src="/images/2-mobile.jpg"
        alt="allevent"
        className="mt-[4rem] w-full lg:hidden"
      />
      <img
        src="/images/2-desktop.jpg"
        alt="allevent"
        className="w-[35rem] h-[31.5rem] hidden lg:block lg:-mr-[8rem]"
      />
    </div>
  );
};

export default About;
