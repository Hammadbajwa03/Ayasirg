import React from "react";
import "./contact-us.css";
import { FaClock, FaEnvelope, FaMap } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import { canonicalUrl } from "@/app/lib/siteUrl";

export const metadata = {
  title: "Contact Aya Sir G! | Get in Touch for Support & Services",
  description:
    "Need help or have questions? Contact Aya Sir G! today. Reach us via phone, email, or visit our Lahore office. We are here to assist you Monday to Saturday.",
  alternates: {
    canonical: canonicalUrl("/contact-us"),
  },
};

export default function page() {
  return (
    <section className="auth_bg contact-us margin_navbar">
      <div className="container">
        <div className="row reverse_sec">
          <div className="col-lg-6 left_div p-3">
            <div className="contact_helpdesk_panel">
              <h1 className="login_heading">Helpdesk Information</h1>
              <label htmlFor="ecenter_email" className="label_auth text-center w-100">
                E-Center Registration
              </label>
              <input
                type="email"
                id="ecenter_email"
                className="input_auth"
                value="ecenter@ayasirg.com"
                readOnly
              />
              <a href="mailto:ecenter@ayasirg.com" className="sign_in">
                Continue
              </a>
              <div className="w-100 text-center d-flex justify-content-center">
                <div className="logo_div mt-3 text-center">
                  <Link href="/" className="text-center">
                    <Image
                      src="/assets/ayasirglogo.png"
                      width={100}
                      height={100}
                      style={{ height: "auto" }}
                      alt="Aya Sir G! logo — go to homepage"
                      className="logo"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 px-lg-4 py-lg-3 px-sm-2 py-sm-2 right_div d-flex justify-content-center align-items-center">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-6 sm_two p-lg-2 p-md-2 p-2">
                <Link href="tel:03098574093" style={{ textDecoration: "none", color: "inherit" }}>
                  <div className="card p-lg-3 p-2 d-flex justify-content-center align-items-center" style={{ cursor: "pointer" }}>
                    <FaPhoneVolume style={{ fontSize: "26px" }} />
                    <h5 className="mt-1">Phone Number</h5>
                    <p className="ps-1">03098574093</p>
                  </div>
                </Link>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 sm_two p-lg-2 p-md-2 p-2">
                <Link href="mailto:help@ayasirg.com" style={{ textDecoration: "none", color: "inherit" }}>
                  <div className="card p-lg-3 p-2 d-flex justify-content-center align-items-center" style={{ cursor: "pointer" }}>
                    <FaEnvelope style={{ fontSize: "26px" }} />
                    <h5 className="mt-1">Email</h5>
                    <p className="ps-1">help@ayasirg.com</p>
                  </div>
                </Link>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 sm_two p-lg-2 p-md-2 p-2">
                <a
                  href="https://www.google.com/maps?q=Aya-Sir-G!+(pvt)+Limited,+15C,+Commercial,+NFC#1,+Lahore,+Pakistan"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div className="card p-lg-3 p-2 d-flex justify-content-center align-items-center">
                    <FaMap style={{ fontSize: "26px" }} />
                    <h5 className="mt-1">Location</h5>
                    <p className="ps-1 text-center">
                      Aya Sir G! (pvt) Limited, 15C, Commercial, NFC#1, Lahore, Pakistan
                    </p>
                  </div>
                </a>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 sm_two p-lg-2 p-md-2 p-2">
                <div className="card p-lg-3 p-2 d-flex justify-content-center align-items-center">
                  <FaClock style={{ fontSize: "26px" }} />
                  <h5 className="mt-1">Working Hours</h5>
                  <div className="ps-1">
                    <p>Monday To Saturday</p>
                    <p>09:00AM To 06:00PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
