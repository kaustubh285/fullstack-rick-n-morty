import { ICharacterComplete, ICharacterCore } from "@/types/types";
import { NextResponse } from "next/server";

type Props = {
  params: {
    locationId: number;
  };
};

export async function GET(req: Request, { params: { locationId } }: Props) {
  const res: Response = await fetch(
    `${process.env.DATA_SOURCE_URL}/location/${locationId}`
  );
  const locationData: ICharacterComplete = await res.json();

  return NextResponse.json(locationData);
}
