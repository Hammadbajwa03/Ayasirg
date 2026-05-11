"use client";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./NotedModal.module.css";

const POPUP_API = `${process.env.NEXT_PUBLIC_BASE_URL}/api/popup`;

export default function NotedModal({ open, onClose }) {
  const [mounted, setMounted] = useState(false);
  const [popupHtml, setPopupHtml] = useState(null);
  const [loadingPopup, setLoadingPopup] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) {
      setPopupHtml(null);
      return;
    }

    let cancelled = false;
    setLoadingPopup(true);

    (async () => {
      try {
        const res = await fetch(POPUP_API);
        const data = await res.json();
        if (cancelled) return;
        const popup = data?.popup;
        const active =
          popup &&
          (popup.is_active === 1 ||
            popup.is_active === true ||
            String(popup.is_active) === "1");
        if (data?.status === 200 && active && popup.content) {
          setPopupHtml(popup.content);
        } else {
          setPopupHtml(null);
        }
      } catch {
        if (!cancelled) setPopupHtml(null);
      } finally {
        if (!cancelled) setLoadingPopup(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    document.body.classList.add("noted-modal-open");
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.classList.remove("noted-modal-open");
      document.body.style.overflow = prev || "";
    };
  }, [open]);

  if (!open || !mounted) return null;

  const title = "Important Notice";

  return createPortal(
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h3 className={styles.title}>{title}</h3>

        {loadingPopup ? (
          <div className={styles.desc}>
            <SkeletonTheme baseColor="#ececec" highlightColor="#f7f7f7">
              <Skeleton height={12} style={{ marginBottom: 8 }} />
              <Skeleton height={12} width="92%" style={{ marginBottom: 8 }} />
              <Skeleton height={12} width="78%" style={{ marginBottom: 8 }} />
              <Skeleton height={12} width="85%" />
            </SkeletonTheme>
          </div>
        ) : popupHtml ? (
          <div
            className={styles.desc}
            dangerouslySetInnerHTML={{ __html: popupHtml }}
          />
        ) : (
          <p className={styles.desc}>No popup found</p>
        )}

        <button className={styles.btn} onClick={onClose}>
          Acknowledge
        </button>
      </div>
    </div>,
    document.getElementById("noted-modal-root")
  );
}