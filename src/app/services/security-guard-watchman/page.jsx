"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";
import {
  FaShieldHalved,
  FaUserShield,
  FaEye,
  FaBuilding,
  FaCircleCheck,
  FaMoon,
  FaStar,
  FaClock,
  FaLock,
} from "react-icons/fa6";
import { fetchCityIdByName } from "@/app/lib/cityPages";
import ServicesSteps from "@/app/components/services/Services";
import "./security-guard-watchman.css";

export default function SecurityGuardPage() {
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
        name: "How do I hire a security guard or watchman on Aya Sir G!?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Browse verified security guard profiles on Aya Sir G!, check their experience, customer ratings, and availability, then contact them directly to discuss duty hours, location, and monthly salary.",
        },
      },
      {
        "@type": "Question",
        name: "What types of security guard services are available?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our security staff covers residential gate guards, commercial building security, night watchmen, factory and warehouse security, armed guards, and event security personnel.",
        },
      },
      {
        "@type": "Question",
        name: "Can I hire a security guard for a residential society or home?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Many security guards on Aya Sir G! specialize in residential security — guarding gates, monitoring entry/exit, and providing 24/7 watchman services for houses, apartments, and housing societies.",
        },
      },
      {
        "@type": "Question",
        name: "How much does a security guard cost per month in Pakistan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Security guard monthly salaries in Pakistan typically range from PKR 25,000 to PKR 50,000 depending on the city, duty hours (day/night), experience, and whether armed or unarmed. Contact guards directly on Aya Sir G! for accurate rates.",
        },
      },
      {
        "@type": "Question",
        name: "Are the security guards on Aya Sir G! background checked?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Aya Sir G! displays verified profile cards with CNIC status and genuine customer reviews so you can safely recruit trustworthy, reliable security staff for your property.",
        },
      },
    ],
  };

  return (
    <div className="security_guard_page margin_navbar">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <header className="security_guard_hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="security_guard_hero_content text-center text-lg-start">
                <h1 className="security_guard_hero_h1">
                  Security Guards &amp; Watchmen — Aya Sir G!
                </h1>
                <p className="security_guard_hero_subheading">
                  Find verified security guards and watchmen for homes, offices, factories, and housing societies. Compare profiles, check reviews, and hire directly.
                </p>
                <div className="security_guard_hero_ctas justify-content-center justify-content-lg-start">
                  <Link
                    href="/compnies?role=handyman&category_id=12"
                    className="security_guard_btn security_guard_btn_primary"
                  >
                    Find Security Guards
                  </Link>
                  <Link
                    href="/register-yourself"
                    className="security_guard_btn security_guard_btn_secondary"
                  >
                    Register as Security Guard
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0 text-center d-none d-lg-block">
              <div
                style={{
                  background: "rgba(30, 58, 138, 0.04)",
                  borderRadius: "50%",
                  width: "280px",
                  height: "280px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  border: "2px dashed rgba(30, 58, 138, 0.15)",
                }}
              >
                <FaShieldHalved size={120} style={{ color: "#1e3a8a" }} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content Block */}
      <section className="security_guard_content_block">
        <div className="container">
          <div className="security_guard_content_wrapper">
            <h2 className="security_guard_section_heading">
              What Does a Security Guard &amp; Watchman Do?
            </h2>
            <p className="security_guard_content_text">
              Security guards and watchmen play a vital role in protecting homes, offices, shops, factories, schools, and commercial properties. In Lahore, Pakistan, trained security personnel provide services such as access control, visitor management, property surveillance, gate security, night guarding, patrol services, event security, warehouse security, and emergency response. Whether you need a full-time security guard, night watchman, residential security, or commercial security staff, experienced professionals help ensure the safety of people and property. Aya Sir G connects you with trusted security guards and watchmen in Lahore, making it easy to hire dependable security professionals for residential, commercial, and industrial security needs.
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
      <section className="security_guard_services_sec">
        <div className="container">
          <h2 className="security_guard_section_heading">
            Security Services Available
          </h2>
          <div className="security_guard_services_grid">
            {/* Card 1 */}
            <div className="security_guard_service_card">
              <div className="security_guard_card_icon_wrap">
                <FaShieldHalved />
              </div>
              <h3 className="security_guard_card_title">Residential Gate Guard</h3>
              <p className="security_guard_card_desc">
                Stationed at the main entrance of homes, apartments, and housing societies to monitor and control visitor entry, exit, and vehicle movement.
              </p>
            </div>
            {/* Card 2 */}
            <div className="security_guard_service_card">
              <div className="security_guard_card_icon_wrap">
                <FaBuilding />
              </div>
              <h3 className="security_guard_card_title">Commercial Building Security</h3>
              <p className="security_guard_card_desc">
                Patrolling office buildings, shopping plazas, banks, and corporate premises to prevent theft, unauthorized access, and maintain overall security.
              </p>
            </div>
            {/* Card 3 */}
            <div className="security_guard_service_card">
              <div className="security_guard_card_icon_wrap">
                <FaMoon />
              </div>
              <h3 className="security_guard_card_title">Night Watchman (Chowkidar)</h3>
              <p className="security_guard_card_desc">
                Overnight watchman services for homes, shops, and properties — ensuring safety through the night with regular patrols and emergency response.
              </p>
            </div>
            {/* Card 4 */}
            <div className="security_guard_service_card">
              <div className="security_guard_card_icon_wrap">
                <FaLock />
              </div>
              <h3 className="security_guard_card_title">Factory &amp; Warehouse Security</h3>
              <p className="security_guard_card_desc">
                Industrial security personnel to safeguard factories, warehouses, storage yards, and manufacturing units from theft, vandalism, and unauthorized entry.
              </p>
            </div>
            {/* Card 5 */}
            <div className="security_guard_service_card">
              <div className="security_guard_card_icon_wrap">
                <FaEye />
              </div>
              <h3 className="security_guard_card_title">CCTV Monitoring &amp; Patrol</h3>
              <p className="security_guard_card_desc">
                On-site security guards trained to monitor CCTV feeds, respond to camera alerts, conduct scheduled property patrols, and maintain incident logs.
              </p>
            </div>
            {/* Card 6 */}
            <div className="security_guard_service_card">
              <div className="security_guard_card_icon_wrap">
                <FaCircleCheck />
              </div>
              <h3 className="security_guard_card_title">Event &amp; VIP Security</h3>
              <p className="security_guard_card_desc">
                Professional security personnel for weddings, corporate events, conferences, and private gatherings to manage crowd control and guest safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Block */}
      <section className="security_guard_trust_sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 security_guard_trust_col_text">
              <h2 className="section_heading text-start mb-2">
                Why Choose Aya Sir G! <br />
                <span className="red_title">for Security Guards?</span>
              </h2>
              <div className="security_guard_trust_points">
                <div className="security_guard_trust_point">
                  <div className="security_guard_trust_icon_box">
                    <FaUserShield />
                  </div>
                  <div>
                    <h3 className="security_guard_trust_point_title">CNIC-Verified Profiles</h3>
                    <p className="security_guard_trust_point_desc">
                      Every security guard on Aya Sir G! has a CNIC-verified profile with genuine customer ratings — so you can confidently recruit trustworthy, background-checked personnel.
                    </p>
                  </div>
                </div>
                <div className="security_guard_trust_point">
                  <div className="security_guard_trust_icon_box">
                    <FaClock />
                  </div>
                  <div>
                    <h3 className="security_guard_trust_point_title">Day, Night &amp; 24/7 Shifts</h3>
                    <p className="security_guard_trust_point_desc">
                      Find security guards available for fixed day shifts, night duty, or full 24-hour rotational guard posts depending on your property's security requirements.
                    </p>
                  </div>
                </div>
                <div className="security_guard_trust_point">
                  <div className="security_guard_trust_icon_box">
                    <FaStar />
                  </div>
                  <div>
                    <h3 className="security_guard_trust_point_title">Direct Hire — No Agency Commission</h3>
                    <p className="security_guard_trust_point_desc">
                      Contact security staff directly, negotiate monthly salaries and duty terms, and hire without paying extra fees to security agencies or placement firms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="security_guard_trust_img_wrap">
                {/* Security Guard SVG Illustration */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 520 420"
                  style={{
                    width: "100%",
                    maxWidth: "520px",
                    height: "auto",
                    borderRadius: "16px",
                    boxShadow: "0 10px 40px rgba(0,0,0,0.12)",
                    display: "block",
                  }}
                  aria-label="Security guard on duty"
                >
                  {/* Sky background */}
                  <rect width="520" height="420" fill="#e8f0fe" rx="16"/>
                  {/* Ground */}
                  <rect y="310" width="520" height="110" fill="#c8d8f0" rx="0"/>
                  {/* Road/path */}
                  <rect x="180" y="310" width="160" height="110" fill="#b0bec5"/>
                  {/* Gate left pillar */}
                  <rect x="60" y="170" width="40" height="150" fill="#37474f" rx="4"/>
                  {/* Gate right pillar */}
                  <rect x="420" y="170" width="40" height="150" fill="#37474f" rx="4"/>
                  {/* Gate top bar */}
                  <rect x="60" y="165" width="400" height="18" fill="#455a64" rx="3"/>
                  {/* Gate bar spikes */}
                  {[80,112,144,176,208,240,272,304,336,368,400].map((x, i) => (
                    <polygon key={i} points={`${x},165 ${x+8},165 ${x+4},148`} fill="#546e7a"/>
                  ))}
                  {/* Gate horizontal bars */}
                  <rect x="100" y="185" width="140" height="8" fill="#546e7a" rx="2"/>
                  <rect x="100" y="210" width="140" height="8" fill="#546e7a" rx="2"/>
                  <rect x="100" y="235" width="140" height="8" fill="#546e7a" rx="2"/>
                  <rect x="280" y="185" width="140" height="8" fill="#546e7a" rx="2"/>
                  <rect x="280" y="210" width="140" height="8" fill="#546e7a" rx="2"/>
                  <rect x="280" y="235" width="140" height="8" fill="#546e7a" rx="2"/>
                  {/* Gate vertical bars left side */}
                  {[108,124,140,156,172,188,204,220].map((x, i) => (
                    <rect key={i} x={x} y="183" width="6" height="70" fill="#607d8b" rx="1"/>
                  ))}
                  {/* Gate vertical bars right side */}
                  {[288,304,320,336,352,368,384,400].map((x, i) => (
                    <rect key={i} x={x} y="183" width="6" height="70" fill="#607d8b" rx="1"/>
                  ))}

                  {/* Guard body - legs */}
                  <rect x="228" y="295" width="22" height="40" fill="#1a237e" rx="4"/>
                  <rect x="258" y="295" width="22" height="40" fill="#1a237e" rx="4"/>
                  {/* Guard shoes */}
                  <ellipse cx="239" cy="336" rx="14" ry="7" fill="#212121"/>
                  <ellipse cx="269" cy="336" rx="14" ry="7" fill="#212121"/>
                  {/* Guard body - torso */}
                  <rect x="218" y="205" width="72" height="95" fill="#1e3a8a" rx="8"/>
                  {/* Uniform shirt collar */}
                  <polygon points="254,205 248,225 260,225" fill="#ffffff" opacity="0.6"/>
                  {/* Badge */}
                  <rect x="228" y="218" width="22" height="16" fill="#ffd700" rx="3"/>
                  <text x="239" y="230" textAnchor="middle" fontSize="7" fill="#1a237e" fontWeight="bold">GUARD</text>
                  {/* Belt */}
                  <rect x="218" y="282" width="72" height="10" fill="#37474f" rx="2"/>
                  {/* Belt buckle */}
                  <rect x="244" y="283" width="20" height="8" fill="#9e9e9e" rx="1"/>
                  {/* Guard neck */}
                  <rect x="246" y="193" width="16" height="16" fill="#d4a373" rx="3"/>
                  {/* Guard head */}
                  <ellipse cx="254" cy="175" rx="28" ry="30" fill="#d4a373"/>
                  {/* Face features */}
                  <ellipse cx="244" cy="172" rx="4" ry="4.5" fill="#8b6914" opacity="0.8"/>
                  <ellipse cx="264" cy="172" rx="4" ry="4.5" fill="#8b6914" opacity="0.8"/>
                  <path d="M245 184 Q254 190 263 184" stroke="#8b6914" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  {/* Moustache */}
                  <path d="M246 178 Q254 183 262 178" stroke="#5d4037" strokeWidth="2.5" fill="none"/>
                  {/* Cap */}
                  <ellipse cx="254" cy="148" rx="32" ry="8" fill="#1a237e"/>
                  <rect x="226" y="135" width="56" height="18" fill="#1a237e" rx="4"/>
                  {/* Cap brim */}
                  <ellipse cx="254" cy="153" rx="36" ry="6" fill="#0d1b6e"/>
                  {/* Cap badge */}
                  <ellipse cx="254" cy="141" rx="10" ry="8" fill="#ffd700"/>
                  <text x="254" y="144" textAnchor="middle" fontSize="7" fill="#1a237e" fontWeight="bold">★</text>

                  {/* Left arm raised - holding walkie talkie */}
                  <rect x="188" y="210" width="30" height="14" fill="#1e3a8a" rx="6"/>
                  <rect x="160" y="200" width="30" height="14" fill="#1e3a8a" rx="6"/>
                  <rect x="160" y="195" width="16" height="32" fill="#37474f" rx="3"/>
                  <rect x="163" y="190" width="10" height="6" fill="#455a64" rx="1"/>
                  {/* Walkie talkie antenna */}
                  <rect x="169" y="178" width="3" height="14" fill="#616161" rx="1"/>
                  {/* Right arm - at side */}
                  <rect x="290" y="210" width="30" height="14" fill="#1e3a8a" rx="6"/>
                  <rect x="310" y="210" width="14" height="50" fill="#1e3a8a" rx="6"/>
                  <ellipse cx="317" cy="262" rx="9" ry="10" fill="#d4a373"/>

                  {/* Aya Sir G! sign on pillar */}
                  <rect x="62" y="240" width="36" height="22" fill="#b00020" rx="3"/>
                  <text x="80" y="255" textAnchor="middle" fontSize="6.5" fill="#ffffff" fontWeight="bold">Aya</text>
                  <text x="80" y="262" textAnchor="middle" fontSize="6" fill="#ffffff">Sir G!</text>

                  {/* Sun */}
                  <circle cx="460" cy="60" r="35" fill="#fff9c4" opacity="0.9"/>
                  <circle cx="460" cy="60" r="25" fill="#ffee58"/>
                  {/* Sun rays */}
                  {[0,45,90,135,180,225,270,315].map((angle, i) => (
                    <line key={i}
                      x1={460 + 28 * Math.cos(angle * Math.PI/180)}
                      y1={60 + 28 * Math.sin(angle * Math.PI/180)}
                      x2={460 + 42 * Math.cos(angle * Math.PI/180)}
                      y2={60 + 42 * Math.sin(angle * Math.PI/180)}
                      stroke="#ffee58" strokeWidth="3" strokeLinecap="round"
                    />
                  ))}

                  {/* "On Duty" ribbon */}
                  <rect x="155" y="355" width="210" height="32" fill="#1e3a8a" rx="6" opacity="0.92"/>
                  <text x="260" y="376" textAnchor="middle" fontSize="14" fill="#ffffff" fontWeight="bold" fontFamily="sans-serif">✔ On Duty 24/7</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shared 4 Steps Component */}
      <ServicesSteps />

      {/* Cities Section */}
      <section className="security_guard_cities_sec">
        <div className="container">
          <h2 className="security_guard_section_heading">
            Find Security Guards in Your City
          </h2>
          <div className="security_guard_city_pills">
            <Link
              href={`/compnies?role=handyman&category_id=12${
                cityIds.lahore ? `&city=${cityIds.lahore}` : ""
              }`}
              className="security_guard_city_pill"
            >
              Lahore
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=12${
                cityIds.karachi ? `&city=${cityIds.karachi}` : ""
              }`}
              className="security_guard_city_pill"
            >
              Karachi
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=12${
                cityIds.islamabad ? `&city=${cityIds.islamabad}` : ""
              }`}
              className="security_guard_city_pill"
            >
              Islamabad
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="security_guard_faq_sec">
        <div className="container">
          <h2 className="security_guard_section_heading">
            Frequently Asked Questions
          </h2>
          <div className="security_guard_faq_wrapper">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  How do I hire a security guard or watchman on Aya Sir G!?
                </Accordion.Header>
                <Accordion.Body>
                  Browse verified security guard profiles on Aya Sir G!, check their experience, customer ratings, and availability, then contact them directly to discuss duty hours, location, and monthly salary.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  What types of security guard services are available?
                </Accordion.Header>
                <Accordion.Body>
                  Our security staff covers residential gate guards, commercial building security, night watchmen, factory and warehouse security, armed guards, and event security personnel.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Can I hire a security guard for a residential society or home?
                </Accordion.Header>
                <Accordion.Body>
                  Yes. Many security guards on Aya Sir G! specialize in residential security — guarding gates, monitoring entry/exit, and providing 24/7 watchman services for houses, apartments, and housing societies.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  How much does a security guard cost per month in Pakistan?
                </Accordion.Header>
                <Accordion.Body>
                  Security guard monthly salaries in Pakistan typically range from PKR 25,000 to PKR 50,000 depending on the city, duty hours (day/night), experience, and whether armed or unarmed. Contact guards directly on Aya Sir G! for accurate rates.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  Are the security guards on Aya Sir G! background checked?
                </Accordion.Header>
                <Accordion.Body>
                  Aya Sir G! displays verified profile cards with CNIC status and genuine customer reviews so you can safely recruit trustworthy, reliable security staff for your property.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="security_guard_cta_banner">
        <div className="container">
          <h2 className="security_guard_cta_banner_h2">
            Need Reliable Security? Find Verified Guards Now.
          </h2>
          <Link
            href="/compnies?role=handyman&category_id=12"
            className="security_guard_btn"
          >
            Browse Security Guards &amp; Watchmen
          </Link>
        </div>
      </section>
    </div>
  );
}
