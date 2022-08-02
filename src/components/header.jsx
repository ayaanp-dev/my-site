import React from "react";
import data from "../data/data.json"
function header() {
  return (
    <div className="bg-black mt-10 ml-10 header-container pr-text fit-content ">
      <h1 className="text-4xl inline text-white mt-8 pl-2">{data.intro}</h1>
      <h1 className="text-5xl text-warning inline pl-4">{data.name}</h1>
      <p className="text-white mt-10  text-2xl pl-10 pr-10 pb-10  p-about">
        {data.about}
      </p>
    </div>
  );
}

export default header;
