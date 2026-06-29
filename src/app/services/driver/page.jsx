"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import {
  FaCar,
  FaCompass,
  FaIdCard,
  FaUserCheck,
  FaClock,
  FaTag,
  FaUserShield,
  FaStar,
} from "react-icons/fa6";
import { fetchCityIdByName } from "@/app/lib/cityPages";
import ServicesSteps from "@/app/components/services/Services";
import "./driver.css";

export default function DriverPage() {
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
        "name": "How do I hire a driver on Aya Sir G!?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To hire, browse through our verified driver profiles, check their driving experience, license details, customer reviews, and contact them directly to negotiate working hours and monthly salary."
        }
      },
      {
        "@type": "Question",
        "name": "Do you perform background checks on the drivers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Aya Sir G! displays verified badges on profiles of drivers who submit their CNIC, driving license, and police verification reports. We strongly advise users to double-check original documents before finalizing any hire."
        }
      },
      {
        "@type": "Question",
        "name": "Are the drivers capable of driving both manual and automatic cars?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Most drivers on our platform are highly experienced and fully capable of driving manual hatchbacks, automatic sedans, crossovers, SUVs, and luxury passenger vans."
        }
      },
      {
        "@type": "Question",
        "name": "Who covers the driver's food and accommodation on outstation trips?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For outstation overnight journeys, the host or client typically provides the driver's meals and a decent place to sleep, or pays an agreed-upon daily outstation allowance (ta Bhatta) so the driver can arrange it themselves."
        }
      },
      {
        "@type": "Question",
        "name": "Can I hire a driver for just a few hours or a single day?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. You can contact drivers on our platform and hire them for temporary, hourly, daily, or weekend assignments depending on their availability."
        }
      }
    ]
  };

  return (
    <div className="driver_page margin_navbar">
      {/* FAQ Schema Injection for Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <header className="driver_hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="driver_hero_content text-center text-lg-start">
                <h1 className="driver_hero_h1">
                  Professional Personal & Commercial Drivers — Aya Sir G!
                </h1>
                <p className="driver_hero_subheading">
                  Find verified personal drivers, compare chauffeur profiles, read reviews, and hire professional drivers in minutes.
                </p>
                <div className="driver_hero_ctas justify-content-center justify-content-lg-start">
                  <Link
                    href="/compnies?role=handyman&category_id=27"
                    className="driver_btn driver_btn_primary"
                  >
                    Find a Driver
                  </Link>
                  <Link
                    href="/register-yourself"
                    className="driver_btn driver_btn_secondary"
                  >
                    Register as Driver
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0 text-center d-none d-lg-block">
              {/* Driver visual icon */}
              <div
                style={{
                  background: "rgba(4, 120, 87, 0.04)",
                  borderRadius: "50%",
                  width: "280px",
                  height: "280px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  border: "2px dashed rgba(4, 120, 87, 0.15)",
                }}
              >
                <FaCar size={120} className="text-secondary" style={{ color: "#047857" }} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content Block (Word Count: ~150 words) */}
      <section className="driver_content_block">
        <div className="container">
          <div className="driver_content_wrapper">
            <h2 className="driver_section_heading">What Does a Professional Driver Do?</h2>
            <p className="driver_content_text">
              Hiring a professional, reliable personal driver is essential for stress-free commuting, family safety, and smooth outstation travel in Pakistan. Navigating crowded city streets and finding parking spaces in Lahore, Karachi, and Islamabad can be exhausting. On Aya Sir G!, we connect you with highly experienced and verified drivers for hire. Our registered drivers specialize in monthly personal driving, temporary on-call trips, school pick-and-drop duties, corporate executive transit, and long-distance outstation journeys. Each driver's profile details their driving license validity, years of experience, expertise in driving automatic or manual vehicles, and familiarity with local routes. Instead of depending on unverified references, you can easily review driver ratings, read honest client feedback, and contact them directly to negotiate monthly salaries or daily allowances. Hire a trusted driver near me on Aya Sir G! today for a safe, comfortable, and professional ride.
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
      <section className="driver_services_sec">
        <div className="container">
          <h2 className="driver_section_heading">Driving Services Available on Aya Sir G!</h2>
          <div className="driver_services_grid">
            {/* Card 1 */}
            <div className="driver_service_card">
              <div className="driver_card_icon_wrap">
                <FaCar />
              </div>
              <h3 className="driver_card_title">Monthly Personal Driver</h3>
              <p className="driver_card_desc">
                Dedicated full-time or part-time personal drivers to manage your daily office commute, school runs, and family errands.
              </p>
            </div>
            {/* Card 2 */}
            <div className="driver_service_card">
              <div className="driver_card_icon_wrap">
                <FaCompass />
              </div>
              <h3 className="driver_card_title">Outstation & Travel Chauffeur</h3>
              <p className="driver_card_desc">
                Experienced highway drivers for long-distance family tours, inter-city business trips, weekend visits, or weddings.
              </p>
            </div>
            {/* Card 3 */}
            <div className="driver_service_card">
              <div className="driver_card_icon_wrap">
                <FaClock />
              </div>
              <h3 className="driver_card_title">Hourly & Daily On-Call Driver</h3>
              <p className="driver_card_desc">
                Hire a driver on demand for a few hours to run errands, complete grocery shopping, or make comfortable hospital visits.
              </p>
            </div>
            {/* Card 4 */}
            <div className="driver_service_card">
              <div className="driver_card_icon_wrap">
                <FaIdCard />
              </div>
              <h3 className="driver_card_title">School Pick & Drop Duty</h3>
              <p className="driver_card_desc">
                Reliable, punctual drivers dedicated to transporting your children safely to and from schools and tuition centers.
              </p>
            </div>
            {/* Card 5 */}
            <div className="driver_service_card">
              <div className="driver_card_icon_wrap">
                <FaUserCheck />
              </div>
              <h3 className="driver_card_title">Corporate & Executive Transit</h3>
              <p className="driver_card_desc">
                Polite, professional drivers wearing formal attire to manage corporate office pools, guests, and executive cars.
              </p>
            </div>
            {/* Card 6 */}
            <div className="driver_service_card">
              <div className="driver_card_icon_wrap">
                <FaTag />
              </div>
              <h3 className="driver_card_title">Valet & Event Chauffeurs</h3>
              <p className="driver_card_desc">
                Experienced drivers to handle valet parking and guest transport support for corporate events, parties, and weddings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Block Section */}
      <section className="driver_trust_sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 driver_trust_col_text">
              <h2 className="section_heading text-start mb-2">
                Why Choose Aya Sir G! <br />
                <span className="red_title">for Professional Drivers?</span>
              </h2>
              <div className="driver_trust_points">
                <div className="driver_trust_point">
                  <div className="driver_trust_icon_box">
                    <FaUserShield />
                  </div>
                  <div>
                    <h3 className="driver_trust_point_title">Vetted & Licensed Chauffeurs</h3>
                    <p className="driver_trust_point_desc">
                      We showcase verified profiles with valid licenses, checked references, and complete background records.
                    </p>
                  </div>
                </div>
                <div className="driver_trust_point">
                  <div className="driver_trust_icon_box">
                    <FaCar />
                  </div>
                  <div>
                    <h3 className="driver_trust_point_title">Multi-Vehicle Proficiency</h3>
                    <p className="driver_trust_point_desc">
                      Experienced drivers proficient in operating manual hatchbacks, automatic sedans, crossovers, and SUVs.
                    </p>
                  </div>
                </div>
                <div className="driver_trust_point">
                  <div className="driver_trust_icon_box">
                    <FaStar />
                  </div>
                  <div>
                    <h3 className="driver_trust_point_title">Direct Contracting & Negotiations</h3>
                    <p className="driver_trust_point_desc">
                      Directly negotiate salary, working hours, and outstation allowances with the driver without commissions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="driver_trust_img_wrap">
                <Image
                  src="/assets/driver.png"
                  alt="Verified professional personal driver on Aya Sir G!"
                  width={600}
                  height={450}
                  className="driver_trust_img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shared 4 Steps Component */}
      <ServicesSteps />

      {/* Cities Section */}
      <section className="driver_cities_sec">
        <div className="container">
          <h2 className="driver_section_heading">Find Drivers in Your City</h2>
          <div className="driver_city_pills">
            <Link
              href={`/compnies?role=handyman&category_id=27${
                cityIds.lahore ? `&city=${cityIds.lahore}` : ""
              }`}
              className="driver_city_pill"
            >
              Lahore
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=27${
                cityIds.karachi ? `&city=${cityIds.karachi}` : ""
              }`}
              className="driver_city_pill"
            >
              Karachi
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=27${
                cityIds.islamabad ? `&city=${cityIds.islamabad}` : ""
              }`}
              className="driver_city_pill"
            >
              Islamabad
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="driver_faq_sec">
        <div className="container">
          <h2 className="driver_section_heading">Frequently Asked Questions</h2>
          <div className="driver_faq_wrapper">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>How do I hire a driver on Aya Sir G!?</Accordion.Header>
                <Accordion.Body>
                  To hire, browse through our verified driver profiles, check their driving experience, license details, customer reviews, and contact them directly to negotiate working hours and monthly salary.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Do you perform background checks on the drivers?</Accordion.Header>
                <Accordion.Body>
                  Aya Sir G! displays verified badges on profiles of drivers who submit their CNIC, driving license, and police verification reports. We strongly advise users to double-check original documents before finalizing any hire.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Are the drivers capable of driving both manual and automatic cars?</Accordion.Header>
                <Accordion.Body>
                  Yes. Most drivers on our platform are highly experienced and fully capable of driving manual hatchbacks, automatic sedans, crossovers, SUVs, and luxury passenger vans.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Who covers the driver's food and accommodation on outstation trips?</Accordion.Header>
                <Accordion.Body>
                  For outstation overnight journeys, the host or client typically provides the driver's meals and a decent place to sleep, or pays an agreed-upon daily outstation allowance (ta Bhatta) so the driver can arrange it themselves.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Can I hire a driver for just a few hours or a single day?</Accordion.Header>
                <Accordion.Body>
                  Yes. You can contact drivers on our platform and hire them for temporary, hourly, daily, or weekend assignments depending on their availability.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Bold CTA Banner */}
      <section className="driver_cta_banner">
        <div className="container">
          <h2 className="driver_cta_banner_h2">
            Need a Safe, Experienced Driver? Chose Your Driver Now.
          </h2>
          <Link
            href="/compnies?role=handyman&category_id=27"
            className="driver_btn"
          >
            Browse Verified Drivers
          </Link>
        </div>
      </section>
    </div>
  );
}
