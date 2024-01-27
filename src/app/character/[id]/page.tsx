import Error from "@/components/Error";
import CharacterPage from "@/components/organisms/CharacterPage";
import { getCharacterData } from "@/lib/character";
import { CharacterPageData } from "@/types/types";

import React from "react";
export const revalidate = 3600;

type Props = {
  params: {
    id: number;
  };
  searchParams: {
    source: number;
  };
};

const page = async ({ params: { id }, searchParams: { source } }: Props) => {
  const characterPageData = await getCharacterData(id);

  const characterData = characterPageData.data?.characterData || null;
  const error = characterPageData.error?.message || null;

  return (
    <main className="text-center flex flex-col items-center justify-start gap-5 ">
      <CharacterPage
        characterData={characterData}
        error={error}
        source={source}
      />
    </main>
  );
};

export default page;
