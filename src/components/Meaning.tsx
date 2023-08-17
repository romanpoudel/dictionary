"use client";

import { PlayCircleIcon, PauseCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export const Meaning = ({data}:{data:any}) => {
  const [play, setPlay] = useState(true);
  console.log(data)
  const toggle = () => {
    setPlay(!play);
  };
  return (
    <div className="border-2 border-slate-200 rounded-3xl h-96 sm:h-[626px] mt-6 p-3 sm:p-6">
      <div className="flex items-center gap-2 sm:gap-4 select-none">
        {play ? (
          <PlayCircleIcon className="w-10 h-10" onClick={toggle} />
        ) : (
          <PauseCircleIcon className="w-10 h-10" onClick={toggle} />
        )}
        <p>/'aep.el</p>
      </div>
      <div className="ml-3">
        <div className="flex gap-2 mt-4  select-none">
          <button
            type="button"
            className="bg-black text-white px-3  text-sm rounded"
          >
            noun
          </button>
          <button
            type="button"
            className="bg-gray-200 text-black px-3  text-sm rounded"
          >
            verb
          </button>
        </div>
        <div className="mt-4 mx-4 select-text">
          <ol className="list-decimal  list-outside">
            <li>
              A common, round fruit produced by the tree Malus domestica,
              cultivated in temperate climates.
            </li>
            <li>
              Any of various tree-borne fruits or vegetables especially
              considered as resembling an apple; also (with qualifying words)
              used to form the names of other specific fruits such as custard
              apple, rose apple, thorn apple etc.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};
