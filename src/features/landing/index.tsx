"use client";
import React, { useState } from "react";
import Navbar from "../layout/nav";
import { AnimatePresence } from "framer-motion";
import MobileSidebar from "../layout/mobile-sidebar";
import Sidebar from "../layout/sidebar";
import ServiceCard from "../shared/service-card";
import Wrapper from "../shared/wrapper";
import Image from "next/image";

const LandingPage = () => {
  return (
    <div className="font-merri font-[400] py-5 xl:py-4">
      <div className="flex flex-col items-center min-h-screen justify-center">
        <Wrapper>
          <div className="w-[50px] h-[50px] bg-[#333] mx-auto rounded-full mb-3">
            <Image width={100} height={100} src="/judicms-logo.png" alt="" />
          </div>
          <h1 className="text-xl font-[600] text-center">JudiCMS</h1>
          <p className="text-center text-lg pt-1">Choose a Service</p>
          <div className="relative flex mt-10">
            <div className="w-full flex flex-col gap-5 items-center flex-1 justify-center">
              <ServiceCard />
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default LandingPage;
