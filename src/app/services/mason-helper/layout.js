import { getServicePageMetadata } from "@/app/lib/serviceChooseContent";

export const metadata = getServicePageMetadata("mason-helper");

export default function MasonHelperLayout({ children }) {
  return children;
}
