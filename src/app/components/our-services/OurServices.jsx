"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const servicesData = [
  {
    id: "44",
    name: "AC Technician",
    slug: "ac-technician",
    image: "/assets/ac-technician.png",
    description: "Professional installation, gas refilling, filter cleaning, and repairing of all AC types."
  },
  {
    id: "56",
    name: "Automotive Mechanic",
    slug: "automotive-mechanic",
    image: "/assets/automotive-mechanic.png",
    description: "On-demand vehicle diagnostics, tuning, engine repairs, and general auto maintenance."
  },
  {
    id: "19",
    name: "Babysitter & Nanny",
    slug: "babysitter-nanny",
    image: "/assets/babysitter-nanny.png",
    description: "Experienced, nurturing child care professionals for babysitting and full-time nanny needs."
  },
  {
    id: "22",
    name: "Bawarchi / Cook",
    slug: "bawarchi-cook",
    image: "/assets/bawarchi-cook.png",
    description: "Verified cooks specializing in Pakistani, continental, and daily home-cooked meal preparation."
  },
  {
    id: "67",
    name: "Beautician",
    slug: "beautician",
    image: "/assets/beautician.png",
    description: "Professional makeup, bridal styling, skin care, facials, and grooming services at home."
  },
  {
    id: "45",
    name: "Salon Worker",
    slug: "salon-worker",
    image: "/assets/salon-worker.png",
    description: "Skilled hair stylists, barbers, and salon technicians for men and women's grooming."
  },
  {
    id: "51",
    name: "Blinds, Curtains & Wallpapers",
    slug: "blinds-curtains-wallpapers",
    image: "/assets/blinds-curtains-wallpapers.png",
    description: "Custom curtain stitching, blinds installation, and modern wallpaper fitting for homes."
  },
  {
    id: "66",
    name: "Caretaker",
    slug: "caretaker",
    image: "/assets/caretaker.png",
    description: "Compassionate caretakers for elderly assistance, patient monitoring, and home care."
  },
  {
    id: "26",
    name: "Carpenter & Woodworker",
    slug: "carpenter-woodworker",
    image: "/assets/carpenter-woodworker.png",
    description: "Custom furniture design, cabinet installation, door fitting, and wooden repair works."
  },
  {
    id: "55",
    name: "Carpet Cleaning & Laundry",
    slug: "carpet-cleaning-laundry",
    image: "/assets/carpet-cleaning-laundry.png",
    description: "Deep carpet washing, steam cleaning, stain removal, and professional laundry services."
  },
  {
    id: "11",
    name: "CCTV & Fence Installer",
    slug: "cctv-fence-installer",
    image: "/assets/cctv-fence-installer.png",
    description: "Secure security camera setups, network configuration, and protective fence wire installation."
  },
  {
    id: "35",
    name: "Ceiling Work",
    slug: "ceiling-work",
    image: "/assets/ceiling-work.png",
    description: "Modern gypsum board false ceilings, artistic designs, and panel installations."
  },
  {
    id: "27",
    name: "Driver",
    slug: "driver",
    image: "/assets/driver.png",
    description: "Verified personal, commercial, and heavy vehicle drivers for short or long-term hire."
  },
  {
    id: "25",
    name: "Electrician",
    slug: "electrician",
    image: "/assets/electrician.png",
    description: "Safe wiring setup, short circuit fixes, fan installations, and electrical appliance repairs."
  },
  {
    id: "53",
    name: "Fast Food Crew",
    slug: "fast-food-crew",
    image: "/assets/fast-food-crew.png",
    description: "Trained cashiers, kitchen helpers, and service staff for restaurants and cafes."
  },
  {
    id: "20",
    name: "Gardener (Mali)",
    slug: "gardener-mali",
    image: "/assets/gardener-mali.png",
    description: "Professional lawn trimming, plant pruning, weeding, and seasonal gardening maintenance."
  },
  {
    id: "65",
    name: "Housekeeping",
    slug: "housekeeping",
    image: "/assets/housekeeping.png",
    description: "Thorough deep cleaning of rooms, kitchens, bathrooms, and commercial premises."
  },
  {
    id: "13",
    name: "Jamadar & Sanitary Worker",
    slug: "jamadar-sanitary-worker",
    image: "/assets/jamadar-sanitary-worker.png",
    description: "Reliable sewage clearing, gutter cleaning, and commercial garbage management."
  },
  {
    id: "57",
    name: "Key Maker",
    slug: "key-maker",
    image: "/assets/key-maker.png",
    description: "Quick duplication of home keys, duplicate car keys, and emergency lock opening."
  },
  {
    id: "47",
    name: "Maid (Kamwali)",
    slug: "maid-kamwali",
    image: "/assets/maid-kamwali.png",
    description: "Trusted maids for daily sweeping, dusting, dishwashing, and complete home care."
  },
  {
    id: "48",
    name: "Mason & Helper",
    slug: "mason-helper",
    image: "/assets/mason-helper.png",
    description: "Professional bricklaying, plastering, marble fixing, and structural home renovations."
  },
  {
    id: "52",
    name: "Office Boy & Factory Workers",
    slug: "office-boy-factory-workers",
    image: "/assets/office-boy.png",
    description: "Punctual office assistance, tea/coffee service, file handling, and factory helpers."
  },
  {
    id: "18",
    name: "Painter",
    slug: "painter",
    image: "/assets/painter.png",
    description: "High-quality interior/exterior wall painting, wall putty coating, and color consultancy."
  },
  {
    id: "50",
    name: "Pest Control & Termite Treatment",
    slug: "pest-control-termite-treatment",
    image: "/assets/pest-control.png",
    description: "Eco-friendly spray treatment for termites, cockroaches, bedbugs, and garden pests."
  },
  {
    id: "36",
    name: "Plumber",
    slug: "plumber",
    image: "/assets/plumber.png",
    description: "Leakage repair, pipe fittings, geyser installation, and bathroom sanitary fixtures."
  },
  {
    id: "12",
    name: "Security Guard & Watchman",
    slug: "security-guard-watchman",
    image: "/assets/security-guard.png",
    description: "Trained, alert security guards and watchmen for homes, shops, and corporate offices."
  },
  {
    id: "49",
    name: "Sofa & Carpet Cleaner",
    slug: "sofa-carpet-cleaner",
    image: "/assets/sofa-carpet.png",
    description: "Advanced vacuum extraction, sofa shampooing, leather polishing, and dry cleaning."
  },
  {
    id: "32",
    name: "Solar Technician",
    slug: "solar-technician",
    image: "/assets/solar-technician.png",
    description: "Solar panel mounting, inverter setup, battery wiring, and seasonal cleaning."
  },
  {
    id: "46",
    name: "Sweeper",
    slug: "sweeper",
    image: "/assets/sweeper.png",
    description: "Daily streets, yard, school, and building lobby sweeping and cleaning services."
  },
  {
    id: "54",
    name: "Tyre Specialist",
    slug: "tyre-specialist",
    image: "/assets/tyre-specialist.png",
    description: "Tyre puncture repair, wheel balancing, tyre rotation, and new tyre fitting."
  },
  {
    id: "58",
    name: "UPS & Generator Technician",
    slug: "ups-generator-technician",
    image: "/assets/ups-generator.png",
    description: "UPS board repairs, battery replacements, generator tuning, and wiring installation."
  },
  {
    id: "37",
    name: "Welding Worker",
    slug: "welding-worker",
    image: "/assets/welding-worker.png",
    description: "Iron gate fabrication, window grille welding, railing installation, and steel repairs."
  }
];

