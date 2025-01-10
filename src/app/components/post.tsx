import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineAreaChart } from "react-icons/ai";
import { BiAlarm } from "react-icons/bi";
import { SlArrowRight } from "react-icons/sl";

const Posts = () => {
  const posts = [
    {
      name: "Graphic Design",
      image: "/images/posts/post1.png",
      imgName: "shop-hero-1",
    },
    {
      name: "Graphic Design",
      image: "/images/posts/post2.png",
      imgName: "shop-hero-1",
    },
    {
      name: "Graphic Design",
      image: "/images/posts/post3.png",
      imgName: "shop-hero-1",
    },
  ];
  const mobPosts = [
    {
      name: "Graphic Design",
      image: "/images/posts/mob-post1.png",
      imgName: "shop-hero-1",
    },
    {
      name: "Graphic Design",
      image: "/images/posts/mob-post2.png",
      imgName: "shop-hero-1",
    },
    {
      name: "Graphic Design",
      image: "/images/posts/mob-post3.png",
      imgName: "shop-hero-1",
    },
  ];

  return (
    <section className=" xs:h-auto          w-full        lg:h-[1044px] lg:flex lg:justify-center">
      <div className=" xs:w-full xs:h-auto xs:py-[80px]           lg:w-[1050px] lg:h-[1044px] flex flex-col items-center lg:justify-center gap-[80px] lg:py-[0px]">
        {/* headings con */}
        <div className=" xs:w-[300px] xs:h-[184px]           lg:w-[692px] lg:h-[134px] flex flex-col items-center justify-between text-center">
          <span className=" text-[14px] font-bold w-[117px] h-[24px] text-primaryClr flex items-center ">
            Practice Advice
          </span>

          <h1 className="xs:w-[239px] xs:h-[100px]       text-[40px] font-bold lg:w-[318px] lg:h-[50px] text-txtClr flex items-center ">
            Featured Posts
          </h1>

          <p className="  xs:hidden            text-[14px] font-normal h-[40px] text-secondTxtClr lg:flex items-center lg:justify-center lg:w-[463px]">
            Problems trying to resolve the conflict between <br /> the two major
            realms of Classical physics: Newtonian mechanics
          </p>
          <p className=" xs:w-[261px] h-[40px] text-[14px] font-normal text-secondTxtClr xs:flex items-center      lg:hidden ">
            Problems trying to resolve the conflict between the two major
          </p>
        </div>

        {/* posts main con */}
        <div className=" xs:w-[329px] xs:h-auto xs:space-y-[30px]            lg:w-[1045px] lg:h-[606px] lg:flex lg:gap-[10px] lg:space-y-[0px]">
          {/* 1-post con (img & details) */}
          <div className="xs:w-full xs:h-auto        lg:w-[348px] lg:h-[606px] shadow-md">
            {/* post img con) */}
            <div className=" w-full h-[300px] flex ">
              <Image
                src={posts[0].image}
                alt={posts[0].imgName}
                width={349}
                height={300}
                className="xs:hidden lg:block"
              />
              <Image
                src={mobPosts[0].image}
                alt={mobPosts[0].imgName}
                width={331}
                height={300}
                className="xs:block lg:hidden"
              />
              <span className="bg-redClr xs:ml-[-309px]      w-[58px] h-[24px] mt-[20px] rounded-[3px] text-[14px] font-bold text-lightTxtClr flex items-center justify-center    lg:ml-[-328px] ">
                NEW
              </span>
            </div>

            {/* post details con) */}
            <div className=" w-full h-[306px] flex flex-col  justify-between ">
              {/* post links con */}
              <div className=" w-[159px] h-[16px] flex items-center justify-between text-secondTxtClr ml-[25px] mt-[25px]">
                <Link
                  href={"#"}
                  className="text-[12px] font-normal text-lightBlueTxtClr"
                >
                  Google
                </Link>
                <Link href={"#"} className="text-[12px] font-normal">
                  Trending
                </Link>
                <Link href={"#"} className="text-[12px] font-normal">
                  New
                </Link>
              </div>
              {/* post heading) */}
              <h3 className=" text-[20px] font-normal w-[247px] h-[60px] text-txtClr flex items-center justify-center ml-[25px]">
                Loudest à la Madison #1 (L'integral)
              </h3>
              {/* post detail) */}
              <p className=" text-[14px] font-normal w-[280px] h-[60px] text-secondTxtClr flex items-center justify-center ml-[25px]">
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>
              {/* post date & comments con) */}
              <div className=" xs:w-[280px]     lg:w-[298px]     h-[46px] flex items-center justify-between ml-[25px] ">
                {/* post date con */}
                <div className=" w-[98px] h-[16px] flex items-center justify-between">
                  <BiAlarm className="text-primaryClr" />
                  <span className="w-[77px] h-[16px] text-[12px] font-normal text-secondTxtClr">
                    22 April 2021
                  </span>
                </div>
                {/* post comments con */}
                <div className=" w-[105px] h-[16px] flex items-center justify-between">
                  <AiOutlineAreaChart className="text-secondaryClr" />
                  <span className="w-[84px] h-[16px] text-[12px] font-normal text-secondTxtClr">
                    10 comments
                  </span>
                </div>
              </div>

              {/* post learn-more con */}
              <Link
                href={"#"}
                className=" w-[107px] h-[24px] flex items-center justify-between ml-[25px] mb-[35px]"
              >
                <span className=" text-[14px] font-bold text-secondTxtClr">
                  Learn More
                </span>
                <SlArrowRight className=" text-primaryClr" />
              </Link>
            </div>
          </div>
          {/* 2-post con (img & details) */}
          <div className="xs:w-full xs:h-auto        lg:w-[348px] lg:h-[606px] shadow-md">
            {/* post img con) */}
            <div className=" w-full h-[300px] flex ">
              <Image
                src={posts[1].image}
                alt={posts[1].imgName}
                width={349}
                height={300}
                className="xs:hidden lg:block"
              />
              <Image
                src={mobPosts[1].image}
                alt={mobPosts[1].imgName}
                width={331}
                height={300}
                className="xs:block lg:hidden"
              />
              <span className="bg-redClr xs:ml-[-309px]      w-[58px] h-[24px] mt-[20px] rounded-[3px] text-[14px] font-bold text-lightTxtClr flex items-center justify-center    lg:ml-[-328px] ">
                NEW
              </span>
            </div>

            {/* post details con) */}
            <div className=" w-full h-[306px] flex flex-col  justify-between ">
              {/* post links con */}
              <div className=" w-[159px] h-[16px] flex items-center justify-between text-secondTxtClr ml-[25px] mt-[25px]">
                <Link
                  href={"#"}
                  className="text-[12px] font-normal text-lightBlueTxtClr"
                >
                  Google
                </Link>
                <Link href={"#"} className="text-[12px] font-normal">
                  Trending
                </Link>
                <Link href={"#"} className="text-[12px] font-normal">
                  New
                </Link>
              </div>
              {/* post heading) */}
              <h3 className=" text-[20px] font-normal w-[247px] h-[60px] text-txtClr flex items-center justify-center ml-[25px]">
                Loudest à la Madison #1 (L'integral)
              </h3>
              {/* post detail) */}
              <p className=" text-[14px] font-normal w-[280px] h-[60px] text-secondTxtClr flex items-center justify-center ml-[25px]">
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>
              {/* post date & comments con) */}
              <div className=" xs:w-[280px]     lg:w-[298px]     h-[46px] flex items-center justify-between ml-[25px] ">
                {/* post date con */}
                <div className=" w-[98px] h-[16px] flex items-center justify-between">
                  <BiAlarm className="text-primaryClr" />
                  <span className="w-[77px] h-[16px] text-[12px] font-normal text-secondTxtClr">
                    22 April 2021
                  </span>
                </div>
                {/* post comments con */}
                <div className=" w-[105px] h-[16px] flex items-center justify-between">
                  <AiOutlineAreaChart className="text-secondaryClr" />
                  <span className="w-[84px] h-[16px] text-[12px] font-normal text-secondTxtClr">
                    10 comments
                  </span>
                </div>
              </div>

              {/* post learn-more con */}
              <Link
                href={"#"}
                className=" w-[107px] h-[24px] flex items-center justify-between ml-[25px] mb-[35px]"
              >
                <span className=" text-[14px] font-bold text-secondTxtClr">
                  Learn More
                </span>
                <SlArrowRight className=" text-primaryClr" />
              </Link>
            </div>
          </div>
          {/* 3-post con (img & details) */}
          <div className="xs:w-full xs:h-auto        lg:w-[348px] lg:h-[606px] shadow-md">
            {/* post img con) */}
            <div className=" w-full h-[300px] flex ">
              <Image
                src={posts[2].image}
                alt={posts[2].imgName}
                width={349}
                height={300}
                className="xs:hidden lg:block"
              />
              <Image
                src={mobPosts[2].image}
                alt={mobPosts[2].imgName}
                width={331}
                height={300}
                className="xs:block lg:hidden"
              />
              <span className="bg-redClr xs:ml-[-309px]      w-[58px] h-[24px] mt-[20px] rounded-[3px] text-[14px] font-bold text-lightTxtClr flex items-center justify-center    lg:ml-[-328px] ">
                NEW
              </span>
            </div>

            {/* post details con) */}
            <div className=" w-full h-[306px] flex flex-col  justify-between ">
              {/* post links con */}
              <div className=" w-[159px] h-[16px] flex items-center justify-between text-secondTxtClr ml-[25px] mt-[25px]">
                <Link
                  href={"#"}
                  className="text-[12px] font-normal text-lightBlueTxtClr"
                >
                  Google
                </Link>
                <Link href={"#"} className="text-[12px] font-normal">
                  Trending
                </Link>
                <Link href={"#"} className="text-[12px] font-normal">
                  New
                </Link>
              </div>
              {/* post heading) */}
              <h3 className=" text-[20px] font-normal w-[247px] h-[60px] text-txtClr flex items-center justify-center ml-[25px]">
                Loudest à la Madison #1 (L'integral)
              </h3>
              {/* post detail) */}
              <p className=" text-[14px] font-normal w-[280px] h-[60px] text-secondTxtClr flex items-center justify-center ml-[25px]">
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>
              {/* post date & comments con) */}
              <div className=" xs:w-[280px]     lg:w-[298px]     h-[46px] flex items-center justify-between ml-[25px] ">
                {/* post date con */}
                <div className=" w-[98px] h-[16px] flex items-center justify-between">
                  <BiAlarm className="text-primaryClr" />
                  <span className="w-[77px] h-[16px] text-[12px] font-normal text-secondTxtClr">
                    22 April 2021
                  </span>
                </div>
                {/* post comments con */}
                <div className=" w-[105px] h-[16px] flex items-center justify-between">
                  <AiOutlineAreaChart className="text-secondaryClr" />
                  <span className="w-[84px] h-[16px] text-[12px] font-normal text-secondTxtClr">
                    10 comments
                  </span>
                </div>
              </div>

              {/* post learn-more con */}
              <Link
                href={"#"}
                className=" w-[107px] h-[24px] flex items-center justify-between ml-[25px] mb-[35px]"
              >
                <span className=" text-[14px] font-bold text-secondTxtClr">
                  Learn More
                </span>
                <SlArrowRight className=" text-primaryClr" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Posts;
