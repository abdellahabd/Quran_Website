import { useEffect } from "react";
import Nav from "./Comp/NavigationBar";
import "./App.css";

function App() {
  useEffect(() => {
    const audio = new Audio("/src/assets/videoplayback.mp3");
    audio.play();

    return () => {
      audio.pause();
      // audio.src = "";
      // audio.load();
    };
  }, []);

  return (
    <>
      <Nav />
      <div
        onClick={() => {
          const audio = new Audio("/src/assets/videoplayback.mp3");
          audio.play();
        }}
      >
        hello
      </div>
    </>
  );
}

export default App;
