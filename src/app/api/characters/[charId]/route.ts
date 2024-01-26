import { ICharacterComplete, ICharacterCore } from "@/types/types";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

type Props = {
  params: {
    charId: number;
  };
};

export async function GET(req: Request, { params: { charId } }: Props) {
  const res2: Response = await fetch(
    `${process.env.DATA_SOURCE_URL}/character/${charId}`
  );
  const characterData: ICharacterComplete = await res2.json();

  return NextResponse.json(characterData);
}
