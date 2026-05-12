"use client";
import React from "react";
import "./our_mission.css";
import Button from "react-bootstrap/Button";
import { FaArrowRight } from "react-icons/fa6";

export default function OurMission() {
  return (
    <section className="our_mission mb-5">
      <div className="container">
        <div className="row mt-3">
          <div className="left_div col-lg-5 ">
            <h2 className="section_heading">
              Our <span className="red_title">Mission</span>
            </h2>
            <p id="para">
              <p className="mb-2">Welcome to Aya Sir G!</p>
              At Aya Sir G!, we are here to help people find <b>blue collar jobs</b> in Pakistan. We support hardworking and honest workers who want to grow. We believe that "Allah helps those who help themselves," so we give you the platform to start a better life.
            </p>
            <p id="para" className="my-2">We know that Pakistan has a very talented workforce. Many families and businesses need reliable help, but workers often find it hard to connect with them. We are fixing this by bringing <b>blue collar jobs</b> online, making it easy and safe for everyone to hire or get hired.</p>
            {/* <Button className="my-3" variant="outline-danger">
              Hire an Employee <FaArrowRight />
            </Button> */}
          </div>
          <div className="right_div d-flex gap-4 col-lg-7 mt-5">
            <div className="normal_div d-flex flex-column gap-4">
              <div
                className="Card text-center d-flex flex-column justify-content-center "
                data-aos="fade-right"
              >
                <h1 className="fw-bold">
                  5K <span className="pluse_icon">+</span>
                </h1>
                <p id="details">Jobs Posted</p>
              </div>
              <div
                className="Card text-center d-flex flex-column justify-content-center "
                data-aos="fade-up"
              >
                <h1 className="fw-bold">
                  80 <span className="pluse_icon">+</span>
                </h1>
                <p id="details">Employers</p>
              </div>
            </div>
            <div className="upper_div d-flex flex-column gap-4">
              <div
                className="Card text-center d-flex flex-column justify-content-center "
                data-aos="fade-down"
              >
                <h1 className="fw-bold">
                  200 <span className="pluse_icon">+</span>
                </h1>
                <p id="details">Happy Customers</p>
              </div>
              <div
                className="Card text-center d-flex flex-column justify-content-center "
                data-aos="fade-up"
              >
                <h1 className="fw-bold">
                  8K<span className="pluse_icon">+</span>
                </h1>
                <p id="details">Employees</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
