"use client";
import React from "react";
import Link from "next/link";
import { FaCar, FaBroom, FaBolt, FaWrench } from "react-icons/fa";
import "./popular_categories.css";

const categoriesData = [
  {
    id: "driver",
    name: "Drivers",
    slug: "driver",
    icon: <FaCar />,
    description: "Reliable drivers for daily commutes, commercial transport, and family trips."
  },
  {
    id: "maid-kamwali",
    name: "Maids",
    slug: "maid-kamwali",
    icon: <FaBroom />,
    description: "Trusted maids for daily home cleaning, sweeping, dusting, and dishwashing."
  },
  {
    id: "electrician",
    name: "Electricians",
    slug: "electrician",
    icon: <FaBolt />,
    description: "Safe electrical wiring setup, short circuit fixes, and appliance repairs."
  },
  {
    id: "plumber",
    name: "Plumbers",
    slug: "plumber",
    icon: <FaWrench />,
    description: "Leakage repairs, pipe fittings, geyser setup, and sanitary installations."
  }
];

export default function PopularCategories() {
  return (
    <section className="popular_categories_section py-5" aria-label="Popular Categories">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section_heading">
            Popular <span className="red_title">Categories</span>
          </h2>
          <p className="pop-categories-subheading text-muted mx-auto mt-2">
            Find the right help for every need. Browse our most requested services.
          </p>
        </div>

        <div className="pop-categories-grid">
          {categoriesData.map((item) => (
            <Link 
              key={item.id} 
              href={`/services/${item.slug}`} 
              className="pop-category-card-link text-decoration-none"
            >
              <div className="pop-category-card p-4 text-center d-flex flex-column align-items-center justify-content-between h-100">
                <div className="pop-category-icon-box mb-3 d-flex align-items-center justify-content-center">
                  {item.icon}
                </div>
                <h3 className="pop-category-card-title mb-2">{item.name}</h3>
                <p className="pop-category-card-desc mb-0">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
