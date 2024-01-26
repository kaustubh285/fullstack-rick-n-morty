"use client";
import Link from "next/link";
import React from "react";

type Props = {
  next: string | null;
  prev: string | null;
  currentPage: number;
};

const Paginator = ({ next, prev, currentPage }: Props) => {
  console.log(currentPage);
  return (
    <div className=' flex justify-evenly items-center md:w-3/12 w-4/6 mx-auto pb-12'>
      <Link
        href={`/?page=${currentPage - 1}`}
        className={
          (prev == null && `pointer-events-none bg-slate-500`) +
          `  disabled:cursor-default cursor-pointer p-3 bg-gray-300 hover:bg-slate-400 rounded-lg`
        }>
        {"<"}
      </Link>
      <div>{currentPage}</div>
      <Link
        href={`/?page=${currentPage + 1}`}
        // disabled={next == null}
        className={
          (next == null && `pointer-events-none bg-slate-500`) +
          ` disabled:cursor-default cursor-pointer p-3 bg-gray-300 hover:bg-slate-400 rounded-lg`
        }>
        {">"}
      </Link>
    </div>
  );
};

export default Paginator;
