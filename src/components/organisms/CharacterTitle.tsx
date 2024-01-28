import { ICharacter } from "@/types/types";
import Image from "next/image";
import React from "react";

type Props = {
  characterData?: ICharacter;
};
const CharacterTitle = ({ characterData }: Props) => {
  return (
    <div className="flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0 md:px-9 pb-10 md:pb-20 pt-5 text-shadow ">
      <Image
        src={characterData?.avatar || ""}
        alt={""}
        height={200}
        width={200}
        className=" max-w-xs w-3/5 md:max-w-sm mx-auto md:mx-0 md:w-56 rounded-full bg-gray-300"
      />
      <div className="text-center md:text-left md:pt-5">
        <p className="text-5xl font-semibold pb-4 text-shadow">
          {characterData?.name}
        </p>
        <p className="text-2xl text-shadow">Status: {characterData?.status}</p>
        <p className="text-2xl text-shadow">
          Origin: {characterData?.origin.name}
        </p>
      </div>
    </div>
  );
};

export default CharacterTitle;
