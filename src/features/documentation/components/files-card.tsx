import React from "react";
import { OptionIcon } from "../../../../public/svgs";

interface FilesCardProps {
  a: string;
}

const FilesCard: React.FC<FilesCardProps> = ({}) => {
  return (
    <div className="rounded-md flex-1 bg-[#fff]/80 p-3.5 min-w-[210px]">
      <div className="flex items-center justify-between">
        <p className="text-sm font-[500]">Case 0001</p>
        <OptionIcon />
      </div>

      <div className="w-full h-36 bg-slate-200 rounded-md mt-4"></div>
    </div>
  );
};

export default FilesCard;
