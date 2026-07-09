import { getServicePageMetadata } from "@/app/lib/serviceChooseContent";

export const metadata = getServicePageMetadata("caretaker");

export default function CaretakerLayout({ children }) {
  return children;
}
