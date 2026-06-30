"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";

const testimonialsData = [
  {
    id: 1,
    stars: 5,
    text: "Found a reliable maid within one day. Excellent service and very easy to connect!",
    author: "Ahmed Raza"
  },
  {
    id: 2,
    stars: 5,
    text: "Extremely easy to connect with verified drivers in Lahore. Highly recommended to everyone.",
    author: "Fatima Khan"
  },
  {
    id: 3,
    stars: 5,
    text: "The plumbers on this platform are professional, prompt, and very skilled. Great experience!",
    author: "Muhammad Zubair"
  },
  {
    id: 4,
    stars: 5,
    text: "Best platform to find blue-collar workers in Pakistan. Safe and direct contact is a game-changer.",
    author: "Aisha Bibi"
  },
  {
    id: 5,
    stars: 5,
    text: "Found a security guard for our school quickly. The verification details gave us absolute peace of mind.",
    author: "Zainab Sheikh"
  },
  {
    id: 6,
    stars: 5,
    text: "Very helpful registration process. It bridged the gap directly between workers and customers.",
    author: "Bilal Ahmed"
  }
];

export default function Testimonials() {
  return (
    <section className="testimonials_section py-5" aria-label="Customer Testimonials">
      <div className="container position-relative">
        <h2 className="section_heading text-center mb-5">
          What Our <span className="red_title">Customers Say</span>
        </h2>

        <div className="testimonials-slider-container">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1.2}
            centeredSlides={true}
            loop={true}
            observer={true}
            observeParents={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation={{
              prevEl: ".testimonials-prev-btn",
              nextEl: ".testimonials-next-btn",
            }}
            breakpoints={{
              576: { slidesPerView: 1.5 },
              768: { slidesPerView: 1.8 },
              992: { slidesPerView: 2.2 },
              1200: { slidesPerView: 2.6 }
            }}
            className="testimonials-swiper"
          >
            {testimonialsData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="testimonial-card p-4 text-center d-flex flex-column justify-content-between h-100">
                  <div className="testimonial-stars mb-3">
                    {[...Array(item.stars)].map((_, i) => (
                      <FaStar key={i} className="star-icon" />
                    ))}
                  </div>
                  <p className="testimonial-text mb-4">
                    "{item.text}"
                  </p>
                  <h4 className="testimonial-author mb-0">{item.author}</h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <button 
            className="testimonials-prev-btn" 
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </button>
          <button 
            className="testimonials-next-btn" 
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
