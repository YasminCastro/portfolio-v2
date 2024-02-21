import Link from "next/link";
import { useLocale } from "next-intl";

export function LanguageToggle() {
  const currentLanguage = useLocale();

  return (
    <>
      {currentLanguage === "pt" ? (
        <Link
          locale="en"
          href="/en"
          className="rounded-full bg-secondary p-3  max-lg:p-2"
          aria-label="Mudar idioma para português"
        >
          EN
        </Link>
      ) : (
        <Link
          locale="pt"
          href="/pt"
          className="rounded-full bg-secondary p-3  max-lg:p-2"
          aria-label="Change language to English"
        >
          PT
        </Link>
      )}
    </>
  );
}
