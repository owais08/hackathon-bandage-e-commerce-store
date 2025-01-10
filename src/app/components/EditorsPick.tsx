const EditorsPick = () => {
  return (
    // main section
    <section className="bg-background xs:w-full xs:h-auto xs:flex xs:justify-center      lg:w-full lg:h-[770px] lg:flex lg:justify-center ">
      {/* main con */}
      <div className=" xs:w-[333px] xs:h-auto xs:py-[80px] space-y-[48px]       lg:w-[1050px] lg:h-[770px] lg:py-[0px] ">
        {/* heading & paragraph con */}
        <div className=" xs:w-full xs:h-auto xs:flex xs:flex-col xs:items-center xs:space-y-[10px] xs:text-center       lg:w-[607px] lg:h-[62px] lg:ml-[221.5px] lg:mt-[80px] lg:flex lg:flex-col lg:items-center lg:justify-between ">
          <h1 className=" xs:w-[187px]       text-[24px] font-bold h-[32px] text-txtClr      lg:w-[187px] ">
            EDITOR’S PICK
          </h1>
          <p className=" xs:w-[196px] xs:h-[40px]       text-[14px] font-normal text-secondTxtClr     lg:w-[342px] lg:h-[20px] ">
            Problems trying to resolve the conflict between{" "}
          </p>
        </div>

        {/* products main con */}
        <div className=" xs:w-full xs:h-auto xs:space-y-[30px]      lg:w-[1050px] lg:h-[500px] lg:mt-[48px] lg:flex lg:gap-[30px] lg:space-y-0 lg:text-txtClr">
          <div className=" xs:bg-[url('/images/editors-pick/men2.png')] xs:bg-no-repeat  xs:w-full xs:h-[500px]        lg:bg-[url('/images/editors-pick/men.png')] lg:w-[510px] lg:h-[500px] lg:shadow-lg hover:shadow-2xl cursor-pointer">
            <button
              type="submit"
              className="           bg-lightBg w-[170px] h-[48px] ml-[31px] mt-[426px] text-[16px] font-bold"
            >
              MEN
            </button>
          </div>
          <div className=" xs:bg-[url('/images/editors-pick/women2.png')] xs:bg-no-repeat  xs:w-full xs:h-[500px]              lg:bg-[url('/images/editors-pick/women.png')] lg:w-[240px] lg:h-[500px] lg:shadow-lg hover:shadow-2xl cursor-pointer">
            <button
              type="submit"
              className=" xs:ml-[63.5px]        bg-lightBg w-[136px] h-[48px] mt-[434px] lg:ml-[21px] text-[16px] font-bold"
            >
              WOMEN
            </button>
          </div>
          <div className=" xs:w-full xs:h-[500px]             lg:w-[240px] lg:h-[500px] space-y-[16px]">
            <div className="xs:bg-[url('/images/editors-pick/accessories2.png')] xs:bg-no-repeat  xs:w-full             lg:bg-[url('/images/editors-pick/accessories.png')] lg:w-[240px] h-[242px] lg:shadow-lg hover:shadow-2xl cursor-pointer">
              <button
                type="submit"
                className="bg-lightBg w-[170px] h-[48px] ml-[14px] mt-[171px] text-[16px] font-bold"
              >
                ACCESSORIES
              </button>
            </div>
            <div className=" xs:bg-[url('/images/editors-pick/kids2.png')] xs:bg-no-repeat  xs:w-full                lg:bg-[url('/images/editors-pick/kids.png')] lg:w-[240px] h-[242px] lg:shadow-lg hover:shadow-2xl cursor-pointer">
              <button
                type="submit"
                className="bg-lightBg w-[120px] h-[48px] ml-[18px] mt-[176px] text-[16px] font-bold"
              >
                KIDS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorsPick;
