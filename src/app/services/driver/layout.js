import { getServicePageMetadata } from "@/app/lib/serviceChooseContent";

export const metadata = getServicePageMetadata("driver");

export default function DriverLayout({ children }) {
  return children;
}
