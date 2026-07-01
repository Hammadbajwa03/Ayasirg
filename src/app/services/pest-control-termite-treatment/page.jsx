"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import {
  FaBug,
  FaHouseChimney,
  FaShieldHalved,
  FaSprayCan,
  FaCircleCheck,
  FaFlask,
  FaUserShield,
  FaStar,
  FaClock,
} from "react-icons/fa6";
import { fetchCityIdByName } from "@/app/lib/cityPages";
import ServicesSteps from "@/app/components/services/Services";
import "./pest-control-termite-treatment.css";

export default function PestControlPage() {
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
        name: "How do I book a pest control service on Aya Sir G!?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Browse verified pest control companies and specialists on Aya Sir G!, check their service areas, customer ratings, and treatment types, then contact them directly to schedule a visit and get a quote.",
        },
      },
      {
        "@type": "Question",
        name: "What pests can be treated through Aya Sir G!?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our pest control experts handle cockroaches, termites (deemak), bed bugs, rodents (rats and mice), mosquitoes, ants, lizards, and general household insects using safe, approved pesticides.",
        },
      },
      {
        "@type": "Question",
        name: "Is termite (deemak) treatment safe for children and pets?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Professional pest control companies use EPA-approved, low-toxicity chemicals. After treatment, you will typically be advised to vacate the treated area for 2–4 hours. Always inform the technician about children and pets before the service.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a pest control treatment last?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "General pest control spraying typically lasts 1–3 months. Termite soil treatment and bait systems can provide protection for 3–5 years. Regular quarterly maintenance services are recommended for long-term pest-free living.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to leave my home during pest control treatment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For most general pest sprays, you should vacate for at least 2–3 hours. For heavy infestations or fumigation treatments, you may need to stay away for 24–48 hours. The pest control specialist will advise you on the exact duration.",
        },
      },
    ],
  };

  return (
    <div className="pest_control_page margin_navbar">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <header className="pest_control_hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="pest_control_hero_content text-center text-lg-start">
                <h1 className="pest_control_hero_h1">
                  Pest Control &amp; Termite Treatment — Aya Sir G!
                </h1>
                <p className="pest_control_hero_subheading">
                  Find verified pest control experts for cockroaches, termites (deemak), bed bugs, rodents, and mosquitoes. Compare profiles, check ratings, and book directly.
                </p>
                <div className="pest_control_hero_ctas justify-content-center justify-content-lg-start">
                  <Link
                    href="/compnies?role=handyman&category_id=50"
                    className="pest_control_btn pest_control_btn_primary"
                  >
                    Find Pest Control Experts
                  </Link>
                  <Link
                    href="/register-yourself"
                    className="pest_control_btn pest_control_btn_secondary"
                  >
                    Register as Pest Control Pro
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0 text-center d-none d-lg-block">
              <div
                style={{
                  background: "rgba(5, 122, 85, 0.04)",
                  borderRadius: "50%",
                  width: "280px",
                  height: "280px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  border: "2px dashed rgba(5, 122, 85, 0.15)",
                }}
              >
                <FaBug size={120} style={{ color: "#057a55" }} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content Block */}
      <section className="pest_control_content_block">
        <div className="container">
          <div className="pest_control_content_wrapper">
            <h2 className="pest_control_section_heading">
              Reliable Pest Control Services in Pakistan with Aya Sir G!
            </h2>
            <p className="pest_control_content_text">
              A large number of homes in Pakistan face issues such as wall dampness, which often leads to long-term moisture problems. This creates an ideal environment for pests and insects, especially in houses with expensive furniture like wall cupboards, fixed showcases, door frames and wooden doors.
            </p>
            <p className="pest_control_content_text">
              Because of this, pest control services are widely advertised everywhere. However, the real concern is trust how do you know which pest control company is reliable? Almost every provider claims to be the best but results are not always immediate or guaranteed.
            </p>
            <p className="pest_control_content_text">
              In some cases, unsafe or low-quality chemicals may also be used, which can lead to serious health risks, especially in homes with toddlers and children. This makes choosing the right pest control service even more important.
            </p>
            <p className="pest_control_content_text">
              With Aya Sir G!, you can find qualified pest control professionals, review their profiles and check their previous experience and customer feedback before making a decision. This helps you choose trusted experts with proven results and satisfied customers, ensuring safer and more reliable pest control services for your home.
            </p>
            <div className="mt-4 pt-2">
              <span className="text-muted small">
                Explore other services at{" "}
                <Link href="/services" className="red_title text-decoration-none">
                  Aya Sir G! Services
                </Link>
                ,{" "}
                <Link
                  href="/register-yourself"
                  className="red_title text-decoration-none"
                >
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
      <section className="pest_control_services_sec">
        <div className="container">
          <h2 className="pest_control_section_heading">
            Pest Control Services Available
          </h2>
          <div className="pest_control_services_grid">
            {/* Card 1 */}
            <div className="pest_control_service_card">
              <div className="pest_control_card_icon_wrap">
                <FaBug />
              </div>
              <h3 className="pest_control_card_title">
                Cockroach &amp; Insect Control
              </h3>
              <p className="pest_control_card_desc">
                Targeted gel baiting and residual spraying to eliminate cockroaches, ants, silverfish, and flying insects from kitchens, bathrooms, and drains.
              </p>
            </div>
            {/* Card 2 */}
            <div className="pest_control_service_card">
              <div className="pest_control_card_icon_wrap">
                <FaHouseChimney />
              </div>
              <h3 className="pest_control_card_title">
                Termite (Deemak) Treatment
              </h3>
              <p className="pest_control_card_desc">
                Pre-construction soil treatment and post-construction termite bait systems to completely protect your structure, wooden floors, furniture, and door frames.
              </p>
            </div>
            {/* Card 3 */}
            <div className="pest_control_service_card">
              <div className="pest_control_card_icon_wrap">
                <FaShieldHalved />
              </div>
              <h3 className="pest_control_card_title">Bed Bug Treatment</h3>
              <p className="pest_control_card_desc">
                Deep mattress and bedroom treatment using heat, steam, and chemical sprays to fully eradicate bed bugs at every lifecycle stage.
              </p>
            </div>
            {/* Card 4 */}
            <div className="pest_control_service_card">
              <div className="pest_control_card_icon_wrap">
                <FaFlask />
              </div>
              <h3 className="pest_control_card_title">
                Rodent Control (Rats &amp; Mice)
              </h3>
              <p className="pest_control_card_desc">
                Professional trapping, rodenticide baiting, and entry point sealing to eliminate rats and mice from homes, restaurants, and warehouses.
              </p>
            </div>
            {/* Card 5 */}
            <div className="pest_control_service_card">
              <div className="pest_control_card_icon_wrap">
                <FaSprayCan />
              </div>
              <h3 className="pest_control_card_title">
                Mosquito Fogging &amp; Spraying
              </h3>
              <p className="pest_control_card_desc">
                ULV cold fogging and residual spraying for gardens, lawns, and outdoor areas to reduce mosquito populations and prevent dengue and malaria risks.
              </p>
            </div>
            {/* Card 6 */}
            <div className="pest_control_service_card">
              <div className="pest_control_card_icon_wrap">
                <FaCircleCheck />
              </div>
              <h3 className="pest_control_card_title">
                Annual Maintenance Contracts
              </h3>
              <p className="pest_control_card_desc">
                Scheduled quarterly or monthly pest control visits with follow-up inspections to keep your home permanently pest-free all year long.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Block */}
      <section className="pest_control_trust_sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 pest_control_trust_col_text">
              <h2 className="section_heading text-start mb-2">
                Why Choose Aya Sir G! <br />
                <span className="red_title">for Pest Control?</span>
              </h2>
              <div className="pest_control_trust_points">
                <div className="pest_control_trust_point">
                  <div className="pest_control_trust_icon_box">
                    <FaUserShield />
                  </div>
                  <div>
                    <h3 className="pest_control_trust_point_title">
                      Certified &amp; Verified Professionals
                    </h3>
                    <p className="pest_control_trust_point_desc">
                      Every pest control specialist on Aya Sir G! has CNIC-verified profiles and real customer ratings so you hire only trusted, licensed professionals.
                    </p>
                  </div>
                </div>
                <div className="pest_control_trust_point">
                  <div className="pest_control_trust_icon_box">
                    <FaClock />
                  </div>
                  <div>
                    <h3 className="pest_control_trust_point_title">
                      Safe, Approved Chemicals
                    </h3>
                    <p className="pest_control_trust_point_desc">
                      Our listed professionals use only government-approved, low-toxicity pesticides that are safe for families, children, and pets when applied correctly.
                    </p>
                  </div>
                </div>
                <div className="pest_control_trust_point">
                  <div className="pest_control_trust_icon_box">
                    <FaStar />
                  </div>
                  <div>
                    <h3 className="pest_control_trust_point_title">
                      Direct Booking — No Middlemen
                    </h3>
                    <p className="pest_control_trust_point_desc">
                      Contact pest control companies directly, get transparent quotes, and book services without paying extra agency commissions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="pest_control_trust_img_wrap">
                <Image
                  src="/assets/pest-control.png"
                  alt="Verified pest control technician at work on Aya Sir G!"
                  width={600}
                  height={450}
                  className="pest_control_trust_img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shared 4 Steps Component */}
      <ServicesSteps />

      {/* Cities Section */}
      <section className="pest_control_cities_sec">
        <div className="container">
          <h2 className="pest_control_section_heading">
            Find Pest Control Services in Your City
          </h2>
          <div className="pest_control_city_pills">
            <Link
              href={`/compnies?role=handyman&category_id=50${
                cityIds.lahore ? `&city=${cityIds.lahore}` : ""
              }`}
              className="pest_control_city_pill"
            >
              Lahore
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=50${
                cityIds.karachi ? `&city=${cityIds.karachi}` : ""
              }`}
              className="pest_control_city_pill"
            >
              Karachi
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=50${
                cityIds.islamabad ? `&city=${cityIds.islamabad}` : ""
              }`}
              className="pest_control_city_pill"
            >
              Islamabad
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pest_control_faq_sec">
        <div className="container">
          <h2 className="pest_control_section_heading">
            Frequently Asked Questions
          </h2>
          <div className="pest_control_faq_wrapper">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  How do I book a pest control service on Aya Sir G!?
                </Accordion.Header>
                <Accordion.Body>
                  Browse verified pest control companies and specialists on Aya Sir G!, check their service areas, customer ratings, and treatment types, then contact them directly to schedule a visit and get a quote.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  What pests can be treated through Aya Sir G!?
                </Accordion.Header>
                <Accordion.Body>
                  Our pest control experts handle cockroaches, termites (deemak), bed bugs, rodents (rats and mice), mosquitoes, ants, lizards, and general household insects using safe, approved pesticides.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Is termite (deemak) treatment safe for children and pets?
                </Accordion.Header>
                <Accordion.Body>
                  Professional pest control companies use EPA-approved, low-toxicity chemicals. After treatment, you will typically be advised to vacate the treated area for 2–4 hours. Always inform the technician about children and pets before the service.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  How long does a pest control treatment last?
                </Accordion.Header>
                <Accordion.Body>
                  General pest control spraying typically lasts 1–3 months. Termite soil treatment and bait systems can provide protection for 3–5 years. Regular quarterly maintenance services are recommended for long-term pest-free living.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  Do I need to leave my home during pest control treatment?
                </Accordion.Header>
                <Accordion.Body>
                  For most general pest sprays, you should vacate for at least 2–3 hours. For heavy infestations or fumigation treatments, you may need to stay away for 24–48 hours. The pest control specialist will advise you on the exact duration.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="pest_control_cta_banner">
        <div className="container">
          <h2 className="pest_control_cta_banner_h2">
            Pest Problem? Get Professional Treatment Today.
          </h2>
          <Link
            href="/compnies?role=handyman&category_id=50"
            className="pest_control_btn"
          >
            Browse Pest Control Experts
          </Link>
        </div>
      </section>
    </div>
  );
}
