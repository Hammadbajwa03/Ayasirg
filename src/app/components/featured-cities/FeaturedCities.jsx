"use client";
import React, { useContext, useMemo, useState } from "react";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import { UserContext } from "@/app/userContext";
import "./featured_cities.css";

const priorityNames = [
  "Karachi", "Lahore", "Islamabad", "Faisalabad", "Rawalpindi", 
  "Peshawar", "Multan", "Quetta", "Hyderabad", "Sialkot", 
  "Gujranwala", "Bahawalpur"
];

export default function FeaturedCities() {
  const { cities } = useContext(UserContext);
  const [showAll, setShowAll] = useState(false);

  const sortedCities = useMemo(() => {
    if (!cities || cities.length === 0) {
      // Fallback static list of main cities during API loading
      return priorityNames.map((name, index) => ({
        id: `fallback-${index}`,
        name: name
      }));
    }

    const priorityList = [];
    const remainingList = [];

    cities.forEach((city) => {
      const isPriority = priorityNames.some(
        (pName) => pName.toLowerCase() === city.name.trim().toLowerCase()
      );
      if (isPriority) {
        priorityList.push(city);
      } else {
        remainingList.push(city);
      }
    });

    // Sort priority list to match the priorityNames array order
    priorityList.sort((a, b) => {
      const idxA = priorityNames.findIndex(
        (p) => p.toLowerCase() === a.name.trim().toLowerCase()
      );
      const idxB = priorityNames.findIndex(
        (p) => p.toLowerCase() === b.name.trim().toLowerCase()
      );
      return idxA - idxB;
    });

    // Sort remaining cities alphabetically
    remainingList.sort((a, b) => a.name.localeCompare(b.name));

    return [...priorityList, ...remainingList];
  }, [cities]);

  const visibleCities = useMemo(() => {
    return showAll ? sortedCities : sortedCities.slice(0, 12);
  }, [sortedCities, showAll]);

  const getCityHref = (city) => {
    const name = city.name.trim().toLowerCase();
    if (name === "karachi") return "/services/karachi";
    if (name === "lahore") return "/services/lahore";
    if (name === "islamabad") return "/services/islamabad";
    
    if (String(city.id).startsWith("fallback-")) {
      return `/compnies?role=handyman`;
    }
    return `/compnies?role=handyman&city=${city.id}`;
  };

  return (
    <section className="featured_cities py-5" aria-label="We Serve Across Pakistan">
      <div className="container">
        <h2 className="section_heading text-center mb-5">
          We Serve Across <span className="red_title">Pakistan</span>
        </h2>

        <div className="cities-grid">
          {visibleCities.map((city, index) => (
            <Link 
              key={city.id || index} 
              href={getCityHref(city)} 
              className="city-pill-link text-decoration-none"
            >
              <div className="city-pill d-flex align-items-center justify-content-center gap-2 py-3 px-3">
                <FaMapMarkerAlt className="pin-icon" />
                <span className="city-name text-truncate">{city.name}</span>
              </div>
            </Link>
          ))}
        </div>

        {sortedCities.length > 12 && (
          <div className="text-center mt-5">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn btn-outline-danger view-all-btn px-4 py-2"
              aria-expanded={showAll}
            >
              {showAll ? "Show Less" : "View All Cities"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
