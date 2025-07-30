'use client'

import Link from "@/app/ui/link";
import React, { useState } from "react";
import EveryMomentMatters from "@/app/sections/EveryMomentMatters";
import { useLanguage } from "@/app/contexts/LanguageContext";

const Footer = () => {
  const { locale } = useLanguage();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  const handleNewsletterSubmit = async (e: any) => {
    e.preventDefault();
    
    if (!email) {
      setMessage('Please enter your email address');
      setMessageType('error');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage('Please enter a valid email address');
      setMessageType('error');
      return;
    }

    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(locale === 'ar' ? 'تم الاشتراك بنجاح!' : 'Successfully subscribed!');
        setMessageType('success');
        setEmail(''); // Clear the email field
      } else {
        setMessage(data.message || 'Something went wrong. Please try again.');
        setMessageType('error');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setMessage('Network error. Please try again.');
      setMessageType('error');
    } finally {
      setIsSubmitting(false);
      // Clear message after 5 seconds
      setTimeout(() => {
        setMessage('');
        setMessageType('');
      }, 5000);
    }
  };

  return (
    <>
      <EveryMomentMatters />

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
          <p className="font-light font-outfit text-[1.6rem] lg:text-[0.8rem]">
            P.O. Box 145111
          </p>
          <p className="font-light font-outfit text-[1.6rem] lg:text-[0.8rem]">
            Riyadh 4545
          </p>
          <p className="font-light font-outfit text-[1.6rem] lg:text-[0.8rem]">
            Saudi Arabia
          </p>
          <p className="font-light font-outfit text-[1.6rem] lg:text-[0.8rem]">
            info@allevent.com.sa
          </p>
          <p className="font-light font-outfit text-[1.6rem] lg:text-[0.8rem]">
            +966555363676
          </p>
          <h2 className="text-[1.6rem] lg:text-[0.8rem] font-bold my-[2rem] lg:hidden">
            {locale === 'ar' ? 'اشترك في نشرتنا الإخبارية' : 'Join our newsletter'}
          </h2>
        </div>

        <div className="mt-[1rem] lg:mt-0 flex gap-2 lg:flex-col lg:mr-[4rem]">
          <h2 className="text-[1.6rem] lg:text-[0.8rem] font-bold my-[2rem] lg:my-0 hidden lg:block">
            Join our newsletter
          </h2>
          <form onSubmit={handleNewsletterSubmit} className="flex gap-2 lg:mb-[2.5rem]">
            <input
              type="email"
              placeholder="Your Email Adress"
              className="outline-none border-b-1 border-white bg-transparent text-white placeholder-gray-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-white text-black px-6 py-2 rounded-full font-light hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Get in touch
            </button>
          </form>
          {message && (
            <p className={`text-sm mb-2 ${
              messageType === 'success' ? 'text-green-400' : 'text-red-400'
            }`}>
              {message}
            </p>
          )}
          <ul className="hidden lg:flex text-white mb-[3rem] ">
            <li className="mr-3">
              <a 
                href="https://www.instagram.com/allevent_ksa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/icons/instagram.svg" alt="instagram" />
              </a>
            </li>
            <li className="mx-3">
              <a 
                href="https://www.linkedin.com/company/alleventksa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/icons/linkedin.svg" alt="linkedin" />
              </a>
            </li>
            <li className="ml-3">
              <a 
                href="https://wa.me/+966555363676"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/icons/whatsapp.svg" alt="whatsapp" />
              </a>
            </li>
          </ul>
        </div>
        <ul className="flex lg:hidden items-center text-white mb-[3rem] border-b-1 border-[#9C9C9C] w-[80%] justify-center py-[4rem]">
          <li className="mr-3 ml-[1.8rem]">
            <a
              href="https://www.instagram.com/allevent_ksa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/instagram.svg" alt="instagram" />
            </a>
          </li>
          <li className="mx-3">
            <a
              href="https://www.linkedin.com/company/alleventksa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/linkedin.svg" alt="linkedin" />
            </a>
          </li>
          <li className="ml-3">
            <a
              href="https://wa.me/+966555363676"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/whatsapp.svg" alt="whatsapp" />
            </a>
          </li>
        </ul>
        <div className="flex lg:hidden flex-col text-[#9C9C9C] text-center gap-5">
          <a href="/terms-of-service" className="underline">
            Terms & Conditions
          </a>
          <a href="/policy" className="underline">
            Privacy Policy
          </a>
          <p>Allevent © Copyright 2025</p>
        </div>
      </div>
      <div className="hidden lg:flex text-[#9C9C9C] text-center gap-5 w-[95%] mx-auto border-t-1 border-[#9C9C9C] py-[2rem]">
        <p className="mr-auto">Allevent © Copyright 2025</p>
        <a href="/terms-of-service" className="underline">
          {locale === "ar" ? "الشروط و الاحكام" : "Terms of Services"}
        </a>
        <a href="/policy" className="underline">
          {locale === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}
        </a>
      </div>
    </>
  );
};

export default Footer;