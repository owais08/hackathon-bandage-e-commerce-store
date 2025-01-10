import React from "react";
import Link from "next/link";
import { BsCart, BsHeart, BsSearch } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      link: "#",
    },
    {
      name: "Shop",
      link: "#",
      icon: <RiArrowDropDownLine className=" size-[25px]" />,
    },
    {
      name: "About",
      link: "#",
    },
    {
      name: "Blog",
      link: "#",
    },
    {
      name: "Contact",
      link: "#",
    },
    {
      name: "Pages",
      link: "#",
    },
  ];
  const mobNavItems = [
    {
      name: "Home",
      link: "#",
    },
    {
      name: "Product",
      link: "#",
    },
    {
      name: "Pricing",
      link: "#",
    },
    {
      name: "Contact",
      link: "#",
    },
  ];
  return (
    <div>
      {/* for large screen */}

      {/* navbar main con */}
      <div className="xs:hidden lg:flex lg:w-full lg:h-[58px] lg:justify-between ">
        {/* logo con */}
        <div className="flex items-center w-[187px] h-[58px] lg:ml-[38px] lg:mt-0">
          <span className=" text-txtClr text-[24px] font-bold">Bandage</span>
        </div>

        {/* navbar-items & user-menu con */}
        <div className="lg:flex lg:items-center lg:justify-between lg:w-[1155px] lg:h-[58px] lg:mr-[17px] lg:ml-[0px] lg:mt-[0px]">
          {/* navbar-items for large-screen */}
          <ul className="lg:flex lg:items-center lg:gap-[15px] lg:text-[14px] lg:font-bold text-secondTxtClr">
            {navItems.map((item, i) => (
              <li className="lg:flex" key={i}>
                <Link className="lg:flex lg:items-center " href={item.link}>
                  {[item.name, item.icon]}
                </Link>
              </li>
            ))}
          </ul>

          {/* user-menu con */}
          <div className=" lg:flex lg:items-center lg:w-[324px] lg:h-[54px] lg:text-primaryClr">
            {/* login con */}
            <div className="lg:flex lg:justify-center lg:w-[166px] lg:h-[54px] lg:text-[14px] lg:font-bold">
              <Link className="lg:flex lg:items-center lg:gap-[5px]" href={"#"}>
                <FaRegUser className="lg:flex" />
                <span className="lg:flex">Login / Register</span>
              </Link>
            </div>

            {/* search con */}
            <div className="lg:flex lg:items-center lg:justify-center lg:w-[46px] lg:h-[46px] lg:ml-[0px] lg:mt-0">
              <BsSearch className="lg:w-[16px] lg:h-[16px]" />
            </div>
            {/* cart con */}
            <div className="lg:flex lg:items-center lg:justify-center lg:gap-[5px] lg:w-[56px] lg:h-[46px] lg:ml-0">
              <BsCart className="lg:flex" />
              <span className="lg:flex lg:text-[14px] ">1</span>
            </div>
            {/* wishlist con*/}
            <div className="lg:flex lg:items-center lg:justify-center lg:gap-[5px] lg:w-[56px] lg:h-[46px]">
              <BsHeart />
              <span className="text-[14px] ">1</span>
            </div>
          </div>
        </div>
      </div>

      {/* for small screens */}

      {/* navbar main con */}
      <div className=" xs:w-full xs:h-[532px] lg:hidden">
        {/* logo & icons con */}
        <div className=" xs:w-full xs:flex xs:h-[100px] xs:text-txtClr">
          {/* logo con */}
          <div className=" xs:w-[186px] xs:h-[58px] xs:ml-[35px] xs:mt-[23px] xs:flex xs:items-center">
            <span className="xs:text-[24px] xs:font-bold ">Bandage</span>
          </div>
          {/* search con */}
          <div className=" xs:w-[24px] xs:h-[24px] xs:ml-[26px] xs:mt-[40px]">
            <BsSearch className="xs:w-[24px] xs:h-[24px]" />
          </div>
          {/* cart con */}
          <div className=" xs:w-[28px] xs:h-[28px] xs:ml-[24px] xs:mt-[38px]">
            <IoCartOutline className="xs:w-[28px] xs:h-[28px]" />
          </div>
          {/* menu con */}
          <div className=" xs:w-[30px] xs:h-[30px] xs:ml-[32px] xs:mt-[38px]">
            <BiMenuAltRight className="xs:w-[30px] xs:h-[30px]" />
          </div>
        </div>

        {/* navbar-items con */}
        <div className=" xs:w-[123px] xs:h-[270px] xs:ml-[145px] xs:mt-[64px]">
          <ul className="xs:text-center xs:space-y-[30px]">
            {mobNavItems.map((item, i) => (
              <li
                className="xs:text-[30px] xs:font-normal xs:text-secondTxtClr "
                key={i}
              >
                <Link href={item.link}>{[item.name]}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
