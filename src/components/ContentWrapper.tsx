import Image from "next/image";
import React from "react";
import Footer from "./Footer";

const ContentWrapper = ({
  children,
  displayHeader,
  displayFooter,
}: {
  children: React.ReactNode;
  displayHeader: boolean;
  displayFooter?: boolean;
}) => {
  return (
    <div className="text-center min-h-screen flex flex-col z-50 overflow-y-scroll w-screen space-y-12 md:px-20 px-6 md:pb-0 relative justify-between">
      <Image
        src="/bgImage.jpeg"
        alt="RnMBg"
        width={200}
        height={200}
        className=" bg-gray-200 w-full h-72 object-cover absolute top-0 left-0 right-0 bottom-56 -z-10  opacity-40"
      />
      {displayHeader && (
        <div>
          <p className="text-4xl font-semibold italic text-shadow">
            Rick and Morty
          </p>
          <p className="text-lg italic text-shadow">
            (MortyDex - Explore Mortys Across Dimensions)
          </p>
        </div>
      )}

      {children}

      {displayFooter && <Footer />}
    </div>
  );
};

export default ContentWrapper;
