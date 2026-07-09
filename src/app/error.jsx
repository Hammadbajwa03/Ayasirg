"use client";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("App Error:", error);
  }, [error]);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center">
      <div>
        <h1
          className="fw-bold mb-2"
          style={{ fontSize: "150px", lineHeight: "1", color: "#B50000" }}
        >
          500
        </h1>
        <h2 className="fw-semibold text-dark mb-3">
          Oops! Something went wrong.
        </h2>
        <p className="text-muted mb-4">
          We&apos;re sorry, but it seems an unexpected error occurred.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="btn btn_primary btn-lg text-white shadow-sm me-2"
        >
          Try Again
        </button>
        <a href="/" className="btn btn-outline-danger btn-lg">
          Go Back Home
        </a>
      </div>
    </div>
  );
}
