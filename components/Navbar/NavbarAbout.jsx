import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const btns = [{ name: "about" }, { name: "projects" }, { name: "contact" }];

  const handleClick = (e) => {
    return router.push(`/${e}`);
  };

  return (
    <div class="p-4 px-6 pt-6 md:mx-20 flex items-center justify-between">
      <Link href="/" passHref={true}>
        <a>
          <img
            src="/sk-logo-about.png"
            alt="logo"
            class="pr-3 w-7/12 md:w-11/12"
          />
        </a>
      </Link>
      <div class="flex gap-3 sm:gap-4 md:gap-9 font-poppins text-sm sm:text-md md:text-lg text-aboutLight">
        {btns.map((data, index) => (
          <button
            key={index}
            onClick={() => handleClick(`${data.name}`)}
            class="px-2 sm:px-6 py-2 ring-2 font-semibold ring-aboutLight rounded-full"
          >
            {data.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
