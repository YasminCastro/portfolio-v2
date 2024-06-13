import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCVPath(language: string): string {
  switch (language) {
    case "pt":
      return "/YasminCV-PT.pdf";
    case "en":
      return "/YasminCV-EN.pdf";

    default:
      return "/YasminCV-EN.pdf";
  }
}
