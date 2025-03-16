"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation"; // Import usePathname

import LogoSVG from "@/app/Data/SVG/weblogo.svg";

const Header: React.FC = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname(); // Get the current path

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
        className="bg-blue-900 shadow shadow-blue-800 z-50 w-full fixed top-0"
      >
        <div className="container mx-auto flex justify-between items-center text-white px-3 h-[60px] md:h-[80px]">
          <Link href="/">
            <Image alt="Logo" src={LogoSVG} />
          </Link>

          <div className="gap-3 flex">
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
              pathname === "/pages/see-pricing" ? "text-white border bg-transparent" : ""
            } transition-colors bg-[#FF693B] p-2 px-6 rounded`}
          >
            See Pricing
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
