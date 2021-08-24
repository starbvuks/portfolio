import React from "react";
import Navbar from "../components/Navbar/NavbarPortf";

const projects = () => {
  const langs = ["react", "next js", "material-ui", "tailwind css"];
  const projects = ["My Movie Database", "Landmark Locator", "Congo Store"];

  return (
    <div class="h-full bg-portfGreen pb-10 2xl:pb-44 overflow-hidden">
      <Navbar />
      <div class="mt-28 mx-6 sm:mx-28">
        <span class="font-anon text-portfLight text-4xl sm:text-7xl">
          things i’ve made
        </span>
        <div class="flex text-portfBtnLight gap-5 font-spartan text-sm sm:text-md mt-7">
          {langs.map((data, index) => (
            <button
              key={index}
              class="px-2 sm:px-6 py-2 ring-2 font-semibold ring-portfBtnLight rounded-md transform hover:scale-110 transition duration-500"
            >
              {data}
            </button>
          ))}
        </div>
      </div>
      <div class="w-full flex flex-col flex-wrap sm:flex-row items-center my-20 sm:mx-28 gap-7">
        {projects.map((data, index) => (
          <button
            key={index}
            class="flex bg-portfLightGreen items-end justify-center shadow-md rounded-2xl mt-9 p-5 h-64 w-11/12 sm:w-1/4"
          >
            <span class="text-center font-spartan font-bold text-2xl text-portfDark">
              {data}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default projects;
