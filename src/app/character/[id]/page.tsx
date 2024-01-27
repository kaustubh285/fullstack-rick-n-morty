import CharacterPage from "@/components/organisms/CharacterPage";
import Image from "next/image";

import React from "react";

type Props = {
  params: {
    id: number;
  };
  searchParams: {
    source: number;
  };
};

const page = async ({ params: { id }, searchParams: { source } }: Props) => {
  const characterDataRes = await fetch(
    process.env.URL + `/api/characters/${id}`
  );

  const characterData = await characterDataRes.json();

  return (
    <main className='text-center flex flex-col items-center justify-start gap-5 overflow-hidden h-screen'>
      <Image
        src='/bgImage.jpeg'
        alt='RnMBg'
        width={200}
        height={200}
        className=' bg-gray-200 w-full md:h-3/6 h-3/5 object-cover absolute top-0 left-0 right-0 bottom-56 z-0  opacity-40'
      />
      {/* <div className=' bg-gray-200 w-full md:h-3/6 h-3/5 object-cover absolute top-0 left-0 right-0 bottom-56 z-0 '></div> */}
      <CharacterPage characterData={characterData} source={source} />

      {/* <TaskIntro /> */}
    </main>
  );
};

export default page;
