import ContentWrapper from "@/components/ContentWrapper";
import GridSkeleton from "@/components/Loading/GridSkeleton";
import Image from "next/image";
import React from "react";

// Custom loading page
const Loading = () => {
  return (
    <ContentWrapper>
      <div className=" w-full h-full  flex justify-center items-center">
        <p className=" text-2xl pt-52 md:pt-20 text-shadow">
          {" "}
          Please wait while we fetch the information ...
        </p>
      </div>
    </ContentWrapper>
  );
};

export default Loading;
