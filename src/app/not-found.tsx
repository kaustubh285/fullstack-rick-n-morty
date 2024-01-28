import ContentWrapper from "@/components/ContentWrapper";
import Error from "@/components/Error";
import Image from "next/image";
import React from "react";

// Custom 404 page
const NotFound = () => {
  return (
    <ContentWrapper displayHeader={true} displayFooter={false}>
      <Error message={"Page Not Found"} />
    </ContentWrapper>
  );
};

export default NotFound;
