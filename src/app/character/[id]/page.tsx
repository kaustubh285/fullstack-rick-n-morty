import Error from "@/components/Error";
import CharacterPage from "@/components/organisms/CharacterPage";

import React, { useState } from "react";
export const revalidate = 3600;

type Props = {
  params: {
    id: number;
  };
  searchParams: {
    source: number;
  };
};

const page = ({ params: { id }, searchParams: { source } }: Props) => {
  return (
    <main className="flex flex-col items-center justify-start gap-5 ">
      <CharacterPage id={id} source={source} />
    </main>
  );
};

export default page;
