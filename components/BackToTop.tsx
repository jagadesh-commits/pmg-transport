"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
      setVisible(scrollTop > 100);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Back to top"
      className="fixed z-50 transition-opacity duration-300 ease-in-out"
      style={{
        bottom: "90px",
        right: "20px",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <svg width="48" height="48" viewBox="0 0 48 48">
        <circle
          cx="24"
          cy="24"
          r={radius}
          fill="white"
          stroke="rgba(204,26,26,0.2)"
          strokeWidth="3"
        />
        <circle
          cx="24"
          cy="24"
          r={radius}
          fill="none"
          stroke="#CC1A1A"
          strokeWidth="3"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform="rotate(-90 24 24)"
          style={{ transition: "stroke-dashoffset 0.1s ease" }}
        />
        <path
          d="M24 30 L24 18 M18 24 L24 18 L30 24"
          stroke="#CC1A1A"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </button>
  );
}
