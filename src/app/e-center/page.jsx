import React, { Suspense } from "react";
import MyFormPage from "./MyFormPage";
import "./e-center.css";

function getPageTitle(type) {
  if (type === "handyman") return "Add New Individual";
  if (type === "provider") return "Add New Company";
  return "E-Center Registration";
}

export default async function Page({ searchParams }) {
  const params = await searchParams;
  const title = getPageTitle(params?.type);

  return (
    <section className="Form_section">
      <div className="container myform_page">
        <h1>{title}</h1>
        <Suspense fallback={<div>Loading form...</div>}>
          <MyFormPage />
        </Suspense>
      </div>
    </section>
  );
}
