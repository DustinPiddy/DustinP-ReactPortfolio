import React from "react";
import ImageOne from "../images/EUyIXPUXsAADZYc.jpg";

const Content = () => {
  return (
    <div className=" flex flex-col justify-center items-center bg-white h-screen font-mono py-20">
      <img src={ImageOne} alt="bg" className="h-full rounded mb-20 shadow" />
      <div className="flex flex-col justify-center items-center"></div>
    </div>
  );
};

export default Content;
