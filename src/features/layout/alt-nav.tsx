"use client";
import Wrapper from "@/features/shared/wrapper";
import { Sling as Hamburger } from "hamburger-react";
import React, { useState } from "react";
import { DropDowns } from "./nav";

interface IProps {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AltNavbar: React.FC<IProps> = ({ isOpen, setOpen }) => {
  const [isDropedDown, setisDropedDown] = useState(false);

  return (
    <nav
      className={`border-b border-b-black/10 md:border-0 z-30
        fixed w-full transition-all duration-300 md:pt-8 ${
          !isOpen
            ? "bg-[#f1f1f1] md:bg-transparent md:"
            : "bg-white bg-opacity-95 md:bg-transparent backdrop-blur"
        }`}
    >
      <Wrapper>
        <div className="py-2.5 flex justify-between items-center relative">
          <div className=" md:hidden">
            <Hamburger size={24} toggled={isOpen} toggle={setOpen} />
          </div>
          <div
            className="flex justify-between w-28 items-center"
            onClick={() => setisDropedDown(!isDropedDown)}
          >
            <p className="text-xl font-[600]">JudiCMS</p>

            <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
              <path
                d="M11.3346 7.83203L8.00131 11.1654L4.66797 7.83203"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>

          <button className="pr-1.5 md:hidden">
            <svg
              width="24"
              height="24"
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
          </button>

          {isDropedDown && <DropDowns />}
        </div>
      </Wrapper>
    </nav>
  );
};

export default AltNavbar;
