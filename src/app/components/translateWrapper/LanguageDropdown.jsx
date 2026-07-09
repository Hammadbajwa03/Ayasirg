"use client";
import { useEffect, useState, useRef } from "react";
import { CiGlobe } from "react-icons/ci";
import "./translateWrapper.css";

export default function TranslateWrapper() {
  const [currentLang, setCurrentLang] = useState("en");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const cleanupGoogleWidget = () => {
    const el = document.getElementById("google_translate_element");
    if (el) el.innerHTML = "";

    document
      .querySelectorAll("body > .skiptranslate, body > iframe")
      .forEach((node) => node.remove());

    document.body.style.top = null;

    const oldScript = document.getElementById("google-translate-script");
    if (oldScript) oldScript.remove();

    delete window.googleTranslateElementInit;
    if (window.google && window.google.translate) {
      delete window.google.translate;
    }
  };

  const loadAndInit = () => {
    if (document.getElementById("google-translate-script")) {
      return;
    }

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,ur",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );

      // Sync initial state from cookie if present
      const match = document.cookie.match(/googtrans=\/en\/([^;]+)/);
      if (match && match[1]) {
        setCurrentLang(match[1]);
      }
    };

    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  };

  useEffect(() => {
    loadAndInit();
    // Periodically check cookie to keep select element in sync (e.g. if reset by browser or navigation)
    const interval = setInterval(() => {
      const match = document.cookie.match(/googtrans=\/en\/([^;]+)/);
      const activeLang = match && match[1] ? match[1] : "en";
      setCurrentLang(activeLang);
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (lang) => {
    setCurrentLang(lang);
    setIsOpen(false); // Close the dropdown after selection

    const googleSelect = document.querySelector("select.goog-te-combo");
    if (googleSelect) {
      googleSelect.value = lang;
      googleSelect.dispatchEvent(new Event("change"));
    } else {
      // If script is not fully loaded/initialized, load it and try after a delay
      loadAndInit();
      setTimeout(() => {
        const retrySelect = document.querySelector("select.goog-te-combo");
        if (retrySelect) {
          retrySelect.value = lang;
          retrySelect.dispatchEvent(new Event("change"));
        }
      }, 1000);
    }
  };

  return (
    <div className="translate-container" style={{ position: "relative", marginRight: "10px" }} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background: "transparent",
          border: "none",
          outline: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "4px"
        }}
        title="Select Language"
      >
        <CiGlobe size={26} color="#2b2b2b" />
      </button>

      {isOpen && (
        <div style={{
          position: "absolute",
          top: "100%",
          right: "0",
          marginTop: "8px",
          background: "#fff",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
          borderRadius: "6px",
          overflow: "hidden",
          zIndex: 1000,
          minWidth: "120px"
        }}>
          <div
            onClick={() => handleLanguageChange("en")}
            style={{
              padding: "10px 16px",
              cursor: "pointer",
              background: currentLang === "en" ? "#f8f9fa" : "transparent",
              color: currentLang === "en" ? "#B50000" : "#2b2b2b",
              fontWeight: currentLang === "en" ? "600" : "400",
              fontSize: "14px",
              transition: "background 0.2s"
            }}
            onMouseEnter={(e) => {
              if (currentLang !== "en") e.target.style.background = "#f1f1f1";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = currentLang === "en" ? "#f8f9fa" : "transparent";
            }}
          >
            English
          </div>
          <div
            onClick={() => handleLanguageChange("ur")}
            style={{
              padding: "10px 16px",
              cursor: "pointer",
              background: currentLang === "ur" ? "#f8f9fa" : "transparent",
              color: currentLang === "ur" ? "#B50000" : "#2b2b2b",
              fontWeight: currentLang === "ur" ? "600" : "400",
              fontSize: "14px",
              transition: "background 0.2s"
            }}
            onMouseEnter={(e) => {
              if (currentLang !== "ur") e.target.style.background = "#f1f1f1";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = currentLang === "ur" ? "#f8f9fa" : "transparent";
            }}
          >
            Urdu
          </div>
        </div>
      )}

      {/* Hidden google translate element container */}
      <div id="google_translate_element" style={{ display: "none" }}></div>
    </div>
  );
}
