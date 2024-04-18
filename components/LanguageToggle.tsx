import Link from "next/link";

import { IoLanguage } from "react-icons/io5";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import { useLocale } from "next-intl";

interface IProps {
  side: "top" | "right" | "bottom" | "left" | undefined;
  sectionId: string;
}

export function LanguageToggle({ side, sectionId }: IProps) {
  let locale = useLocale();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="rounded-full bg-secondary p-3 max-lg:p-2">
          <IoLanguage className="text-xl  max-lg:text-base " />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent side={side}>
        <DropdownMenuGroup defaultValue={locale}>
          <DropdownMenuItem textValue="en">
            <Link
              locale="en"
              href={`/en${sectionId}`}
              aria-label="Change language to English"
            >
              English
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem textValue="pt">
            <Link
              locale="pt"
              href={`/pt${sectionId}`}
              aria-label="Mudar idioma para português"
            >
              Português
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
