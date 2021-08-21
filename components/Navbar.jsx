import React from "react";

const Navbar = () => {
  return (
    <div class="sm:p-1 mx-5 mt-2 sm:mx-20 flex items-center justify-between">
      <div>
        <img src="/sk-logo.png" alt="logo" />
      </div>
      <div class="flex gap-9 font-poppins text-lg text-mainRed">
        <button class="px-6 py-2 ring-2 ring-mainRed rounded-full">
          about
        </button>
        <button class="px-6 py-2 ring-2 ring-mainRed rounded-full">
          projects
        </button>
        <button class="px-6 py-2 ring-2 ring-mainRed rounded-full">
          contact
        </button>
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
