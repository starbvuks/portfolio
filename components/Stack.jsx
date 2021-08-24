import React from "react";
import { Icon } from "@iconify/react";

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
    <div class="flex flex-col lg:flex-row w-full sm:gap-12 items-center sm:justify-center px-0 sm:px-20 sm:pt-12">
      <span class="font-spartan font-bold text-aboutLight text-2xl text-center mb-7 rounded-2xl block sm:hidden">
        Stack
      </span>
      <div class="bg-aboutBlue2 h-full w-3/4 sm:w-1/2 rounded-2xl lg:mx-3">
        <div class="flex items-center py-6 px-12 gap-3 shadow-md">
          <div class="w-9 h-9">
            <Icon
              icon="ant-design:code-filled"
              color="#4ebfab"
              width="full"
              height="full"
            />
          </div>
          <span class="font-anon text-aboutTurq text-2xl lg:text-4xl">
            languages
          </span>
        </div>
        <ul class="font-spartan font-medium text-aboutSky leading-normal px-12 py-5 lg:p-10 text-md lg:text-2xl lg:leading-relaxed">
          {main.map((data, index) => (
            <li key={index}>{data}</li>
          ))}
        </ul>
      </div>
      <div class="mt-10 sm:mt-0 bg-aboutBlue2 h-full w-3/4 sm:w-1/2 rounded-2xl lg:mx-3">
        <div class="flex items-center py-6 px-12 gap-3 shadow-md">
          <div class="w-9 h-9">
            <Icon icon="bi:tools" color="#4ebfab" width="full" height="full" />
          </div>
          <span class="font-anon text-aboutTurq text-2xl lg:text-4xl">
            tools
          </span>
        </div>
        <ul class="font-spartan font-medium text-aboutSky leading-normal px-12 py-5 lg:p-10 text-md lg:text-2xl lg:leading-relaxed">
          {tools.map((data, index) => (
            <li key={index}>{data}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Stack;
