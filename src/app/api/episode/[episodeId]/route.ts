import { ICharacterComplete, ICharacterCore } from "@/types/types";
import { NextResponse } from "next/server";

type Props = {
  params: {
    episodeId: number;
  };
};

export async function GET(req: Request, { params: { episodeId } }: Props) {
  const res: Response = await fetch(
    `${process.env.DATA_SOURCE_URL}/episode/${episodeId}`
  );
  const locationData: ICharacterComplete = await res.json();

  return NextResponse.json(locationData);
}
