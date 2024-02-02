import Wrapper from "@/features/shared/wrapper";
import Image from "next/image";
import React from "react";

interface IProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Hero: React.FC<IProps> = ({ setModalOpen }) => {
  return (
    <>
      <Wrapper>
        <div className="md:flex md:min-h-[100vh] md:justify-center md:items-center">
          <div className="md:grid grid-cols-2 gap-x-8">
            <div
              className="pt-[120px] md:pt-[120px] pb-[70px] text-center 
            md:text-left md:flex md:flex-col"
            >
              <h1
                className="text-4xl leading-[2.6rem] font-[600] text-[#111] text-opacity-95 
                bg-opacity-95 max-w-[400px] mx-auto
                md:mx-0 md:text-5xl md:max-w-[500px] md:leading-[3.1rem]"
              >
                JudiCMS, Your Legal Companion for Enhanced Efficiency and
                Precision
              </h1>

              <p
                className="text-[#555] mt-6 max-w-[300px] mx-auto 
            md:mx-0 md:max-w-[400px]"
              >
                Experience seamless integration of document management, legal
                research, and trial assistance within one intuitive platform.
              </p>

              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="bg-[#111] bg-opacity-95 w-full max-w-[280px] my-6 py-3 
              text-white rounded-[25px] font-[500] hidden md:block"
              >
                Try JudiCMS now!
              </button>
            </div>

            <div className="flex flex-col md:flex-row items-center -mt-10 mb-10 md:mb-0">
              <Image
                src="/hero-image.jpg"
                className="rounded-ss-[60px] md:rounded-ss-[80px] rounded-ee-[30px] lg:mt-12
                md:rounded-ee-[50px] w-full object-cover max-w-[480px] lg:min-h-[400px]"
                alt=""
                width={826}
                height={551}
              />
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="bg-[#111] bg-opacity-95 w-full max-w-[280px] mt-10 
              py-3 text-white rounded-[25px] font-[500] md:hidden"
              >
                Try JudiCMS now!
              </button>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Hero;
