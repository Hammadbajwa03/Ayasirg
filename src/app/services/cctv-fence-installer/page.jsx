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
import ServiceChooseSection from "@/app/components/services/ServiceChooseSection";
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
        "name": "How do I book a CCTV camera installation or fence installer on Aya Sir G!?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It's pretty simple, just go through our verified CCTV camera installation and fence installer profiles, check out their experience, ratings, and what past customers are saying, and then message them directly to talk about what you need and work out a price together."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between an IP camera and an analog camera?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "IP (Internet Protocol) cameras send their footage digitally over a network, which means you get sharper resolution, better digital zoom, and smarter extras like motion detection. Analog cameras work a bit differently, they send video through coaxial cables straight to a DVR. They're usually easier on the pocket, but you won't get the same resolution or feature set."
        }
      },
      {
        "@type": "Question",
        "name": "Do CCTV camera installation services near me provide the cameras and cables themselves?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most of the time, yes. Installers can handle everything for you, cameras, DVRs, NVRs, cables, even fence materials, and bundle it all into one package. But if you already have your own equipment, that's fine too, you can just bring them in for the installation part alone."
        }
      },
      {
        "@type": "Question",
        "name": "What is concertina razor wire and why is it used for fences?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Think of concertina razor wire as barbed wire that's been coiled up so it expands like an accordion when stretched out. It's lined with sharp steel blades that make climbing or cutting through pretty much impossible, which is why it's such a popular choice for boosting security on home and business boundary walls."
        }
      },
      {
        "@type": "Question",
        "name": "Can I view my security cameras on my phone when I am away from home?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, absolutely. Our cctv camera installation in Lahore technicians will connect your DVR/NVR to your home internet and set up the app on your phone, so no matter where you are in the world, you can pull up live feeds or check past recordings whenever you need to."
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
                  Professional CCTV Camera Installation & Fence Installers in Pakistan — Hire on Aya Sir G!
                </h1>
                <p className="cctv_hero_subheading">
                  Find verified security system installers, compare CCTV camera installation and safety fence technician profiles, read reviews, and hire trusted experts.
                </p>
                <div className="cctv_hero_ctas justify-content-center justify-content-lg-start">
                  <Link
                    href="/compnies/cctv-fence-installer"
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

      {/* Content Block */}
      <section className="cctv_content_block">
        <div className="container">
          <div className="cctv_content_wrapper">
            <h2 className="cctv_section_heading">CCTV Camera Installation and Electric Fence Installation Services with Aya Sir G!</h2>
            <p className="cctv_content_text">
              Inflation is one of the biggest challenges Pakistan is facing right now. It's hit people hard, from the rising cost of everyday essentials like food and medicine, to job losses that keep piling on the financial pressure. And with all this strain, security concerns have naturally gone up in many areas too.
            </p>
            <p className="cctv_content_text">
              Over the past few years, home robberies and other security incidents have become far more common, which is exactly why CCTV camera installation and electric fencing have turned into a real necessity for homes and businesses alike, not just an add-on.
            </p>
            <p className="cctv_content_text">
              The tricky part, though, is finding someone reliable and genuinely skilled for cctv camera installation services or setting up an electric fence. Most people still end up relying on word-of-mouth references, and honestly, that's rarely the most transparent or efficient way to go about it.
            </p>
            <p className="cctv_content_text">
              That's where Aya Sir G! comes in. We've built a platform that brings verified CCTV technicians, including experts for cctv camera installation in Lahore, security system installers, and other blue-collar professionals, all together in one place.
            </p>
            <p className="cctv_content_text">
              You can compare profiles, check ratings and experience, and make an informed decision based on real feedback from real customers. It's all about ensuring quality work, fair pricing, and a lot more transparency than the old way of doing things.
            </p>
            <p className="cctv_content_text">
              With Aya Sir G!, you basically get a one-window solution for all your blue-collar service needs, including cctv camera installation near me, so you don't have to depend only on informal references anymore.
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
                <span className="red_title">for CCTV Camera Installation Services Near Me?</span>
              </h2>
              <div className="cctv_trust_points">
                <div className="cctv_trust_point">
                  <div className="cctv_trust_icon_box">
                    <FaUserShield />
                  </div>
                  <div>
                    <h3 className="cctv_trust_point_title">Verified Security Providers</h3>
                    <p className="cctv_trust_point_desc">
                      Experienced technicians with clean records, so you can feel completely at ease during installation, whether it's at home or at work.
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
                      Our specialists make sure your camera coverage has no blind spots, and they install barbed wire that's tightly tensioned and built to last.
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
                      Browse authentic customer ratings, reach out to cctv camera installation experts directly, and pay real, fair prices, no hidden commission involved.
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

      <ServiceChooseSection slug="cctv-fence-installer" />


      {/* Cities Section */}
      <section className="cctv_cities_sec">
        <div className="container">
          <h2 className="cctv_section_heading">Find Security Installers in Your City</h2>
          <div className="cctv_city_pills">
            <Link
              href={`/compnies/cctv-fence-installer${
                cityIds.lahore ? `?city=${cityIds.lahore}` : ""
              }`}
              className="cctv_city_pill"
            >
              Lahore
            </Link>
            <Link
              href={`/compnies/cctv-fence-installer${
                cityIds.karachi ? `?city=${cityIds.karachi}` : ""
              }`}
              className="cctv_city_pill"
            >
              Karachi
            </Link>
            <Link
              href={`/compnies/cctv-fence-installer${
                cityIds.islamabad ? `?city=${cityIds.islamabad}` : ""
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
          <h2 className="cctv_section_heading">Frequently Asked Questions – CCTV Camera Installation</h2>
          <div className="cctv_faq_wrapper">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>How do I book a CCTV camera installation or fence installer on Aya Sir G!?</Accordion.Header>
                <Accordion.Body>
                  It's pretty simple, just go through our verified CCTV camera installation and fence installer profiles, check out their experience, ratings, and what past customers are saying, and then message them directly to talk about what you need and work out a price together.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>What is the difference between an IP camera and an analog camera?</Accordion.Header>
                <Accordion.Body>
                  IP (Internet Protocol) cameras send their footage digitally over a network, which means you get sharper resolution, better digital zoom, and smarter extras like motion detection. Analog cameras work a bit differently, they send video through coaxial cables straight to a DVR. They're usually easier on the pocket, but you won't get the same resolution or feature set.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Do CCTV camera installation services near me provide the cameras and cables themselves?</Accordion.Header>
                <Accordion.Body>
                  Most of the time, yes. Installers can handle everything for you, cameras, DVRs, NVRs, cables, even fence materials, and bundle it all into one package. But if you already have your own equipment, that's fine too, you can just bring them in for the installation part alone.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>What is concertina razor wire and why is it used for fences?</Accordion.Header>
                <Accordion.Body>
                  Think of concertina razor wire as barbed wire that's been coiled up so it expands like an accordion when stretched out. It's lined with sharp steel blades that make climbing or cutting through pretty much impossible, which is why it's such a popular choice for boosting security on home and business boundary walls.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Can I view my security cameras on my phone when I am away from home?</Accordion.Header>
                <Accordion.Body>
                  Yes, absolutely. Our cctv camera installation in Lahore technicians will connect your DVR/NVR to your home internet and set up the app on your phone, so no matter where you are in the world, you can pull up live feeds or check past recordings whenever you need to.
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
            href="/compnies/cctv-fence-installer"
            className="cctv_btn"
          >
            Browse Security Installers
          </Link>
        </div>
      </section>
    </div>
  );
}
