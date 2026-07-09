/** API category id ↔ service slug (matches /services/[slug] and /compnies/[slug]) */
export const CATEGORIES = [
  { id: 11, slug: "cctv-fence-installer", name: "CCTV / Fence Installer" },
  { id: 12, slug: "security-guard-watchman", name: "Security Guard / Watchman" },
  { id: 13, slug: "jamadar-sanitary-worker", name: "Jamadar / Sanitary Worker" },
  { id: 18, slug: "painter", name: "Painter" },
  { id: 19, slug: "babysitter-nanny", name: "Baby Sitter / Nanny" },
  { id: 20, slug: "gardener-mali", name: "Gardener / Mali" },
  { id: 22, slug: "bawarchi-cook", name: "Bawarchi / Cook" },
  { id: 25, slug: "electrician", name: "Electrician" },
  { id: 26, slug: "carpenter-woodworker", name: "Carpenter / Woodworker" },
  { id: 27, slug: "driver", name: "Driver" },
  { id: 32, slug: "solar-technician", name: "Solar Technician" },
  { id: 35, slug: "ceiling-work", name: "Ceiling Work" },
  { id: 36, slug: "plumber", name: "Plumber" },
  { id: 37, slug: "welding-worker", name: "Welding Worker" },
  { id: 44, slug: "ac-technician", name: "AC Technician" },
  { id: 45, slug: "salon-worker", name: "Salon Worker" },
  { id: 46, slug: "sweeper", name: "Sweeper" },
  { id: 47, slug: "maid-kamwali", name: "Maid / Kamwali" },
  { id: 48, slug: "mason-helper", name: "Mason & Helper" },
  { id: 49, slug: "sofa-carpet-cleaner", name: "Sofa & Carpet Cleaner" },
  { id: 50, slug: "pest-control-termite-treatment", name: "Pest Control & Termite Treatment" },
  { id: 51, slug: "blinds-curtains-wallpapers", name: "Blinds, Curtains, Wallpapers" },
  { id: 52, slug: "office-boy-factory-workers", name: "Office Boy & Factory workers" },
  { id: 53, slug: "fast-food-crew", name: "Fast-Food Workers & Crew members" },
  { id: 54, slug: "tyre-specialist", name: "Tyre Specialist" },
  { id: 55, slug: "carpet-cleaning-laundry", name: "Carpet Cleaning / Laundry Service" },
  { id: 56, slug: "automotive-mechanic", name: "Automotive Mechanic" },
  { id: 57, slug: "key-maker", name: "Key Maker" },
  { id: 58, slug: "ups-generator-technician", name: "UPS and Generator Technician" },
  { id: 65, slug: "housekeeping", name: "Housekeeping" },
  { id: 66, slug: "caretaker", name: "Caretaker" },
  { id: 67, slug: "beautician", name: "Beautician" },
];

const byId = new Map(CATEGORIES.map((c) => [String(c.id), c]));
const bySlug = new Map(CATEGORIES.map((c) => [c.slug, c]));

export function getCategoryById(id) {
  if (id == null || id === "") return null;
  return byId.get(String(id)) ?? null;
}

export function getCategoryBySlug(slug) {
  if (!slug) return null;
  return bySlug.get(String(slug)) ?? null;
}

export function getServicePagePath(idOrSlug) {
  const cat =
    typeof idOrSlug === "number" || /^\d+$/.test(String(idOrSlug))
      ? getCategoryById(idOrSlug)
      : getCategoryBySlug(idOrSlug);
  return cat ? `/services/${cat.slug}` : null;
}

/**
 * Clean listing URL for a category, e.g. /compnies/ac-technician?city=1
 */
export function compniesListingHref(categoryId, query = {}) {
  const cat = getCategoryById(categoryId);
  const params = new URLSearchParams();

  Object.entries(query).forEach(([key, value]) => {
    if (value != null && value !== "" && key !== "role" && key !== "category_id") {
      params.set(key, String(value));
    }
  });

  const qs = params.toString();

  if (cat) {
    return qs ? `/compnies/${cat.slug}?${qs}` : `/compnies/${cat.slug}`;
  }

  params.set("role", "handyman");
  params.set("category_id", String(categoryId));
  return `/compnies?${params.toString()}`;
}

/** Category grid / API row → service landing page */
export function categoryServiceHref(cat) {
  const known = getCategoryById(cat?.id);
  if (known) return `/services/${known.slug}`;
  if (cat?.id != null) {
    return compniesListingHref(cat.id);
  }
  return "/compnies";
}
