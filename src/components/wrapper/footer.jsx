import TwitterLogo from "/twitter-24.png";
import FacebookLogo from "/facebook-24.png";
import InstagramLogo from "/instagram-24.png";
import LinkedInLogo from "/linkedin-24.png";

const Footer = () => {
  return (
    <footer className="bg-darkBlue flex flex-col gap-10 p-10 md:flex-row items-center font-light text-white lg:px-24 text-[11px]">
      <section className="w-full xl:w-1/2">
        <div className="w-full xl:w-1/2 ">
          <h3 className="font-semibold text-sm">Contact Us</h3>
          <p className=" font-normal my-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit, sed do
            euismod tempor incididunt ut labore et.
          </p>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-5 py-4 mb-5 rounded-lg text-black placeholder:text-black "
          />
          <p>Copyright Right Care 2016. All Rights Reserved</p>
        </div>
      </section>
      <section className="w-full xl:w-1/2 flex flex-row gap-10 xl:gap-32 justify-between sm:justify-start sm:gap-32 xl:justify-center xl:py-10">
        <div>
          <h3 className="font-semibold text-sm">Quick Links</h3>
          <ul className=" mt-7 flex flex-col gap-2">
            <li>FAQ</li>
            <li>Contact Us</li>
            <li> Our Services</li>
            <li>About Us</li>
            <li>Career</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-sm">Contact Us</h3>
          <ul className="my-6 flex flex-col gap-2">
            <li>+971 4 289 1200</li>
            <li>Office Hours: 8 AM to 5 PM</li>
            <li>Fax: +971 4 288 3806</li>
            <li>P.O.Box: 446055, Dubai, UAE</li>
          </ul>
          <div className="flex gap-6 xl:justify-between">
            <a href="https://twitter.com">
              <img width="20px" src={TwitterLogo} alt="Twitter" />
            </a>
            <a href="https://instagram.com">
              <img width="20px" src={InstagramLogo} alt="Instagram" />
            </a>
            <a href="https://facebook.com">
              <img width="20px" src={FacebookLogo} alt="Facebook" />
            </a>
            <a href="https://linkedin.com">
              <img width="20px" src={LinkedInLogo} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
