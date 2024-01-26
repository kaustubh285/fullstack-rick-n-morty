import { ICharacterComplete, ICharacterCore } from "@/types/types";

import { NextResponse } from "next/server";

type Props = {
  params: {
    page: number;
  };
};

export async function GET(req: Request, { params: { page } }: Props) {
  const res: Response = await fetch(
    `${process.env.DATA_SOURCE_URL}/character/?page=${page}`
  );
  const characterData = await res.json();
  if (characterData.error) {
    return NextResponse.json({
      error: {
        status: "No Data here!",
        statusCode: 404,
        message: characterData.error,
      },
    });
  }

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
    }
  );

  return NextResponse.json({
    data: {
      info: {
        prev: characterData.info.prev,
        next: characterData.info.next,
      },
      characters: completePageData,
    },
  });

  // return NextResponse.json({
  //   error: {
  //     status: "PageNotFound",
  //     statusCode: 404,
  //     message: "api did not return information",
  //   },
  // });
}
