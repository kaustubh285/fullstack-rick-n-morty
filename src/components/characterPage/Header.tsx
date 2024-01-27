"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Header = () => {
  const router = useRouter();
  return (
    <div className=" text-center md:text-left space-y-2 pb-16">
      <p className=" text-4xl font-semibold">Rick and Morty</p>

      <p
        className=" cursor-pointer hover:font-semibold underline"
        onClick={() => router.back()}
      >
        {" "}
        {"<"} Back to character list
      </p>
    </div>
  );
};

export default Header;
