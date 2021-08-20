/* eslint-disable react/no-unknown-property */
import Head from "next/head";
import Image from "next/image";

import Navbar from "../components/Navbar";
import Socials from "../components/Socials";

import "tailwindcss/tailwind.css";

export default function Home() {
  return (
    <div class="h-screen bg-deepblue p-4">
      <Navbar />
      <div class="pl-24 pr-32 mt-20 h-80 flex items-center flex-col sm:flex-row">
        <div>
          <h3 class="font-poppins text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-50">
            my name's Sarvag
          </h3>
          <p class="font-poppins pt-14 leading-relaxed text-blue-100 w-full sm:w-10/12 text-sm md:text-lg lg:text-xl">
            i&apos;m a Web Dev living in Hyderabad, India currently balancing
            college and my passion for programming and ui design. Over the past
            year i&apos;ve spent my time taking courses and learning, notably{" "}
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
        <div class="flex items-center">
          <Image
            src="/img/jpg.jpg"
            alt="me"
            width={750}
            height={750}
            class="object-contain shadow-2xl rounded-3xl hidden sm:block md:w-5/6 sm:h-full"
          />
        </div>
      </div>
      <Socials />
    </div>
  );
}
