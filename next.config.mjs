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
    domains: ["admin.ayasirg.com", "images.unsplash.com"],
    formats: ["image/avif", "image/webp"], // ⚡ modern formats for smaller size
    // dangerouslyAllowSVG: false,
  },

  compress: true, // enable gzip/brotli compression
  poweredByHeader: false, // remove X-Powered-By header for security

  experimental: {
    scrollRestoration: true,
    // modern: true
  },


  compiler: {
    removeConsole: process.env.NODE_ENV === "production", // remove console logs in prod
    // removeConsole: false,
  },

  // Optional headers for better caching
  async headers() {
    return [
      {
        source: "/(.*).(js|css|svg|jpg|jpeg|png|webp|avif|woff2)$",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);



// /** @type {import('next').NextConfig} */
// const nextConfig = {
// };

// module.exports = nextConfig;

