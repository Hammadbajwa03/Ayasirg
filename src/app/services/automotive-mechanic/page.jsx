"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import {
  FaGears,
  FaOilCan,
  FaWrench,
  FaSliders,
  FaCarBattery,
  FaCar,
  FaUserShield,
  FaLocationDot,
  FaStar,
} from "react-icons/fa6";
import { fetchCityIdByName } from "@/app/lib/cityPages";
import ServicesSteps from "@/app/components/services/Services";
import "./automotive-mechanic.css";

export default function AutomotiveMechanicPage() {
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
        "name": "How to hire an automotive mechanic on Aya Sir G?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To hire an automotive mechanic on Aya Sir G!, browse our list of verified car experts, compare their ratings and customer reviews, and call or message them directly to discuss your vehicle repair needs."
        }
      },
      {
        "@type": "Question",
        "name": "What types of vehicles do the mechanics service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our registered mechanics service a wide range of vehicles, including sedans, hatchbacks, SUVs, luxury cars, and commercial vans of various makes and models."
        }
      },
      {
        "@type": "Question",
        "name": "How much does car repair cost in Pakistan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The cost of car repair in Pakistan varies depending on the issue (e.g., oil changes, engine tuning, or brake replacement). Compare profiles on Aya Sir G! to get competitive quotes directly from mechanics."
        }
      },
      {
        "@type": "Question",
        "name": "Are the mechanics on Aya Sir G! verified and experienced?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Aya Sir G! verifies the profiles and credentials of automotive mechanics. You can review their detailed profile history, experience levels, and customer ratings before booking."
        }
      },
      {
        "@type": "Question",
        "name": "Which cities have automotive mechanics available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our automotive mechanic services are currently available in Lahore, Karachi, and Islamabad, connecting you with top local car workshops and mobile mechanics."
        }
      }
    ]
  };

  return (
    <div className="mech_page margin_navbar">
      {/* FAQ Schema Injection for Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <header className="mech_hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="mech_hero_content text-center text-lg-start">
                <h1 className="mech_hero_h1">
                  Trusted Automotive Mechanics in Pakistan — Hire on Aya Sir G!
                </h1>
                <p className="mech_hero_subheading">
                  Find verified car mechanics, compare professional profiles, read authentic reviews, and book expert auto repair services in minutes.
                </p>
                <div className="mech_hero_ctas justify-content-center justify-content-lg-start">
                  <Link
                    href="/compnies?role=handyman&category_id=56"
                    className="mech_btn mech_btn_primary"
                  >
                    Find an Automotive Mechanic
                  </Link>
                  <Link
                    href="/register-yourself"
                    className="mech_btn mech_btn_secondary"
                  >
                    Register as Automotive Mechanic
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0 text-center d-none d-lg-block">
              {/* Automotive visual symbol */}
              <div
                style={{
                  background: "rgba(181, 0, 0, 0.04)",
                  borderRadius: "50%",
                  width: "280px",
                  height: "280px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  border: "2px dashed rgba(181, 0, 0, 0.15)",
                }}
              >
                <FaGears size={120} className="text-danger" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content Block (Word Count: 128 words) */}
      <section className="mech_content_block">
        <div className="container">
          <div className="mech_content_wrapper">
            <h2 className="mech_section_heading">What Does an Automotive Mechanic Do?</h2>
            <p className="mech_content_text">
              Keeping your vehicle in good condition is essential for safe and comfortable travel in Lahore, Pakistan. A professional automotive mechanic can diagnose and repair a wide range of vehicle issues, including engine problems, brake repair, suspension repair, battery replacement, oil change, car tuning, transmission repair, clutch replacement, and general vehicle maintenance. Regular servicing helps improve fuel efficiency, extends the lifespan of your car, and reduces the risk of unexpected breakdowns. Whether you own a small family car, SUV, motorcycle, or commercial vehicle, experienced mechanics ensure your vehicle performs at its best. Aya Sir G connects customers with skilled automotive mechanics in Lahore, making it easy to find reliable professionals for car repair, routine maintenance, emergency mechanical services, and complete vehicle inspections whenever you need trusted automotive assistance.
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
      <section className="mech_services_sec">
        <div className="container">
          <h2 className="mech_section_heading">Automotive Services Available on Aya Sir G!</h2>
          <div className="mech_services_grid">
            {/* Card 1 */}
            <div className="mech_service_card">
              <div className="mech_card_icon_wrap">
                <FaGears />
              </div>
              <h3 className="mech_card_title">Engine Repair and Overhaul</h3>
              <p className="mech_card_desc">
                Professional diagnostics, tuning, and complete overhaul services for car engines.
              </p>
            </div>
            {/* Card 2 */}
            <div className="mech_service_card">
              <div className="mech_card_icon_wrap">
                <FaOilCan />
              </div>
              <h3 className="mech_card_title">Oil and Filter Change</h3>
              <p className="mech_card_desc">
                Routine lubrication and filter replacements to extend your engine's lifespan.
              </p>
            </div>
            {/* Card 3 */}
            <div className="mech_service_card">
              <div className="mech_card_icon_wrap">
                <FaWrench />
              </div>
              <h3 className="mech_card_title">Brake System Repair</h3>
              <p className="mech_card_desc">
                Brake pad replacement, fluid top-ups, and complete safety inspections.
              </p>
            </div>
            {/* Card 4 */}
            <div className="mech_service_card">
              <div className="mech_card_icon_wrap">
                <FaSliders />
              </div>
              <h3 className="mech_card_title">Transmission and Gearbox Service</h3>
              <p className="mech_card_desc">
                Clutch adjustments, transmission fluid changes, and gearbox repairs.
              </p>
            </div>
            {/* Card 5 */}
            <div className="mech_service_card">
              <div className="mech_card_icon_wrap">
                <FaCarBattery />
              </div>
              <h3 className="mech_card_title">Car Electrical and Diagnostics</h3>
              <p className="mech_card_desc">
                Advanced scanner diagnostics to troubleshoot battery, wiring, and sensor faults.
              </p>
            </div>
            {/* Card 6 */}
            <div className="mech_service_card">
              <div className="mech_card_icon_wrap">
                <FaCar />
              </div>
              <h3 className="mech_card_title">Suspension and Steering Repair</h3>
              <p className="mech_card_desc">
                Shock absorber replacement, wheel alignment checks, and steering fluid fixes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Block Section */}
      <section className="mech_trust_sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mech_trust_col_text">
              <h2 className="section_heading text-start mb-2">
                Why Choose Aya Sir G! <br />
                <span className="red_title">for Automotive Mechanics?</span>
              </h2>
              <div className="mech_trust_points">
                <div className="mech_trust_point">
                  <div className="mech_trust_icon_box">
                    <FaUserShield />
                  </div>
                  <div>
                    <h3 className="mech_trust_point_title">Verified and Reviewed Professionals</h3>
                    <p className="mech_trust_point_desc">
                      Browse vetted mechanics with authentic ratings and reviews from real car owners.
                    </p>
                  </div>
                </div>
                <div className="mech_trust_point">
                  <div className="mech_trust_icon_box">
                    <FaLocationDot />
                  </div>
                  <div>
                    <h3 className="mech_trust_point_title">Serving Lahore, Karachi, and Islamabad</h3>
                    <p className="mech_trust_point_desc">
                      Find local car repair experts and workshops near you in Pakistan's major cities.
                    </p>
                  </div>
                </div>
                <div className="mech_trust_point">
                  <div className="mech_trust_icon_box">
                    <FaStar />
                  </div>
                  <div>
                    <h3 className="mech_trust_point_title">Rated by Real Car Owners</h3>
                    <p className="mech_trust_point_desc">
                      Check customer reviews for auto workshops and individual mechanics to hire confidently.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="mech_trust_img_wrap">
                <Image
                  src="/assets/automotive-mechanic.png"
                  alt="Verified car mechanic repairing a vehicle on Aya Sir G!"
                  width={600}
                  height={450}
                  className="mech_trust_img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shared 4 Steps Component */}
      <ServicesSteps />

      {/* Cities Section */}
      <section className="mech_cities_sec">
        <div className="container">
          <h2 className="mech_section_heading">Find Automotive Mechanics in Your City</h2>
          <div className="mech_city_pills">
            <Link
              href={`/compnies?role=handyman&category_id=56${
                cityIds.lahore ? `&city=${cityIds.lahore}` : ""
              }`}
              className="mech_city_pill"
            >
              Lahore
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=56${
                cityIds.karachi ? `&city=${cityIds.karachi}` : ""
              }`}
              className="mech_city_pill"
            >
              Karachi
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=56${
                cityIds.islamabad ? `&city=${cityIds.islamabad}` : ""
              }`}
              className="mech_city_pill"
            >
              Islamabad
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mech_faq_sec">
        <div className="container">
          <h2 className="mech_section_heading">Frequently Asked Questions</h2>
          <div className="mech_faq_wrapper">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>How to hire an automotive mechanic on Aya Sir G?</Accordion.Header>
                <Accordion.Body>
                  To hire an automotive mechanic on Aya Sir G!, browse our list of verified car experts, compare their ratings and customer reviews, and call or message them directly to discuss your vehicle repair needs.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>What types of vehicles do the mechanics service?</Accordion.Header>
                <Accordion.Body>
                  Our registered mechanics service a wide range of vehicles, including sedans, hatchbacks, SUVs, luxury cars, and commercial vans of various makes and models.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>How much does car repair cost in Pakistan?</Accordion.Header>
                <Accordion.Body>
                  The cost of car repair in Pakistan varies depending on the issue (e.g., oil changes, engine tuning, or brake replacement). Compare profiles on Aya Sir G! to get competitive quotes directly from mechanics.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Are the mechanics on Aya Sir G! verified and experienced?</Accordion.Header>
                <Accordion.Body>
                  Yes, Aya Sir G! verifies the profiles and credentials of automotive mechanics. You can review their detailed profile history, experience levels, and customer ratings before booking.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Which cities have automotive mechanics available?</Accordion.Header>
                <Accordion.Body>
                  Our automotive mechanic services are currently available in Lahore, Karachi, and Islamabad, connecting you with top local car workshops and mobile mechanics.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Bold CTA Banner */}
      <section className="mech_cta_banner">
        <div className="container">
          <h2 className="mech_cta_banner_h2">
            Car Trouble? Find a Mechanic Near You Right Now.
          </h2>
          <Link
            href="/compnies?role=handyman&category_id=56"
            className="mech_btn"
          >
            Browse Automotive Mechanics
          </Link>
        </div>
      </section>
    </div>
  );
}
