"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import {
  FaBriefcase,
  FaIndustry,
  FaClipboardList,
  FaBox,
  FaUserTie,
  FaClock,
  FaUserShield,
  FaStar,
  FaCircleCheck,
} from "react-icons/fa6";
import { fetchCityIdByName } from "@/app/lib/cityPages";
import ServicesSteps from "@/app/components/services/Services";
import "./office-boy-factory-workers.css";

export default function OfficeBoyFactoryWorkersPage() {
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
        "name": "How do I hire an office boy on Aya Sir G!?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Browse verified office boy and factory worker profiles on Aya Sir G!, review their work history and ratings, then contact them directly to discuss duties, working hours, and monthly salary."
        }
      },
      {
        "@type": "Question",
        "name": "What tasks does an office boy perform?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An office boy handles tea/coffee preparation, photocopying, document delivery, basic office cleaning, running errands, mail dispatching, and general support for the office staff."
        }
      },
      {
        "@type": "Question",
        "name": "Can I hire factory workers for short-term or contractual work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. On Aya Sir G! you can find factory workers available for daily wage (dihari), weekly, monthly, or full project-based contracts depending on your manufacturing or warehouse requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Are the office boys and factory workers verified?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Aya Sir G! displays profile cards with CNIC verification status and customer reviews so you can confidently choose reliable, trustworthy, and background-checked staff."
        }
      },
      {
        "@type": "Question",
        "name": "What is the typical salary for an office boy in Pakistan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Office boy salaries in Pakistan typically range between PKR 20,000 to PKR 35,000 per month depending on the city, experience level, and duties assigned. Factory workers may have different wage structures based on industry."
        }
      }
    ]
  };

  return (
    <div className="office_boy_page margin_navbar">
      {/* FAQ Schema Injection for Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <header className="office_boy_hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="office_boy_hero_content text-center text-lg-start">
                <h1 className="office_boy_hero_h1">
                  Office Boys &amp; Factory Workers — Aya Sir G!
                </h1>
                <p className="office_boy_hero_subheading">
                  Find verified, reliable office boys and factory workers in Pakistan. Browse profiles, check reviews, and hire directly for offices, warehouses, and industrial facilities.
                </p>
                <div className="office_boy_hero_ctas justify-content-center justify-content-lg-start">
                  <Link
                    href="/compnies?role=handyman&category_id=52"
                    className="office_boy_btn office_boy_btn_primary"
                  >
                    Find Office Boys / Workers
                  </Link>
                  <Link
                    href="/register-yourself"
                    className="office_boy_btn office_boy_btn_secondary"
                  >
                    Register as Office Staff
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0 text-center d-none d-lg-block">
              {/* Office visual icon */}
              <div
                style={{
                  background: "rgba(2, 88, 136, 0.04)",
                  borderRadius: "50%",
                  width: "280px",
                  height: "280px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  border: "2px dashed rgba(2, 88, 136, 0.15)",
                }}
              >
                <FaBriefcase size={120} style={{ color: "#025888" }} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content Block (~150 words) */}
      <section className="office_boy_content_block">
        <div className="container">
          <div className="office_boy_content_wrapper">
            <h2 className="office_boy_section_heading">What Does an Office Boy &amp; Factory Worker Do?</h2>
            <p className="office_boy_content_text">
              Hiring a dependable office boy or factory worker is essential for smooth daily operations in any corporate office, manufacturing plant, or warehouse in Pakistan. Office boys manage tea service, photocopying, document filing, mail delivery, and general administrative errands that keep offices running efficiently. Factory workers handle production line assistance, packing, loading and unloading goods, quality checking, machine operation support, and warehouse inventory management. On Aya Sir G!, we connect you with vetted, experienced office support staff and industrial laborers. Whether you need a full-time office boy for a corporate firm on Lahore's Main Boulevard, a part-time helper for a small office in Islamabad's Blue Area, or skilled factory hands for your manufacturing unit in Karachi's SITE Area, you can browse verified profiles, compare experience levels, and negotiate salaries directly with no middlemen. Hire trusted office and factory staff near you today.
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
      <section className="office_boy_services_sec">
        <div className="container">
          <h2 className="office_boy_section_heading">Office &amp; Factory Staff Services Available</h2>
          <div className="office_boy_services_grid">
            {/* Card 1 */}
            <div className="office_boy_service_card">
              <div className="office_boy_card_icon_wrap">
                <FaBriefcase />
              </div>
              <h3 className="office_boy_card_title">Office Boy / Peon</h3>
              <p className="office_boy_card_desc">
                Tea/coffee service, document delivery, photocopying, running errands, and general office support for corporate and small business offices.
              </p>
            </div>
            {/* Card 2 */}
            <div className="office_boy_service_card">
              <div className="office_boy_card_icon_wrap">
                <FaIndustry />
              </div>
              <h3 className="office_boy_card_title">Factory / Production Worker</h3>
              <p className="office_boy_card_desc">
                Assisting on production lines, operating basic machinery, quality checking goods, and supporting manufacturing supervisors on the factory floor.
              </p>
            </div>
            {/* Card 3 */}
            <div className="office_boy_service_card">
              <div className="office_boy_card_icon_wrap">
                <FaBox />
              </div>
              <h3 className="office_boy_card_title">Packing &amp; Warehouse Helper</h3>
              <p className="office_boy_card_desc">
                Packing finished goods, organizing warehouse shelves, labeling products, and coordinating dispatch orders for timely deliveries.
              </p>
            </div>
            {/* Card 4 */}
            <div className="office_boy_service_card">
              <div className="office_boy_card_icon_wrap">
                <FaClipboardList />
              </div>
              <h3 className="office_boy_card_title">Inventory &amp; Store Keeper</h3>
              <p className="office_boy_card_desc">
                Maintaining stock records, organizing storage areas, tracking incoming and outgoing goods, and assisting in stocktaking and audits.
              </p>
            </div>
            {/* Card 5 */}
            <div className="office_boy_service_card">
              <div className="office_boy_card_icon_wrap">
                <FaUserTie />
              </div>
              <h3 className="office_boy_card_title">Receptionist Helper</h3>
              <p className="office_boy_card_desc">
                Welcoming visitors, directing guests, managing incoming calls, filing documents, and providing front-desk assistance to reception staff.
              </p>
            </div>
            {/* Card 6 */}
            <div className="office_boy_service_card">
              <div className="office_boy_card_icon_wrap">
                <FaCircleCheck />
              </div>
              <h3 className="office_boy_card_title">Loading &amp; Unloading Labor</h3>
              <p className="office_boy_card_desc">
                Physically loading and unloading delivery trucks, shifting goods within factory premises, and assisting logistics teams with freight handling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Block Section */}
      <section className="office_boy_trust_sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 office_boy_trust_col_text">
              <h2 className="section_heading text-start mb-2">
                Why Choose Aya Sir G! <br />
                <span className="red_title">for Office &amp; Factory Staff?</span>
              </h2>
              <div className="office_boy_trust_points">
                <div className="office_boy_trust_point">
                  <div className="office_boy_trust_icon_box">
                    <FaUserShield />
                  </div>
                  <div>
                    <h3 className="office_boy_trust_point_title">Verified &amp; Trustworthy Profiles</h3>
                    <p className="office_boy_trust_point_desc">
                      Every office boy and factory worker profile on Aya Sir G! includes CNIC verification status and real customer ratings for safe hiring.
                    </p>
                  </div>
                </div>
                <div className="office_boy_trust_point">
                  <div className="office_boy_trust_icon_box">
                    <FaClock />
                  </div>
                  <div>
                    <h3 className="office_boy_trust_point_title">Flexible Hire Arrangements</h3>
                    <p className="office_boy_trust_point_desc">
                      Hire on daily wages, monthly salary, or contract basis. Find full-time permanent staff or part-time helpers based on your business needs.
                    </p>
                  </div>
                </div>
                <div className="office_boy_trust_point">
                  <div className="office_boy_trust_icon_box">
                    <FaStar />
                  </div>
                  <div>
                    <h3 className="office_boy_trust_point_title">Direct Contact — No Agency Fees</h3>
                    <p className="office_boy_trust_point_desc">
                      Contact workers directly and negotiate salary without paying extra commission to middlemen placement agencies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="office_boy_trust_img_wrap">
                <Image
                  src="/assets/office-boy.png"
                  alt="Verified office boy at work on Aya Sir G!"
                  width={600}
                  height={450}
                  className="office_boy_trust_img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shared 4 Steps Component */}
      <ServicesSteps />

      {/* Cities Section */}
      <section className="office_boy_cities_sec">
        <div className="container">
          <h2 className="office_boy_section_heading">Find Office Boys &amp; Factory Workers in Your City</h2>
          <div className="office_boy_city_pills">
            <Link
              href={`/compnies?role=handyman&category_id=52${
                cityIds.lahore ? `&city=${cityIds.lahore}` : ""
              }`}
              className="office_boy_city_pill"
            >
              Lahore
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=52${
                cityIds.karachi ? `&city=${cityIds.karachi}` : ""
              }`}
              className="office_boy_city_pill"
            >
              Karachi
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=52${
                cityIds.islamabad ? `&city=${cityIds.islamabad}` : ""
              }`}
              className="office_boy_city_pill"
            >
              Islamabad
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="office_boy_faq_sec">
        <div className="container">
          <h2 className="office_boy_section_heading">Frequently Asked Questions</h2>
          <div className="office_boy_faq_wrapper">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>How do I hire an office boy on Aya Sir G!?</Accordion.Header>
                <Accordion.Body>
                  Browse verified office boy and factory worker profiles on Aya Sir G!, review their work history and ratings, then contact them directly to discuss duties, working hours, and monthly salary.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>What tasks does an office boy perform?</Accordion.Header>
                <Accordion.Body>
                  An office boy handles tea/coffee preparation, photocopying, document delivery, basic office cleaning, running errands, mail dispatching, and general support for the office staff.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Can I hire factory workers for short-term or contractual work?</Accordion.Header>
                <Accordion.Body>
                  Yes. On Aya Sir G! you can find factory workers available for daily wage (dihari), weekly, monthly, or full project-based contracts depending on your manufacturing or warehouse requirements.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Are the office boys and factory workers verified?</Accordion.Header>
                <Accordion.Body>
                  Aya Sir G! displays profile cards with CNIC verification status and customer reviews so you can confidently choose reliable, trustworthy, and background-checked staff.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>What is the typical salary for an office boy in Pakistan?</Accordion.Header>
                <Accordion.Body>
                  Office boy salaries in Pakistan typically range between PKR 20,000 to PKR 35,000 per month depending on the city, experience level, and duties assigned. Factory workers may have different wage structures based on industry.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Bold CTA Banner */}
      <section className="office_boy_cta_banner">
        <div className="container">
          <h2 className="office_boy_cta_banner_h2">
            Need Reliable Office or Factory Staff? Find Them Now.
          </h2>
          <Link
            href="/compnies?role=handyman&category_id=52"
            className="office_boy_btn"
          >
            Browse Office Boys &amp; Workers
          </Link>
        </div>
      </section>
    </div>
  );
}
