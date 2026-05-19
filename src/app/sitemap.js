/**
 * Blog list: every `/sitemap.xml` request hits the API (no ISR cache) so new posts show on refresh.
 * Higher load on `blog-list` if bots crawl often — acceptable if your traffic/API allow it.
 */
/** Run sitemap at request time (not frozen at build). */
export const dynamic = "force-dynamic";

function trimTrailingSlash(url) {
  return url.replace(/\/+$/, "");
}

function absoluteUrl(siteOrigin, pathname) {
  const origin = trimTrailingSlash(siteOrigin);
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${origin}${path}`;
}

async function fetchJson(url, revalidateSeconds = 3600) {
  const res = await fetch(url, {
    next: { revalidate: revalidateSeconds },
    headers: { Accept: "application/json" },
  });
  if (!res.ok) {
    throw new Error(`GET ${url} failed: ${res.status}`);
  }
  return res.json();
}

async function fetchBlogListPage(apiBase, page) {
  const url = new URL(`${apiBase}/api/blog-list`);
  url.searchParams.set("page", String(page));

  const res = await fetch(url.toString(), {
    cache: "no-store",
    headers: { Accept: "application/json" },
  });
  if (!res.ok) {
    throw new Error(`GET ${url} failed: ${res.status}`);
  }
  return res.json();
}

async function collectAllBlogEntries(apiBase, siteOrigin) {
  const entries = [];
  let page = 1;
  let totalPages = 1;

  do {
    const result = await fetchBlogListPage(apiBase, page);
    const rows = Array.isArray(result.data) ? result.data : [];
    const pagination = result.pagination || {};

    for (const row of rows) {
      const slug = row?.slug;
      if (!slug || typeof slug !== "string") continue;
      const path = `/blog-detail/${encodeURIComponent(slug)}`;
      const updated = row?.updated_at || row?.created_at;
      entries.push({
        url: absoluteUrl(siteOrigin, path),
        lastModified: updated ? new Date(updated) : undefined,
        changeFrequency: "always",
        priority: 0.7,
      });
    }

    totalPages = Number(pagination.total_pages) || 1;
    page += 1;
  } while (page <= totalPages);

  return entries;
}

// async function collectUserEntries(apiBase, siteOrigin, role, pathPrefix) {
//   const entries = [];
//   const seen = new Set();
//   let page = 1;
//   let totalPages = 1;

//   do {
//     const qs = new URLSearchParams({
//       role,
//       page: String(page),
//       per_page: "500",
//     });
//     const result = await fetchJson(`${apiBase}/api/users/new-filter?${qs}`);
//     const rows = Array.isArray(result.data) ? result.data : [];
//     const meta = result.meta || {};
//     const lastPage = Number(meta.last_page);
//     const totalFromMeta = Number(meta.total_pages);
//     totalPages =
//       (Number.isFinite(lastPage) && lastPage > 0
//         ? lastPage
//         : Number.isFinite(totalFromMeta) && totalFromMeta > 0
//           ? totalFromMeta
//           : 1);

//     for (const row of rows) {
//       const id = row?.id ?? row?.user_id;
//       if (id == null || seen.has(id)) continue;
//       seen.add(id);
//       const path = `${pathPrefix}/${id}`;
//       entries.push({
//         url: absoluteUrl(siteOrigin, path),
//         lastModified: row?.updated_at ? new Date(row.updated_at) : undefined,
//         changeFrequency: "weekly",
//         priority: 0.6,
//       });
//     }

//     page += 1;
//   } while (page <= totalPages);

//   return entries;
// }

/** Production canonical uses `www` (e.g. https://www.ayasirg.com/). Preview hosts unchanged. */
function ensureWwwAyaSirG(origin) {
  const o = trimTrailingSlash(origin);
  try {
    const u = new URL(o);
    if (u.hostname === "ayasirg.com") {
      u.hostname = "www.ayasirg.com";
      u.protocol = "https:";
      return u.origin;
    }
  } catch {
    return o;
  }
  return o;
}

function resolveSiteOrigin() {
  let origin;
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    origin = trimTrailingSlash(process.env.NEXT_PUBLIC_SITE_URL);
  } else if (process.env.VERCEL_URL) {
    const vercel = process.env.VERCEL_URL;
    origin = trimTrailingSlash(
      vercel.startsWith("http") ? vercel : `https://${vercel}`
    );
  } else {
    origin = "https://www.ayasirg.com";
  }
  return ensureWwwAyaSirG(origin);
}

/** @returns {Promise<import('next').MetadataRoute.Sitemap>} */
export default async function sitemap() {
  const siteOrigin = resolveSiteOrigin();

  const apiBase = trimTrailingSlash(
    process.env.NEXT_PUBLIC_BASE_URL || "https://admin.ayasirg.com"
  );

  const staticPaths = [
    "/",
    "/about-us",
    "/our-mission",
    "/privacy-policy",
    "/faq",
    "/blogs",
    "/services",
    "/market-business",
    "/register-yourself",
    "/compnies",
    "/e-center",
    "/contact-us",
    "/services/lahore",
    "/services/karachi",
    "/services/islamabad",
  ];

  const staticEntries = staticPaths.map((path) => ({
    url: absoluteUrl(siteOrigin, path),
    changeFrequency: path === "/" ? "daily" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));

  const sections = await Promise.allSettled([
    collectAllBlogEntries(apiBase, siteOrigin),
    // collectUserEntries(apiBase, siteOrigin, "handyman", "/profile-details"),
    // collectUserEntries(apiBase, siteOrigin, "provider", "/compnies-details"),
  ]);

  const dynamicEntries = [];
  for (const r of sections) {
    if (r.status === "fulfilled") {
      dynamicEntries.push(...r.value);
    } else {
      console.error("[sitemap]", r.reason);
    }
  }

  return [...staticEntries, ...dynamicEntries];
}
