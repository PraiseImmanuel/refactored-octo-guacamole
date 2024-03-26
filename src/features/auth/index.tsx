"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Auth = () => {
  // const [currentBrief, setCurrentBrief] = useState(0);
  // const router = useRouter();

  // const briefs = [
  //   {
  //     title: "Draft An Email",
  //     desc: "to request a qoute from local plumbers",
  //   },
  //   {
  //     title: "Draft An Email",
  //     desc: "to request a qoute from local plumbers",
  //   },
  //   {
  //     title: "Plan a Trip",
  //     desc: "requesting a deadline extention for project",
  //   },
  //   {
  //     title: "Plan a Trip",
  //     desc: "requesting a deadline extention for project",
  //   },
  //   {
  //     title: "Draft An Email",
  //     desc: "to request a qoute from local plumbers",
  //   },
  //   {
  //     title: "Draft An Email",
  //     desc: "to request a qoute from local plumbers",
  //   },
  //   {
  //     title: "Plan a Trip",
  //     desc: "requesting a deadline extention for project",
  //   },
  //   {
  //     title: "Plan a Trip",
  //     desc: "requesting a deadline extention for project",
  //   },
  // ];

  // useEffect(() => {
  //   const briefInterval = setInterval(() => {
  //     setCurrentBrief((prevIndex) => (prevIndex + 1) % briefs.length);
  //   }, 2000);

  //   return () => {
  //     clearInterval(briefInterval);
  //   };
  // }, [, briefs, currentBrief]);

  return (
    <div className="w-[100vw] h-[100vh] flex font-merri">
      <div className="h-[100%] w-[60%] hidden md:flex flex-col justify-between items-start bg-white">
        <div className="w-[100%] px-8 py-6">
          <div className="flex justify-between w-28 items-center cursor-pointer">
            <p className="text-xl text-left font-[600]">JudiCMS</p>
          </div>
        </div>
        <div className="w-[100%] max-w-[560px] h-[95%] flex flex-col justify-center px-10">
          <div>
            <p className="text-3xl font-merri">
              Effortlessly Work on Legal Cases with Our Advanced Reading Tools
            </p>
          </div>
        </div>
      </div>
      <div className="h-[100%] w-full md:w-[40%] py-2.5 flex flex-col justify-between items-center relative">
        <div className="w-[100%] px-10 py-5 md:hidden">
          <div className="flex justify-between w-28 items-center cursor-pointer">
            <p className="text-xl text-left font-[600]">JudiCMS</p>
          </div>
        </div>
        <div className="w-[100%] max-w-[630px] md:h-[85%] px-3 flex flex-col justify-center items-center gap-4">
          <h1 className="text-lg font-[700] md:text-2xl tb:font-[600] font-merri">
            Get Started
          </h1>
          <div className="w-[100%] max-w-[630px] md:max-w-[475px] flex flex-col tb:flex-row md:flex-row md:px-5 items-center gap-2">
            <Link
              href={"/auth/login"}
              className="text-md text-white w-full tb:w-1/2 py-3 bg-[#111111ff] hover:bg-black rounded-md block text-center"
            >
              Log in
            </Link>
            <Link
              href={"/auth/register"}
              className="text-md text-white w-full tb:w-1/2 py-3 bg-[#111111ff] hover:bg-black rounded-md block text-center"
            >
              Sign up
            </Link>
          </div>
        </div>
        <div className="w-[100%] flex flex-col items-center justify-center pb-8 md:pb-5 gap-2 md:gap-6 md:h-[15%]">
          <div className="flex justify-center w-full items-center cursor-pointer">
            <p className="text-md text-center font-[600]">JudiCMS</p>
          </div>
          <div>
            <p className="text-[11px] flex gap-2 text-[#111111ff">
              <span>Terms of use</span> | <span>Privacy policy</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
