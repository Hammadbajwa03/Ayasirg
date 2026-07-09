import { getServicePageMetadata } from "@/app/lib/serviceChooseContent";

export const metadata = getServicePageMetadata("solar-technician");

export default function SolarTechnicianLayout({ children }) {
  return children;
}
