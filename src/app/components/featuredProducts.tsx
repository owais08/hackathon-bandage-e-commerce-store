import Image from "next/image";
import { IoEllipse } from "react-icons/io5";

const FeaturedProducts = () => {
  // featuredProducts data
  const featuredProducts = [
    {
      name: "Graphic Design",
      price: "$16.48",
      image: "/images/featured-products/product-cover-1.png",
      imgName: "product-cover-1",
    },
    {
      name: "Graphic Design",
      price: "$16.48",
      image: "/images/featured-products/product-cover-2.png",
      imgName: "product-cover-2",
    },
    {
      name: "Graphic Design",
      price: "$16.48",
      image: "/images/featured-products/product-cover-3.png",
      imgName: "product-cover-3",
    },
    {
      name: "Graphic Design",
      price: "$16.48",
      image: "/images/featured-products/product-cover-4.png",
      imgName: "product-cover-4",
    },
    {
      name: "Graphic Design",
      price: "$16.48",
      image: "/images/featured-products/product-cover-5.png",
      imgName: "product-cover-4",
    },
    {
      name: "Graphic Design",
      price: "$16.48",
      image: "/images/featured-products/product-cover-6.png",
      imgName: "product-cover-4",
    },
    {
      name: "Graphic Design",
      price: "$16.48",
      image: "/images/featured-products/product-cover-7.png",
      imgName: "product-cover-4",
    },
    {
      name: "Graphic Design",
      price: "$16.48",
      image: "/images/featured-products/product-cover-8.png",
      imgName: "product-cover-4",
    },
  ];
  // Mobile featuredProducts data
  const mobfeaturedProducts = [
    {
      name: "Graphic Design",
      price: "$16.48",
      image: "/images/featured-products/mob-product-cover-1.png",
      imgName: "product-cover-1",
    },
    {
      name: "Graphic Design",
      price: "$16.48",
      image: "/images/featured-products/mob-product-cover-2.png",
      imgName: "product-cover-2",
    },
    {
      name: "Graphic Design",
      price: "$16.48",
      image: "/images/featured-products/mob-product-cover-3.png",
      imgName: "product-cover-3",
    },
    {
      name: "Graphic Design",
      price: "$16.48",
      image: "/images/featured-products/mob-product-cover-4.png",
      imgName: "product-cover-4",
    },
    {
      name: "Graphic Design",
      price: "$16.48",
      image: "/images/featured-products/mob-product-cover-5.png",
      imgName: "product-cover-4",
    },
    {
      name: "Graphic Design",
      price: "$16.48",
      image: "/images/featured-products/mob-product-cover-6.png",
      imgName: "product-cover-4",
    },
    {
      name: "Graphic Design",
      price: "$16.48",
      image: "/images/featured-products/mob-product-cover-7.png",
      imgName: "product-cover-4",
    },
    {
      name: "Graphic Design",
      price: "$16.48",
      image: "/images/featured-products/mob-product-cover-8.png",
      imgName: "product-cover-4",
    },
  ];

  return (
    // main con
    <section className=" xs:h-[5510px] xs:justify-center    w-full flex     lg:h-[1652px] lg:justify-center  ">
      {/* second main con */}
      <div className=" xs:w-[328px] xs:h-[5510px] xs:justify-start xs:ml-[0px] xs:space-y-[48px]     flex flex-col items-center        lg:w-[1124px] lg:h-[1652px] lg:justify-start lg:ml-[0px] lg:space-y-[80px]">
        {/* headings con */}
        <div className=" xs:w-[300px] xs:h-[154px] xs:ml-[14px]  xs:text-center       lg:w-[692px] lg:h-[102px] lg:ml-[0px] flex flex-col items-center justify-between mt-[80px] ">
          {/* heading-2 */}
          <h2 className=" xs:w-[191px] xs:h-[30px]         text-[20px] font-normal text-secondTxtClr    lg:w-[190px] lg:h-[30px] ">
            Featured Products
          </h2>
          {/* heading-1 */}
          <h1 className=" xs:w-[239px] xs:h-[64px]             text-[24px] font-bold text-txtClr      lg:w-[309px] lg:h-[32px] ">
            BESTSELLER PRODUCTS
          </h1>
          {/* paragraph */}
          <p className=" xs:w-[261px] xs:h-[40px]           text-[14px] font-normal text-secondTxtClr          lg:w-[342px] lg:h-[20px] ">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* products 1-main con */}
        <div className=" xs:w-full xs:h-auto xs:flex-col        lg:w-[1050px] lg:h-[639px]  flex lg:flex-row gap-[30px] ">
          {/* 1-product con (img & details) */}
          <div className=" xs:w-[328px] xs:h-auto          lg:w-[240px] lg:h-[639px]  cursor-pointer">
            {/* product img con) */}
            <div className=" xs:w-[328px] xs:h-[427px]         lg:w-full lg:h-[427px]">
              {/* Image for large-screen */}
              <Image
                src={featuredProducts[0].image}
                alt={featuredProducts[0].imgName}
                width={240}
                height={427}
                className="xs:hidden lg:flex bg-purple-200"
              />
              {/* Image for small-screen */}
              <Image
                src={mobfeaturedProducts[0].image}
                alt={mobfeaturedProducts[0].imgName}
                width={328}
                height={427}
                className="xs:flex  lg:hidden bg-purple-200"
              />
            </div>

            {/* product details con) */}
            <div className=" xs:w-full xs:h-[188px]           lg:w-full lg:h-[212px] flex flex-col items-center gap-[10px]">
              {/* product heading) */}
              <h3 className=" text-[16px] font-bold w-[131px] h-[24px] mt-[25px] text-txtClr flex items-center justify-center">
                Graphic Design
              </h3>
              {/* product detail) */}
              <p className=" w-[153px] h-[24px] text-[14px] font-bold text-secondTxtClr flex items-center justify-center">
                English Department
              </p>
              {/* product price con) */}
              <div className=" xs:h-[34px]     w-[108px] flex items-center justify-around       lg:h-[58px]">
                <h1 className=" xs:h-[24px]         text-[16px] font-bold w-[52px] text-mutedClr flex items-center justify-around      lg:h-[48px]">
                  $16.48
                </h1>
                <h1 className=" xs:h-[24px]         text-[16px] font-bold w-[45px] text-secondaryClr flex items-center justify-around        lg:h-[48px]">
                  $6.48
                </h1>
              </div>
              {/* product colors-selection con) */}
              <div className=" w-[82.23px] h-[16px] flex  justify-between ">
                <IoEllipse className="size-5 text-primaryClr" />
                <IoEllipse className="size-5 text-secondaryClr" />
                <IoEllipse className="size-5 text-alertClr" />
                <IoEllipse className="size-5 text-txtClr" />
              </div>
            </div>
          </div>

          {/* 2-product con (img & details) */}
          <div className=" xs:w-[328px] xs:h-auto          lg:w-[240px] lg:h-[639px]  cursor-pointer">
            {/* product img con) */}
            <div className=" xs:w-[328px] xs:h-[427px]         lg:w-full lg:h-[427px]">
              {/* Image for large-screen */}
              <Image
                src={featuredProducts[1].image}
                alt={featuredProducts[1].imgName}
                width={240}
                height={427}
                className="xs:hidden lg:flex bg-purple-200"
              />
              {/* Image for small-screen */}
              <Image
                src={mobfeaturedProducts[1].image}
                alt={mobfeaturedProducts[1].imgName}
                width={328}
                height={427}
                className="xs:flex  lg:hidden bg-purple-200"
              />
            </div>

            {/* product details con) */}
            <div className=" xs:w-full xs:h-[188px]           lg:w-full lg:h-[212px] flex flex-col items-center gap-[10px]">
              {/* product heading) */}
              <h3 className=" text-[16px] font-bold w-[131px] h-[24px] mt-[25px] text-txtClr flex items-center justify-center">
                Graphic Design
              </h3>
              {/* product detail) */}
              <p className=" w-[153px] h-[24px] text-[14px] font-bold text-secondTxtClr flex items-center justify-center">
                English Department
              </p>
              {/* product price con) */}
              <div className=" xs:h-[34px]     w-[108px] flex items-center justify-around       lg:h-[58px]">
                <h1 className=" xs:h-[24px]         text-[16px] font-bold w-[52px] text-mutedClr flex items-center justify-around      lg:h-[48px]">
                  $16.48
                </h1>
                <h1 className=" xs:h-[24px]         text-[16px] font-bold w-[45px] text-secondaryClr flex items-center justify-around        lg:h-[48px]">
                  $6.48
                </h1>
              </div>
              {/* product colors-selection con) */}
              <div className=" w-[82.23px] h-[16px] flex  justify-between ">
                <IoEllipse className="size-5 text-primaryClr" />
                <IoEllipse className="size-5 text-secondaryClr" />
                <IoEllipse className="size-5 text-alertClr" />
                <IoEllipse className="size-5 text-txtClr" />
              </div>
            </div>
          </div>

          {/* 3-product con (img & details) */}
          <div className=" xs:w-[328px] xs:h-auto          lg:w-[240px] lg:h-[639px]  cursor-pointer">
            {/* product img con) */}
            <div className=" xs:w-[328px] xs:h-[427px]         lg:w-full lg:h-[427px]">
              {/* Image for large-screen */}
              <Image
                src={featuredProducts[2].image}
                alt={featuredProducts[2].imgName}
                width={240}
                height={427}
                className="xs:hidden lg:flex bg-purple-200"
              />
              {/* Image for small-screen */}
              <Image
                src={mobfeaturedProducts[2].image}
                alt={mobfeaturedProducts[2].imgName}
                width={328}
                height={427}
                className="xs:flex  lg:hidden bg-purple-200"
              />
            </div>

            {/* product details con) */}
            <div className=" xs:w-full xs:h-[188px]           lg:w-full lg:h-[212px] flex flex-col items-center gap-[10px]">
              {/* product heading) */}
              <h3 className=" text-[16px] font-bold w-[131px] h-[24px] mt-[25px] text-txtClr flex items-center justify-center">
                Graphic Design
              </h3>
              {/* product detail) */}
              <p className=" w-[153px] h-[24px] text-[14px] font-bold text-secondTxtClr flex items-center justify-center">
                English Department
              </p>
              {/* product price con) */}
              <div className=" xs:h-[34px]     w-[108px] flex items-center justify-around       lg:h-[58px]">
                <h1 className=" xs:h-[24px]         text-[16px] font-bold w-[52px] text-mutedClr flex items-center justify-around      lg:h-[48px]">
                  $16.48
                </h1>
                <h1 className=" xs:h-[24px]         text-[16px] font-bold w-[45px] text-secondaryClr flex items-center justify-around        lg:h-[48px]">
                  $6.48
                </h1>
              </div>
              {/* product colors-selection con) */}
              <div className=" w-[82.23px] h-[16px] flex  justify-between ">
                <IoEllipse className="size-5 text-primaryClr" />
                <IoEllipse className="size-5 text-secondaryClr" />
                <IoEllipse className="size-5 text-alertClr" />
                <IoEllipse className="size-5 text-txtClr" />
              </div>
            </div>
          </div>

          {/* 4-product con (img & details) */}
          <div className=" xs:w-[328px] xs:h-auto          lg:w-[240px] lg:h-[639px]  cursor-pointer">
            {/* product img con) */}
            <div className=" xs:w-[328px] xs:h-[427px]         lg:w-full lg:h-[427px]">
              {/* Image for large-screen */}
              <Image
                src={featuredProducts[3].image}
                alt={featuredProducts[3].imgName}
                width={240}
                height={427}
                className="xs:hidden lg:flex bg-purple-200"
              />
              {/* Image for small-screen */}
              <Image
                src={mobfeaturedProducts[3].image}
                alt={mobfeaturedProducts[3].imgName}
                width={328}
                height={427}
                className="xs:flex  lg:hidden bg-purple-200"
              />
            </div>

            {/* product details con) */}
            <div className=" xs:w-full xs:h-[188px]           lg:w-full lg:h-[212px] flex flex-col items-center gap-[10px]">
              {/* product heading) */}
              <h3 className=" text-[16px] font-bold w-[131px] h-[24px] mt-[25px] text-txtClr flex items-center justify-center">
                Graphic Design
              </h3>
              {/* product detail) */}
              <p className=" w-[153px] h-[24px] text-[14px] font-bold text-secondTxtClr flex items-center justify-center">
                English Department
              </p>
              {/* product price con) */}
              <div className=" xs:h-[34px]     w-[108px] flex items-center justify-around       lg:h-[58px]">
                <h1 className=" xs:h-[24px]         text-[16px] font-bold w-[52px] text-mutedClr flex items-center justify-around      lg:h-[48px]">
                  $16.48
                </h1>
                <h1 className=" xs:h-[24px]         text-[16px] font-bold w-[45px] text-secondaryClr flex items-center justify-around        lg:h-[48px]">
                  $6.48
                </h1>
              </div>
              {/* product colors-selection con) */}
              <div className=" w-[82.23px] h-[16px] flex  justify-between ">
                <IoEllipse className="size-5 text-primaryClr" />
                <IoEllipse className="size-5 text-secondaryClr" />
                <IoEllipse className="size-5 text-alertClr" />
                <IoEllipse className="size-5 text-txtClr" />
              </div>
            </div>
          </div>
        </div>

        {/* products 2-main con */}
        <div className=" xs:w-full xs:h-auto xs:flex-col        lg:w-[1050px] lg:h-[639px]  flex lg:flex-row gap-[30px] ">
          {/* 1-product con (img & details) */}
          <div className=" xs:w-[328px] xs:h-auto          lg:w-[240px] lg:h-[639px]  cursor-pointer">
            {/* product img con) */}
            <div className=" xs:w-[328px] xs:h-[427px]         lg:w-full lg:h-[427px]">
              {/* Image for large-screen */}
              <Image
                src={featuredProducts[4].image}
                alt={featuredProducts[4].imgName}
                width={240}
                height={427}
                className="xs:hidden lg:flex bg-purple-200"
              />
              {/* Image for small-screen */}
              <Image
                src={mobfeaturedProducts[4].image}
                alt={mobfeaturedProducts[4].imgName}
                width={328}
                height={427}
                className="xs:flex  lg:hidden bg-purple-200"
              />
            </div>

            {/* product details con) */}
            <div className=" xs:w-full xs:h-[188px]           lg:w-full lg:h-[212px] flex flex-col items-center gap-[10px]">
              {/* product heading) */}
              <h3 className=" text-[16px] font-bold w-[131px] h-[24px] mt-[25px] text-txtClr flex items-center justify-center">
                Graphic Design
              </h3>
              {/* product detail) */}
              <p className=" w-[153px] h-[24px] text-[14px] font-bold text-secondTxtClr flex items-center justify-center">
                English Department
              </p>
              {/* product price con) */}
              <div className=" xs:h-[34px]     w-[108px] flex items-center justify-around       lg:h-[58px]">
                <h1 className=" xs:h-[24px]         text-[16px] font-bold w-[52px] text-mutedClr flex items-center justify-around      lg:h-[48px]">
                  $16.48
                </h1>
                <h1 className=" xs:h-[24px]         text-[16px] font-bold w-[45px] text-secondaryClr flex items-center justify-around        lg:h-[48px]">
                  $6.48
                </h1>
              </div>
              {/* product colors-selection con) */}
              <div className=" w-[82.23px] h-[16px] flex  justify-between ">
                <IoEllipse className="size-5 text-primaryClr" />
                <IoEllipse className="size-5 text-secondaryClr" />
                <IoEllipse className="size-5 text-alertClr" />
                <IoEllipse className="size-5 text-txtClr" />
              </div>
            </div>
          </div>

          {/* 2-product con (img & details) */}
          <div className=" xs:w-[328px] xs:h-auto          lg:w-[240px] lg:h-[639px]  cursor-pointer">
            {/* product img con) */}
            <div className=" xs:w-[328px] xs:h-[427px]         lg:w-full lg:h-[427px]">
              {/* Image for large-screen */}
              <Image
                src={featuredProducts[5].image}
                alt={featuredProducts[5].imgName}
                width={240}
                height={427}
                className="xs:hidden lg:flex bg-purple-200"
              />
              {/* Image for small-screen */}
              <Image
                src={mobfeaturedProducts[5].image}
                alt={mobfeaturedProducts[5].imgName}
                width={328}
                height={427}
                className="xs:flex  lg:hidden bg-purple-200"
              />
            </div>

            {/* product details con) */}
            <div className=" xs:w-full xs:h-[188px]           lg:w-full lg:h-[212px] flex flex-col items-center gap-[10px]">
              {/* product heading) */}
              <h3 className=" text-[16px] font-bold w-[131px] h-[24px] mt-[25px] text-txtClr flex items-center justify-center">
                Graphic Design
              </h3>
              {/* product detail) */}
              <p className=" w-[153px] h-[24px] text-[14px] font-bold text-secondTxtClr flex items-center justify-center">
                English Department
              </p>
              {/* product price con) */}
              <div className=" xs:h-[34px]     w-[108px] flex items-center justify-around       lg:h-[58px]">
                <h1 className=" xs:h-[24px]         text-[16px] font-bold w-[52px] text-mutedClr flex items-center justify-around      lg:h-[48px]">
                  $16.48
                </h1>
                <h1 className=" xs:h-[24px]         text-[16px] font-bold w-[45px] text-secondaryClr flex items-center justify-around        lg:h-[48px]">
                  $6.48
                </h1>
              </div>
              {/* product colors-selection con) */}
              <div className=" w-[82.23px] h-[16px] flex  justify-between ">
                <IoEllipse className="size-5 text-primaryClr" />
                <IoEllipse className="size-5 text-secondaryClr" />
                <IoEllipse className="size-5 text-alertClr" />
                <IoEllipse className="size-5 text-txtClr" />
              </div>
            </div>
          </div>

          {/* 3-product con (img & details) */}
          <div className=" xs:w-[328px] xs:h-auto          lg:w-[240px] lg:h-[639px]  cursor-pointer">
            {/* product img con) */}
            <div className=" xs:w-[328px] xs:h-[427px]         lg:w-full lg:h-[427px]">
              {/* Image for large-screen */}
              <Image
                src={featuredProducts[6].image}
                alt={featuredProducts[6].imgName}
                width={240}
                height={427}
                className="xs:hidden lg:flex bg-purple-200"
              />
              {/* Image for small-screen */}
              <Image
                src={mobfeaturedProducts[6].image}
                alt={mobfeaturedProducts[6].imgName}
                width={328}
                height={427}
                className="xs:flex  lg:hidden bg-purple-200"
              />
            </div>

            {/* product details con) */}
            <div className=" xs:w-full xs:h-[188px]           lg:w-full lg:h-[212px] flex flex-col items-center gap-[10px]">
              {/* product heading) */}
              <h3 className=" text-[16px] font-bold w-[131px] h-[24px] mt-[25px] text-txtClr flex items-center justify-center">
                Graphic Design
              </h3>
              {/* product detail) */}
              <p className=" w-[153px] h-[24px] text-[14px] font-bold text-secondTxtClr flex items-center justify-center">
                English Department
              </p>
              {/* product price con) */}
              <div className=" xs:h-[34px]     w-[108px] flex items-center justify-around       lg:h-[58px]">
                <h1 className=" xs:h-[24px]         text-[16px] font-bold w-[52px] text-mutedClr flex items-center justify-around      lg:h-[48px]">
                  $16.48
                </h1>
                <h1 className=" xs:h-[24px]         text-[16px] font-bold w-[45px] text-secondaryClr flex items-center justify-around        lg:h-[48px]">
                  $6.48
                </h1>
              </div>
              {/* product colors-selection con) */}
              <div className=" w-[82.23px] h-[16px] flex  justify-between ">
                <IoEllipse className="size-5 text-primaryClr" />
                <IoEllipse className="size-5 text-secondaryClr" />
                <IoEllipse className="size-5 text-alertClr" />
                <IoEllipse className="size-5 text-txtClr" />
              </div>
            </div>
          </div>

          {/* 4-product con (img & details) */}
          <div className=" xs:w-[328px] xs:h-auto          lg:w-[240px] lg:h-[639px]  cursor-pointer">
            {/* product img con) */}
            <div className=" xs:w-[328px] xs:h-[427px]         lg:w-full lg:h-[427px]">
              {/* Image for large-screen */}
              <Image
                src={featuredProducts[7].image}
                alt={featuredProducts[7].imgName}
                width={240}
                height={427}
                className="xs:hidden lg:flex bg-purple-200"
              />
              {/* Image for small-screen */}
              <Image
                src={mobfeaturedProducts[7].image}
                alt={mobfeaturedProducts[7].imgName}
                width={328}
                height={427}
                className="xs:flex  lg:hidden bg-purple-200"
              />
            </div>

            {/* product details con) */}
            <div className=" xs:w-full xs:h-[188px]           lg:w-full lg:h-[212px] flex flex-col items-center gap-[10px]">
              {/* product heading) */}
              <h3 className=" text-[16px] font-bold w-[131px] h-[24px] mt-[25px] text-txtClr flex items-center justify-center">
                Graphic Design
              </h3>
              {/* product detail) */}
              <p className=" w-[153px] h-[24px] text-[14px] font-bold text-secondTxtClr flex items-center justify-center">
                English Department
              </p>
              {/* product price con) */}
              <div className=" xs:h-[34px]     w-[108px] flex items-center justify-around       lg:h-[58px]">
                <h1 className=" xs:h-[24px]         text-[16px] font-bold w-[52px] text-mutedClr flex items-center justify-around      lg:h-[48px]">
                  $16.48
                </h1>
                <h1 className=" xs:h-[24px]         text-[16px] font-bold w-[45px] text-secondaryClr flex items-center justify-around        lg:h-[48px]">
                  $6.48
                </h1>
              </div>
              {/* product colors-selection con) */}
              <div className=" w-[82.23px] h-[16px] flex  justify-between ">
                <IoEllipse className="size-5 text-primaryClr" />
                <IoEllipse className="size-5 text-secondaryClr" />
                <IoEllipse className="size-5 text-alertClr" />
                <IoEllipse className="size-5 text-txtClr" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
