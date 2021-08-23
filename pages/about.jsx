import React from "react";
import Navbar from "../components/Navbar/NavbarAbout";

import Link from "next/link";
import {Icon} from "@iconify/react";

const about = () => {
  return (
    <div class="transition-all duration-500 ease-in-out h-screen bg-aboutBlue">
      <Navbar />
      <div class="flex flex-col px-20 pt-28">
        <span class="font-spartan font-extrabold text-9xl bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-200">
          Hey
        </span>
        {"  "}
        <span class="flex items-center font-spartan font-bold tracking-tight text-aboutLight text-5xl pt-3 gap-7">
          I make websites with
          <div class="inline-block animate-spin">
            <Icon icon="logos:react" width="100" height="100" />
          </div>
        </span>
        <span class="font-spartan font-bold text-5xl text-main pt-3">
          <div class=""></div>
        </span>
      </div>
    </div>
  );
};

export default about;
