"use client";

import React, { useState } from "react";
import SearchCase from "./components/search-case";
import UploadCase from "./components/upload-case";
import { AnimatePresence } from "framer-motion";

const CourtReading: React.FC = () => {
  const [tab, setTab] = useState("search");

  return (
    <div className="container mx-auto p-8">
      <h1
        className="text-4xl text-center leading-[2.6rem] font-[600] text-[#111] text-opacity-95 
        bg-opacity-95 max-w-[400px] mx-auto
        md:text-5xl md:max-w-[700px] md:leading-[3.4rem]"
      >
        Seamlessly Explore, Analyze, and Navigate Cases with our Advanced Court
        Reading.
      </h1>

      <div className="flex justify-center bg-white p-1 w-fit mx-auto rounded-lg items-center mt-8">
        <button
          type="button"
          onClick={() => setTab("search")}
          className={`${
            tab === "search"
              ? "bg-[#111]/80 text-white"
              : "bg-white text-[#222]"
          } px-8 py-2 rounded-lg
          flex hover:opacity-70 transition-all duration-200 font-[500]`}
        >
          Search
        </button>
        <button
          onClick={() => setTab("upload")}
          type="button"
          className={`${
            tab === "upload"
              ? "bg-[#111]/80 text-white"
              : "bg-white  text-[#222]"
          } px-8 py-2 rounded-lg
          flex hover:opacity-70 transition-all duration-200 font-[500]`}
        >
          Upload
        </button>
      </div>

      <div className="mt-10">
        <AnimatePresence mode="wait">
          {tab === "search" && <SearchCase />}

          {tab === "upload" && <UploadCase />}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CourtReading;
