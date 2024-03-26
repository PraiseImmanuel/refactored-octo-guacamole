"use client";
import React, { useState } from "react";
import Navbar from "../layout/nav";
import { AnimatePresence } from "framer-motion";
import MobileSidebar from "../layout/mobile-sidebar";
import Sidebar from "../layout/sidebar";
import SearchBar from "../shared/search-bar";
import ServiceCard from "../shared/service-card";
import ChatCard from "../shared/chat-card";
import Image from "next/image";

const RecommendJudgments = () => {
  const [isOpen, setOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  return (
    <div className="font-merri min-h-screen">
      {/* Layout */}
      <div className="flex w-full">
        <Navbar isOpen={isOpen} setOpen={setOpen} />
        <Sidebar />
      </div>
      {/* Inner Page */}
      <div className="md:pl-[300px] pt-28 relative min-h-screen flex">
        <div className="w-full flex flex-col gap-5 items-center pb-[150px] flex-1 justify-center">
          {!isSearching && (
            <div className="flex justify-center flex-col">
              <div className="w-[80px] h-[80px] bg-[#333] mx-auto rounded-full mb-3">
                <Image
                  width={100}
                  height={100}
                  src="/judicms-logo.png"
                  alt=""
                />
              </div>

              <p className="text-xl tb:text-2xl text-[#333] font-[600] max-w-[300px] tb:max-w-[350px] text-center">
                Which trial are we helping you with today?
              </p>
            </div>
          )}
          {isSearching && (
            <>
              <ChatCard key={1} />
              <ChatCard key={2} />
              <ChatCard key={3} />
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
