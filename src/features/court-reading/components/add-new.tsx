import React from "react";
import {
  AddFileIcon,
  AddFolderIcon,
  ListenBlack,
} from "../../../../public/svgs";

const AddNew = () => {
  return (
    <div className="bg-[#fafafa] rounded-sm w-52 absolute top-[52px] right-3.5 pb-2">
      <button className="px-4 py-2 flex gap-3 items-center border-b border-[#333]/30 w-full">
        <AddFolderIcon />
        <span className="text-sm">Download</span>
      </button>

      <button className="px-4 py-2 flex gap-3 items-center border-b border-[#333]/30 w-full">
        <AddFileIcon />
        <span className="text-sm">Delete</span>
      </button>
      <button className="px-4 py-2 flex gap-3 items-center border-b border-[#333]/30 w-full">
        <ListenBlack />
        <span className="text-sm">Listen</span>
      </button>
    </div>
  );
};

export default AddNew;
