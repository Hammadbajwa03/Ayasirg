import { getServicePageMetadata } from "@/app/lib/serviceChooseContent";

export const metadata = getServicePageMetadata("automotive-mechanic");

export default function AutomotiveMechanicLayout({ children }) {
  return children;
}
