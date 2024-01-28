import React from "react";

const CharacterSkeleton = () => {
  return (
    <>
      <div className="flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0 md:px-9 pb-10 md:pb-20 pt-5 text-shadow ">
        <div className=" w-4/5 aspect-square mx-auto md:mx-0 md:w-56 rounded-full bg-gray-300" />
        <div className="text-center md:text-left md:pt-5">
          <p className="text-5xl font-semibold pb-4 text-shadow">
            Lorem Ricksum{" "}
          </p>
          <p className="text-2xl text-shadow">Status: Lorem </p>
          <p className="text-2xl text-shadow">Origin: Ricksum</p>
        </div>
      </div>

      <div className=" pb-10 text-left text-shadow ">
        <p className="text-2xl font-semibold pb-4 text-center md:text-left">
          Location Details:
        </p>

        <p className="text-md">Name: Lorem Ricksum</p>
        <p className="text-md">Type: Lorem Ricksum</p>
        <p className="text-md">Dimension: Lorem Ricksum</p>
        <p className="text-md">No of Residents: Lorem Ricksum</p>
      </div>
    </>
  );
};

export default CharacterSkeleton;
