// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { Fragment, useEffect, useState } from "react";
import { Button } from "../ui/button";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Fragment>
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
    </Fragment>
  );
}
