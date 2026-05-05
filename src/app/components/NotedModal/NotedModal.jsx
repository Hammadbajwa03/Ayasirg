"use client";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./NotedModal.module.css";

export default function NotedModal({ open, onClose }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
  const description =
    "Yeh profile details user ki provided hain. Please safety ke liye information verify karein. ‘Noted’ par click karke aap profile continue kar sakte hain.";

  return createPortal(
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h3 className={styles.title}>{title}</h3>

        <p className={styles.desc}>{description}</p>

        <button className={styles.btn} onClick={onClose}>
          Noted
        </button>
      </div>
    </div>,
    document.getElementById("noted-modal-root")
  );
}