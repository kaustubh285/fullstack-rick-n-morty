"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  message: string;
};
const Error = ({ message }: Props) => {
  let defaultPage = 1;
  return (
    <div className=' flex flex-col justify-center items-center'>
      <Image
        src={"/error.jpeg"}
        height={400}
        width={400}
        alt={"error"}
        className=' w-full md:w-2/5 rounded-lg'
      />

      <p className=' text-3xl bg-red-200 text-red-700 p-2 rounded-lg'>
        {message} !
      </p>

      <div className=' py-2'>
        <p
          onClick={() => (window.location.href = "/?page=1")}
          className='text-lg underline cursor-pointer '>
          Head back to square 1?
        </p>
      </div>
    </div>
  );
};

export default Error;
