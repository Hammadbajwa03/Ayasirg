import { getServicePageMetadata } from "@/app/lib/serviceChooseContent";

export const metadata = getServicePageMetadata("pest-control-termite-treatment");

export default function PestControlLayout({ children }) {
  return children;
}
