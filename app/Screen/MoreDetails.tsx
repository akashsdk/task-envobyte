"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import svg1 from "../Data/SVG/Member8.svg";
import svg2 from "../Data/SVG/Member7.svg";
import svg3 from "../Data/SVG/Member4.svg";
import svg4 from "../Data/SVG/Group100.svg";
import Link from "next/link";

const MoreDetails: React.FC = () => {
  const [active, setActive] = useState<string | null>("Website");
    const services = [
      "Website",
      "UI/UX",
      "Logo Design",
      "Banner Design",
      "Google Ads",
    ];
  
    const scrollRef = useRef<HTMLDivElement>(null);
  
    const scrollLeft = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: -300,
          behavior: "smooth",
        });
      }
    };
  
    const scrollRight = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: 300, 
          behavior: "smooth",
        });
      }
    };
  return (
    <div className="w-full h-auto bg-white text-black mt-10 flex flex-col justify-center items-center">
      <p className="text-[16px] mt-20 text-[#0C89FF]">MORE DETAILS</p>
      <p className="text-2xl text-[#0A2C8C] font-semibold">Get Your Answers</p>

      <div className="w-full h-auto flex flex-col justify-end items-end">
        <div className="w-full z-10 flex justify-center">
          <Image alt="Img" src={svg1} className="h-[500px] w-[300px]" />
          <Image alt="Img" src={svg2} className="h-[500px] w-[300px]" />
          <Image alt="Img" src={svg3} className="h-[500px] w-[300px]" />
        </div>
        <div className="z-10 w-full flex justify-center items-center">
          <Link
            href="/pages/see-pricing"
            className="transition-colors uppercase text-white bg-[#FF693B] border border-[#FF693B] p-1 md:p-2 px-12 md:px-14 mr-0 md:mr-5 mb-3 md:mb-0 rounded hover:text-[#0A2C8C] hover:border-[#0A2C8C] hover:bg-transparent"
          >
            See Pricing
          </Link>
        </div>

        <div className="w-full mt-[-100px] z-0">
          <Image alt="Img" src={svg4} className="w-full h-full" />
        </div>
      </div>

      <div className="w-[95%] mt-[50px] md:mt-[150px]">
        <p className="text-[#0C89FF] text-[15px]">UI/UX PORTFOLIO</p>

        <div className="w-full flex flex-col md:flex-row justify-between">
          <p className="text-2xl md:text-3xl font-semibold">
            Check Our Available Services
          </p>

          <Link
            href="/"
            className="transition-colors text-center mt-3 md:mt-0 uppercase bg-[#FF693B] border border-[#FF693B] p-1 px-8 rounded hover:text-white hover:border-white hover:bg-transparent"
          >
            All Services
          </Link>
        </div>
        <div className="w-full h-[.5px] mt-4 bg-white opacity-35" />

        <div className="mt-8 w-full">
          <div className="flex">
            {services.map((service) => (
              <button
                key={service}
                onClick={() => setActive(service)}
                className={`uppercase text-[13px] md:text-base cursor-pointer mr-3 md:mr-5 transition-colors duration-200 ${
                  active === service ? "text-[#0C89FF]" : "hover:text-[#0C89FF]"
                }`}
              >
                {service}
              </button>
            ))}
          </div>

          <div className="mt-4">
            {active && (
              <div>
                {active === "UI/UX" && (
                  <div className="w-full h-[350px]">UI/UX</div>
                )}
                {active === "Logo Design" && (
                  <div className="w-full h-[350px]">Logo Design</div>
                )}
                {active === "Banner Design" && (
                  <div className="w-full h-[350px]">Banner Design</div>
                )}
                {active === "Google Ads" && (
                  <div className="w-full h-[350px]">Google Ads</div>
                )}
                {active === "Website" && (
                  <div className="w-full h-[350px]">
                    <div
                      ref={scrollRef}
                      className="w-full h-auto flex overflow-hidden no-scrollbar outline-none overflow-x-scroll scroll-smooth space-x-5"
                    >
                      <div className="w-[410px]">
                        
                      </div>

                      <div className="w-[410px] h-auto">
                        
                      </div>

                      <div className="w-[410px] h-auto">
                        
                      </div>

                      <div className="w-[410px] h-auto">
                       
                      </div>
                    </div>

                    <div className="w-full mt-10 flex justify-center">
                      <button
                        onClick={scrollLeft}
                        className="p-1 px-2 mr-3 border rounded hover:bg-[#FF693B] hover:border-[#FF693B] cursor-pointer"
                      >
                        <LeftOutlined />
                      </button>

                      <button
                        onClick={scrollRight}
                        className="p-1 px-2 border rounded hover:bg-[#FF693B] hover:border-[#FF693B] cursor-pointer"
                      >
                        <RightOutlined />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="w-full flex justify-end">
            <div className="flex justify-center items-center">
                <p className="text-[15px]">Creative Solution</p>
                <div className="w-[50px] h-[0.5px] bg-blue-400 ml-5 mt-1"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreDetails;
