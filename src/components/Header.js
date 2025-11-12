import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" flex border-cyan-100 m-4 border-2 rounded-lg">
      <div className="items-center px-4 mx-4">
        <img
          src="https://m.media-amazon.com/images/I/51K9YDu2QZL._AC_UF1000,1000_QL80_.jpg"
          alt="logo"
          className="w-28 object-cover p-2"
        />
      </div>
      <div className="flex items-center w-full bg-neutral-200">
        <ul className="flex flex-row text-center w-full justify-end font-semibold text-xl">
          <Link to="/" className="p-4 m-4">
            Home
          </Link>
          <Link to="/about" className="p-4 m-4">
            About
          </Link>
          <Link to="/cart" className="p-4 m-4">
            Cart
          </Link>
        </ul>
      </div>
    </div>
  );
};
export default Header;
