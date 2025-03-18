"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import LogoSVG from "@/app/Data/SVG/weblogo.svg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#19018321] border-t border-[#E5E7EB1A] text-white py-5 px-6 md:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Left Section - Company Info */}
        <div>
          <Image src={LogoSVG} alt="Company Logo" width={120} height={50} />
          <p className="mt-3 text-gray-300 text-sm">
            We are an IT Company. We help businesses bring ideas to life easily
            and affordably.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold">Company</h3>
          <ul className="mt-3 space-y-2 text-gray-300">
            <li>
              <Link href="/about-us" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="hover:text-white transition"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/refund-policy"
                className="hover:text-white transition"
              >
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Learn More Links */}
        <div>
          <h3 className="text-lg font-semibold">Learn More</h3>
          <ul className="mt-3 space-y-2 text-gray-300">
            <li>
              <Link href="/combo-offer" className="hover:text-white transition">
                Combo Offer
              </Link>
            </li>
            <li>
              <Link
                href="/service-industries"
                className="hover:text-white transition"
              >
                Service Industries
              </Link>
            </li>
            <li>
              <Link
                href="/envobyte-apps"
                className="hover:text-white transition"
              >
                Envobyte Apps
              </Link>
            </li>
          </ul>
        </div>

        {/* Support & Contact */}
        <div>
          <h3 className="text-lg font-semibold">Support</h3>
          <ul className="mt-3 space-y-2 text-gray-300">
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-white transition">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white transition">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Get in Touch</h3>
          <div className="mt-3 space-y-2 text-gray-300">
            <p className="flex justify-start items-center gap-2">
              <FaEnvelope className="text-[#FF693B]"/> support@envobyte.com
            </p>
            <p className="flex items-center gap-2">
              <FaWhatsapp className="text-[#FF693B]"/> +1 (667) 777 2477
            </p>
          </div>
          <div className="mt-6 flex justify-center space-x-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              className="text-gray-400 hover:text-white transition"
            >
              <FaFacebookF size={18} />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="text-gray-400 hover:text-white transition"
            >
              <FaLinkedinIn size={18} />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="text-gray-400 hover:text-white transition"
            >
              <FaInstagram size={18} />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              className="text-gray-400 hover:text-white transition"
            >
              <FaTwitter size={18} />
            </Link>
            <Link
              href="https://pinterest.com"
              target="_blank"
              className="text-gray-400 hover:text-white transition"
            >
              <FaPinterestP size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-3 text-center border-t border-[#E5E7EB1A]">
        <p className="mt-4 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} - ENVOBYTE, All rights are reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
