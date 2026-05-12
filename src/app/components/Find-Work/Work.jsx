import React from "react";
import "./work.css";
import Image from "next/image";

export default function Work() {
  return (
    <section className="work mt-5 mb-5">
      <div className="container">
        <div className="row mb-3">
          <div className="col-lg-6">
            <div className="right_div" data-aos="fade-right">
              <h2 className="section_heading mb-1">
                The Most Trusted Way to Find  <br /><span className="red_title">Blue Collar Jobs in Pakistan</span>
              </h2>
              <div className="col_1 mt-lg-5 mt-3">
                <h3 className="heading">Find Trusted Professionals</h3>
                <p>
                  Discover verified and skilled workers for all types of <b>blue collar jobs</b> in Pakistan through Aya Sir G!. From home repairs to personal help, we connect you with the right experts easily.
                </p>
              </div>
              <div className="col_1 mt-lg-5 mt-4">
                <h3 className="heading">Hire with Confidence</h3>
                <p>
                  Choose the best people from the biggest market of <b>blue collar jobs</b>. Check worker profiles, read real reviews, and hire someone you can trust based on their experience and ratings.
                </p>
              </div>
              <div className="col_1 mt-lg-5 mt-4">
                <h3 className="heading">Reliable & Efficient Services</h3>
                <p>
                  Get quality services delivered on time. From domestic help to technical repairs, Aya Sir G! ensures reliable and efficient solutions tailored to your needs.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 img_col mt-lg-0 mt-3" data-aos="fade-bottom">
            <Image src="/assets/staffs.png" width={200} height={200} alt="Image Blue collar" />
          </div>
        </div>
      </div>
    </section>
  );
}
