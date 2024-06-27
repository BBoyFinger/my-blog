import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="py-[70px]">
      <h1 className="text-[33px] xl:text-[42px] leading-[1.25] tracking-[-0.15px] text-center pb-[30px] relative mb-[24px] mt-[60px]">
        Contact Us.
        <div className="before:content-[''] before:block before:h-[1px] before:w-[240px] before:bg-[rgba(0,0,0,0.1)] before:absolute before:left-[50%] before:bottom-0 before:transform before:-translate-x-1/2"></div>
      </h1>
      <p className="container font-light text-[22px] xl:text-[26px] leaing-[1.667] mb-[36px] text-black text-center px-[20px] ">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi quae
        asperiores molestias molestiae? Reiciendis, sapiente aut necessitatibus
        similique quod quisquam enim tempore, rerum blanditiis ex odit culpa
        adipisci. Vel, animi.
      </p>
      <div className="text-center flex justify-center">
        <Image
          src="/contact-2000.webp"
          width={1000}
          height={500}
          className="w-[349px] h-[174px] xl:w-[1000px] xl:h-[500px]"
          quality={100}
          alt=""
        ></Image>
      </div>
      <div className="container px-[70px] flex justify-center flex-col">
        <h2 className="text-[21px] xl:text-[30px] leading-[1.3] mt-[60px] mb-[18px]">
          Say Hello
        </h2>
        <p className="mb-[30px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos,
          repudiandae! Necessitatibus, amet. Dolorum corrupti reiciendis magni
          ipsum doloremque, officia quasi quibusdam, nulla, ipsam quis rem
          exercitationem? Qui repellendus doloribus unde.
        </p>
        <p className="mb-[30px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error facere
          hic quibusdam atque ducimus repellendus minus cupiditate, esse
          praesentium tenetur sit architecto enim maiores accusantium tempore
          quaerat libero, nobis earum.
        </p>
        {/* Map */}
        <div className="flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6659.020554590531!2d105.80032775064664!3d20.981624302128143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1719500010495!5m2!1sen!2s"
            width="860"
            height="420"
            className="border-0"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-8 mt-16">
          <div>
            <h4 className="mb-[15px] text-[21px] leading-[1.286] font-bold">
              Where to Find Us
            </h4>
            <p className="mb-[30px]">
              29/N136/TrieuKhuc
              <br />
              ThanhTri/HaNoi
              <br />
              11111 VN
            </p>
          </div>
          <div>
            <h4 className="mb-[15px] text-[21px] leading-[1.286] font-bold">
              Contact Info
            </h4>
            <p className="mb-[30px]">
              tuvngdevsl@gmail.com
              <br />
              https://vutu-portfolio.vercel.app/
              <br />
              Phone: (+84) 865607681
            </p>
          </div>
        </div>
        <div>
          <h4 className="mb-[15px] text-[21px] leading-[1.286] font-bold">
            Get In Touch
          </h4>
          <div className="">
            <form action="">
              <Input className="mb-0" placeholder="Your Name *" required ></Input>
              <Input className="mb-0" placeholder="Your Email *" required ></Input>
              <Input className="mb-0" placeholder="Website" ></Input>
              <Textarea placeholder="Your Message *" required></Textarea>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
