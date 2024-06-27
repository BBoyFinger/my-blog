import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
type Props = {
  image: any;
  category: any;
  title: any;
  date: any;
};

function Post(props: Props) {
  return (
    <div className="xl:w-[320px] xl:h-[632px] w-full max-w-full bg-white text-center flex-initial">
      {/* Header */}
      <div className="mb-8">
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
      </div>
      {/* content */}
      <div className="flex gap-4 flex-col p-[24px] pt-[15px]">
        <h3 className="font-bold text-[#1d28a1] text-[1.4rem] uppercase leading-[0.25rem] transition-all ease-in-out mb-[1.2rem]">
          {props.category}
        </h3>
        <h1 className="text-[28px] font-image text-[#000000]">{props.title}</h1>
        <p>{props.date}</p>
      </div>
    </div>
  );
}

export default Post;
