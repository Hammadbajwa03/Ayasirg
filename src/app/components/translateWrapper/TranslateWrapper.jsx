"use client";
import { useState } from "react";
import "./translateWrapper.css";

export default function TranslateWrapper() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

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
    cleanupGoogleWidget();

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
      setIsLoaded(true);
    };

    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  };

  const handleInteraction = () => {
    setShouldLoad(true);
    loadAndInit();
  };

  if (!shouldLoad) {
    return (
      <div className="translate-placeholder" style={{ marginRight: "10px" }}>
        <select 
          onClick={handleInteraction}
          onTouchStart={handleInteraction}
          onChange={handleInteraction}
          defaultValue="en"
          style={{
            background: "#f0f0f0",
            borderRadius: "6px",
            padding: "4px 8px",
            border: "none",
            outline: "none",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "500",
            color: "#2b2b2b"
          }}
        >
          <option value="en">Urdu / English</option>
        </select>
      </div>
    );
  }

  return (
    <div>
      {!isLoaded && (
        <div className="translate-loader">
          <div className="skeleton-box"></div>
        </div>
      )}
      <div id="google_translate_element"></div>
    </div>
  );
}
