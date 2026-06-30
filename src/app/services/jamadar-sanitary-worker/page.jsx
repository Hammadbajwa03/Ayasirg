"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import {
  FaBroom,
  FaTrash,
  FaWater,
  FaWrench,
  FaClock,
  FaShieldHalved,
  FaUserShield,
  FaStar,
  FaCircleCheck,
} from "react-icons/fa6";
import { fetchCityIdByName } from "@/app/lib/cityPages";
import ServicesSteps from "@/app/components/services/Services";
import "./jamadar-sanitary-worker.css";

export default function JamadarSanitaryWorkerPage() {
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
        "name": "How do I hire a sanitary worker or jamadar on Aya Sir G!?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Browse through our list of verified sanitary worker profiles, compare experience levels, read customer reviews, and contact them directly via phone or WhatsApp to discuss and negotiate rates."
        }
      },
      {
        "@type": "Question",
        "name": "What services does a sanitary worker / jamadar perform?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sanitary workers handle main sewerage line blockages, septic tank and gutter cleaning, waste disposal, drain pipe flushing, and general residential or commercial sanitation tasks."
        }
      },
      {
        "@type": "Question",
        "name": "Do they bring their own sewerage clearing and sanitation equipment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, most professional sanitary workers and sewerage cleaners bring manual rods, high-pressure water hoses, suction pumps, and cleaning disinfectants. You can clarify special machine needs directly before booking."
        }
      },
      {
        "@type": "Question",
        "name": "How is the pricing determined for sewerage cleaning?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pricing is negotiated directly between you and the helper. Factors include the complexity of the blockage, the depth of the gutter/drain, and the equipment required. Aya Sir G! charges zero commissions."
        }
      },
      {
        "@type": "Question",
        "name": "Are emergency sewerage clearing services available 24/7?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many independent sanitary workers and sanitation agencies on our platform offer emergency services for critical kitchen, toilet, or main street blockages. You can check individual profile hours."
        }
      }
    ]
  };

  return (
    <div className="sanitary_worker_page margin_navbar">
      {/* FAQ Schema Injection for Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <header className="sanitary_worker_hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="sanitary_worker_hero_content text-center text-lg-start">
                <h1 className="sanitary_worker_hero_h1">
                  Professional Jamadar & Sanitary Workers — Aya Sir G!
                </h1>
                <p className="sanitary_worker_hero_subheading">
                  Find verified sewerage cleaners, gutter specialists, and sanitation helpers. Compare profiles, check customer reviews, and hire directly.
                </p>
                <div className="sanitary_worker_hero_ctas justify-content-center justify-content-lg-start">
                  <Link
                    href="/compnies?role=handyman&category_id=13"
                    className="sanitary_worker_btn sanitary_worker_btn_primary"
                  >
                    Find Sanitary Workers
                  </Link>
                  <Link
                    href="/register-yourself"
                    className="sanitary_worker_btn sanitary_worker_btn_secondary"
                  >
                    Register as Helper
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0 text-center d-none d-lg-block">
              {/* Sanitary worker visual icon */}
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
                <FaWater size={120} style={{ color: "#0d9488" }} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content Block (Word Count: ~150 words) */}
      <section className="sanitary_worker_content_block">
        <div className="container">
          <div className="sanitary_worker_content_wrapper">
            <h2 className="sanitary_worker_section_heading">What Does a Sanitary Worker / Jamadar Do?</h2>
            <p className="sanitary_worker_content_text">
              Professional sanitary workers, also known as jamadars, play an essential role in maintaining cleanliness and hygiene in homes, offices, hospitals, schools, residential societies, and commercial buildings. In Lahore, Pakistan, experienced sanitary workers provide services such as floor cleaning, washroom cleaning, waste collection, garbage disposal, disinfection, building maintenance, office cleaning, public area cleaning, and general housekeeping support. Regular cleaning helps create a healthy environment, reduces the spread of germs, and improves the overall appearance of any property. Whether you need a full-time sanitary worker, part-time cleaner, or cleaning staff for residential or commercial premises, Aya Sir G helps you connect with trusted sanitation professionals in Lahore for reliable cleaning and hygiene maintenance services.
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
      <section className="sanitary_worker_services_sec">
        <div className="container">
          <h2 className="sanitary_worker_section_heading">Sanitation & Sewerage Services Available</h2>
          <div className="sanitary_worker_services_grid">
            {/* Card 1 */}
            <div className="sanitary_worker_service_card">
              <div className="sanitary_worker_card_icon_wrap">
                <FaWrench />
              </div>
              <h3 className="sanitary_worker_card_title">Sewerage Blockage Clearing</h3>
              <p className="sanitary_worker_card_desc">
                Clearing heavy blockages in main sewage pipes, street drains, and underground plumbing using specialized manual rods and tools.
              </p>
            </div>
            {/* Card 2 */}
            <div className="sanitary_worker_service_card">
              <div className="sanitary_worker_card_icon_wrap">
                <FaWater />
              </div>
              <h3 className="sanitary_worker_card_title">Septic Tank & Gutter Cleaning</h3>
              <p className="sanitary_worker_card_desc">
                Thorough vacuum suction pumping, sludge removal, and deep sanitation of septic tanks and overflowing gutters.
              </p>
            </div>
            {/* Card 3 */}
            <div className="sanitary_worker_service_card">
              <div className="sanitary_worker_card_icon_wrap">
                <FaBroom />
              </div>
              <h3 className="sanitary_worker_card_title">Residential Sanitation</h3>
              <p className="sanitary_worker_card_desc">
                Complete cleaning, scrubbing, and chemical disinfection of bathrooms, laundry areas, kitchens, and courtyard drains.
              </p>
            </div>
            {/* Card 4 */}
            <div className="sanitary_worker_service_card">
              <div className="sanitary_worker_card_icon_wrap">
                <FaTrash />
              </div>
              <h3 className="sanitary_worker_card_title">Waste Disposal & Trash Removal</h3>
              <p className="sanitary_worker_card_desc">
                Reliable trash collection, debris clearing, and waste disposal services for residential yards, alleys, and commercial premises.
              </p>
            </div>
            {/* Card 5 */}
            <div className="sanitary_worker_service_card">
              <div className="sanitary_worker_card_icon_wrap">
                <FaClock />
              </div>
              <h3 className="sanitary_worker_card_title">Emergency Drain Rodding</h3>
              <p className="sanitary_worker_card_desc">
                Fast-response clearing of kitchen sinks, toilet pipe blockages, and balcony drain overflows to prevent flooding.
              </p>
            </div>
            {/* Card 6 */}
            <div className="sanitary_worker_service_card">
              <div className="sanitary_worker_card_icon_wrap">
                <FaCircleCheck />
              </div>
              <h3 className="sanitary_worker_card_title">Commercial Sanitation</h3>
              <p className="sanitary_worker_card_desc">
                Sanitary maintenance and deep-cleaning support for corporate buildings, warehouses, schools, and hospitals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Block Section */}
      <section className="sanitary_worker_trust_sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 sanitary_worker_trust_col_text">
              <h2 className="section_heading text-start mb-2">
                Why Choose Aya Sir G! <br />
                <span className="red_title">for Sanitary Work?</span>
              </h2>
              <div className="sanitary_worker_trust_points">
                <div className="sanitary_worker_trust_point">
                  <div className="sanitary_worker_trust_icon_box">
                    <FaUserShield />
                  </div>
                  <div>
                    <h3 className="sanitary_worker_trust_point_title">Vetted Helpers & Jamadars</h3>
                    <p className="sanitary_worker_trust_point_desc">
                      Safety and reliability are our priorities. We list verified profile cards with valid CNIC numbers.
                    </p>
                  </div>
                </div>
                <div className="sanitary_worker_trust_point">
                  <div className="sanitary_worker_trust_icon_box">
                    <FaShieldHalved />
                  </div>
                  <div>
                    <h3 className="sanitary_worker_trust_point_title">Experienced in Sewage & Sanitation</h3>
                    <p className="sanitary_worker_trust_point_desc">
                      Helpers on our platform have years of experience dealing with complex plumbing and underground pipeline blockages.
                    </p>
                  </div>
                </div>
                <div className="sanitary_worker_trust_point">
                  <div className="sanitary_worker_trust_icon_box">
                    <FaStar />
                  </div>
                  <div>
                    <h3 className="sanitary_worker_trust_point_title">No Middlemen or Hidden Commissions</h3>
                    <p className="sanitary_worker_trust_point_desc">
                      Negotiate pricing directly with the sanitary worker or jamadar. Pay them directly for a 100% transparent deal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="sanitary_worker_trust_img_wrap">
                <Image
                  src="/assets/jamadar-sanitary-worker.png"
                  alt="Verified sanitary worker resolving blockages on Aya Sir G!"
                  width={600}
                  height={450}
                  className="sanitary_worker_trust_img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shared 4 Steps Component */}
      <ServicesSteps />

      {/* Cities Section */}
      <section className="sanitary_worker_cities_sec">
        <div className="container">
          <h2 className="sanitary_worker_section_heading">Find Sanitary Workers in Your City</h2>
          <div className="sanitary_worker_city_pills">
            <Link
              href={`/compnies?role=handyman&category_id=13${
                cityIds.lahore ? `&city=${cityIds.lahore}` : ""
              }`}
              className="sanitary_worker_city_pill"
            >
              Lahore
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=13${
                cityIds.karachi ? `&city=${cityIds.karachi}` : ""
              }`}
              className="sanitary_worker_city_pill"
            >
              Karachi
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=13${
                cityIds.islamabad ? `&city=${cityIds.islamabad}` : ""
              }`}
              className="sanitary_worker_city_pill"
            >
              Islamabad
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="sanitary_worker_faq_sec">
        <div className="container">
          <h2 className="sanitary_worker_section_heading">Frequently Asked Questions</h2>
          <div className="sanitary_worker_faq_wrapper">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>How do I hire a sanitary worker or jamadar on Aya Sir G!?</Accordion.Header>
                <Accordion.Body>
                  Browse through our list of verified sanitary worker profiles, compare experience levels, read customer reviews, and contact them directly via phone or WhatsApp to discuss and negotiate rates.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>What services does a sanitary worker / jamadar perform?</Accordion.Header>
                <Accordion.Body>
                  Sanitary workers handle main sewerage line blockages, septic tank and gutter cleaning, waste disposal, drain pipe flushing, and general residential or commercial sanitation tasks.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Do they bring their own sewerage clearing and sanitation equipment?</Accordion.Header>
                <Accordion.Body>
                  Yes, most professional sanitary workers and sewerage cleaners bring manual rods, high-pressure water hoses, suction pumps, and cleaning disinfectants. You can clarify special machine needs directly before booking.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>How is the pricing determined for sewerage cleaning?</Accordion.Header>
                <Accordion.Body>
                  Pricing is negotiated directly between you and the helper. Factors include the complexity of the blockage, the depth of the gutter/drain, and the equipment required. Aya Sir G! charges zero commissions.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Are emergency sewerage clearing services available 24/7?</Accordion.Header>
                <Accordion.Body>
                  Many independent sanitary workers and sanitation agencies on our platform offer emergency services for critical kitchen, toilet, or main street blockages. You can check individual profile hours.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Bold CTA Banner */}
      <section className="sanitary_worker_cta_banner">
        <div className="container">
          <h2 className="sanitary_worker_cta_banner_h2">
            Facing Gutter Overflow or Sewerage Blockage? Find Helpers Instantly.
          </h2>
          <Link
            href="/compnies?role=handyman&category_id=13"
            className="sanitary_worker_btn"
          >
            Browse Sanitary Workers
          </Link>
        </div>
      </section>
    </div>
  );
}
