"use client";
import React from "react";
import { 
  FaUserCheck, 
  FaClock, 
  FaTags, 
  FaMapMarkedAlt, 
  FaGraduationCap, 
  FaThumbsUp, 
  FaHeadphones, 
  FaUsers 
} from "react-icons/fa";

const reasonsData = [
  {
    id: 1,
    icon: <FaUserCheck />,
    title: "Verified Workers",
    description: "CNIC and background-checked workers so you can trust who enters your home or office."
  },
  {
    id: 2,
    icon: <FaClock />,
    title: "Quick Booking",
    description: "Connect and hire skilled professionals in just a few clicks through our platform."
  },
  {
    id: 3,
    icon: <FaTags />,
    title: "Transparent Pricing",
    description: "Affordable rates agreed directly with the provider with absolutely zero hidden charges."
  },
  {
    id: 4,
    icon: <FaMapMarkedAlt />,
    title: "Wide Coverage",
    description: "Access a wide network of skilled professionals across all major cities of Pakistan."
  },
  {
    id: 5,
    icon: <FaGraduationCap />,
    title: "Trained Professionals",
    description: "Experienced staff specialized in their respective fields to ensure high-quality output."
  },
  {
    id: 6,
    icon: <FaThumbsUp />,
    title: "Satisfaction Guaranteed",
    description: "Enjoy flexible hiring, easy schedule adjustments, and customer-first services."
  },
  {
    id: 7,
    icon: <FaHeadphones />,
    title: "24/7 Customer Support",
    description: "Our dedicated support helpline is always active to assist you with any concerns."
  },
  {
    id: 8,
    icon: <FaUsers />,
    title: "Trusted by Thousands",
    description: "The preferred choice of Pakistani families and businesses for daily service needs."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="why_choose_section py-5" aria-label="Why Choose Aya Sir G?">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section_heading">
            Why Choose <span className="red_title">Aya Sir G?</span>
          </h2>
          <p className="why-choose-subheading text-muted mx-auto mt-2">
            We bridge the gap between quality service seekers and verified, reliable professionals in Pakistan.
          </p>
        </div>

        <div className="reasons-grid">
          {reasonsData.map((item) => (
            <div key={item.id} className="reason-card p-4 d-flex flex-column align-items-start">
              <div className="reason-icon-box mb-3 d-flex align-items-center justify-content-center">
                {item.icon}
              </div>
              <h3 className="reason-card-title mb-2">{item.title}</h3>
              <p className="reason-card-desc mb-0">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
