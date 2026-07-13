"use client";

import dynamic from "next/dynamic";

const MyFormPage = dynamic(() => import("./MyFormPage"), {
  ssr: false,
  loading: () => <div className="text-center py-4">Loading form...</div>,
});

export default function EcenterFormClient({ initialUserType = null }) {
  return <MyFormPage initialUserType={initialUserType} />;
}
