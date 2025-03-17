"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import img1 from "../Data/SVG/IndexImg.svg";
import img2 from "../Data/SVG/IndexImg2.svg";
import img3 from "../Data/SVG/IndexImg3.svg";
import img4 from "../Data/SVG/IndexImg4.svg";

import Icon1 from "../Data/SVG/IndexIcon1.svg";
import Icon2 from "../Data/SVG/IndexIcon2.svg";
import Icon3 from "../Data/SVG/IndexIcon3.svg";
import Icon4 from "../Data/SVG/IndexIcon4.svg";

const Index: React.FC = () => {
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
    <div className="w-full bg-[#0a2c8c] flex flex-col justify-center items-center  text-white">
      <div className="w-[95%] md:w-[70%] md:h-[600px] mt-[30px] clipped-index flex flex-col items-center">
        <p className="text-[40px] text-white font-semibold">DIGITAL SERVICES</p>
        <p className="">BUILDING YOUR EMPIRE DIGITALLY</p>

        <div className="mt-5 md:mt-10 flex flex-col md:flex-row justify-center items-center md:justify-start md:items-start">
          <Link
            href="/pages/see-pricing"
            className="transition-colors uppercase bg-[#FF693B] border border-[#FF693B] p-1 md:p-2 px-12 md:px-14 mr-0 md:mr-5 mb-3 md:mb-0 rounded hover:text-white hover:border-white hover:bg-transparent"
          >
            See Pricing
          </Link>

          <Link
            href="/pages/see-pricing"
            className="transition-colors uppercase hover:bg-[#FF693B] p-1 md:p-2 rounded text-white border hover:border-[#FF693B] bg-transparent"
          >
            Book an appointment
          </Link>
        </div>

        <div className="w-full md:w-[70%] mt-5 md:mt-10 flex flex-col md:flex-row justify-center items-center">
          <div className="w-[80%] md:w-[24%] h-[40px] flex justify-start items-start md:border-r border-[#58b3ed]">
            <Image alt="Icon" src={Icon1} className="h-[40px] w-[40px]" />
            <div className="ml-3 ">
              <p className="">2K+</p>
              <p className="text-[12px]">Website build</p>
            </div>
          </div>

          <div className="w-[80%] md:w-[24%] h-[40px] mt-2 md:mt-0 md:ml-5 flex justify-start items-start md:border-r border-[#58b3ed]">
            <Image alt="Icon" src={Icon2} className="h-[40px] w-[40px]" />
            <div className="ml-3 ">
              <p className="">97%</p>
              <p className="text-[12px]">Client satisfaction</p>
            </div>
          </div>

          <div className="w-[80%] md:w-[24%] h-[40px] mt-2 md:mt-0 md:ml-5 flex justify-start items-start md:border-r border-[#58b3ed]">
            <Image alt="Icon" src={Icon3} className="h-[40px] w-[40px]" />
            <div className="ml-3 ">
              <p className="">25+</p>
              <p className="text-[12px]">Team members</p>
            </div>
          </div>

          <div className="w-[80%] md:w-[24%] h-[40px] mt-2 md:mt-0 md:ml-5 flex justify-start items-start">
            <Image alt="Icon" src={Icon4} className="h-[40px] w-[40px]" />
            <div className="ml-3 ">
              <p className="">500+</p>
              <p className="text-[12px]">Amazing clients</p>
            </div>
          </div>
        </div>

        <div className="w-[80%] md:w-[60%] mt-8 md:mt-16">
          <Image
            src={img1}
            alt="Envobyte Team"
            className="rounded w-full h-full z-20"
          />
        </div>
      </div>

      <div className="w-[95%] mt-[50px] md:mt-[150px]">
        <p className="text-[#FF693B] text-[15px]">DIGITAL SERVICES</p>

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
                        <ServiceCard
                          imgSrc={img2}
                          text1="WordPress Website"
                          text2="Design & Development"
                          portfolioLink=""
                          orderLink=""
                        />
                      </div>

                      <div className="w-[410px] h-auto">
                        <ServiceCard
                          imgSrc={img3}
                          text1="Content Writing"
                          text2="For entire project"
                          portfolioLink=""
                          orderLink=""
                        />
                      </div>

                      <div className="w-[410px] h-auto">
                        <ServiceCard
                          imgSrc={img4}
                          text1="Monthly SEO"
                          text2="Rank #1 on google"
                          portfolioLink=""
                          orderLink=""
                        />
                      </div>

                      <div className="w-[410px] h-auto">
                        <ServiceCard
                          imgSrc={img2}
                          text1="WordPress Website"
                          text2="Design & Development"
                          portfolioLink=""
                          orderLink=""
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
                <div className="w-[50px] h-[0.5px] bg-blue-400 ml-5 mt-1"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

interface ServiceCardProps {
  imgSrc: string;
  text1: string;
  text2: string;
  portfolioLink: string;
  orderLink: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  imgSrc,
  text1,
  text2,
  portfolioLink,
  orderLink,
}) => {
  return (
    <div className="bg-[#3158C733] p-5 rounded-lg text-center text-white w-[400px] max-w-md mx-auto shadow-lg">
      <Image src={imgSrc} alt={text1} className="w-[200px] h-24 mx-auto mb-4" />
      <h2 className="text-xl font-semibold">{text1}</h2>
      <p className="text-gray-400">{text2}</p>
      <div className="mt-4 flex justify-center gap-4">
        <a
          href={portfolioLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0C89FF] text-white px-4 py-2 rounded-3xl font-medium hover:bg-blue-600 transition"
        >
          Portfolio
        </a>
        <Link
          href={orderLink}
          className="border border-[#0C89FF] text-[#0C89FF] px-4 py-2 rounded-3xl font-medium hover:bg-[#0C89FF] hover:text-white transition"
        >
          Order
        </Link>
      </div>
    </div>
  );
};
