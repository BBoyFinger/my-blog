"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Blog = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.4, ease: "easeIn" },
      }}
      className="py-[70px]"
    >
      <div className="text-center flex justify-center mb-[48px] p-[10px]">
        <Image
          className="w-[413px] h-[auto] xl:w-[1000px] xl:h-[500px]"
          src="/assets/blogstandard.webp"
          width={1000}
          height={500}
          quality={100}
          alt=""
        />
      </div>
      <div className="px-[15px] container text-center">
        <h1 className="mb-[18px] text-[33px] xl:text-[42px] tracking-[-1.5px] mt-0">
          This Is A Standard Format Post.
        </h1>
        <ul className="text-[13.5px] xl:text-[14px] font-semibold leading-[1.929] text-[rgba(0,0,0,0.5)] uppercase tracking-[2.5px] ml-0 mb-[12px] relative">
          <li className="inline-block pl-0 mx-[10px] ">JUNE 15, 2018</li>
          <li className="xl:inline-block pl-0 mx-[10px] block">
            {"By"}{" "}
            <Link href="#" className="text-[#000000]">
              Jonathan Doe
            </Link>
          </li>
        </ul>
      </div>
      {/* Description */}
      <div className="mt-[60px] container xl:px-[70px]">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
          animi accusamus explicabo dolorum tempora velit ipsa neque aliquid
          optio, iusto perferendis exercitationem magni obcaecati numquam ab
          repellendus. Vero, eos praesentium. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Dolores ullam corrupti accusantium
          accusamus dolore, iure odit voluptatum earum, tempore eligendi beatae
          officia, repudiandae sequi ipsum possimus error sapiente? Vitae,
          obcaecati.
        </p>
      </div>
      {/* Tag */}
      <div className="container mt-[60px] xl:px-[70px] flex flex-col gap-8 xl:flex-row">
        <div className=" w-[50%] pr-[20px]">
          <h5 className="font-bold text-[14px] leading-[1.286] uppercase tracking-[0.25rem] mt-0 mb-[12px]">
            Posted In:
          </h5>
          <span className="inline-block pr-0 mr-0">
            <a
              href=""
              className="after:content-[','] text-[16px] leading-[1.5] text-[rgba(0,0,0,0.5)] mr-[3px]"
            >
              Lifestyle
            </a>{" "}
            <a
              href=""
              className="after:content-[','] text-[16px] leading-[1.5] text-[rgba(0,0,0,0.5)] mr-[3px]"
            >
              Managent
            </a>
          </span>
        </div>
        <div>
          <div className="float-left w-[50%] pr-[20px]">
            <h5 className="font-bold text-[14px] leading-[1.286] uppercase tracking-[0.25rem] mt-0 mb-[12px]">
              Tags:
            </h5>
            <span className="flex pr-0 mr-0 gap-6">
              <Badge variant="outline">orci</Badge>
              <Badge variant="outline">lectus</Badge>
              <Badge variant="outline">varius</Badge>
              <Badge variant="outline">turpis</Badge>
            </span>
          </div>
        </div>
      </div>
      {/* author */}
      <div className="container mt-[72px] xl:px-[70px]">
        <div className="flex p-[42px] items-center justify-between xl:text-left text-center gap-4 flex-col xl:flex-row border-[1px] border-solid border-[rgba(0,0,0,0.1)] relative text-[16px] ">
          <div className="">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <h5 className="pr-[10px] mt-0 mb-[9px]">
              <span className="text-[12px] font-normal leading-[2] uppercase text-[rgba(0,0,0,0.5)] block ">
                Posted By
              </span>
              <Link href="#" className="text-black">
                Jonathan Doe
              </Link>
            </h5>
          </div>
          <div className="w-[70%]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus cum molestiae dignissimos iusto corrupti deserunt
              velit nisi incidunt autem? Officiis, esse! Quibusdam vel tempora,
              odit delectus aspernatur aut atque voluptate.
            </p>
          </div>
        </div>
      </div>
      {/* Nav */}
      <div className="mt-[120px] mb-[60px] pt-[66px] pb-[48px] xl:pb-[90px] border-y-[1px] border-solid border-y-[rgba(0,0,0,0.1)] relative xl:before:content-[''] xl:before:block xl:before:h-full xl:before:w-[1px] xl:before:bg-[rgba(0,0,0,0.1)] xl:before:absolute xl:before:left-[50%] xl:before:top-0 after:content-[''] after:table after:clear-both">
        <div className="container xl:w-[89%] m-[0_auto]">
          <div className="float-none xl:float-left text-center xl:text-right p-0 xl:p-[0_60px_0_20px] w-full mb-[30px] xl:w-[50%]">
            <Link
              href="#"
              className="font-bold text-[30px] leading-[1.5] text-[#000000] "
              rel="prev"
            >
              <span className="block font-semibold text-[14px] leading-[1.5] uppercase tracking-[2.5px] text-[rgba(0,0,0,0.5)] mb-[12px] ">
                Previous Post
              </span>
              {"The Pomodoro Technique Really Works."}
            </Link>
          </div>
          <div className="float-none xl:float-right text-center xl:text-left p-0 xl:p-[0_20px_0_60px] w-full mb-[30px] xl:w-[50%] ">
            <Link
              href="#"
              className="font-bold text-[30px] leading-[1.5] text-[#000000] "
              rel="next"
            >
              <span className="block font-semibold text-[14px] leading-[1.5] uppercase tracking-[2.5px] text-[rgba(0,0,0,0.5)] mb-[12px] ">
                Next Post
              </span>
              {"3 Benefits of Minimalism In Interior Design."}
            </Link>
          </div>
        </div>
      </div>

      {/* Comment */}
      <div className="container mt-[102px] pt-[45px] pb-[72px]">
        <div id="comment">
          <div>
            <h3 className="text-center text-[30px] leading-[1.5] mt-0 mb-[15px]">
              5 Comments
            </h3>
            <ol className="mt-[60px] mb-[54px] p-0">
              <li className="relative list-none m-0 pl-[14%] pt-[18px]">
                {/* Comment Avatar */}
                <div className="absolute left-0 block">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
                {/* Comment content */}
                <div>
                  {/* Infor */}
                  <div className="relative">
                    {/* author */}
                    <div className="font-bold text-[19px] leading-[1.579] text-black">
                      Uchiha Itachi
                    </div>
                    {/* meta */}
                    <div className="block text-[rgba(0,0,0,0.5)] text-right w-[150px] absolute top-0 right-0">
                      <div className="text-[14px] uppercase leading-[10px] text-[rgba(0,0,0.5)]">
                        Jun 15, 2018
                      </div>
                      <div className="">
                        <Link
                          href="#"
                          className="text-[13px] font-bold uppercase leading-[2px] text-black"
                        >
                          Reply
                        </Link>
                      </div>
                    </div>
                    {/* Comment text */}
                    <div className="clear-both mt-[15px] pr-[175px]">
                      <p className="mb-[30px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat incidunt tempora, consectetur cum repellendus
                        possimus accusamus vel hic voluptas atque aliquam est
                        sed fugit doloribus ea minima, quibusdam enim
                        exercitationem?
                      </p>
                    </div>
                  </div>
                  <div></div>
                </div>
              </li>
              <li className="relative list-none m-0 pl-[14%] pt-[18px]">
                {/* Comment Avatar */}
                <div className="absolute left-0 block">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
                {/* Comment content */}
                <div>
                  {/* Infor */}
                  <div className="relative">
                    {/* author */}
                    <div className="font-bold text-[19px] leading-[1.579] text-black">
                      Uchiha Itachi
                    </div>
                    {/* meta */}
                    <div className="block text-[rgba(0,0,0,0.5)] text-right w-[150px] absolute top-0 right-0">
                      <div className="text-[14px] uppercase leading-[10px] text-[rgba(0,0,0.5)]">
                        Jun 15, 2018
                      </div>
                      <div className="">
                        <Link
                          href="#"
                          className="text-[13px] font-bold uppercase leading-[2px] text-black"
                        >
                          Reply
                        </Link>
                      </div>
                    </div>
                    {/* Comment text */}
                    <div className="clear-both mt-[15px] pr-[175px]">
                      <p className="mb-[30px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat incidunt tempora, consectetur cum repellendus
                        possimus accusamus vel hic voluptas atque aliquam est
                        sed fugit doloribus ea minima, quibusdam enim
                        exercitationem?
                      </p>
                    </div>
                  </div>
                  <div></div>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
      {/* Response Comment */}
      <div className="container mt-[60px] h-full">
        <div id="response" className="w-full">
          <h3 className="font-bold text-[30px] leading-[1.5] text-center mt-0 mb-[15px]">
            {"Add Comment"}
            <span className="font-normal block text-[18px] leading-[1.667] text-[rgba(0,0,0,0.5)]">
              Your email address will not be published
            </span>
          </h3>
          <form className="pt-[60px] h-full" action="">
            <fieldset>
              <div className="form-field">
                <Input placeholder="Your Name*" />
              </div>
              <div className="form-field">
                <Input placeholder="Your Email*" />
              </div>
              <div className="form-field">
                <Input placeholder="Website" />
              </div>
              <div className="form-field">
                <Textarea placeholder="Your Message" rows={4} />
              </div>
              <Button className="bg-[#111860] mt-[60px] text-white w-full">
                Add Comment
              </Button>
            </fieldset>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Blog;
