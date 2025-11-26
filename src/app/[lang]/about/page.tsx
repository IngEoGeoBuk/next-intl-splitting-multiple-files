import { Metadata } from "next";

import { getTranslations } from "next-intl/server";
import About from "./about";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations("about");

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default async function AboutPage() {
  return <About />;
}
