"use client";
import React, { useState } from "react";
import Footer from "./components/footer";

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
    </div>
  );
};

export default Layout;
