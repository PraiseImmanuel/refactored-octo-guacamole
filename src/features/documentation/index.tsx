"use client";
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Wrapper from "../shared/wrapper";
import AltNavbar from "../layout/alt-nav";
import FolderCard from "./components/folder-card";
import FilesCard from "./components/files-card";
import AddNew from "./components/add-new";
import AltSearchBar from "../shared/alt-search-bar";

const Documentation = () => {
  const [isOpen, setOpen] = useState(false);
  const [addDropDown, setAddDropDown] = useState(false);
  return (
    <>
      <div className="flex w-full font-merri ">
        <AltNavbar isOpen={isOpen} setOpen={setOpen} />
      </div>
      <div className="font-merri pt-16 pb-[150px]">
        <Wrapper>
          <div className="p-3 bg-[#fff]/70 rounded-lg mt-8 flex justify-between items-center">
            <h1 className="font-[600]">Documentation</h1>
            <div className="relative">
              <button
                className="bg-[#333] py-1 px-6 rounded-full"
                onClick={() => setAddDropDown((prev) => !prev)}
              >
                <span className="text-white text-sm">Add +</span>
              </button>
              {addDropDown && <AddNew />}
            </div>
          </div>

          <div className="p-3 mt-4">
            <h2>Folders</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 tb:grid-cols-3 md:grid-cols-4 gap-6 mt-4">
              <FolderCard a="1" />
              <FolderCard a="2" />
              <FolderCard a="3" />
              <FolderCard a="4" />
            </div>
          </div>
          <div className="p-3 mt-4">
            <h2>Files</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 tb:grid-cols-3 md:grid-cols-4 gap-6 mt-4">
              <FilesCard a="" />
              <FilesCard a="" />
              <FilesCard a="" />
              <FilesCard a="" />
              <FilesCard a="" />
            </div>
          </div>

          <AltSearchBar />
        </Wrapper>
      </div>
    </>
  );
};

export default Documentation;
