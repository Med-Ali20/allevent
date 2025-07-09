import React from "react";
import { useInView } from 'react-intersection-observer';

type Props = {
  top: number;
  left: number;
};

const value: React.FC<Props> = ({ top, left }) => {
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
    triggerOnce: true
  });

  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
    triggerOnce: true
  });

  const { ref: ref3, inView: inView3 } = useInView({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
    triggerOnce: true
  });

  const { ref: ref4, inView: inView4 } = useInView({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
    triggerOnce: true
  });

  return (
    <>
      <div
        className={`flex flex-col px-[2rem] mb-[1rem] pb-[2rem] items-center absolute -top-[7.5vw] left-[12vw] text-center`}
      >
        <img
          src="/icons/values-creativity.svg"
          alt="creativity"
          className={`w-[4.5vw] my-[3vw] opacity-0 translate-y-8 ${
            inView1 ? 'icon-reveal-1' : ''
          }`}
        />
        <span 
          ref={ref1}
          className={`w-[1vw] h-[1vw] bg-secondary rounded-full ${
            inView1 ? 'glow-effect-1' : ''
          }`}
        ></span>
        <h3 className={`font-outfit font-bold mt-[2vw] text-[1vw] opacity-0 translate-y-8 ${
          inView1 ? 'text-reveal-1' : ''
        }`}>
          Creativity
        </h3>
        <p className={`font-outfit font-light text-[1rem] mt-2 w-[16vw] opacity-0 translate-y-8 ${
          inView1 ? 'text-reveal-1-p' : ''
        }`}>
          We thrive on bold ideas and outside- the-box thinking to fuel
          unforgettable experiences.
        </p>
      </div>
      <div
        className={`flex flex-col px-[2rem] mb-[1rem] pb-[2rem] items-center absolute -top-[9.85vw] left-[30.6vw] text-center`}
      >
        <img
          src="/icons/centricity.svg"
          alt="creativity"
          className={`w-[4.5vw] my-[3vw] opacity-0 translate-y-8 ${
            inView2 ? 'icon-reveal-2' : ''
          }`}
        />
        <span 
          ref={ref2}
          className={`w-[1vw] h-[1vw] bg-secondary rounded-full ${
            inView2 ? 'glow-effect-2' : ''
          }`}
        ></span>
        <h3 className={`font-outfit font-bold mt-[2vw] text-[1vw] opacity-0 translate-y-8 ${
          inView2 ? 'text-reveal-2' : ''
        }`}>
          Client-Centricity
        </h3>
        <p className={`font-outfit font-light text-[1rem] mt-2 w-[16vw] opacity-0 translate-y-8 ${
          inView2 ? 'text-reveal-2-p' : ''
        }`}>
          We listen, adapt, and tailor our services to meet or exceed each
          client's unique vision and goals.
        </p>
      </div>
      <div
        className={`flex flex-col px-[2rem] mb-[1rem] pb-[2rem] items-center absolute -top-[10.7vw] right-[30.6vw] text-center`}
      >
        <img
          src="/icons/excellence.svg"
          alt="creativity"
          className={`w-[4.5vw] my-[3vw] opacity-0 translate-y-8 ${
            inView3 ? 'icon-reveal-3' : ''
          }`}
        />
        <span 
          ref={ref3}
          className={`w-[1vw] h-[1vw] bg-secondary rounded-full ${
            inView3 ? 'glow-effect-3' : ''
          }`}
        ></span>
        <h3 className={`font-outfit font-bold mt-[2vw] text-[1vw] opacity-0 translate-y-8 ${
          inView3 ? 'text-reveal-3' : ''
        }`}>
          Excellence
        </h3>
        <p className={`font-outfit font-light text-[1rem] mt-2 w-[16vw] opacity-0 translate-y-8 ${
          inView3 ? 'text-reveal-3-p' : ''
        }`}>
          Delivering the highest standards in every detail, from concept to
          completion.
        </p>
      </div>
      <div
        className={`flex flex-col px-[2rem] mb-[1rem] pb-[2rem] items-center absolute -top-[7.9vw] right-[12vw] text-center`}
      >
        <img
          src="/icons/innovation.svg"
          alt="creativity"
          className={`w-[4.5vw] my-[3vw] opacity-0 translate-y-8 ${
            inView4 ? 'icon-reveal-4' : ''
          }`}
        />
        <span 
          ref={ref4}
          className={`w-[1vw] h-[1vw] bg-secondary rounded-full ${
            inView4 ? 'glow-effect-4' : ''
          }`}
        ></span>
        <h3 className={`font-outfit font-bold mt-[2vw] text-[1vw] opacity-0 translate-y-8 ${
          inView4 ? 'text-reveal-4' : ''
        }`}>
          Innovation
        </h3>
        <p className={`font-outfit font-light text-[1rem] mt-2 w-[16vw] opacity-0 translate-y-8 ${
          inView4 ? 'text-reveal-4-p' : ''
        }`}>
          Embracing change, we apply next-level tools, technology, and trends to
          elevate every event.
        </p>
      </div>
    </>
  );
};

export default value;