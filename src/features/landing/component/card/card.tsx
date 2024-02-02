import Wrapper from "@/features/shared/wrapper";
import Image from "next/image";
import React from "react";

interface IProps {
  heading: string;
  content: string;
  img: string;
}

const Card: React.FC<IProps> = ({ heading, content, img }) => {
  return (
    <div className="bg-white shadow-md px-8 py-6 rounded-lg max-w-[500px] flex flex-col text-center w-full">
      <h2 className="text-xl font-[600] text-[#222]">{heading}</h2>
      <p className="my-2 max-w-[300px] mx-auto">{content}</p>
      <Image
        src={img}
        className="rounded-full mx-auto
            w-[200px] h-auto my-2"
        alt=""
        width={826}
        height={551}
      />

      <button
        className="bg-[#111]/70 bg-opacity-95 w-[225px] mt-4 self-center 
            py-2.5 text-white rounded-[25px] font-[500] text-sm"
      >
        Try now
      </button>
    </div>
  );
};

export default Card;
