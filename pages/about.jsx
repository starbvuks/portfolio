import React from "react";
import Navbar from "../components/Navbar/NavbarAbout";
import Stack from "../components/Stack";

import Link from "next/link";
import { Icon } from "@iconify/react";

const about = () => {
  return (
    <div class="h-full bg-aboutBlue pb-36">
      <Navbar />
      <div class="flex flex-col items-center mx-30 lg:mx-40 2xl:mx-72 pt-28">
        <div class="flex flex-col sm:flex-row items-center gap-10">
          <img src="/img/me.jpg" alt="me" class="w-52 h-52 rounded-xl" />
          <div class="flex flex-col items-center sm:items-start sm:pl-10 font-spartan tracking-tight">
            <span class="font-extrabold text-aboutLight text-2xl sm:text-4xl">
              my name is Sarvag Kalari
            </span>
            <span class="flex items-center font-semibold text-aboutGray text-lg sm:text-3xl pt-3 gap-4 sm:gap-7">
              I make websites with
              <div class="inline-block animate-spin w-10 h-10 sm:w-24 sm:h-24">
                <Icon icon="logos:react" width="full" height="full" />
              </div>
            </span>
          </div>
        </div>
        <div class="w-2/3 sm:w-10/12 bg-aboutBlue2 font-poppins text-aboutLight text-md sm:text-xl p-14 rounded-2xl mt-16 sm:mt-28">
          <p>
            i’m a Web Dev living in Hyderabad, India currently balancing college
            and my passion for programming and ui design.
          </p>
          <p class="pt-10">
            Over the past year i’ve spent my time taking courses, practicing and
            learning everything that interests me.
          </p>
          <p class="pt-10">
            Some notable undertakings include{" "}
            <a
              href="https://cs50.harvard.edu/x/2021/"
              class="text-aboutSky italic"
            >
              Harvard CS50
            </a>{" "}
            and more recently, a Full-Stack Bootcamp at{" "}
            <a
              href="https://www.schoolofacceleratedlearning.com/"
              class="text-aboutSky italic"
            >
              SOAL (School Of Accelerated Learning)
            </a>
            .
          </p>
        </div>
        <Stack />
      </div>
    </div>
  );
};

export default about;
