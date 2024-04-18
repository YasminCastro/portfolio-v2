"use client";

import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";

import { useEffect, useState } from "react";

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <a
      className="cursor-pointer rounded-full bg-secondary p-3 max-lg:p-2"
      aria-label="Mudar tema da página"
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
    >
      {isClient && resolvedTheme === "light" && (
        <FaSun className="text-lg max-lg:text-base" />
      )}
      {isClient && resolvedTheme === "dark" && (
        <FaMoon className="text-lg max-lg:text-base" />
      )}
    </a>
  );
}
