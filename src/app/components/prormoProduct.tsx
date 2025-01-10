import Image from "next/image";
import React from "react";

const PromoProduct = () => {
  const promoProducts = [
    {
      name: "Graphic Design",
      price: "$16.48",
      image: "/images/promo-products/shop-hero-1.png",
      imgName: "shop-hero-1",
    },
  ];
  const mobPromoProducts = [
    {
      name: "Graphic Design",
      price: "$16.48",
      image: "/images/promo-products/mob-shop-hero-1.png",
      imgName: "mob-shop-hero-1",
    },
  ];

  return (
    <section className="bg-secondaryClr xs:h-auto       w-full  lg:h-[709px]   lg:flex lg:justify-center ">
      <div className="xs:w-full xs:h-auto       lg:w-[1036px] lg:h-[709px]  ">
        <div className="xs:w-full xs:h-auto xs:space-y-[30px] xs:pt-[208px]       lg:w-[1036px] lg:h-[599px] lg:flex lg:gap-[17px] lg:mt-[110px] lg:space-y-[0px] lg:pt-[0px] ">
          <div className="xs:w-full xs:h-[429px] xs:items-center xs:gap-[35px] xs:text-center       text-lightTxtClr flex flex-col         lg:w-[509px] lg:h-[432px] lg:text-start  lg:items-start lg:gap-[30px] ">
            <span className=" xs:mt-[0px]           text-[20px] font-normal w-[154px] h-[30px] lg:mt-[60px]">
              SUMMER 2020
            </span>

            <h1 className=" xs:w-[246px] xs:h-[100px] xs:text-[40px] xs:flex xs:flex-col xs:justify-center       font-bold        lg:text-[58px]  lg:w-[509px] lg:h-[160px]">
              Vita Classic Product
            </h1>

            <p className=" xs:w-[291px] xs:h-[90px] xs:text-[20px]        font-normal            lg:text-[14px] lg:w-[341px] lg:h-[40px]">
              We know how large objects will act, but things on a small scale.
            </p>
            <div className=" xs:w-[184px] xs:h-[104px] xs:flex xs:flex-col xs:justify-between xs:items-center     lg:flex lg:flex-row       lg:w-[298px] lg:h-[52px] lg:space-x-[34px]">
              <span className=" xs:w-[77px]        text-[24px] font-bold      lg:w-[80px] h-[32px]">
                $16.48
              </span>
              <button className=" bg-successClr w-[184px] h-[52px] text-[14px] font-bold rounded-[5px] ">
                ADD TO CART
              </button>
            </div>
          </div>
          <div className=" lg:w-[510px] lg:h-[599px] lg:flex lg:justify-center ">
            <Image
              src={promoProducts[0].image}
              alt={promoProducts[0].imgName}
              width={443}
              height={597}
              className="xs:hidden     lg:block"
            />
            <Image
              src={mobPromoProducts[0].image}
              alt={mobPromoProducts[0].imgName}
              width={412}
              height={633}
              className="xs:block lg:hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoProduct;
