"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import {
  FaScrewdriverWrench,
  FaWind,
  FaSnowflake,
  FaWrench,
  FaTruck,
  FaStar,
  FaUserShield,
  FaLocationDot,
} from "react-icons/fa6";
import { fetchCityIdByName } from "@/app/lib/cityPages";
import ServicesSteps from "@/app/components/services/Services";
import "./ac-technician.css";

export default function AcTechnicianPage() {
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
        "name": "How to hire an AC technician on Aya Sir G?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To hire an AC technician on Aya Sir G!, browse our verified profiles, compare reviews and ratings of different technicians, and contact your preferred professional directly."
        }
      },
      {
        "@type": "Question",
        "name": "Is gas refilling service available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our AC technicians offer professional gas refilling services for all types of air conditioners, including split and window units, ensuring leak detection before refilling."
        }
      },
      {
        "@type": "Question",
        "name": "What does an AC service cost in Pakistan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The cost of AC service in Pakistan depends on the type of service required (routine cleaning, repair, gas refilling, or installation). You can compare different technician profiles to find rates that fit your budget."
        }
      },
      {
        "@type": "Question",
        "name": "Are the AC technicians on Aya Sir G! verified?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Aya Sir G! verifies the profiles and credentials of AC technicians. You can also view reviews and ratings left by previous customers to hire with confidence."
        }
      },
      {
        "@type": "Question",
        "name": "Which cities are covered by AC technician services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our AC technician services are currently available in Lahore, Karachi, and Islamabad, connecting you with local experts in these areas."
        }
      }
    ]
  };

  return (
    <div className="ac_page margin_navbar">
      {/* FAQ Schema Injection for Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <header className="ac_hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="ac_hero_content text-center text-lg-start">
                <h1 className="ac_hero_h1">
                  Trusted AC Technicians in Pakistan — Hire on Aya Sir G!
                </h1>
                <p className="ac_hero_subheading">
                  Find verified AC experts, compare professional profiles, check authentic reviews, and hire the perfect technician for your home or office in minutes.
                </p>
                <div className="ac_hero_ctas justify-content-center justify-content-lg-start">
                  <Link
                    href="/compnies?role=handyman&category_id=44"
                    className="ac_btn ac_btn_primary"
                  >
                    Find an AC Technician
                  </Link>
                  <Link
                    href="/register-yourself"
                    className="ac_btn ac_btn_secondary"
                  >
                    Register as AC Technician
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0 text-center d-none d-lg-block">
              {/* Cooling/AC visual symbol or styling */}
              <div
                style={{
                  background: "rgba(0, 119, 182, 0.04)",
                  borderRadius: "50%",
                  width: "280px",
                  height: "280px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  border: "2px dashed rgba(0, 119, 182, 0.15)",
                }}
              >
                <FaSnowflake size={120} className="text-info animate-spin" style={{ animationDuration: "12s" }} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content Block (Word Count: 119 words) */}
      <section className="ac_content_block">
        <div className="container">
          <div className="ac_content_wrapper">
            <h2 className="ac_section_heading">What Does an AC Technician Do?</h2>
            <p className="ac_content_text">
              In Lahore, where summer temperatures can become extremely high, having access to a reliable AC technician is essential for every home, office, shop, and commercial building. Professional AC technicians provide expert services including AC installation, AC repair, AC gas filling, AC maintenance, AC cleaning, inverter AC servicing, and complete air conditioner troubleshooting. Regular AC servicing not only improves cooling performance but also reduces electricity consumption and extends the life of your air conditioner. Whether you need a split AC technician for a new installation or an experienced technician to fix cooling issues, water leakage, unusual noise, or compressor problems, finding a skilled professional can save both time and money. Aya Sir G makes it easy to connect with trusted AC technicians in Lahore, Pakistan, helping customers quickly find experienced professionals for residential and commercial AC services whenever they need reliable cooling solutions.
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
      <section className="ac_services_sec">
        <div className="container">
          <h2 className="ac_section_heading">AC Services Available on Aya Sir G!</h2>
          <div className="ac_services_grid">
            {/* Card 1 */}
            <div className="ac_service_card">
              <div className="ac_card_icon_wrap">
                <FaScrewdriverWrench />
              </div>
              <h3 className="ac_card_title">AC Installation</h3>
              <p className="ac_card_desc">
                Professional installation of split and window air conditioners for optimal cooling.
              </p>
            </div>
            {/* Card 2 */}
            <div className="ac_service_card">
              <div className="ac_card_icon_wrap">
                <FaWind />
              </div>
              <h3 className="ac_card_title">AC Servicing and Cleaning</h3>
              <p className="ac_card_desc">
                Deep cleaning of filters, coils, and outdoor units to improve efficiency.
              </p>
            </div>
            {/* Card 3 */}
            <div className="ac_service_card">
              <div className="ac_card_icon_wrap">
                <FaSnowflake />
              </div>
              <h3 className="ac_card_title">Gas Refilling</h3>
              <p className="ac_card_desc">
                Quality refrigerant refilling and leakage repair for consistent cooling.
              </p>
            </div>
            {/* Card 4 */}
            <div className="ac_service_card">
              <div className="ac_card_icon_wrap">
                <FaWrench />
              </div>
              <h3 className="ac_card_title">AC Repair and Fault Diagnosis</h3>
              <p className="ac_card_desc">
                Accurate troubleshooting of wiring, compressor, or thermostat issues.
              </p>
            </div>
            {/* Card 5 */}
            <div className="ac_service_card">
              <div className="ac_card_icon_wrap">
                <FaTruck />
              </div>
              <h3 className="ac_card_title">AC Uninstallation and Shifting</h3>
              <p className="ac_card_desc">
                Safe dismantling and relocation of your AC unit with zero damage.
              </p>
            </div>
            {/* Card 6 */}
            <div className="ac_service_card">
              <div className="ac_card_icon_wrap">
                <FaStar />
              </div>
              <h3 className="ac_card_title">Split and Window AC Specialists</h3>
              <p className="ac_card_desc">
                Expert maintenance services tailored for both split and window AC models.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Block Section */}
      <section className="ac_trust_sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 ac_trust_col_text">
              <h2 className="section_heading text-start mb-2">
                Why Choose Aya Sir G! <br />
                <span className="red_title">for AC Technicians?</span>
              </h2>
              <div className="ac_trust_points">
                <div className="ac_trust_point">
                  <div className="ac_trust_icon_box">
                    <FaUserShield />
                  </div>
                  <div>
                    <h3 className="ac_trust_point_title">Verified and Reviewed Professionals</h3>
                    <p className="ac_trust_point_desc">
                      Every technician's profile is vetted, and reviews are left by real customers.
                    </p>
                  </div>
                </div>
                <div className="ac_trust_point">
                  <div className="ac_trust_icon_box">
                    <FaLocationDot />
                  </div>
                  <div>
                    <h3 className="ac_trust_point_title">Available Across Lahore, Karachi, and Islamabad</h3>
                    <p className="ac_trust_point_desc">
                      Get instant access to top-rated cooling experts in Pakistan's major cities.
                    </p>
                  </div>
                </div>
                <div className="ac_trust_point">
                  <div className="ac_trust_icon_box">
                    <FaStar />
                  </div>
                  <div>
                    <h3 className="ac_trust_point_title">Rated by Real Customers</h3>
                    <p className="ac_trust_point_desc">
                      Check genuine ratings and choose the technician that best fits your budget.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="ac_trust_img_wrap">
                <Image
                  src="/assets/ac-technician.png"
                  alt="Verified AC technician in Pakistan repairing split cooling unit"
                  width={600}
                  height={450}
                  className="ac_trust_img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shared 4 Steps Component */}
      <ServicesSteps />

      {/* Cities Section */}
      <section className="ac_cities_sec">
        <div className="container">
          <h2 className="ac_section_heading">Find AC Technicians in Your City</h2>
          <div className="ac_city_pills">
            <Link
              href={`/compnies?role=handyman&category_id=44${
                cityIds.lahore ? `&city=${cityIds.lahore}` : ""
              }`}
              className="ac_city_pill"
            >
              Lahore
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=44${
                cityIds.karachi ? `&city=${cityIds.karachi}` : ""
              }`}
              className="ac_city_pill"
            >
              Karachi
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=44${
                cityIds.islamabad ? `&city=${cityIds.islamabad}` : ""
              }`}
              className="ac_city_pill"
            >
              Islamabad
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="ac_faq_sec">
        <div className="container">
          <h2 className="ac_section_heading">Frequently Asked Questions</h2>
          <div className="ac_faq_wrapper">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>How to hire an AC technician on Aya Sir G?</Accordion.Header>
                <Accordion.Body>
                  To hire an AC technician on Aya Sir G!, browse our verified profiles, compare reviews and ratings of different technicians, and contact your preferred professional directly.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Is gas refilling service available?</Accordion.Header>
                <Accordion.Body>
                  Yes, our AC technicians offer professional gas refilling services for all types of air conditioners, including split and window units, ensuring leak detection before refilling.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>What does an AC service cost in Pakistan?</Accordion.Header>
                <Accordion.Body>
                  The cost of AC service in Pakistan depends on the type of service required (routine cleaning, repair, gas refilling, or installation). You can compare different technician profiles to find rates that fit your budget.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Are the AC technicians on Aya Sir G! verified?</Accordion.Header>
                <Accordion.Body>
                  Yes, Aya Sir G! verifies the profiles and credentials of AC technicians. You can also view reviews and ratings left by previous customers to hire with confidence.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Which cities are covered by AC technician services?</Accordion.Header>
                <Accordion.Body>
                  Our AC technician services are currently available in Lahore, Karachi, and Islamabad, connecting you with local experts in these areas.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Bold CTA Banner */}
      <section className="ac_cta_banner">
        <div className="container">
          <h2 className="ac_cta_banner_h2">
            Ready to Fix Your AC? Find a Technician Now.
          </h2>
          <Link
            href="/compnies?role=handyman&category_id=44"
            className="ac_btn"
          >
            Browse AC Technicians
          </Link>
        </div>
      </section>
    </div>
  );
}
