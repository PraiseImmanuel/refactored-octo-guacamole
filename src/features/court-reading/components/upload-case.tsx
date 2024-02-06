"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const UploadCase = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [title, setTitle] = useState("");
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setUploadedFiles([...uploadedFiles, file]);
    }
  };

  const handleSubmit = () => {
    console.log(uploadedFiles);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="max-w-[600px] mx-auto"
      >
        <label className="block text-sm md:text-lg font-[500] mb-2 text-center text-[#444]">
          Upload Documents for future court reading:
        </label>
        <div className="flex items-center">
          <input
            type="file"
            className="w-full border-2 py-1.5 md:py-2.5 px-4 mt-2 rounded-md mr-4 outline-none border-[#222]/40
              focus:border-[#222]/60 focus:border-2 transition-all duration-200"
            onChange={(event) => handleFileUpload(event)}
          />
        </div>

        <div className="flex mb-8">
          {uploadedFiles.length !== 0 && (
            <div className="mt-8">
              <p className="mb-4">Uploaded Files</p>
              <div className="flex border-2 border-[#ccc] gap-2 p-4 rounded-lg bg-white flex-wrap">
                {uploadedFiles?.map((item) => (
                  <div
                    className="flex border border-[#888] rounded-full p-2 items-center gap-3"
                    key={uploadedFiles.indexOf(item)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                      fill="#333"
                      height={18}
                      width={18}
                    >
                      <path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z" />
                    </svg>
                    <p className="text-sm">
                      {item.name.slice(0, 8)}...
                      {item.name.slice(item.name.lastIndexOf("."))}
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                      fill="#333"
                      height={18}
                      width={18}
                    >
                      <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="">
          <label className="block text-sm md:text-lg font-[500] mb-1 text-center text-[#444]">
            Enter a title or name for court reading
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

        {uploadedFiles.length !== 0 && (
          <button
            className="bg-[#111] bg-opacity-85 text-white px-10 py-1.5 md:py-2.5 rounded-lg mx-auto
              flex hover:opacity-70 transition-all duration-200 font-[500] mt-4"
            onClick={handleSubmit}
          >
            Upload
          </button>
        )}
      </motion.div>
    </>
  );
};

export default UploadCase;
