"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";


type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{
      opacity: 1,
      transition: { delay: 1, duration: 0.4, ease: "easeIn" },
    }} className="py-[70px]">
      <h1 className="text-[33px] xl:text-[42px] leading-[1.25] tracking-[-0.15px] text-center pb-[30px] relative mb-[24px] mt-[60px]">
        About Vu Tu
        <div className="before:content-[''] before:block before:h-[1px] before:w-[240px] before:bg-[rgba(0,0,0,0.1)] before:absolute before:left-[50%] before:bottom-0 before:transform before:-translate-x-1/2"></div>
      </h1>

      <p className="container font-light text-[22px] xl:text-[26px] leaing-[1.667] mb-[36px] text-black text-center px-[20px] ">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi quae
        asperiores molestias molestiae? Reiciendis, sapiente aut necessitatibus
        similique quod quisquam enim tempore, rerum blanditiis ex odit culpa
        adipisci. Vel, animi.
      </p>
      <div className="flex justify-center">
        <Image
          src="/about.webp"
          width={1000}
          height={500}
          className="w-[349px] h-[174px] xl:w-[1000px] xl:h-[500px]"
          quality={100}
          alt=""
        ></Image>
      </div>
      {/* Story */}
      <div className="container px-[70px]">
        <h2 className="text-[21px] xl:text-[30px] leading-[1.3] mt-[60px] mb-[18px]">
          This Is Our Story
        </h2>
        <p className="mb-[30px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos,
          repudiandae! Necessitatibus, amet. Dolorum corrupti reiciendis magni
          ipsum doloremque, officia quasi quibusdam, nulla, ipsam quis rem
          exercitationem? Qui repellendus doloribus unde.
        </p>
        <p className="mb-[30px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit eum
          debitis nesciunt dicta, commodi minus laborum voluptatum ab rerum
          omnis nostrum quo suscipit nam at delectus itaque laudantium explicabo
          ea.
        </p>
        <hr />
        {/*  Mission */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <div>
            <h4 className="mb-[15px] text-[21px] leading-[1.286] font-bold">
              Who We Are.
            </h4>
            <p className="mb-[30px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Expedita, delectus, ipsam reprehenderit laboriosam corrupti libero
              recusandae autem, cumque cupiditate beatae placeat doloribus
              officiis illo voluptates ducimus nisi qui. Officia, nesciunt.
            </p>
          </div>
          <div>
            <h4 className="mb-[15px] text-[21px] leading-[1.286] font-bold">
              Our Mission.
            </h4>
            <p className="mb-[30px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Expedita, delectus, ipsam reprehenderit laboriosam corrupti libero
              recusandae autem, cumque cupiditate beatae placeat doloribus
              officiis illo voluptates ducimus nisi qui. Officia, nesciunt.
            </p>
          </div>
          <div>
            <h4 className="mb-[15px] text-[21px] leading-[1.286] font-bold">
              Our Vision.
            </h4>
            <p className="mb-[30px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Expedita, delectus, ipsam reprehenderit laboriosam corrupti libero
              recusandae autem, cumque cupiditate beatae placeat doloribus
              officiis illo voluptates ducimus nisi qui. Officia, nesciunt.
            </p>
          </div>
          <div>
            <h4 className="mb-[15px] text-[21px] leading-[1.286] font-bold">
              Our Core Values.
            </h4>
            <p className="mb-[30px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Expedita, delectus, ipsam reprehenderit laboriosam corrupti libero
              recusandae autem, cumque cupiditate beatae placeat doloribus
              officiis illo voluptates ducimus nisi qui. Officia, nesciunt.
            </p>
          </div>
        </div>
       
      </div>
    </motion.div>
  );
};

export default About;
