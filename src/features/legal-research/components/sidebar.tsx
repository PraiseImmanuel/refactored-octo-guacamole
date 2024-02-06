"use client";
import React, { useState } from "react";
import { Menu, Pen } from "../../../../public/svgs";
import { AnimatePresence, motion } from "framer-motion";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* Mobile Toggle */}
      <div className="-mt-3 flex items-center bg-[#666] text-white fixed w-full z-20 tb:hidden">
        <button
          className="w-fit flex items-center"
          onClick={() => setIsOpen((prevIsOpen) => (prevIsOpen = !prevIsOpen))}
        >
          <Menu />
          <p className="mt-1 font-[500]">View Previous</p>
        </button>
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="max-w-[280px] bg-white shadow-sm h-screen fixed z-10 w-full pt-10 px-4 block tb:hidden"
          >
            <button className="flex justify-between items-center w-full">
              <span className="text-sm">New Research</span>
              <Pen />
            </button>

            <div className="flex flex-col w-full text-left mt-6 gap-4">
              <button className="w-fit">Previously We researche...</button>
              <button className="w-fit">Previously after we did...</button>
              <button className="w-fit">Previously so what is n...</button>
              <button className="w-fit">Previously ooh is that i...</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-[280px] bg-white/70 shadow-sm h-screen fixed z-10 w-full pt-10 px-4 -mt-6 hidden tb:block">
        <button className="flex justify-between items-center w-full">
          <span className="text-sm">New Research</span>
          <Pen />
        </button>

        <div className="flex flex-col w-full text-left mt-6 gap-4">
          <button className="w-fit">Previously We researche...</button>
          <button className="w-fit">Previously after we did...</button>
          <button className="w-fit">Previously so what is n...</button>
          <button className="w-fit">Previously ooh is that i...</button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
