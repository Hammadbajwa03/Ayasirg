

// "use client";
// import React, { useContext, useEffect, useState } from "react";
// import "./button_comp.css";
// import Card from "../Personal-card/Card";
// import CompanyCard from "../compnies-card/CompanyCard";
// import { UserContext } from "@/app/userContext";
// import { useSearchParams, useRouter } from "next/navigation";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";

// export default function ButtonComp({ searchParamdata }) {
//   const { gender, age_range, verified_status } = searchParamdata;

//   const {
//     filteredUsers,
//     getFilteredUsers,
//     loader,
//     toggleLike,
//     paginations,
//   } = useContext(UserContext);

//   const searchParams = useSearchParams();
//   const router = useRouter();

//   const role = searchParams.get("role") || "handyman";
//   const category_id = searchParams.get("category_id") || "";
//   const city = searchParams.get("city") || "";
//   const area_code = searchParams.get("area_code") || "";


//   const [individual, setIndividual] = useState(role !== "provider");
//   const [filtersChanged, setFiltersChanged] = useState(false);

//   const getPageKey = (r) => `${r}_page`;
//   const [currentPage, setCurrentPage] = useState(1);

//   // Load role and page from URL/localStorage
//   useEffect(() => {
//     setIndividual(role !== "provider");

//     const urlPage = parseInt(searchParams.get("page"));
//     const savedPage = parseInt(localStorage.getItem(getPageKey(role)));
//     const fromHome = sessionStorage.getItem("fromHome");

//     if (fromHome === "true") {
//       localStorage.setItem(getPageKey(role), "1");
//       setCurrentPage(1);
//       return;
//     }

//     if (!isNaN(urlPage)) {
//       localStorage.setItem(getPageKey(role), urlPage.toString());
//       setCurrentPage(urlPage);
//       sessionStorage.removeItem("fromHome");
//     } else if (!isNaN(savedPage)) {
//       setCurrentPage(savedPage);
//       sessionStorage.removeItem("fromHome");
//     } else {
//       localStorage.setItem(getPageKey(role), "1");
//       setCurrentPage(1);
//     }
//   }, [role, searchParams]);

//   // Filter change → page 1
//   useEffect(() => {
//     if (filtersChanged) {
//       setCurrentPage(1);
//     } else {
//       setFiltersChanged(true);
//     }
//   }, [category_id, city, area_code, verified_status, age_range, gender]);

//   // API call with page + per_page
//   useEffect(() => {
//     const perPage = paginations?.per_page || 6; // safe fallback

//     getFilteredUsers({
//       role,
//       category_id,
//       city,
//       area_code,
//       page: currentPage,
//       // limit: perPage, // yahan per_page bhejna zyada sahi hai
//       gender,
//       age_range,
//       verified_status,
//     });
//   }, [
//     role,
//     category_id,
//     city,
//     area_code,
//     gender,
//     age_range,
//     verified_status,
//     currentPage,
//     // per_page agar dynamically change hota hai to:
//     // paginations?.per_page,
//   ]);

//   // URL update
//   useEffect(() => {
//     localStorage.setItem(getPageKey(role), currentPage.toString());

//     const params = new URLSearchParams(searchParams.toString());
//     if (currentPage === 1) {
//       params.delete("page");
//     } else {
//       params.set("page", currentPage.toString());
//       sessionStorage.removeItem("fromHome");
//     }
//     router.replace(`?${params.toString()}`);
//   }, [currentPage, role]);

//   const handleToggle = (targetRole) => {
//     const newParams = new URLSearchParams();
//     newParams.set("role", targetRole);
//     const savedPage =
//       parseInt(localStorage.getItem(getPageKey(targetRole))) || 1;
//     if (savedPage > 1) newParams.set("page", savedPage.toString());

//     router.push(`?${newParams.toString()}`);
//   };

//   const totalPages = paginations?.total_pages || 0; // safe access

//   const renderPagination = () => {
//     if (!totalPages || totalPages <= 1) return null;

//     const maxVisiblePages = 5;
//     let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
//     let endPage = startPage + maxVisiblePages - 1;

//     if (endPage > totalPages) {
//       endPage = totalPages;
//       startPage = Math.max(1, endPage - maxVisiblePages + 1);
//     }

//     const visiblePages = Array.from(
//       { length: endPage - startPage + 1 },
//       (_, i) => startPage + i
//     );

