"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const SearchCase = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = () => {
    // Implement search functionality based on searchQuery
    console.log(`Search for: ${searchQuery}`);
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="max-w-[600px] mx-auto">
          <label className="block text-lg font-[500] mb-2 text-center text-[#444]">
            Search for existing case documents for your court reading
          </label>
          <div className="flex items-center">
            <input
              type="text"
              className="w-full border-2 py-3.5 px-4 mt-2 rounded-md mr-4 outline-none focus:border-[#222]/50 focus:border-2 transition-all duration-200"
              placeholder="Enter case name or title"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              className="bg-[#111] bg-opacity-85 text-white px-10 py-3.5 rounded-lg mt-2 mx-auto flex hover:opacity-70 transition-all duration-200"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>

        <div className="max-w-[800px] mx-auto">
          <p className="text-xl mt-10 font-[600] text-[#333]">
            Available Cases for Court Reading
          </p>

          <div className="flex flex-wrap gap-5 mt-6">
            <Cases />
            <Cases />
            <Cases />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SearchCase;

const Cases = () => {
  return (
    <div className="flex bg-white shadow-xl w-full max-w-[380px] p-5 rounded-lg justify-between items-center">
      <div className="border border-[#333]/20 p-3.5 rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          width={20}
          height={20}
        >
          <path d="M384 32H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H398.4c-5.2 25.8-22.9 47.1-46.4 57.3V448H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H320 128c-17.7 0-32-14.3-32-32s14.3-32 32-32H288V153.3c-23.5-10.3-41.2-31.6-46.4-57.3H128c-17.7 0-32-14.3-32-32s14.3-32 32-32H256c14.6-19.4 37.8-32 64-32s49.4 12.6 64 32zm55.6 288H584.4L512 195.8 439.6 320zM512 416c-62.9 0-115.2-34-126-78.9c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C627.2 382 574.9 416 512 416zM126.8 195.8L54.4 320H199.3L126.8 195.8zM.9 337.1c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C242 382 189.7 416 126.8 416S11.7 382 .9 337.1z" />
        </svg>
      </div>

      <p className="text-lg font-[500]">Law suit</p>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
        width={18}
        height={18}
      >
        <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
      </svg>
    </div>
  );
};
