"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import {
  FaPaintRoller,
  FaHouseChimney,
  FaBrush,
  FaSprayCan,
  FaLayerGroup,
  FaCircleCheck,
  FaUserShield,
  FaStar,
  FaClock,
} from "react-icons/fa6";
import { fetchCityIdByName } from "@/app/lib/cityPages";
import ServicesSteps from "@/app/components/services/Services";
import "./painter.css";

export default function PainterPage() {
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
        "name": "How do I book a painter on Aya Sir G!?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Browse verified painter profiles on Aya Sir G!, check their previous work photos, customer ratings, and reviews, then contact the painter directly to get a quote and book a convenient time."
        }
      },
      {
        "@type": "Question",
        "name": "What types of painting services are available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our painters offer interior wall painting, exterior painting, texture and 3D wall paint, epoxy floor coatings, wood staining and varnishing, ceiling painting, waterproofing paint, and full home or office repainting services."
        }
      },
      {
        "@type": "Question",
        "name": "Do painters supply their own paint and materials?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It depends on the painter. Some painters provide labour only while you purchase the paint, while others offer a complete material-plus-labour package. Discuss clearly before hiring to avoid any misunderstandings."
        }
      },
      {
        "@type": "Question",
        "name": "How much does house painting cost in Pakistan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Painting costs vary by surface area, type of paint (standard, texture, epoxy), and city. Typically, basic interior painting starts around PKR 10–20 per square foot for labour only. Get quotes directly from painters on Aya Sir G! for accurate pricing."
        }
      },
      {
        "@type": "Question",
        "name": "Are the painters on Aya Sir G! background checked?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Aya Sir G! displays profile cards with CNIC verification status and verified customer reviews to help you choose reliable, safe, and professional painters near you."
        }
      }
    ]
  };

  return (
    <div className="painter_page margin_navbar">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <header className="painter_hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="painter_hero_content text-center text-lg-start">
                <h1 className="painter_hero_h1">
                  Professional Painters — Aya Sir G!
                </h1>
                <p className="painter_hero_subheading">
                  Find verified local painters for interior walls, exterior surfaces, texture paint, and epoxy floors. Compare profiles, check portfolios, and hire directly.
                </p>
                <div className="painter_hero_ctas justify-content-center justify-content-lg-start">
                  <Link
                    href="/compnies?role=handyman&category_id=18"
                    className="painter_btn painter_btn_primary"
                  >
                    Find Painters Near Me
                  </Link>
                  <Link
                    href="/register-yourself"
                    className="painter_btn painter_btn_secondary"
                  >
                    Register as Painter
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0 text-center d-none d-lg-block">
              <div
                style={{
                  background: "rgba(234, 88, 12, 0.04)",
                  borderRadius: "50%",
                  width: "280px",
                  height: "280px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  border: "2px dashed rgba(234, 88, 12, 0.15)",
                }}
              >
                <FaPaintRoller size={120} style={{ color: "#ea580c" }} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content Block */}
      <section className="painter_content_block">
        <div className="container">
          <div className="painter_content_wrapper">
            <h2 className="painter_section_heading">Building Pakistan's Blue-Collar Network with Aya Sir G!</h2>
            <p className="painter_content_text">
              Aya Sir G! is not only a platform for household services it is working to build a LinkedIn-style network for Pakistan's blue-collar community.
            </p>
            <p className="painter_content_text">
              In many areas, painters and skilled workers still wait at local chowks every day with their tools, hoping to get daily work. This becomes even more difficult in extreme weather conditions, where summer temperatures can reach up to 50°C and winters can be very harsh.
            </p>
            <p className="painter_content_text">
              To solve this problem, Aya Sir G! is on a mission to digitalize Pakistan's blue-collar workforce and help painters and other skilled workers connect directly with customers across the country.
            </p>
            <p className="painter_content_text">
              On the platform, painters can create profiles, showcase their experience and build credibility through ratings and customer reviews. As their reputation grows, they can also earn better opportunities and charge fair prices based on their skills and performance.
            </p>
            <p className="painter_content_text">
              With Aya Sir G!, skilled workers no longer need to wait at chowks they can connect with customers online and build a stable, respected source of income.
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
      <section className="painter_services_sec">
        <div className="container">
          <h2 className="painter_section_heading">Painting Services Available</h2>
          <div className="painter_services_grid">
            {/* Card 1 */}
            <div className="painter_service_card">
              <div className="painter_card_icon_wrap">
                <FaPaintRoller />
              </div>
              <h3 className="painter_card_title">Interior Wall Painting</h3>
              <p className="painter_card_desc">
                Full room and apartment interior painting with smooth finish emulsion, washable paint, or matte coatings in any colour of your choice.
              </p>
            </div>
            {/* Card 2 */}
            <div className="painter_service_card">
              <div className="painter_card_icon_wrap">
                <FaHouseChimney />
              </div>
              <h3 className="painter_card_title">Exterior &amp; Weather Shield Paint</h3>
              <p className="painter_card_desc">
                Protecting your home's outer walls with durable weather-resistant paints that guard against rain, humidity, heat, and UV damage.
              </p>
            </div>
            {/* Card 3 */}
            <div className="painter_service_card">
              <div className="painter_card_icon_wrap">
                <FaBrush />
              </div>
              <h3 className="painter_card_title">Texture &amp; 3D Wall Paint</h3>
              <p className="painter_card_desc">
                Creative texture finishes, Venetian plaster, sand texture, 3D wall effects, and feature wall designs for luxury bedrooms and living rooms.
              </p>
            </div>
            {/* Card 4 */}
            <div className="painter_service_card">
              <div className="painter_card_icon_wrap">
                <FaLayerGroup />
              </div>
              <h3 className="painter_card_title">Epoxy Floor Coating</h3>
              <p className="painter_card_desc">
                Industrial-grade epoxy floor paint for garages, factories, showrooms, and kitchens — durable, glossy, and easy to clean surfaces.
              </p>
            </div>
            {/* Card 5 */}
            <div className="painter_service_card">
              <div className="painter_card_icon_wrap">
                <FaSprayCan />
              </div>
              <h3 className="painter_card_title">Wood Staining &amp; Varnishing</h3>
              <p className="painter_card_desc">
                Staining, polishing, and varnishing doors, window frames, wooden furniture, and cabinets to preserve and enhance natural wood beauty.
              </p>
            </div>
            {/* Card 6 */}
            <div className="painter_service_card">
              <div className="painter_card_icon_wrap">
                <FaCircleCheck />
              </div>
              <h3 className="painter_card_title">Office &amp; Commercial Painting</h3>
              <p className="painter_card_desc">
                Repainting corporate offices, retail shops, and commercial spaces with minimal disruption, professional finish, and quick turnaround.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Block */}
      <section className="painter_trust_sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 painter_trust_col_text">
              <h2 className="section_heading text-start mb-2">
                Why Choose Aya Sir G! <br />
                <span className="red_title">for Painters?</span>
              </h2>
              <div className="painter_trust_points">
                <div className="painter_trust_point">
                  <div className="painter_trust_icon_box">
                    <FaUserShield />
                  </div>
                  <div>
                    <h3 className="painter_trust_point_title">Verified Painter Profiles</h3>
                    <p className="painter_trust_point_desc">
                      Every painter on Aya Sir G! has a CNIC-verified profile with real customer ratings and work photos so you know exactly who you're hiring.
                    </p>
                  </div>
                </div>
                <div className="painter_trust_point">
                  <div className="painter_trust_icon_box">
                    <FaClock />
                  </div>
                  <div>
                    <h3 className="painter_trust_point_title">On-Time &amp; Neat Work</h3>
                    <p className="painter_trust_point_desc">
                      Hire painters who complete jobs on schedule with clean masking, proper surface prep, and minimal mess left behind.
                    </p>
                  </div>
                </div>
                <div className="painter_trust_point">
                  <div className="painter_trust_icon_box">
                    <FaStar />
                  </div>
                  <div>
                    <h3 className="painter_trust_point_title">Direct Deals — No Commission</h3>
                    <p className="painter_trust_point_desc">
                      Negotiate pricing directly with the painter. Get fair per-square-foot rates or room-based quotes without agency mark-ups.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="painter_trust_img_wrap">
                <Image
                  src="/assets/painter.png"
                  alt="Verified professional painter at work on Aya Sir G!"
                  width={600}
                  height={450}
                  className="painter_trust_img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shared 4 Steps Component */}
      <ServicesSteps />

      {/* Cities Section */}
      <section className="painter_cities_sec">
        <div className="container">
          <h2 className="painter_section_heading">Find Painters in Your City</h2>
          <div className="painter_city_pills">
            <Link
              href={`/compnies?role=handyman&category_id=18${
                cityIds.lahore ? `&city=${cityIds.lahore}` : ""
              }`}
              className="painter_city_pill"
            >
              Lahore
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=18${
                cityIds.karachi ? `&city=${cityIds.karachi}` : ""
              }`}
              className="painter_city_pill"
            >
              Karachi
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=18${
                cityIds.islamabad ? `&city=${cityIds.islamabad}` : ""
              }`}
              className="painter_city_pill"
            >
              Islamabad
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="painter_faq_sec">
        <div className="container">
          <h2 className="painter_section_heading">Frequently Asked Questions</h2>
          <div className="painter_faq_wrapper">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>How do I book a painter on Aya Sir G!?</Accordion.Header>
                <Accordion.Body>
                  Browse verified painter profiles on Aya Sir G!, check their previous work photos, customer ratings, and reviews, then contact the painter directly to get a quote and book a convenient time.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>What types of painting services are available?</Accordion.Header>
                <Accordion.Body>
                  Our painters offer interior wall painting, exterior painting, texture and 3D wall paint, epoxy floor coatings, wood staining and varnishing, ceiling painting, waterproofing paint, and full home or office repainting services.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Do painters supply their own paint and materials?</Accordion.Header>
                <Accordion.Body>
                  It depends on the painter. Some painters provide labour only while you purchase the paint, while others offer a complete material-plus-labour package. Discuss clearly before hiring to avoid any misunderstandings.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>How much does house painting cost in Pakistan?</Accordion.Header>
                <Accordion.Body>
                  Painting costs vary by surface area, type of paint (standard, texture, epoxy), and city. Typically, basic interior painting starts around PKR 10–20 per square foot for labour only. Get quotes directly from painters on Aya Sir G! for accurate pricing.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Are the painters on Aya Sir G! background checked?</Accordion.Header>
                <Accordion.Body>
                  Aya Sir G! displays profile cards with CNIC verification status and verified customer reviews to help you choose reliable, safe, and professional painters near you.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="painter_cta_banner">
        <div className="container">
          <h2 className="painter_cta_banner_h2">
            Ready to Transform Your Walls? Find Expert Painters Now.
          </h2>
          <Link
            href="/compnies?role=handyman&category_id=18"
            className="painter_btn"
          >
            Browse Painters
          </Link>
        </div>
      </section>
    </div>
  );
}
