"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function Index() {
  const t = useTranslations("home");
  const router = useRouter();

  return (
    <div>
      <h1>{t("title")}</h1>
      <h2>{t("description", { name: "cobain" })}</h2>
      <button onClick={() => router.push("/about")}>go to about</button>
    </div>
  );
}
