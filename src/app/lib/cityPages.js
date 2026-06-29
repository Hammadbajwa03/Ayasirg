const API_BASE =
  process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/+$/, "") ||
  "https://admin.ayasirg.com";

export const CITY_PAGES = {
  lahore: {
    slug: "lahore",
    name: "Lahore",
    variant: "rich",
    routePath: "/services/lahore",
    tagline: "The Heart of Punjab",
    metaTitle: "Best Home & Office Services in Lahore | Aya Sir G",
    metaDescription:
      "Need a house maid required in Lahore or an urgent plumber in Lahore? Book maid service Lahore, AC repair, pest control, and deep cleaning. Trusted help at your doorstep.",
    heroImage:
      "https://images.unsplash.com/photo-1617128072203-310a93722ad8?q=80&w=1537&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=1200&q=80",
    heroAlt: "Lahore cityscape and historic architecture",
    hero: {
      h1: "Professional Home & Lahore Services for Your Daily Needs",
      subheading:
        "Is a house maid required in Lahore for your home? Or do you need a quick repair before guests arrive? Aya Sir G connects you with trusted maids, plumbers, electricians, and cleaning experts across Lahore and nearby areas.",
      ctaPrimary: "Book a Service Now",
      ctaSecondary: "View Pricing Plans",
      ctaTertiary: "Chat On WhatsApp",
      whatsappHref: "https://wa.me/923098574093",
    },
    welcome: {
      title: "Why Lahore Needs Smart Home Solutions",
      subtitle: "Making Daily Life Easier in Pakistan’s Cultural Capital",
      paragraphs: [
        "Lahore is busy, vibrant, and always on the move. Between work, family, and long commutes, managing cleaning, repairs, and domestic help can feel like a full-time job. Hiring through informal references is risky and wastes precious time.",
        "Aya Sir G offers professional Lahore services that connect skilled workers with households and businesses. From Gulberg and DHA to Model Town, Johar Town, and NFC — we help you find reliable help without the stress.",
      ],
    },
    popularServices: {
      title: "Our Popular Services in Lahore",
      items: [
        {
          title: "Premium Maid Service Lahore",
          text: "If a house maid required in Lahore is your main concern, we provide professional helpers for cleaning, cooking, and babysitting. Our maid service Lahore covers full-time, part-time, and monthly packages tailored to your home.",
        },
        {
          title: "Professional Plumber in Lahore",
          text: "Leaking taps, blocked drains, or motor issues? Book an expert plumber in Lahore through our platform. Our plumbers arrive with modern tools and fix kitchen, bathroom, and overhead tank problems quickly.",
        },
        {
          title: "Deep Sofa Cleaning Service Lahore",
          text: "Dust, stains, and odors build up fast in Lahore’s weather. Our sofa cleaning service Lahore uses safe shampoos and extraction machines to refresh your furniture and improve indoor air quality.",
        },
        {
          title: "Water Tank Cleaning Services Lahore",
          text: "Protect your family from contaminated water with professional water tank cleaning services Lahore. We scrub, disinfect, and rinse underground and overhead tanks for cleaner supply at home.",
        },
        {
          title: "Reliable AC & Appliance Repair Lahore",
          text: "Beat the heat with fast AC servicing and repair in Lahore. We also help with washing machine repair Lahore and other home appliances so your daily routine is not disrupted.",
        },
        {
          title: "Safe Pest Control Lahore",
          text: "Get rid of cockroaches, termites, bedbugs, and rodents with eco-friendly pest control Lahore. Our treatments are effective yet safe for children and pets when applied correctly.",
        },
      ],
    },
    commercialResidential: {
      title: "Commercial vs Residential Services",
      intro:
        "We serve homes and workplaces across Lahore with dedicated solutions for each:",
      items: [
        {
          title: "For Offices, Shops & Restaurants",
          text: "Office boys, corporate cleaning, pest control, and maintenance support for commercial buildings on MM Alam Road, Main Boulevard, Gulberg, and industrial zones.",
        },
        {
          title: "For Homes, Flats & Housing Societies",
          text: "Maid service Lahore for apartments, on-call plumber in Lahore for housing schemes, and water tank cleaning packages for community buildings and private houses.",
        },
      ],
    },
    seasonalGuide: {
      title: "Seasonal Home Maintenance Guide for Lahoris",
      intro:
        "Lahore ke mausam ke hisaab se yeh services book karna faida mand hai:",
      items: [
        {
          title: "Before Monsoon (Rainy Season)",
          text: "Barish se pehle water tank cleaning aur plumber in Lahore book karein taake leakage aur gutter blockages se bachain. Roof and basement areas bhi check karwayen.",
        },
        {
          title: "Summer & Smog Season",
          text: "Garmi aur pollution mein AC service lazmi hai. Sofa cleaning aur pest control Lahore bhi recommend karte hain jab windows zyada band rehti hain.",
        },
      ],
    },
    howItWorks: {
      title: "Our Step-by-Step Booking Process",
      intro: "Hiring help in Lahore is simple with Aya Sir G:",
      steps: [
        {
          title: "Submit Your Request",
          text: "Choose your service on the website or message us on WhatsApp. Tell us your area and need (e.g., house maid required in Lahore or plumber in Lahore).",
        },
        {
          title: "Get Matched Profiles",
          text: "Our team shares worker or technician profiles available near your location.",
        },
        {
          title: "Service at Your Doorstep",
          text: "The professional visits at your chosen time and completes the job to your satisfaction.",
        },
        {
          title: "Feedback & Support",
          text: "Share feedback after the visit. If anything is not right, our support team follows up promptly.",
        },
      ],
    },
    safetyChecklist: {
      title: "Our Quality & Support Promise",
      intro: "Every Lahore service booking includes:",
      items: [
        {
          title: "Quality Work Guarantee",
          text: "Not satisfied with the work? Contact us and we will work toward a fair resolution.",
        },
        {
          title: "Dedicated Customer Support",
          text: "Our team is available to help with booking questions and follow-up after your service.",
        },
        {
          title: "Quick Replacement",
          text: "Monthly maid left suddenly? We help arrange a replacement profile without unnecessary delay.",
        },
      ],
    },
    whyPrefer: {
      title: "Why Lahore Prefers Aya Sir G",
      items: [
        {
          title: "Trusted Professionals",
          text: "Browse clear profiles and choose the helper or technician that fits your needs.",
        },
        {
          title: "Easy Booking",
          text: "No endless phone calls. Book online or on WhatsApp in minutes.",
        },
        {
          title: "Affordable Pricing",
          text: "Competitive rates with transparent communication—no hidden surprises.",
        },
        {
          title: "Local Coverage",
          text: "Wide reach across major Lahore neighbourhoods and housing societies.",
        },
      ],
    },
    areasServed: {
      title: "Areas We Serve in Lahore",
      intro:
        "Our network covers major residential and commercial zones across Lahore:",
      zones: [
        {
          label: "Zone A (Central & Gulberg)",
          text: "Gulberg (I, II, III), MM Alam Road, Liberty Market, Main Boulevard, and surrounding commercial areas.",
        },
        {
          label: "Zone B (DHA, Johar Town & South)",
          text: "DHA Lahore (Phases 1–9), Johar Town, Valencia Town, Wapda Town, and Bahria Town Lahore.",
        },
        {
          label: "Zone C (Model Town, Cantt & East)",
          text: "Model Town, Cantt, Ferozepur Road corridors, NFC, Township, and Defence Raya.",
        },
      ],
    },
  },
  karachi: {
    slug: "karachi",
    name: "Karachi",
    variant: "rich",
    routePath: "/services/karachi",
    tagline: "The City of Lights",
    metaTitle:
      "Home Maintenance & Domestic Services Karachi | Aya Sir G",
    metaDescription:
      "Need an urgent professional plumber in Karachi or a reliable house maid required in Karachi? Book maid service Karachi, pest control, and deep cleaning. Live stress-free!",
    heroImage:
      "https://images.unsplash.com/photo-1646802640155-db23ebc3761f?q=80&w=907&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=1200&q=80",
    heroAlt: "Karachi skyline at dusk",
    hero: {
      h1: "Complete Home Care, Repair & Karachi Services at Your Doorstep",
      subheading:
        "Managing a home or office in the City of Lights can be exhausting. Whether a professional house maid required in Karachi is your urgent need, or you are looking for a reliable technician to fix your appliances, Aya Sir G has got you covered. Get skilled, trusted experts today.",
      ctaPrimary: "Book a Service Now",
      ctaSecondary: "View Pricing Plans",
      ctaTertiary: "Chat On WhatsApp",
      whatsappHref: "https://wa.me/923098574093",
    },
    welcome: {
      title: "Why Karachi Needs Smart Home Solutions",
      subtitle: "Simplifying Daily Life in Pakistan’s Biggest Metropolis",
      paragraphs: [
        "Karachi is a city that never stops. With long commutes, hectic office hours, and traffic jams, managing your house or office manually becomes a second job. Finding a trusted helper through traditional references is risky and time-consuming.",
        "Aya Sir G solves this problem by offering highly professional Karachi services. We bridge the gap between busy homeowners and skilled workers. From high-rise apartments in Clifton to commercial spaces on Shahrah-e-Faisal, our team ensures your property stays clean, safe, and perfectly maintained.",
      ],
    },
    popularServices: {
      title: "Our Popular Services in Karachi",
      items: [
        {
          title: "Professional Maid Service Karachi",
          text: "If a house maid required in Karachi is your top priority, we provide trained, professional helpers for your home. Our premium maid service Karachi covers everything from deep house cleaning and cooking to professional babysitting.",
        },
        {
          title: "Certified Plumber in Karachi",
          text: "Fix plumbing leaks, water pump failures, and pipe blockages instantly with our expert plumber in Karachi. We offer fast, affordable, and high-quality bathroom and kitchen repair services right at your doorstep.",
        },
        {
          title: "Deep Sofa Cleaning Service Karachi",
          text: "Remove tough stains, coastal dust, and bad odors from your furniture with our top-rated sofa cleaning service. We use eco-friendly shampoos and advanced vacuum machines to make your luxury cushions look brand new.",
        },
        {
          title: "Professional Water Tank Cleaning Services Karachi",
          text: "Keep your family safe from sand, mud, and water-borne bacteria by booking our water tank cleaning services Karachi packages. Our team provides complete chemical scrubbing and chlorine disinfection for clean water.",
        },
        {
          title: "Quick Washing Machine Repair Karachi",
          text: "Don't let laundry trouble ruin your day due to hard water or electric voltage issues. Get quick washing machine repair in Karachi with genuine spare parts and service warranty.",
        },
        {
          title: "Eco-Friendly Pest Control Karachi",
          text: "Eliminate cockroaches, bedbugs, and termites permanently with our advanced pest control Karachi services. We use premium, low-toxicity, and completely odorless sprays that are 100% safe for kids and pets.",
        },
      ],
    },
    commercialResidential: {
      title: "Commercial vs Residential Services",
      intro:
        "Hum sirf gharon ke liye kaam nahi karte, balki Karachi ke corporate sector aur businesses ke liye bhi alag solutions provide karte hain:",
      items: [
        {
          title: "For Corporate Offices & Shops",
          text: "We provide professional office boys, corporate pest control standard cleanings, and deep sofa/carpet vacuuming for corporate offices on Shahrah-e-Faisal, Clifton, and I.I. Chundrigar Road.",
        },
        {
          title: "For Residential Buildings & Apartments",
          text: "Dedicated maid service Karachi for flats, continuous water tank cleaning packages for apartment unions, and on-call plumber in Karachi solutions for high-rise residential projects.",
        },
      ],
    },
    seasonalGuide: {
      title: "Seasonal Home Maintenance Guide for Karachiites",
      intro:
        "Karachi ke badalte mausam aur halat ke mutabiq aapko kab kaunsi service lazmi book karni chahiye:",
      items: [
        {
          title: "Before Monsoon (Rainy Season)",
          text: "Karachi ki barishon se pehle apne underground tanks saaf karwayen taaki ganda pani mix na ho. Hamari water tank cleaning services Karachi team is ke liye best hai. Sath hi, gutters block hone se pehle plumber in Karachi book karein.",
        },
        {
          title: "During High Humidity (Summer/Post-Rain)",
          text: "Jab hawa mein nami barh jati hai to deemak aur cockroaches bohot aate hain. Is mausam mein pest control Karachi package lazmi karwayen. Is ke sath sofas ko fungus se bachane ke liye sofa cleaning service ki deep extraction clean karwayen.",
        },
      ],
    },
    howItWorks: {
      title: "Our Step-by-Step Booking Process",
      intro: "We have made hiring incredibly simple for Karachiites. Here is how it works:",
      steps: [
        {
          title: "Submit Your Request",
          text: "Select the service you need on our website or click the WhatsApp button. Specify your location and requirements (e.g., if a house maid required in Karachi for an apartment or a house).",
        },
        {
          title: "Get Match Profiles",
          text: "Our customer support team reviews your request and shares profiles of available candidates or technicians nearby.",
        },
        {
          title: "Service Execution",
          text: "The professional reaches your address at the scheduled time and completes the job with perfection.",
        },
        {
          title: "Feedback Loop",
          text: "We take your feedback after the job to ensure you are 100% satisfied.",
        },
      ],
    },
    safetyChecklist: {
      title: "Our Quality & Support Promise",
      intro: "Every Karachi service booking includes:",
      items: [
        {
          title: "Quality Work Guarantee",
          text: "If you are not happy with the repair or cleaning, our customer support is here to help resolve it.",
        },
        {
          title: "Dedicated Customer Support",
          text: "Reach us by phone, email, or WhatsApp for booking help and follow-up.",
        },
        {
          title: "Replacement Policy",
          text: "If a monthly helper leaves or does not meet your expectations, we help arrange a replacement profile.",
        },
      ],
    },
    areasServed: {
      title: "Neighborhoods We Serve in Karachi",
      intro:
        "We have a wide network of workers and technicians covering all major residential and commercial sectors of Karachi:",
      zones: [
        {
          label: "Zone A (South & East)",
          text: "Defense Housing Authority (DHA Phases 1-8), Clifton, PECHS, Bahadurabad, KDA Scheme 1, Mohammad Ali Society (MACHS).",
        },
        {
          label: "Zone B (Central & North)",
          text: "Gulshan-e-Iqbal, Gulistan-e-Jauhar, North Nazimabad, Federal B. Area, and Buffer Zone.",
        },
        {
          label: "Zone C (Gated & Suburban)",
          text: "Bahria Town Karachi, DHA City, Malir Cantt, and Naval Anchorage Karachi.",
        },
      ],
    },
  },
  islamabad: {
    slug: "islamabad",
    name: "Islamabad",
    variant: "rich",
    routePath: "/services/islamabad",
    tagline: "Islamabad & Rawalpindi",
    metaTitle: "Best Home & Office Services in Islamabad | Aya Sir G",
    metaDescription:
      "Looking for a house maid required in Islamabad? Hire maid service Islamabad, professional plumbers, pest control, and sofa cleaning. Book today!",
    heroImage:
      "https://images.unsplash.com/photo-1470756544705-1848092fbe5f?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=1200&q=80",
    heroAlt: "Islamabad — Faisal Mosque and city view",
    hero: {
      h1: "Professional Home & Islamabad Services for Your Daily Needs",
      subheading:
        "Is a house maid required in Islamabad for your home? Or do you need a quick repair? Aya Sir G connects you with trusted maids, plumbers, and cleaning experts across the capital city.",
      ctaPrimary: "Book a Service Now",
      ctaSecondary: "View Prices",
    },
    welcome: {
      title: "Welcome to Aya Sir G Islamabad",
      subtitle: "Making Your Life Easy in Islamabad & Rawalpindi",
      text: "Life in the capital city is busy. Finding time for home cleaning, repairs, and daily chores can be hard. That is why Aya Sir G is here to offer premium Islamabad services. We provide top-rated, reliable helpers right at your doorstep. You don't need to worry about quality anymore—we handle everything for you!",
    },
    popularServices: {
      title: "Our Popular Services in Islamabad",
      items: [
        {
          title: "Premium Maid Service Islamabad",
          text: "If a house maid required in Islamabad is your main worry, we have the perfect solution. We offer full-time and part-time professional maid service Islamabad for home cleaning, cooking, and baby-sitting.",
        },
        {
          title: "Professional Plumber in Islamabad",
          text: "Leaking pipes or bathroom issues? Book an expert plumber in Islamabad through our platform. Our plumbers are quick, experienced, and carry all the modern tools to fix your water problems instantly.",
        },
        {
          title: "Deep Sofa Cleaning Service Islamabad",
          text: "Don't let dust and stains ruin your furniture. Our premium sofa cleaning service Islamabad uses safe materials to make your sofas look and smell fresh like new.",
        },
        {
          title: "Water Tank Cleaning Services Islamabad",
          text: "Dirty water causes diseases. Keep your family safe with our professional water tank cleaning services Islamabad. We deep clean both underground and overhead tanks.",
        },
        {
          title: "Reliable Washing Machine Repair Islamabad",
          text: "Is your washer not spinning or leaking water? Don't worry. Our tech experts provide fast washing machine repair Islamabad so your laundry routine never stops.",
        },
        {
          title: "Safe Pest Control Islamabad",
          text: "Get rid of cockroaches, termites, bedbugs, and rats. Our eco-friendly pest control Islamabad team uses safe sprays to protect your home and office from pests.",
        },
      ],
    },
    howItWorks: {
      title: "How It Works – 3 Easy Steps",
      intro: "Humne hiring process ko bilkul simple bana diya hai:",
      steps: [
        {
          title: "Step 1: Choose Your Service",
          text: "Select the service you need (e.g., if a house maid required in Islamabad or you need a plumber in Islamabad).",
        },
        {
          title: "Step 2: Schedule a Time",
          text: "Pick a date and time that is comfortable for you.",
        },
        {
          title: "Step 3: Relax & Enjoy",
          text: "Our professional will reach your address and finish the job perfectly.",
        },
      ],
    },
    safetyChecklist: {
      title: "Our Quality & Support Promise",
      intro: "Every Islamabad service booking includes:",
      items: [
        {
          title: "Quality Work Guarantee",
          text: "If you are not happy with our repair or cleaning, our customer support is here to fix it.",
        },
        {
          title: "Dedicated Customer Support",
          text: "Our team helps you book, schedule, and follow up after the service is done.",
        },
        {
          title: "Quick Replacement",
          text: "If your monthly maid leaves, we help you find a new profile quickly without extra hassle.",
        },
      ],
    },
    whyPrefer: {
      title: "Why Islamabad Prefers Aya Sir G",
      items: [
        {
          title: "Trusted Professionals",
          text: "Browse profiles and hire the helper or technician that suits your home or office.",
        },
        {
          title: "Easy Booking",
          text: "No long processes. Just choose your service, pick a time, and our expert will reach your home.",
        },
        {
          title: "Affordable Pricing",
          text: "We offer high-quality services at competitive rates with no hidden fees.",
        },
        {
          title: "Quick Replacement",
          text: "If you are hiring a maid and you are not happy, we provide a quick and easy replacement.",
        },
      ],
    },
    areasServed: {
      title: "Areas We Serve in Islamabad",
      intro:
        "We cover all sectors and societies in the capital city. Our team is available in:",
      sectors:
        "Sectors: F-6, F-7, F-8, F-10, F-11, E-7, E-11, G-11, G-13, H-13, and I-8.",
      societies:
        "Housing Societies: DHA Islamabad (Phases 1-5), Bahria Town Islamabad (Phases 1-8), Gulberg Greens, Naval Anchorage, and Bani Gala.",
    },
  },
};

export function getCityPage(slug) {
  const key = String(slug || "").toLowerCase();
  return CITY_PAGES[key] || null;
}

/** Resolve city id from API for listing deep-links (?city=) */
export async function fetchCityIdByName(cityName) {
  if (!cityName) return null;
  try {
    const res = await fetch(`${API_BASE}/api/city-list`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ state_id: 2728 }),
      next: { revalidate: 3600 },
    });
    if (res.ok) {
      const json = await res.json();
      const rows = Array.isArray(json?.data) ? json.data : [];
      const match = rows.find(
        (c) =>
          c?.name &&
          String(c.name).toLowerCase() === String(cityName).toLowerCase()
      );
      if (match?.id != null) return String(match.id);
    }
  } catch (err) {
    console.warn("fetchCityIdByName API failed, using static fallback", err);
  }
  const lower = String(cityName).toLowerCase();
  if (lower === "karachi") return "1";
  if (lower === "lahore") return "2";
  if (lower === "islamabad") return "9";
  return null;
}
