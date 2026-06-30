"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import {
  FaCouch,
  FaSoap,
  FaDroplet,
  FaCircleCheck,
  FaUserShield,
  FaClock,
  FaStar,
  FaLayerGroup,
} from "react-icons/fa6";
import { fetchCityIdByName } from "@/app/lib/cityPages";
import ServicesSteps from "@/app/components/services/Services";
import "./sofa-carpet-cleaner.css";

export default function SofaCarpetCleanerPage() {
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
        "name": "How do I book a sofa or carpet cleaning service on Aya Sir G!?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simply browse verified cleaner profiles on Aya Sir G!, compare their ratings, read customer reviews, and view their previous work photos. Contact the service provider directly to get a quote and book a cleaning session at your convenience."
        }
      },
      {
        "@type": "Question",
        "name": "What cleaning methods do the professionals use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cleaners on Aya Sir G! offer a range of methods including deep vacuuming, wet shampoo washing, steam extraction, foam cleaning, and dry cleaning, depending on the fabric type (velvet, leather, standard upholstery)."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take for a sofa or carpet to dry after cleaning?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Typically, sofas and carpets take about 3 to 6 hours to dry completely, depending on ventilation, room temperature, and the cleaning method used. Using ceiling fans or AC helps speed up the drying process."
        }
      },
      {
        "@type": "Question",
        "name": "Can you remove stubborn pet stains and bad odours?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, professional cleaners use specialized stain removers and deodorizing solutions to lift stubborn stains (like coffee, tea, ink, or urine) and eliminate deep-seated odours, leaving your upholstery smelling fresh."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to provide any cleaning machines or chemicals?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, the service providers will bring their own professional vacuum cleaners, steam extraction machines, and cleaning detergents. You only need to provide access to water and electricity."
        }
      }
    ]
  };

  return (
    <div className="sofa_carpet_page margin_navbar">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <header className="sofa_carpet_hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="sofa_carpet_hero_content text-center text-lg-start">
                <h1 className="sofa_carpet_hero_h1">
                  Professional Sofa &amp; Carpet Cleaning — Aya Sir G!
                </h1>
                <p className="sofa_carpet_hero_subheading">
                  Find verified local cleaners for deep steam cleaning, stain removal, and odor elimination. Compare profiles, check reviews, and hire directly.
                </p>
                <div className="sofa_carpet_hero_ctas justify-content-center justify-content-lg-start">
                  <Link
                    href="/compnies?role=handyman&category_id=49"
                    className="sofa_carpet_btn sofa_carpet_btn_primary"
                  >
                    Find Cleaners Near Me
                  </Link>
                  <Link
                    href="/register-yourself"
                    className="sofa_carpet_btn sofa_carpet_btn_secondary"
                  >
                    Register as Cleaner
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0 text-center d-none d-lg-block">
              <div
                style={{
                  background: "rgba(7, 89, 133, 0.04)",
                  borderRadius: "50%",
                  width: "280px",
                  height: "280px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  border: "2px dashed rgba(7, 89, 133, 0.15)",
                }}
              >
                <FaCouch size={120} style={{ color: "#075985" }} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content Block */}
      <section className="sofa_carpet_content_block">
        <div className="container">
          <div className="sofa_carpet_content_wrapper">
            <h2 className="sofa_carpet_section_heading">Professional Sofa &amp; Upholstery Deep Cleaning</h2>
            <p className="sofa_carpet_content_text">
              Professional sofa and carpet cleaning services help maintain a clean, fresh, and hygienic indoor environment for homes, offices, hotels, and commercial spaces. In Lahore, Pakistan, experienced cleaning professionals provide deep sofa cleaning, carpet shampooing, steam cleaning, stain removal, fabric cleaning, upholstery cleaning, rug cleaning, odor removal, and sanitization using modern equipment and safe cleaning solutions. Regular cleaning improves indoor hygiene, removes dust and allergens, and extends the life of your furniture and carpets. Aya Sir G connects you with trusted sofa and carpet cleaners in Lahore, making it easy to book reliable professionals for residential and commercial upholstery and carpet cleaning services.
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
      <section className="sofa_carpet_services_sec">
        <div className="container">
          <h2 className="sofa_carpet_section_heading">Cleaning Services Available</h2>
          <div className="sofa_carpet_services_grid">
            {/* Card 1 */}
            <div className="sofa_carpet_service_card">
              <div className="sofa_carpet_card_icon_wrap">
                <FaCouch />
              </div>
              <h3 className="sofa_carpet_card_title">Sofa Deep Cleaning</h3>
              <p className="sofa_carpet_card_desc">
                Vacuuming, shampoo scrubbing, and extraction washing for fabric, velvet, and leather sofas to remove dust, dirt, and oil buildup.
              </p>
            </div>
            {/* Card 2 */}
            <div className="sofa_carpet_service_card">
              <div className="sofa_carpet_card_icon_wrap">
                <FaSoap />
              </div>
              <h3 className="sofa_carpet_card_title">Carpet &amp; Rug Washing</h3>
              <p className="sofa_carpet_card_desc">
                Steam cleaning and deep extraction wash for wall-to-wall carpets and area rugs to restore color and kill bacteria.
              </p>
            </div>
            {/* Card 3 */}
            <div className="sofa_carpet_service_card">
              <div className="sofa_carpet_card_icon_wrap">
                <FaDroplet />
              </div>
              <h3 className="sofa_carpet_card_title">Mattress Sanitization</h3>
              <p className="sofa_carpet_card_desc">
                Hygienic deep cleaning of single/double mattresses to eliminate dust mites, bedbugs, sweat stains, and allergens.
              </p>
            </div>
            {/* Card 4 */}
            <div className="sofa_carpet_service_card">
              <div className="sofa_carpet_card_icon_wrap">
                <FaCircleCheck />
              </div>
              <h3 className="sofa_carpet_card_title">Stain &amp; Odour Removal</h3>
              <p className="sofa_carpet_card_desc">
                Targeted chemical treatment for stubborn stains like coffee, ink, oil, or pet urine, combined with deep deodorizing.
              </p>
            </div>
            {/* Card 5 */}
            <div className="sofa_carpet_service_card">
              <div className="sofa_carpet_card_icon_wrap">
                <FaLayerGroup />
              </div>
              <h3 className="sofa_carpet_card_title">Dining &amp; Office Chair Cleaning</h3>
              <p className="sofa_carpet_card_desc">
                Restoring fabric and cushion foam on office chairs, conference room chairs, dining chairs, and decorative cushions.
              </p>
            </div>
            {/* Card 6 */}
            <div className="sofa_carpet_service_card">
              <div className="sofa_carpet_card_icon_wrap">
                <FaSoap />
              </div>
              <h3 className="sofa_carpet_card_title">Commercial Cleaning</h3>
              <p className="sofa_carpet_card_desc">
                Large-scale carpet and upholstery deep cleaning for corporate offices, banks, mosques, and hotels with quick drying solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Block */}
      <section className="sofa_carpet_trust_sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 sofa_carpet_trust_col_text">
              <h2 className="section_heading text-start mb-2">
                Why Choose Aya Sir G! <br />
                <span className="red_title">for Sofa &amp; Carpet Cleaners?</span>
              </h2>
              <div className="sofa_carpet_trust_points">
                <div className="sofa_carpet_trust_point">
                  <div className="sofa_carpet_trust_icon_box">
                    <FaUserShield />
                  </div>
                  <div>
                    <h3 className="sofa_carpet_trust_point_title">Verified &amp; Rated Professionals</h3>
                    <p className="sofa_carpet_trust_point_desc">
                      Every cleaner on Aya Sir G! has a verified CNIC status and customer ratings, ensuring complete security and peace of mind when they enter your home.
                    </p>
                  </div>
                </div>
                <div className="sofa_carpet_trust_point">
                  <div className="sofa_carpet_trust_icon_box">
                    <FaClock />
                  </div>
                  <div>
                    <h3 className="sofa_carpet_trust_point_title">Advanced Equipment &amp; Safe Chemicals</h3>
                    <p className="sofa_carpet_trust_point_desc">
                      Our service providers use high-suction vacuum extractors and fabric-friendly chemicals that lift dirt without damaging textures.
                    </p>
                  </div>
                </div>
                <div className="sofa_carpet_trust_point">
                  <div className="sofa_carpet_trust_icon_box">
                    <FaStar />
                  </div>
                  <div>
                    <h3 className="sofa_carpet_trust_point_title">Direct Deals — Zero Commissions</h3>
                    <p className="sofa_carpet_trust_point_desc">
                      Connect directly with local cleaners, negotiate the price based on number of seats or area, and pay only what you agree. No hidden charges.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="sofa_carpet_trust_img_wrap">
                <Image
                  src="/assets/sofa-carpet.png"
                  alt="Verified sofa and carpet cleaner on duty on Aya Sir G!"
                  width={600}
                  height={450}
                  className="sofa_carpet_trust_img"
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
      <section className="sofa_carpet_cities_sec">
        <div className="container">
          <h2 className="sofa_carpet_section_heading">Find Cleaners in Your City</h2>
          <div className="sofa_carpet_city_pills">
            <Link
              href={`/compnies?role=handyman&category_id=49${
                cityIds.lahore ? `&city=${cityIds.lahore}` : ""
              }`}
              className="sofa_carpet_city_pill"
            >
              Lahore
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=49${
                cityIds.karachi ? `&city=${cityIds.karachi}` : ""
              }`}
              className="sofa_carpet_city_pill"
            >
              Karachi
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=49${
                cityIds.islamabad ? `&city=${cityIds.islamabad}` : ""
              }`}
              className="sofa_carpet_city_pill"
            >
              Islamabad
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="sofa_carpet_faq_sec">
        <div className="container">
          <h2 className="sofa_carpet_section_heading">Frequently Asked Questions</h2>
          <div className="sofa_carpet_faq_wrapper">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>How do I book a sofa or carpet cleaning service on Aya Sir G!?</Accordion.Header>
                <Accordion.Body>
                  Simply browse verified cleaner profiles on Aya Sir G!, compare their ratings, read customer reviews, and view their previous work photos. Contact the service provider directly to get a quote and book a cleaning session at your convenience.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>What cleaning methods do the professionals use?</Accordion.Header>
                <Accordion.Body>
                  Cleaners on Aya Sir G! offer a range of methods including deep vacuuming, wet shampoo washing, steam extraction, foam cleaning, and dry cleaning, depending on the fabric type (velvet, leather, standard upholstery).
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>How long does it take for a sofa or carpet to dry after cleaning?</Accordion.Header>
                <Accordion.Body>
                  Typically, sofas and carpets take about 3 to 6 hours to dry completely, depending on ventilation, room temperature, and the cleaning method used. Using ceiling fans or AC helps speed up the drying process.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Can you remove stubborn pet stains and bad odours?</Accordion.Header>
                <Accordion.Body>
                  Yes, professional cleaners use specialized stain removers and deodorizing solutions to lift stubborn stains (like coffee, tea, ink, or urine) and eliminate deep-seated odours, leaving your upholstery smelling fresh.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Do I need to provide any cleaning machines or chemicals?</Accordion.Header>
                <Accordion.Body>
                  No, the service providers will bring their own professional vacuum cleaners, steam extraction machines, and cleaning detergents. You only need to provide access to water and electricity.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="sofa_carpet_cta_banner">
        <div className="container">
          <h2 className="sofa_carpet_cta_banner_h2">
            Ready to Restore Your Sofa &amp; Carpets? Find Expert Cleaners Now.
          </h2>
          <Link
            href="/compnies?role=handyman&category_id=49"
            className="sofa_carpet_btn"
          >
            Browse Sofa &amp; Carpet Cleaners
          </Link>
        </div>
      </section>
    </div>
  );
}
