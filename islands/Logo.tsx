import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { useState, useEffect } from "https://esm.sh/preact@10.18.1/hooks";

const arr: string[] = [
  `n.....`,
  `n1....`,
  `n1.r..`,
  `n1.ri.`,
  `n1.rip`,
  `.1.rip`,
  `...rip`,
  `....ip`,
  `.....p`,
];

// const arr: string[] = [
//   `mystère`,
//   `myst.re`,
// ];

export function Logo() {
  const [text, setText] = useState("......");
  let i = 0;

  function rotateText() {
    setText(arr[i]);
    i += 1;
    if (i >= arr.length) {
      i = 0;
    }
  }

  useEffect(() => {
    setInterval(() => {
      rotateText();
    }, 500);
  }, [])

  return (
    <a
      id={"logo"}
      class="text-white font-bold hover:text-black hover:bg-white"
      href={"/"}
    >
      {text}
    </a>
  );
}
