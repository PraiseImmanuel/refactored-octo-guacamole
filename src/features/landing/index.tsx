"use client";
import React, { useState } from "react";
import Navbar from "../layout/nav";
import { AnimatePresence } from "framer-motion";
import MobileSidebar from "../layout/mobile-sidebar";
import Sidebar from "../layout/sidebar";
import ServiceCard from "../shared/service-card";
import Wrapper from "../shared/wrapper";

const LandingPage = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="font-merri font-[400] min-h-screen">
      {/* Layout */}
      <div className="flex w-full">
        <Navbar isOpen={isOpen} setOpen={setOpen} />
        <Sidebar />
      </div>
      <Wrapper>
        {/* Inner Page */}
        <div className="md:pl-[300px] pt-28 relative min-h-screen flex">
          <div className="w-full flex flex-col gap-5 items-center pb-[60px] flex-1 justify-center">
            <ServiceCard />
          </div>
        </div>
      </Wrapper>

      <AnimatePresence>
        {isOpen && <MobileSidebar isOpen={isOpen} setOpen={setOpen} />}
      </AnimatePresence>
    </div>
  );
};

export default LandingPage;
