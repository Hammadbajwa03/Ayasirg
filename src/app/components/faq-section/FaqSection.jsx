"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import "./faq_section.css";

const faqData = [
  {
    question: "How does Aya Sir G! work?",
    answer: "Aya Sir G! is Pakistan's trusted platform connecting you directly with verified blue-collar workers (maids, drivers, plumbers, electricians, etc.). You search by category and city, view verified profiles with ratings and experience, and contact providers directly to hire them."
  },
  {
    question: "Is there any booking fee or commission?",
    answer: "No, Aya Sir G! does not charge any booking fees or commission from customers. You can browse, compare, and connect with service providers completely free of charge. You negotiate and pay the service provider directly."
  },
  {
    question: "Are the service providers verified?",
    answer: "Yes, trust and safety are our top priorities. We verify service providers' identities (using CNIC and background checks) before listing them on our platform to ensure a safe and secure experience for both households and businesses."
  },
  {
    question: "Which cities are these services available in?",
    answer: "We offer coverage across major cities in Pakistan including Lahore, Karachi, Islamabad, Faisalabad, Rawalpindi, Peshawar, Multan, and more. You can easily filter search results by your city and local neighborhood."
  },
  {
    question: "How can I register as a worker or company?",
    answer: "You can register easily by clicking the 'Create Your Profile' or 'Register Yourself' buttons, entering your phone number, and filling in your details. If you need assistance, you can visit a local E-center or contact our support team directly at 0309-8574093."
  }
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq_section py-5" aria-label="Frequently Asked Questions">
      <div className="container">
        <h2 className="section_heading text-center mb-2">
          Frequently Asked <span className="red_title">Questions</span>
        </h2>
        <p className="section_subheading text-center text-muted mb-5">
          Everything you need to know about our services and booking process.
        </p>

        <div className="faq-accordion-container mx-auto">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                key={index} 
                className={`faq-item mb-3 ${isOpen ? "active" : ""}`}
              >
                <button
                  className="faq-question-btn w-100 d-flex justify-content-between align-items-center py-4 px-4 text-start border-0 bg-transparent"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span className="faq-question-text">{item.question}</span>
                  <FaChevronDown className="faq-chevron" />
                </button>
                
                <div
                  id={`faq-answer-${index}`}
                  className="faq-answer-wrapper"
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  style={{
                    maxHeight: isOpen ? "200px" : "0px",
                    opacity: isOpen ? 1 : 0
                  }}
                >
                  <div className="faq-answer-content px-4 pb-4">
                    <p className="mb-0">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-5">
          <Link href="/faq" className="btn btn-outline-danger view-all-faq-btn px-4 py-2 text-decoration-none">
            View All FAQs
          </Link>
        </div>
      </div>
    </section>
  );
}
