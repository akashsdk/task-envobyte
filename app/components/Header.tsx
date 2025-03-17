"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { MenuOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { Drawer } from "antd";

import LogoSVG from "@/app/Data/SVG/weblogo.svg";

const Header: React.FC = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY + 15) {
        setShow(false);
      } else if (currentScrollY < lastScrollY - 15) {
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const [open, setOpen] = useState(false);

  const showDrawer = () => {

    setTimeout(() => {
      setOpen(true);
    }, 500);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* Top Bar */}
      <motion.div
        animate={{ y: show ? 0 : -60 }}
        transition={
          show
            ? { type: "spring", stiffness: 100, damping: 30 }
            : { type: "spring", stiffness: 30 }
        }
        className="bg-[#0A2C8C] shadow shadow-blue-900 z-50 w-full fixed top-0"
      >
        <div className="container mx-auto flex justify-between items-center text-white px-3 h-[60px] md:h-[80px]">
          <Link href="/">
            <Image alt="Logo" src={LogoSVG} />
          </Link>

          <div className="md:gap-3 hidden md:flex">
            <Link
              href="/"
              className={`${
                pathname === "/" ? "text-red-500" : ""
              } transition-colors font-inter text-[16px] uppercase`}
            >
              Home
            </Link>

            <Link
              href="/pages/services"
              className={`${
                pathname === "/pages/services" ? "text-red-500" : ""
              } transition-colors font-inter text-[16px] uppercase`}
            >
              Service
            </Link>

            <Link
              href="/pages/combo-sale"
              className={`${
                pathname === "/pages/combo-sale" ? "text-red-500" : ""
              } transition-colors font-inter text-[16px] uppercase`}
            >
              Combo Sale
            </Link>

            <Link
              href="/pages/portfolio"
              className={`${
                pathname === "/pages/portfolio" ? "text-red-500" : ""
              } transition-colors font-inter text-[16px] uppercase`}
            >
              Portfolio
            </Link>

            <Link
              href="/pages/about-us"
              className={`${
                pathname === "/pages/about-us" ? "text-red-500" : ""
              } transition-colors font-inter text-[16px] uppercase`}
            >
              About us
            </Link>

            <Link
              href="/pages/blogs"
              className={`${
                pathname === "/pages/blogs" ? "text-red-500" : ""
              } transition-colors font-inter text-[16px] uppercase`}
            >
              Blogs
            </Link>
          </div>

          <Link
            href="/pages/see-pricing"
            className={`${
              pathname === "/pages/see-pricing"
                ? "text-white border bg-transparent"
                : ""
            } transition-colors bg-[#FF693B] p-2 px-6 rounded hidden md:block`}
          >
            See Pricing
          </Link>

          <button className="md:hidden cursor-pointer" onClick={showDrawer}>
            <MenuOutlined className="text-2xl" />
          </button>

          
        </div>
      </motion.div>

      {/* Mobile Screen */}
      <Drawer
          title=""
          placement="left"
          closable={false}
          onClose={onClose}
          open={open}
          width={300}
        >
          <div className="w-full">
            <div className="flex justify-around items-center pb-2 border-b">
              <Link href="/" className="">
                <p className="text-3xl font-semibold font-serif">Web Name</p>
              </Link>

              <button
                onClick={onClose}
                className="text-xl opacity-80 hover:opacity-100"
              >
                <CloseCircleOutlined />
              </button>
            </div>

            <div>
              Next content
            </div>
          </div>
        </Drawer>
    </div>
  );
};

export default Header;
