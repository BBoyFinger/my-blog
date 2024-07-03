import { MdOutlineEmail } from "react-icons/md";
import React from "react";
import { Input } from "./ui/input";
import { MdEmail } from "react-icons/md";
import { Button } from "./ui/button";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="py-[102px] bg-footerBlue text-[rgba(255,255,255,0.5)]">
      <div className="container">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* About */}
          <div className="mb-3">
            <h4 className="font-bold text-[1.4rem] leading-[1.286] uppercase pb-[4.2rem] text-white mt-0 relative ">
              About Vu Tu
              <span className="block w-[120px] h-[1px] bg-white/10 absolute left-0 bottom-0"></span>
            </h4>
            <br />
            <p className="mb-[30px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              dignissimos provident debitis unde rerum facilis dolorum neque,
              natus temporibus minus. Eveniet dolorum similique quasi porro,
              sunt fuga exercitationem molestiae aliquam!
            </p>

            <div className="flex text-white gap-8 justify-center xl:justify-normal items-center mb-[15px] order-1 xl:order-none">
              <FaFacebook className="w-[30px] h-[30px]" />
              <FaTwitter className="w-[30px] h-[30px]" />
              <FaInstagram className="w-[30px] h-[30px]" />
              <FaYoutube className="w-[30px] h-[30px]" />
              <FaPinterest className="w-[30px] h-[30px]" />
            </div>
          </div>
          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-[1.4rem] leading-[1.286] uppercase pb-[4.2rem] text-white mt-0 relative ">
              Our Newsletter
              <span className="block w-[120px] h-[1px] bg-white/10 absolute left-0 bottom-0"></span>
            </h4>
            <br />
            <p className="mb-[30px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
              ipsam eius ea velit blanditiis quibusdam cupiditate, quisquam
              provident nulla.
            </p>

            <div className="flex mb-[18px]">
              <Input
                type="email"
                placeholder="Email Address"
                className={`bg-[rgba(0,0,0,0.25)]  text-white px-[20px]`}
              />
              <Button type="submit" className="bg-black text-white px-[20px]">
                Send
              </Button>
            </div>

            <div className="text-center xl:text-left">
              Copyright {new Date().getFullYear()} Vu Tu
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row justify-between rounded-none">
          {/* social */}

          {/* Copyright */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
