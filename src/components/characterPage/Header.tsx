import Link from "next/link";
import React from "react";

type Props = {
  source: number;
};

const Header = ({ source }: Props) => {
  return (
    <div className=" text-center md:text-left space-y-2 pb-16">
      <p className=" text-4xl font-semibold">Rick and Morty</p>

      <Link
        scroll={false}
        href={`/?page=${source}`}
        className=" cursor-pointer hover:font-semibold underline"
      >
        {" "}
        {"<"} Back to character list
      </Link>
    </div>
  );
};

export default Header;
