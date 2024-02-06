"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const UploadDocument = () => {
  const [uploadedFile, setUploadedFile] = useState<File>();
  const [title, setTitle] = useState("");
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleSubmit = () => {
    console.log(uploadedFile);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="max-w-[600px] mx-auto"
      >
        <label className="block text-lg font-[500] mb-2 text-center text-[#444]">
          Upload Documents
        </label>
        <div className="flex items-center">
          <input
            type="file"
            className="w-full border-2 py-1.5 md:py-2.5 px-4 mt-2 rounded-md mr-4 outline-none border-[#222]/40
              focus:border-[#222]/60 focus:border-2 transition-all duration-200"
            onChange={(event) => handleFileUpload(event)}
          />
        </div>

        <div className="mt-4">
          <label className="block text-lg font-[500] mb-1 text-center text-[#444]">
            Enter a title for your document
          </label>
          <input
            type="text"
            className="w-full border-2 py-2.5 md:py-3.5 px-4 mt-2 rounded-md mr-4 outline-none focus:border-[#222]/50 
            focus:border-2 transition-all duration-200 bg-transparent placeholder:text-[#333]/80"
            placeholder="Enter a case name or title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <button
          className="border-[#111]/80 border-2 text-[#333] px-10 py-1.5 md:py-2.5 rounded-lg mx-auto
              flex hover:opacity-70 transition-all duration-200 font-[500] mt-6"
          onClick={handleSubmit}
        >
          Upload
        </button>
      </motion.div>
    </>
  );
};

export default UploadDocument;
