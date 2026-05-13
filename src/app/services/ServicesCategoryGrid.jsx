import Image from "next/image";
import Link from "next/link";

function categoryImageUrl(cat) {
  const raw = cat?.category_image ?? cat?.image ?? cat?.icon_url;
  return typeof raw === "string" && /^https?:\/\//i.test(raw.trim()) ? raw.trim() : null;
}

/**
 * @param {{ id: number | string; name?: string; category_image?: string }[]} categories
 */
export default function ServicesCategoryGrid({ categories }) {
  if (!categories?.length) {
    return (
      <div className="services_cat_empty rounded-3 p-4 text-center">
        <p className="mb-3 text-muted small">
          No categories available right now.
        </p>
        <Link href="/compnies?role=handyman" className="btn services_cat_cta_btn">
          Browse listings
        </Link>
      </div>
    );
  }

  return (
    <nav className="services_cat_strip" aria-label="Service categories">
      {categories.map((cat) => {
        const id = cat?.id;
        const name = (cat?.name || "Service").trim();
        const initial = name.charAt(0).toUpperCase();
        const imgSrc = categoryImageUrl(cat);
        const href = `/compnies?role=handyman&category_id=${encodeURIComponent(String(id))}`;

        return (
          <Link
            key={id}
            href={href}
            className="services_cat_item text-decoration-none"
          >
            <div className="services_cat_icon_wrap">
              {imgSrc ? (
                <Image
                  src={imgSrc}
                  alt={name}
                  width={72}
                  height={72}
                  className="services_cat_img"
                  sizes="56px"
                  aria-hidden
                />
              ) : (
                <span className="services_cat_fallback" aria-hidden>
                  {initial}
                </span>
              )}
            </div>
            <span className="services_cat_title">{name}</span>
          </Link>
        );
      })}
    </nav>
  );
}
