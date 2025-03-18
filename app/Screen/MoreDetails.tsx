"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import svg1 from "../Data/SVG/Member8.svg";
import svg2 from "../Data/SVG/Member7.svg";
import svg3 from "../Data/SVG/Member4.svg";
import svg4 from "../Data/SVG/Group100.svg";

import img2 from "../Data/Img/image (2).png";
import img3 from "../Data/Img/image (3).png";
import img4 from "../Data/Img/image (4).png";
import img5 from "../Data/Img/image 28.png";
import img6 from "../Data/Img/image (5).png";
import img7 from "../Data/Img/image (6).png";
import img8 from "../Data/Img/image (7).png";
import img9 from "../Data/Img/image (8).png";

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
        <div className="w-full z-10 flex flex-col md:flex-row justify-center items-center">
          <Image alt="Img" src={svg1} className="h-[400px] md:h-[500px] w-[250px] md:w-[300px]" />
          <Image alt="Img" src={svg2} className="h-[400px] md:h-[500px] w-[250px] md:w-[300px]" />
          <Image alt="Img" src={svg3} className="h-[400px] md:h-[500px] w-[250px] md:w-[300px]" />
        </div>
        <div className="z-10 w-full flex justify-center items-center">
          <Link
            href="/pages/see-pricing"
            className="transition-colors uppercase text-white bg-[#FF693B] border border-[#FF693B] p-1 md:p-2 px-12 md:px-14 mr-0 md:mr-5 mb-3 md:mb-0 rounded hover:text-[#0A2C8C] hover:border-[#0A2C8C] hover:bg-transparent"
          >
            See Pricing
          </Link>
        </div>

        <div className="hidden md:block w-full md:mt-[-170px] z-0">
          <Image alt="Img" src={svg4} className="w-full h-full" />
        </div>
      </div>

      <div className="z-10 w-[95%] mt-6 md:mt-[-300px]">
        <p className="text-[#0C89FF] text-[15px]">UI/UX PORTFOLIO</p>

        <div className="w-full flex flex-col md:flex-row justify-between">
          <p className="text-2xl text-[#001246] md:text-3xl font-semibold">
            Check Our Previous Work
          </p>

          <Link
            href="/portfolio"
            className="transition-colors text-center mt-5 md:mt-0 uppercase text-white bg-[#FF693B] border border-[#FF693B] p-1 md:p-2 px-12 md:px-14 mr-0 md:mr-5 mb-3 md:mb-0 rounded hover:text-[#0A2C8C] hover:border-[#0A2C8C] hover:bg-transparent"
          >
            All Portfolio
          </Link>
        </div>
        <div className="w-full h-[.5px] mt-4 bg-[#0A2C8C1A]" />

        <div className="mt-8 md:mt-12 w-full">
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

          <div className="mt-4 md:mt-9">
            {active && (
              <div>
                {active === "UI/UX" && (
                  <div className="w-full h-[500px]">UI/UX</div>
                )}
                {active === "Logo Design" && (
                  <div className="w-full h-[500px]">Logo Design</div>
                )}
                {active === "Banner Design" && (
                  <div className="w-full h-[500px]">Banner Design</div>
                )}
                {active === "Google Ads" && (
                  <div className="w-full h-[500px]">Google Ads</div>
                )}
                {active === "Website" && (
                  <div className="w-full h-[500px]">
                    <div
                      ref={scrollRef}
                      className="w-full h-auto flex overflow-hidden no-scrollbar outline-none overflow-x-scroll scroll-smooth space-x-.5"
                    >
                      <div className="w-[280px] h-auto">
                        <Image
                          alt="img"
                          src={img2}
                          className="h-[200px] w-[280px]"
                        />
                        <Image
                          alt="img"
                          src={img6}
                          className="h-[200px] w-[280px]"
                        />
                      </div>

                      <div className="w-[280px] h-auto">
                        <Image
                          alt="img"
                          src={img3}
                          className="h-[200px] w-[280px]"
                        />
                        <Image
                          alt="img"
                          src={img7}
                          className="h-[200px] w-[280px]"
                        />
                      </div>

                      <div className="w-[280px] h-auto">
                        <Image
                          alt="img"
                          src={img4}
                          className="h-[200px] w-[280px]"
                        />
                        <Image
                          alt="img"
                          src={img8}
                          className="h-[200px] w-[280px]"
                        />
                      </div>

                      <div className="hidden md:block w-[280px] h-auto">
                        <Image
                          alt="img"
                          src={img5}
                          className="h-[200px] w-[280px]"
                        />
                        <Image
                          alt="img"
                          src={img9}
                          className="h-[200px] w-[280px]"
                        />
                      </div>

                      <div className="hidden md:block w-[280px] h-auto">
                        <Image
                          alt="img"
                          src={img2}
                          className="h-[200px] w-[280px]"
                        />
                        <Image
                          alt="img"
                          src={img6}
                          className="h-[200px] w-[280px]"
                        />
                      </div>

                      <div className="hidden md:block w-[280px] h-auto">
                        <Image
                          alt="img"
                          src={img3}
                          className="h-[200px] w-[280px]"
                        />
                        <Image
                          alt="img"
                          src={img7}
                          className="h-[200px] w-[280px]"
                        />
                      </div>

                      <div className="hidden md:block w-[280px] h-auto">
                        <Image
                          alt="img"
                          src={img4}
                          className="h-[200px] w-[280px]"
                        />
                        <Image
                          alt="img"
                          src={img8}
                          className="h-[200px] w-[280px]"
                        />
                      </div>

                      <div className="hidden md:block w-[280px] h-auto">
                        <Image
                          alt="img"
                          src={img5}
                          className="h-[200px] w-[280px]"
                        />
                        <Image
                          alt="img"
                          src={img9}
                          className="h-[200px] w-[280px]"
                        />
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
              <div className="w-[50px] h-[0.5px] bg-blue-400 ml-5 mt-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreDetails;
