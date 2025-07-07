import Link from "@/app/ui/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col items-center lg:items-start text-white pb-[3rem] lg:flex-row lg:p-[3rem]">
        <img
          src="/icons/logo-mobile.svg"
          alt="allevent"
          className="my-[4rem] lg:hidden"
        />
        <img
          src="/icons/logo.svg"
          alt="allevent"
          className="hidden lg:block mr-auto"
        />
        <div className="text-center lg:text-left lg:mr-[10rem]">
          <h3 className="font-bold text-[1.6rem] lg:text-[0.8rem] mb-[2rem]">
            Allevent
          </h3>
          <p className="font-light text-outfit text-[1.6rem] lg:text-[0.8rem]">
            P.O. Box 145111
          </p>
          <p className="font-light text-outfit text-[1.6rem] lg:text-[0.8rem]">
            Riyadh 4545
          </p>
          <p className="font-light text-outfit text-[1.6rem] lg:text-[0.8rem]">
            Saudi Arabia
          </p>
          <p className="font-light text-outfit text-[1.6rem] lg:text-[0.8rem]">
            info@allevent.com.sa
          </p>
          <p className="font-light text-outfit text-[1.6rem] lg:text-[0.8rem]">
            +966555363676
          </p>
          <h2 className="text-[1.6rem] lg:text-[0.8rem] font-bold my-[2rem] lg:hidden">
            Join our newsletter
          </h2>
        </div>

        <div className="mt-[1rem] lg:mt-0 flex gap-2 lg:flex-col lg:mr-[4rem]">
          <h2 className="text-[1.6rem] lg:text-[0.8rem] font-bold my-[2rem] lg:my-0 hidden lg:block">
            Join our newsletter
          </h2>
          <div className="flex gap-2 lg:mb-[2.5rem]">
            <input
              type="email"
              placeholder="Your Email Adress"
              className="outline-none border-b-1 border-white"
            />
            <Link color="black" bg="white" href="#" text="Get in touch" />
          </div>
          <ul className="hidden lg:flex text-white mb-[3rem] ">
            <li className="mr-3">
              <a href="https://instagram.com">
                <img src="/icons/instagram.svg" alt="instagram" />
              </a>
            </li>
            <li className="mx-3">
              <a href="https://linkedin.com">
                <img src="/icons/linkedin.svg" alt="instagram" />
              </a>
            </li>
            <li className="ml-3">
              <a href="https://instagram.com">
                <img src="/icons/whatsapp.svg" alt="instagram" />
              </a>
            </li>
          </ul>
        </div>
        <ul className="flex lg:hidden items-center text-white mb-[3rem] border-b-1 border-[#9C9C9C] w-[80%] justify-center py-[4rem]">
          <li className="mr-3 ml-[1.8rem]">
            <a href="https://instagram.com">
              <img src="/icons/instagram.svg" alt="instagram" />
            </a>
          </li>
          <li className="mx-3">
            <a href="https://linkedin.com">
              <img src="/icons/linkedin.svg" alt="instagram" />
            </a>
          </li>
          <li className="ml-3">
            <a href="https://instagram.com">
              <img src="/icons/whatsapp.svg" alt="instagram" />
            </a>
          </li>
        </ul>
        <div className="flex lg:hidden flex-col text-[#9C9C9C] text-center gap-5">
          <a href="#" className="underline">
            Terms & Conditions
          </a>
          <a href="#" className="underline">
            Privacy Policy
          </a>
          <p>Allevent © Copyright 2025</p>
        </div>
      </div>
      <div className="flex text-[#9C9C9C] text-center gap-5 w-[95%] mx-auto border-t-1 border-[#9C9C9C] py-[2rem]">
        <p className="mr-auto">Allevent © Copyright 2025</p>
        <a href="#" className="underline">
          Terms & Conditions
        </a>
        <a href="#" className="underline">
          Privacy Policy
        </a>
      </div>
    </>
  );
};

export default Footer;
