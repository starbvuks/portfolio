import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { css } from "@emotion/react";
import Navbar from "../components/Navbar/NavbarPortf";
import { MoonLoader } from "react-spinners";

import firebase from "../utils/firebase.js";

const override = css`
  display: block;
  position: fixed;
  left: 45%;
  top: 45%;
`;

const projects = () => {
  const [projectData, setProjectData] = useState([]);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    fetchData();
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <MoonLoader
          css={override}
          loading={loading}
          size={50}
          color="#AB3B61"
        />
      ) : (
        <div class="h-full bg-portfGreen pb-10 lg:pb-16 2xl:pb-44 overflow-hidden">
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
          <div class="w-full flex flex-col flex-wrap sm:flex-row items-center my-20 sm:mx-28 gap-12">
            {projectData.length > 0 &&
              projectData.map((data, index) => (
                <button
                  key={index}
                  class=" bg-portfLightGreen shadow-xl rounded-2xl mt-9 w-3/4 sm:w-1/4 transform hover:scale-110 duration-300"
                >
                  <div class="relative">
                    <div class=" flex flex-col items-center justify-center absolute inset-0 opacity-0 hover:opacity-100 duration-200 hover:bg-portfLightGreen rounded-2xl">
                      <span class="font-spartan font-bold mt-3 text-xl sm:text-2xl text-portfDark mb-3">
                        {data.name}
                      </span>
                      <span class="font-spartan font-normal text-md sm:text-lg text-portfDark mb-10 sm:mb-14">
                        {data.description}
                      </span>
                      <div class="w-8 h-8 mb-3">
                        <a href="https://landmark-locator.vercel.app/">
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
      )}
    </>
  );
};

export default projects;
