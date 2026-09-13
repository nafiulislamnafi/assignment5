import devstackLogo from "../assets/logo-text.png";
const Navbar = () => {
  return (
              <nav className="  sticky top-0 z-50 bg-white shadow-sm">
    <div>
      <div className=" container mx-auto flex justify-between items-center p-4 text-gray-700">
        <img src={devstackLogo} alt="DevStack Logo" />
        <div className=" font-semibold flex justify-center gap-4 space-x-4">
          <a href=""  className="text-pink-600"> Home</a>
          <a href=""> Technologies</a>
          <a href=""> Projects</a>
          <a href=""> About</a>
          <a href=""> Contact</a>
        </div>
              <div>
          <button className=" btn border-none bg-transparent p-0 text-sm text-gray-700 mr-3">
            Sign In
          </button>
       <button className=" btn rounded-lg text-white px-5 py-2 bg-pink-600 text-sm font-bold shadow-sm">
            Sign Up
          </button>
        </div>
      </div>
    </div>
              </nav>
  );
};

export default Navbar;
