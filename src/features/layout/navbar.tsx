"use client";
import Wrapper from "@/features/shared/wrapper";
import { AnimatePresence, motion } from "framer-motion";
import { Sling as Hamburger } from "hamburger-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const links = [
  "Court Reading",
  "Documentation",
  "Legal Research",
  "Recommend Jugdments",
];

const linksRoute = [
  "court-reading",
  "documentation",
  "legal-research",
  "recommend-judgments",
];

interface IProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<IProps> = ({ setModalOpen }) => {
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <nav>
      <Wrapper>
        <div className="flex justify-between items-center">
          <Link
            href={"/"}
            className="text-lg font-[700] text-primary cursor-pointer"
          >
            JudiCMS
          </Link>

          <div className="hidden md:flex items-center gap-x-5 text-lg text-[#222]">
            {links.map((item, index) => (
              <Link
                key={index}
                href={linksRoute[index]}
                className={`transition-all duration-300 text-sm font-[500] border-b 
                hover:border-b-[#555] pb-1 ${
                  pathname === "/" + linksRoute[index]
                    ? "border-b-[#222]"
                    : "border-transparent"
                }`}
              >
                {item}
              </Link>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="border-2 border-[#222]/80 bg-opacity-95 w-full max-w-[150px] py-1.5 
              text-[#222] rounded-[25px] font-[500] hidden md:block"
          >
            Register
          </button>
        </div>

        {/* Mobile Links */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="block md:hidden border-t border-t-primary mt-2 pt-14 min-h-screen"
            >
              <div className="flex items-center text-center flex-col gap-5 mt-10">
                <div className="flex flex-col gap-y-6 items-center">
                  {links.map((link, index) => (
                    <Link
                      href={linksRoute[index]}
                      key={index}
                      className="transition-all duration-300 text-sm font-[500] border-b border-transparent
                hover:border-b-[#555] pb-1"
                    >
                      {link}
                    </Link>
                  ))}
                  <button
                    type="button"
                    onClick={() => setModalOpen(true)}
                    className="bg-[#222] bg-opacity-95 w-full max-w-[150px] py-1.5 
                  text-white rounded-[25px] font-[500] block md:hidden text-sm"
                  >
                    Register
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Wrapper>
    </nav>
  );
};

export default Navbar;
