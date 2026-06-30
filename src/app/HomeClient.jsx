"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import "./components/homepage_custom_sections.css";
import Hero from "./components/Hero/hero";

const OurMission = dynamic(() => import("./components/Our-mission/OurMission"), {
  ssr: true,
  loading: () => <div className="skeleton-box" style={{ height: "300px", background: "#f8f9fa", margin: "20px 0", borderRadius: "8px" }}></div>,
});

const PopularCategories = dynamic(() => import("./components/popular-categories/PopularCategories"), {
  ssr: true,
  loading: () => <div className="skeleton-box" style={{ height: "300px", background: "#ffffff", margin: "20px 0", borderRadius: "8px" }}></div>,
});

const OurServices = dynamic(() => import("./components/our-services/OurServices"), {
  ssr: true,
  loading: () => <div className="skeleton-box" style={{ height: "300px", background: "#ffffff", margin: "20px 0", borderRadius: "8px" }}></div>,
});

const WhyChooseUs = dynamic(() => import("./components/why-choose-us/WhyChooseUs"), {
  ssr: true,
  loading: () => <div className="skeleton-box" style={{ height: "300px", background: "#f8f9fa", margin: "20px 0", borderRadius: "8px" }}></div>,
});

const Services = dynamic(() => import("./components/services/Services"), {
  ssr: true,
  loading: () => <div className="skeleton-box" style={{ height: "300px", background: "#ffffff", margin: "20px 0", borderRadius: "8px" }}></div>,
});

const Testimonials = dynamic(() => import("./components/testimonials/Testimonials"), {
  ssr: true,
  loading: () => <div className="skeleton-box" style={{ height: "250px", background: "#ffffff", margin: "20px 0", borderRadius: "8px" }}></div>,
});

const FeaturedCities = dynamic(() => import("./components/featured-cities/FeaturedCities"), {
  ssr: true,
  loading: () => <div className="skeleton-box" style={{ height: "250px", background: "#ffffff", margin: "20px 0", borderRadius: "8px" }}></div>,
});

const FaqSection = dynamic(() => import("./components/faq-section/FaqSection"), {
  ssr: true,
  loading: () => <div className="skeleton-box" style={{ height: "250px", background: "#ffffff", margin: "20px 0", borderRadius: "8px" }}></div>,
});

const Work = dynamic(() => import("./components/Find-Work/Work"), {
  ssr: true,
  loading: () => <div className="skeleton-box" style={{ height: "300px", background: "#f8f9fa", margin: "20px 0", borderRadius: "8px" }}></div>,
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
