import { ICharacterCore } from "@/types/types";
import { NextApiRequest, NextApiResponse } from "next";
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

  return NextResponse.json(characterData);
}
