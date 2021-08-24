import React from "react";
import Navbar from "../components/Navbar/NavbarAbout";

import Link from "next/link";
import { Icon } from "@iconify/react";

const about = () => {
  return (
    <div class="h-screen bg-aboutBlue">
      <Navbar />
      <div class="flex flex-col items-center mx-32 pt-36">
        <div class="flex items-center">
          <img src="/img/me.jpg" alt="me" class="w-52 h-52 rounded-xl" />
          <div class="flex flex-col pl-16 font-spartan tracking-tight">
            <span class="font-extrabold text-aboutLight text-5xl">
              my name is Sarvag Kalari
            </span>
            <span class="flex items-center font-semibold text-aboutGray text-3xl pt-3 gap-7">
              I make websites with
              <div class="inline-block animate-spin">
                <Icon icon="logos:react" width="100" height="100" />
              </div>
            </span>
          </div>
        </div>
        <div class="bg-aboutBlue2 font-poppins text-aboutGray font-medium p-10">
          <p class="">
            i’m a Web Dev living in Hyderabad, India currently balancing college
            and my passion for programming and ui design.
          </p>
        </div>
      </div>
    </div>
  );
};

export default about;
