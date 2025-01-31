import {
  ICharacter,
  ICharacterComplete,
  ICharacterCore,
  IEpisode,
  ILocation,
  ILocationApiData,
} from "@/types/types";

import { NextResponse } from "next/server";

type Props = {
  params: {
    charId: number;
  };
};

// The same function is used to get information on the origin, as well as the location of a character
async function getLocationData(locationURL: string): Promise<ILocation> {
  // If the location URL is empty, return default unknown location data
  if (locationURL.length === 0 || locationURL === "") {
    return {
      id: 0,
      name: "Unknown",
      type: "Unknown",
      dimension: "Unknown",
      noOfResidents: 0,
    };
  }
  const locationRes: Response = await fetch(`${locationURL}`);

  const locationData: ILocationApiData = await locationRes.json();

  return {
    id: locationData.id,
    name: locationData.name,
    type: locationData.type,
    dimension: locationData.dimension,
    noOfResidents: locationData.residents.length,
  };
}

async function getEpisodeData(
  charData: ICharacterComplete,
): Promise<IEpisode[]> {
  // Fetching episode data for each episode URL in parallel
  const episodeData = await Promise.all(
    charData.episode.map(async (episodeUrl) => {
      const response = await fetch(episodeUrl);
      const episodeData = await response.json();

      return {
        id: episodeData.id,
        name: episodeData.name,
        airDate: episodeData.air_date,
        episode: episodeData.episode,
        noOfCharacters: episodeData.characters.length,
      };
    }),
  );

  return episodeData;
}

export async function GET(req: Request, { params: { charId } }: Props) {
  const res: Response = await fetch(
    `${process.env.DATA_SOURCE_URL}/character/${charId}`,
  );

  if (res.ok) {
    const characterData: ICharacterComplete = await res.json();

    // Featching location, origin and episode data for the character in the required format
    const locationData: ILocation = await getLocationData(
      characterData.location.url,
    );

    const originData: ILocation = await getLocationData(
      characterData.origin.url,
    );

    const episodeData: IEpisode[] = await getEpisodeData(characterData);

    // Final data structure
    const finalData: ICharacter = {
      id: characterData.id,
      name: characterData.name,
      status: characterData.status,
      species: characterData.species,
      gender: characterData.gender,
      avatar: characterData.image || "",
      origin: originData,
      episodes: episodeData,
      location: locationData,
    };
    return NextResponse.json({
      data: {
        characterData: finalData,
      },
    });
  } else {
    const characterData: { error: string } = await res.json();

    // Error response in the format which can be handled by the frontend
    return NextResponse.json({
      error: {
        status: characterData.error,
        statusCode: 404,
        message: characterData.error,
      },
    });
  }
}
