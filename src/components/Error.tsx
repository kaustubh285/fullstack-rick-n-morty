"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  message?: string;
};
const Error = ({ message }: Props) => {
  const router = useRouter();
  return (
    <div className=" flex flex-col justify-center items-center">
      {/* Error image */}
      <Image
        src={"/error.jpeg"}
        height={400}
        width={400}
        alt={"error"}
        className=" w-full md:w-2/5 rounded-lg"
      />

      <p className=" text-3xl bg-red-200 text-red-700 p-2 rounded-lg">
        {message ? message : "Data Not Found!"} !
      </p>

      {/* Navigate back to home page */}
      <div className=" py-2">
        <p
          onClick={() => router.push("/?page=1")}
          className="text-lg underline cursor-pointer "
        >
          Head back to square 1?
        </p>
      </div>
    </div>
  );
};

export default Error;
