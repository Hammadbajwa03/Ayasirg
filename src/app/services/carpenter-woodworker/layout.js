import { getServicePageMetadata } from "@/app/lib/serviceChooseContent";

export const metadata = getServicePageMetadata("carpenter-woodworker");

export default function CarpenterLayout({ children }) {
  return children;
}
