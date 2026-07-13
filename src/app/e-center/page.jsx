import React, { Suspense } from "react";
import { redirect } from "next/navigation";
import SeoIntroBlock from "@/app/components/seo/SeoIntroBlock";
import { getEcenterIntro } from "@/app/lib/pageSeoContent";
import {
  getEcenterHref,
  getEcenterPageTitle,
  resolveApiRole,
} from "@/app/lib/ecenterRoutes";
import EcenterFormClient from "./EcenterFormClient";
import "./e-center.css";

export default async function Page({ searchParams }) {
  const params = await searchParams;
  const rawType = params?.type;

  // Old/unprofessional query URLs → clean paths
  if (rawType) {
    const href = getEcenterHref(rawType);
    if (href !== "/e-center") {
      redirect(href);
    }
  }

  const title = getEcenterPageTitle(rawType);
  const intro = getEcenterIntro();
  const apiRole = resolveApiRole(rawType);

  return (
    <section className="Form_section">
      <div className="container myform_page">
        <h1>{title}</h1>
        <SeoIntroBlock paragraphs={intro.paragraphs} />
        <Suspense fallback={<div className="text-center py-4">Loading form...</div>}>
          <EcenterFormClient initialUserType={apiRole} />
        </Suspense>
      </div>
    </section>
  );
}
