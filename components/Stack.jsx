import React from "react";

const Stack = () => {
  return (
    <div class="flex flex-col items-center justify-center lg:flex-row lg:justify-between mt-10 pb-32 px-6 lg:px-12">
      <div class="py-4 mt-12">
        <span class="font-spartan font-light text-mainRed text-2xl lg:text-6xl lg:tracking-tight lg:py-4">
          main stack
        </span>
        <ul class="mt-10 list-outside list-disc font-spartan text-mainRed text-3xl leading-loose hidden lg:block">
          <li>React</li>
          <li>Redux</li>
          <li>Tailwind</li>
        </ul>
      </div>
      <img
        src="/img/main-stack.png"
        alt="main-stack"
        class="w-3/4 p-3 lg:w-4/12 lg:p-0"
      />
    </div>
  );
};

export default Stack;
