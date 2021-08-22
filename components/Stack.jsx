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
    <div class="flex flex-col items-center justify-center lg:justify-center mt-10 pb-20 bg-backDark">
      <div class="p-6 mt-20 lg:pl-0 lg:py-16">
        <span class="font-spartan font-bold text-backLight text-5xl lg:text-8xl lg:tracking-tight">
          My Stack
        </span>
      </div>
      <div class="flex flex-col lg:flex-row lg:w-full lg:gap-20 items-center lg:justify-center lg:px-32 mt-16 z-10">
        <div class="bg-secondLight w-11/12 lg:w-1/3 h-full rounded-2xl">
          <div class="flex justify-center items-end py-4 lg:py-6 h-5/12 gap-3 shadow">
            <Icon
              icon="ant-design:code-filled"
              class="w-10 h-10 lg:w-16 lg:h-16"
            />
            <span class="font-anon text-2xl lg:text-5xl">main</span>
          </div>
          <ul class="font-spartan font-medium text-mainRed leading-normal px-12 py-5 lg:p-10 text-md lg:text-2xl lg:leading-relaxed">
            {main.map((data, index) => (
              <li key={index}>{data}</li>
            ))}
          </ul>
        </div>
        <div class="bg-secondLight w-11/12 mt-10 lg:mt-0 lg:w-1/3 h-full rounded-2xl">
          <div class="flex justify-center items-end py-4 lg:py-6 h-5/12 gap-3 shadow">
            <Icon
              icon="fluent:window-dev-tools-16-filled"
              class="w-10 h-10 lg:w-16 lg:h-16"
            />
            <span class="font-anon text-2xl lg:text-5xl lg:pb-1">tools</span>
          </div>
          <ul class="font-spartan font-medium text-mainRed leading-normal px-12 py-5 lg:p-10 text-md lg:text-2xl lg:leading-relaxed">
            {tools.map((data, index) => (
              <li key={index}>{data}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Stack;
