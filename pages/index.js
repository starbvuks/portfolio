/* eslint-disable react/no-unknown-property */
import Main from "../components/Home.jsx";
import Navbar from "../components/Navbar.jsx";
import Stack from "../components/Stack.jsx";
import Socials from "../components/Socials";

export default function Home() {
  return (
    <div class="h-screen bg-backLight p-4">
      <Navbar />
      <div class="sm:pl-24 md:pl-20 lg:pl-24 sm:pr-28 md:pr-32 mt-20">
        <Main />
        <Stack />
      </div>
    </div>
  );
}
