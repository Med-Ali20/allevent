"use client";

import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translation";

const Contact = () => {
  const { locale } = useLanguage();
  // @ts-ignore
  const t = translations[locale];

  const isArabic = locale === "ar";

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  // Handle input changes
  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: "Contact Form Submission",
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        setStatus("error");
        console.error("Error:", result.message);
      }
    } catch (error) {
      setStatus("error");
      console.error("Network error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full  mb-[12rem]">
      <div
        className={`pt-40 px-6 md:px-20 text-white mb-[3rem] max-w-[90%] lg:max-w-[80%] lg:mx-auto ${
          isArabic ? "text-right font-[zain]" : "text-left font-outfit"
        }`}
      >
        <h1
          className={`text-3xl font-bold mb-[3rem] text-[3rem] ${
            locale === "ar" ? "font-[zain]" : "font-montserrat"
          }`}
        >
          {t.contact.title}
        </h1>

        <p className="font-light text-[1.8rem] leading-[2rem]">
          {t.contact.description}
        </p>
        <p className="font-light text-[2.4em] lg:text-[1.6rem] mt-[3rem] leading-[2rem]">
          info@allevent.com.sa
        </p>
        <p className="font-light text-[2.4em] lg:text-[1.6rem]">+966555363676</p>
        <h2 className="text-[2rem] my-[2rem]">{t.contact.requestQuote}</h2>

        {/* Status Messages */}
        {status === "success" && (
          <div className="mb-4 p-4 bg-green-600 bg-opacity-80 border border-green-400 text-white rounded">
            {isArabic
              ? "تم إرسال الرسالة بنجاح! سنتواصل معك قريباً."
              : "Message sent successfully! We'll get back to you soon."}
          </div>
        )}

        {status === "error" && (
          <div className="mb-4 p-4 bg-red-600 bg-opacity-80 border border-red-400 text-white rounded">
            {isArabic
              ? "فشل في إرسال الرسالة. يرجى المحاولة مرة أخرى."
              : "Failed to send message. Please try again."}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className={`mt-[3rem] ${isArabic ? "text-right" : "text-left"}`}
        >
          <div className="lg:flex w-full gap-6 lg:mb-[2rem]">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t.contact.name}
              required
              className={`outline-none border-b-1 border-white w-full pb-3 mb-[2rem] lg:mb-0 bg-transparent ${
                isArabic ? "text-right" : "text-left"
              }`}
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={t.contact.phoneLabel}
              className={`outline-none border-b-1 border-white w-full pb-3 mb-[2rem] lg:mb-0 bg-transparent ${
                isArabic ? "text-right" : "text-left"
              }`}
            />
          </div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t.contact.emailLabel}
            required
            className={`outline-none border-b-1 border-white w-full pb-3 mb-[2rem] bg-transparent ${
              isArabic ? "text-right" : "text-left"
            }`}
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t.contact.message}
            required
            className={`outline-none border-b-1 border-white w-full pb-3 mb-[3rem] bg-transparent resize-none ${
              isArabic ? "text-right" : "text-left"
            }`}
            rows={10}
          />

          <button
            type="submit"
            disabled={loading}
            className={`px-6 py-3 rounded-full cursor-pointer font-medium transition-colors ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#FF002C] hover:bg-[#e6002a] focus:outline-none focus:ring-2 focus:ring-[#FF002C]"
            } text-white`}
          >
            {loading
              ? isArabic
                ? "جاري الإرسال..."
                : "Sending..."
              : t.contact.button}
          </button>
        </form>
      </div>
      <img
        src="/icons/circles-about.svg"
        alt=""
        className="hidden lg:block absolute top-[18rem] left-0 w-[8rem]"
      />
      <img
        src="/icons/circles-red.svg"
        alt=""
        className="hidden lg:block absolute top-[38rem] left-0 w-[4rem]"
      />
    </div>
  );
};

export default Contact;
