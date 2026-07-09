import { getServicePageMetadata } from "@/app/lib/serviceChooseContent";

export const metadata = getServicePageMetadata("ac-technician");

export default function AcTechnicianLayout({ children }) {
  return children;
}
