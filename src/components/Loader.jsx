import React from "react";
import { Spinner } from "@chakra-ui/react";

const Loader = () => {
  return (
    <div className="boxItemListContainer">
      <Spinner
        thickness="20px"
        speed="0.65s"
        emptyColor="gray.200"
        color="#422c02"
        size="xl"
        width="150px"
        height="150px"
        marginTop="150px"
      />
    </div>
  );
};

export default Loader;
