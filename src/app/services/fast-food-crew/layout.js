import { getServicePageMetadata } from "@/app/lib/serviceChooseContent";

export const metadata = getServicePageMetadata("fast-food-crew");

export default function FastFoodCrewLayout({ children }) {
  return children;
}