//     return (
//       <div className="pagination d-flex gap-2 justify-content-center mt-4 align-items-center">
//         <button
//           className="page-btn"
//           onClick={() => setCurrentPage(1)}
//           disabled={currentPage === 1}
//         >
//           First
//         </button>

//         <button
//           className="page-btn"
//           onClick={() => setCurrentPage(currentPage - 1)}
//           disabled={currentPage === 1}
//         >
//           Pre
//         </button>

//         {visiblePages.map((page) => (
//           <button
//             key={page}
//             className={`page-btn ${currentPage === page ? "active" : ""}`}
//             onClick={() => setCurrentPage(page)}
//           >
//             {page}
//           </button>
//         ))}

//         {currentPage < totalPages && (
//           <button
//             className="page-btn"
//             onClick={() => setCurrentPage(currentPage + 1)}
//           >
//             Next
//           </button>
//         )}
//         {currentPage < totalPages && (
//           <button
//             className="page-btn"
//             onClick={() => setCurrentPage(totalPages)}
//           >
//             Last
//           </button>
//         )}
//       </div>
//     );
//   };

//   return (
//     <div className="container">
//       <div className="button_comp">
//         {/* Tabs */}
//         <div className="mb-3 btn_div d-flex align-items-center justify-content-center gap-3 py-3 px-4">
//           <div
//             className={`single_btn py-2 px-3 individual ${
//               individual ? "active" : ""
//             }`}
//             onClick={() => handleToggle("handyman")}
//           >
//             <h3>Individuals</h3>
//           </div>
//           <div
//             className={`single_btn companies py-2 px-3 ${
//               !individual ? "active" : ""
//             }`}
//             onClick={() => handleToggle("provider")}
//           >
//             <h3>Companies</h3>
//           </div>
//         </div>

