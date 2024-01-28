"use client";
import { ICharacter } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { ICharacterPageData } from "@/types/types";

import React, { useEffect, useState } from "react";
import Header from "../characterPage/Header";
import Footer from "../Footer";
import Error from "../Error";
import CharacterSkeleton from "../Loading/CharacterSkeleton";
import { getCharacterData } from "@/lib/character";
import CharacterTitle from "./CharacterTitle";
import CharacterLocation from "./CharacterLocation";
import CharacterEpisode from "./CharacterEpisode";

type Props = {
  id: number;
  source: number;
};
const CharacterPage = ({ id, source }: Props) => {
  // State to manage loading state, Error state (stored as a string where empty sting indicates no error)
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string>("");

  // If data is present,
  //      error will be undefined
  // And vice-a-versa
  const [characterPageData, setICharacterPageData] = useState<
    ICharacterPageData | { data: undefined; error: undefined }
  >({ data: undefined, error: undefined });

  // If characterPageData has an error instead of data, then an empty object helps us avoid renderring errors
  const { characterData } = characterPageData.data || {};

  useEffect(() => {
    getCharacterData(id, setLoading, setError, setICharacterPageData);
  }, [id]);

  return (
    <div className="p-5 pb-0 md:px-10 w-full overflow-y-scroll relative">
      <Image
        src="/bgImage.jpeg"
        alt="RnMBg"
        width={200}
        height={200}
        className=" bg-gray-200 w-full md:h-2/5 h-2/5 object-cover absolute top-0 left-0 right-0 bottom-56 -z-10  opacity-40"
      />
      <Header source={source} />

      {/* Conditional rendering */}
      {/* If not Loading=> if not Error=> display data */}
      {loading ? (
        <>
          <CharacterSkeleton />
        </>
      ) : (
        <>
          {error !== "" && (
            <div className="flex flex-col z-50 overflow-y-scroll w-screen pt-24 space-y-12">
              <Error message="Character Not Found" />
            </div>
          )}

          {characterPageData.data && (
            <>
              <CharacterTitle characterData={characterData} />
              <CharacterLocation characterData={characterData} />
              <CharacterEpisode characterData={characterData} />
              <Footer />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default CharacterPage;
