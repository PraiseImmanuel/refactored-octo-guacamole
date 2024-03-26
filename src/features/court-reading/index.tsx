"use client";
import React, { useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Wrapper from "../shared/wrapper";
import AltNavbar from "../layout/alt-nav";
import AddNew from "../documentation/components/add-new";
import AltSearchBar from "../shared/alt-search-bar";
import FilesCard from "./components/files-card";
import { useOnClickOutside } from "@/lib/hooks/use-on-click-outside";

const CourtReading = () => {
  const [isOpen, setOpen] = useState(false);
  const [addDropDown, setAddDropDown] = useState(false);
  const addNewRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(addNewRef, () => setAddDropDown(false));

  return (
    <>
      <div className="flex w-full font-merri ">
        <AltNavbar isOpen={isOpen} setOpen={setOpen} />
      </div>
      <div className="font-merri pt-16 pb-[150px]">
        <Wrapper>
          <div className="p-3 bg-[#fff]/70 rounded-lg mt-8 flex justify-between items-center">
            <h1 className="font-[600]">Court Reading</h1>
            <div className="relative" ref={addNewRef}>
              <button
                className="bg-[#333] py-1 px-6 rounded-full hover:opacity-80 transition-all duration-200"
                onClick={() => setAddDropDown((prev) => !prev)}
              >
                <span className="text-white text-sm">Add +</span>
              </button>
              {addDropDown && <AddNew />}
            </div>
          </div>

          <div className="p-1 mt-4">
            <h2>Files</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 tb:grid-cols-3 md:grid-cols-4 gap-6 mt-4">
              <FilesCard a="" />
              <FilesCard a="" />
              <FilesCard a="" />
              <FilesCard a="" />
              <FilesCard a="" />
            </div>
          </div>

          <AltSearchBar placeholder="Search for Court Reading Files" />
        </Wrapper>
      </div>
    </>
  );
};

export default CourtReading;
