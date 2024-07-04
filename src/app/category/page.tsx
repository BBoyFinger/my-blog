'use client'
import Post from "@/components/Post";
import {
  Pagination as CustomPagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type Props = {};

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

const Category = (props: Props) => {
  return (
    <div>
      <div className="py-[70px]">
        <h1 className="text-[33px] xl:text-[42px] leading-[1.25] tracking-[-0.15px] text-center pb-[30px] relative mb-[24px] mt-[60px]">
          Category
          <div className="before:content-[''] before:block before:h-[1px] before:w-[240px] before:bg-[rgba(0,0,0,0.1)] before:absolute before:left-[50%] before:bottom-0 before:transform before:-translate-x-1/2"></div>
        </h1>

        <p className="container font-light text-[22px] xl:text-[26px] leaing-[1.667] mb-[36px] text-black text-center px-[20px] ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
          quae asperiores molestias molestiae? Reiciendis, sapiente aut
          necessitatibus similique quod quisquam enim tempore, rerum blanditiis
          ex odit culpa adipisci. Vel, animi.
        </p>
        <div className="container grid grid-cols-1 xl:grid-cols-4 gap-[10px]">
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
      </div>
    </div>
  );
};

export default Category;
