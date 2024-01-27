import GridSkeleton from "@/components/Loading/GridSkeleton";
import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <main className="text-center flex flex-col items-center justify-start gap-5 overflow-hidden h-screen">
      <Image
        src="/bgImage.jpeg"
        alt="RnMBg"
        width={200}
        height={200}
        className=" bg-gray-200 w-full md:h-3/6 h-3/5 object-cover absolute top-0 left-0 right-0 bottom-56 z-0  opacity-40"
      />
      <div className=" w-full h-full  flex justify-center items-center">
        <p className=" text-2xl pt-52 md:pt-20 text-shadow">
          {" "}
          Please wait while we fetch the information ...
        </p>
      </div>
    </main>
  );
};

export default Loading;
