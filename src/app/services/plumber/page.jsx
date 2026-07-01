"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import {
  FaWrench,
  FaDroplet,
  FaToilet,
  FaShower,
  FaCircleCheck,
  FaWaterLadder,
  FaUserShield,
  FaStar,
  FaClock,
} from "react-icons/fa6";
import { fetchCityIdByName } from "@/app/lib/cityPages";
import ServicesSteps from "@/app/components/services/Services";
import "./plumber.css";

export default function PlumberPage() {
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
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I hire a plumber on Aya Sir G!?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Browse verified plumber profiles on Aya Sir G!, check their ratings, reviews, and specializations, then contact them directly to describe your plumbing issue and get a quote.",
        },
      },
      {
        "@type": "Question",
        name: "What plumbing services are available on Aya Sir G!?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our plumbers handle pipe leakage repair, bathroom fitting and installation, water tank cleaning and installation, blocked drain clearing, tap and valve replacement, geyser installation, and complete new construction plumbing.",
        },
      },
      {
        "@type": "Question",
        name: "Can I hire a plumber for emergency pipe leakage?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Many plumbers listed on Aya Sir G! offer emergency same-day or after-hours services for urgent pipe bursts, leakages, and flooding issues. Contact them directly to check availability.",
        },
      },
      {
        "@type": "Question",
        name: "How much does a plumber charge in Pakistan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Plumbing charges in Pakistan vary by job type and city. Minor repairs like tap replacement start from PKR 500–1,500. Major work like bathroom fitting or pipe replacement is usually quoted as a full job price. Get quotes directly from plumbers on Aya Sir G!.",
        },
      },
      {
        "@type": "Question",
        name: "Do plumbers on Aya Sir G! supply their own tools and materials?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Plumbers bring their own tools. Materials like pipes, fittings, and fixtures are usually purchased by the client, though some plumbers offer a material-plus-labour package. Always clarify before the job starts.",
        },
      },
    ],
  };

  return (
    <div className="plumber_page margin_navbar">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <header className="plumber_hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="plumber_hero_content text-center text-lg-start">
                <h1 className="plumber_hero_h1">
                  Professional Plumbers — Aya Sir G!
                </h1>
                <p className="plumber_hero_subheading">
                  Find verified local plumbers for pipe leakage, bathroom fitting, drain cleaning, water tanks, and all plumbing needs. Compare profiles, check reviews, and hire directly.
                </p>
                <div className="plumber_hero_ctas justify-content-center justify-content-lg-start">
                  <Link
                    href="/compnies?role=handyman&category_id=36"
                    className="plumber_btn plumber_btn_primary"
                  >
                    Find Plumbers Near Me
                  </Link>
                  <Link
                    href="/register-yourself"
                    className="plumber_btn plumber_btn_secondary"
                  >
                    Register as Plumber
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0 text-center d-none d-lg-block">
              <div
                style={{
                  background: "rgba(3, 105, 161, 0.04)",
                  borderRadius: "50%",
                  width: "280px",
                  height: "280px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  border: "2px dashed rgba(3, 105, 161, 0.15)",
                }}
              >
                <FaWrench size={120} style={{ color: "#0369a1" }} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content Block */}
      <section className="plumber_content_block">
        <div className="container">
          <div className="plumber_content_wrapper">
            <h2 className="plumber_section_heading">Empowering Plumbers and Blue-Collar Workers with Aya Sir G!</h2>
            <p className="plumber_content_text">
              In many local markets, it is common to see plumbers and other skilled workers sitting outside sanitary shops, waiting for customers. They often spend hours talking to each other or helping shopkeepers just to stay available for daily work opportunities.
            </p>
            <p className="plumber_content_text">
              Unfortunately, many of them wait the entire day without receiving any job and eventually return home without earning anything. This traditional system depends heavily on chance and physical presence, which limits opportunities for skilled workers.
            </p>
            <p className="plumber_content_text">
              Aya Sir G! aims to change this system by connecting the entire blue-collar community online. Instead of waiting in shops for work, workers can now create their profiles on the platform and become visible to customers searching for services.
            </p>
            <p className="plumber_content_text">
              With Aya Sir G!, plumbers and other skilled professionals no longer need to stand in markets for hours. They can simply register, build their profile and start receiving job requests and calls directly through the platform. This creates a more efficient, fair and accessible way to find work and earn income.
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
      <section className="plumber_services_sec">
        <div className="container">
          <h2 className="plumber_section_heading">Plumbing Services Available</h2>
          <div className="plumber_services_grid">
            {/* Card 1 */}
            <div className="plumber_service_card">
              <div className="plumber_card_icon_wrap">
                <FaDroplet />
              </div>
              <h3 className="plumber_card_title">Pipe Leakage Detection &amp; Repair</h3>
              <p className="plumber_card_desc">
                Locating and repairing concealed wall pipe leaks, underground water line bursts, and roof or balcony slab leakages using modern detection methods.
              </p>
            </div>
            {/* Card 2 */}
            <div className="plumber_service_card">
              <div className="plumber_card_icon_wrap">
                <FaToilet />
              </div>
              <h3 className="plumber_card_title">Bathroom &amp; Kitchen Fitting</h3>
              <p className="plumber_card_desc">
                Complete installation of toilets, washbasins, bathtubs, showers, kitchen sinks, mixer taps, bidets, and all sanitary ware fittings.
              </p>
            </div>
            {/* Card 3 */}
            <div className="plumber_service_card">
              <div className="plumber_card_icon_wrap">
                <FaWaterLadder />
              </div>
              <h3 className="plumber_card_title">Water Tank Cleaning &amp; Installation</h3>
              <p className="plumber_card_desc">
                Overhead and underground water tank cleaning, disinfection, crack repair, and installation of new plastic or concrete water storage tanks.
              </p>
            </div>
            {/* Card 4 */}
            <div className="plumber_service_card">
              <div className="plumber_card_icon_wrap">
                <FaWrench />
              </div>
              <h3 className="plumber_card_title">Blocked Drain &amp; Sewage Clearing</h3>
              <p className="plumber_card_desc">
                Unblocking clogged drains, kitchen waste pipes, toilet blockages, and external sewage lines using rods, hydro-jetting, or manual tools.
              </p>
            </div>
            {/* Card 5 */}
            <div className="plumber_service_card">
              <div className="plumber_card_icon_wrap">
                <FaShower />
              </div>
              <h3 className="plumber_card_title">Geyser &amp; Water Heater Installation</h3>
              <p className="plumber_card_desc">
                Installing electric geysers, gas water heaters, solar water heaters, and instant water heating systems with proper pipe connections and safety valves.
              </p>
            </div>
            {/* Card 6 */}
            <div className="plumber_service_card">
              <div className="plumber_card_icon_wrap">
                <FaCircleCheck />
              </div>
              <h3 className="plumber_card_title">New Construction Plumbing</h3>
              <p className="plumber_card_desc">
                Complete underground and overhead plumbing layout for new homes, apartments, commercial buildings, including water supply, drainage, and sewage systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Block */}
      <section className="plumber_trust_sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 plumber_trust_col_text">
              <h2 className="section_heading text-start mb-2">
                Why Choose Aya Sir G! <br />
                <span className="red_title">for Plumbers?</span>
              </h2>
              <div className="plumber_trust_points">
                <div className="plumber_trust_point">
                  <div className="plumber_trust_icon_box">
                    <FaUserShield />
                  </div>
                  <div>
                    <h3 className="plumber_trust_point_title">Verified &amp; Experienced Plumbers</h3>
                    <p className="plumber_trust_point_desc">
                      Every plumber on Aya Sir G! has a CNIC-verified profile with genuine customer ratings so you always hire a trusted, skilled professional.
                    </p>
                  </div>
                </div>
                <div className="plumber_trust_point">
                  <div className="plumber_trust_icon_box">
                    <FaClock />
                  </div>
                  <div>
                    <h3 className="plumber_trust_point_title">Fast Emergency Response</h3>
                    <p className="plumber_trust_point_desc">
                      Many plumbers on Aya Sir G! offer same-day and emergency services for urgent pipe bursts, flooding, and blocked drains — when you need help fast.
                    </p>
                  </div>
                </div>
                <div className="plumber_trust_point">
                  <div className="plumber_trust_icon_box">
                    <FaStar />
                  </div>
                  <div>
                    <h3 className="plumber_trust_point_title">Direct Rates — No Agency Fees</h3>
                    <p className="plumber_trust_point_desc">
                      Contact plumbers directly, negotiate transparent job rates, and pay only for the work done — with no extra middlemen commissions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="plumber_trust_img_wrap">
                <Image
                  src="/assets/plumber.png"
                  alt="Verified professional plumber at work on Aya Sir G!"
                  width={600}
                  height={450}
                  className="plumber_trust_img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shared 4 Steps Component */}
      <ServicesSteps />

      {/* Cities Section */}
      <section className="plumber_cities_sec">
        <div className="container">
          <h2 className="plumber_section_heading">Find Plumbers in Your City</h2>
          <div className="plumber_city_pills">
            <Link
              href={`/compnies?role=handyman&category_id=36${
                cityIds.lahore ? `&city=${cityIds.lahore}` : ""
              }`}
              className="plumber_city_pill"
            >
              Lahore
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=36${
                cityIds.karachi ? `&city=${cityIds.karachi}` : ""
              }`}
              className="plumber_city_pill"
            >
              Karachi
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=36${
                cityIds.islamabad ? `&city=${cityIds.islamabad}` : ""
              }`}
              className="plumber_city_pill"
            >
              Islamabad
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="plumber_faq_sec">
        <div className="container">
          <h2 className="plumber_section_heading">Frequently Asked Questions</h2>
          <div className="plumber_faq_wrapper">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>How do I hire a plumber on Aya Sir G!?</Accordion.Header>
                <Accordion.Body>
                  Browse verified plumber profiles on Aya Sir G!, check their ratings, reviews, and specializations, then contact them directly to describe your plumbing issue and get a quote.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>What plumbing services are available on Aya Sir G!?</Accordion.Header>
                <Accordion.Body>
                  Our plumbers handle pipe leakage repair, bathroom fitting and installation, water tank cleaning and installation, blocked drain clearing, tap and valve replacement, geyser installation, and complete new construction plumbing.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Can I hire a plumber for emergency pipe leakage?</Accordion.Header>
                <Accordion.Body>
                  Yes. Many plumbers listed on Aya Sir G! offer emergency same-day or after-hours services for urgent pipe bursts, leakages, and flooding issues. Contact them directly to check availability.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>How much does a plumber charge in Pakistan?</Accordion.Header>
                <Accordion.Body>
                  Plumbing charges in Pakistan vary by job type and city. Minor repairs like tap replacement start from PKR 500–1,500. Major work like bathroom fitting or pipe replacement is usually quoted as a full job price. Get quotes directly from plumbers on Aya Sir G!.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Do plumbers on Aya Sir G! supply their own tools and materials?</Accordion.Header>
                <Accordion.Body>
                  Plumbers bring their own tools. Materials like pipes, fittings, and fixtures are usually purchased by the client, though some plumbers offer a material-plus-labour package. Always clarify before the job starts.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="plumber_cta_banner">
        <div className="container">
          <h2 className="plumber_cta_banner_h2">
            Plumbing Problem? Find Expert Plumbers Now.
          </h2>
          <Link
            href="/compnies?role=handyman&category_id=36"
            className="plumber_btn"
          >
            Browse Plumbers
          </Link>
        </div>
      </section>
    </div>
  );
}
