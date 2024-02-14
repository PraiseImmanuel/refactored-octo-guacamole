"use client";
import React, { useState } from "react";
import Navbar from "../layout/nav";
import { AnimatePresence } from "framer-motion";
import MobileSidebar from "../layout/mobile-sidebar";
import Sidebar from "../layout/sidebar";

const LandingPage = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="font-poppins">
      <div className="flex w-full">
        <Navbar isOpen={isOpen} setOpen={setOpen} />
        <Sidebar />
      </div>
      <AnimatePresence>
        {isOpen && <MobileSidebar isOpen={isOpen} setOpen={setOpen} />}
      </AnimatePresence>
    </div>
  );
};

export default LandingPage;
