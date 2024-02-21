import React, { useRef, useState } from "react";
import { FolderIcon, OptionIcon } from "../../../../public/svgs";
import FileOptions from "./file-options";
import { useOnClickOutside } from "@/lib/hooks/use-on-click-outside";

interface FolderCardProps {
  a: string;
}

const FolderCard: React.FC<FolderCardProps> = ({}) => {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);
  useOnClickOutside(ref, () => setDropdown(false));
  return (
    <div
      className="flex flex-1 items-center bg-[#fff]/80 p-3.5
    rounded-md min-w-[210px] justify-between relative"
    >
      <div className="flex items-center">
        <FolderIcon />
        <p className="mx-4 text-sm font-[500]">Case 0011</p>
      </div>
      <button
        ref={ref}
        onClick={() => setDropdown((prevDropdown) => !prevDropdown)}
      >
        <OptionIcon />
      </button>
      {dropdown && (
        <div className="absolute right-0">
          <FileOptions />
        </div>
      )}
    </div>
  );
};

export default FolderCard;
