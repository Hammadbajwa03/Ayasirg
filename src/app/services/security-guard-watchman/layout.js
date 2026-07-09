import { getServicePageMetadata } from "@/app/lib/serviceChooseContent";

export const metadata = getServicePageMetadata("security-guard-watchman");

export default function SecurityGuardLayout({ children }) {
  return children;
}
