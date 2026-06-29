import React from "react";
import HomeClient from "./HomeClient";

export const metadata = {
  title: "Aya Sir G! | Trusted Blue Collar Jobs & Services in Pakistan",
  description:
    "Find verified maids, drivers, security guards, and plumbers online. Aya Sir G! connects skilled workers with employers across Lahore, Karachi, and Islamabad.",
  alternates: {
    canonical: "https://www.ayasirg.com",
  },
  openGraph: {
    title: "Aya Sir G! | Trusted Blue Collar Jobs & Services in Pakistan",
    description:
      "Find verified maids, drivers, security guards, and plumbers online. Aya Sir G! connects skilled workers with employers across Lahore, Karachi, and Islamabad.",
    url: "https://www.ayasirg.com",
    siteName: "Aya Sir G!",
    images: [
      {
        url: "https://www.ayasirg.com/logo_header.png",
        width: 1200,
        height: 630,
        alt: "Aya Sir G! Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aya Sir G! | Trusted Blue Collar Jobs & Services in Pakistan",
    description:
      "Find verified maids, drivers, security guards, and plumbers online. Aya Sir G! connects skilled workers with employers across Lahore, Karachi, and Islamabad.",
    images: ["https://www.ayasirg.com/logo_header.png"],
  },
};

export default function Home() {
  return <HomeClient />;
}
