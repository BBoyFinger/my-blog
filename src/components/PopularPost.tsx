import Image from "next/image";
import Link from "next/link";

interface PopularPost {
  image: string;
  title: string;
  tutor: string;
  date: string;
}

type Props = {
  post: PopularPost;
};

const PopularPost = (props: Props) => {
  return (
    <div className="flex gap-6">
      <Image
        src={props.post.image}
        alt=""
        width={69}
        height={69}
        quality={100}
        className="object-cover w-[66px] h-[66px] xl:w-[69px] xl:h-[69px]"
      />

      <div>
        <h5 className="font-bold text-[16px] leading-[1.3125] mb-[6px]">
          {props.post.title}
        </h5>
        <p className="text-[13px] text-[rgba(0,0,0,0.5)]">
          By{" "}
          <Link href="#" className="text-[#000000]">
            {props.post.tutor}
          </Link>{" "}
          on {props.post.date}
        </p>
      </div>
    </div>
  );
};

export default PopularPost;
