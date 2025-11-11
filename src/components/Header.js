const Header = () => {
  return (
    <div className=" flex border-cyan-500 m-4 border-2 rounded-lg">
      <div className="items-center px-4 mx-4">
        <img
          src="https://m.media-amazon.com/images/I/51K9YDu2QZL._AC_UF1000,1000_QL80_.jpg"
          alt="logo"
          className="w-28 object-cover p-2"
        />
      </div>
      <div className="flex items-center w-full bg-neutral-200">
        <ul className="flex flex-row text-center w-full justify-end font-semibold text-xl">
          <li className="p-4 m-4">Home</li>
          <li className="p-4 m-4">About</li>
          <li className="p-4 m-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
