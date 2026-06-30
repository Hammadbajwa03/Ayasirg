"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import {
  FaBroom,
  FaSoap,
  FaTrashCan,
  FaBucket,
  FaBuilding,
  FaHouse,
  FaUserShield,
  FaClock,
  FaStar,
} from "react-icons/fa6";
import { fetchCityIdByName } from "@/app/lib/cityPages";
import ServicesSteps from "@/app/components/services/Services";
import "./sweeper.css";

export default function SweeperPage() {
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
        "name": "How do I book a sweeper or cleaning worker on Aya Sir G!?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Browse verified sweeper profiles on Aya Sir G!, compare their ratings, check customer reviews, and view their previous work details. Contact the candidate directly to discuss duties, hours, and rates."
        }
      },
      {
        "@type": "Question",
        "name": "What cleaning duties can a sweeper perform?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sweepers can perform floor sweeping and mopping, courtyard and outdoor cleaning, garbage disposal, washroom cleaning, office cleaning, post-construction cleanup, and street sweeping."
        }
      },
      {
        "@type": "Question",
        "name": "Do sweepers work on a daily, weekly, or monthly basis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can hire sweepers for one-time daily tasks, weekly deep cleaning shifts, or as full-time monthly domestic or commercial cleaners. You negotiate terms directly with them."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to provide cleaning tools and chemicals?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Generally, for residential or office maintenance, the client provides brooms, mops, buckets, and disinfectants/chemicals. Discuss this clearly during the interview to align expectations."
        }
      },
      {
        "@type": "Question",
        "name": "Are the sweepers on Aya Sir G! verified?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Aya Sir G! displays verified CNIC status badges and customer reviews on profiles to help you hire trustworthy and reliable cleaning help."
        }
      }
    ]
  };

  return (
    <div className="sweeper_page margin_navbar">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <header className="sweeper_hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="sweeper_hero_content text-center text-lg-start">
                <h1 className="sweeper_hero_h1">
                  Professional Sweepers &amp; Cleaners — Aya Sir G!
                </h1>
                <p className="sweeper_hero_subheading">
                  Find verified local sweepers and sanitation staff for home yard sweeping, office cleaning, washroom hygiene, and waste disposal. Compare profiles and hire directly.
                </p>
                <div className="sweeper_hero_ctas justify-content-center justify-content-lg-start">
                  <Link
                    href="/compnies?role=handyman&category_id=46"
                    className="sweeper_btn sweeper_btn_primary"
                  >
                    Find Sweepers Near Me
                  </Link>
                  <Link
                    href="/register-yourself"
                    className="sweeper_btn sweeper_btn_secondary"
                  >
                    Register as Sweeper
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0 text-center d-none d-lg-block">
              <div
                style={{
                  background: "rgba(13, 148, 136, 0.04)",
                  borderRadius: "50%",
                  width: "280px",
                  height: "280px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  border: "2px dashed rgba(13, 148, 136, 0.15)",
                }}
              >
                <FaBroom size={120} style={{ color: "#0d9488" }} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content Block */}
      <section className="sweeper_content_block">
        <div className="container">
          <div className="sweeper_content_wrapper">
            <h2 className="sweeper_section_heading">Trusted Yard Sweeping &amp; Sanitation Services</h2>
            <p className="sweeper_content_text">
              Professional sweepers help maintain cleanliness and hygiene in residential, commercial, and public spaces. In Lahore, Pakistan, experienced sweepers provide services for homes, offices, schools, hospitals, factories, shopping centers, and apartment buildings. Their responsibilities include sweeping floors, collecting waste, cleaning outdoor areas, maintaining public spaces, and supporting general housekeeping and sanitation. Whether you need a full-time sweeper, part-time cleaning staff, or commercial cleaning support, reliable professionals help create a clean, healthy, and welcoming environment. Aya Sir G connects you with trusted sweepers in Lahore, making it easy to hire dependable cleaning staff for daily, weekly, or routine maintenance services.
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
      <section className="sweeper_services_sec">
        <div className="container">
          <h2 className="sweeper_section_heading">Sweeping &amp; Cleaning Services Available</h2>
          <div className="sweeper_services_grid">
            {/* Card 1 */}
            <div className="sweeper_service_card">
              <div className="sweeper_card_icon_wrap">
                <FaHouse />
              </div>
              <h3 className="sweeper_card_title">Home Yard &amp; Courtyard Sweeping</h3>
              <p className="sweeper_card_desc">
                Daily sweeping, leaves collection, and cleaning of open driveways, courtyards, terraces, and lawns.
              </p>
            </div>
            {/* Card 2 */}
            <div className="sweeper_service_card">
              <div className="sweeper_card_icon_wrap">
                <FaSoap />
              </div>
              <h3 className="sweeper_card_title">Washroom &amp; Toilet Cleaning</h3>
              <p className="sweeper_card_desc">
                Disinfecting tiles, scrubbing basins, toilet bowls, and maintaining absolute hygiene and fresh scent.
              </p>
            </div>
            {/* Card 3 */}
            <div className="sweeper_service_card">
              <div className="sweeper_card_icon_wrap">
                <FaTrashCan />
              </div>
              <h3 className="sweeper_card_title">Garbage &amp; Waste Disposal</h3>
              <p className="sweeper_card_desc">
                Regular collection and proper disposal of household, commercial, or garden waste into designated dump zones.
              </p>
            </div>
            {/* Card 4 */}
            <div className="sweeper_service_card">
              <div className="sweeper_card_icon_wrap">
                <FaBuilding />
              </div>
              <h3 className="sweeper_card_title">Office &amp; Corporate Sweeping</h3>
              <p className="sweeper_card_desc">
                After-hours or morning floor sweeping, dusting, workspace cleaning, and trash bag replacements for offices.
              </p>
            </div>
            {/* Card 5 */}
            <div className="sweeper_service_card">
              <div className="sweeper_card_icon_wrap">
                <FaBucket />
              </div>
              <h3 className="sweeper_card_title">Post-Construction Cleanup</h3>
              <p className="sweeper_card_desc">
                Detailed scrubbing and sweeping of concrete, paint splatters, dust, and rubble after building renovations.
              </p>
            </div>
            {/* Card 6 */}
            <div className="sweeper_service_card">
              <div className="sweeper_card_icon_wrap">
                <FaBroom />
              </div>
              <h3 className="sweeper_card_title">Street &amp; Pathway Sweeping</h3>
              <p className="sweeper_card_desc">
                Sweeping of private housing society streets, commercial corridors, parking spaces, and community walks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Block */}
      <section className="sweeper_trust_sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 sweeper_trust_col_text">
              <h2 className="section_heading text-start mb-2">
                Why Choose Aya Sir G! <br />
                <span className="red_title">for Sweepers &amp; Cleaners?</span>
              </h2>
              <div className="sweeper_trust_points">
                <div className="sweeper_trust_point">
                  <div className="sweeper_trust_icon_box">
                    <FaUserShield />
                  </div>
                  <div>
                    <h3 className="sweeper_trust_point_title">CNIC-Verified Personnel</h3>
                    <p className="sweeper_trust_point_desc">
                      Every cleaning professional listed on Aya Sir G! has a verified identity badge so you can safely hire them for your domestic or commercial premises.
                    </p>
                  </div>
                </div>
                <div className="sweeper_trust_point">
                  <div className="sweeper_trust_icon_box">
                    <FaClock />
                  </div>
                  <div>
                    <h3 className="sweeper_trust_point_title">Flexible Shifts</h3>
                    <p className="sweeper_trust_point_desc">
                      Find sweepers who match your preferred timeline, whether you need morning yard sweeping, full-time day shifts, or part-time cleaners.
                    </p>
                  </div>
                </div>
                <div className="sweeper_trust_point">
                  <div className="sweeper_trust_icon_box">
                    <FaStar />
                  </div>
                  <div>
                    <h3 className="sweeper_trust_point_title">Direct Hiring — No Commission</h3>
                    <p className="sweeper_trust_point_desc">
                      No agencies cutting into workers' wages. Talk directly, negotiate wages, and pay directly to the cleaner of your choice.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="sweeper_trust_img_wrap">
                <Image
                  src="/assets/sweeper.png"
                  alt="Verified sweeper cleaning home courtyard on Aya Sir G!"
                  width={600}
                  height={450}
                  className="sweeper_trust_img"
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
      <section className="sweeper_cities_sec">
        <div className="container">
          <h2 className="sweeper_section_heading">Find Sweepers in Your City</h2>
          <div className="sweeper_city_pills">
            <Link
              href={`/compnies?role=handyman&category_id=46${
                cityIds.lahore ? `&city=${cityIds.lahore}` : ""
              }`}
              className="sweeper_city_pill"
            >
              Lahore
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=46${
                cityIds.karachi ? `&city=${cityIds.karachi}` : ""
              }`}
              className="sweeper_city_pill"
            >
              Karachi
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=46${
                cityIds.islamabad ? `&city=${cityIds.islamabad}` : ""
              }`}
              className="sweeper_city_pill"
            >
              Islamabad
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="sweeper_faq_sec">
        <div className="container">
          <h2 className="sweeper_section_heading">Frequently Asked Questions</h2>
          <div className="sweeper_faq_wrapper">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>How do I book a sweeper or cleaning worker on Aya Sir G!?</Accordion.Header>
                <Accordion.Body>
                  Browse verified sweeper profiles on Aya Sir G!, compare their ratings, check customer reviews, and view their previous work details. Contact the candidate directly to discuss duties, hours, and rates.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>What cleaning duties can a sweeper perform?</Accordion.Header>
                <Accordion.Body>
                  Sweepers can perform floor sweeping and mopping, courtyard and outdoor cleaning, garbage disposal, washroom cleaning, office cleaning, post-construction cleanup, and street sweeping.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Do sweepers work on a daily, weekly, or monthly basis?</Accordion.Header>
                <Accordion.Body>
                  Yes, you can hire sweepers for one-time daily tasks, weekly deep cleaning shifts, or as full-time monthly domestic or commercial cleaners. You negotiate terms directly with them.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Do I need to provide cleaning tools and chemicals?</Accordion.Header>
                <Accordion.Body>
                  Generally, for residential or office maintenance, the client provides brooms, mops, buckets, and disinfectants/chemicals. Discuss this clearly during the interview to align expectations.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Are the sweepers on Aya Sir G! verified?</Accordion.Header>
                <Accordion.Body>
                  Aya Sir G! displays verified CNIC status badges and customer reviews on profiles to help you hire trustworthy and reliable cleaning help.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="sweeper_cta_banner">
        <div className="container">
          <h2 className="sweeper_cta_banner_h2">
            Keep Your Premises Clean. Find Reliable Sweepers Now.
          </h2>
          <Link
            href="/compnies?role=handyman&category_id=46"
            className="sweeper_btn"
          >
            Browse Sweepers
          </Link>
        </div>
      </section>
    </div>
  );
}
