"use client";

import React, { useState } from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { notification } from "antd";
import Image from "next/image";
import Link from "next/link";

import Icon1 from "../Data/Icon/VectorIcon.svg";
import Icon2 from "../Data/Icon/SmsIcon.svg";
import Icon3 from "../Data/Icon/WhatsappIcon.svg";
import Icon4 from "../Data/Icon/LinkIcon.svg";

type NotificationType = "success" | "info" | "warning" | "error";

const Contact: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const openNotification = (type: NotificationType, message: string) => {
    api[type]({
      message,
      description: "Please check your inputs and try again.",
    });
  };

  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = () => {
    const { name, email, phone, company, message } = formData;

    if (!name || !email || !phone || !company || !message) {
      openNotification("warning", "All fields are required!");
      return;
    }

    if (!validateEmail(email)) {
      openNotification("error", "Invalid email address!");
      return;
    }

    openNotification("success", "Message sent successfully!");
    console.log("Form Data:", formData);

    // clear
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
  };

  return (
    <div className="w-full p-5 md:p-[100px] flex flex-col md:flex-row justify-between items-center bg-[#19018321] text-white">
      {contextHolder}
      <div className="w-full md:w-[48%] p-[20px] rounded bg-[#0a2c8c] border border-[#9fafe814]">
        <div className="w-full flex justify-between">
          <div className="w-[45%]">
            <p className="mb-2">Name</p>
            <input
              type="text"
              className="w-full p-2 px-3 py-3 rounded border-[2px] border-[#9fafe814] outline-none transition-all duration-300 hover:border-[#656ed8] focus:border-[#656ed8]"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          <div className="w-[45%]">
            <p className="mb-2">Email</p>
            <input
              type="email"
              className="w-full p-2 px-3 py-3 rounded border-[2px] border-[#9fafe814] outline-none transition-all duration-300 hover:border-[#656ed8] focus:border-[#656ed8]"
              placeholder="support@envobyte.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
        </div>

        <div className="w-full mt-4 flex justify-between">
          <div className="w-[45%]">
            <p className="mb-2">Phone</p>
            <input
              type="number"
              className="w-full p-2 px-3 py-3 rounded border-[2px] border-[#9fafe814] outline-none transition-all duration-300 hover:border-[#656ed8] focus:border-[#656ed8]"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>

          <div className="w-[45%]">
            <p className="mb-2">Company</p>
            <input
              type="text"
              className="w-full p-2 px-3 py-3 rounded border-[2px] border-[#9fafe814] outline-none transition-all duration-300 hover:border-[#656ed8] focus:border-[#656ed8]"
              placeholder="Envobyte"
              value={formData.company}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
            />
          </div>
        </div>

        <div className="w-full mt-4">
          <p className="mb-2">Message</p>
          <textarea
            className="w-full p-2 px-3 py-3 rounded border-[2px] border-[#9fafe814] outline-none transition-all duration-300 hover:border-[#656ed8] focus:border-[#656ed8]"
            placeholder="Type your message here..."
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
        </div>

        <button
          onClick={handleSubmit}
          className="p-2 pl-3 pr-3 mt-4 cursor-pointer bg-[#3765e333] hover:bg-[#19018321] rounded-lg border-[2px] border-[#9fafe814] flex justify-center items-center"
        >
          <p>Send message</p>
          <ArrowRightOutlined className="text-[10px] ml-1 mt-1" />
        </button>
      </div>

      <div className="w-full md:w-[48%] mt-5 md:mt-0 flex flex-col justify-baseline items-start">
        <p className="text-2xl md:text-5xl font-semibold">Let us know what you think!</p>

        <p className="mt-2 md:mt-5 opacity-70">
          Got something on your mind? Share it with us! Drop a message, and
          we&apos;ll respond quickly to assist you
        </p>

        <Link href="/" className="flex mt-2 md:mt-5">
          <div className="p-2 border">
            <Image src={Icon2} alt="Icon" className="h-[30px] w-[30px]" />
          </div>
          <div className="ml-3">
            <p className="text-[13px]">Business:</p>
            <div className="flex mt-[-5px]">
              <p>support@envobyte.com </p>
              <Image src={Icon1} alt="Icon" className="ml-2"/>
            </div>
          </div>
        </Link>

        <div className="w-[55%] h-[1px] mt-2 mb-2 md:mt-4 md:mb-4 bg-[#E5E7EB1A]"/>

        <Link href="/" className="flex">
          <div className="p-2 border border-[#25D366]">
            <Image src={Icon3} alt="Icon" className="h-[30px] w-[30px]"/>
          </div>
          <div className="ml-3">
            <p className="text-[13px]">Whatsapp</p>
            <div className="flex mt-[-5px]">
              <p>+1 (667) 777 2477</p>
              <Image src={Icon1} alt="Icon" className="ml-2"/>
            </div>
          </div>
        </Link>

        <div className="w-[55%] h-[1px] mt-2 mb-2 md:mt-4 md:mb-4 bg-[#E5E7EB1A]"/>

        <Link href="/" className="flex">
          <div className="p-2 border border-[#2867B2]">
            <Image src={Icon4} alt="Icon" className="h-[30px] w-[30px]"/>
          </div>
          <div className="ml-3">
            <p className="text-[13px]">Linkiedin</p>
            <div className="flex mt-[-5px]">
              <p>www.linkedin.com/company/envobyte </p>
              <Image src={Icon1} alt="Icon" className="ml-2"/>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
