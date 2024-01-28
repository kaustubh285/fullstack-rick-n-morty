import { ICharacterComplete, ICharacterCore } from "@/types/types";

import { NextResponse } from "next/server";

type Props = {
  params: {
    page: number;
  };
};

export async function GET(req: Request, { params: { page } }: Props) {
  let response;
  const res: Response = await fetch(
    `${process.env.DATA_SOURCE_URL}/character/?page=${page}&name=morty&status=alive`,
  );
  const characterData = await res.json();

  // If an error occured in the data, return in a format that can be handled by the frontend
  if (characterData.error) {
    response = NextResponse.json({
      error: {
        status: "No Data here!",
        statusCode: 404,
        message: characterData.error,
      },
    });

    response.headers.set("Access-Control-Allow-Credentials", "true");
    response.headers.set("Access-Control-Allow-Origin", "*");
    return response;
  }

  // Mapping the character data to the core structure
  const completePageData: ICharacterCore[] = characterData.results.map(
    (character: ICharacterComplete) => {
      return {
        id: character.id,
        name: character.name,
        status: character.status,
        species: character.species,
        gender: character.gender,
        avatar: character.image,
      };
    },
  );

  response = NextResponse.json({
    data: {
      info: {
        pages: characterData.info.pages,
        prev: characterData.info.prev,
        next: characterData.info.next,
      },
      characters: completePageData,
    },
  });
  response.headers.set("Access-Control-Allow-Credentials", "true");
  response.headers.set("Access-Control-Allow-Origin", "*");
  return response;
}
