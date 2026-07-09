import { getServicePageMetadata } from "@/app/lib/serviceChooseContent";

export const metadata = getServicePageMetadata("painter");

export default function PainterLayout({ children }) {
  return children;
}
