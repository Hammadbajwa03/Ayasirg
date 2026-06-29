import Image from "next/image";
import Link from "next/link";

function categoryImageUrl(cat) {
  const raw = cat?.category_image ?? cat?.category_image ?? cat?.icon_url;
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
        let href = `/compnies?role=handyman&category_id=${encodeURIComponent(String(id))}`;
        if (String(id) === "44" || name.toLowerCase() === "ac technician") {
          href = "/services/ac-technician";
        } else if (String(id) === "56" || name.toLowerCase() === "automotive mechanic" || name.toLowerCase() === "auto mechanic") {
          href = "/services/automotive-mechanic";
        } else if (String(id) === "19" || name.toLowerCase().includes("baby sitter") || name.toLowerCase().includes("nanny")) {
          href = "/services/babysitter-nanny";
        } else if (String(id) === "22" || name.toLowerCase().includes("bawarchi") || name.toLowerCase().includes("cook")) {
          href = "/services/bawarchi-cook";
        } else if (String(id) === "67" || name.toLowerCase() === "beautician") {
          href = "/services/beautician";
        } else if (String(id) === "45" || name.toLowerCase().includes("salon worker")) {
          href = "/services/salon-worker";
        } else if (String(id) === "51" || name.toLowerCase().includes("blinds") || name.toLowerCase().includes("curtains") || name.toLowerCase().includes("wallpaper")) {
          href = "/services/blinds-curtains-wallpapers";
        } else if (String(id) === "66" || name.toLowerCase().includes("caretaker")) {
          href = "/services/caretaker";
        } else if (String(id) === "26" || name.toLowerCase().includes("carpenter") || name.toLowerCase().includes("woodworker")) {
          href = "/services/carpenter-woodworker";
        } else if (String(id) === "55" || name.toLowerCase().includes("carpet cleaning") || name.toLowerCase().includes("laundry")) {
          href = "/services/carpet-cleaning-laundry";
        } else if (String(id) === "11" || name.toLowerCase().includes("cctv") || name.toLowerCase().includes("fence")) {
          href = "/services/cctv-fence-installer";
        } else if (String(id) === "35" || name.toLowerCase().includes("ceiling")) {
          href = "/services/ceiling-work";
        } else if (String(id) === "27" || name.toLowerCase().includes("driver")) {
          href = "/services/driver";
        } else if (String(id) === "25" || name.toLowerCase().includes("electrician")) {
          href = "/services/electrician";
        } else if (String(id) === "53" || name.toLowerCase().includes("fast-food") || name.toLowerCase().includes("crew")) {
          href = "/services/fast-food-crew";
        } else if (String(id) === "20" || name.toLowerCase().includes("gardener") || name.toLowerCase().includes("mali")) {
          href = "/services/gardener-mali";
        } else if (String(id) === "65" || name.toLowerCase().includes("housekeeping")) {
          href = "/services/housekeeping";
        } else if (String(id) === "13" || name.toLowerCase().includes("jamadar") || name.toLowerCase().includes("sanitary")) {
          href = "/services/jamadar-sanitary-worker";
        } else if (String(id) === "57" || name.toLowerCase().includes("key maker") || name.toLowerCase().includes("locksmith")) {
          href = "/services/key-maker";
        } else if (String(id) === "47" || name.toLowerCase().includes("maid") || name.toLowerCase().includes("kamwali")) {
          href = "/services/maid-kamwali";
        } else if (String(id) === "48" || name.toLowerCase().includes("mason") || name.toLowerCase().includes("helper")) {
          href = "/services/mason-helper";
        } else if (String(id) === "52" || name.toLowerCase().includes("office boy") || name.toLowerCase().includes("factory worker")) {
          href = "/services/office-boy-factory-workers";
        } else if (String(id) === "18" || name.toLowerCase().includes("painter")) {
          href = "/services/painter";
        } else if (String(id) === "50" || name.toLowerCase().includes("pest control") || name.toLowerCase().includes("termite")) {
          href = "/services/pest-control-termite-treatment";
        } else if (String(id) === "36" || name.toLowerCase().includes("plumber")) {
          href = "/services/plumber";
        } else if (String(id) === "12" || name.toLowerCase().includes("security guard") || name.toLowerCase().includes("watchman")) {
          href = "/services/security-guard-watchman";
        } else if (String(id) === "49" || name.toLowerCase().includes("sofa") || name.toLowerCase().includes("carpet cleaner")) {
          href = "/services/sofa-carpet-cleaner";
        } else if (String(id) === "32" || name.toLowerCase().includes("solar")) {
          href = "/services/solar-technician";
        } else if (String(id) === "46" || name.toLowerCase().includes("sweeper")) {
          href = "/services/sweeper";
        } else if (String(id) === "54" || name.toLowerCase().includes("tyre")) {
          href = "/services/tyre-specialist";
        } else if (String(id) === "58" || name.toLowerCase().includes("ups") || name.toLowerCase().includes("generator")) {
          href = "/services/ups-generator-technician";
        } else if (String(id) === "37" || name.toLowerCase().includes("welder") || name.toLowerCase().includes("welding")) {
          href = "/services/welding-worker";
        }





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
