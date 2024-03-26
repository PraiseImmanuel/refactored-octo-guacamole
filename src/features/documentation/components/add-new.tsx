import React from "react";
import { AddFolderIcon } from "../../../../public/svgs";

const AddNew = () => {
  return (
    <div className="bg-white rounded-sm w-52 absolute top-[49px] -right-[12px]">
      <button className="px-4 py-2 flex gap-3 items-center w-full">
        <AddFolderIcon />
        <span className="text-sm">New File</span>
      </button>
    </div>
  );
};

export default AddNew;
