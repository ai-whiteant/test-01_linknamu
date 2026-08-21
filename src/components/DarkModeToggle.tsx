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
      className="fixed right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-lg shadow-sm transition-all duration-150 hover:scale-105 hover:shadow-md active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:border-neutral-700 dark:bg-neutral-900 dark:focus-visible:ring-neutral-500"
    >
      {isDark ? "🌙" : "☀️"}
    </button>
  );
}
