"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import "./components/homepage_custom_sections.css";
import Hero from "./components/Hero/hero";

import OurMission from "./components/Our-mission/OurMission";
import PopularCategories from "./components/popular-categories/PopularCategories";
import WhyChooseUs from "./components/why-choose-us/WhyChooseUs";
import Services from "./components/services/Services";
import FeaturedCities from "./components/featured-cities/FeaturedCities";
import FaqSection from "./components/faq-section/FaqSection";
import Work from "./components/Find-Work/Work";

const OurServices = dynamic(() => import("./components/our-services/OurServices"), {
  ssr: false,
  loading: () => <div className="skeleton-box" style={{ height: "300px", background: "#ffffff", margin: "20px 0", borderRadius: "8px" }}></div>,
});

const Testimonials = dynamic(() => import("./components/testimonials/Testimonials"), {
  ssr: false,
  loading: () => <div className="skeleton-box" style={{ height: "250px", background: "#ffffff", margin: "20px 0", borderRadius: "8px" }}></div>,
});

export default function HomeClient() {
  useEffect(() => {
    sessionStorage.setItem("fromHome", "true");
  }, []);

  return (
    <div className="home_page margin_navbar">
      <Hero />
      <PopularCategories />
      <OurMission />
      <OurServices />
      <WhyChooseUs />
      <Services />
      <Testimonials />
      <FeaturedCities />
      <FaqSection />
      <Work />
    </div>
  );
}
