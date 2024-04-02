import React, { useRef, useState } from "react";
import { AddFolderIcon } from "../../../../public/svgs";

const AddNew = () => {
  const addNewRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setSelectedFile(file);
      // Do whatever you want with the selected file, e.g., upload to server
    }
  };

  const handleButtonClick = () => {
    addNewRef?.current?.click();
  };

  return (
    <div className="bg-white rounded-sm w-52 absolute top-[49px] -right-[12px]">
      <input
        type="file"
        accept=".pdf,.doc,.docx,.txt"
        style={{ display: "none" }}
        onChange={handleFileChange}
        ref={addNewRef}
      />
      <button
        className="px-4 py-2 flex gap-3 items-center w-full"
        onClick={handleButtonClick}
      >
        <AddFolderIcon />
        <span className="text-sm">New File</span>
      </button>
    </div>
  );
};

export default AddNew;
