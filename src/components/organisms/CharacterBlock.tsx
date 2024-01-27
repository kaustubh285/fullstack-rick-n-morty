import { ICharacterCore } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  char: ICharacterCore;
};

const CharacterBlock = ({ char }: Props) => {
  return (
    <div
      className="flex flex-col items-start justify-start text-wrap space-y-3 pb-3 md:pb-9 "
      key={char.id}
    >
      <div className=" w-full bg-gray-300">
        <Image
          src={char.avatar}
          alt={char.name}
          width={200}
          height={200}
          className="w-full rounded-md "
        />
      </div>
      <div className="flex justify-start items-start flex-col text-nowrap md:text-pretty text-sm md:text-md font-semibold text-left h-3/6 text-shadow">
        <p className=" ">
          Name: <span className=" font-normal">{char.name}</span>
        </p>
        <p>
          Gender: <span className=" font-normal">{char.gender}</span>
        </p>
        <p>
          Species: <span className=" font-normal">{char.species}</span>
        </p>
      </div>

      <Link href={`/character/${char.id}`} className=" w-full">
        <button className="bg-gray-300 w-full  py-3 shadow-lg rounded-md hover:bg-slate-400">
          View Profile
        </button>
      </Link>
    </div>
  );
};

export default CharacterBlock;
