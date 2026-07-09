/** CSS class prefix per service slug (matches each landing page stylesheet). */
export const SERVICE_PAGE_THEMES = {
  "cctv-fence-installer": "cctv",
  "security-guard-watchman": "security_guard",
  "jamadar-sanitary-worker": "sanitary_worker",
  painter: "painter",
  "babysitter-nanny": "nanny",
  "gardener-mali": "gardener",
  "bawarchi-cook": "cook",
  electrician: "electrician",
  "carpenter-woodworker": "carpenter",
  driver: "driver",
  "solar-technician": "solar_technician",
  "ceiling-work": "ceiling",
  plumber: "plumber",
  "welding-worker": "welding_worker",
  "ac-technician": "ac",
  "salon-worker": "salon_worker",
  sweeper: "sweeper",
  "maid-kamwali": "maid_kamwali",
  "mason-helper": "mason_helper",
  "sofa-carpet-cleaner": "sofa_carpet",
  "pest-control-termite-treatment": "pest_control",
  "blinds-curtains-wallpapers": "blinds",
  "office-boy-factory-workers": "office_boy",
  "fast-food-crew": "crew",
  "tyre-specialist": "tyre_specialist",
  "carpet-cleaning-laundry": "laundry",
  "automotive-mechanic": "mech",
  "key-maker": "key_maker",
  "ups-generator-technician": "ups_generator",
  housekeeping: "housekeeping",
  caretaker: "caretaker",
  beautician: "beautician",
};

export function getServiceThemePrefix(slug) {
  return SERVICE_PAGE_THEMES[slug] || null;
}
