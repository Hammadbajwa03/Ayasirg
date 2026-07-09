import { getServicePageMetadata } from "@/app/lib/serviceChooseContent";

export const metadata = getServicePageMetadata("housekeeping");

export default function HousekeepingLayout({ children }) {
  return children;
}
