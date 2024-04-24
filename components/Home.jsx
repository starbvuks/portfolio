import React from "react";
import Navbar from "./Navbar/Navbar";
import { Icon } from "@iconify/react";

const Home = () => {
  return (
    <div class="h-screen bg-backLight">
      <Navbar />
      <div class="flex flex-col text-center items-center p-4 pt-64 sm:pt-32 lg:pt-40 xl:pt-44 2xl:pt-64">
        <div class="flex flex-col">
          <span class="text-3xl sm:text-4xl md:text-6xl xl:text-7xl py-3 md:py-8 font-spartan font-bold tracking-tight text-mainRed">
            I'm Sarvag Kalari
          </span>
          <span class="text-xl sm:text-3xl md:text-4xl xl:text-5xl font-spartan font-light tracking-tight text-mainRed">
            full stack dev // ui designer
          </span>
          <span class="text-base sm:text-lg md:text-lg xl:text-xl font-spartan font-light tracking-tight text-yellow-700 mt-5 lg:mt-10">
            (note: Sarvag from 2024 here - this portfolio is outdated, working on my new one as you read this !)
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
