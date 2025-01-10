import { LiaPhoneSolid } from "react-icons/lia";
import { BsEnvelope } from "react-icons/bs";
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import Navbar from "./navbar";

const Header = () => {
  return (
    // main header & navbar con
    <div className="lg:space-y-[12px]">
      {/* header con */}
      <header className="bg-darkBg text-lightTxtClr xs:hidden lg:flex items-center justify-between w-full h-[58px] ">
        {/* contact info con */}
        <div className=" flex items-center gap-[10px] w-[421px] h-[46px] ml-[24px]">
          {/* phone-num con */}
          <div className=" flex items-center justify-center gap-[5px] w-[143px] h-[44px]">
            {/* phone-icon */}
            <LiaPhoneSolid />
            {/* phone-num */}
            <span className=" text-[14px] font-bold">(225) 555-0118</span>
          </div>

          {/* email con */}
          <div className=" flex items-center justify-center gap-[5px] w-[268px] h-[44px] ">
            {/* email-icon */}
            <BsEnvelope />
            {/* email */}
            <span className=" text-[14px] font-bold">
              michelle.rivera@example.com
            </span>
          </div>
        </div>

        {/* news-letter con */}
        <div className="  flex items-center justify-center w-[343px] h-[44px] ">
          <p className="text-[14px] font-bold">
            Follow Us and get a chance to win 80% off
          </p>
        </div>

        {/* social-network con */}
        <div className=" flex items-center justify-evenly w-[235px] h-[46px] mr-[24px]">
          <span className=" flex text-[14px] font-bold">Follow Us&ensp; :</span>

          {/* social-icons con */}
          <div className=" flex items-center justify-around w-[120px] h-[26px]">
            <Link href={"#"}>
              <FaInstagram />
            </Link>
            <Link href={"#"}>
              <FaYoutube />
            </Link>
            <Link href={"#"}>
              <FaFacebook />
            </Link>
            <Link href={"#"}>
              <FaTwitter />
            </Link>
          </div>
        </div>
      </header>

      {/* navbar component */}
      <Navbar />
    </div>
  );
};

export default Header;
