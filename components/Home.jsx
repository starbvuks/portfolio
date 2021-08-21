import React from "react";

const Home = () => {
  return (
    <div class="flex flex-col text-center items-center p-4 py-40 sm:py-32">
      <div class="flex flex-col ">
        <span class="text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-snug sm:leading-tight py-3 md:py-10 font-spartan font-bold tracking-tight text-mainRed">
          I'm Sarvag Kalari
        </span>
        <span class="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-spartan font-light tracking-tight text-mainRed">
          front end dev // ui designer
        </span>
      </div>
      <div class="mt-20 hidden sm:block sm:mt-28 md:mt-48 bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="fill-backLight stroke-current text-mainRed  h-5 w-5 sm:h-7 sm:w-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
};

export default Home;
