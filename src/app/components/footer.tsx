import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  let companyItemList = [
    {
      name: "About Us",
      link: "#",
    },
    {
      name: "Carrier",
      link: "#",
    },
    {
      name: "We are hiring",
      link: "#",
    },
    {
      name: "Blog",
      link: "#",
    },
  ];
  let legalItemList = [
    {
      name: "About Us",
      link: "#",
    },
    {
      name: "Carrier",
      link: "#",
    },
    {
      name: "We are hiring",
      link: "#",
    },
    {
      name: "Blog",
      link: "#",
    },
  ];
  let featuresItemList = [
    {
      name: "Business Marketing",
      link: "#",
    },
    {
      name: "User Analytic",
      link: "#",
    },
    {
      name: "Live Chat",
      link: "#",
    },
    {
      name: "Unlimited Support",
      link: "#",
    },
  ];
  let resourcesItemList = [
    {
      name: "IOS & Android",
      link: "#",
    },
    {
      name: "Watch a Demo",
      link: "#",
    },
    {
      name: "Customers",
      link: "#",
    },
    {
      name: "API",
      link: "#",
    },
  ];

  return (
    // footer
    <footer className=" xs:h-auto     w-full       lg:h-[488px] ">
      {/* logo & social-networks con */}
      <div className=" xs:h-auto      w-full     lg:h-[142px] flex flex-col items-center lg:justify-center">
        <div className=" xs:w-[325px] xs:h-[173px]           lg:w-[1050px] lg:h-[138px] flex items-center">
          <div className=" xs:w-[243px] xs:h-[93.5px] xs:flex-col          lg:w-full lg:h-[58px] flex lg:flex-row items-center justify-between">
            {/* logo con */}
            <div className=" w-[236px] h-[58px]">
              <div className=" flex items-center w-[187px] h-[58px]  ">
                <span className=" text-txtClr text-[24px] font-bold w-[114px] h-[32px]">
                  Bandage
                </span>
              </div>
            </div>

            {/* social-networks con */}
            <div className=" w-[243px] h-[24px] lg:flex lg:justify-center">
              <div className=" w-[112px] h-[24px] flex justify-between text-primaryClr ">
                <Link href={"#"}>
                  <FaFacebook className=" w-[24px] h-[24px]" />
                </Link>
                <Link href={"#"}>
                  <FaInstagram className=" w-[24px] h-[24px]" />
                </Link>
                <Link href={"#"}>
                  <FaTwitter className=" w-[24px] h-[24px]" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <hr className="  xs:hidden lg:flex       lg:bg-outlineGreyClr w-[1057px] h-[2px] mb-[4px] " />
      </div>

      {/* all links & form con */}
      <div className=" xs:h-auto      bg-lightBg w-full lg:h-[272px] flex justify-center">
        <div className=" xs:w-[321px] xs:h-auto xs:py-[70px]            lg:w-[1050px] lg:h-[270px] lg:flex lg:items-center">
          <div className=" xs:h-auto xs:space-y-[30px]         w-full lg:h-[170px] lg:flex lg:justify-between lg:space-y-[0px]">
            {/* Company Info con */}
            <div className="w-[148px] h-[170px] space-y-[20px]">
              {/* Company Info heading */}
              <h1 className=" w-[119px] h-[24px] text-txtClr text-[16px] font-bold ">
                Company Info
              </h1>

              {/* Company Info list */}
              <ul className=" w-[102px] h-[126px] flex flex-col justify-between text-[14px] font-bold text-secondTxtClr">
                {companyItemList.map((item, i) => (
                  <li className="" key={i}>
                    <Link className="  " href={item.link}>
                      {[item.name]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Info con */}
            <div className=" w-[152px] h-[170px] space-y-[20px]">
              {/* Legal Info heading */}
              <h1 className=" w-[46px] h-[24px] text-txtClr text-[16px] font-bold ">
                Legal
              </h1>

              {/* Legal Info list */}
              <ul className=" w-[102px] h-[126px] flex flex-col justify-between text-[14px] font-bold text-secondTxtClr">
                {legalItemList.map((item, i) => (
                  <li className="" key={i}>
                    <Link className="  " href={item.link}>
                      {[item.name]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Features con */}
            <div className=" w-[148px] h-[170px] space-y-[20px]">
              {/* Features heading */}
              <h1 className=" w-[74px] h-[24px] text-txtClr text-[16px] font-bold ">
                Features
              </h1>

              {/* Features list */}
              <ul className=" w-[149px] h-[126px] flex flex-col justify-between text-[14px] font-bold text-secondTxtClr">
                {featuresItemList.map((item, i) => (
                  <li className="" key={i}>
                    <Link className="  " href={item.link}>
                      {[item.name]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources con */}
            <div className=" w-[152px] h-[170px] space-y-[20px]">
              {/* Resources heading */}
              <h1 className=" w-[88px] h-[24px] text-txtClr text-[16px] font-bold ">
                Resources
              </h1>

              {/* Resources list */}
              <ul className=" w-[112px] h-[126px] flex flex-col justify-between text-[14px] font-bold text-secondTxtClr">
                {resourcesItemList.map((item, i) => (
                  <li className="" key={i}>
                    <Link className="  " href={item.link}>
                      {[item.name]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* form(Get-In-Touch) con */}
            <div className=" w-[321px] h-[131px] space-y-[20px]">
              {/* form(Get-In-Touch) heading */}
              <h1 className=" w-[107px] h-[24px] text-txtClr text-[16px] font-bold ">
                Get In Touch
              </h1>

              {/* form con */}
              <div className=" w-[321px] h-[87px] flex flex-col justify-between">
                {/* form */}
                <form
                  action="#"
                  className=" w-full h-[58px] flex outline outline-1 outline-outlineGreyClr rounded"
                >
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="bg-inputBgClr w-[204px] h-[58px] rounded-s placeholder:text-secondTxtClr placeholder:text-[14px] placeholder:px-[20px] "
                  />
                  <button className="bg-primaryClr w-[117px] h-[58px] text-lightTxtClr text-[14px] font-normal outline outline-1 outline-outlineGreyClr rounded-e">
                    Subscribe
                  </button>
                </form>

                {/* text */}
                <span className=" w-[155px] h-[28px] text-secondTxtClr text-[12px] font-normal flex items-center">
                  Lore imp sum dolor Amit
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* copywright con */}
      <div className=" xs:h-auto        w-full lg:h-[74px] lg:flex lg:justify-center">
        <div className="     xs:w-full xs:h-auto xs:py-[25px]      lg:w-[1050px] lg:h-[74px] lg:flex lg:items-center ">
          <div className="   xs:w-full xs:h-[48px] xs:justify-center      flex text-secondTxtClr text-[14px] font-bold      lg:w-[600px] lg:h-[24px] lg:justify-start">
            <span className="  xs:hidden      lg:flex lg:w-[350px] lg:h-[24px] ">
              Made With Love By Finland All Right Reserved
            </span>
            <span className=" xs:flex xs:w-[200px] xs:h-[48px]  xs:text-center     lg:hidden">
              Made With Love By Finland All Right Reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
