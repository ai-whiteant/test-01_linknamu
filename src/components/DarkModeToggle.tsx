"use client";

import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label="다크모드 전환"
      className="fixed right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-white/40 text-lg shadow-[0_4px_16px_-4px_rgba(180,110,60,0.25)] backdrop-blur-md transition-colors duration-200 hover:bg-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-200 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 dark:focus-visible:ring-white/20"
    >
      {isDark ? "🌙" : "☀️"}
    </button>
  );
}
