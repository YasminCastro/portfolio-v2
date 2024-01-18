"use client";

import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full bg-secondary shadow-none"
      aria-label="Mudar tema da página"
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
    >
      {resolvedTheme === "light" && (
        <FaSun className="text-lg max-lg:text-base" />
      )}
      {resolvedTheme === "dark" && (
        <FaMoon className="text-lg max-lg:text-base" />
      )}
    </Button>
  );
}
