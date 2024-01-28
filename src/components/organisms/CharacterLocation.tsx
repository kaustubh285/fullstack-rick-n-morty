import { ICharacter } from "@/types/types";
import React from "react";

type Props = {
  characterData?: ICharacter;
};
const CharacterLocation = ({ characterData }: Props) => {
  return (
    <div className=" pb-10 text-left text-shadow ">
      <p className="text-2xl font-semibold pb-4 text-center md:text-left">
        Location Details:
      </p>

      <p className="text-md">Name: {characterData?.location.name}</p>
      <p className="text-md">Type: {characterData?.location.type}</p>
      <p className="text-md">Dimension: {characterData?.location.dimension}</p>
      <p className="text-md">
        No of Residents:{" "}
        {characterData?.location.noOfResidents === 0
          ? "Unknown"
          : characterData?.location.noOfResidents}
      </p>
    </div>
  );
};

export default CharacterLocation;
