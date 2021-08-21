import React from "react";

const Stack = () => {
  return (
    <div class="flex flex-col items-center justify-center lg:flex-row lg:justify-between mt-10 pb-32 bg-backDark">
      <div class="pt-16 lg:py-4 px-6 lg:px-32">
        <span class="font-spartan font-bold text-backLight text-4xl lg:text-8xl lg:tracking-tight lg:py-4">
          My Stack
        </span>
        <ul class="mt-10 list-outside list-disc font-spartan text-mainOrange text-3xl leading-loose hidden lg:block">
          <li>React</li>
          <li>Redux</li>
          <li>Tailwind</li>
        </ul>
      </div>
      <img
        src="/img/main-hex.png"
        alt="main-stack"
        class="w-3/4 p-3 py-16 lg:p-3 lg:w-4/12 lg:mt-16 lg:mx-20"
      />
    </div>
  );
};

export default Stack;
