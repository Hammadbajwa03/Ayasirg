import React from "react";

export default function HomeJsonLd() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Aya Sir G!",
    "url": "https://www.ayasirg.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.ayasirg.com/compnies?category_id={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Aya Sir G! Blue Collar Jobs & Home Services",
    "serviceType": "Blue Collar Jobs & Home Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Aya Sir G!",
      "image": "https://www.ayasirg.com/logo_header.png",
      "telephone": "+92-309-8574093",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lahore",
        "addressRegion": "Punjab",
        "addressCountry": "PK"
      },
      "url": "https://www.ayasirg.com"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Lahore",
        "sameAs": "https://en.wikipedia.org/wiki/Lahore"
      },
      {
        "@type": "City",
        "name": "Karachi",
        "sameAs": "https://en.wikipedia.org/wiki/Karachi"
      },
      {
        "@type": "City",
        "name": "Islamabad",
        "sameAs": "https://en.wikipedia.org/wiki/Islamabad"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does Aya Sir G! work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Aya Sir G! is Pakistan's trusted platform connecting you directly with verified blue-collar workers (maids, drivers, plumbers, electricians, etc.). You search by category and city, view verified profiles with ratings and experience, and contact providers directly to hire them."
        }
      },
      {
        "@type": "Question",
        "name": "Is there any booking fee or commission?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, Aya Sir G! does not charge any booking fees or commission from customers. You can browse, compare, and connect with service providers completely free of charge. You negotiate and pay the service provider directly."
        }
      },
      {
        "@type": "Question",
        "name": "Are the service providers verified?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, trust and safety are our top priorities. We verify service providers' identities (using CNIC and background checks) before listing them on our platform to ensure a safe and secure experience for both households and businesses."
        }
      },
      {
        "@type": "Question",
        "name": "Which cities are these services available in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer coverage across major cities in Pakistan including Lahore, Karachi, Islamabad, Faisalabad, Rawalpindi, Peshawar, Multan, and more. You can easily filter search results by your city and local neighborhood."
        }
      },
      {
        "@type": "Question",
        "name": "How can I register as a worker or company?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can register easily by clicking the 'Create Your Profile' or 'Register Yourself' buttons, entering your phone number, and filling in your details. If you need assistance, you can visit a local E-center or contact our support team directly at 0309-8574093."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
