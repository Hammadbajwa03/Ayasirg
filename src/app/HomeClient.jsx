"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import "./components/homepage_custom_sections.css";
import Hero from "./components/Hero/hero";
import PopularCategories from "./components/popular-categories/PopularCategories";

const OurMission = dynamic(() => import("./components/Our-mission/OurMission"), {
  loading: () => <div className="skeleton-box" style={{ height: "200px", margin: "20px 0" }} aria-hidden />,
});
const WhyChooseUs = dynamic(() => import("./components/why-choose-us/WhyChooseUs"), {
  loading: () => <div className="skeleton-box" style={{ height: "200px", margin: "20px 0" }} aria-hidden />,
});
const Services = dynamic(() => import("./components/services/Services"), {
  loading: () => <div className="skeleton-box" style={{ height: "180px", margin: "20px 0" }} aria-hidden />,
});
const FeaturedCities = dynamic(() => import("./components/featured-cities/FeaturedCities"), {
  loading: () => <div className="skeleton-box" style={{ height: "220px", margin: "20px 0" }} aria-hidden />,
});
const FaqSection = dynamic(() => import("./components/faq-section/FaqSection"), {
  loading: () => <div className="skeleton-box" style={{ height: "200px", margin: "20px 0" }} aria-hidden />,
});
const Work = dynamic(() => import("./components/Find-Work/Work"), {
  loading: () => <div className="skeleton-box" style={{ height: "240px", margin: "20px 0" }} aria-hidden />,
});

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
