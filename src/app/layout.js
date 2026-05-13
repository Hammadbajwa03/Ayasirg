import { Poppins } from "next/font/google";
import AosWrapper from "./components/AosWrapper";
import SiteChrome from "./SiteChrome";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserProvider } from "./userContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Script from "next/script";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata = {
  title: "Aya Sir G!",
  description: "Aya Sir G! The official site.",
  verification: {
    google: "AmPMtQzaUe0ZihZM-3LXhAXMke8fDlmEeBIHcVzUtdY",
  },
  icons: {
    icon: "/logo_header.png",
    apple: "/logo_header.png",
  },
  openGraph: {
    title: "Aya Sir G!",
    description: "Aya Sir G! The official site.",
    url: "https://ayasirg.com",
    siteName: "Aya Sir G!",
    images: [
      {
        url: "https://ayasirg.com/logo_header.png",
        width: 1200,
        height: 630,
        alt: "Aya Sir G Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aya Sir G!",
    description: "Aya Sir G! The official site.",
    images: ["https://ayasirg.com/logo_header.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head>
        <link rel="icon" type="image/png" href="/logo_header.png" />
        <link rel="apple-touch-icon" href="/logo_header.png" />

        <meta property="og:title" content="Aya Sir G!" />
        <meta property="og:description" content="Aya Sir G! The official site." />
        <meta property="og:image" content="https://ayasirg.com/logo_header.png" />
        <meta property="og:url" content="https://ayasirg.com/" />
        <meta property="og:type" content="website" />
      </head> */}
      {/* GOOGLE ANALYTICS */}
      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </>
      )}
      <body className={poppins.variable}>
        <UserProvider>
          <AosWrapper>
            <div id="app-content">
              <SiteChrome position="top" />
              {children}
              <SiteChrome position="bottom" />
            </div>
            <div id="noted-modal-root" />
            <ToastContainer />
          </AosWrapper>
        </UserProvider>
      </body>
    </html>
  );
}

