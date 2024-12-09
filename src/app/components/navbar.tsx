import Link from "next/link";
import UserMenu from "./userMenu";

const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      link: "#",
    },
    {
      name: "Shop",
      link: "#",
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
  return (
    <header className="bg-lightBg shadow md:px-20 flex justify-between items-center w-[1439px] h-[58px]">
      <div className="flex items-center text-xl font-bold w-[187px] h-[58px] my-70">
        Bandage
      </div>
      <div className="hidden md:flex items-center gap-6 text-gray-600  w-[1155px] h-[58px] ">
        {navItems.map((item, i) => (
          <div key={i}>
            <Link href={item.link}>{item.name}</Link>
          </div>
        ))}
      </div>
      <UserMenu />
      <div className="text-gray-600 md:hidden">☰</div>
    </header>
  );
};

export default Navbar;
