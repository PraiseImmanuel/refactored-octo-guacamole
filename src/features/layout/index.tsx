"use client";
import React, { useState } from "react";
// import Navbar from "./navbar";
import Footer from "./components/footer";
import Modal from "./components/modal";
import { AnimatePresence } from "framer-motion";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div className="font-poppins ">
      {/* <Navbar setModalOpen={setModalOpen} /> */}
      <div className="pt-[84px] md:pt-[100px] min-h-[calc(100vh-70px)]">
        {children}
      </div>
      <Footer />
      <AnimatePresence>
        {isModalOpen && <Modal setModalOpen={setModalOpen} />}
      </AnimatePresence>
    </div>
  );
};

export default Layout;
