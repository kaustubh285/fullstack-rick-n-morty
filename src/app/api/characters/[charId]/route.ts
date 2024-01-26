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

async function getLocationData(locationURL: string): Promise<ILocation> {
  const locationRes: Response = await fetch(`${locationURL}`);

  const locationData: ILocationApiData = await locationRes.json();

  console.log(locationData);
  return {
    id: locationData.id,
    name: locationData.name,
    type: locationData.type,
    dimension: locationData.dimension,
    noOfResidents: locationData.residents.length,
  };
}

async function getEpisodeData(
  charData: ICharacterComplete
): Promise<IEpisode[]> {
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
    })
  );

  return episodeData;
}

export async function GET(req: Request, { params: { charId } }: Props) {
  const res: Response = await fetch(
    `${process.env.DATA_SOURCE_URL}/character/${charId}`
  );
  const characterData: ICharacterComplete = await res.json();
  const locationData: ILocation = await getLocationData(
    characterData.location.url
  );
  const originData: ILocation = await getLocationData(characterData.origin.url);
  const episodeData: IEpisode[] = await getEpisodeData(characterData);

  delete characterData.episode;
  const finalData: ICharacter = {
    ...characterData,
    origin: originData,
    episodes: episodeData,
    location: locationData,
  };
  // console.log(completeData);
  return NextResponse.json(finalData);
}
