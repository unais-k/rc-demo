import logo from "/Logo.png";
const Navbar = () => {
  return (
    <header className="flex items-center lg:my-5 my-3 mx-4 md:mx-6 lg:mx-12 xl:mx-24 justify-between ">
      <a href="#">
        <img
          src={logo}
          alt="Right Care Logo"
          className="w-36 lg:w-40 xl:w-48"
        />
      </a>
      <nav className="flex gap-8 lg:gap-14 xl:gap-20 text-[14git px]">
        <ul className="lg:flex hidden lg:gap-6 xl:gap-11 items-center tracking-tight">
          <li>
            <a href="#">FAQ</a>
          </li>

          <li>
            <a href="#">Our Services</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Career</a>
          </li>
        </ul>
        <a
          href="#"
          className="px-2 md:px-4 py-2 md:py-[11px] h-fit hover:bg-white hover:border-gold border-2 border-white  hover:animate-BorderGrow hover:text-gold bg-gold rounded-full text-white font-semibold tracking-wide hidden sm:block text-[10px] sm:text-[11.5px]"
        >
          Book Appointment
        </a>
        <div className="hamburger-menu lg:hidden my-auto">
          <input id="menu__toggle" type="checkbox" />
          <label className="menu__btn" htmlFor="menu__toggle">
            <span></span>
          </label>

          <ul className="menu__box">
            <li className="sm:hidden">
              <a
                className="menu__item  bg-gold/90 hover:text-black text-white"
                href="#"
              >
                Book Appointment
              </a>
            </li>
            <li>
              <a className="menu__item hover:bg-gold/60" href="#">
                FAQ
              </a>
            </li>
            <li>
              <a className="menu__item hover:bg-gold/60" href="#">
                Our Services
              </a>
            </li>
            <li>
              <a className="menu__item hover:bg-gold/60" href="#">
                Contact Us
              </a>
            </li>
            <li>
              <a className="menu__item hover:bg-gold/60" href="#">
                About Us
              </a>
            </li>
            <li>
              <a className="menu__item hover:bg-gold/60" href="#">
                Career
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
