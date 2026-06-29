"use client";

import React, { useEffect } from "react";
import Hero from "./components/Hero/hero";
import OurMission from "./components/Our-mission/OurMission";
import Services from "./components/services/Services";
import Work from "./components/Find-Work/Work";

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
