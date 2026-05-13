"use client";

import { useMemo } from "react";

const ORG_NAME = "Aya Sir G!";

function siteOrigin() {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "");
  if (fromEnv) return fromEnv;
  if (typeof window !== "undefined" && window.location?.origin) {
    return window.location.origin;
  }
  return "https://ayasirg.com";
}

/** API uses `attchments` (typo) — first item is featured image URL */
function featuredImageUrl(blog) {
  const raw = blog?.attchments?.[0];
  return typeof raw === "string" && raw.trim() ? raw.trim() : null;
}

function absoluteUrl(url) {
  if (!url || typeof url !== "string") return undefined;
  const u = url.trim();
  if (/^https?:\/\//i.test(u)) return u;
  if (u.startsWith("//")) return `https:${u}`;
  const site = siteOrigin();
  return `${site}${u.startsWith("/") ? u : `/${u}`}`;
}

function plainFromHtml(html, maxLen = 160) {
  if (!html || typeof html !== "string") return "";
  const text = html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (!text) return "";
  if (text.length <= maxLen) return text;
  return `${text.slice(0, maxLen - 1).trim()}…`;
}

function isoPublished(createdAt) {
  if (!createdAt) return undefined;
  const d = new Date(createdAt);
  if (Number.isNaN(d.getTime())) return undefined;
  return d.toISOString();
}

/**
 * JSON-LD BlogPosting for blog detail routes.
 * @param {{ title?: string; description?: string; attchments?: string[]; author_name?: string; author_image?: string; created_at?: string; slug?: string }} blog — API `blog_detail`
 * @param {string} [slug] — route slug (fallback: blog.slug)
 * @param {"blog-detail"|"blogdetails"} [blogPath] — URL segment for canonical @id
 */
export default function BlogPostingJsonLd({ blog, slug, blogPath = "blog-detail" }) {
  const jsonLd = useMemo(() => {
    if (!blog?.title) return null;

    const site = siteOrigin();
    const slugPart = String(slug ?? blog.slug ?? "").trim();
    const pageUrl = `${site}/${blogPath}/${encodeURIComponent(slugPart)}`;

    const image = absoluteUrl(featuredImageUrl(blog));
    const authorName = (blog.author_name && String(blog.author_name).trim()) || "Admin";
    const authorImg = blog.author_image ? absoluteUrl(blog.author_image) : undefined;

    const description =
      plainFromHtml(blog.description || "") || (blog.title ? String(blog.title).slice(0, 160) : "");

    const published = isoPublished(blog.created_at);

    const schema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: blog.title,
      ...(image ? { image } : {}),
      author: {
        "@type": "Person",
        name: authorName,
        ...(authorImg ? { image: authorImg } : {}),
      },
      publisher: {
        "@type": "Organization",
        name: ORG_NAME,
        logo: {
          "@type": "ImageObject",
          url: `${site}/logo_header.png`,
        },
      },
      ...(published ? { datePublished: published } : {}),
      description,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      url: pageUrl,
    };

    return JSON.stringify(schema).replace(/</g, "\\u003c");
  }, [blog, slug, blogPath]);

  if (!jsonLd) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd }}
    />
  );
}
