import { getServicePageMetadata } from "@/app/lib/serviceChooseContent";

export const metadata = getServicePageMetadata("electrician");

export default function ElectricianLayout({ children }) {
  return children;
}
