"use client";

import { useTheme } from "next-themes";
import { Button } from "../ui/button";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="link"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle Dark Mode"
      className="hover:no-underline"
    >
      {theme === "light" ? (
        <i className="ri-moon-fill text-xl" />
      ) : (
        <i className="ri-sun-line text-xl" />
      )}
    </Button>
  );
}

export default ThemeSwitcher;
