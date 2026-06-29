"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import {
  FaBroom,
  FaSoap,
  FaHouse,
  FaTrash,
  FaClock,
  FaTag,
  FaUserShield,
  FaStar,
} from "react-icons/fa6";
import { fetchCityIdByName } from "@/app/lib/cityPages";
import ServicesSteps from "@/app/components/services/Services";
import "./housekeeping.css";

export default function HousekeepingPage() {
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
        "name": "How do I book a housekeeping service on Aya Sir G!?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To book, browse through our verified housekeeping and home cleaning profiles, compare experience levels and client reviews, and contact providers directly to negotiate rates and schedules."
        }
      },
      {
        "@type": "Question",
        "name": "Do housekeeping providers bring their own cleaning materials?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This varies by provider. Some independent housekeepers expect you to provide basic cleaning liquids, mops, and vacuums. Professional cleaning agencies usually bring their own specialized sanitizers, sprayers, and vacuum machines. You can clarify this directly when discussing details."
        }
      },
      {
        "@type": "Question",
        "name": "What is included in a deep kitchen cleaning service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Deep kitchen cleaning includes degreasing the stove and kitchen exhaust hood, washing tile backsplashes, wiping cabinet exteriors and interiors, scrubbing the sink and taps, sanitizing countertops, and deep-cleaning floor tiles."
        }
      },
      {
        "@type": "Question",
        "name": "Can I hire a full-time housekeeper for monthly residential duties?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our platform connects you with both individual domestic housekeepers available for full-time monthly positions and agencies offering regular cleaning staff packages."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer cleaning services for offices and commercial spaces?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. You can find professional commercial cleaning services and corporate office boys who specialize in dusting desks, vacuuming office carpets, and cleaning office kitchenettes and washrooms."
        }
      }
    ]
  };

  return (
    <div className="housekeeping_page margin_navbar">
      {/* FAQ Schema Injection for Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <header className="housekeeping_hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="housekeeping_hero_content text-center text-lg-start">
                <h1 className="housekeeping_hero_h1">
                  Professional Housekeeping & Deep Home Cleaning — Aya Sir G!
                </h1>
                <p className="housekeeping_hero_subheading">
                  Find verified housekeepers, compare deep home cleaning service profiles, read customer reviews, and hire trusted experts.
                </p>
                <div className="housekeeping_hero_ctas justify-content-center justify-content-lg-start">
                  <Link
                    href="/compnies?role=handyman&category_id=65"
                    className="housekeeping_btn housekeeping_btn_primary"
                  >
                    Find Housekeepers
                  </Link>
                  <Link
                    href="/register-yourself"
                    className="housekeeping_btn housekeeping_btn_secondary"
                  >
                    Register as Helper
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0 text-center d-none d-lg-block">
              {/* Housekeeping visual icon */}
              <div
                style={{
                  background: "rgba(2, 132, 199, 0.04)",
                  borderRadius: "50%",
                  width: "280px",
                  height: "280px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  border: "2px dashed rgba(2, 132, 199, 0.15)",
                }}
              >
                <FaBroom size={120} className="text-secondary" style={{ color: "#0284c7" }} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content Block (Word Count: ~150 words) */}
      <section className="housekeeping_content_block">
        <div className="container">
          <div className="housekeeping_content_wrapper">
            <h2 className="housekeeping_section_heading">What Does a Housekeeping Specialist Do?</h2>
            <p className="housekeeping_content_text">
              Hiring a professional, reliable housekeeping service is essential for maintaining a healthy, clean, and organized home or workspace in Pakistan. Keeping up with dusting, deep kitchen cleaning, bathroom sanitization, and floor mopping can be exhausting in busy urban lives. On Aya Sir G!, we connect you with highly skilled and verified housekeepers and cleaning services. Vetted professionals handle daily cleaning routines, deep seasonal cleaning, glass window washing, furniture polishing, carpet vacuuming, and waste disposal. Whether you need a full-time residential housekeeper, a part-time helper, or a deep cleaning crew for post-renovation cleanup, you can easily compare provider profiles, check ratings, and read authentic customer reviews. Hire the best housekeeping specialist near me on Aya Sir G! today to enjoy a spotless, hygienic, and welcoming environment for your family or office staff.
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
      <section className="housekeeping_services_sec">
        <div className="container">
          <h2 className="housekeeping_section_heading">Cleaning Services Available on Aya Sir G!</h2>
          <div className="housekeeping_services_grid">
            {/* Card 1 */}
            <div className="housekeeping_service_card">
              <div className="housekeeping_card_icon_wrap">
                <FaHouse />
              </div>
              <h3 className="housekeeping_card_title">Daily Home Cleaning</h3>
              <p className="housekeeping_card_desc">
                Regular house chores including sweeping, floor mopping, dusting furniture, making beds, and tidying rooms.
              </p>
            </div>
            {/* Card 2 */}
            <div className="housekeeping_service_card">
              <div className="housekeeping_card_icon_wrap">
                <FaSoap />
              </div>
              <h3 className="housekeeping_card_title">Kitchen Deep Sanitizing</h3>
              <p className="housekeeping_card_desc">
                Degreasing stoves, cleaning exhaust hoods, washing cabinet grids, countertops, wall tiles, and sinks.
              </p>
            </div>
            {/* Card 3 */}
            <div className="housekeeping_service_card">
              <div className="housekeeping_card_icon_wrap">
                <FaBroom />
              </div>
              <h3 className="housekeeping_card_title">Bathroom Scrubbing</h3>
              <p className="housekeeping_card_desc">
                Scrubbing toilet bowls, floor tiles, shower fixtures, wash basins, mirrors, and complete washroom disinfection.
              </p>
            </div>
            {/* Card 4 */}
            <div className="housekeeping_service_card">
              <div className="housekeeping_card_icon_wrap">
                <FaClock />
              </div>
              <h3 className="housekeeping_card_title">Glass & Window Washing</h3>
              <p className="housekeeping_card_desc">
                Detailed washing of glass panels, sliding window frames, metal grills, fly screens, and balcony railings.
              </p>
            </div>
            {/* Card 5 */}
            <div className="housekeeping_service_card">
              <div className="housekeeping_card_icon_wrap">
                <FaTrash />
              </div>
              <h3 className="housekeeping_card_title">Post-Renovation Cleaning</h3>
              <p className="housekeeping_card_desc">
                Thorough removal of paint splatters, construction dust, cement stains, and debris from newly renovated properties.
              </p>
            </div>
            {/* Card 6 */}
            <div className="housekeeping_service_card">
              <div className="housekeeping_card_icon_wrap">
                <FaTag />
              </div>
              <h3 className="housekeeping_card_title">Office Housekeeping</h3>
              <p className="housekeeping_card_desc">
                Maintaining cleanliness in corporate offices, meeting rooms, corridors, pantries, and washrooms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Block Section */}
      <section className="housekeeping_trust_sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 housekeeping_trust_col_text">
              <h2 className="section_heading text-start mb-2">
                Why Choose Aya Sir G! <br />
                <span className="red_title">for Housekeeping?</span>
              </h2>
              <div className="housekeeping_trust_points">
                <div className="housekeeping_trust_point">
                  <div className="housekeeping_trust_icon_box">
                    <FaUserShield />
                  </div>
                  <div>
                    <h3 className="housekeeping_trust_point_title">Vetted & Trusted Staff</h3>
                    <p className="housekeeping_trust_point_desc">
                      We present verified helper profiles with CNIC records to ensure safety, privacy, and peace of mind.
                    </p>
                  </div>
                </div>
                <div className="housekeeping_trust_point">
                  <div className="housekeeping_trust_icon_box">
                    <FaSoap />
                  </div>
                  <div>
                    <h3 className="housekeeping_trust_point_title">Eco-Friendly Cleaning Products</h3>
                    <p className="housekeeping_trust_point_desc">
                      Providers use effective, non-toxic sanitizing solutions safe for your children, pets, and luxury finishes.
                    </p>
                  </div>
                </div>
                <div className="housekeeping_trust_point">
                  <div className="housekeeping_trust_icon_box">
                    <FaStar />
                  </div>
                  <div>
                    <h3 className="housekeeping_trust_point_title">Flexible Customized Bookings</h3>
                    <p className="housekeeping_trust_point_desc">
                      Directly negotiate daily, weekly, or full-time monthly schedules that align with your lifestyle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="housekeeping_trust_img_wrap">
                <Image
                  src="/assets/housekeeping.png"
                  alt="Verified housekeeper cleaning home on Aya Sir G!"
                  width={600}
                  height={450}
                  className="housekeeping_trust_img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shared 4 Steps Component */}
      <ServicesSteps />

      {/* Cities Section */}
      <section className="housekeeping_cities_sec">
        <div className="container">
          <h2 className="housekeeping_section_heading">Find Housekeepers in Your City</h2>
          <div className="housekeeping_city_pills">
            <Link
              href={`/compnies?role=handyman&category_id=65${
                cityIds.lahore ? `&city=${cityIds.lahore}` : ""
              }`}
              className="housekeeping_city_pill"
            >
              Lahore
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=65${
                cityIds.karachi ? `&city=${cityIds.karachi}` : ""
              }`}
              className="housekeeping_city_pill"
            >
              Karachi
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=65${
                cityIds.islamabad ? `&city=${cityIds.islamabad}` : ""
              }`}
              className="housekeeping_city_pill"
            >
              Islamabad
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="housekeeping_faq_sec">
        <div className="container">
          <h2 className="housekeeping_section_heading">Frequently Asked Questions</h2>
          <div className="housekeeping_faq_wrapper">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>How do I book a housekeeping service on Aya Sir G!?</Accordion.Header>
                <Accordion.Body>
                  To book, browse through our verified housekeeping and home cleaning profiles, compare experience levels and client reviews, and contact providers directly to negotiate rates and schedules.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Do housekeeping providers bring their own cleaning materials?</Accordion.Header>
                <Accordion.Body>
                  This varies by provider. Some independent housekeepers expect you to provide basic cleaning liquids, mops, and vacuums. Professional cleaning agencies usually bring their own specialized sanitizers, sprayers, and vacuum machines. You can clarify this directly when discussing details.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>What is included in a deep kitchen cleaning service?</Accordion.Header>
                <Accordion.Body>
                  Deep kitchen cleaning includes degreasing the stove and kitchen exhaust hood, washing tile backsplashes, wiping cabinet exteriors and interiors, scrubbing the sink and taps, sanitizing countertops, and deep-cleaning floor tiles.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Can I hire a full-time housekeeper for monthly residential duties?</Accordion.Header>
                <Accordion.Body>
                  Yes. Our platform connects you with both individual domestic housekeepers available for full-time monthly positions and agencies offering regular cleaning staff packages.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Do you offer cleaning services for offices and commercial spaces?</Accordion.Header>
                <Accordion.Body>
                  Yes. You can find professional commercial cleaning services and corporate office boys who specialize in dusting desks, vacuuming office carpets, and cleaning office kitchenettes and washrooms.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Bold CTA Banner */}
      <section className="housekeeping_cta_banner">
        <div className="container">
          <h2 className="housekeeping_cta_banner_h2">
            Need a Clean, Spotless Home or Office? Find Housekeeping Services Now.
          </h2>
          <Link
            href="/compnies?role=handyman&category_id=65"
            className="housekeeping_btn"
          >
            Browse Housekeeping
          </Link>
        </div>
      </section>
    </div>
  );
}
