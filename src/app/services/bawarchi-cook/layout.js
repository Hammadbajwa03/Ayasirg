import { getServicePageMetadata } from "@/app/lib/serviceChooseContent";

export const metadata = getServicePageMetadata("bawarchi-cook");

export default function BawarchiCookLayout({ children }) {
  return children;
}
