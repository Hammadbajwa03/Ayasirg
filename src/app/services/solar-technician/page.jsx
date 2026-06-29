"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import {
  FaSun,
  FaWrench,
  FaBatteryThreeQuarters,
  FaBolt,
  FaMagnifyingGlass,
  FaSoap,
  FaUserShield,
  FaClock,
  FaStar,
} from "react-icons/fa6";
import { fetchCityIdByName } from "@/app/lib/cityPages";
import ServicesSteps from "@/app/components/services/Services";
import "./solar-technician.css";

export default function SolarTechnicianPage() {
  const [cityIds, setCityIds] = useState({
    lahore: "2",
    karachi: "1",
    islamabad: "9",
  });

  useEffect(() => {
    async function loadCityIds() {
      try {
        const lahore = await fetchCityIdByName("Lahore");
        const karachi = await fetchCityIdByName("Karachi");
        const islamabad = await fetchCityIdByName("Islamabad");
        setCityIds({
          lahore: lahore || "2",
          karachi: karachi || "1",
          islamabad: islamabad || "9",
        });
      } catch (err) {
        console.error("Failed to load city IDs", err);
      }
    }
    loadCityIds();
  }, []);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I book a solar technician on Aya Sir G!?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Browse verified solar technician profiles on Aya Sir G!, check their ratings, portfolios, and customer reviews. You can contact the technicians directly to get a quote and schedule an onsite visit."
        }
      },
      {
        "@type": "Question",
        "name": "What services do solar technicians offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our solar experts provide complete rooftop solar panel installation, solar inverter repair, battery health checks, net metering application support, solar structure design, and periodic cleaning and maintenance."
        }
      },
      {
        "@type": "Question",
        "name": "Do you help with solar net metering applications?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, many solar technicians and companies listed on Aya Sir G! can manage the end-to-end net metering process with NEPRA and local power distribution companies (like LESCO, KE, IESCO) to export excess electricity."
        }
      },
      {
        "@type": "Question",
        "name": "Why is my solar system producing less power?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Reduced power generation can be caused by dirty panels, shadow obstructions, improper tilt angles, inverter faults, or loose wiring. Hire a technician on Aya Sir G! to run a diagnostic audit on your system."
        }
      },
      {
        "@type": "Question",
        "name": "How often should solar panels be cleaned?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For maximum efficiency in dusty Pakistani cities, it is recommended to clean solar panels every 1 to 2 weeks. Dust accumulation can reduce electricity generation by up to 20-30%."
        }
      }
    ]
  };

  return (
    <div className="solar_technician_page margin_navbar">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <header className="solar_technician_hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="solar_technician_hero_content text-center text-lg-start">
                <h1 className="solar_technician_hero_h1">
                  Professional Solar Technicians — Aya Sir G!
                </h1>
                <p className="solar_technician_hero_subheading">
                  Find verified local solar experts for installation, inverter repair, battery maintenance, and troubleshooting. Compare profiles and hire directly.
                </p>
                <div className="solar_technician_hero_ctas justify-content-center justify-content-lg-start">
                  <Link
                    href="/compnies?role=handyman&category_id=32"
                    className="solar_technician_btn sofa_carpet_btn_primary"
                  >
                    Find Solar Technicians Near Me
                  </Link>
                  <Link
                    href="/register-yourself"
                    className="solar_technician_btn solar_technician_btn_secondary"
                  >
                    Register as Technician
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0 text-center d-none d-lg-block">
              <div
                style={{
                  background: "rgba(202, 138, 4, 0.04)",
                  borderRadius: "50%",
                  width: "280px",
                  height: "280px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  border: "2px dashed rgba(202, 138, 4, 0.15)",
                }}
              >
                <FaSun size={120} style={{ color: "#ca8a04" }} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content Block */}
      <section className="solar_technician_content_block">
        <div className="container">
          <div className="solar_technician_content_wrapper">
            <h2 className="solar_technician_section_heading">Expert Solar Installation &amp; Maintenance Services</h2>
            <p className="solar_technician_content_text">
              Switching to solar energy is a smart investment to combat rising electricity tariffs and load shedding in Pakistan. However, to ensure maximum power output and system safety, you need skilled, experienced solar professionals. On Aya Sir G!, we connect you directly with CNIC-verified solar technicians in Lahore, Karachi, and Islamabad. Our solar experts specialize in site surveys, structure fabrication, solar panel mounting, hybrid/on-grid inverter programming, tubular/lithium battery configuration, and solar panel wash services. Whether you are setting up a new 5kW, 10kW, or 20kW solar solution, troubleshooting an inverter fault, or applying for green net metering, you can compare technician profiles, read reviews, look at their previous installations, and hire them directly. Cut out expensive middlemen and work with trusted local solar installers near you today on Aya Sir G!.
            </p>
            <div className="mt-4 pt-2">
              <span className="text-muted small">
                Explore other services at{" "}
                <Link href="/services" className="red_title text-decoration-none">
                  Aya Sir G! Services
                </Link>
                ,{" "}
                <Link href="/register-yourself" className="red_title text-decoration-none">
                  Register as a Service Provider
                </Link>
                , or{" "}
                <Link href="/contact-us" className="red_title text-decoration-none">
                  Contact Us
                </Link>{" "}
                for any assistance.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="solar_technician_services_sec">
        <div className="container">
          <h2 className="solar_technician_section_heading">Solar Services Available</h2>
          <div className="solar_technician_services_grid">
            {/* Card 1 */}
            <div className="solar_technician_service_card">
              <div className="solar_technician_card_icon_wrap">
                <FaSun />
              </div>
              <h3 className="solar_technician_card_title">Solar Panel Installation</h3>
              <p className="solar_technician_card_desc">
                Complete rooftop structure mounting, wiring, panel alignment, and layout optimization to capture maximum sunlight.
              </p>
            </div>
            {/* Card 2 */}
            <div className="solar_technician_service_card">
              <div className="solar_technician_card_icon_wrap">
                <FaWrench />
              </div>
              <h3 className="solar_technician_card_title">Inverter Repair &amp; Service</h3>
              <p className="solar_technician_card_desc">
                Diagnostic and repair services for hybrid, off-grid, and grid-tied inverters (Inverex, Crown, Solis, Knox, etc.).
              </p>
            </div>
            {/* Card 3 */}
            <div className="solar_technician_service_card">
              <div className="solar_technician_card_icon_wrap">
                <FaBatteryThreeQuarters />
              </div>
              <h3 className="solar_technician_card_title">Battery Maintenance &amp; Setup</h3>
              <p className="solar_technician_card_desc">
                Testing battery backup capacity, gravity checks for lead-acid/tubular batteries, and lithium-ion battery configurations.
              </p>
            </div>
            {/* Card 4 */}
            <div className="solar_technician_service_card">
              <div className="solar_technician_card_icon_wrap">
                <FaBolt />
              </div>
              <h3 className="solar_technician_card_title">Net Metering Solutions</h3>
              <p className="solar_technician_card_desc">
                Assistance with three-phase meter upgrades, licensing, and green energy export applications to local distribution grids.
              </p>
            </div>
            {/* Card 5 */}
            <div className="solar_technician_service_card">
              <div className="solar_technician_card_icon_wrap">
                <FaMagnifyingGlass />
              </div>
              <h3 className="solar_technician_card_title">System Audit &amp; Troubleshooting</h3>
              <p className="solar_technician_card_desc">
                Investigating low voltage output, earth leakages, loose connections, shadow issues, and panel hot spots.
              </p>
            </div>
            {/* Card 6 */}
            <div className="solar_technician_service_card">
              <div className="solar_technician_card_icon_wrap">
                <FaSoap />
              </div>
              <h3 className="solar_technician_card_title">Solar Panel Cleaning</h3>
              <p className="solar_technician_card_desc">
                Deep cleaning and washing of panel surfaces with pure water to remove dust, pollen, and bird droppings to boost power up to 25%.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Block */}
      <section className="solar_technician_trust_sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 solar_technician_trust_col_text">
              <h2 className="section_heading text-start mb-2">
                Why Choose Aya Sir G! <br />
                <span className="red_title">for Solar Technicians?</span>
              </h2>
              <div className="solar_technician_trust_points">
                <div className="solar_technician_trust_point">
                  <div className="solar_technician_trust_icon_box">
                    <FaUserShield />
                  </div>
                  <div>
                    <h3 className="solar_technician_trust_point_title">Certified Solar Experts</h3>
                    <p className="solar_technician_trust_point_desc">
                      Hire professionals with certified training in solar engineering, electrical wiring, and rooftop safety, with fully CNIC-vetted profiles.
                    </p>
                  </div>
                </div>
                <div className="solar_technician_trust_point">
                  <div className="solar_technician_trust_icon_box">
                    <FaClock />
                  </div>
                  <div>
                    <h3 className="solar_technician_trust_point_title">Reliable Diagnostics</h3>
                    <p className="solar_technician_trust_point_desc">
                      Our experts use accurate clamp meters, solar pathfinders, and thermal sensors to resolve issues rather than guessing.
                    </p>
                  </div>
                </div>
                <div className="solar_technician_trust_point">
                  <div className="solar_technician_trust_icon_box">
                    <FaStar />
                  </div>
                  <div>
                    <h3 className="solar_technician_trust_point_title">Direct Deals — Clear Quotes</h3>
                    <p className="solar_technician_trust_point_desc">
                      Talk directly with the technician or installation team. Negotiate rates for labor or complete material setups without middleman fees.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="solar_technician_trust_img_wrap">
                <Image
                  src="/assets/solar-technician.png"
                  alt="Verified solar technician installing solar panels on rooftop on Aya Sir G!"
                  width={600}
                  height={450}
                  className="solar_technician_trust_img"
                  style={{
                    borderRadius: "12px",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shared 4 Steps Component */}
      <ServicesSteps />

      {/* Cities Section */}
      <section className="solar_technician_cities_sec">
        <div className="container">
          <h2 className="solar_technician_section_heading">Find Solar Technicians in Your City</h2>
          <div className="solar_technician_city_pills">
            <Link
              href={`/compnies?role=handyman&category_id=32${
                cityIds.lahore ? `&city=${cityIds.lahore}` : ""
              }`}
              className="solar_technician_city_pill"
            >
              Lahore
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=32${
                cityIds.karachi ? `&city=${cityIds.karachi}` : ""
              }`}
              className="solar_technician_city_pill"
            >
              Karachi
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=32${
                cityIds.islamabad ? `&city=${cityIds.islamabad}` : ""
              }`}
              className="solar_technician_city_pill"
            >
              Islamabad
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="solar_technician_faq_sec">
        <div className="container">
          <h2 className="solar_technician_section_heading">Frequently Asked Questions</h2>
          <div className="solar_technician_faq_wrapper">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>How do I book a solar technician on Aya Sir G!?</Accordion.Header>
                <Accordion.Body>
                  Browse verified solar technician profiles on Aya Sir G!, check their ratings, portfolios, and customer reviews. You can contact the technicians directly to get a quote and schedule an onsite visit.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>What services do solar technicians offer?</Accordion.Header>
                <Accordion.Body>
                  Our solar experts provide complete rooftop solar panel installation, solar inverter repair, battery health checks, net metering application support, solar structure design, and periodic cleaning and maintenance.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Do you help with solar net metering applications?</Accordion.Header>
                <Accordion.Body>
                  Yes, many solar technicians and companies listed on Aya Sir G! can manage the end-to-end net metering process with NEPRA and local power distribution companies (like LESCO, KE, IESCO) to export excess electricity.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Why is my solar system producing less power?</Accordion.Header>
                <Accordion.Body>
                  Reduced power generation can be caused by dirty panels, shadow obstructions, improper tilt angles, inverter faults, or loose wiring. Hire a technician on Aya Sir G! to run a diagnostic audit on your system.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>How often should solar panels be cleaned?</Accordion.Header>
                <Accordion.Body>
                  For maximum efficiency in dusty Pakistani cities, it is recommended to clean solar panels every 1 to 2 weeks. Dust accumulation can reduce electricity generation by up to 20-30%.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Next Net Metering / Solar Repair Banner */}
      <section className="solar_technician_cta_banner">
        <div className="container">
          <h2 className="solar_technician_cta_banner_h2">
            Ready to Go Solar or Repair Your System? Connect with Experts.
          </h2>
          <Link
            href="/compnies?role=handyman&category_id=32"
            className="solar_technician_btn"
          >
            Browse Solar Technicians
          </Link>
        </div>
      </section>
    </div>
  );
}
