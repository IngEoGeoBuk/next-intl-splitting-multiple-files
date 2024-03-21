import { Metadata } from "next";

import axios from "axios";
import { getTranslations } from "next-intl/server";

import Room from "./room";

export async function generateMetadata({
  params,
}: {
  params: { locale: string; id: number };
}): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "room",
  });

  const url = `https://jsonplaceholder.typicode.com/todos/${params.id}`;
  const { data } = await axios.get(url);

  return {
    title: t("metadata.title", { title: data.title }),
    description: t("metadata.description", { title: data.title }),
  };
}

export default async function RoomPage() {
  return <Room />;
}
