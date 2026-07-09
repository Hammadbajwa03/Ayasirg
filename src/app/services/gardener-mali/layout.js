import { getServicePageMetadata } from "@/app/lib/serviceChooseContent";

export const metadata = getServicePageMetadata("gardener-mali");

export default function GardenerMaliLayout({ children }) {
  return children;
}
