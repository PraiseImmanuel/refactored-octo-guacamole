import React, { useRef, useState } from "react";
import { FolderIcon, OptionIcon } from "../../../../public/svgs";
import FileOptions from "./file-options";
import { useOnClickOutside } from "@/lib/hooks/use-on-click-outside";

interface FolderCardProps {
  a: string;
}

const FolderCard: React.FC<FolderCardProps> = ({}) => {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () =>
    setDropdown((prevDropdown) => {
      if (prevDropdown) {
        console.log("here");
        return false;
      } else {
        console.log("her");
        return true;
      }
    })
  );

  const handleButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    if (!dropdown) {
      setDropdown(true);
    }
  };

  console.log(dropdown);

  return (
    <div
      className="flex flex-1 items-center bg-[#fff]/80 p-3.5
    rounded-md min-w-[210px] justify-between relative"
    >
      <div className="flex items-center">
        <FolderIcon />
        <p className="mx-4 text-sm font-[500]">Case 0011</p>
      </div>
      <button onClick={(e) => handleButtonClick(e)}>
        <OptionIcon />
      </button>
      {dropdown && (
        <div ref={ref} className="absolute right-0">
          <FileOptions />
        </div>
      )}
    </div>
  );
};

export default FolderCard;
