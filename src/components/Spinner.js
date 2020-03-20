import React from "react";
import spinner from "../assets/loader.gif";
import { Center } from "./elements";

const Spinner = () => {
  return (
    <Center>
      <img src={spinner} alt="loading..." />
    </Center>
  );
};

export default Spinner;
