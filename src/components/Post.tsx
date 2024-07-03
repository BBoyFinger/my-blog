import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
type Props = {
  image: any;
  category: any;
  title: any;
  date: any;
};

function Post(props: Props) {
  return (
    <div className="px-[20px]">
      <div className="w-full max-w-full bg-white text-center flex-initial">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 "
        >
          <motion.div
            className=""
            whileHover={{
              scale: 1.1,
              rotateY: 15,
              rotateX: 15,
              boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "tween", stiffness: 500 }}
          >
            <Link href="/#">
              <Image
                src={props.image}
                width={200}
                height={200}
                alt=""
                className="object-contain w-full"
                quality={100}
              />
            </Link>
          </motion.div>
        </motion.div>
        {/* content */}
        <div className="flex gap-4 flex-col p-[24px] pt-[15px]">
          <h3 className="font-bold text-[#1d28a1] text-[1.4rem] uppercase leading-[0.25rem] transition-all ease-in-out mb-[1.2rem]">
            {props.category}
          </h3>
          <h1 className="text-[28px] font-image text-[#000000]">
            {props.title}
          </h1>
          <p>{props.date}</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
