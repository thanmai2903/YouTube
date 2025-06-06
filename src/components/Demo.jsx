import { useMemo, useState } from "react";
import { findPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  console.log("Rendering");
  //heavy operation
  const prime = useMemo(() => findPrime(text), [text]);
  return (
    <div
      className={`m-4 p-2 h-96 border border-black ${
        isDarkTheme ? "bg-amber-500 text-green-500" : ""
      }`}
    >
      <div>
        <button
          className="bg-pink-500 text-white p-2 m-2"
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          Toggle
        </button>
      </div>
      <div>
        <input
          className="border border-black w-72 px-2 py-1"
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <h1 className="mt-4 font-bold text-xl">nth Prime: {prime}</h1>
      </div>
    </div>
  );
};
export default Demo;
