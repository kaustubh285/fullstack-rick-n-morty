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
import ContentWrapper from "../ContentWrapper";

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
  const [characterPageData, setCharacterPageData] = useState<
    ICharacterPageData | { data: undefined; error: undefined }
  >({ data: undefined, error: undefined });

  // If characterPageData has an error instead of data, then an empty object helps us avoid renderring errors
  const { characterData } = characterPageData.data || {};

  useEffect(() => {
    getCharacterData(id, setLoading, setError, setCharacterPageData);
  }, [id]);

  return (
    <ContentWrapper displayHeader={false} displayFooter={true}>
      <Header source={source} />

      {/* Conditional rendering */}
      {/* If not Loading=> if not Error=> display data */}
      {loading ? (
        <div className=" absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center">
          <p className=" text-2xl pt-52 md:pt-20 text-shadow">
            {" "}
            Please wait while we fetch the information ...
          </p>
        </div>
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
            </>
          )}
        </>
      )}
    </ContentWrapper>
  );
};

export default CharacterPage;
