/* eslint-disable react/no-unknown-property */
import Main from "../components/Home.jsx";
import Navbar from "../components/Navbar.jsx";
import Stack from "../components/Stack.jsx";
import Socials from "../components/Socials";

export default function Home() {
  return (
    <div class="h-screen bg-backLight">
      <Navbar />
      <div>
        <Main />
        <Stack />
      </div>
    </div>
  );
}
