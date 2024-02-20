import React from "react";
import { Listen } from "../../../public/svgs";

const ChatCard = () => {
  return (
    <div className="bg-white h-fit rounded-xl p-6 max-w-[750px]">
      <div className="flex items-center gap-3 border-b pb-2 border-b-[#333]/20">
        <div className="w-8 h-8 min-h-8 min-w-8 bg-[#777] rounded-[50%]"></div>
        <div className="">
          <p className="text-[#333]/70 text-sm">You searched</p>
          <p className="text-[#333] mt-1.5 text-base md:text-lg">
            Access Legal Research Suggestion for Informed Decision-Making
          </p>
        </div>
      </div>

      <div className="max-w-[700px] flex flex-col">
        <p className="text-[#333]/70 text-lg font-[700] mt-4">JudiCMS</p>
        <p className="font-[300] mt-2">
          A personal name can be made up of multiple components, which identify
          an individual, their lineage, family or clan. The part that refers to
          the individual is known as a given name. It can be made up of multiple
          names; the first of which is known as a first name or forename.
        </p>
        <button className="flex gap-2 items-center bg-[#666] self-end px-3 py-1 rounded-md">
          <span className="font-[400] text-white">Listen</span>
          <Listen />
        </button>
      </div>
    </div>
  );
};

export default ChatCard;
