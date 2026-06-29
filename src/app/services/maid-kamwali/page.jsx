"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import {
  FaBroom,
  FaSoap,
  FaClock,
  FaUserShield,
  FaStar,
  FaCircleCheck,
  FaUtensils,
  FaShirt,
  FaHouseUser,
} from "react-icons/fa6";
import { fetchCityIdByName } from "@/app/lib/cityPages";
import ServicesSteps from "@/app/components/services/Services";
import "./maid-kamwali.css";

export default function MaidKamwaliPage() {
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
        "name": "How do I book a maid or kamwali on Aya Sir G!?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To book, browse through our local domestic helper and maid profiles, compare experience and client reviews, and contact them directly to negotiate salaries and work timings."
        }
      },
      {
        "@type": "Question",
        "name": "What are the common work options available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can hire part-time maids for specific tasks (like dishwashing or floor mopping), daily helpers for a few hours, or full-time 24/7 live-in maids."
        }
      },
      {
        "@type": "Question",
        "name": "Are the maids CNIC verified?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we prioritize security by presenting profiles of maids and domestic workers with verified CNIC records and ratings from previous clients."
        }
      },
      {
        "@type": "Question",
        "name": "How is the monthly salary determined?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Salaries are negotiated directly between you and the maid based on the size of the house, the number of chores (cooking, cleaning, ironing), and working hours. Aya Sir G! does not charge any commissions."
        }
      },
      {
        "@type": "Question",
        "name": "Can I find a maid who can cook as well?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, many domestic helpers on our platform offer multi-service support, including basic home cooking (Bawarchi help), childcare assistance, and home cleaning."
        }
      }
    ]
  };

  return (
    <div className="maid_kamwali_page margin_navbar">
      {/* FAQ Schema Injection for Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <header className="maid_kamwali_hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="maid_kamwali_hero_content text-center text-lg-start">
                <h1 className="maid_kamwali_hero_h1">
                  Verified Maids & Kamwali Services — Aya Sir G!
                </h1>
                <p className="maid_kamwali_hero_subheading">
                  Find trusted domestic maids, daily house cleaning helpers, and full-time live-in kamwalis. Compare profiles, check ratings, and hire directly.
                </p>
                <div className="maid_kamwali_hero_ctas justify-content-center justify-content-lg-start">
                  <Link
                    href="/compnies?role=handyman&category_id=47"
                    className="maid_kamwali_btn maid_kamwali_btn_primary"
                  >
                    Find Maids / Kamwalis
                  </Link>
                  <Link
                    href="/register-yourself"
                    className="maid_kamwali_btn maid_kamwali_btn_secondary"
                  >
                    Register as Helper
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0 text-center d-none d-lg-block">
              {/* Maid visual icon */}
              <div
                style={{
                  background: "rgba(219, 39, 119, 0.04)",
                  borderRadius: "50%",
                  width: "280px",
                  height: "280px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  border: "2px dashed rgba(219, 39, 119, 0.15)",
                }}
              >
                <FaHouseUser size={120} style={{ color: "#db2777" }} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content Block (Word Count: ~150 words) */}
      <section className="maid_kamwali_content_block">
        <div className="container">
          <div className="maid_kamwali_content_wrapper">
            <h2 className="maid_kamwali_section_heading">What Does a Domestic Maid / Kamwali Do?</h2>
            <p className="maid_kamwali_content_text">
              Hiring a reliable, vetted domestic maid or kamwali is essential for managing daily household chores and maintaining a clean, organized home in Pakistan. Balancing work, family, and home cleaning, dishwashing, and laundry can be overwhelming. On Aya Sir G!, we connect you with experienced and trusted local maids. Registered helpers specialize in floor sweeping, dusting furniture, washing utensils, cleaning bathrooms, ironing clothes, and assisting with home cooking. Whether you need a part-time daily helper for specific hours, a full-time maid, or a live-in housekeeper, you can compare profiles, review background verifications, and negotiate monthly salaries directly. Hire the best domestic helper near me on Aya Sir G! today to keep your home clean, comfortable, and stress-free.
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
      <section className="maid_kamwali_services_sec">
        <div className="container">
          <h2 className="maid_kamwali_section_heading">Domestic Services Available on Aya Sir G!</h2>
          <div className="maid_kamwali_services_grid">
            {/* Card 1 */}
            <div className="maid_kamwali_service_card">
              <div className="maid_kamwali_card_icon_wrap">
                <FaBroom />
              </div>
              <h3 className="maid_kamwali_card_title">House Sweeping & Dusting</h3>
              <p className="maid_kamwali_card_desc">
                Daily sweeping, mopping floors, dusting shelves, and keeping the living room, bedrooms, and courtyard clean.
              </p>
            </div>
            {/* Card 2 */}
            <div className="maid_kamwali_service_card">
              <div className="maid_kamwali_card_icon_wrap">
                <FaSoap />
              </div>
              <h3 className="maid_kamwali_card_title">Utensil & Dish Washing</h3>
              <p className="maid_kamwali_card_desc">
                Washing kitchen dishes, cleaning counter slabs, organizing cabinets, and maintaining overall kitchen hygiene.
              </p>
            </div>
            {/* Card 3 */}
            <div className="maid_kamwali_service_card">
              <div className="maid_kamwali_card_icon_wrap">
                <FaShirt />
              </div>
              <h3 className="maid_kamwali_card_title">Laundry & Ironing Help</h3>
              <p className="maid_kamwali_card_desc">
                Washing clothes, drying, folding, and professional steam or dry ironing of daily wear and formal attire.
              </p>
            </div>
            {/* Card 4 */}
            <div className="maid_kamwali_service_card">
              <div className="maid_kamwali_card_icon_wrap">
                <FaUtensils />
              </div>
              <h3 className="maid_kamwali_card_title">Kitchen & Cooking Support</h3>
              <p className="maid_kamwali_card_desc">
                Assisting in basic meal prep, kneading flour, chopping vegetables, washing chicken/mutton, and kitchen assistance.
              </p>
            </div>
            {/* Card 5 */}
            <div className="maid_kamwali_service_card">
              <div className="maid_kamwali_card_icon_wrap">
                <FaClock />
              </div>
              <h3 className="maid_kamwali_card_title">Part-Time Daily Maids</h3>
              <p className="maid_kamwali_card_desc">
                Hire helpers for 2 to 4 hours daily to handle selected chores like dishwashing, washing bathrooms, or mopping.
              </p>
            </div>
            {/* Card 6 */}
            <div className="maid_kamwali_service_card">
              <div className="maid_kamwali_card_icon_wrap">
                <FaCircleCheck />
              </div>
              <h3 className="maid_kamwali_card_title">Full-Time / Live-in Help</h3>
              <p className="maid_kamwali_card_desc">
                Dedicated 24/7 live-in domestic helpers or 8-hour shift maids to manage all home cleaning and kitchen tasks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Block Section */}
      <section className="maid_kamwali_trust_sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 maid_kamwali_trust_col_text">
              <h2 className="section_heading text-start mb-2">
                Why Choose Aya Sir G! <br />
                <span className="red_title">for Maid Services?</span>
              </h2>
              <div className="maid_kamwali_trust_points">
                <div className="maid_kamwali_trust_point">
                  <div className="maid_kamwali_trust_icon_box">
                    <FaUserShield />
                  </div>
                  <div>
                    <h3 className="maid_kamwali_trust_point_title">CNIC Vetted Helpers</h3>
                    <p className="maid_kamwali_trust_point_desc">
                      Domestic helper profiles include checked identity details for household security and safety.
                    </p>
                  </div>
                </div>
                <div className="maid_kamwali_trust_point">
                  <div className="maid_kamwali_trust_icon_box">
                    <FaBroom />
                  </div>
                  <div>
                    <h3 className="maid_kamwali_trust_point_title">Experienced in Home Chores</h3>
                    <p className="maid_kamwali_trust_point_desc">
                      Find helper profiles who have worked with multiple families and understand standard cleaning methods.
                    </p>
                  </div>
                </div>
                <div className="maid_kamwali_trust_point">
                  <div className="maid_kamwali_trust_icon_box">
                    <FaStar />
                  </div>
                  <div>
                    <h3 className="maid_kamwali_trust_point_title">Direct Salary Negotiation</h3>
                    <p className="maid_kamwali_trust_point_desc">
                      Negotiate monthly or daily wages directly with the helper. We charge zero commissions or agency fees.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="maid_kamwali_trust_img_wrap">
                <Image
                  src="/assets/maid-kamwali.png"
                  alt="Verified domestic maid cleaning kitchen on Aya Sir G!"
                  width={600}
                  height={450}
                  className="maid_kamwali_trust_img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shared 4 Steps Component */}
      <ServicesSteps />

      {/* Cities Section */}
      <section className="maid_kamwali_cities_sec">
        <div className="container">
          <h2 className="maid_kamwali_section_heading">Find Maids / Kamwalis in Your City</h2>
          <div className="maid_kamwali_city_pills">
            <Link
              href={`/compnies?role=handyman&category_id=47${
                cityIds.lahore ? `&city=${cityIds.lahore}` : ""
              }`}
              className="maid_kamwali_city_pill"
            >
              Lahore
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=47${
                cityIds.karachi ? `&city=${cityIds.karachi}` : ""
              }`}
              className="maid_kamwali_city_pill"
            >
              Karachi
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=47${
                cityIds.islamabad ? `&city=${cityIds.islamabad}` : ""
              }`}
              className="maid_kamwali_city_pill"
            >
              Islamabad
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="maid_kamwali_faq_sec">
        <div className="container">
          <h2 className="maid_kamwali_section_heading">Frequently Asked Questions</h2>
          <div className="maid_kamwali_faq_wrapper">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>How do I book a maid or kamwali on Aya Sir G!?</Accordion.Header>
                <Accordion.Body>
                  To book, browse through our local domestic helper and maid profiles, compare experience and client reviews, and contact them directly to negotiate salaries and work timings.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>What are the common work options available?</Accordion.Header>
                <Accordion.Body>
                  You can hire part-time maids for specific tasks (like dishwashing or floor mopping), daily helpers for a few hours, or full-time 24/7 live-in maids.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Are the maids CNIC verified?</Accordion.Header>
                <Accordion.Body>
                  Yes, we prioritize security by presenting profiles of maids and domestic workers with verified CNIC records and ratings from previous clients.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>How is the monthly salary determined?</Accordion.Header>
                <Accordion.Body>
                  Salaries are negotiated directly between you and the maid based on the size of the house, the number of chores (cooking, cleaning, ironing), and working hours. Aya Sir G! does not charge any commissions.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Can I find a maid who can cook as well?</Accordion.Header>
                <Accordion.Body>
                  Yes, many domestic helpers on our platform offer multi-service support, including basic home cooking (Bawarchi help), childcare assistance, and home cleaning.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Bold CTA Banner */}
      <section className="maid_kamwali_cta_banner">
        <div className="container">
          <h2 className="maid_kamwali_cta_banner_h2">
            Need Help with Household Chores? Browse Verified Maids Today.
          </h2>
          <Link
            href="/compnies?role=handyman&category_id=47"
            className="maid_kamwali_btn"
          >
            Browse Maids / Kamwalis
          </Link>
        </div>
      </section>
    </div>
  );
}
