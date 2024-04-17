import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { AbstractIntlMessages } from "next-intl";

// Can be imported from a shared config
const locales = ["en", "ko"];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();
  const messages = {
    ...(await import(`../messages/${locale}/about.json`)).default,
    ...(await import(`../messages/${locale}/home.json`)).default,
    ...(await import(`../messages/${locale}/room.json`)).default,
  };
  // Return merged messages
  return messages as AbstractIntlMessages;
});
