/* eslint-disable react/no-unknown-property */
import Head from "next/head";
import Image from "next/image";

import Navbar from "../components/Navbar";
import Socials from "../components/Socials";

import "tailwindcss/tailwind.css";

export default function Home() {
  return (
    <div class="h-full bg-deepblue p-4 pb-28">
      <Navbar />
      <div class="sm:pl-24 md:pl-20 lg:pl-24 sm:pr-28 md:pr-32 mt-20">
        <div class="flex flex-col mx-10 sm:mx-0 sm:flex-row text-center sm:text-left">
          <div>
            <h3 class="font-poppins text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-50">
              my name's Sarvag
            </h3>
            <p class="font-poppins pt-7 sm:pt-14 leading-relaxed text-blue-100 md:w-10/12 text-sm md:text-lg lg:text-xl">
              i&apos;m a Web Dev living in Hyderabad, India currently balancing
              college and my passion for programming and ui design. Over the
              past year i&apos;ve spent my time taking courses and learning,
              notably{" "}
              <a
                class="italic text-blue-300"
                href="https://cs50.harvard.edu/x/2021/"
              >
                Harvard&apos;s CS50
              </a>{" "}
              and more recently finishing a Full Stack Bootcamp course at{" "}
              <a
                class="italic text-blue-300"
                href="https://www.schoolofacceleratedlearning.com/"
              >
                SOAL
              </a>
              .
            </p>
          </div>
          <div class="flex items-center sm:items-start md:items-start lg:justify-end">
            <img
              src="/img/jpg.jpg"
              alt="me"
              class="object-contain shadow-2xl rounded-3xl hidden sm:visible sm:block lg:h-3/4"
            />
          </div>
        </div>
        <Socials />
      </div>
    </div>
  );
}
