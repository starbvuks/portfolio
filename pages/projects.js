import { useState, useEffect } from "react";
import Navbar from "../components/Navbar/NavbarPortf";

import { collection, getDocs } from "firebase/firestore/lite";
import db from "../utils/firebase.js";
import ProjectCards from "../components/ProjCards";
import ThisProj from "../components/ThisProj";

export const getStaticProps = async () => {
  const projCol = collection(db, "projects");
  const projSnapshot = await getDocs(projCol);
  const projList = projSnapshot.docs.map((doc) => doc.data());

  return {
    props: { projs: projList },
  };
};

const projects = ({ projs }) => {
  const langs = ["all", "react", "material-ui", "firebase"];
  // next js, tailwind css

  const [projectData, setProjectData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    setProjectData(projs);
  }, []);

  useEffect(() => {
    setFilteredData(
      projectData.filter((data) => data.category.includes(category))
    );
  }, [category, projectData]);

  const handleCategory = (res) => {
    const data = res.data;
    setCategory(data);
  };

  return (
    <div class="h-screen md:h-screen bg-portfGreen pb-28 md:pb-28 lg:pb-16 xl:pb-32 2xl:pb-44">
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
              onClick={() => handleCategory({ data })}
            >
              {data}
            </button>
          ))}
        </div>
      </div>
      <div class="w-full h-full sm:h-auto bg-portfGreen md:w-10/12 flex flex-col flex-wrap md:flex-row items-center mt-16 md:mx-28 gap-5 sm:gap-12">
        {filteredData.length > 0 && category !== "all"
          ? filteredData.length > 0 &&
            filteredData.map((data, index) => (
              <ProjectCards data={data} index={index} />
            ))
          : projectData.length > 0 &&
            projectData.map((data, index) => (
              <ProjectCards data={data} index={index} />
            ))}
      </div>
      {/* <ThisProj /> */}
    </div>
  );
};

export default projects;
