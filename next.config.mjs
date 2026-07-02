// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


// // next.config.js
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["admin.ayasirg.com"],
//   },
// };

// export default nextConfig;


// next.config.mjs
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.ayasirg.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },

  compress: true, // enable gzip/brotli compression
  poweredByHeader: false, // remove X-Powered-By header for security

  experimental: {
    scrollRestoration: true,
    inlineCss: true,
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production", // remove console logs in prod
  },

  // Optional headers for better caching of static assets
  async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*.(js|css|svg|jpg|jpeg|png|webp|avif|woff2|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, must-revalidate",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/lahore",
        destination: "/services/lahore",
        permanent: true,
      },
      {
        source: "/karachi",
        destination: "/services/karachi",
        permanent: true,
      },
      {
        source: "/islamabad",
        destination: "/services/islamabad",
        permanent: true,
      },
      {
        source: "/companies",
        destination: "/compnies",
        permanent: true,
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);



// /** @type {import('next').NextConfig} */
// const nextConfig = {
// };

// module.exports = nextConfig;

