import Link from "next/link";
import React from "react";
import { trimString } from "../../../lib/utils/trim-string";
import { DeleteIcon } from "../../../public/svgs";

const histories = [
  {
    title: "the galleries include items desig",
    link: "",
  },
  {
    title: "that are designed to coordinate desi",
    link: "",
  },
  {
    title: "with the overall look of your design",
    link: "",
  },
  {
    title: "document you can use these ",
    link: "",
  },
  {
    title: "galleries to designed toinsert tables",
    link: "",
  },
  {
    title: "headers designed to footers lists",
    link: "",
  },
  {
    title: "cover pages designed to and other docum",
    link: "",
  },
  {
    title: "building blocks when you create desig",
    link: "",
  },
  {
    title: "pictures charts or designed to diagrams",
    link: "",
  },
];

const Sidebar = () => {
  return (
    <div
      className="w-full max-w-[300px] bg-white
      h-screen fixed top-0 hidden md:block pt-6 z-30"
    >
      <button
        className="flex items-center gap-2.5 w-full py-5 border-b
      border-b-[#444]/20 pl-[calc(5%+10px)]"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.7929 2.79289C18.0118 1.57394 19.9882 1.57394 21.2071 2.79289C22.4261 4.01184 22.4261 5.98815 21.2071 7.20711L12.7071 15.7071C12.5196 15.8946 12.2652 16 12 16H9C8.44772 16 8 15.5523 8 15V12C8 11.7348 8.10536 11.4804 8.29289 11.2929L16.7929 2.79289ZM19.7929 4.20711C19.355 3.7692 18.645 3.7692 18.2071 4.2071L10 12.4142V14H11.5858L19.7929 5.79289C20.2308 5.35499 20.2308 4.64501 19.7929 4.20711ZM6 5C5.44772 5 5 5.44771 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V14C19 13.4477 19.4477 13 20 13C20.5523 13 21 13.4477 21 14V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6C3 4.34314 4.34315 3 6 3H10C10.5523 3 11 3.44771 11 4C11 4.55228 10.5523 5 10 5H6Z"
            fill="currentColor"
          ></path>
        </svg>
        <span className="font-[500] text-[#333]">Start New Search</span>
      </button>

      <div className="">
        <p className="font-[600] text-lg py-4 text-[#555] pl-[calc(5%+10px)]">
          Histories
        </p>
        <div className="flex flex-col gap-2 mt-4">
          {histories.map((item, index) => (
            <div className="relative" key={index}>
              <div
                className="hover:border-x-[transparent] border border-transparent py-2
              transition-all hover:border-[#6e6e6e] pl-[calc(5%+10px)] group"
              >
                <Link
                  className="flex capitalize text-sm font-[500]"
                  href={item.link}
                >
                  {trimString(item.title, 28)}
                </Link>

                <button
                  type="button"
                  className="absolute right-5 top-1/2 -translate-y-1/2 hidden group-hover:block transition-all"
                >
                  <DeleteIcon />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
