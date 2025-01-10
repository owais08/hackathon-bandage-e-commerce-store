const Hero = () => {
  return (
    <section className=" xs:bg-[url('/images/banner/banner2.png')]  xs:bg-cover xs:flex xs:w-full xs:h-[753px]     lg:bg-[url('/images/banner/banner1.png')] lg:bg-cover lg:flex lg:w-full lg:h-[716px] lg:mt-[8px]">
      <div className="  xs:w-full xs:h-[705px] xs:mt-[48px] xs:flex       lg:w-[599px] lg:h-[651px] lg:ml-[197.5px] lg:mt-[48px] lg:flex lg:items-center">
        <div className="  xs:w-full xs:h-[560px] xs:mt-[112px] xs:flex      lg:w-[599px] lg:h-[427px] lg:ml-[0px] lg:mt-[0px] lg:flex lg:items-center lg:justify-between">
          <div className="  xs:w-full xs:h-[381px] xs:mt-[48px] xs:flex xs:flex-col xs:items-center xs:justify-between        lg:w-[599px] lg:h-[331px] lg:flex lg:flex-col lg:items-start lg:ml-[0px] lg:mt-[0px] lg:space-y-[35px] text-lightTxtClr  ">
            <span className=" xs:text-[16px] xs:font-bold xs:w-[122px] xs:h-[24px] xs:flex xs:items-center       lg:text-[16px] lg:font-bold lg:w-[122px] lg:h-[24px] ">
              SUMMER 2020
            </span>

            <h1 className=" xs:text-[40px] xs:font-bold xs:w-[268px] xs:h-[100px] xs:flex xs:items-center xs:text-center       lg:text-[58px] lg:font-bold lg:w-[565px] lg:h-[80px] ">
              NEW COLLECTION
            </h1>

            <p className=" xs:text-[20px] xs:font-normal xs:w-[291px] xs:h-[90px] xs:flex xs:items-center xs:text-center       lg:text-[20px] lg:font-normal lg:w-[369px] lg:h-[60px] lg:text-start ">
              We know how large objects will act, but things on a small scale.
            </p>

            <button
              type="submit"
              className="bg-successClr xs:w-[221px] xs:h-[62px] xs:text-[24px] xs:font-bold xs:rounded-[5px]       lg:w-[228px] lg:h-[62px] lg:text-[24px] lg:font-bold lg:rounded-[5px]"
            >
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
