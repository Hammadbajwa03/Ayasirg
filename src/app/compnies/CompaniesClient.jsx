"use client";
import React, { Suspense } from "react";
import "./individuals.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import CompaniesServiceJsonLd from "../components/seo/CompaniesServiceJsonLd";
import { getCategoryBySlug } from "@/app/lib/categoryRoutes";

const ButtonComp = dynamic(() => import("../components/Button-component/ButtonComp"), {
  ssr: false,
});

const Filterbar = dynamic(() => import("../components/Filter-bar/Filter-bar"), {
  ssr: false,
});

function SearchParamsWrapper({ categoryId, categoryName, categorySlug }) {
  const searchParams = useSearchParams();
  const role = searchParams.get("role") || "handyman";
  const gender = searchParams.get("gender") || "";
  const age_range = searchParams.get("age_range") || "";
  const city = searchParams.get("city") || "";
  const resolvedCategoryId =
    searchParams.get("category_id") || categoryId || "";
  const area_code = searchParams.get("area_code") || "";
  const verified_status = searchParams.get("verified_status") || "";
  const rating = searchParams.get("rating") || "";

  const qs = searchParams.toString();

  return (
    <>
      <CompaniesServiceJsonLd
        categoryId={resolvedCategoryId}
        categorySlug={categorySlug}
        queryString={qs}
      />
      <div className="row">
        <div className="col-lg-4 col_filter">
          <Filterbar
            dataSearch={{
              role,
              gender,
              age_range,
              city,
              category_id: resolvedCategoryId,
              area_code,
              verified_status,
              rating,
            }}
          />
        </div>
        <div className="col-lg-8 col-md-12 col-sm-12">
          <ButtonComp
            searchParamdata={{ age_range, gender, verified_status }}
            categoryId={resolvedCategoryId}
          />
        </div>
      </div>
    </>
  );
}

export default function CompaniesClient({
  categoryId = "",
  categoryName = "",
  categorySlug = "",
}) {
  const resolvedName =
    categoryName ||
    (categorySlug ? getCategoryBySlug(categorySlug)?.name : "") ||
    "";
  const pageTitle = resolvedName
    ? `Find Verified ${resolvedName}`
    : "Find Verified Companies & Workers";

  return (
    <section className="individuals margin_navbar">
      <div className="container content py-3">
        <h1 className="fw-bold mb-3">{pageTitle}</h1>
        <Suspense
          fallback={
            <div className="d-flex flex-wrap gap-3">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="card_div py-3 px-4 skeleton_card">
                  <Skeleton circle height={100} width={100} />
                  <Skeleton height={20} width={`60%`} className="mt-3" />
                  <Skeleton height={15} width={`40%`} className="mt-2" />
                  <Skeleton height={15} width={`80%`} className="mt-2" />
                  <Skeleton height={15} width={`50%`} className="mt-2" />
                  <Skeleton height={15} width={`70%`} className="mt-2" />
                  <Skeleton height={30} width={`100%`} className="mt-3" />
                </div>
              ))}
            </div>
          }
        >
          <SearchParamsWrapper
            categoryId={categoryId}
            categoryName={resolvedName}
            categorySlug={categorySlug}
          />
        </Suspense>
      </div>
    </section>
  );
}
