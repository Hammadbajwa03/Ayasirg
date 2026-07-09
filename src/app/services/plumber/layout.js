import { getServicePageMetadata } from "@/app/lib/serviceChooseContent";

export const metadata = getServicePageMetadata("plumber");

export default function PlumberLayout({ children }) {
  return children;
}
