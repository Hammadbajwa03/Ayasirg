import { getServicePageMetadata } from "@/app/lib/serviceChooseContent";

export const metadata = getServicePageMetadata("sweeper");

export default function SweeperLayout({ children }) {
  return children;
}
