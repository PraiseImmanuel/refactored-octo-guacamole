"use client";
import React, { useState } from "react";
import Navbar from "../layout/nav";
import { AnimatePresence } from "framer-motion";
import MobileSidebar from "../layout/mobile-sidebar";
import Sidebar from "../layout/sidebar";
import SearchBar from "../shared/search-bar";
import ServiceCard from "../shared/service-card";
import ChatCard from "../shared/chat-card";

const RecommendJudgments = () => {
  const [isOpen, setOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  return (
    <div className="font-poppins min-h-screen">
      {/* Layout */}
      <div className="flex w-full">
        <Navbar isOpen={isOpen} setOpen={setOpen} />
        <Sidebar />
      </div>
      {/* Inner Page */}
      <div className="pl-[340px] pt-28 relative min-h-screen flex">
        <div className="w-full flex flex-col gap-5 items-center pb-[150px] flex-1 justify-center">
          {!isSearching && (
            <div className="flex justify-center flex-col">
              <div className="w-12 h-12 bg-[#333] mx-auto rounded-full mb-6"></div>

              <p className="text-2xl text-[#333] font-[600]">
                How can I help you today?
              </p>
            </div>
          )}
          {isSearching && (
            <>
              <ChatCard />
              <ChatCard />
              <ChatCard />
            </>
          )}
        </div>

        <SearchBar setIsSearching={setIsSearching} />
      </div>

      <AnimatePresence>
        {isOpen && <MobileSidebar isOpen={isOpen} setOpen={setOpen} />}
      </AnimatePresence>
    </div>
  );
};

export default RecommendJudgments;
