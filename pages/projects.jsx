import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Navbar from "../components/Navbar/NavbarPortf";

import firebase from "../utils/firebase.js";

const projects = () => {
  const [projectData, setProjectData] = useState([]);

  const langs = ["react", "next js", "material-ui", "tailwind css"];

  const fetchData = () => {
    const db = firebase.firestore();
    db.collection("projects").onSnapshot((snapshot) => {
      let proj = [];
      proj = snapshot.docs.map((doc) => doc.data());
      setProjectData(proj);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div class="h-full bg-portfGreen pb-10 md:pb-28 lg:pb-16 2xl:pb-44">
      <Navbar />
      <div class="mt-28 mx-6 sm:mx-28">
        <span class="font-anon text-portfLight text-4xl sm:text-7xl">
          things i’ve made
        </span>
        <div class="flex flex-wrap flex-grow text-portfBtnLight gap-5 font-spartan text-sm sm:text-md mt-7">
          {langs.map((data, index) => (
            <button
              key={index}
              class="px-2 sm:px-6 py-2 ring-2 font-semibold ring-portfBtnLight rounded-md transform hover:scale-110 transition duration-500"
            >
              {data}
            </button>
          ))}
        </div>
      </div>
      <div class="w-full md:w-10/12 flex flex-col flex-wrap md:flex-row items-center my-20 md:mx-28 gap-5 sm:gap-12">
        {projectData.length > 0 &&
          projectData.map((data, index) => (
            <button
              key={index}
              class=" bg-portfLightGreen shadow-xl rounded-2xl mt-9 w-3/4 md:w-1/3 transform hover:scale-110 duration-300"
            >
              <div class="relative">
                <div class=" flex flex-col items-center justify-center absolute inset-0 opacity-0 hover:opacity-100 duration-200 hover:bg-portfLightGreen rounded-2xl">
                  <span class="font-spartan font-bold text-2xl md:text-base xl:text-xl text-portfDark mt-3 md:mt-1.5 xl:mt-5 mb-3 md:mb-0 xl:mb-2">
                    {data.name}
                  </span>
                  <span class="hidden xl:block font-spartan font-normal text-lg text-portfDark">
                    {data.description}
                  </span>
                  <div
                    key={index}
                    class="flex flex-row gap-3 mt-3 xl:mt-6 mb-2"
                  >
                    {data.category.map((langs, index) => (
                      <span class="font-spartan font-semibold text-xs text-portfBtnLight bg-portfGreen rounded-md md:rounded-xl p-2 md:p-1.5 lg:p-2">
                        {langs}
                      </span>
                    ))}
                  </div>
                  <div class="flex gap-3 w-20 h-20 md:w-16 md:h-16 xl:w-20 xl:h-20">
                    <a href={data.siteLink}>
                      <Icon icon="entypo:link" width="full" height="full" />
                    </a>
                    <a href={data.gitLink}>
                      <Icon
                        icon="akar-icons:github-fill"
                        width="full"
                        height="full"
                      />
                    </a>
                  </div>
                </div>
                <img
                  src={data.image}
                  alt="preview"
                  class="rounded-2xl object-cover"
                />
              </div>
            </button>
          ))}
      </div>
    </div>
  );
};

export default projects;
