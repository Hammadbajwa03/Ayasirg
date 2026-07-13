/** Public URL segment → API role value sent to backend */
export const ECENTER_ROLE_MAP = {
  individual: "handyman",
  company: "provider",
};

/** API role → public URL segment */
export const ECENTER_URL_MAP = {
  handyman: "individual",
  provider: "company",
  individual: "individual",
  company: "company",
};

export function getEcenterHref(typeOrRole) {
  const slug = ECENTER_URL_MAP[typeOrRole] || typeOrRole;
  if (slug === "individual" || slug === "company") {
    return `/e-center/${slug}`;
  }
  return "/e-center";
}

export function resolveApiRole(typeOrSlug) {
  if (!typeOrSlug) return null;
  const key = String(typeOrSlug).toLowerCase();
  if (ECENTER_ROLE_MAP[key]) return ECENTER_ROLE_MAP[key];
  if (key === "handyman" || key === "provider") return key;
  return null;
}

export function getEcenterPageTitle(typeOrSlug) {
  const apiRole = resolveApiRole(typeOrSlug);
  if (apiRole === "handyman") return "Add New Individual";
  if (apiRole === "provider") return "Add New Company";
  return "E-Center Registration";
}
