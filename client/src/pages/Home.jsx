import React from "react";
import { Hero } from "../components/Hero";
import { Popular } from "../components/Popular";
import { NewCollection } from "../components/NewCollection";
import { NewLetter } from "../components/NewLetter";
import Offer from "../components/Offer";

export const Home = () => {
  return (
    <>
      <Hero />
      <Popular />
      <Offer /> 
      <NewCollection />
      <NewLetter />
    </>
  );
};
