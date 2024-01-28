"use client";

import React, { Suspense, useEffect } from "react";
import mockData from "../../mockdata/allCharacters.json";
import { ICharacterCore, PageData } from "@/types/types";
import CharacterBlock from "./organisms/CharacterBlock";
import Paginator from "./Paginator";
import GridSkeleton from "./Loading/GridSkeleton";
import { useSearchParams } from "next/navigation";
import Error from "./Error";
import Footer from "./Footer";
import Image from "next/image";
import { getPageData } from "@/lib/character";
const HomePage = () => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string>("");
  const searchParams = useSearchParams();
  const currentPageParam = searchParams.get("page");
  const currentPage = currentPageParam ? parseInt(currentPageParam) : 1;
  const [pageData, setPageData] = React.useState<
    PageData | { data: undefined; error: undefined }
  >({
    data: undefined,
    error: undefined,
  });

  useEffect(() => {
    getPageData(currentPage, setLoading, setError, setPageData);
  }, [currentPage]);

  return (
    <div className="flex flex-col z-50 overflow-y-scroll w-screen pt-24 space-y-12 md:px-20 px-6  md:pb-0 relative ">
      <Image
        src="/bgImage.jpeg"
        alt="RnMBg"
        width={200}
        height={200}
        className=" bg-gray-200 w-full h-72 object-cover absolute top-0 left-0 right-0 bottom-56 -z-10  opacity-40"
      />
      <div>
        <p className="text-4xl font-semibold italic text-shadow">
          Rick and Morty
        </p>
      </div>
      {error &&
        (currentPage >= 2 ? (
          <Error message="Not Enough Characters" />
        ) : (
          <Error message={error} />
        ))}
      {!error && (
        <>
          {loading && <GridSkeleton />}
          {!loading && (
            <>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-14 lg:grid-cols-5 lg:gap-10 ">
                {pageData.data?.characters.map((char: ICharacterCore) => (
                  <Suspense fallback={<div>wait...</div>} key={char.id}>
                    <CharacterBlock char={char} currentPage={currentPage} />
                  </Suspense>
                ))}
              </div>

              <Paginator info={pageData.data?.info} currentPage={currentPage} />
            </>
          )}
        </>
      )}
      <Footer />
    </div>
  );
};

export default HomePage;
