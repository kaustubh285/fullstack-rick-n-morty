import { ICharacter } from "@/types/types";
import React from "react";

type Props = {
  characterData?: ICharacter;
};

const CharacterEpisode = ({ characterData }: Props) => {
  return (
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
        First Appearance Char Count: {characterData?.episodes[0].noOfCharacters}
      </p>
      <p className="text-md">
        Last Appearance:{" "}
        {characterData?.episodes[characterData?.episodes.length - 1].episode} -{" "}
        {characterData?.episodes[characterData?.episodes.length - 1].name}
      </p>
      <p className="text-md">
        Last Appearance Date:{" "}
        {characterData?.episodes[characterData?.episodes.length - 1].airDate}
      </p>
      <p className="text-md">
        Last Appearance Char Count:{" "}
        {
          characterData?.episodes[characterData?.episodes.length - 1]
            .noOfCharacters
        }
      </p>
    </div>
  );
};

export default CharacterEpisode;
