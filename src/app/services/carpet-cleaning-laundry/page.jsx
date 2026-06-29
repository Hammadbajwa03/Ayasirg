"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import {
  FaBroom,
  FaSoap,
  FaWater,
  FaShirt,
  FaClock,
  FaTag,
  FaUserShield,
  FaStar,
  FaLocationDot,
} from "react-icons/fa6";
import { fetchCityIdByName } from "@/app/lib/cityPages";
import ServicesSteps from "@/app/components/services/Services";
import "./carpet-cleaning-laundry.css";

export default function CarpetCleaningLaundryPage() {
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
        "name": "How do I book a carpet cleaning or laundry service on Aya Sir G!?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To book, browse through our verified carpet cleaning and laundry service providers, compare their profiles, check ratings and customer reviews, and contact them directly to schedule a service."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take for a carpet to dry after deep cleaning?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Depending on the room ventilation and humidity levels, a deep-cleaned carpet using our specialists' extraction machines typically takes 3 to 6 hours to dry completely."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to provide water, detergents, or electricity?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The carpet cleaners will bring their own specialized shampoos, stain removers, and vacuum extraction machines. They will need access to clean water and a standard power outlet to run their cleaning equipment."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between dry cleaning and regular laundry?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Regular laundry uses water and standard detergents, perfect for everyday cottons and linens. Dry cleaning uses specialized chemical solvents to clean delicate fabrics like silk, wool, and structured suits without water, avoiding fabric shrinkage or color fading."
        }
      },
      {
        "@type": "Question",
        "name": "Can the cleaners remove old, stubborn stains from my sofa or carpet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our experts use professional-grade fabric stain removers and hot-water extractors to lift stubborn spots like ink, coffee, oil, and pet stains. While most stains are successfully removed, extremely old or set-in stains might fade significantly but not disappear completely."
        }
      }
    ]
  };

  return (
    <div className="laundry_page margin_navbar">
      {/* FAQ Schema Injection for Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <header className="laundry_hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="laundry_hero_content text-center text-lg-start">
                <h1 className="laundry_hero_h1">
                  Carpet Cleaning & Laundry Services in Pakistan — Hire on Aya Sir G!
                </h1>
                <p className="laundry_hero_subheading">
                  Find verified carpet cleaners, compare dry cleaning and laundry service profiles, read real customer reviews, and hire trusted experts.
                </p>
                <div className="laundry_hero_ctas justify-content-center justify-content-lg-start">
                  <Link
                    href="/compnies?role=handyman&category_id=55"
                    className="laundry_btn laundry_btn_primary"
                  >
                    Find Cleaning Services
                  </Link>
                  <Link
                    href="/register-yourself"
                    className="laundry_btn laundry_btn_secondary"
                  >
                    Register as Provider
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0 text-center d-none d-lg-block">
              {/* Laundry visual icon */}
              <div
                style={{
                  background: "rgba(43, 108, 176, 0.04)",
                  borderRadius: "50%",
                  width: "280px",
                  height: "280px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  border: "2px dashed rgba(43, 108, 176, 0.15)",
                }}
              >
                <FaSoap size={120} className="text-secondary" style={{ color: "#2b6cb0" }} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content Block (Word Count: ~150 words) */}
      <section className="laundry_content_block">
        <div className="container">
          <div className="laundry_content_wrapper">
            <h2 className="laundry_section_heading">What Does Carpet Cleaning & Laundry Service Do?</h2>
            <p className="laundry_content_text">
              A professional carpet cleaning and laundry service is essential for maintaining a clean, hygienic, and fresh indoor environment in Pakistan. Over time, carpets, rugs, and upholstery trap dust, sand, pet dander, allergens, and stubborn spills that simple vacuuming cannot remove. On Aya Sir G!, we connect you with highly skilled and verified cleaning experts who specialize in deep steam cleaning, shampooing, stain removal, and odor elimination for carpets and sofa sets. Additionally, our laundry service providers handle your daily washing, dry cleaning, ironing, and steam pressing with utmost care for all fabrics. Whether you need express laundry delivery, stain treatment for delicate wedding dresses, or carpet washing at your doorstep, you can easily compare vendor profiles, read customer reviews, and check ratings. Hire the best carpet cleaner and laundry specialist near me on Aya Sir G! to keep your fabrics spotless, smelling fresh, and completely sanitized.
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
      <section className="laundry_services_sec">
        <div className="container">
          <h2 className="laundry_section_heading">Cleaning Services Available on Aya Sir G!</h2>
          <div className="laundry_services_grid">
            {/* Card 1 */}
            <div className="laundry_service_card">
              <div className="laundry_card_icon_wrap">
                <FaBroom />
              </div>
              <h3 className="laundry_card_title">Deep Carpet Cleaning</h3>
              <p className="laundry_card_desc">
                Shampooing, chemical scrubbing, and hot-water vacuum extraction to restore dirty carpets, rugs, and runners.
              </p>
            </div>
            {/* Card 2 */}
            <div className="laundry_service_card">
              <div className="laundry_card_icon_wrap">
                <FaShirt />
              </div>
              <h3 className="laundry_card_title">Professional Laundry</h3>
              <p className="laundry_card_desc">
                High-quality washing, tumble drying, and neat folding services for all your regular apparel, linens, and bedsheets.
              </p>
            </div>
            {/* Card 3 */}
            <div className="laundry_service_card">
              <div className="laundry_card_icon_wrap">
                <FaSoap />
              </div>
              <h3 className="laundry_card_title">Dry Cleaning & Pressing</h3>
              <p className="laundry_card_desc">
                Careful dry cleaning for suits, sherwanis, wedding dresses, and professional steam pressing for crisp finishes.
              </p>
            </div>
            {/* Card 4 */}
            <div className="laundry_service_card">
              <div className="laundry_card_icon_wrap">
                <FaWater />
              </div>
              <h3 className="laundry_card_title">Sofa & Mattress Washing</h3>
              <p className="laundry_card_desc">
                Deep steam vacuuming and fabric shampooing to extract dirt, bacteria, and allergens from sofas and mattresses.
              </p>
            </div>
            {/* Card 5 */}
            <div className="laundry_service_card">
              <div className="laundry_card_icon_wrap">
                <FaClock />
              </div>
              <h3 className="laundry_card_title">Express Pick & Drop</h3>
              <p className="laundry_card_desc">
                Convenient doorstep pickup and drop-off options for your weekly laundry bags with guaranteed turnaround.
              </p>
            </div>
            {/* Card 6 */}
            <div className="laundry_service_card">
              <div className="laundry_card_icon_wrap">
                <FaTag />
              </div>
              <h3 className="laundry_card_title">Stain & Odor Removal</h3>
              <p className="laundry_card_desc">
                Targeted chemical treatment for coffee spills, food stains, pet odors, mold, and dust mite sanitization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Block Section */}
      <section className="laundry_trust_sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 laundry_trust_col_text">
              <h2 className="section_heading text-start mb-2">
                Why Choose Aya Sir G! <br />
                <span className="red_title">for Carpet Cleaning & Laundry?</span>
              </h2>
              <div className="laundry_trust_points">
                <div className="laundry_trust_point">
                  <div className="laundry_trust_icon_box">
                    <FaUserShield />
                  </div>
                  <div>
                    <h3 className="laundry_trust_point_title">Verified & Safe Shampoos</h3>
                    <p className="laundry_trust_point_desc">
                      We connect you with professionals who use non-toxic, eco-friendly detergents safe for kids and pets.
                    </p>
                  </div>
                </div>
                <div className="laundry_trust_point">
                  <div className="laundry_trust_icon_box">
                    <FaWater />
                  </div>
                  <div>
                    <h3 className="laundry_trust_point_title">Advanced Steam Extraction</h3>
                    <p className="laundry_trust_point_desc">
                      Technicians utilize high-performance extraction machinery that pulls out moisture for rapid drying.
                    </p>
                  </div>
                </div>
                <div className="laundry_trust_point">
                  <div className="laundry_trust_icon_box">
                    <FaStar />
                  </div>
                  <div>
                    <h3 className="laundry_trust_point_title">Highly Rated Local Cleaners</h3>
                    <p className="laundry_trust_point_desc">
                      Browse verified profiles with transparent customer reviews and rates in Lahore, Karachi, and Islamabad.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="laundry_trust_img_wrap">
                <Image
                  src="/assets/carpet-cleaning-laundry.png"
                  alt="Verified cleaning specialist washing carpet on Aya Sir G!"
                  width={600}
                  height={450}
                  className="laundry_trust_img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shared 4 Steps Component */}
      <ServicesSteps />

      {/* Cities Section */}
      <section className="laundry_cities_sec">
        <div className="container">
          <h2 className="laundry_section_heading">Find Cleaners & Laundry in Your City</h2>
          <div className="laundry_city_pills">
            <Link
              href={`/compnies?role=handyman&category_id=55${
                cityIds.lahore ? `&city=${cityIds.lahore}` : ""
              }`}
              className="laundry_city_pill"
            >
              Lahore
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=55${
                cityIds.karachi ? `&city=${cityIds.karachi}` : ""
              }`}
              className="laundry_city_pill"
            >
              Karachi
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=55${
                cityIds.islamabad ? `&city=${cityIds.islamabad}` : ""
              }`}
              className="laundry_city_pill"
            >
              Islamabad
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="laundry_faq_sec">
        <div className="container">
          <h2 className="laundry_section_heading">Frequently Asked Questions</h2>
          <div className="laundry_faq_wrapper">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>How do I book a carpet cleaning or laundry service on Aya Sir G!?</Accordion.Header>
                <Accordion.Body>
                  To book, browse through our verified carpet cleaning and laundry service providers, compare their profiles, check ratings and customer reviews, and contact them directly to schedule a service.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>How long does it take for a carpet to dry after deep cleaning?</Accordion.Header>
                <Accordion.Body>
                  Depending on the room ventilation and humidity levels, a deep-cleaned carpet using our specialists' extraction machines typically takes 3 to 6 hours to dry completely.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Do I need to provide water, detergents, or electricity?</Accordion.Header>
                <Accordion.Body>
                  The carpet cleaners will bring their own specialized shampoos, stain removers, and vacuum extraction machines. They will need access to clean water and a standard power outlet to run their cleaning equipment.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>What is the difference between dry cleaning and regular laundry?</Accordion.Header>
                <Accordion.Body>
                  Regular laundry uses water and standard detergents, perfect for everyday cottons and linens. Dry cleaning uses specialized chemical solvents to clean delicate fabrics like silk, wool, and structured suits without water, avoiding fabric shrinkage or color fading.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Can the cleaners remove old, stubborn stains from my sofa or carpet?</Accordion.Header>
                <Accordion.Body>
                  Yes, our experts use professional-grade fabric stain removers and hot-water extractors to lift stubborn spots like ink, coffee, oil, and pet stains. While most stains are successfully removed, extremely old or set-in stains might fade significantly but not disappear completely.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Bold CTA Banner */}
      <section className="laundry_cta_banner">
        <div className="container">
          <h2 className="laundry_cta_banner_h2">
            Need Doorstep Carpet Cleaning or Premium Laundry? Find a Specialist Now.
          </h2>
          <Link
            href="/compnies?role=handyman&category_id=55"
            className="laundry_btn"
          >
            Browse Cleaners
          </Link>
        </div>
      </section>
    </div>
  );
}
