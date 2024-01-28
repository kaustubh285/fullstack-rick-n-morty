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
        className=" w-full lg:w-4/12 max-w-sm md:max-w-md aspect-square rounded-lg"
      />

      <p className="text-2xl md:text-3xl bg-red-200 text-red-700 p-2 rounded-lg">
        {message ? message : "Data Not Found!"} !
      </p>

      {/* Navigate back to home page */}
      <div className=" py-2">
        {/* Here we use window.location.href to reload the page since router.push is unable to refresh the page  */}
        <p
          onClick={() => (window.location.href = "/?page=1")}
          className="text-lg underline cursor-pointer "
        >
          Head back to square 1?
        </p>
      </div>
    </div>
  );
};

export default Error;
