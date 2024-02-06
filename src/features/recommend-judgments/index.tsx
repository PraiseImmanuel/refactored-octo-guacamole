"use client";
import React, { useState } from "react";
import Sidebar from "../legal-research/components/sidebar";
import { Listen } from "../../../public/svgs";

const RecommendJudgment = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = () => {
    // Implement search functionality based on searchQuery
    console.log(`Search for: ${searchQuery}`);
  };
  return (
    <div className="flex">
      <Sidebar />

      <div className="mx-auto py-8 px-[4vw] tb:pl-[280px] max-w-[100vw-300px] min-h-[100vh-130px]">
        <h1
          className="text-4xl text-center leading-[2.6rem] 
          font-[600] text-[#111] text-opacity-95 
          bg-opacity-95 max-w-[400px] mx-auto mt-8 tb:0
          md:text-5xl md:max-w-[700px] md:leading-[3.4rem]"
        >
          Predicting Court Rulings with Precision and Expert Analysis
        </h1>

        <div className="bg-white h-fit my-8 rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-3 border-b pb-2 border-b-[#333]/20">
            <div className="w-8 h-8 min-h-8 min-w-8 bg-[#777] rounded-[50%]"></div>
            <div className="">
              <p className="text-[#333]/70 text-sm">You searched</p>
              <p className="text-[#333] mt-1.5 text-base md:text-lg">
                Predicting Court Rulings with Precision and Expert Analysis
              </p>
            </div>
          </div>

          <div className="max-w-[700px] flex flex-col">
            <p className="text-[#333]/70 text-lg font-[700] mt-4">JudiCMS</p>
            <p className="font-[300] mt-2">
              A personal name can be made up of multiple components, which
              identify an individual, their lineage, family or clan. The part
              that refers to the individual is known as a given name. It can be
              made up of multiple names; the first of which is known as a first
              name or forename.
            </p>
            <button className="flex gap-2 items-center bg-[#666] self-end px-3 py-1 rounded-md">
              <span className="font-[400] text-white">Listen</span>
              <Listen />
            </button>
          </div>
        </div>

        <div className="max-w-[600px] mx-auto mt-7">
          <div className="flex flex-col md:flex-row items-center">
            <input
              type="text"
              className="w-full border-2 py-3.5 px-4 mt-2 rounded-md md:mr-4 outline-none 
                focus:border-[#222]/50 focus:border-2 transition-all duration-200"
              placeholder="Enter prompt or case information"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              className="bg-[#111] bg-opacity-85 text-white px-10 py-2.5 md:py-3.5 
                rounded-lg mt-3 mx-auto flex hover:opacity-70 transition-all duration-200"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendJudgment;
