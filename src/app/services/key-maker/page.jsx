"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import {
  FaKey,
  FaLock,
  FaLockOpen,
  FaClock,
  FaUserShield,
  FaStar,
  FaCircleCheck,
  FaCar,
  FaScrewdriverWrench,
} from "react-icons/fa6";
import { fetchCityIdByName } from "@/app/lib/cityPages";
import ServicesSteps from "@/app/components/services/Services";
import "./key-maker.css";

export default function KeyMakerPage() {
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
        "name": "How do I book a local key maker on Aya Sir G!?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To book, browse through our local key maker and locksmith profiles, compare experience and customer ratings, and contact them directly to negotiate pricing and schedule a visit."
        }
      },
      {
        "@type": "Question",
        "name": "What services do locksmiths on your platform provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our locksmiths provide duplicate keys, master key system creation, car key transponder programming, lock repairs, new lock installations, smart lock setups, and emergency door lockout solutions."
        }
      },
      {
        "@type": "Question",
        "name": "Do key makers offer door-to-door mobile locksmith services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, most listed key makers and locksmiths provide mobile services and can visit your home, office, or vehicle location with portable key-cutting and programming machinery."
        }
      },
      {
        "@type": "Question",
        "name": "How much does it cost to duplicate a home or car key?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Costs vary depending on key types (mechanical key vs. laser-cut transponder key or smart key). You negotiate pricing directly with the service provider. There are no middleman commissions."
        }
      },
      {
        "@type": "Question",
        "name": "Can a locksmith open a locked security door or safe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, professional locksmiths are trained in lock picking, bypass tools, and safe opening techniques. You can specify the lock type directly to find a provider with the right tools."
        }
      }
    ]
  };

  return (
    <div className="key_maker_page margin_navbar">
      {/* FAQ Schema Injection for Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <header className="key_maker_hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="key_maker_hero_content text-center text-lg-start">
                <h1 className="key_maker_hero_h1">
                  Professional Key Maker & Locksmith Services — Aya Sir G!
                </h1>
                <p className="key_maker_hero_subheading">
                  Find verified local key duplicating experts, car transponder key programmers, and emergency lockout specialists. Compare, negotiate, and hire directly.
                </p>
                <div className="key_maker_hero_ctas justify-content-center justify-content-lg-start">
                  <Link
                    href="/compnies?role=handyman&category_id=57"
                    className="key_maker_btn key_maker_btn_primary"
                  >
                    Find Key Makers
                  </Link>
                  <Link
                    href="/register-yourself"
                    className="key_maker_btn key_maker_btn_secondary"
                  >
                    Register as Helper
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0 text-center d-none d-lg-block">
              {/* Key Maker visual icon */}
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
                <FaKey size={120} style={{ color: "#d97706" }} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content Block (Word Count: ~150 words) */}
      <section className="key_maker_content_block">
        <div className="container">
          <div className="key_maker_content_wrapper">
            <h2 className="key_maker_section_heading">Lost Your Keys? Find a Nearby Key Maker with Aya Sir G!</h2>
            <p className="key_maker_content_text">
              One of my friends returned home late at night after attending a wedding, only to discover that they had lost their house keys somewhere. Unfortunately, they didn't have a spare key and had to stay with relatives for the night.
            </p>
            <p className="key_maker_content_text">
              Situations like this can happen to anyone. Whether you've lost your house key, car key, bike key or need a duplicate key, help is only a few clicks away.
            </p>
            <p className="key_maker_content_text">
              Simply sign up on Aya Sir G! and find a nearby key maker or emergency locksmith. A trusted professional can come to your location and help you get back inside or make a replacement key without unnecessary delays.
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
      <section className="key_maker_services_sec">
        <div className="container">
          <h2 className="key_maker_section_heading">Locksmith & Key Services Available</h2>
          <div className="key_maker_services_grid">
            {/* Card 1 */}
            <div className="key_maker_service_card">
              <div className="key_maker_card_icon_wrap">
                <FaKey />
              </div>
              <h3 className="key_maker_card_title">Key Duplication</h3>
              <p className="key_maker_card_desc">
                Fast and accurate duplicating of home, drawer, cupboard, padlock, and office keys using advanced cutting machines.
              </p>
            </div>
            {/* Card 2 */}
            <div className="key_maker_service_card">
              <div className="key_maker_card_icon_wrap">
                <FaCar />
              </div>
              <h3 className="key_maker_card_title">Car Transponder Programming</h3>
              <p className="key_maker_card_desc">
                Programming computer chip transponders, duplication of car remotes, smart fob keys, and laser-cut car key creation.
              </p>
            </div>
            {/* Card 3 */}
            <div className="key_maker_service_card">
              <div className="key_maker_card_icon_wrap">
                <FaLockOpen />
              </div>
              <h3 className="key_maker_card_title">Emergency Lockout Help</h3>
              <p className="key_maker_card_desc">
                24/7 door bypass and lock-picking services for residential, commercial, or automotive lockout situations.
              </p>
            </div>
            {/* Card 4 */}
            <div className="key_maker_service_card">
              <div className="key_maker_card_icon_wrap">
                <FaLock />
              </div>
              <h3 className="key_maker_card_title">Lock Repair & Refitting</h3>
              <p className="key_maker_card_desc">
                Repairing jammed handles, replacing worn cylinder pins, refitting broken lock latches, and general key adjustment.
              </p>
            </div>
            {/* Card 5 */}
            <div className="key_maker_service_card">
              <div className="key_maker_card_icon_wrap">
                <FaScrewdriverWrench />
              </div>
              <h3 className="key_maker_card_title">New Lock Installation</h3>
              <p className="key_maker_card_desc">
                Professional installation of heavy main door locks, smart deadbolts, digital password keypad locks, and drawer locks.
              </p>
            </div>
            {/* Card 6 */}
            <div className="key_maker_service_card">
              <div className="key_maker_card_icon_wrap">
                <FaCircleCheck />
              </div>
              <h3 className="key_maker_card_title">Safe & Locker Unlocking</h3>
              <p className="key_maker_card_desc">
                High-precision mechanical and digital safe dialing, password resets, key repairs, and safe lock maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Block Section */}
      <section className="key_maker_trust_sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 key_maker_trust_col_text">
              <h2 className="section_heading text-start mb-2">
                Why Choose Aya Sir G! <br />
                <span className="red_title">for Key Makers?</span>
              </h2>
              <div className="key_maker_trust_points">
                <div className="key_maker_trust_point">
                  <div className="key_maker_trust_icon_box">
                    <FaUserShield />
                  </div>
                  <div>
                    <h3 className="key_maker_trust_point_title">CNIC-Verified Locksmiths</h3>
                    <p className="key_maker_trust_point_desc">
                      Security is paramount. Locksmiths listed have verified CNIC records for your safety and household privacy.
                    </p>
                  </div>
                </div>
                <div className="key_maker_trust_point">
                  <div className="key_maker_trust_icon_box">
                    <FaClock />
                  </div>
                  <div>
                    <h3 className="key_maker_trust_point_title">Mobile Locksmith Units</h3>
                    <p className="key_maker_trust_point_desc">
                      No need to travel with broken locks. Verified key makers come directly to your doorstep with all equipment.
                    </p>
                  </div>
                </div>
                <div className="key_maker_trust_point">
                  <div className="key_maker_trust_icon_box">
                    <FaStar />
                  </div>
                  <div>
                    <h3 className="key_maker_trust_point_title">Direct Deal & Fair Pricing</h3>
                    <p className="key_maker_trust_point_desc">
                      Talk directly with the key maker. Negotiate rates for mechanical keys or smart remotes with zero middleman fee.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="key_maker_trust_img_wrap">
                <Image
                  src="/assets/key-maker.png"
                  alt="Verified key maker duplicating keys on Aya Sir G!"
                  width={600}
                  height={450}
                  className="key_maker_trust_img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shared 4 Steps Component */}
      <ServicesSteps />

      {/* Cities Section */}
      <section className="key_maker_cities_sec">
        <div className="container">
          <h2 className="key_maker_section_heading">Find Key Makers in Your City</h2>
          <div className="key_maker_city_pills">
            <Link
              href={`/compnies?role=handyman&category_id=57${
                cityIds.lahore ? `&city=${cityIds.lahore}` : ""
              }`}
              className="key_maker_city_pill"
            >
              Lahore
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=57${
                cityIds.karachi ? `&city=${cityIds.karachi}` : ""
              }`}
              className="key_maker_city_pill"
            >
              Karachi
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=57${
                cityIds.islamabad ? `&city=${cityIds.islamabad}` : ""
              }`}
              className="key_maker_city_pill"
            >
              Islamabad
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="key_maker_faq_sec">
        <div className="container">
          <h2 className="key_maker_section_heading">Frequently Asked Questions</h2>
          <div className="key_maker_faq_wrapper">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>How do I book a local key maker on Aya Sir G!?</Accordion.Header>
                <Accordion.Body>
                  To book, browse through our local key maker and locksmith profiles, compare experience and customer ratings, and contact them directly to negotiate pricing and schedule a visit.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>What services do locksmiths on your platform provide?</Accordion.Header>
                <Accordion.Body>
                  Our locksmiths provide duplicate keys, master key system creation, car key transponder programming, lock repairs, new lock installations, smart lock setups, and emergency door lockout solutions.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Do key makers offer door-to-door mobile locksmith services?</Accordion.Header>
                <Accordion.Body>
                  Yes, most listed key makers and locksmiths provide mobile services and can visit your home, office, or vehicle location with portable key-cutting and programming machinery.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>How much does it cost to duplicate a home or car key?</Accordion.Header>
                <Accordion.Body>
                  Costs vary depending on key types (mechanical key vs. laser-cut transponder key or smart key). You negotiate pricing directly with the service provider. There are no middleman commissions.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Can a locksmith open a locked security door or safe?</Accordion.Header>
                <Accordion.Body>
                  Yes, professional locksmiths are trained in lock picking, bypass tools, and safe opening techniques. You can specify the lock type directly to find a provider with the right tools.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Bold CTA Banner */}
      <section className="key_maker_cta_banner">
        <div className="container">
          <h2 className="key_maker_cta_banner_h2">
            Locked Out or Need a Duplicate Key? Contact Local Locksmiths Now.
          </h2>
          <Link
            href="/compnies?role=handyman&category_id=57"
            className="key_maker_btn"
          >
            Browse Key Makers
          </Link>
        </div>
      </section>
    </div>
  );
}
