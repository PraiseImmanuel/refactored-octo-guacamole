"use client";
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import SearchDocument from "./components/search-document";
import UploadDocument from "./components/upload-document";
import Wrapper from "../shared/wrapper";

const Documentation = () => {
  const [tab, setTab] = useState("upload");

  return (
    <Wrapper>
      <div className="mx-auto py-8">
        <h1
          className="text-4xl text-center leading-[2.6rem] 
        font-[600] text-[#111] text-opacity-95 
        bg-opacity-95 max-w-[400px] mx-auto
        md:text-5xl md:max-w-[700px] md:leading-[3.4rem]"
        >
          Upload and Access Documents Seamlessly for Enhanced Management
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
            {tab === "search" && <SearchDocument />}

            {tab === "upload" && <UploadDocument />}
          </AnimatePresence>
        </div>
      </div>
    </Wrapper>
  );
};

export default Documentation;
