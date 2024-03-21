"use client";

import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("about");
  return (
    <div>
      <h1>{t("title")}</h1>
      <h2>{t("description", { name: "cobain" })}</h2>
    </div>
  );
}
