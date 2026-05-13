"use client";

import { useContext, useMemo } from "react";
import { UserContext } from "@/app/userContext";
import ServiceJsonLd from "./ServiceJsonLd";

function stripHtml(html) {
  if (!html || typeof html !== "string") return "";
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

/** When listings are filtered by category, emit one `Service` JSON-LD. */
export default function CompaniesServiceJsonLd({ categoryId, queryString }) {
  const { apiCategory2 } = useContext(UserContext);

  const resolved = useMemo(() => {
    if (!categoryId || !Array.isArray(apiCategory2) || !apiCategory2.length) {
      return null;
    }
    const cat = apiCategory2.find((c) => String(c?.id) === String(categoryId));
    if (!cat?.name) return null;
    const name = String(cat.name).trim();
    const fromApi =
      stripHtml(cat.description || "") ||
      (typeof cat.meta_description === "string" && cat.meta_description.trim()) ||
      "";
    const description =
      fromApi ||
      `${name} — Browse verified professionals on Aya Sir G! in Pakistan.`;
    let pageUrl;
    if (typeof window !== "undefined") {
      const base = `${window.location.origin}${window.location.pathname}`;
      pageUrl = queryString ? `${base}?${queryString}` : base;
    }
    return { name, description, pageUrl };
  }, [categoryId, apiCategory2, queryString]);

  if (!resolved) return null;

  return (
    <ServiceJsonLd
      serviceType={resolved.name}
      description={resolved.description}
      url={resolved.pageUrl}
    />
  );
}
