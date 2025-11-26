import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "ko"],
  // Used when no locale matches
  defaultLocale: "ko",
  // as-needed 써야 default ko일시 /ko 안 뜸.
  localePrefix: "as-needed",
});
