import { getServicePageMetadata } from "@/app/lib/serviceChooseContent";

export const metadata = getServicePageMetadata("beautician");

export default function BeauticianLayout({ children }) {
  return children;
}
