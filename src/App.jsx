/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import Nav from "./Comp/NavigationBar";
import Section from "./Comp/Section";
import Footer from "./Comp/Footer";

import "./App.css";

function App() {
  useEffect(() => {
    const audio = new Audio("/src/assets/videoplayback.mp3");
    audio.play();
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  });

  return (
    <>
      <Nav />
      <Section />

      <Footer />
    </>
  );
}

export default App;
