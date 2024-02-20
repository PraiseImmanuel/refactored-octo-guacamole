"use client";
import React, { useRef, useState } from "react";
import { OptionIcon } from "../../../../public/svgs";
import AddNew from "./add-new";
import { useOnClickOutside } from "@/lib/hooks/use-on-click-outside";

interface FilesCardProps {
  a: string;
}

const FilesCard: React.FC<FilesCardProps> = ({}) => {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setDropdown(false));
  return (
    <div className="rounded-md flex-1 bg-[#fff]/80 p-3.5 min-w-[210px] relative">
      <div className="flex items-center justify-between">
        <p className="text-sm font-[500]">Case 0001</p>
        <button onClick={() => setDropdown((prevDropdown) => !prevDropdown)}>
          <OptionIcon />
        </button>
      </div>

      <div className="w-full h-36 bg-slate-200 rounded-md mt-4"></div>
      {dropdown && (
        <div ref={ref}>
          <AddNew />
        </div>
      )}
    </div>
  );
};

export default FilesCard;
