import React from "react";
import Image from "next/image";

const Navbar = () => {
  const btns = ["about", "projects", "contact"];

  return (
    <div class="px-4 mt-2 md:mx-20 flex items-center justify-between">
      <div>
        <img src="/sk-logo.png" alt="logo" class="pr-3 w-10/12 md:w-11/12" />
      </div>
      <div class="flex gap-3 sm:gap-4 md:gap-9 font-poppins text-sm sm:text-md md:text-lg text-mainRed">
        {btns.map((data, index) => (
          <button
            key={index}
            class="px-2 sm:px-6 py-2 ring-2 font-semibold ring-mainRed rounded-full"
          >
            {data}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

// <div class="sm:p-1 mx-5 mt-2 sm:mx-20 bg-lightblue shadow-md flex items-center justify-between rounded-full">
// <div>
//   <img
//     src="/android-chrome-512x512.png"
//     alt="logo"
//     class="bg-deepblue rounded-full w-8 sm:w-12 sm:p-0.5 ml-2 shadow-md"
//   />
// </div>
// <div class="p-2 sm:p-2.5 m-1 sm:m-2 bg-deepblue rounded-full shadow-md">
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill="#ff8e2b"
//     class="w-5 sm:w-6 h-5 sm:h-6"
//     viewBox="0 0 24 24"
//     stroke="#ff8e2b"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       d="M4 6h16M4 12h16M4 18h16"
//     />
//   </svg>
// </div>
// </div>
