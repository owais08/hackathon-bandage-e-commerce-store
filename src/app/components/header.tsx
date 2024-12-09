import { LiaPhoneSolid } from "react-icons/lia";
import { BsEnvelope } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Header = () => {
  return (
    <header
      className={`bg-darkBg text-lightTxtClr w-full p-4 font-bold text-[14px]`}
    >
      <div className="container mx-auto flex items-center justify-between  w-[1439px] h-[58px]">
        <div className="flex space-x-6 w-[421px] h-[46px]">
          <span className="flex items-center gap-1 ">
            <i className=" flex items-center fas fa-phone-alt text-xl w-[16px] h-[16px]">
              <LiaPhoneSolid />
            </i>{" "}
            (225) 555-0118
          </span>
          <span className="flex items-center gap-1">
            <i className="fas fa-envelope">
              <BsEnvelope />
            </i>{" "}
            michelle.rivera@example.com
          </span>
        </div>

        <div className="flex items-center text-center text-sm w-[343px] h-[44px]">
          Follow Us and get a chance to win 80% off
        </div>

        <div className="flex items-center space-x-4 w-[235px] h-[46px]">
          <span>Follow Us :</span>
          <a href="#" className="hover:underline">
            <i className="fab fa-instagram">
              <FaInstagram />
            </i>
          </a>
          <a href="#" className="hover:underline">
            <i className="fab fa-youtube">
              <FaYoutube />
            </i>
          </a>
          <a href="#" className="hover:underline">
            <i className="fab fa-facebook-f">
              <FaFacebook />
            </i>
          </a>
          <a href="#" className="hover:underline">
            <i className="fab fa-twitter">
              <FaTwitter />
            </i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