export default function OurServices() {
  return (
    <section className="our_services py-5" aria-label="Our Services">
      <div className="container position-relative">
        <h2 className="section_heading text-center mb-5">
          Our <span className="red_title">Services</span>
        </h2>
        
        <div className="swiper-container-wrapper">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={4}
            observer={true}
            observeParents={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true, el: ".services-swiper-pagination" }}
            navigation={{
              prevEl: ".services-swiper-prev",
              nextEl: ".services-swiper-next",
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1200: { slidesPerView: 4 }
            }}
            className="services-swiper"
          >
            {servicesData.map((service) => (
              <SwiperSlide key={service.id}>
                <Link href={`/services/${service.slug}`} className="service-card-link text-decoration-none">
                  <div className="service-card p-4 text-center d-flex flex-column align-items-center justify-content-between">
                    <div className="service-icon-wrapper mb-3">
                      <Image 
                        src={service.image} 
                        alt={service.name} 
                        width={70} 
                        height={70} 
                        className="service-icon-img"
                        unoptimized
                      />
                    </div>
                    <h3 className="service-card-title mb-2">{service.name}</h3>
                    <p className="service-card-desc mb-0">{service.description}</p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation buttons */}
          <button 
            className="services-swiper-prev" 
            aria-label="Previous service slide"
          >
            <FaChevronLeft />
          </button>
          <button 
            className="services-swiper-next" 
            aria-label="Next service slide"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Pagination indicators */}
        <div className="services-swiper-pagination text-center mt-4"></div>
      </div>
    </section>
  );
}
