import React from "react";
import Navbar from "./Navbar/Navbar";
import { Icon } from "@iconify/react";

const Home = () => {
  return (
    <div class="h-screen bg-backLight">
      <Navbar />
      <div class="flex flex-col text-center items-center p-4 mt-64 sm:py-32 lg:pt-52 2xl:py-72 ">
        <div class="flex flex-col">
          <span class="text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-snug sm:leading-tight py-3 md:py-8 font-spartan font-bold tracking-tight text-mainRed">
            I'm Sarvag Kalari
          </span>
          <span class="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-spartan font-light tracking-tight text-mainRed">
            front end dev // ui designer
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
