import { getServicePageMetadata } from "@/app/lib/serviceChooseContent";

export const metadata = getServicePageMetadata("welding-worker");

export default function WeldingWorkerLayout({ children }) {
  return children;
}
