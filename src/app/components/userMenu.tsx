import { FaUser, FaSearch, FaShoppingCart, FaHeart } from "react-icons/fa";

const UserMenu = () => {
  return (
    <div className="flex items-center gap-6 text-blue-500 text-sm font-semibold">
      {/* Login/Register */}
      <div className="flex items-center gap-2 cursor-pointer hover:text-blue-700">
        <FaUser />
        <span className="flex items-center">Login / Register</span>
      </div>

      {/* Search */}
      <div className="cursor-pointer hover:text-blue-700">
        <FaSearch />
      </div>

      {/* Cart */}
      <div className="flex items-center gap-1 cursor-pointer hover:text-blue-700">
        <FaShoppingCart />
        <span>1</span>
      </div>

      {/* Wishlist */}
      <div className="flex items-center gap-1 cursor-pointer hover:text-blue-700">
        <FaHeart />
        <span>1</span>
      </div>
    </div>
  );
};

export default UserMenu;
