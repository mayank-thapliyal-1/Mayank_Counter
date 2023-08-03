import React, { useState } from "react";

const Counter = () => {
  const [Counter, setCounter] = useState(0);
  const CountHandler = () => {
    setCounter(Counter+1);
  };
  console.log(Counter);
  return (
    <div className=" bg-slate-500 h-fit px-4 py-6 flex flex-col rounded-md overflow-hidden  gap-7 shadow-md shadow-white">
      <h1 className=" text-white text-3xl bg-zinc-400 text-center rounded-xl py-2 px-3 shadow-sm shadow-gray-950 text-emerald-50">
        Mayank Counter
      </h1>

      <div className=" bg-slate-700  p-3  rounded-2xl w-60  flex items-center justify-between ">
        <button
          onClick={CountHandler}
          className=" bg-slate-600 rounded-lg px-1 py-2 hover:bg-slate-500 active:bg-slate-200 shadow-inner shadow-slate-100"
        >
          Counter
        </button>

        <span className=" bg-slate-900 px-2 py-2 rounded-lg shadow-md shadow-slate-600 text-gray-50">
          {Counter}
        </span>
      </div>
    </div>
  );
};

export default Counter;
