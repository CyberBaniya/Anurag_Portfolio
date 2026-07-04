import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      const dark = savedTheme === "dark";
      setIsDarkMode(dark);
      document.documentElement.classList.toggle("dark", dark);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      setIsDarkMode(prefersDark);
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;

    setIsDarkMode(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);

    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className={cn(
        "fixed top-6 right-6 z-50",
        "flex items-center justify-center",
        "w-12 h-12 rounded-full",
        "backdrop-blur-md",
        "bg-white/10 dark:bg-white/5",
        "border border-white/20 dark:border-white/10",
        "shadow-lg shadow-black/10",
        "transition-all duration-300",
        "hover:scale-110 hover:rotate-12",
        "active:scale-95",
        "focus:outline-none",
        "max-sm:hidden"
      )}
    >
      {isDarkMode ? (
        <Sun
          size={22}
          className="text-yellow-400 transition-all duration-300"
        />
      ) : (
        <Moon
          size={22}
          className="text-slate-800 dark:text-white transition-all duration-300"
        />
      )}
    </button>
  );
};