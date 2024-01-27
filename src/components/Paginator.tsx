"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  info:
    | {
        next: string | null;
        prev: string | null;
        pages: number;
      }
    | undefined;
  currentPage: number;
};

const Paginator = ({ info, currentPage }: Props) => {
  const router = useRouter();
  const pageNumbers = [];

  for (
    let i = Math.max(1, currentPage - 3);
    i <= Math.min(info?.pages || 42, currentPage + 3);
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className=' flex justify-evenly items-center md:w-3/12 w-4/6 mx-auto'>
        <Link
          href={`/?page=${currentPage - 1}`}
          className={
            (info?.prev == null && `pointer-events-none bg-slate-500`) +
            `  disabled:cursor-default cursor-pointer p-3 bg-gray-300 hover:bg-slate-400 rounded-lg`
          }>
          {"<"}
        </Link>
        <div>{currentPage}</div>
        <Link
          href={`/?page=${currentPage + 1}`}
          // disabled={next == null}
          className={
            (info?.next == null && `pointer-events-none bg-slate-500`) +
            ` disabled:cursor-default cursor-pointer p-3 bg-gray-300 hover:bg-slate-400 rounded-lg`
          }>
          {">"}
        </Link>
      </div>

      <div className='hidden md:flex mx-auto space-x-2 pb-12'>
        {pageNumbers.map((pgNo) => (
          <div
            key={pgNo}
            onClick={() => router.push(`/?page=${pgNo}`)}
            className={
              (pgNo === currentPage
                ? " scale-110 border-slate-700 border-2 "
                : "cursor-pointer") + `  bg-gray-300 p-2 shadow-md rounded-md`
            }>
            {pgNo}
          </div>
        ))}
      </div>
    </>
  );
};

export default Paginator;
