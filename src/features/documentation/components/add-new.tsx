import React from "react";
import { AddFileIcon, AddFolderIcon } from "../../../../public/svgs";

const AddNew = () => {
  return (
    <div className="bg-white rounded-sm w-52 absolute top-[49px] -right-[12px] pb-2">
      <button className="px-4 py-2 flex gap-3 items-center border-b border-[#333]/30 w-full">
        <AddFolderIcon />
        <span className="text-sm">New Folder</span>
      </button>

      <button className="px-4 py-2 flex gap-3 items-center border-b border-[#333]/30 w-full">
        <AddFileIcon />
        <span className="text-sm">New File</span>
      </button>
    </div>
  );
};

export default AddNew;
