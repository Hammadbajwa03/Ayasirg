import { redirect } from "next/navigation";

/** Legacy URL → canonical SEO path */
export default function IslamabadRedirectPage() {
  redirect("/services/islamabad");
}