//         {/* Loader & Cards */}
//         {loader ? (
//           <div className="card_wrapper_div row">
//             {Array.from({ length: 4 }).map((_, index) => (
//               <div key={index} className=" mb-3 col-lg-6 col-sm-12">
//                 <div className="card_div py-3 px-4 skeleton_card">
//                   <Skeleton circle height={100} width={100} />
//                   <Skeleton height={20} width="60%" className="mt-3" />
//                   <Skeleton height={15} width="40%" className="mt-2" />
//                   <Skeleton height={15} width="80%" className="mt-2" />
//                   <Skeleton height={15} width="50%" className="mt-2" />
//                   <Skeleton height={15} width="70%" className="mt-2" />
//                   <Skeleton height={30} width="100%" className="mt-3" />
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : filteredUsers?.length > 0 ? (
//           <>
//             {individual ? (
//               <div className="card_wrapper_div row align-items-stretch">
//                 {filteredUsers.map((user) => (
//                   <Card
//                     key={user.id}
//                     data={user}
//                     onLike={toggleLike}
//                     router={router}
//                   />
//                 ))}
//               </div>
//             ) : (
//               <div>
//                 {filteredUsers.map((user) => (
//                   <CompanyCard
//                     key={user.id}
//                     data={user}
//                     onLike={toggleLike}
//                     router={router}
//                   />
//                 ))}
//               </div>
//             )}
//             {renderPagination()}
//           </>
//         ) : (
//           <h4 className="not_found_design">
//             No {individual ? "individual" : "company"} profiles found.
//           </h4>
//         )}
//       </div>
//     </div>
//   );
// }


"use client";
import React, { useContext, useEffect, useRef } from "react";
import "./button_comp.css";
import Card from "../Personal-card/Card";
import CompanyCard from "../compnies-card/CompanyCard";
import { UserContext } from "@/app/userContext";
import { useSearchParams, useRouter } from "next/navigation";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ButtonComp({ searchParamdata }) {
  const { gender, age_range, verified_status } = searchParamdata;

  const { filteredUsers, getFilteredUsers, loader, toggleLike, paginations } =
    useContext(UserContext);

  const searchParams = useSearchParams();
  const router = useRouter();

  // URL params
  const role = searchParams.get("role") || "handyman";
  const category_id = searchParams.get("category_id") || "";
  const city = searchParams.get("city") || "";
  const area_code = searchParams.get("area_code") || "";
  const pageParam = searchParams.get("page");
  const currentPage = pageParam ? parseInt(pageParam) : 1; // always derive from URL

  const individual = role !== "provider";

  // Ref to track previous filters
  const prevFiltersRef = useRef({
    category_id,
    city,
    area_code,
    gender,
    age_range,
    verified_status,
  });

  // Reset page to 1 when filters actually change
  useEffect(() => {
    const prev = prevFiltersRef.current;
    const filtersChanged =
      prev.category_id !== category_id ||
      prev.city !== city ||
      prev.area_code !== area_code ||
      prev.gender !== gender ||
      prev.age_range !== age_range ||
      prev.verified_status !== verified_status;

    if (filtersChanged) {
      // Update URL with page=1 whenever filters change
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", "1"); 
      router.replace(`?${params.toString()}`);
    }

    prevFiltersRef.current = {
      category_id,
      city,
      area_code,
      gender,
      age_range,
      verified_status,
    };
  }, [category_id, city, area_code, gender, age_range, verified_status]);

  // API call whenever params or page change
  useEffect(() => {
    getFilteredUsers({
      role,
      category_id,
      city,
      area_code,
      page: currentPage,
      gender,
      age_range,
      verified_status,
    });
  }, [
    role,
    category_id,
    city,
    area_code,
    gender,
    age_range,
    verified_status,
    currentPage,
  ]);

  // Pagination / URL update
  const goToPage = (page) => {
    const params = new URLSearchParams(searchParams.toString());
    if (page === 1) params.delete("page");
    else params.set("page", page.toString());
    router.replace(`?${params.toString()}`);
  };

  // Role toggle
  const handleToggle = (targetRole) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("role", targetRole);
    params.delete("page"); // reset page to 1
    router.replace(`?${params.toString()}`);
  };

  const totalPages = paginations?.total_pages || 0;

  const renderPagination = () => {
    if (!totalPages || totalPages <= 1) return null;

    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = startPage + maxVisiblePages - 1;
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    const visiblePages = Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );

    return (
      <div className="pagination d-flex gap-2 justify-content-center mt-4 align-items-center">
        <button
          className="page-btn"
          onClick={() => goToPage(1)}
          disabled={currentPage === 1}
        >
          First
        </button>
        <button
          className="page-btn"
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Pre
        </button>

        {visiblePages.map((page) => (
          <button
            key={page}
            className={`page-btn ${currentPage === page ? "active" : ""}`}
            onClick={() => goToPage(page)}
          >
            {page}
          </button>
        ))}

        <button
          className="page-btn"
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
        <button
          className="page-btn"
          onClick={() => goToPage(totalPages)}
          disabled={currentPage === totalPages}
        >
          Last
        </button>
      </div>
    );
  };

  return (
    <div className="container">
      <div className="button_comp">
        {/* Tabs */}
        <div className="mb-3 btn_div d-flex align-items-center justify-content-center gap-3 py-3 px-4">
          <div
            className={`single_btn py-2 px-3 individual ${individual ? "active" : ""}`}
            onClick={() => handleToggle("handyman")}
          >
            <h3>Individuals</h3>
          </div>
          <div
            className={`single_btn companies py-2 px-3 ${!individual ? "active" : ""}`}
            onClick={() => handleToggle("provider")}
          >
            <h3>Companies</h3>
          </div>
        </div>

        {/* Loader */}
        {loader ? (
          <div className="card_wrapper_div row">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="mb-3 col-lg-6 col-sm-12">
                <div className="card_div py-3 px-4 skeleton_card">
                  <Skeleton circle height={100} width={100} />
                  <Skeleton height={20} width="60%" className="mt-3" />
                  <Skeleton height={15} width="40%" className="mt-2" />
                  <Skeleton height={15} width="80%" className="mt-2" />
                  <Skeleton height={30} width="100%" className="mt-3" />
                </div>
              </div>
            ))}
          </div>
        ) : filteredUsers?.length > 0 ? (
          <>
            {individual ? (
              <div className="card_wrapper_div row">
                {filteredUsers.map((user) => (
                  <Card
                    key={user.id}
                    data={user}
                    onLike={toggleLike}
                    router={router}
                  />
                ))}
              </div>
            ) : (
              <div>
                {filteredUsers.map((user) => (
                  <CompanyCard
                    key={user.id}
                    data={user}
                    onLike={toggleLike}
                    router={router}
                  />
                ))}
              </div>
            )}
            {renderPagination()}
          </>
        ) : (
          <h4 className="not_found_design">
            No {individual ? "individual" : "company"} profiles found.
          </h4>
        )}
      </div>
    </div>
  );
}