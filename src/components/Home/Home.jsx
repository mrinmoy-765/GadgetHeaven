import React from "react";
import Banner from "../Banner/Banner";
import Gadgets from "../Gadgets/Gadgets";
import useDocumentTitle from "../../useDocumentTitle";

const Home = () => {
  useDocumentTitle("GadgetHeaven || Home");
  return (
    <div>
      <Banner></Banner>
      <Gadgets></Gadgets>
    </div>
  );
};

export default Home;
