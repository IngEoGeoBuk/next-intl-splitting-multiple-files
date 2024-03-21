import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "ko"],
  // Used when no locale matches
  defaultLocale: "ko",
  // as-needed 써야 default ko일시 /ko 안 뜸.
  localePrefix: "as-needed",
});

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
