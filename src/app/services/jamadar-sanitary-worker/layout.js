import { getServicePageMetadata } from "@/app/lib/serviceChooseContent";

export const metadata = getServicePageMetadata("jamadar-sanitary-worker");

export default function JamadarSanitaryLayout({ children }) {
  return children;
}
