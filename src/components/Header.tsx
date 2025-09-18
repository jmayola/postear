"use client";
import { useEffect, useState } from "react";
import {
  IoMoon,
  IoSunny,
  IoTimerOutline,
  IoDocumentTextOutline,
} from "react-icons/io5";

import { useTheme } from "next-themes";

export default function Header() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

    const defaultTheme = prefersDark ? "dark" : "light"
    
    return saved ? setTheme(saved) : setTheme(defaultTheme)
  }, []);

  const toggleTheme = () => {
    theme == 'dark' ? setTheme("light") : setTheme("dark")
    localStorage.setItem("theme",String(theme))
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 dark:border-slate-800/70">
      <div className="glass">
        <div className="container mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-2 font-semibold text-slate-800 dark:text-slate-100"
          >
            <span className="inline-flex h-8 w-8 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-500 shadow" />
            Postear
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-600 dark:text-slate-300">
            <a
              href="/notes"
              className="hover:text-slate-900 dark:hover:text-white inline-flex items-center gap-2"
            >
              <IoDocumentTextOutline />
              Notas
            </a>
            <a
              href="/timers"
              className="hover:text-slate-900 dark:hover:text-white inline-flex items-center gap-2"
            >
              <IoTimerOutline />
              Temporizadores
            </a>
          </nav>
          <button
            suppressHydrationWarning
            onClick={() => {
              toggleTheme();
            }}
            className="btn-secondary"
            aria-label="Toggle theme"
          >
            {theme != 'dark' ? <IoSunny /> : <IoMoon />}
            {theme != 'dark' ? "Claro" : "Oscuro"}
          </button>
        </div>
      </div>
    </header>
  );
}
