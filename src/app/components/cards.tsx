import Image from "next/image";
import React from "react";

const Cards = () => {
  return (
    <div className=" flex w-full h-[770px] ">
      <div className="bg-lightBg w-[1050px] h-[770px] mx-[195px]">
        <div className=" w-[607px] h-[60px] mx-[221.5px] my-[80px]">
          <h1 className="text-center text-[24px] font-bold">EDITOR’S PICK</h1>
          <p className="text-center text-[14px] font-normal">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Cards Section */}
        <div className=" flex justify-between gap-3 w-[1050px] h-[500px]">
          <div className=" w-[500px] h-[500px]">
            <Image
              className="w-full"
              src="/images/card1.png"
              alt="card-image"
              objectFit="cover"
              width={509}
              height={500}
            />
          </div>
          <div className=" w-[240px] h-[500px]">
            <Image
              className="w-full"
              src="/images/card2.png"
              alt="card-image"
              objectFit="cover"
              width={239}
              height={500}
            />
          </div>
          <div className=" flex flex-col gap-4 w-[240px] h-[500px]">
            <div className=" w-[240px] h-[242px]">
              <Image
                className="w-full"
                src="/images/card3.png"
                alt="card-image"
                objectFit="cover"
                width={239}
                height={242}
              />
            </div>
            <div className=" w-[240px] h-[242px]">
              <Image
                className="w-full"
                src="/images/card4.png"
                alt="card-image"
                objectFit="cover"
                width={239}
                height={242}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
