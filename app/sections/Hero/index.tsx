import React from "react";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* 🔹 Video background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://res.cloudinary.com/dl5zmlqi3/video/upload/v1752259658/hero-compressed_xh1osv.mp4 "
        autoPlay
        muted
        loop
        playsInline
      />

      {/* 🔹 Black overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10" />

      {/* 🔹 Content */}
      <div className="relative w-[85%] md:w-full mx-auto z-20 flex flex-col items-left md:items-center md:gap-0 justify-center  text-center text-white pl-9 h-full gap-[6rem]">
        <h1 className="text-[4rem] md:text-[2.5rem] font-bold text-left leading-none md:leading-[2.75rem]  ">
          Every Detail Counts{" "}
          <span className="text-primary -ml-[0.6rem]">.</span> <br /> Every
          Moment Matters <span className="text-secondary -ml-[0.6rem]">.</span>
        </h1>
        <a
          href="https://ksusa-my.sharepoint.com/personal/yalashban_ksu_edu_sa/_layouts/15/stream.aspx?id=%2Fpersonal%2Fyalashban%5Fksu%5Fedu%5Fsa%2FDocuments%2FYazeed%2FAllevent%2FContents%2FWeb%20Hero%20Background%20Video%2FWeb%20Hero%20Background%20Video%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Eb0555dc3%2Daa54%2D42e2%2Da929%2D5e986e4c4670"
          className="flex items-center text-[1.4rem] uppercase font-bold md:hidden"
          target="_blank"
        >
          <img
            src="/icons/play.svg"
            className="w-[50px] md:w-[60px] mr-5"
            alt="Play Video"
          />
          Play Full
        </a>
      </div>
      <img
        src="/icons/circles.svg"
        srcSet="/icons/circles.svg 385w, /icons/circles-mobile.svg 174w"
        sizes="(max-width: 1024px) 174px, 385px"
        className="absolute -right-[6%] bottom-50 lg:right-[0] lg:bottom-[40px] z-20"
        alt=""
      />
      <a
        href="https://ksusa-my.sharepoint.com/personal/yalashban_ksu_edu_sa/_layouts/15/stream.aspx?id=%2Fpersonal%2Fyalashban%5Fksu%5Fedu%5Fsa%2FDocuments%2FYazeed%2FAllevent%2FContents%2FWeb%20Hero%20Background%20Video%2FWeb%20Hero%20Background%20Video%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Eb0555dc3%2Daa54%2D42e2%2Da929%2D5e986e4c4670"
        className="flex items-center text-[0.8rem] uppercase font-bold hidden md:block text-white absolute left-10 bottom-10 z-20"
        target="_blank"
      >
        <img
          src="/icons/play.svg"
          className="w-[50px] md:w-[60px] mr-5 inline"
          alt="Play Video"
        />
        Play Full
      </a>
    </section>
  );
}
