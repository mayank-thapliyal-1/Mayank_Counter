import React from "react";

const Tiranga = () => {
  return (
    <div className=" bg-slate-700 flex flex-col h-56 w-80 rounded-lg overflow-hidden"> 
      <div className=" bg-orange-600 flex-grow" />
      <div className=" bg-white flex-grow relative flex items-center justify-center">
        <div className=" rounded-full border-blue-600 bg-blue-500 h-16 w-16 absolute" />
      </div>
      <div className=" bg-green-600 flex-grow"></div>
    </div>
  );
};

export default Tiranga;
