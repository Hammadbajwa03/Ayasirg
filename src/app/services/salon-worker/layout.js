import { getServicePageMetadata } from "@/app/lib/serviceChooseContent";

export const metadata = getServicePageMetadata("salon-worker");

export default function SalonWorkerLayout({ children }) {
  return children;
}
