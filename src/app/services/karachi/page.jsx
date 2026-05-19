import { notFound } from "next/navigation";
import CityPageRichView from "@/app/components/city-page/CityPageRichView";
import { fetchCityIdByName, getCityPage } from "@/app/lib/cityPages";

const SLUG = "karachi";

export async function generateMetadata() {
  const city = getCityPage(SLUG);
  if (!city) return {};
  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: {
      canonical: "/services/karachi",
    },
  };
}

export default async function KarachiServicesPage() {
  const city = getCityPage(SLUG);
  if (!city) notFound();
  const cityId = await fetchCityIdByName(city.name);
  return <CityPageRichView city={city} cityId={cityId} />;
}
