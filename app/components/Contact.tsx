"use client";

import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";

const Contact: React.FC = () => {
  return (
    <div className="w-full p-[100px] flex justify-between items-center bg-[#19018321] text-white">
      <div className="w-[47%] p-[20px] rounded bg-[#0a2c8c] border border-[#9fafe814]">
        <div className="w-full flex justify-between ">
          <div className="w-[45%]">
            <p className="mb-2">Name</p>
            <input
              type="text"
              className="w-full p-2 px-3 py-3 rounded border-[2px] border-[#9fafe814] outline-none transition-all duration-300 hover:border-[#656ed8] focus:border-[#656ed8]"
              placeholder="Your Name"
            />
          </div>

          <div className="w-[45%]">
            <p className="mb-2">Email</p>
            <input
              type="email"
              className="w-full p-2 px-3 py-3 rounded border-[2px] border-[#9fafe814] outline-none transition-all duration-300 hover:border-[#656ed8] focus:border-[#656ed8]"
              placeholder="support@enobyte.com"
            />
          </div>
        </div>

        <div className="w-full mt-4 flex justify-between ">
          <div className="w-[45%]">
            <p className="mb-2">Phone</p>
            <input
              type="number"
              className="w-full p-2 px-3 py-3 rounded border-[2px] border-[#9fafe814] outline-none transition-all duration-300 hover:border-[#656ed8] focus:border-[#656ed8]"
              placeholder="Your Name"
            />
          </div>

          <div className="w-[45%]">
            <p className="mb-2">Company</p>
            <input
              type="text"
              className="w-full p-2 px-3 py-3 rounded border-[2px] border-[#9fafe814] outline-none transition-all duration-300 hover:border-[#656ed8] focus:border-[#656ed8]"
              placeholder="Envobyte"
            />
          </div>
        </div>

        <div className="w-full mt-4">
          <p className="mb-2">Message</p>
          <textarea
            className="w-full p-2 px-3 py-3 rounded border-[2px] border-[#9fafe814] outline-none transition-all duration-300 hover:border-[#656ed8] focus:border-[#656ed8]"
            placeholder="Type your message here..."
          />
        </div>

        <button className="p-2 pl-3 pr-3 mt-4 cursor-pointer bg-[#3765e333] hover:bg-[#19018321] rounded-lg border-[2px] border-[#9fafe814] flex justify-center items-center ">
          <p>Send message</p>{" "}
          <ArrowRightOutlined className="text-[10px] ml-1 mt-1" />
        </button>
      </div>

      <div className="w-[47%] bg-indigo-700">bex</div>
    </div>
  );
};

export default Contact;
