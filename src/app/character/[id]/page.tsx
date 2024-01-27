import Error from "@/components/Error";
import CharacterPage from "@/components/organisms/CharacterPage";
import { CharacterPageData } from "@/types/types";
import Image from "next/image";

import React from "react";

type Props = {
  params: {
    id: number;
  };
};

const page = async ({ params: { id } }: Props) => {
  let error = "";
  const characterApiRes = await fetch(`${process.env.URL}api/characters/${id}`);

  const characterPageData: CharacterPageData = await characterApiRes.json();

  if (characterPageData.error) {
    error = characterPageData.error.message;
  }

  return (
    <main className="text-center flex flex-col items-center justify-start gap-5 overflow-hidden h-screen">
      <Image
        src="/bgImage.jpeg"
        alt="RnMBg"
        width={200}
        height={200}
        className=" bg-gray-200 w-full md:h-3/6 h-3/5 object-cover absolute top-0 left-0 right-0 bottom-56 z-0  opacity-40"
      />
      {error !== "" && (
        <div className="flex flex-col z-50 overflow-y-scroll w-screen pt-24 space-y-12">
          <Error message="Character Not Found" />
        </div>
      )}
      {error === "" && characterPageData?.data && (
        <CharacterPage characterData={characterPageData?.data.characterData} />
      )}

      {/* <TaskIntro /> */}
    </main>
  );
};

export default page;
