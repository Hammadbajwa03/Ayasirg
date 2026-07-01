"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import {
  FaFire,
  FaHammer,
  FaWrench,
  FaShieldHalved,
  FaScrewdriverWrench,
  FaCircleCheck,
  FaUserShield,
  FaClock,
  FaStar,
} from "react-icons/fa6";
import { fetchCityIdByName } from "@/app/lib/cityPages";
import ServicesSteps from "@/app/components/services/Services";
import "./welding-worker.css";

export default function WeldingWorkerPage() {
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
        "name": "How do I book a welding worker on Aya Sir G!?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Browse verified welder profiles on Aya Sir G!, check their portfolios and reviews, then contact the welder directly to negotiate prices and schedule their visit."
        }
      },
      {
        "@type": "Question",
        "name": "What kinds of welding services can I hire for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can hire welders for iron main gate repair, safety window grills fabrication, steel stair railings, door latch welding, structural steel welding, and general home metal repairs."
        }
      },
      {
        "@type": "Question",
        "name": "Do welders bring their own welding machines?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, professional welders bring their own portable electric arc welding machines, welding electrodes, grinders, and face shields. You only need to provide access to a stable electricity outlet."
        }
      },
      {
        "@type": "Question",
        "name": "How much does gate repair or grill fabrication cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Minor repairs (like latch welding) are usually charged at a flat rate, while new fabrications (like gates or window grills) are quoted per square foot or by total metal weight in kilograms. Negotiate rates directly with the welder."
        }
      },
      {
        "@type": "Question",
        "name": "Are the welders CNIC-verified?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all welder profiles on Aya Sir G! undergo CNIC verification and display customer feedback to ensure safe and reliable hiring."
        }
      }
    ]
  };

  return (
    <div className="welding_worker_page margin_navbar">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <header className="welding_worker_hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="welding_worker_hero_content text-center text-lg-start">
                <h1 className="welding_worker_hero_h1">
                  Professional Welding Workers — Aya Sir G!
                </h1>
                <p className="welding_worker_hero_subheading">
                  Find verified local welders for iron gate repair, window safety grills, steel railings, and custom metal fabrication. Compare profiles and hire directly.
                </p>
                <div className="welding_worker_hero_ctas justify-content-center justify-content-lg-start">
                  <Link
                    href="/compnies?role=handyman&category_id=37"
                    className="welding_worker_btn welding_worker_btn_primary"
                  >
                    Find Welders Near Me
                  </Link>
                  <Link
                    href="/register-yourself"
                    className="welding_worker_btn welding_worker_btn_secondary"
                  >
                    Register as Welder
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0 text-center d-none d-lg-block">
              <div
                style={{
                  background: "rgba(249, 115, 22, 0.04)",
                  borderRadius: "50%",
                  width: "280px",
                  height: "280px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  border: "2px dashed rgba(249, 115, 22, 0.15)",
                }}
              >
                <FaFire size={120} style={{ color: "#f97316" }} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content Block */}
      <section className="welding_worker_content_block">
        <div className="container">
          <div className="welding_worker_content_wrapper">
            <h2 className="welding_worker_section_heading">Reliable Welders and Fabrication Services with Aya Sir G!</h2>
            <p className="welding_worker_content_text">
              Whether you are building a new home, adding a shade or working on any metal structure, you often need a professional welder to complete the job.
            </p>
            <p className="welding_worker_content_text">
              With Aya Sir G!, you can easily find nearby welding and fabrication experts and request competitive quotations directly from verified professionals.
            </p>
            <p className="welding_worker_content_text">
              In many cases, people face issues where a welder takes an advance payment but does not show up or delays the work. These situations can lead to frustration and financial loss.
            </p>
            <p className="welding_worker_content_text">
              Aya Sir G! helps solve this problem by allowing users to check each welder's profile, credibility, ratings and past customer feedback before hiring. This ensures you are dealing with experienced and trustworthy professionals.
            </p>
            <p className="welding_worker_content_text">
              The platform is not just a service directory it brings real, verified profiles of skilled workers, helping customers connect with experts in their field with confidence and transparency.
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
      <section className="welding_worker_services_sec">
        <div className="container">
          <h2 className="welding_worker_section_heading">Welding &amp; Fabrication Services Available</h2>
          <div className="welding_worker_services_grid">
            {/* Card 1 */}
            <div className="welding_worker_service_card">
              <div className="welding_worker_card_icon_wrap">
                <FaWrench />
              </div>
              <h3 className="welding_worker_card_title">Gate Repair &amp; Adjustment</h3>
              <p className="welding_worker_card_desc">
                Fixing sagging or stuck main gates, replacing worn-out hinges (chul), welding locks, and reinforcing lock boxes.
              </p>
            </div>
            {/* Card 2 */}
            <div className="welding_worker_service_card">
              <div className="welding_worker_card_icon_wrap">
                <FaShieldHalved />
              </div>
              <h3 className="welding_worker_card_title">Safety Grills Fabrication</h3>
              <p className="welding_worker_card_desc">
                Custom fabrication and welding of heavy-duty iron safety grills for bedroom windows, exhaust areas, and boundary walls.
              </p>
            </div>
            {/* Card 3 */}
            <div className="welding_worker_service_card">
              <div className="welding_worker_card_icon_wrap">
                <FaHammer />
              </div>
              <h3 className="welding_worker_card_title">Stairs &amp; Balcony Railing</h3>
              <p className="welding_worker_card_desc">
                Designing, welding, and installing decorative stainless steel or wrought iron railings for staircase and balcony safety.
              </p>
            </div>
            {/* Card 4 */}
            <div className="welding_worker_service_card">
              <div className="welding_worker_card_icon_wrap">
                <FaScrewdriverWrench />
              </div>
              <h3 className="welding_worker_card_title">Door Frames &amp; Latches</h3>
              <p className="welding_worker_card_desc">
                Welding and repair of iron door frames (chokhat), locks, security bolt latches (kundi), and custom padlocks hoops.
              </p>
            </div>
            {/* Card 5 */}
            <div className="welding_worker_service_card">
              <div className="welding_worker_card_icon_wrap">
                <FaFire />
              </div>
              <h3 className="welding_worker_card_title">Portable Arc Welding</h3>
              <p className="welding_worker_card_desc">
                Onsite welding repair for water tank stands, AC brackets, metal swings, roof sheds, and light steel furniture.
              </p>
            </div>
            {/* Card 6 */}
            <div className="welding_worker_service_card">
              <div className="welding_worker_card_icon_wrap">
                <FaCircleCheck />
              </div>
              <h3 className="welding_worker_card_title">Custom Metal Structures</h3>
              <p className="welding_worker_card_desc">
                Fabricating steel stairs, storage racks, car sheds, fiber sheet awnings, and customized structural frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Block */}
      <section className="welding_worker_trust_sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 welding_worker_trust_col_text">
              <h2 className="section_heading text-start mb-2">
                Why Choose Aya Sir G! <br />
                <span className="red_title">for Welding Services?</span>
              </h2>
              <div className="welding_worker_trust_points">
                <div className="welding_worker_trust_point">
                  <div className="welding_worker_trust_icon_box">
                    <FaUserShield />
                  </div>
                  <div>
                    <h3 className="welding_worker_trust_point_title">Verified Welder Profiles</h3>
                    <p className="welding_worker_trust_point_desc">
                      Hire fabricators whose CNIC cards are verified by Aya Sir G!, complete with genuine review histories and previous project photos.
                    </p>
                  </div>
                </div>
                <div className="welding_worker_trust_point">
                  <div className="welding_worker_trust_icon_box">
                    <FaClock />
                  </div>
                  <div>
                    <h3 className="welding_worker_trust_point_title">Onsite Doorstep Service</h3>
                    <p className="welding_worker_trust_point_desc">
                      Welders bring portable welding machines to your location to carry out repairs directly, saving you transportation hassle.
                    </p>
                  </div>
                </div>
                <div className="welding_worker_trust_point">
                  <div className="welding_worker_trust_icon_box">
                    <FaStar />
                  </div>
                  <div>
                    <h3 className="welding_worker_trust_point_title">Direct Pricing — Clear Quotes</h3>
                    <p className="welding_worker_trust_point_desc">
                      Deal directly with the welder. Get clear quotes based on weight, size, or a flat repair charge with zero hidden agency costs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="welding_worker_trust_img_wrap">
                <Image
                  src="/assets/welding-worker.png"
                  alt="Verified welding worker on duty on Aya Sir G!"
                  width={600}
                  height={450}
                  className="welding_worker_trust_img"
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
      <section className="welding_worker_cities_sec">
        <div className="container">
          <h2 className="welding_worker_section_heading">Find Welders in Your City</h2>
          <div className="welding_worker_city_pills">
            <Link
              href={`/compnies?role=handyman&category_id=37${
                cityIds.lahore ? `&city=${cityIds.lahore}` : ""
              }`}
              className="welding_worker_city_pill"
            >
              Lahore
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=37${
                cityIds.karachi ? `&city=${cityIds.karachi}` : ""
              }`}
              className="welding_worker_city_pill"
            >
              Karachi
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=37${
                cityIds.islamabad ? `&city=${cityIds.islamabad}` : ""
              }`}
              className="welding_worker_city_pill"
            >
              Islamabad
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="welding_worker_faq_sec">
        <div className="container">
          <h2 className="welding_worker_section_heading">Frequently Asked Questions</h2>
          <div className="welding_worker_faq_wrapper">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>How do I book a welding worker on Aya Sir G!?</Accordion.Header>
                <Accordion.Body>
                  Browse verified welder profiles on Aya Sir G!, check their portfolios and reviews, then contact the welder directly to negotiate prices and schedule their visit.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>What kinds of welding services can I hire for?</Accordion.Header>
                <Accordion.Body>
                  You can hire welders for iron main gate repair, safety window grills fabrication, steel stair railings, door latch welding, structural steel welding, and general home metal repairs.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Do welders bring their own welding machines?</Accordion.Header>
                <Accordion.Body>
                  Yes, professional welders bring their own portable electric arc welding machines, welding electrodes, grinders, and face shields. You only need to provide access to a stable electricity outlet.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>How much does gate repair or grill fabrication cost?</Accordion.Header>
                <Accordion.Body>
                  Minor repairs (like latch welding) are usually charged at a flat rate, while new fabrications (like gates or window grills) are quoted per square foot or by total metal weight in kilograms. Negotiate rates directly with the welder.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Are the welders CNIC-verified?</Accordion.Header>
                <Accordion.Body>
                  Yes, all welder profiles on Aya Sir G! undergo CNIC verification and display customer feedback to ensure safe and reliable hiring.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="welding_worker_cta_banner">
        <div className="container">
          <h2 className="welding_worker_cta_banner_h2">
            Need Gate Repairs or Security Grills? Find Expert Welders Now.
          </h2>
          <Link
            href="/compnies?role=handyman&category_id=37"
            className="welding_worker_btn"
          >
            Browse Welders
          </Link>
        </div>
      </section>
    </div>
  );
}
