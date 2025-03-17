"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import img1 from "../Data/SVG/IndexImg.svg";

import Icon1 from "../Data/SVG/IndexIcon1.svg";
import Icon2 from "../Data/SVG/IndexIcon2.svg";
import Icon3 from "../Data/SVG/IndexIcon3.svg";
import Icon4 from "../Data/SVG/IndexIcon4.svg";

const Index: React.FC = () => {
  return (
    <div className="w-full bg-[#0a2c8c] flex flex-col justify-center items-center  text-white">
      <div className="w-[70%] h-[600px] mt-[30px] clipped-index flex flex-col items-center">
        <p className="text-[40px] text-white font-semibold">DIGITAL SERVICES</p>
        <p className="">BUILDING YOUR EMPIRE DIGITALLY</p>

        <div className="mt-5 md:mt-10">
          <Link
            href="/pages/see-pricing"
            className="transition-colors uppercase bg-[#FF693B] border border-[#FF693B] p-2 px-14 mr-5 rounded hover:text-white hover:border-white hover:bg-transparent"
          >
            See Pricing
          </Link>

          <Link
            href="/pages/see-pricing"
            className="transition-colors uppercase hover:bg-[#FF693B] p-2 rounded text-white border hover:border-[#FF693B] bg-transparent"
          >
            Book an appointment
          </Link>
        </div>

        <div className="w-[70%] mt-5 md:mt-10 flex">
          <div className="w-[24%] h-[40px] flex justify-start items-start border-r border-[#58b3ed]">
            <Image alt="Icon" src={Icon1} className="h-[40px] w-[40px]" />
            <div className="ml-3 ">
              <p className="">2K+</p>
              <p className="text-[12px]">Website build</p>
            </div>
          </div>

          <div className="w-[24%] h-[40px] ml-5 flex justify-start items-start border-r border-[#58b3ed]">
            <Image alt="Icon" src={Icon2} className="h-[40px] w-[40px]" />
            <div className="ml-3 ">
              <p className="">97%</p>
              <p className="text-[12px]">Client satisfaction</p>
            </div>
          </div>

          <div className="w-[24%] h-[40px] ml-5 flex justify-start items-start border-r border-[#58b3ed]">
            <Image alt="Icon" src={Icon3} className="h-[40px] w-[40px]" />
            <div className="ml-3 ">
              <p className="">25+</p>
              <p className="text-[12px]">Team members</p>
            </div>
          </div>

          <div className="w-[24%] h-[40px] ml-5 flex justify-start items-start">
            <Image alt="Icon" src={Icon4} className="h-[40px] w-[40px]" />
            <div className="ml-3 ">
              <p className="">500+</p>
              <p className="text-[12px]">Amazing clients</p>
            </div>
          </div>
        </div>

        <div className="w-[60%] mt-8 md:mt-16">
          <Image
            src={img1}
            alt="Envobyte Team"
            className="rounded w-full h-full z-20"
          />
        </div>
      </div>

      <div className="w-[95%] mt-[150px]">
        <p className="text-[#FF693B] text-[15px]">DIGITAL SERVICES</p>
        <p className="text-2xl md:text-3xl font-semibold">Check Our Available Services</p>
        <div className="w-full h-[.5px] mt-4 bg-white opacity-35"/>

        <div className="mt-8 w-full flex">
            <button className="text-[#0C89FF] uppercase cursor-pointer mr-5">
                Website
            </button>

            <button className=" uppercase cursor-pointer mr-5 hover:text-[#0C89FF]">
                ui/ux
            </button>

            <button className=" uppercase cursor-pointer mr-5 hover:text-[#0C89FF]">
                logo design
            </button>

            <button className=" uppercase cursor-pointer mr-5 hover:text-[#0C89FF]">
                banner design
            </button>

            <button className=" uppercase cursor-pointer mr-5 hover:text-[#0C89FF]">
                google ads
            </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
