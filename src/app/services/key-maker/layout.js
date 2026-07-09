import { getServicePageMetadata } from "@/app/lib/serviceChooseContent";

export const metadata = getServicePageMetadata("key-maker");

export default function KeyMakerLayout({ children }) {
  return children;
}
