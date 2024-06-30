import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Blog = (props: Props) => {
  return (
    <div className="py-[70px]">
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
        <h1 className="mb-[18px] text-[33px] xl:text-[42px] tracking-[-.15rem] mt-0">
          This Is A Standard Format Post.
        </h1>
        <ul className="text-[13.5px] xl:text-[14px] font-semibold leading-[1.929] text-[rgba(0,0,0,0.5)] uppercase tracking-[0.25rem] ml-0 mb-[12px] relative">
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
      <div className="mt-[120px] mb-[60px] h-full pt-[66px] pb-[90px] border-solid border-t-[1px] border-b-[1px] border-t-[rgba(0,0,0,0.1)] border-b-[rgba(0,0,0,0.1)] relative before:content-[''] before:block before:h-[100%] before:w-[1px] before:bg-[rgba(0,0,0,0.1)] before:absolute before:left-[50%] before:top-0">
        <div className="max-w-[1000px] w-[89%] m-[0_auto]">
          <div className="float-left text-right pr-[60px] pl-[20px] w-[50%]">
            <Link
              href="#"
              className="font-bold text-[30px] leading-[1.5] text-black"
            >
              <span className="block font-semibold text-[14px] leading-[1.5] uppercase tracking-[0.25rem] text-[rgba(0,0,0,0.5)] mb-[12px]">
                Previous Post
              </span>
              {"The Pomodoro Technique Really Works."}
            </Link>
          </div>
          <div className="float-right pr-[20px] pl-[60px] w-[50%]">
            <Link
              href="#"
              className="font-bold text-[30px] leading-[1.5] text-black"
            >
              <span className="block font-semibold text-[14px] leading-[1.5] uppercase tracking-[0.25rem] text-[rgba(0,0,0,0.5)] mb-[12px]">
                Next Post
              </span>
              {"3 Benefits of Minimalism In Interior Design."}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
