import React from "react";
import {Icon} from "@iconify/react";

const Stack = () => {
  const main = [
    "React",
    "Redux",
    "Next.js",
    "Tailwind CSS",
    "Html / Css",
    "styled-components",
    "Firebase",
    "MongoDB",
    "Express Js",
  ];

  const tools = [
    "VS Code",
    "Figma",
    "Git",
    "Github",
    "Termial",
    "Heroku",
    "Vercel",
    "Photoshop",
    "Illustrator",
  ];

  return (
    <div class="flex items-center justify-center py-20 lg:py-32 bg-mainGreen">
      <div class="flex flex-col items-center justify-center bg-backLight w-3/4 py-5 lg:py-20 rounded-3xl shadow-2x">
        <div class="flex flex-col lg:flex-row lg:w-full lg:gap-20 items-center lg:justify-center lg:px-20 z-10">
          <div class="bg-secondLight w-10/12 lg:w-5/12 h-full rounded-2xl">
            <div class="flex justify-center items-center py-4 lg:py-6 h-5/12 gap-3 shadow-md">
              <div class="w-10 h-3 lg:w-16 lg:h-5 bg-gradient-to-r from-green-400 to-indigo-700 rounded-full"></div>
              <span class="font-anon text-2xl lg:text-4xl pb-1">main</span>
            </div>
            <ul class="font-spartan font-medium text-mainRed leading-normal px-12 py-5 lg:p-10 text-md lg:text-2xl lg:leading-relaxed">
              {main.map((data, index) => (
                <li key={index}>{data}</li>
              ))}
            </ul>
          </div>
          <div class="bg-secondLight w-11/12 mt-10 lg:mt-0 lg:w-5/12 h-full rounded-2xl">
            <div class="flex justify-center items-center py-4 lg:py-6 h-5/12 gap-3 shadow-md">
              <div class="w-10 h-3 lg:w-16 lg:h-5 bg-gradient-to-r from-pink-400 to-red-600 rounded-full"></div>
              <span class="font-anon text-2xl lg:text-4xl pb-1">tools</span>
            </div>
            <ul class="font-spartan font-medium text-mainRed leading-normal px-12 py-5 lg:p-10 text-md lg:text-2xl lg:leading-relaxed">
              {tools.map((data, index) => (
                <li key={index}>{data}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
