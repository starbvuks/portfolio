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
    <div class="flex flex-col lg:flex-row lg:w-full lg:gap-20 items-center lg:justify-center px-20 py-16">
      <div class="bg-aboutBlue2 h-full w-1/2 rounded-2xl">
        <div class="flex items-center py-4 lg:px-12 lg:py-6 gap-3 shadow-md">
          <Icon icon="ant-design:code-filled" color="#4ebfab" class="w-7 h-7" />
          <span class="font-anon text-aboutTurq text-2xl lg:text-4xl">
            main
          </span>
        </div>
        <ul class="font-spartan font-medium text-aboutSky leading-normal px-12 py-5 lg:p-10 text-md lg:text-2xl lg:leading-relaxed">
          {main.map((data, index) => (
            <li key={index}>{data}</li>
          ))}
        </ul>
      </div>
      <div class="bg-aboutBlue2 mt-10 lg:mt-0 h-full w-1/2 rounded-2xl">
        <div class="flex items-center py-4 lg:px-12 lg:py-6 gap-3 shadow-md">
          <Icon icon="bi:tools" color="#4ebfab" class="w-7 h-7" />
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
