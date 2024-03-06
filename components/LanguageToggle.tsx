import Link from "next/link";

import { IoLanguage } from "react-icons/io5";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface IProps {
  side: "top" | "right" | "bottom" | "left" | undefined;
}

export function LanguageToggle({ side }: IProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="rounded-full bg-secondary p-3  max-lg:p-2">
          <IoLanguage className="text-xl  max-lg:text-base " />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent side={side}>
        <DropdownMenuLabel>
          <Link locale="en" href="/en" aria-label="Change language to English">
            English
          </Link>
        </DropdownMenuLabel>
        <DropdownMenuItem>
          <Link locale="pt" href="/pt" aria-label="Mudar idioma para português">
            Português
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
