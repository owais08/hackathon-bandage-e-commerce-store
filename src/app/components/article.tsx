import Image from "next/image";
import React from "react";

const Article = () => {
  const articles = [
    {
      name: "Graphic Design",
      price: "$16.48",
      image: "/images/articles/winter-article1.png",
      imgName: "shop-hero-1",
    },
  ];
  const mobArticles = [
    {
      name: "Graphic Design",
      price: "$16.48",
      image: "/images/articles/mob-winter-article1.png",
      imgName: "shop-hero-1",
    },
  ];
  return (
    <article className=" xs:h-auto xs:          w-full lg:h-[682px] lg:flex lg:gap-[30px] lg:items-center  ">
      <div className=" xs:hidden         lg:flex lg:w-[704px] lg:h-[682px] lg:ml-[132px]  ">
        <Image
          src={articles[0].image}
          alt={articles[0].imgName}
          width={624}
          height={680}
        />
      </div>
      <div className=" xs:w-full xs:h-auto xs:text-center xs:items-center xs:gap-[32.78px] xs:pt-[120px]        lg:w-[573px] lg:h-[335px] lg:text-start lg:items-start lg:pt-[0px]     flex flex-col justify-between">
        <span className=" text-[16px] font-bold w-[122px] h-[24px] text-mutedClr ">
          SUMMER 2020
        </span>

        <h1 className=" xs:w-[303.48px] xs:h-[156px] xs:flex xs:flex-col xs:justify-center         text-[40px] font-bold text-txtClr        lg:w-[387px] lg:h-[100px] ">
          Part of the Neural Universe
        </h1>

        <p className=" xs:w-[262.27px] xs:h-[90px]          text-[20px] font-normal lg:w-[376px] lg:h-[60px] lg:text-secondTxtClr">
          We know how large objects will act, but things on a small scale.
        </p>
        <div className=" xs:w-[165px] xs:h-[129px] xs:space-x-[0px] xs:space-y-[25px]            lg:w-[339px] lg:h-[52px] lg:space-x-[10px] lg:space-y-[0px]">
          <button className="xs:bg-primaryClr      w-[156px] h-[52px] text-[14px] font-bold rounded-[5px] text-lightTxtClr    lg:bg-successClr ">
            BUY NOW
          </button>
          <button className=" bg-lightBg xs:text-primaryClr xs:w-[165px]      outline outline-1 h-[52px] text-[14px] font-bold rounded-[5px]       lg:text-successClr lg:w-[173px] ">
            READ MORE
          </button>
        </div>
      </div>
      <div className=" xs:flex xs:w-full xs:h-[375px] xs:mt-[28.1px]        lg:hidden ">
        <Image
          src={mobArticles[0].image}
          alt={mobArticles[0].imgName}
          width={401}
          height={375}
        />
      </div>
    </article>
  );
};

export default Article;
