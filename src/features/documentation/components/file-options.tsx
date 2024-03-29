import React from "react";
import { AddFileIcon, AddFolderIcon } from "../../../../public/svgs";

const FileOptions = () => {
  return (
    <div className="bg-white rounded-sm w-52 absolute top-[28px] right-0 pb-0.5 z-20">
      <button className="px-4 py-2 flex gap-3 items-center border-b border-[#333]/30 w-full">
        <AddFolderIcon />
        <span className="text-sm">Download</span>
      </button>

      <button className="px-4 py-2 flex gap-3 items-center border-b border-[#333]/30 w-full">
        <AddFileIcon />
        <span className="text-sm">Rename</span>
      </button>

      <button className="px-4 py-2 flex gap-3 items-center w-full">
        <AddFileIcon />
        <span className="text-sm">Delete</span>
      </button>
    </div>
  );
};

export default FileOptions;
