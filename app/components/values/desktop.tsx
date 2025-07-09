import React from "react";
import { useInView } from 'react-intersection-observer';
import Value from "./value-desktop";

const desktop = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
    triggerOnce: false
  });

  return (
    <div className="hidden lg:block w-[100vw] relative">
      <div ref={ref} className="relative overflow-hidden bg-dark">
        <img src="/icons/ellipse.svg" alt="" />
        <div className={`absolute inset-0 bg-dark transition-transform duration-[800ms] ease-in-out ${
          inView ? 'translate-x-full' : 'translate-x-0'
        }`}></div>
      </div>
      <Value top={8} left={14} />
    </div>
  );
};

export default desktop;