import React from "react";

const Navbar = () => {
  return (
    <div class="p-1 mx-20 bg-lightblue shadow-md flex items-center justify-between rounded-full">
      <div>
        <img
          src="/android-chrome-512x512.png"
          alt="logo"
          class="bg-deepblue rounded-full w-12 ml-2 shadow-md"
        />
      </div>
      <div class="p-2.5 m-2 bg-deepblue rounded-full shadow-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="#ff8e2b"
          viewBox="0 0 24 24"
          stroke="#ff8e2b"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
