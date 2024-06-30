import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
const locales = ["en", "ko"];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: {
      ...(await import(`../messages/${locale}/about.json`)),
      ...(await import(`../messages/${locale}/home.json`)),
      ...(await import(`../messages/${locale}/room.json`)),
    },
  };
});
