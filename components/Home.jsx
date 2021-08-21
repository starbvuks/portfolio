import React from "react";

const Home = () => {
  return (
    <div class="flex flex-col text-center items-center py-20">
      <div class="flex flex-col ">
        <span class="text-7xl leading-loose font-spartan font-bold tracking-tight text-mainRed">
          I'm Sarvag Kalari
        </span>
        <span class="text-5xl font-spartan font-light tracking-tight text-mainRed">
          front end dev // cse student
        </span>
      </div>
      <div class="mt-48 bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="fill-backLight stroke-current text-mainRed h-6 w-6"
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
