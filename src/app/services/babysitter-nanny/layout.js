import { getServicePageMetadata } from "@/app/lib/serviceChooseContent";

export const metadata = getServicePageMetadata("babysitter-nanny");

export default function BabysitterNannyLayout({ children }) {
  return children;
}
