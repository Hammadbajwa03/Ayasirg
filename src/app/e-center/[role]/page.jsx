import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import SeoIntroBlock from "@/app/components/seo/SeoIntroBlock";
import { getEcenterIntro } from "@/app/lib/pageSeoContent";
import {
  getEcenterPageTitle,
  resolveApiRole,
} from "@/app/lib/ecenterRoutes";
import MyFormPage from "../MyFormPage";
import "../e-center.css";

export async function generateMetadata({ params }) {
  const { role } = await params;
  const title = getEcenterPageTitle(role);
  return {
    title: `${title} | Aya Sir G!`,
    robots: { index: false, follow: false },
  };
}

export default async function Page({ params }) {
  const { role } = await params;
  const apiRole = resolveApiRole(role);
  if (!apiRole) notFound();

  const title = getEcenterPageTitle(role);
  const intro = getEcenterIntro();

  return (
    <section className="Form_section">
      <div className="container myform_page">
        <h1>{title}</h1>
        <SeoIntroBlock paragraphs={intro.paragraphs} />
        <Suspense fallback={<div>Loading form...</div>}>
          <MyFormPage initialUserType={apiRole} />
        </Suspense>
      </div>
    </section>
  );
}
