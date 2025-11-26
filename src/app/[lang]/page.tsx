import { Metadata } from "next";

import { getTranslations } from "next-intl/server";

import Home from "./home/home";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations("home");

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default async function HomePage() {
  return <Home />;
}
