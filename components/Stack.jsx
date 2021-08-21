import React from "react";

const Stack = () => {
  return (
    <div class="flex flex-col items-center justify-center lg:justify-center mt-10 pb-20 bg-backDark">
      <div class="p-6 mt-20 lg:pl-0 lg:py-16">
        <span class="font-spartan font-bold text-backLight text-5xl lg:text-8xl lg:tracking-tight">
          My Stack
        </span>
      </div>
      <div class="flex flex-col items-center lg:flex-row lg:justify-between">
        <img
          src="/img/hex3.svg"
          alt="main-stack"
          class="w-5/12 p-3 py-6 lg:px-5 lg:w-1/4"
        />
        <img
          src="/img/hex.svg"
          alt="main-stack"
          class="w-7/12 p-3 py-6 lg:px-5 lg:w-5/12"
        />
        <img
          src="/img/hex2.svg"
          alt="main-stack"
          class="w-5/12 p-3 py-6 lg:px-5 lg:w-1/4"
        />
      </div>
    </div>
  );
};

export default Stack;

{
  /* <ul class="mt-10 list-outside list-disc font-spartan font-semibold text-mainBlue text-4xl leading-loose hidden lg:block">
<li>React</li>
<li>Redux</li>
<li>Tailwind</li>
</ul> */
}
