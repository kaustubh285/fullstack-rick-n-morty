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
    fetchPageData(currentPage);
  }, [currentPage]);

  const fetchPageData = async (page: number) => {
    setLoading(true);
    const data = await fetch(`/api/characters/page/${page}`).then((res) =>
      res.json(),
    );
    if (data.error) {
      setError(data.error.message);
    } else {
      setPageData(data);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col z-50 overflow-y-scroll w-screen pt-24 space-y-12 md:px-20 px-6  md:pb-0">
      <div>
        <p className="text-4xl font-semibold italic">Rick and Morty</p>
      </div>
      {error && <Error message={error} />}
      {!error && (
        <>
          {loading && <GridSkeleton />}
          {!loading && (
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-14 lg:grid-cols-5 lg:gap-10 ">
              {pageData.data?.characters.map((char: ICharacterCore) => (
                <Suspense fallback={<div>wait...</div>} key={char.id}>
                  <CharacterBlock char={char} />
                </Suspense>
              ))}
            </div>
          )}
          {!loading && (
            <Paginator info={pageData.data?.info} currentPage={currentPage} />
          )}
        </>
      )}
      <Footer />
    </div>
  );
};

export default HomePage;
