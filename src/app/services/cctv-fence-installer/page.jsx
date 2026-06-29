"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import {
  FaVideo,
  FaShieldHalved,
  FaLock,
  FaEye,
  FaWrench,
  FaTag,
  FaUserShield,
  FaStar,
} from "react-icons/fa6";
import { fetchCityIdByName } from "@/app/lib/cityPages";
import ServicesSteps from "@/app/components/services/Services";
import "./cctv-fence-installer.css";

export default function CctvFenceInstallerPage() {
  const [cityIds, setCityIds] = useState({
    lahore: "",
    karachi: "",
    islamabad: "",
  });

  useEffect(() => {
    async function loadCityIds() {
      try {
        const lahore = await fetchCityIdByName("Lahore");
        const karachi = await fetchCityIdByName("Karachi");
        const islamabad = await fetchCityIdByName("Islamabad");
        setCityIds({
          lahore: lahore || "",
          karachi: karachi || "",
          islamabad: islamabad || "",
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
        "name": "How do I book a CCTV or fence installer on Aya Sir G!?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To book, browse through our verified CCTV and fence installer profiles, check their experience, ratings, and customer reviews, and contact them directly to explain your security requirements and negotiate rates."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between an IP camera and an analog camera?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "IP (Internet Protocol) cameras transmit video digitally over a network, offering higher resolution, advanced digital zoom, and smarter features like motion detection. Analog cameras transmit video via coaxial cables to a DVR, which is generally more cost-effective but has limited resolution and features."
        }
      },
      {
        "@type": "Question",
        "name": "Do installers provide the cameras and cables themselves?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Installers can source the security cameras, DVRs, NVRs, cables, and fence materials for you and include it in a package, or you can purchase the hardware yourself and hire them solely for the professional installation work."
        }
      },
      {
        "@type": "Question",
        "name": "What is concertina razor wire and why is it used for fences?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Concertina razor wire is a type of barbed wire formed in large coils that expand like an accordion. It features sharp steel blades designed to prevent scaling or cutting, making it an excellent security upgrade for residential and commercial boundary walls."
        }
      },
      {
        "@type": "Question",
        "name": "Can I view my security cameras on my phone when I am away from home?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our expert CCTV installers will connect your DVR/NVR to your home internet router and configure the corresponding mobile application, allowing you to monitor live feeds and recorded clips from anywhere in the world."
        }
      }
    ]
  };

  return (
    <div className="cctv_page margin_navbar">
      {/* FAQ Schema Injection for Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <header className="cctv_hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="cctv_hero_content text-center text-lg-start">
                <h1 className="cctv_hero_h1">
                  Professional CCTV & Fence Installers in Pakistan — Hire on Aya Sir G!
                </h1>
                <p className="cctv_hero_subheading">
                  Find verified security system installers, compare CCTV and safety fence technician profiles, read reviews, and hire trusted experts.
                </p>
                <div className="cctv_hero_ctas justify-content-center justify-content-lg-start">
                  <Link
                    href="/compnies?role=handyman&category_id=11"
                    className="cctv_btn cctv_btn_primary"
                  >
                    Find Security Installers
                  </Link>
                  <Link
                    href="/register-yourself"
                    className="cctv_btn cctv_btn_secondary"
                  >
                    Register as Installer
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0 text-center d-none d-lg-block">
              {/* CCTV visual icon */}
              <div
                style={{
                  background: "rgba(55, 65, 81, 0.04)",
                  borderRadius: "50%",
                  width: "280px",
                  height: "280px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  border: "2px dashed rgba(55, 65, 81, 0.15)",
                }}
              >
                <FaVideo size={120} className="text-secondary" style={{ color: "#374151" }} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content Block (Word Count: ~150 words) */}
      <section className="cctv_content_block">
        <div className="container">
          <div className="cctv_content_wrapper">
            <h2 className="cctv_section_heading">What Does a CCTV & Fence Installer Do?</h2>
            <p className="cctv_content_text">
              A professional CCTV and security fence installer is critical for protecting your residential, commercial, or industrial property in Pakistan. With rising security challenges, setting up a robust perimeter and visual surveillance system provides complete peace of mind. On Aya Sir G!, we connect you with highly skilled and verified security system technicians who specialize in installing high-definition IP cameras, wireless CCTV setups, DVR configuration, and remote monitoring on smartphones. In addition, our experienced fence installers set up security razor wire, barbed wire, chain-link fences, and steel security grills to prevent unauthorized entry. Whether you need to secure a private residence, a corporate office, or a warehouse facility, you can easily compare expert installer profiles, read client reviews, and check ratings. Hire the best CCTV and fence installation specialists near me on Aya Sir G! today to protect your property and loved ones.
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

      {/* Services Grid Section */}
      <section className="cctv_services_sec">
        <div className="container">
          <h2 className="cctv_section_heading">Security Services Available on Aya Sir G!</h2>
          <div className="cctv_services_grid">
            {/* Card 1 */}
            <div className="cctv_service_card">
              <div className="cctv_card_icon_wrap">
                <FaVideo />
              </div>
              <h3 className="cctv_card_title">CCTV Camera Installation</h3>
              <p className="cctv_card_desc">
                Setup of indoor/outdoor HD IP cameras, wireless security cameras, dome, bullet, and PTZ camera networks.
              </p>
            </div>
            {/* Card 2 */}
            <div className="cctv_service_card">
              <div className="cctv_card_icon_wrap">
                <FaEye />
              </div>
              <h3 className="cctv_card_title">Remote Monitoring Config</h3>
              <p className="cctv_card_desc">
                Configuring DVR/NVR recording devices and setting up remote live feed viewing apps on mobile phones.
              </p>
            </div>
            {/* Card 3 */}
            <div className="cctv_service_card">
              <div className="cctv_card_icon_wrap">
                <FaShieldHalved />
              </div>
              <h3 className="cctv_card_title">Razor & Barbed Fencing</h3>
              <p className="cctv_card_desc">
                Installing concertina razor wire, barbed wire, and anti-climbing fencing along wall perimeters.
              </p>
            </div>
            {/* Card 4 */}
            <div className="cctv_service_card">
              <div className="cctv_card_icon_wrap">
                <FaLock />
              </div>
              <h3 className="cctv_card_title">Access Control Systems</h3>
              <p className="cctv_card_desc">
                Fitting biometrics, facial scanners, RFID card systems, digital locks, and video door intercoms.
              </p>
            </div>
            {/* Card 5 */}
            <div className="cctv_service_card">
              <div className="cctv_card_icon_wrap">
                <FaWrench />
              </div>
              <h3 className="cctv_card_title">Maintenance & Repairs</h3>
              <p className="cctv_card_desc">
                Troubleshooting video signal drops, repairing broken fences, lens cleaning, and hard drive upgrades.
              </p>
            </div>
            {/* Card 6 */}
            <div className="cctv_service_card">
              <div className="cctv_card_icon_wrap">
                <FaTag />
              </div>
              <h3 className="cctv_card_title">Security Site Survey</h3>
              <p className="cctv_card_desc">
                Comprehensive layout planning to determine ideal camera angles, light requirements, and fencing needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Block Section */}
      <section className="cctv_trust_sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 cctv_trust_col_text">
              <h2 className="section_heading text-start mb-2">
                Why Choose Aya Sir G! <br />
                <span className="red_title">for Security Installation?</span>
              </h2>
              <div className="cctv_trust_points">
                <div className="cctv_trust_point">
                  <div className="cctv_trust_icon_box">
                    <FaUserShield />
                  </div>
                  <div>
                    <h3 className="cctv_trust_point_title">Verified Security Providers</h3>
                    <p className="cctv_trust_point_desc">
                      Experienced technicians with clean records, giving you absolute trust during installation at home or work.
                    </p>
                  </div>
                </div>
                <div className="cctv_trust_point">
                  <div className="cctv_trust_icon_box">
                    <FaVideo />
                  </div>
                  <div>
                    <h3 className="cctv_trust_point_title">HD Surveillance & Precision Fencing</h3>
                    <p className="cctv_trust_point_desc">
                      Specialists optimize camera view coverage with no blind spots, and install tightly tensioned barbed wire.
                    </p>
                  </div>
                </div>
                <div className="cctv_trust_point">
                  <div className="cctv_trust_icon_box">
                    <FaStar />
                  </div>
                  <div>
                    <h3 className="cctv_trust_point_title">Direct Negotiation, Zero Markup</h3>
                    <p className="cctv_trust_point_desc">
                      Browse authentic customer ratings, contact installers directly, and pay realistic prices without commission.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="cctv_trust_img_wrap">
                <Image
                  src="/assets/cctv-fence-installer.png"
                  alt="Verified security installer mounting CCTV camera on Aya Sir G!"
                  width={600}
                  height={450}
                  className="cctv_trust_img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shared 4 Steps Component */}
      <ServicesSteps />

      {/* Cities Section */}
      <section className="cctv_cities_sec">
        <div className="container">
          <h2 className="cctv_section_heading">Find Security Installers in Your City</h2>
          <div className="cctv_city_pills">
            <Link
              href={`/compnies?role=handyman&category_id=11${
                cityIds.lahore ? `&city=${cityIds.lahore}` : ""
              }`}
              className="cctv_city_pill"
            >
              Lahore
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=11${
                cityIds.karachi ? `&city=${cityIds.karachi}` : ""
              }`}
              className="cctv_city_pill"
            >
              Karachi
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=11${
                cityIds.islamabad ? `&city=${cityIds.islamabad}` : ""
              }`}
              className="cctv_city_pill"
            >
              Islamabad
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="cctv_faq_sec">
        <div className="container">
          <h2 className="cctv_section_heading">Frequently Asked Questions</h2>
          <div className="cctv_faq_wrapper">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>How do I book a CCTV or fence installer on Aya Sir G!?</Accordion.Header>
                <Accordion.Body>
                  To book, browse through our verified CCTV and fence installer profiles, check their experience, ratings, and customer reviews, and contact them directly to explain your security requirements and negotiate rates.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>What is the difference between an IP camera and an analog camera?</Accordion.Header>
                <Accordion.Body>
                  IP (Internet Protocol) cameras transmit video digitally over a network, offering higher resolution, advanced digital zoom, and smarter features like motion detection. Analog cameras transmit video via coaxial cables to a DVR, which is generally more cost-effective but has limited resolution and features.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Do installers provide the cameras and cables themselves?</Accordion.Header>
                <Accordion.Body>
                  Installers can source the security cameras, DVRs, NVRs, cables, and fence materials for you and include it in a package, or you can purchase the hardware yourself and hire them solely for the professional installation work.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>What is concertina razor wire and why is it used for fences?</Accordion.Header>
                <Accordion.Body>
                  Concertina razor wire is a type of barbed wire formed in large coils that expand like an accordion. It features sharp steel blades designed to prevent scaling or cutting, making it an excellent security upgrade for residential and commercial boundary walls.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Can I view my security cameras on my phone when I am away from home?</Accordion.Header>
                <Accordion.Body>
                  Yes. Our expert CCTV installers will connect your DVR/NVR to your home internet router and configure the corresponding mobile application, allowing you to monitor live feeds and recorded clips from anywhere in the world.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Bold CTA Banner */}
      <section className="cctv_cta_banner">
        <div className="container">
          <h2 className="cctv_cta_banner_h2">
            Looking to Secure Your Property? Find Verified Security Installers Now.
          </h2>
          <Link
            href="/compnies?role=handyman&category_id=11"
            className="cctv_btn"
          >
            Browse Security Installers
          </Link>
        </div>
      </section>
    </div>
  );
}
