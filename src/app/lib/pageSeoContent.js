import { getServiceChooseContent } from "./serviceChooseContent";

const SITE = "Aya Sir G!";

const GENERIC_COMPANIES_INTRO = [
  `${SITE} is Pakistan's trusted platform for hiring verified blue-collar workers and registered companies across Lahore, Karachi, Islamabad, and other major cities. Use the filters to narrow results by city, area, category, gender, age range, verification status, and ratings, then compare profiles and contact a provider directly through the platform.`,
];

const SERVICES_HUB_INTRO = [
  `Explore every service category offered on ${SITE}, Pakistan's dedicated marketplace for blue-collar jobs and skilled home services. From domestic help and drivers to technical trades and facility support, find the right professional for your needs.`,
  "Select a category below to view detailed service information or jump directly to verified listings in your city. Each category page explains what to look for when hiring and how to compare providers using reviews, experience, and verification badges.",
  "Aya Sir G! serves households and businesses across Pakistan with trusted profiles, transparent hiring, and local experts in Lahore, Karachi, Islamabad, and many more cities nationwide.",
];

const SERVICES_HUB_FOOTER = [
  "Each category on this page connects you to a dedicated service guide and a live directory of verified professionals. Open any category to read hiring tips, common service types, and city-wise listings before you contact a provider.",
  "Whether you need domestic staff, facility support, or a skilled tradesperson, comparing profiles on Aya Sir G! helps you hire with confidence. Use filters for city, area, ratings, and verification status to narrow your search quickly.",
];

const LISTING_FOOTER = [
  `Profiles on this page are listed on ${SITE} to help you compare experience, service areas, and customer feedback before hiring. Shortlist providers that match your budget and schedule, then contact them directly through the platform.`,
  "For the best results, filter by your city and neighborhood, check verification status, and read recent reviews. Aya Sir G! supports households and businesses across Pakistan with transparent hiring and trusted blue-collar professionals.",
];

const BLOGS_INTRO = [
  `Welcome to the ${SITE} blog—your resource for practical advice on hiring blue-collar workers, home maintenance, domestic help, and skilled trades across Pakistan.`,
  "Read guides on finding verified electricians, plumbers, drivers, maids, and other professionals; tips for safe hiring; workplace safety; and updates on services available in Lahore, Karachi, Islamabad, and beyond.",
  "Our articles are written to help families and businesses make informed decisions when searching for reliable workers and service providers through a trusted local platform.",
  "Explore category tips, city-specific hiring advice, and platform updates so you can connect with the right professional faster and with greater confidence.",
];

const ECENTER_INTRO = [
  `${SITE} E-Centers are partner registration hubs that help individuals and companies join Pakistan's trusted blue-collar workforce platform.`,
  "Through this form, authorized E-Center staff can register new handymen, service providers, and companies with verified details so clients can discover and hire them with confidence.",
  "Registered professionals gain visibility across major cities, receive profile management support, and connect with employers looking for skilled, dependable workers.",
  "E-Centers play an important role in helping workers who need guidance with profile setup, documentation, and listing their services on a trusted national marketplace.",
  "If you need help using this form or registering a new worker or company, contact the Aya Sir G! support team for step-by-step assistance with profile creation and verification.",
];

const REGISTER_PROVIDER_INTRO = [
  `Create your ${SITE} account to register as an individual service provider or company and reach clients searching for blue-collar professionals across Pakistan.`,
  "Complete the form with accurate contact details and your service category so employers can find you through verified listings, read your profile, and contact you directly.",
  "Whether you offer electrical work, plumbing, driving, domestic help, or another skilled trade, joining Aya Sir G! helps you build credibility with reviews and a professional online presence.",
];

export function getBridgeParagraphs(highlight) {
  const role = String(highlight || "professional").toLowerCase();
  return [
    `On ${SITE}, you can browse verified ${role} profiles across Lahore, Karachi, Islamabad, Faisalabad, Rawalpindi, and other cities in Pakistan. Use location filters and customer ratings to compare professionals before you hire.`,
    `Whether you need support for a one-time job or ongoing assistance, ${SITE} helps you find trusted ${role} experts with clear profiles, genuine reviews, and direct contact options—so you can hire with confidence and peace of mind.`,
  ];
}

export function getListingIntro(categorySlug, categoryName) {
  if (!categorySlug) {
    return { paragraphs: GENERIC_COMPANIES_INTRO };
  }

  const choose = getServiceChooseContent(categorySlug);
  const name = categoryName || choose?.highlight || "Professional";
  const paragraphs = choose?.paragraphs
    ? [...choose.paragraphs]
    : [
        `Find verified ${name} professionals across Pakistan on ${SITE}. Compare profiles, read customer reviews, and contact trusted experts for your home or business needs.`,
        `Use the filters on this page to search by city, area, and ratings. Each listing shows experience details and verification status to help you hire with confidence.`,
      ];

  paragraphs.push(
    `This page lists active ${name} profiles available for hire through ${SITE}. Filter by location to find professionals near you in Lahore, Karachi, Islamabad, or other cities, then contact your preferred provider directly without middlemen or hidden fees.`,
  );

  return { paragraphs };
}

export function getServicesHubIntro() {
  return { paragraphs: SERVICES_HUB_INTRO };
}

export function getServicesHubFooter() {
  return { paragraphs: SERVICES_HUB_FOOTER };
}

export function getListingFooter() {
  return { paragraphs: LISTING_FOOTER };
}

export function getBlogsIntro() {
  return { paragraphs: BLOGS_INTRO };
}

export function getEcenterIntro() {
  return { paragraphs: ECENTER_INTRO };
}

export function getRegisterProviderIntro() {
  return { paragraphs: REGISTER_PROVIDER_INTRO };
}
