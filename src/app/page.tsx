"use client";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Image from "next/image";
import { useState } from "react";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  Pagination as CustomPagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Post from "@/components/Post";

type Props = {};
const topPosts = [
  {
    category: "LIFESTYLE",
    image: "/assets/featured-beetle.jpg",
    title: "The difference between Classics, Vintage & Antique Cars.",
    tutor: "John Doe",
    date: "June 12, 2024",
    avatar: "",
  },
  {
    category: "MUSIC",
    image: "/assets/featured-guitarman.jpg",
    title: "What Your Music Preference Says About You and Your Personality.",
    tutor: "John Doe",
    date: "June 12, 2024",
    avatar: "",
  },
  {
    category: "MANAGEMENT",
    image: "/assets/featured-watch.jpg",
    title: "The difference between Classics, Vintage & Antique Cars.",
    tutor: "John Doe",
    date: "June 12, 2024",
    avatar: "",
  },
];

const posts = [
  {
    category: "LIFESTYLE",
    image: "/assets/lamp-400.jpg.webp",
    title: "The difference between Classics, Vintage & Antique Cars.",
    tutor: "John Doe",
    date: "June 12, 2024",
    avatar: "",
  },
  {
    category: "LIFESTYLE",
    image: "/assets/lamp-400.jpg.webp",
    title: "The difference between Classics, Vintage & Antique Cars.",
    tutor: "John Doe",
    date: "June 12, 2024",
    avatar: "",
  },
  {
    category: "LIFESTYLE",
    image: "/assets/lamp-400.jpg.webp",
    title: "The difference between Classics, Vintage & Antique Cars.",
    tutor: "John Doe",
    date: "June 12, 2024",
    avatar: "",
  },
  {
    category: "LIFESTYLE",
    image: "/assets/lamp-400.jpg.webp",
    title: "The difference between Classics, Vintage & Antique Cars.",
    tutor: "John Doe",
    date: "June 12, 2024",
    avatar: "",
  },
  {
    category: "LIFESTYLE",
    image: "/assets/lamp-400.jpg.webp",
    title: "The difference between Classics, Vintage & Antique Cars.",
    tutor: "John Doe",
    date: "June 12, 2024",
    avatar: "",
  },
  {
    category: "LIFESTYLE",
    image: "/assets/lamp-400.jpg.webp",
    title: "The difference between Classics, Vintage & Antique Cars.",
    tutor: "John Doe",
    date: "June 12, 2024",
    avatar: "",
  },
  {
    category: "LIFESTYLE",
    image: "/assets/lamp-400.jpg.webp",
    title: "The difference between Classics, Vintage & Antique Cars.",
    tutor: "John Doe",
    date: "June 12, 2024",
    avatar: "",
  },
  {
    category: "LIFESTYLE",
    image: "/assets/lamp-400.jpg.webp",
    title: "The difference between Classics, Vintage & Antique Cars.",
    tutor: "John Doe",
    date: "June 12, 2024",
    avatar: "",
  },
  {
    category: "LIFESTYLE",
    image: "/assets/lamp-400.jpg.webp",
    title: "The difference between Classics, Vintage & Antique Cars.",
    tutor: "John Doe",
    date: "June 12, 2024",
    avatar: "",
  },
];

const HomePage = (props: Props) => {
  const [post, setPost] = useState(topPosts[0]);
  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.activeIndex;
    setPost(topPosts[currentIndex]);
  };

  return (
    <>
      <div className="flex justify-center  mt-16">
        {/* Slider */}
        <section className="w-full xl:w-[50%]">
          <Swiper
            modules={[Pagination, Scrollbar, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            className="xl:h-[520px] mb-12"
            onSlideChange={handleSlideChange}
            pagination={{ clickable: true }}
            autoplay
          >
            {topPosts.map((post, index) => (
              <SwiperSlide key={index} className="w-full">
                <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                  {/* Overlay */}
                  <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-50"></div>
                  <div className="absolute flex flex-col justify-center items-center text-center text-white w-full h-full z-10 font-image gap-6">
                    <p>{post.category}</p>
                    <h1 className="text-[38px] transition-all ease-in-out">
                      {post.title}
                    </h1>
                    <p className="text-[rgba(255,255,255,0.5)] flex gap-2 justify-center items-start">
                      <Avatar>
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      {post.tutor} . {post.date}
                    </p>
                  </div>
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}

            {/* Slider Buttons  */}
            <WorkSliderBtns
              containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
              btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all duration-500"
              iconStyles=""
            />
          </Swiper>
        </section>
      </div>

      {/* Post */}
      <section>
        <div className="container grid grid-cols-1 xl:grid-cols-3 gap-[20px]">
          {posts.map((post, index) => {
            return (
              <Post
                image={post.image}
                title={post.title}
                category={post.category}
                date={post.date}
                key={index}
              />
            );
          })}
          {/* Pagination */}
        </div>
        <div className="mt-10">
          <CustomPagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </CustomPagination>
        </div>
      </section>
    </>
  );
};

export default HomePage;
