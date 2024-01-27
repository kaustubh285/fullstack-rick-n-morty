import { ICharacter } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

import React from "react";

type Props = {
  characterData: ICharacter;
  source: number;
};
const CharacterPage = ({ characterData, source }: Props) => {
  return (
    <div className='z-50 p-5 md:px-10 w-full overflow-y-scroll '>
      <div className=' text-center md:text-left space-y-2 pb-16'>
        <p className=' text-4xl font-semibold'>Rick and Morty</p>

        <Link
          className=' underline'
          href={source ? `/?page=${source}` : `/?page=1`}>
          {" "}
          {"<"} Back to character list
        </Link>
      </div>

      <div className='flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0 md:px-9 pb-10 md:pb-20 pt-5 text-shadow '>
        <Image
          src={characterData.avatar}
          alt={""}
          height={200}
          width={200}
          className=' w-4/5 mx-auto md:mx-0 md:w-56 rounded-full bg-gray-300'
        />
        <div className='text-center md:text-left md:pt-5'>
          <p className='text-5xl font-semibold pb-4 text-shadow'>
            {characterData.name}
          </p>
          <p className='text-2xl text-shadow'>Status: {characterData.status}</p>
          <p className='text-2xl text-shadow'>
            Origin: {characterData.origin.name}
          </p>
        </div>
      </div>

      <div className=' pb-10 text-left text-shadow '>
        <p className='text-2xl font-semibold pb-4 text-center md:text-left'>
          Location Details:
        </p>

        <p className='text-md'>Name: {characterData.location.name}</p>
        <p className='text-md'>Type: {characterData.location.type}</p>
        <p className='text-md'>Dimension: {characterData.location.dimension}</p>
        <p className='text-md'>
          No of Residents:{" "}
          {characterData.location.noOfResidents === 0
            ? "Unknown"
            : characterData.location.noOfResidents}
        </p>
      </div>

      <div className=' pb-10 text-left text-shadow '>
        <p className='text-2xl font-semibold pb-4 text-center md:text-left'>
          Episode Details{" "}
          <span className=' text-sm pt-3 font-normal'>
            ({characterData.episodes.length})
          </span>{" "}
          :
        </p>

        <p className='text-md'>
          First Appearance: {characterData.episodes[0].episode} -{" "}
          {characterData.episodes[0].name}
        </p>
        <p className='text-md'>
          First Appearance Date: {characterData.episodes[0].airDate}
        </p>
        <p className='text-md'>
          First Appearance Char Count:{" "}
          {characterData.episodes[0].noOfCharacters}
        </p>
        <p className='text-md'>
          Last Appearance:{" "}
          {characterData.episodes[characterData.episodes.length - 1].episode} -{" "}
          {characterData.episodes[characterData.episodes.length - 1].name}
        </p>
        <p className='text-md'>
          Last Appearance Date:{" "}
          {characterData.episodes[characterData.episodes.length - 1].airDate}
        </p>
        <p className='text-md'>
          Last Appearance Char Count:{" "}
          {
            characterData.episodes[characterData.episodes.length - 1]
              .noOfCharacters
          }
        </p>
      </div>
    </div>
  );
};

export default CharacterPage;
