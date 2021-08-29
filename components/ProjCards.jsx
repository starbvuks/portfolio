import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const ProjCards = (props) => {
  return (
    <motion.button
      key={props.index}
      className="bg-portfLightGreen shadow-xl rounded-2xl mt-9 w-3/4 md:w-1/3 transform hover:scale-110 duration-300"
      animate={{
        y: -20,
        opacity: 1,
      }}
      whileHover={{ scale: 1.1 }}
      transition={{
        type: "spring",
        stiffness: 100,
      }}
    >
      <div class="relative">
        <div class=" flex flex-col items-center justify-center absolute inset-0 opacity-0 hover:opacity-100 duration-200 hover:bg-portfLightGreen rounded-2xl">
          <span class="font-spartan font-bold text-2xl md:text-base xl:text-xl text-portfDark mt-3 md:mt-1.5 xl:mt-5 mb-3 md:mb-0 xl:mb-2">
            {props.data.name}
          </span>
          <span class="hidden xl:block font-spartan font-normal text-lg text-portfDark">
            {props.data.description}
          </span>
          <div class="flex flex-row gap-3 mt-3 xl:mt-6 mb-2">
            {props.data.category.map((langs, index) => (
              <span
                key={index}
                class="font-spartan font-semibold text-xs text-portfBtnLight bg-portfGreen rounded-md md:rounded-xl p-2 md:p-1.5 lg:p-2"
              >
                {langs}
              </span>
            ))}
          </div>
          <div class="flex gap-3 w-20 h-20 md:w-16 md:h-16 xl:w-20 xl:h-20">
            <a href={props.data.siteLink}>
              <Icon icon="entypo:link" width="100%" height="100%" />
            </a>
            <a href={props.data.gitLink}>
              <Icon icon="akar-icons:github-fill" width="100%" height="100%" />
            </a>
          </div>
        </div>
        <img
          src={props.data.image}
          alt="preview"
          class="rounded-2xl object-cover"
        />
      </div>
    </motion.button>
  );
};

export default ProjCards;
