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
import ServiceChooseSection from "@/app/components/services/ServiceChooseSection";
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


  return (
    <div className="laundry_page margin_navbar">
{/* Hero Section */}
      <header className="laundry_hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="laundry_hero_content text-center text-lg-start">
                <h1 className="laundry_hero_h1">
                  Professional Sofa Cleaning Services & Carpet Cleaning — Aya Sir G!
                </h1>
                <p className="laundry_hero_subheading">
                  Looking for verified local cleaners who actually know what they're doing? Get deep steam cleaning, stain removal, and odor elimination done right. Compare profiles, check reviews, and hire directly — no middleman.
                </p>
                <div className="laundry_hero_ctas justify-content-center justify-content-lg-start">
                  <Link
                    href="/compnies/carpet-cleaning-laundry"
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

      {/* Content Block */}
      <section className="laundry_content_block">
        <div className="container">
          <div className="laundry_content_wrapper">
            <h2 className="laundry_section_heading">Sofa and Carpet Cleaning Services with Aya Sir G!</h2>
            <p className="laundry_content_text">
              If you've got kids running around the house, you already know how fast carpets and sofas pick up stains, spills, and general everyday grime. Over time, this makes the whole house feel less fresh — even if you're cleaning regularly. That's usually when people start looking for sofa cleaning services near me, just to get things back to normal.
            </p>
            <p className="laundry_content_text">
              What most people don't realize is that old, neglected furniture — especially sofas and carpets — can actually become a hygiene problem. Dust, bacteria, and trapped odors build up over time and can even affect the air quality inside your home. So getting a proper deep clean done isn't just about looks; it matters for health too.
            </p>
            <p className="laundry_content_text">
              That's where Aya Sir G! comes in. You can find genuine, professional sofa cleaning services and carpet cleaning experts on the platform — and there's no commission involved. You talk to the service provider directly, check their ratings, look at past reviews, and decide for yourself who to hire.
            </p>
            <p className="laundry_content_text">
              Just sign up, browse through verified profiles of sofa and carpet cleaning services specialists, and pick whoever fits your budget and needs. Simple as that.
            </p>
            <div className="mt-4 pt-2">
              <span className="text-muted small">
                Want to check out more? Head over to{" "}
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
                if you need help along the way.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="laundry_services_sec">
        <div className="container">
          <h2 className="laundry_section_heading">Cleaning Services Available</h2>
          <div className="laundry_services_grid">
            {/* Card 1 */}
            <div className="laundry_service_card">
              <div className="laundry_card_icon_wrap">
                <FaSoap />
              </div>
              <h3 className="laundry_card_title">Sofa Deep Cleaning</h3>
              <p className="laundry_card_desc">
                Vacuuming, shampoo scrubbing, and extraction washing for fabric, velvet, and leather sofas to remove dust, dirt, and oil buildup.
              </p>
            </div>
            {/* Card 2 */}
            <div className="laundry_service_card">
              <div className="laundry_card_icon_wrap">
                <FaBroom />
              </div>
              <h3 className="laundry_card_title">Carpet & Rug Washing</h3>
              <p className="laundry_card_desc">
                Steam cleaning and deep extraction wash for wall-to-wall carpets and area rugs to restore color and kill bacteria.
              </p>
            </div>
            {/* Card 3 */}
            <div className="laundry_service_card">
              <div className="laundry_card_icon_wrap">
                <FaWater />
              </div>
              <h3 className="laundry_card_title">Mattress Sanitization</h3>
              <p className="laundry_card_desc">
                Hygienic deep cleaning of single/double mattresses to eliminate dust mites, bedbugs, sweat stains, and allergens.
              </p>
            </div>
            {/* Card 4 */}
            <div className="laundry_service_card">
              <div className="laundry_card_icon_wrap">
                <FaTag />
              </div>
              <h3 className="laundry_card_title">Stain & Odour Removal</h3>
              <p className="laundry_card_desc">
                Targeted chemical treatment for stubborn stains like coffee, ink, oil, or pet urine, combined with deep deodorizing.
              </p>
            </div>
            {/* Card 5 */}
            <div className="laundry_service_card">
              <div className="laundry_card_icon_wrap">
                <FaClock />
              </div>
              <h3 className="laundry_card_title">Dining & Office Chair Cleaning</h3>
              <p className="laundry_card_desc">
                Restoring fabric and cushion foam on office chairs, conference room chairs, dining chairs, and decorative cushions.
              </p>
            </div>
            {/* Card 6 */}
            <div className="laundry_service_card">
              <div className="laundry_card_icon_wrap">
                <FaShirt />
              </div>
              <h3 className="laundry_card_title">Commercial Cleaning</h3>
              <p className="laundry_card_desc">
                Large-scale carpet and upholstery deep cleaning for corporate offices, banks, mosques, and hotels with quick drying solutions.
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
                <span className="red_title">for Sofa Set Cleaning Services & Carpet Cleaners?</span>
              </h2>
              <div className="laundry_trust_points">
                <div className="laundry_trust_point">
                  <div className="laundry_trust_icon_box">
                    <FaUserShield />
                  </div>
                  <div>
                    <h3 className="laundry_trust_point_title">Verified & Rated Professionals</h3>
                    <p className="laundry_trust_point_desc">
                      Every cleaner listed on Aya Sir G! goes through CNIC verification and has genuine customer ratings — so you know exactly who's walking into your home.
                    </p>
                  </div>
                </div>
                <div className="laundry_trust_point">
                  <div className="laundry_trust_icon_box">
                    <FaWater />
                  </div>
                  <div>
                    <h3 className="laundry_trust_point_title">Advanced Equipment & Safe Chemicals</h3>
                    <p className="laundry_trust_point_desc">
                      Our providers come equipped with high-suction vacuum extractors and fabric-safe chemicals that lift dirt without wrecking your upholstery.
                    </p>
                  </div>
                </div>
                <div className="laundry_trust_point">
                  <div className="laundry_trust_icon_box">
                    <FaStar />
                  </div>
                  <div>
                    <h3 className="laundry_trust_point_title">Direct Deals — Zero Commissions</h3>
                    <p className="laundry_trust_point_desc">
                      Talk directly to local providers of sofa and carpet cleaning services, negotiate based on seating or area size, and only pay what you both agree on. No hidden fees, no surprises — just honest sofa cleaning services when you need them.
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

      <ServiceChooseSection slug="carpet-cleaning-laundry" />

      {/* Cities Section */}
      <section className="laundry_cities_sec">
        <div className="container">
          <h2 className="laundry_section_heading">Find Cleaners & Laundry in Your City</h2>
          <div className="laundry_city_pills">
            <Link
              href={`/compnies/carpet-cleaning-laundry${
                cityIds.lahore ? `?city=${cityIds.lahore}` : ""
              }`}
              className="laundry_city_pill"
            >
              Lahore
            </Link>
            <Link
              href={`/compnies/carpet-cleaning-laundry${
                cityIds.karachi ? `?city=${cityIds.karachi}` : ""
              }`}
              className="laundry_city_pill"
            >
              Karachi
            </Link>
            <Link
              href={`/compnies/carpet-cleaning-laundry${
                cityIds.islamabad ? `?city=${cityIds.islamabad}` : ""
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
          <h2 className="laundry_section_heading">Frequently Asked Questions About Sofa Cleaning Services</h2>
          <div className="laundry_faq_wrapper">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>How do I book a sofa or carpet cleaning service on Aya Sir G!?</Accordion.Header>
                <Accordion.Body>
                  Just browse through verified cleaner profiles offering sofa cleaning services on Aya Sir G!, check their ratings, go through customer reviews, and take a look at photos of their past work. Once you find someone you like, message them directly for a quote and set up a time that works for you.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>What cleaning methods do the professionals use?</Accordion.Header>
                <Accordion.Body>
                  Depends on what you need — cleaners here use deep vacuuming, wet shampoo washing, steam extraction, foam cleaning, or dry cleaning, based on your fabric type (velvet, leather, or regular upholstery). It's all part of the standard sofa and carpet cleaning services offered on the platform.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>How long does it take for a sofa or carpet to dry after cleaning?</Accordion.Header>
                <Accordion.Body>
                  Usually somewhere between 3 to 6 hours, depending on the room's ventilation, temperature, and which method was used. If you turn on a fan or the AC afterward, it'll dry even faster.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Can you remove stubborn pet stains and bad odours?</Accordion.Header>
                <Accordion.Body>
                  Yes, definitely. Professionals bring specialized stain removers and deodorizers that handle tough stains — coffee, tea, ink, even pet urine — and get rid of those lingering smells. It's a core part of proper sofa set cleaning services.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Do I need to provide any cleaning machines or chemicals?</Accordion.Header>
                <Accordion.Body>
                  Nope, not at all. The cleaner brings their own vacuum, steam extraction machine, and detergents. All you need to have ready is water and electricity access. That's really it — finding sofa cleaning services near me shouldn't be complicated, and it isn't.
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
            href="/compnies/carpet-cleaning-laundry"
            className="laundry_btn"
          >
            Browse Cleaners
          </Link>
        </div>
      </section>
    </div>
  );
}
