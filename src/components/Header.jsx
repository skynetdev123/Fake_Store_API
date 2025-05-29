import { Link } from "react-router-dom";
import viewcart from "../assets/view-cart.svg";

const Header = () => {
  return (
    <header className="flex h-20 items-center justify-between px-4 shadow-sm md:px-16 lg:px-24 2xl:mx-auto 2xl:max-w-[1024px]">
      <div className="text-xl font-semibold">FAKE STORE</div>
      <Link
        to="/cart"
        className="my-1 flex w-fit items-center justify-center gap-2 rounded-sm border border-orange-500 bg-orange-500 px-3 py-1 text-white hover:bg-orange-600/90  hover:text-white sm:px-4 sm:py-2"
      >
        <img src={viewcart} alt="cart icon" />
        View Cart
      </Link>
    </header>
  );
};

export default Header;
