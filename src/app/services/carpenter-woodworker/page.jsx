"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import {
  FaHammer,
  FaDoorOpen,
  FaChair,
  FaPaintRoller,
  FaRulerCombined,
  FaLock,
  FaUserShield,
  FaLocationDot,
  FaStar,
} from "react-icons/fa6";
import { fetchCityIdByName } from "@/app/lib/cityPages";
import ServicesSteps from "@/app/components/services/Services";
import "./carpenter-woodworker.css";

export default function CarpenterWoodworkerPage() {
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
        "name": "How do I book a carpenter on Aya Sir G!?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To book a carpenter, browse our verified carpenter profiles, check reviews, ratings, and experience levels, and contact the woodworker directly to negotiate rates and schedules."
        }
      },
      {
        "@type": "Question",
        "name": "Do carpenters bring their own wood and materials?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Typically, customers purchase the main raw wood or laminate sheets based on their design preferences. The carpenter will bring professional cutting and assembly tools, nails, glue, and screws. You can discuss material procurement directly with the carpenter."
        }
      },
      {
        "@type": "Question",
        "name": "Can carpenters repair damaged antique or modern furniture?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our registered carpenters are skilled in fixing broken joints, loose drawers, creaky doors, and re-polishing old wood to make it look brand new."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to assemble a standard wardrobe or bed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Assembling a standard pre-fabricated bed or wardrobe takes about 1 to 3 hours, depending on the complexity of the design and hardware."
        }
      },
      {
        "@type": "Question",
        "name": "Are the carpentry labor rates negotiable?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you connect directly with the carpenters on our platform. This allows you to explain the scope of work and discuss a mutually acceptable fixed price or hourly rate."
        }
      }
    ]
  };

  return (
    <div className="carpenter_page margin_navbar">
      {/* FAQ Schema Injection for Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <header className="carpenter_hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="carpenter_hero_content text-center text-lg-start">
                <h1 className="carpenter_hero_h1">
                  Professional Carpenters & Woodworkers in Pakistan — Hire on Aya Sir G!
                </h1>
                <p className="carpenter_hero_subheading">
                  Find verified home carpenters, compare woodworker profiles, read real reviews, and hire expert carpenters in minutes.
                </p>
                <div className="carpenter_hero_ctas justify-content-center justify-content-lg-start">
                  <Link
                    href="/compnies?role=handyman&category_id=26"
                    className="carpenter_btn carpenter_btn_primary"
                  >
                    Find a Carpenter
                  </Link>
                  <Link
                    href="/register-yourself"
                    className="carpenter_btn carpenter_btn_secondary"
                  >
                    Register as Carpenter
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0 text-center d-none d-lg-block">
              {/* Carpenter visual icon */}
              <div
                style={{
                  background: "rgba(139, 90, 43, 0.04)",
                  borderRadius: "50%",
                  width: "280px",
                  height: "280px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  border: "2px dashed rgba(139, 90, 43, 0.15)",
                }}
              >
                <FaHammer size={120} className="text-secondary" style={{ color: "#8b5a2b" }} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content Block (Word Count: ~140 words) */}
      <section className="carpenter_content_block">
        <div className="container">
          <div className="carpenter_content_wrapper">
            <h2 className="carpenter_section_heading">What Does a Carpenter or Woodworker Do?</h2>
            <p className="carpenter_content_text">
              A skilled carpenter or woodworker can transform your ideas into durable and beautifully crafted wooden furniture and fittings for homes, offices, and commercial spaces. In Lahore, Pakistan, professional carpenters provide a wide range of woodworking services, including furniture making, custom wardrobes, kitchen cabinets, doors, windows, shelves, wooden flooring, office furniture, repairs, polishing, and furniture restoration. Whether you need custom-made furniture, home renovations, or minor wood repairs, experienced craftsmen ensure quality workmanship with attention to detail. Aya Sir G connects you with trusted carpenters and woodworkers in Lahore, making it easy to find reliable professionals for residential and commercial woodworking projects, furniture installation, maintenance, and customized wood solutions that fit your style and budget.
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
      <section className="carpenter_services_sec">
        <div className="container">
          <h2 className="carpenter_section_heading">Carpentry Services Available on Aya Sir G!</h2>
          <div className="carpenter_services_grid">
            {/* Card 1 */}
            <div className="carpenter_service_card">
              <div className="carpenter_card_icon_wrap">
                <FaHammer />
              </div>
              <h3 className="carpenter_card_title">Furniture Assembly & Repair</h3>
              <p className="carpenter_card_desc">
                Assembling flat-pack beds, wardrobes, and repairing broken tables, chairs, drawer tracks, or cabinets.
              </p>
            </div>
            {/* Card 2 */}
            <div className="carpenter_service_card">
              <div className="carpenter_card_icon_wrap">
                <FaDoorOpen />
              </div>
              <h3 className="carpenter_card_title">Door & Window Fitting</h3>
              <p className="carpenter_card_desc">
                Fitting wooden doors, building frames, mounting hinges, sliding windows, and fixing alignment issues.
              </p>
            </div>
            {/* Card 3 */}
            <div className="carpenter_service_card">
              <div className="carpenter_card_icon_wrap">
                <FaChair />
              </div>
              <h3 className="carpenter_card_title">Custom Cabinetry & Shelving</h3>
              <p className="carpenter_card_desc">
                Designing and constructing customized wooden cabinets, kitchen storage shelves, and study desks.
              </p>
            </div>
            {/* Card 4 */}
            <div className="carpenter_service_card">
              <div className="carpenter_card_icon_wrap">
                <FaPaintRoller />
              </div>
              <h3 className="carpenter_card_title">Wood Polishing & Painting</h3>
              <p className="carpenter_card_desc">
                Premium varnishing, polishing, and painting wood surfaces to protect them and restore natural grains.
              </p>
            </div>
            {/* Card 5 */}
            <div className="carpenter_service_card">
              <div className="carpenter_card_icon_wrap">
                <FaRulerCombined />
              </div>
              <h3 className="carpenter_card_title">Wood Flooring & Decking</h3>
              <p className="carpenter_card_desc">
                Installing wooden floors, laminate flooring, door baseboards, and repairing outdoor wooden decks.
              </p>
            </div>
            {/* Card 6 */}
            <div className="carpenter_service_card">
              <div className="carpenter_card_icon_wrap">
                <FaLock />
              </div>
              <h3 className="carpenter_card_title">Locks & Hardware Fitting</h3>
              <p className="carpenter_card_desc">
                Installing cylinder locks, door handles, latches, safety chains, security bolts, and sliding locks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Block Section */}
      <section className="carpenter_trust_sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 carpenter_trust_col_text">
              <h2 className="section_heading text-start mb-2">
                Why Choose Aya Sir G! <br />
                <span className="red_title">for Professional Woodworkers?</span>
              </h2>
              <div className="carpenter_trust_points">
                <div className="carpenter_trust_point">
                  <div className="carpenter_trust_icon_box">
                    <FaUserShield />
                  </div>
                  <div>
                    <h3 className="carpenter_trust_point_title">Verified & Skilled Carpenters</h3>
                    <p className="carpenter_trust_point_desc">
                      Experienced woodwork specialists with clean background checks and proven skill records.
                    </p>
                  </div>
                </div>
                <div className="carpenter_trust_point">
                  <div className="carpenter_trust_icon_box">
                    <FaRulerCombined />
                  </div>
                  <div>
                    <h3 className="carpenter_trust_point_title">Precision Tools & Clean Finishes</h3>
                    <p className="carpenter_trust_point_desc">
                      Technicians utilize professional power saws, sanders, and drills for straight lines and clean fittings.
                    </p>
                  </div>
                </div>
                <div className="carpenter_trust_point">
                  <div className="carpenter_trust_icon_box">
                    <FaStar />
                  </div>
                  <div>
                    <h3 className="carpenter_trust_point_title">Trusted by Thousands of Clients</h3>
                    <p className="carpenter_trust_point_desc">
                      Read authentic ratings and reviews left by other clients in Lahore, Karachi, and Islamabad.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="carpenter_trust_img_wrap">
                <Image
                  src="/assets/carpenter-woodworker.png"
                  alt="Verified carpenter working on wood furniture on Aya Sir G!"
                  width={600}
                  height={450}
                  className="carpenter_trust_img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shared 4 Steps Component */}
      <ServicesSteps />

      {/* Cities Section */}
      <section className="carpenter_cities_sec">
        <div className="container">
          <h2 className="carpenter_section_heading">Find Carpenters in Your City</h2>
          <div className="carpenter_city_pills">
            <Link
              href={`/compnies?role=handyman&category_id=26${
                cityIds.lahore ? `&city=${cityIds.lahore}` : ""
              }`}
              className="carpenter_city_pill"
            >
              Lahore
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=26${
                cityIds.karachi ? `&city=${cityIds.karachi}` : ""
              }`}
              className="carpenter_city_pill"
            >
              Karachi
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=26${
                cityIds.islamabad ? `&city=${cityIds.islamabad}` : ""
              }`}
              className="carpenter_city_pill"
            >
              Islamabad
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="carpenter_faq_sec">
        <div className="container">
          <h2 className="carpenter_section_heading">Frequently Asked Questions</h2>
          <div className="carpenter_faq_wrapper">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>How do I book a carpenter on Aya Sir G!?</Accordion.Header>
                <Accordion.Body>
                  To book a carpenter, browse our verified carpenter profiles, check reviews, ratings, and experience levels, and contact the woodworker directly to negotiate rates and schedules.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Do carpenters bring their own wood and materials?</Accordion.Header>
                <Accordion.Body>
                  Typically, customers purchase the main raw wood or laminate sheets based on their design preferences. The carpenter will bring professional cutting and assembly tools, nails, glue, and screws. You can discuss material procurement directly with the carpenter.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Can carpenters repair damaged antique or modern furniture?</Accordion.Header>
                <Accordion.Body>
                  Yes, our registered carpenters are skilled in fixing broken joints, loose drawers, creaky doors, and re-polishing old wood to make it look brand new.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>How long does it take to assemble a standard wardrobe or bed?</Accordion.Header>
                <Accordion.Body>
                  Assembling a standard pre-fabricated bed or wardrobe takes about 1 to 3 hours, depending on the complexity of the design and hardware.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Are the carpentry labor rates negotiable?</Accordion.Header>
                <Accordion.Body>
                  Yes, you connect directly with the carpenters on our platform. This allows you to explain the scope of work and discuss a mutually acceptable fixed price or hourly rate.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Bold CTA Banner */}
      <section className="carpenter_cta_banner">
        <div className="container">
          <h2 className="carpenter_cta_banner_h2">
            Need Expert Woodwork or Furniture Repairs? Find a Carpenter Now.
          </h2>
          <Link
            href="/compnies?role=handyman&category_id=26"
            className="carpenter_btn"
          >
            Browse Carpenters
          </Link>
        </div>
      </section>
    </div>
  );
}
