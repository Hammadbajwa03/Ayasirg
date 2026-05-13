"use client";
import React, { useEffect } from "react";

/** Desktop-only AOS: avoids loading/running animation engine on mobile. */
export default function AosWrapper({ children }) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(max-width: 767.98px)").matches) return;

    let cancelled = false;
    Promise.all([import("aos"), import("aos/dist/aos.css")])
      .then(([aosMod]) => {
        if (cancelled) return;
        aosMod.default.init({
          duration: 800,
          once: true,
        });
      })
      .catch(() => {
        /* AOS optional — page works without scroll animations */
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return <>{children}</>;
}
