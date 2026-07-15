const SITE = "Aya Sir G!";

function p1(role, checks, benefit) {
  return `Choosing the right ${role} is important ${benefit}. Before hiring, check the provider's experience, customer reviews, and ${checks}. A skilled professional can assess your needs clearly, explain the work required, and deliver dependable results.`;
}

function p2(nearMe, examples, outcome) {
  return `If you're searching for ${nearMe}, comparing different providers before making a decision is worthwhile. Reading genuine customer feedback and reviewing professional profiles can help you find trusted experts who match your needs and budget. Whether you need ${examples}, hiring experienced professionals helps ${outcome}.`;
}

function p3(offer, closing) {
  return `With ${SITE}, you can easily browse verified professionals offering ${offer}, compare profiles, read authentic customer reviews, and connect directly with trusted experts. ${closing}`;
}

/** @type {Record<string, { highlight: string, paragraphs: string[], metaTitle: string, metaDescription: string }>} */
export const SERVICE_CHOOSE_CONTENT = {
  "ac-technician": {
    highlight: "AC Technician",
    paragraphs: [
      "Choosing the right AC technician is important to ensure your air conditioner is repaired and maintained correctly. Before hiring, check the technician's experience, customer reviews, and the range of AC repair services they offer. An experienced professional can quickly identify the problem, explain the required repairs, and recommend the best solution to restore your AC's performance.",
      "If you're looking for AC service in Lahore, it's a good idea to compare different service providers before making a decision. Reading genuine customer feedback and reviewing professional profiles can help you find reliable AC repair services that match your needs and budget. Whether you need routine maintenance, gas refilling, cleaning, or emergency repairs, choosing a qualified technician can help extend the life of your air conditioner and improve its efficiency.",
      `With ${SITE}, you can easily browse verified AC technicians, compare profiles, read authentic customer reviews, and connect directly with trusted professionals. Whether you're searching for the best AC service in Lahore, AC repair services near me, or AC service and repair near me, ${SITE} makes it simple to find experienced technicians with confidence.`,
    ],
    metaTitle: "AC Repair Services Near Me | Aya Sir G",
    metaDescription:
      "Looking for reliable AC repair services? Aya Sir G connects you with skilled AC technicians for installation, maintenance, gas filling, and repairs.",
  },
  "pest-control-termite-treatment": {
    highlight: "Pest Control Service",
    paragraphs: [
      "Choosing the right pest control service is essential to protect your home or workplace from unwanted pests. Before hiring a service provider, check their experience, customer reviews, and the types of pest control treatments they offer. A reliable professional will inspect the affected area, identify the source of the problem, and recommend the most suitable treatment for long-lasting results.",
      "If you're searching for pest control services near me, it's worth comparing different providers before making a decision. Reading genuine customer feedback and reviewing professional profiles can help you find trusted experts who offer safe and effective pest control solutions. Whether you're dealing with termites, cockroaches, rodents, mosquitoes, or other common pests, choosing experienced professionals can help prevent future infestations and keep your property protected.",
      `With ${SITE}, you can easily find verified professionals offering home pest control services near me and compare their profiles, experience, and customer reviews. Whether you need regular inspections or a one-time treatment, ${SITE} makes it simple to connect with trusted experts for pest control near me and hire with confidence.`,
    ],
    metaTitle: "Pest Control Services Near Me | Aya Sir G",
    metaDescription:
      "Hire trusted pest control services through Aya Sir G for homes and offices. Get effective solutions for termites, rodents, mosquitoes, and more.",
  },
  "security-guard-watchman": {
    highlight: "Security Guard Service",
    paragraphs: [
      "Choosing the right security guard service is important for protecting your home, office, business, or event. Before hiring, take time to review the provider's experience, customer reviews, and the type of security services they offer. A professional security guard should be reliable, well-trained, and capable of responding to different situations while maintaining a safe and secure environment.",
      "If you're searching for security guard services near me, comparing different providers can help you make a confident decision. Looking at genuine customer feedback, service quality, and professional experience makes it easier to find trusted guards who meet your specific security requirements. Whether you need security for residential, commercial, or event purposes, choosing experienced professionals helps ensure better protection and peace of mind.",
      `With ${SITE}, you can easily browse verified providers offering home security guard services, compare profiles, read authentic customer reviews, and contact professionals directly through one platform. Whether you're looking for the best security guard services or reliable security guard services near me, ${SITE} makes it simple to find trusted security professionals with confidence.`,
    ],
    metaTitle: "Security Guard Services Near Me | Aya Sir G",
    metaDescription:
      "Hire professional security guard services through Aya Sir G for homes, offices, events, warehouses, and commercial properties.",
  },
  "sofa-carpet-cleaner": {
    highlight: "Sofa Cleaning Service",
    paragraphs: [
      "Choosing the right sofa cleaning service helps keep your furniture clean, fresh, and in excellent condition. Before hiring, check the provider's experience, customer reviews, and the cleaning methods they use. A professional cleaning service should be able to remove dust, stains, allergens, and odors while using safe products that protect your sofa fabric and extend its lifespan.",
      "If you're searching for sofa cleaning services near me, comparing different service providers can help you find experienced professionals who deliver quality results. Reading genuine customer reviews and reviewing provider profiles allows you to choose a service that fits your cleaning needs and budget. Whether you need regular maintenance or deep cleaning, hiring trained professionals helps restore the appearance and hygiene of your furniture.",
      `With ${SITE}, you can easily browse verified professionals offering sofa set cleaning services, compare profiles, read authentic customer reviews, and connect directly with trusted providers. Whether you need sofa and carpet cleaning services or are looking for reliable sofa cleaning services near me, ${SITE} makes it simple to find experienced cleaning experts with confidence.`,
    ],
    metaTitle: "Sofa Cleaning Services Near Me | Aya Sir G",
    metaDescription:
      "Book professional sofa cleaning services with Aya Sir G. Remove stains, dust, and odors to keep your furniture fresh and hygienic.",
  },
  "cctv-fence-installer": {
    highlight: "CCTV Camera Installation Service",
    paragraphs: [
      "Choosing the right CCTV camera installation service is essential for improving the security of your home, office, or business. Before hiring, review the installer's experience, customer reviews, and the types of security systems they install. A professional installer should recommend the right camera placement, ensure proper system setup, and provide reliable installation for effective surveillance.",
      "If you're searching for CCTV camera installation near me, it's worth comparing different service providers before making a decision. Reading genuine customer reviews and checking professional profiles can help you find experienced installers who offer quality workmanship and dependable service. Whether you need a new security system or want to upgrade an existing one, choosing the right professionals can help ensure better coverage and long-term performance.",
      `With ${SITE}, you can easily browse verified professionals offering CCTV camera installation services, compare profiles, read authentic customer feedback, and connect directly with trusted installers. Whether you're looking for CCTV camera installation in Lahore or CCTV camera installation services near me, ${SITE} makes it simple to find experienced professionals with confidence.`,
    ],
    metaTitle: "CCTV Camera Installation Services | Aya Sir G",
    metaDescription:
      "Get professional CCTV camera installation services with Aya Sir G. Secure your home or business with expert installation and setup.",
  },
  electrician: {
    highlight: "Electrician",
    paragraphs: [
      p1(
        "electrician",
        "the electrical services they provide, such as wiring, repairs, and safety inspections",
        "to keep your home or workplace safe and fully powered"
      ),
      p2(
        "electrician services near me",
        "house wiring, short-circuit repair, fan installation, or UPS setup",
        "reduce electrical hazards and improve long-term reliability"
      ),
      p3(
        "professional electrician services",
        `Whether you need an electrician in Lahore, Karachi, or Islamabad, ${SITE} makes it simple to find experienced electricians with confidence.`
      ),
    ],
    metaTitle: "Electrician Near Me | Aya Sir G",
    metaDescription:
      "Hire experienced electricians near you with Aya Sir G for wiring, installations, repairs, maintenance, and electrical emergencies.",
  },
  plumber: {
    highlight: "Plumber",
    paragraphs: [
      p1(
        "plumber",
        "the plumbing services they handle, including leak repair, pipe fitting, and drainage work",
        "to prevent water damage and maintain a hygienic home or office"
      ),
      p2(
        "plumbers near me",
        "leak fixes, bathroom fitting, kitchen plumbing, or emergency pipe repairs",
        "restore water flow and avoid costly property damage"
      ),
      p3(
        "reliable plumbing services",
        `Whether you're looking for a plumber in Lahore or the best plumbers near me, ${SITE} helps you hire skilled professionals with confidence.`
      ),
    ],
    metaTitle: "Plumbers Near Me | Aya Sir G",
    metaDescription:
      "Hire experienced plumbers near you with Aya Sir G for pipe repairs, leak fixing, bathroom fittings, and plumbing installations.",
  },
  painter: {
    highlight: "Painter",
    paragraphs: [
      p1(
        "painter",
        "their portfolio, surface preparation methods, and types of painting projects they handle",
        "to achieve a clean, durable, and professional finish"
      ),
      p2(
        "house painting services near me or painting services near me",
        "interior painting, exterior weather-proofing, touch-ups, or full home repainting",
        "improve appearance and protect walls for years to come"
      ),
      p3(
        "home and commercial painting services",
        `Whether you need painters in Lahore or painting services near me, ${SITE} makes it easy to compare verified professionals and hire with confidence.`
      ),
    ],
    bridgeParagraphs: [
      `On ${SITE}, you can browse verified painter profiles across Lahore, Karachi, Islamabad, Faisalabad, Rawalpindi, and other cities in Pakistan. Use location filters and customer ratings to compare professionals before you hire.`,
      `Whether you need support for a one-time job or ongoing assistance, ${SITE} helps you find trusted painter experts offering reliable painting services, with clear profiles, genuine reviews, and direct contact options—so you can hire with confidence and peace of mind.`,
    ],
    metaTitle: "Painting Services Near Me | Aya Sir G",
    metaDescription:
      "Find professional painting services through Aya Sir G for homes, offices, interior painting, exterior painting, and renovations.",
  },
  "carpenter-woodworker": {
    highlight: "Carpenter / Woodworker",
    paragraphs: [
      p1(
        "carpenter or woodworker",
        "their craftsmanship, material knowledge, and range of woodwork services",
        "to ensure furniture and fittings are built safely and to a high standard"
      ),
      p2(
        "carpenter services near me",
        "custom furniture, door repair, kitchen cabinets, or wooden partition work",
        "get durable results that fit your space and budget"
      ),
      p3(
        "carpentry and woodwork services",
        `Whether you need a carpenter in Lahore or carpenter services near me, ${SITE} connects you with skilled woodworkers you can trust.`
      ),
    ],
    metaTitle: "Carpenter Services Near Me | Aya Sir G",
    metaDescription:
      "Find skilled carpenters through Aya Sir G for furniture repair, custom woodwork, cabinets, doors, and home improvement projects.",
  },
  "babysitter-nanny": {
    highlight: "Baby Sitter / Nanny",
    paragraphs: [
      p1(
        "baby sitter or nanny",
        "their childcare experience, references, and approach to child safety and daily routines",
        "to ensure your children receive attentive and responsible care"
      ),
      p2(
        "babysitter services near me",
        "daytime care, after-school support, newborn assistance, or live-in nanny arrangements",
        "give parents peace of mind while balancing work and family life"
      ),
      p3(
        "babysitter and nanny services",
        `Whether you're searching for a nanny in Lahore or babysitter services near me, ${SITE} helps you find caring professionals with confidence.`
      ),
    ],
    metaTitle: "Baby Sitter Maid Services | Aya Sir G",
    metaDescription:
      "Hire trusted baby sitter maids through Aya Sir G for childcare, newborn care, and household support from verified professionals.",
  },
  "gardener-mali": {
    highlight: "Gardener / Mali",
    paragraphs: [
      "Gardening is not just decoration, it is a passion, a love, and a way to bring life and color into your surroundings. It is especially meaningful for those who enjoy seeing seasonal blooms, fresh greenery, and feel connected to nature in their everyday life.",
      "More than just making a garden beautiful, gardening is about giving something back to nature and playing your part in maintaining a healthy environment. A well-kept garden doesn't just look good, it also improves air quality, brings a sense of calm, and adds real value to your home or property.",
      `Finding the right professional gardener is important for anyone who truly values this work. Many people struggle to find someone reliable, skilled, and honest, and end up compromising on the quality of their lawn or plants. That is why ${SITE} is building a trusted network of gardeners from across Pakistan, so users can easily find skilled professionals based on their specific needs, budget, and location.`,
      `On the platform, you can view gardener profiles, check ratings and reviews, and listen to "Ta'araf" voice notes or CV details to better understand their experience and expertise before hiring. This helps you make a confident decision without any guesswork.`,
      `The best part is that there is no middleman commission involved. You can simply sign up on ${SITE}, explore verified profiles, compare a few options, and contact gardeners directly to choose the right person for your requirements — quickly and without any hassle.`,
    ],
    bridgeParagraphs: [
      `Explore other services at ${SITE} Services, Register as a Service Provider, or Contact Us for any assistance.`,
    ],
    metaTitle: "Professional Gardener Services | Aya Sir G",
    metaDescription:
      "Book skilled gardeners through Aya Sir G for lawn care, landscaping, garden maintenance, planting, and outdoor beautification.",
  },
  "bawarchi-cook": {
    highlight: "Bawarchi / Cook",
    paragraphs: [
      p1(
        "bawarchi or home cook",
        "their cooking experience, hygiene standards, and the cuisines or meal plans they specialize in",
        "to enjoy fresh, well-prepared meals at home or for events"
      ),
      p2(
        "cook services near me",
        "daily home cooking, party catering, Ramadan meal prep, or live-in kitchen support",
        "find a cook who matches your taste, schedule, and household needs"
      ),
      p3(
        "home cook and bawarchi services",
        `Whether you need a cook in Lahore or cook services near me, ${SITE} helps you compare verified chefs and hire with confidence.`
      ),
    ],
    metaTitle: "Bawarchi & Professional Chef Services | Aya Sir G",
    metaDescription:
      "Hire experienced bawarchis and professional chefs with Aya Sir G for home cooking, parties, events, and family gatherings.",
  },
  driver: {
    highlight: "Driver",
    paragraphs: [
      p1(
        "driver",
        "their driving record, license validity, route familiarity, and professional references",
        "to ensure safe and punctual travel for your family or business"
      ),
      p2(
        "driver services near me",
        "personal chauffeur services, school drop-offs, office commuting, or long-distance trips",
        "travel more comfortably with a reliable professional behind the wheel"
      ),
      p3(
        "personal and commercial driver services",
        `Whether you need a driver in Lahore or driver services near me, ${SITE} makes it easy to find experienced drivers with confidence.`
      ),
    ],
    metaTitle: "Personal Driver Services Near Me | Aya Sir G",
    metaDescription:
      "Hire a professional personal driver through Aya Sir G for daily travel, business trips, family transport, and special occasions.",
  },
  "solar-technician": {
    highlight: "Solar Technician",
    headingHighlight: "Technician for Solar Panel Installation",
    paragraphs: [
      p1(
        "technician",
        "their installation experience, system brands they work with, and after-sales support",
        "to maximize energy savings and ensure your solar system installation runs efficiently"
      ),
      p2(
        "solar installation services near me",
        "new solar panel installation, inverter repair, battery maintenance, or system upgrades",
        "reduce downtime and get the most from your investment"
      ),
      p3(
        "solar panel installation and repair services",
        `Whether you need solar technicians in Lahore or solar installation services near me, ${SITE} helps you hire verified professionals with confidence.`
      ),
    ],
    bridgeParagraphs: [
      `On ${SITE}, you can browse verified solar technician profiles across Lahore, Karachi, Islamabad, Faisalabad, Rawalpindi, and other cities in Pakistan. Use location filters and customer ratings to compare professionals before you hire.`,
      `Whether you need support for a one-time solar system installation or ongoing maintenance assistance, ${SITE} helps you find trusted solar panel installation experts with clear profiles, genuine reviews, and direct contact options—so you can hire with confidence and peace of mind.`,
    ],
    metaTitle: "Solar Panel Installation Services | Aya Sir G",
    metaDescription:
      "Get expert solar panel installation services with Aya Sir G for homes and businesses. Hire trusted solar technicians today.",
  },
  "ceiling-work": {
    highlight: "Ceiling Work Specialist",
    paragraphs: [
      p1(
        "ceiling work specialist",
        "their experience with false ceilings, POP work, and finishing quality",
        "to achieve a polished interior look with proper structural support"
      ),
      p2(
        "ceiling work services near me",
        "false ceiling installation, gypsum boards, decorative ceilings, or repair work",
        "enhance lighting, insulation, and the overall design of your space"
      ),
      p3(
        "ceiling installation and repair services",
        `Whether you need ceiling work in Lahore or ceiling services near me, ${SITE} connects you with skilled installers you can trust.`
      ),
    ],
    metaTitle: "Ceiling Design Services Near Me | Aya Sir G",
    metaDescription:
      "Upgrade your home with modern ceiling design services from Aya Sir G. Hire experts for gypsum, POP, and decorative ceiling work.",
  },
  "welding-worker": {
    highlight: "Welding Worker",
    paragraphs: [
      p1(
        "welding worker",
        "their welding techniques, safety practices, and types of metalwork they handle",
        "to ensure strong, precise, and long-lasting fabrication results"
      ),
      p2(
        "welding services near me",
        "gate repair, grill fabrication, structural welding, or custom metal frames",
        "get durable workmanship suited to your project requirements"
      ),
      p3(
        "welding and fabrication services",
        `Whether you need a welder in Lahore or welding services near me, ${SITE} makes it simple to find experienced professionals with confidence.`
      ),
    ],
    metaTitle: "Welders Near Me | Aya Sir G",
    metaDescription:
      "Hire experienced welders near you through Aya Sir G for metal fabrication, gate welding, grills, repairs, and custom welding work.",
  },
  "salon-worker": {
    highlight: "Salon Worker",
    headingHighlight: "Salon Worker for Salon Services",
    paragraphs: [
      p1(
        "salon worker",
        "their styling experience, hygiene standards, and the salon services they provide",
        "to get professional grooming results at a salon or through salon services at home"
      ),
      "If you're searching for salon services near me, comparing different providers before making a decision is worthwhile. Reading genuine customer feedback and reviewing professional profiles can help you find trusted experts who match your needs and budget. Whether you need haircuts, coloring, bridal styling, manicures, or grooming packages, hiring experienced professionals for beauty salon services helps you look your best for everyday needs or special occasions.",
      p3(
        "salon and grooming services",
        `Whether you need salon workers in Lahore or salon services near me, ${SITE} helps you compare verified stylists and hire with confidence.`
      ),
    ],
    bridgeParagraphs: [
      `On ${SITE}, you can browse verified salon worker profiles across Lahore, Karachi, Islamabad, Faisalabad, Rawalpindi, and other cities in Pakistan. Use location filters and customer ratings to compare professionals before you hire.`,
      `Whether you need support for a one-time job or ongoing assistance, ${SITE} helps you find trusted experts for salon services at home, offering clear profiles, genuine reviews, and direct contact options for reliable beauty salon services—so you can hire with confidence and peace of mind.`,
    ],
    metaTitle: "Salon Services Near Me | Aya Sir G!",
    metaDescription:
      "Find trusted salon services near you. Compare verified salon workers for grooming on Aya Sir G!",
  },
  sweeper: {
    highlight: "Sweeper",
    paragraphs: [
      p1(
        "sweeper",
        "their cleaning experience, reliability, and availability for your required schedule",
        "to maintain a tidy home, office, or commercial space"
      ),
      p2(
        "sweeper services near me",
        "daily sweeping, outdoor area cleaning, office maintenance, or part-time support",
        "keep your environment clean and presentable with dependable help"
      ),
      p3(
        "sweeper and cleaning support services",
        `Whether you need a sweeper in Lahore or sweeper services near me, ${SITE} makes it easy to find reliable workers with confidence.`
      ),
    ],
    metaTitle: "Cleaning Services Near Me | Aya Sir G",
    metaDescription:
      "Book professional cleaning services through Aya Sir G for homes, offices, apartments, deep cleaning, and commercial spaces.",
  },
  "maid-kamwali": {
    highlight: "Maid / Kamwali",
    paragraphs: [
      p1(
        "maid or kamwali",
        "their household experience, references, and the domestic tasks they can handle",
        "to keep your home organized, clean, and running smoothly"
      ),
      p2(
        "maid services near me",
        "daily cleaning, dishwashing, laundry help, or full-time domestic support",
        "find help that fits your household routine and budget"
      ),
      p3(
        "maid and kamwali services",
        `Whether you need a maid in Lahore or maid services near me, ${SITE} helps you compare verified domestic workers and hire with confidence.`
      ),
    ],
    metaTitle: "Maid Service Near Me | Aya Sir G",
    metaDescription:
      "Hire reliable maid services through Aya Sir G for cleaning, cooking, childcare, elderly care, and household assistance.",
  },
  "mason-helper": {
    highlight: "Mason & Helper",
    paragraphs: [
      p1(
        "mason and helper",
        "their construction experience, project types, and quality of workmanship",
        "to ensure building and renovation work is completed safely and correctly"
      ),
      p2(
        "mason services near me",
        "brickwork, plastering, tile support, small repairs, or renovation assistance",
        "complete construction tasks efficiently with skilled on-site support"
      ),
      p3(
        "mason and construction helper services",
        `Whether you need a mason in Lahore or mason services near me, ${SITE} connects you with experienced builders you can trust.`
      ),
    ],
    metaTitle: "Mason Services Near Me | Aya Sir G!",
    metaDescription:
      "Find trusted mason services near you. Compare verified masons and helpers on Aya Sir G!",
  },
  "blinds-curtains-wallpapers": {
    highlight: "Blinds & Curtains Installer",
    paragraphs: [
      p1(
        "blinds, curtains, or wallpaper installer",
        "their fitting experience, product knowledge, and finishing standards",
        "to enhance privacy, style, and comfort in your home or office"
      ),
      p2(
        "curtain and blinds installation near me",
        "curtain hanging, blind fitting, wallpaper application, or custom window treatments",
        "achieve a neat, professional look with precise installation"
      ),
      p3(
        "blinds, curtains, and wallpaper services",
        `Whether you need installers in Lahore or blinds installation near me, ${SITE} makes it simple to find experienced professionals with confidence.`
      ),
    ],
    metaTitle: "Wallpaper Installation Services | Aya Sir G",
    metaDescription:
      "Transform your interiors with professional wallpaper installation services by skilled experts available through Aya Sir G.",
  },
  "office-boy-factory-workers": {
    highlight: "Office Boy / Factory Worker",
    paragraphs: [
      p1(
        "office boy or factory worker",
        "their work experience, reliability, and ability to handle daily operational tasks",
        "to support smooth office or production floor operations"
      ),
      p2(
        "office boy services near me",
        "office assistance, filing, errands, factory line support, or warehouse help",
        "find staff who match your workplace requirements and shift timings"
      ),
      p3(
        "office boy and factory worker services",
        `Whether you need staff in Lahore or office boy services near me, ${SITE} helps you compare verified workers and hire with confidence.`
      ),
    ],
    metaTitle: "Office Boy Services Near Me | Aya Sir G!",
    metaDescription:
      "Find trusted office boy and factory worker services near you on Aya Sir G!",
  },
  "fast-food-crew": {
    highlight: "Fast-Food Crew Member",
    paragraphs: [
      p1(
        "fast-food crew member",
        "their service experience, hygiene awareness, and ability to work in busy environments",
        "to maintain efficient customer service and kitchen operations"
      ),
      p2(
        "restaurant crew hiring near me",
        "counter staff, kitchen helpers, delivery support, or shift-based crew hiring",
        "keep your food business running smoothly during peak hours"
      ),
      p3(
        "fast-food crew and restaurant staff services",
        `Whether you need crew in Lahore or restaurant staff near me, ${SITE} makes it easy to find reliable workers with confidence.`
      ),
    ],
    metaTitle: "Fast-Food Crew Hiring Near Me | Aya Sir G!",
    metaDescription:
      "Find trusted fast-food crew and restaurant staff near you on Aya Sir G!",
  },
  "tyre-specialist": {
    highlight: "Tyre Specialist",
    paragraphs: [
      p1(
        "tyre specialist",
        "their experience with tyre fitting, balancing, and vehicle safety checks",
        "to keep your vehicle roadworthy and reduce the risk of tyre-related issues"
      ),
      p2(
        "tyre services near me",
        "tyre replacement, puncture repair, wheel alignment, or mobile tyre fitting",
        "get back on the road quickly with dependable automotive support"
      ),
      p3(
        "tyre repair and fitting services",
        `Whether you need a tyre specialist in Lahore or tyre services near me, ${SITE} helps you compare verified professionals with confidence.`
      ),
    ],
    metaTitle: "Tyre Puncture Repair Near Me | Aya Sir G",
    metaDescription:
      "Find tyre puncture repair specialists with Aya Sir G for quick, reliable tyre repair and roadside assistance near you.",
  },
  "carpet-cleaning-laundry": {
    highlight: "Carpet Cleaning / Laundry Service",
    paragraphs: [
      p1(
        "carpet cleaning or laundry service provider",
        "their cleaning methods, equipment, and experience with different fabrics",
        "to protect your carpets, rugs, and garments while achieving a deep clean"
      ),
      p2(
        "carpet cleaning services near me",
        "steam cleaning, stain removal, pickup-and-drop laundry, or commercial cleaning",
        "restore freshness and hygiene to your home or business textiles"
      ),
      p3(
        "carpet cleaning and laundry services",
        `Whether you need carpet cleaning in Lahore or laundry services near me, ${SITE} makes it simple to find trusted professionals with confidence.`
      ),
    ],
    metaTitle: "Laundry Service Near Me | Aya Sir G",
    metaDescription:
      "Find trusted laundry services near you with Aya Sir G. Book washing, ironing, dry cleaning, and garment care professionals.",
  },
  "automotive-mechanic": {
    highlight: "Automotive Mechanic",
    paragraphs: [
      p1(
        "automotive mechanic",
        "their repair experience, diagnostic skills, and familiarity with your vehicle type",
        "to keep your car running safely and avoid costly breakdowns"
      ),
      p2(
        "car mechanic services near me",
        "engine repair, brake service, oil changes, electrical faults, or general maintenance",
        "extend your vehicle's life with timely and professional care"
      ),
      p3(
        "automotive repair and mechanic services",
        `Whether you need a mechanic in Lahore or car repair services near me, ${SITE} helps you hire verified automotive experts with confidence.`
      ),
    ],
    metaTitle: "Car Mechanic Near Me | Aya Sir G",
    metaDescription:
      "Looking for a car mechanic near you? Aya Sir G connects you with skilled mechanics for repairs, maintenance, diagnostics, and inspections.",
  },
  "key-maker": {
    highlight: "Key Maker",
    paragraphs: [
      p1(
        "key maker",
        "their locksmith experience, response time, and range of key and lock services",
        "to resolve lockouts and security issues quickly and professionally"
      ),
      p2(
        "key maker services near me",
        "duplicate keys, lock repair, digital lock setup, or emergency lockout assistance",
        "regain access and improve security without unnecessary delay"
      ),
      p3(
        "key making and locksmith services",
        `Whether you need a key maker in Lahore or locksmith services near me, ${SITE} makes it easy to find trusted professionals with confidence.`
      ),
    ],
    metaTitle: "Key Maker Near Me | Aya Sir G",
    metaDescription:
      "Find trusted key makers near you with Aya Sir G for key duplication, lock repair, lock replacement, and emergency locksmith services.",
  },
  "ups-generator-technician": {
    highlight: "UPS & Generator Technician",
    paragraphs: [
      p1(
        "UPS and generator technician",
        "their experience with power backup systems, servicing standards, and fault diagnosis",
        "to keep your home or business protected during power outages"
      ),
      p2(
        "UPS repair services near me",
        "UPS maintenance, generator servicing, battery replacement, or installation support",
        "maintain uninterrupted backup power when you need it most"
      ),
      p3(
        "UPS and generator repair services",
        `Whether you need a technician in Lahore or UPS repair services near me, ${SITE} helps you compare verified experts with confidence.`
      ),
    ],
    metaTitle: "UPS & Generator Repair Services | Aya Sir G",
    metaDescription:
      "Find expert UPS and generator repair services with Aya Sir G. Hire technicians for repairs, maintenance, troubleshooting, and servicing.",
  },
  "jamadar-sanitary-worker": {
    highlight: "Jamadar / Sanitary Worker",
    paragraphs: [
      p1(
        "jamadar or sanitary worker",
        "their cleaning experience, reliability, and ability to maintain hygiene standards",
        "to keep residential, commercial, and public spaces clean and sanitary"
      ),
      p2(
        "sanitary worker services near me",
        "washroom cleaning, waste handling, building upkeep, or scheduled sanitation work",
        "maintain a healthier environment for employees, residents, and visitors"
      ),
      p3(
        "jamadar and sanitary worker services",
        `Whether you need a sanitary worker in Lahore or cleaning staff near me, ${SITE} makes it simple to find dependable workers with confidence.`
      ),
    ],
    metaTitle: "Sanitary Worker Services Near Me | Aya Sir G!",
    metaDescription:
      "Find trusted jamadar and sanitary worker services near you on Aya Sir G!",
  },
  housekeeping: {
    highlight: "Housekeeping Service",
    paragraphs: [
      p1(
        "housekeeping service",
        "their cleaning experience, staff training, and range of residential or commercial services",
        "to maintain a spotless, organized, and welcoming space"
      ),
      p2(
        "housekeeping services near me",
        "deep cleaning, daily upkeep, office housekeeping, or move-in/move-out cleaning",
        "improve hygiene and presentation across your home or workplace"
      ),
      p3(
        "professional housekeeping services",
        `Whether you need housekeeping in Lahore or housekeeping services near me, ${SITE} helps you compare verified cleaners and hire with confidence.`
      ),
    ],
    metaTitle: "Housekeeping Services Near Me | Aya Sir G",
    metaDescription:
      "Hire professional housekeeping services through Aya Sir G for homes, offices, apartments, and commercial cleaning needs.",
  },
  caretaker: {
    highlight: "Caretaker",
    paragraphs: [
      p1(
        "caretaker",
        "their caregiving experience, patient handling skills, and professional references",
        "to ensure elderly family members or patients receive attentive daily support"
      ),
      p2(
        "caretaker services near me",
        "elderly care, patient assistance, night shifts, or live-in caretaker support",
        "provide compassionate care tailored to your loved one's needs"
      ),
      p3(
        "home caretaker and patient care services",
        `Whether you need a caretaker in Lahore or caretaker services near me, ${SITE} makes it simple to find trusted caregivers with confidence.`
      ),
    ],
    metaTitle: "Professional Caretaker Services | Aya Sir G",
    metaDescription:
      "Hire reliable caretakers with Aya Sir G for elderly care, patient care, disability support, and daily assistance at home.",
  },
  beautician: {
    highlight: "Beautician",
    paragraphs: [
      p1(
        "beautician",
        "their beauty service experience, hygiene practices, and customer reviews",
        "to enjoy safe, professional salon-quality treatments at home or in-studio"
      ),
      p2(
        "beautician services near me",
        "bridal makeup, party styling, skincare treatments, or regular grooming sessions",
        "look and feel your best with services matched to your preferences"
      ),
      p3(
        "home beautician and makeup services",
        `Whether you need a beautician in Lahore or beautician services near me, ${SITE} helps you compare verified beauty professionals with confidence.`
      ),
    ],
    metaTitle: "Professional Beautician Services | Aya Sir G",
    metaDescription:
      "Book experienced beauticians through Aya Sir G for makeup, skincare, hair styling, bridal services, and beauty treatments.",
  },
};

export function getServiceChooseContent(slug) {
  return SERVICE_CHOOSE_CONTENT[slug] || null;
}

const LOGO = "https://www.ayasirg.com/logo_header.png";

export function getServicePageMetadata(slug) {
  const content = getServiceChooseContent(slug);
  if (!content) return null;

  const canonical = `https://www.ayasirg.com/services/${slug}`;

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: canonical,
      siteName: SITE,
      images: [
        {
          url: LOGO,
          width: 1200,
          height: 630,
          alt: "Aya Sir G! Logo",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: content.metaTitle,
      description: content.metaDescription,
      images: [LOGO],
    },
  };
}
