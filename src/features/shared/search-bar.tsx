"use client";
import React, { useState } from "react";

interface SearchBarProps {
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ setIsSearching }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchDropUp, setIsSearchDropUp] = useState(false);
  const handleSearch = () => {
    setIsSearching(true);
    // Implement search functionality based on searchQuery
    console.log(`Search for: ${searchQuery}`);
  };
  return (
    <div className="fixed bottom-0 right-1/2 translate-x-1/2 w-full">
      <div className="bg-[#f1f1f1] py-2 px-6 rounded-xl pb-4 md:pl-[340px]">
        <div className="max-w-[600px] mx-auto">
          <div className="flex items-center gap-3">
            <input
              type="text"
              className="w-full border-2 py-3.5 px-4 mt-2 rounded-md md:mr-2 outline-none 
            focus:border-[#222]/50 focus:border-2 transition-all duration-200"
              placeholder="Enter prompt or research information"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="relative">
              <button
                className="bg-[#111] bg-opacity-85 text-white px-6 py-2.5 md:py-3.5 items-center
            rounded-lg min-h-[52px] mt-2.5 mx-auto flex hover:opacity-70 transition-all duration-200"
                onClick={() => setIsSearchDropUp((prevState) => !prevState)}
              >
                <span className="tb:hidden">
                  <svg
                    width={18}
                    height={18}
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                  </svg>
                </span>

                <span className="hidden tb:block">Search</span>
              </button>

              <div
                className={`absolute -top-[92px] bg-[#333] w-52 z-30 ${
                  isSearchDropUp ? "block" : "hidden"
                } text-white text-sm
              py-4 text-center border border-black/10 rounded-md right-0`}
              >
                <button className="pb-2 px-2 border-b border-b-[#fff]">
                  Search with Judicms
                </button>
                <button className="px-2 pt-2">Search externally</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
