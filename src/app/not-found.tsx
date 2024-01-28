import Error from "@/components/Error";
import Image from "next/image";
import React from "react";

// Custom 404 page
const NotFound = () => {
  return (
    <main className="text-center flex flex-col items-center justify-start gap-5 overflow-hidden h-screen">
      <Image
        src="/bgImage.jpeg"
        alt="RnMBg"
        width={200}
        height={200}
        className=" bg-gray-200 w-full h-64 object-cover absolute top-0 left-0 right-0 bottom-56 z-0  opacity-40"
      />
      <div className="flex flex-col z-50 overflow-scroll w-screen pt-24 space-y-12 md:px-20 px-3 pb-30">
        <div>
          <p className="text-4xl font-semibold">Rick and Morty</p>
        </div>
        <Error message={"Page Not Found"} />
      </div>
    </main>
  );
};

export default NotFound;
