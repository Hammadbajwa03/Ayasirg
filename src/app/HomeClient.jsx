"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Hero from "./components/Hero/hero";

const OurMission = dynamic(() => import("./components/Our-mission/OurMission"), {
  ssr: true,
  loading: () => <div className="skeleton-box" style={{ height: "300px", background: "#f8f9fa", margin: "20px 0", borderRadius: "8px" }}></div>,
});

const Services = dynamic(() => import("./components/services/Services"), {
  ssr: true,
  loading: () => <div className="skeleton-box" style={{ height: "300px", background: "#ffffff", margin: "20px 0", borderRadius: "8px" }}></div>,
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
      <OurMission />
      <Services />
      <Work />
    </div>
  );
}
