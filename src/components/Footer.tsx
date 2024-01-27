import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col space-y-3 md:space-y-0 py-3 bg-gray-200 px-5 justify-between items-center text-left md:text-right md:flex-row">
      <p className=" font-medium">
        This project is built for testing and educational purposes !
      </p>

      <p className=" w-full md:w-3/12 ">
        Built by{" "}
        <Link
          className=" underline"
          href={"https://kaustubh.deshpande.page"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Kaustubh Deshpande
        </Link>
      </p>
    </div>
  );
};

export default Footer;
