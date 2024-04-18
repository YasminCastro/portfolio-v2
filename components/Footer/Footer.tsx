import React from "react";

import { LanguageToggle } from "../LanguageToggle";

const Footer = () => {
  return (
    <footer
      className="flex w-full items-center justify-center gap-10 border bg-card py-5 shadow-md"
      id="footer"
    >
      <div className="text-sm text-gray-600 dark:text-gray-300 max-sm:text-xs">
        <p>Copyright © 2023 Yas Castro.</p>
      </div>
      <LanguageToggle side="top" sectionId="#footer" />
    </footer>
  );
};

export default Footer;
