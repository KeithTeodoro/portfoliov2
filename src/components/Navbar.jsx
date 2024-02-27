import { useState } from "react";
import HamburgerMenu from "../assets/menu.png";
import CloseHamburgerMenu from "../assets/close.png";
import Icons from "../components/Icons";
import FacebookLogo from "../assets/facebook.png";
import GithubLogo from "../assets/GitHub.png";
import LinkedInLogo from "../assets/LinkedIn.png";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["Home", "About", "Tools", "Works", "Contact"];
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <>
      {/* Mobile Version */}
      <div className="md:hidden w-full sticky top-0">
        <div className="bg-dark py-3 px-4 flex items-center justify-between">
          <h1 className="font-ibmSerif font-bold text-[30px] text-slate-50">
            Htk
          </h1>
          <div className="menu ">
            <img
              src={isOpen ? CloseHamburgerMenu : HamburgerMenu}
              onClick={() => setIsOpen((prev) => !prev)}
              className="w-6 h-6 cursor-pointer invert"
            />
          </div>
        </div>
        <div
          className={`flex flex-col items-center bg-dark transition-opacity ease-in-out duration-500 rounded-b-md ${
            isOpen ? "opacity-100 w-full" : "opacity-0"
          }`}
          style={{ position: "absolute", top: "100%", left: 0, width: "100%" }}
        >
          {isOpen && (
            <ul className="text-center pb-6 w-[80%]">
              {links.map((link, index) => (
                <li
                  key={index}
                  className="font-ibmSans font-semibold text-xl text-slate-50 w-full border-b-2 border-slate-100/10 py-3 tracking-wide"
                >
                  <NavLink
                    to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    onClick={closeMenu}
                  >
                    {link.toUpperCase()}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      {/* Desktop version */}
      <div className="hidden md:flex md:flex-col md:justify-between min-h-screen bg-dark w-[300px] text-slate-50 px-10 py-16 ">
        <div id="navbar-content">
          <h1 className="font-ibmSerif font-bold lg:text-[30px] text-2xl mb-16 ">
            Htk
          </h1>
          <ul className="flex flex-col gap-4 xl:gap-[20px] font-ibmSans mb-10">
            {links.map((link) => (
              <li key={link}>
                <NavLink to={link === "Home" ? "/" : `/${link.toLowerCase()}`}>
                  {link.toUpperCase()}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div id="icons" className="flex flex-col gap-3 xl:gap-[12px]">
          <Icons
            src={LinkedInLogo}
            url="https://www.linkedin.com/in/keithandreteodoro/"
          />
          <Icons src={GithubLogo} url="https://github.com/KeithTeodoro" />
          <Icons src={FacebookLogo} url="https://www.facebook.com/Htieek/" />
        </div>
      </div>
    </>
  );
}
