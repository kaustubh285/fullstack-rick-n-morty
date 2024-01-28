"use client";
import { ICharacter } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { CharacterPageData } from "@/types/types";

import React, { useEffect, useState } from "react";
import Header from "../characterPage/Header";
import Footer from "../Footer";
import Error from "../Error";
import CharacterSkeleton from "../Loading/CharacterSkeleton";
import { getCharacterData } from "@/lib/character";

type Props = {
  id: number;
  source: number;
};
const CharacterPage = ({ id, source }: Props) => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string>("");
  const [characterPageData, setCharacterPageData] = useState<
    CharacterPageData | { data: undefined; error: undefined }
  >({ data: undefined, error: undefined });

  useEffect(() => {
    getCharacterData(id, setLoading, setError, setCharacterPageData);
  }, [id]);

  const { characterData } = characterPageData.data || {};

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
              <div className="flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0 md:px-9 pb-10 md:pb-20 pt-5 text-shadow ">
                <Image
                  src={characterData?.avatar || ""}
                  alt={""}
                  height={200}
                  width={200}
                  className=" w-4/5 mx-auto md:mx-0 md:w-56 rounded-full bg-gray-300"
                />
                <div className="text-center md:text-left md:pt-5">
                  <p className="text-5xl font-semibold pb-4 text-shadow">
                    {characterData?.name}
                  </p>
                  <p className="text-2xl text-shadow">
                    Status: {characterData?.status}
                  </p>
                  <p className="text-2xl text-shadow">
                    Origin: {characterData?.origin.name}
                  </p>
                </div>
              </div>

              <div className=" pb-10 text-left text-shadow ">
                <p className="text-2xl font-semibold pb-4 text-center md:text-left">
                  Location Details:
                </p>

                <p className="text-md">Name: {characterData?.location.name}</p>
                <p className="text-md">Type: {characterData?.location.type}</p>
                <p className="text-md">
                  Dimension: {characterData?.location.dimension}
                </p>
                <p className="text-md">
                  No of Residents:{" "}
                  {characterData?.location.noOfResidents === 0
                    ? "Unknown"
                    : characterData?.location.noOfResidents}
                </p>
              </div>

              <div className=" pb-10 text-left text-shadow ">
                <p className="text-2xl font-semibold pb-4 text-center md:text-left">
                  Episode Details{" "}
                  <span className=" text-sm pt-3 font-normal">
                    ({characterData?.episodes.length})
                  </span>{" "}
                  :
                </p>

                <p className="text-md">
                  First Appearance: {characterData?.episodes[0].episode} -{" "}
                  {characterData?.episodes[0].name}
                </p>
                <p className="text-md">
                  First Appearance Date: {characterData?.episodes[0].airDate}
                </p>
                <p className="text-md">
                  First Appearance Char Count:{" "}
                  {characterData?.episodes[0].noOfCharacters}
                </p>
                <p className="text-md">
                  Last Appearance:{" "}
                  {
                    characterData?.episodes[characterData?.episodes.length - 1]
                      .episode
                  }{" "}
                  -{" "}
                  {
                    characterData?.episodes[characterData?.episodes.length - 1]
                      .name
                  }
                </p>
                <p className="text-md">
                  Last Appearance Date:{" "}
                  {
                    characterData?.episodes[characterData?.episodes.length - 1]
                      .airDate
                  }
                </p>
                <p className="text-md">
                  Last Appearance Char Count:{" "}
                  {
                    characterData?.episodes[characterData?.episodes.length - 1]
                      .noOfCharacters
                  }
                </p>
              </div>

              <Footer />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default CharacterPage;
