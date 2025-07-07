"use client";
import React from "react";
import Service from "./desktop";
import { Parallax } from "react-scroll-parallax";

const desktop = () => {
  return (
    <div className="mt-[4rem]">
      {/* First service - appears on scroll */}
      <Parallax speed={5} opacity={[0.4, 1]}>
        <Service img="1" title="Event Management" descrtiption="Full-service event management from concept to closing. Working closely with your team, we ensure flawless execution through every touchpoint." />
      </Parallax>
      
      {/* Second service - appears on scroll */}
      <Parallax speed={10} opacity={[0.4, 1]}>
        <Service img="2" title="Event Registration" descrtiption="From branded digital platforms to check-in systems and on-site support, Allevent ensures seamless registration, check-in, and credentialing." />
      </Parallax>
      
      {/* Third service - appears on scroll */}
      <Parallax speed={15} opacity={[0.4, 1]}>
        <Service img="3" title="Branding, Visual Identity, Event Design" descrtiption="Keeping your brand top-of-mind with your guests, we offer end-to-end visual identity to ensure a cohesive guest experience." />
      </Parallax>
      
      {/* Fourth service - appears on scroll */}
      <Parallax speed={20} opacity={[0.4, 1]} >
        <Service img="4" title="Concept Development" descrtiption="Working closely with your team, we transform ideas into impactful themes and unforgettable event experiences." />
      </Parallax>
      
      {/* Fifth service - appears on scroll */}
      <Parallax speed={25} opacity={[0.4, 1]}>
        <Service img="5" title="Production Management" descrtiption="We provide technical production support, stage design, and show running for conferences, trade shows, launches, and more." />
      </Parallax>
      
      {/* Sixth service - appears on scroll */}
      <Parallax speed={30} opacity={[0.4, 1]}>
        <Service img="6" title="Crowd Control" descrtiption="Enjoy a safe, secure, enjoyable, and frictionless experience for event guests, VIPs, and all stakeholders." />
      </Parallax>
    </div>
  );
};

export default desktop;