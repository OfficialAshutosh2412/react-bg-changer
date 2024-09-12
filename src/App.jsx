import { useState } from "react";

function App() {
  const [colors, setColor] = useState("indigo");
  const [names, setName] = useState("Indigo");
  const [textcolor, setTextcolor] = useState("white");
  const red = () => {
    setColor("red");
    setName("red");
    setTextcolor("white");
  };
  const green = () => {
    setColor("green");
    setName("green");
    setTextcolor("white");
  };
  const blue = () => {
    setColor("blue");
    setName("blue");
    setTextcolor("white");
  };
  const olive = () => {
    setColor("olive");
    setName("olive");
    setTextcolor("white");
  };
  const yellow = () => {
    setColor("yellow");
    setName("yellow");
    setTextcolor("black");
  };
  const purple = () => {
    setColor("purple");
    setName("purple");
    setTextcolor("white");
  };

  return (
    <>
      <div
        className="flex flex-col w-full h-screen justify-center align-middle transition-all duration-300 ease-in-out"
        style={{ backgroundColor: colors }}
      >
        <h1
          className="text-white text-center text-8xl font-bold"
          style={{ color: textcolor }}
        >
          B<span>G</span>
        </h1>
        <h1
          className="text-white text-8xl text-center font-bold uppercase"
          style={{ color: textcolor }}
        >
          {names}
        </h1>
        <div className="fixed flex gap-5 w-8/12 bottom-8 m-auto inset-x-0 align-middle justify-center rounded-3xl bg-white p-3 font-bold tracking-widest ">
          <button
            className="w-full p-2 rounded-3xl shadow-lg text-white"
            style={{ backgroundColor: "red" }}
            onClick={red}
          >
            red
          </button>
          <button
            className="w-full p-2 rounded-3xl shadow-lg text-white"
            style={{ backgroundColor: "green" }}
            onClick={green}
          >
            green
          </button>
          <button
            className="w-full p-2 rounded-3xl shadow-lg text-white"
            style={{ backgroundColor: "blue" }}
            onClick={blue}
          >
            blue
          </button>
          <button
            className="w-full p-2 rounded-3xl shadow-lg text-white"
            style={{ backgroundColor: "olive" }}
            onClick={olive}
          >
            olive
          </button>
          <button
            className="w-full p-2 rounded-3xl shadow-lg"
            style={{ backgroundColor: "yellow" }}
            onClick={yellow}
          >
            yellow
          </button>
          <button
            className="w-full p-2 rounded-3xl shadow-lg text-white"
            style={{ backgroundColor: "purple" }}
            onClick={purple}
          >
            purple
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
