/* eslint-disable react/no-unknown-property */
import Main from "../components/Home.jsx";
import Stack from "../components/Stack.jsx";
import Navbar from "../components/Navbar/Navbar";

import {motion} from "framer-motion";

export default function Home() {
  return (
    <div class="h-screen bg-backLight">
      <Navbar />
      <Main />
      <Stack />
    </div>
  );
}
