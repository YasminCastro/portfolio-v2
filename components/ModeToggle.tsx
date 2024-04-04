"use client";

import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full bg-secondary shadow-none"
      aria-label="Mudar tema da página"
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
    >
      {isClient && resolvedTheme === "light" && (
        <FaSun className="text-lg max-lg:text-base" />
      )}
      {isClient && resolvedTheme === "dark" && (
        <FaMoon className="text-lg max-lg:text-base" />
      )}
    </Button>
  );
}
