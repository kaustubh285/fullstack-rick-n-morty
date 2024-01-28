"use client";

import React, { Suspense, useEffect } from "react";
import mockData from "../../mockdata/allCharacters.json";
import { ICharacterCore, IPageData } from "@/types/types";
import CharacterBlock from "./organisms/CharacterBlock";
import Paginator from "./Paginator";
import GridSkeleton from "./Loading/GridSkeleton";
import { useSearchParams } from "next/navigation";
import Error from "./Error";
import Footer from "./Footer";
import Image from "next/image";
import { getPageData } from "@/lib/character";
import ContentWrapper from "./ContentWrapper";
const HomePage = () => {
  // State to manage loading state, Error state (stored as a string where empty sting indicates no error)
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string>("");

  // Search params lets us get the parameters included with the url after the ?
  // Used to get the current Page number for pagination
  const searchParams = useSearchParams();
  const currentPageParam = searchParams.get("page");
  const currentPage = currentPageParam ? parseInt(currentPageParam) : 1;

  // If data is present,
  //      error will be undefined
  // And vice-a-versa
  const [pageData, setPageData] = React.useState<
    IPageData | { data: undefined; error: undefined }
  >({
    data: undefined,
    error: undefined,
  });

  // Paginated data fetch based on the current page value from the searchParams
  useEffect(() => {
    getPageData(currentPage, setLoading, setError, setPageData);
  }, [currentPage]);

  return (
    <ContentWrapper>
      {/* render on Error */}
      {error && <Error message={error} />}

      {/* will render only if error an empty string, i.e data is present */}
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
    </ContentWrapper>
  );
};

export default HomePage;
