import React from "react";

const GridSkeleton = () => {
  const skeletonsArray = Array.from({ length: 9 }, (_, index) => index);
  return (
    <div className=' grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-1 disabled:cursor-default'>
      {skeletonsArray.map((skeleton) => (
        <div
          className='flex flex-col items-start justify-start text-wrap space-y-3 pb-3 md:pb-5 '
          key={skeleton}>
          <div className=' bg-gray-300 h-48 md:w-48 w-11/12 my-4'></div>
          <div className='flex justify-start items-start flex-col text-nowrap md:text-pretty text-sm md:text-md font-medium text-left h-3/6'>
            <p>Name: Lorem RickSum</p>
            <p>Gender: Lorem RickSum</p>
            <p>Species: Lorem RickSum </p>
          </div>

          <button className=' cursor-default bg-gray-300 w-full  py-3 shadow-lg rounded-md '>
            View Profile
          </button>
        </div>
      ))}
    </div>
  );
};

export default GridSkeleton;
