"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import {
  FaUtensils,
  FaBurger,
  FaStore,
  FaUserGroup,
  FaFireBurner,
  FaTag,
  FaUserShield,
  FaStar,
} from "react-icons/fa6";
import { fetchCityIdByName } from "@/app/lib/cityPages";
import ServicesSteps from "@/app/components/services/Services";
import "./fast-food-crew.css";

export default function FastFoodCrewPage() {
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
        "name": "How do I hire fast-food workers or crew members on Aya Sir G!?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To hire, browse through our verified restaurant crew and kitchen worker profiles, check their experience levels and ratings, and contact them directly to schedule interviews and discuss salaries."
        }
      },
      {
        "@type": "Question",
        "name": "Do listed crew members have experience in commercial kitchens?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Many of the candidates registered on our platform have previously worked in local cafés, fast-food outlets, bakeries, or international food chains, and are well-trained in commercial food prep."
        }
      },
      {
        "@type": "Question",
        "name": "What are the standard shifts for fast-food workers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Shifts are highly flexible and negotiated directly between you and the worker. Common shifts include full-time (8-9 hours), part-time (4-5 hours), evening shifts, or weekend-only support."
        }
      },
      {
        "@type": "Question",
        "name": "Can I hire temporary crew members for catering or weekend events?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. You can filter and contact crew members who are available for short-term, daily, or event-based assignments to help manage weddings, parties, or festival food stalls."
        }
      },
      {
        "@type": "Question",
        "name": "Do you charge commission on driver or restaurant staff placements?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Aya Sir G! is a free-to-use directory connecting clients directly with service providers and workers. You hire them directly and negotiate wages without paying any third-party commission."
        }
      }
    ]
  };

  return (
    <div className="crew_page margin_navbar">
      {/* FAQ Schema Injection for Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <header className="crew_hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="crew_hero_content text-center text-lg-start">
                <h1 className="crew_hero_h1">
                  Fast-Food Workers & Restaurant Crew in Pakistan — Aya Sir G!
                </h1>
                <p className="crew_hero_subheading">
                  Find verified kitchen helpers, compare restaurant crew and cashier profiles, read reviews, and hire professional staff.
                </p>
                <div className="crew_hero_ctas justify-content-center justify-content-lg-start">
                  <Link
                    href="/compnies?role=handyman&category_id=53"
                    className="crew_btn crew_btn_primary"
                  >
                    Find Restaurant Crew
                  </Link>
                  <Link
                    href="/register-yourself"
                    className="crew_btn crew_btn_secondary"
                  >
                    Register as Staff
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0 text-center d-none d-lg-block">
              {/* Crew visual icon */}
              <div
                style={{
                  background: "rgba(217, 119, 6, 0.04)",
                  borderRadius: "50%",
                  width: "280px",
                  height: "280px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  border: "2px dashed rgba(217, 119, 6, 0.15)",
                }}
              >
                <FaUtensils size={120} className="text-secondary" style={{ color: "#d97706" }} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content Block (Word Count: ~150 words) */}
      <section className="crew_content_block">
        <div className="container">
          <div className="crew_content_wrapper">
            <h2 className="crew_section_heading">What Does a Fast-Food & Crew Member Do?</h2>
            <p className="crew_content_text">
              Fast food workers and crew members play a vital role in delivering quality customer service and maintaining smooth restaurant operations. In Lahore, Pakistan, restaurants, cafés, food chains, and takeaway outlets rely on trained staff for food preparation, order taking, cashier duties, customer service, kitchen assistance, cleaning, packing, and serving customers efficiently. Professional crew members help maintain hygiene standards, ensure timely order delivery, and provide a positive dining experience. Whether you need full-time or part-time fast food staff for a new restaurant, busy outlet, or seasonal demand, Aya Sir G helps businesses connect with reliable fast food workers and experienced crew members in Lahore for restaurants, cafés, food courts, and commercial food service operations.
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
      <section className="crew_services_sec">
        <div className="container">
          <h2 className="crew_section_heading">Restaurant Services Available on Aya Sir G!</h2>
          <div className="crew_services_grid">
            {/* Card 1 */}
            <div className="crew_service_card">
              <div className="crew_card_icon_wrap">
                <FaBurger />
              </div>
              <h3 className="crew_card_title">Fast-Food Prep & Assembly</h3>
              <p className="crew_card_desc">
                Fast preparation of burgers, shawarmas, sandwiches, wraps, pizzas, and preparing toppings/ingredients under hygienic standards.
              </p>
            </div>
            {/* Card 2 */}
            <div className="crew_service_card">
              <div className="crew_card_icon_wrap">
                <FaFireBurner />
              </div>
              <h3 className="crew_card_title">Grill & Fryer Operators</h3>
              <p className="crew_card_desc">
                Operating commercial deep fryers, gas griddles, bun warmers, and baking ovens safely during rush hours.
              </p>
            </div>
            {/* Card 3 */}
            <div className="crew_service_card">
              <div className="crew_card_icon_wrap">
                <FaUserGroup />
              </div>
              <h3 className="crew_card_title">Kitchen Helpers & Support</h3>
              <p className="crew_card_desc">
                Assisting line chefs, chopping vegetables, washing utensils, sanitizing counters, and maintaining overall food safety.
              </p>
            </div>
            {/* Card 4 */}
            <div className="crew_service_card">
              <div className="crew_card_icon_wrap">
                <FaStore />
              </div>
              <h3 className="crew_card_title">Restaurant Cashiers</h3>
              <p className="crew_card_desc">
                Greeting customers, operating point-of-sale (POS) systems, cash handling, card processing, and managing daily sales registers.
              </p>
            </div>
            {/* Card 5 */}
            <div className="crew_service_card">
              <div className="crew_card_icon_wrap">
                <FaUtensils />
              </div>
              <h3 className="crew_card_title">Table & Counter Servers</h3>
              <p className="crew_card_desc">
                Serving hot food trays, managing self-service counters, clearing dining tables, and addressing customer needs.
              </p>
            </div>
            {/* Card 6 */}
            <div className="crew_service_card">
              <div className="crew_card_icon_wrap">
                <FaTag />
              </div>
              <h3 className="crew_card_title">Packing & Dispatch Staff</h3>
              <p className="crew_card_desc">
                Packing takeaway boxes neatly, compiling home delivery bags, adding condiments, and coordinating with riders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Block Section */}
      <section className="crew_trust_sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 crew_trust_col_text">
              <h2 className="section_heading text-start mb-2">
                Why Choose Aya Sir G! <br />
                <span className="red_title">for Restaurant Staff?</span>
              </h2>
              <div className="crew_trust_points">
                <div className="crew_trust_point">
                  <div className="crew_trust_icon_box">
                    <FaUserShield />
                  </div>
                  <div>
                    <h3 className="crew_trust_point_title">Experienced & Vetted Crew</h3>
                    <p className="crew_trust_point_desc">
                      Find workers who have prior experience in international or local fast-food chains and busy food courts.
                    </p>
                  </div>
                </div>
                <div className="crew_trust_point">
                  <div className="crew_trust_icon_box">
                    <FaUtensils />
                  </div>
                  <div>
                    <h3 className="crew_trust_point_title">Hygienic & Clean Staff</h3>
                    <p className="crew_trust_point_desc">
                      We highlight profiles of crew members who prioritize hygiene, cleanliness, and have valid health certificates.
                    </p>
                  </div>
                </div>
                <div className="crew_trust_point">
                  <div className="crew_trust_icon_box">
                    <FaStar />
                  </div>
                  <div>
                    <h3 className="crew_trust_point_title">Direct Hiring, Zero Commission</h3>
                    <p className="crew_trust_point_desc">
                      Communicate directly with candidates, discuss shift schedules, negotiate salaries, and hire with no fees.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="crew_trust_img_wrap">
                <Image
                  src="/assets/fast-food-crew.png"
                  alt="Verified fast-food worker serving order on Aya Sir G!"
                  width={600}
                  height={450}
                  className="crew_trust_img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shared 4 Steps Component */}
      <ServicesSteps />

      {/* Cities Section */}
      <section className="crew_cities_sec">
        <div className="container">
          <h2 className="crew_section_heading">Find Restaurant Crew in Your City</h2>
          <div className="crew_city_pills">
            <Link
              href={`/compnies?role=handyman&category_id=53${
                cityIds.lahore ? `&city=${cityIds.lahore}` : ""
              }`}
              className="crew_city_pill"
            >
              Lahore
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=53${
                cityIds.karachi ? `&city=${cityIds.karachi}` : ""
              }`}
              className="crew_city_pill"
            >
              Karachi
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=53${
                cityIds.islamabad ? `&city=${cityIds.islamabad}` : ""
              }`}
              className="crew_city_pill"
            >
              Islamabad
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="crew_faq_sec">
        <div className="container">
          <h2 className="crew_section_heading">Frequently Asked Questions</h2>
          <div className="crew_faq_wrapper">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>How do I hire fast-food workers or crew members on Aya Sir G!?</Accordion.Header>
                <Accordion.Body>
                  To hire, browse through our verified restaurant crew and kitchen worker profiles, check their experience levels and ratings, and contact them directly to schedule interviews and discuss salaries.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Do listed crew members have experience in commercial kitchens?</Accordion.Header>
                <Accordion.Body>
                  Yes. Many of the candidates registered on our platform have previously worked in local cafés, fast-food outlets, bakeries, or international food chains, and are well-trained in commercial food prep.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>What are the standard shifts for fast-food workers?</Accordion.Header>
                <Accordion.Body>
                  Shifts are highly flexible and negotiated directly between you and the worker. Common shifts include full-time (8-9 hours), part-time (4-5 hours), evening shifts, or weekend-only support.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Can I hire temporary crew members for catering or weekend events?</Accordion.Header>
                <Accordion.Body>
                  Yes. You can filter and contact crew members who are available for short-term, daily, or event-based assignments to help manage weddings, parties, or festival food stalls.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Do you charge commission on driver or restaurant staff placements?</Accordion.Header>
                <Accordion.Body>
                  No. Aya Sir G! is a free-to-use directory connecting clients directly with service providers and workers. You hire them directly and negotiate wages without paying any third-party commission.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Bold CTA Banner */}
      <section className="crew_cta_banner">
        <div className="container">
          <h2 className="crew_cta_banner_h2">
            Looking for Punctual, Hygienic Restaurant Staff? Hire Crew Members Now.
          </h2>
          <Link
            href="/compnies?role=handyman&category_id=53"
            className="crew_btn"
          >
            Browse Crew Members
          </Link>
        </div>
      </section>
    </div>
  );
}
