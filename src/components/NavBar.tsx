import { useState } from "react";
import logo from "../assets/logo.jpg";
//import { GrLanguage } from "react-icons/gr";
import { FaXmark, FaBars } from "react-icons/fa6";
import { LANGUAGES } from "../constants";
import { useTranslation } from "react-i18next";

function NavBar() {
  const { i18n, t } = useTranslation();
  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    {
      link: "Nickname",
      path: "nickname",
    },
    {
      link: "Avatar",
      path: "avatar",
    },
    {
      link: "Codex",
      path: "codex",
    },
  ];

  return (
    <>
      <nav className="bg-[#be1212] md:px-14 p-4 max-w-screen-2xl border-b border-black mx-auto text-primary fixed top-0 right-0 left-0 rounded-b-lg">
        <div className="text-xl container mx-auto flex justify-between items-center font-medium">
          <div className="flex space-x-14 items-center">
            {/* Logo */}
            <a
              href="/"
              className="text-2x1 font-bold flex items-center space-x-3 text-primary"
            >
              <img
                src={logo}
                alt=""
                className="rounded-lg inline-block w-10 items-center"
              />
              <span className="animate-pulse">Dead Inside Generator</span>
            </a>
            {/* nav-items */}
            <ul className="md:flex space-x-12 hidden">
              {navItems.map(({ link, path }) => (
                <a
                  key={link}
                  href={path}
                  className="block hover:text-secondary"
                >
                  {t(link)}
                </a>
              ))}
            </ul>
          </div>
          {/* Language */}
          {/* <div className="space-x-12 hidden md:flex items-center">
            <a
              href="/"
              className="hidden lg:flex items-center hover:text-secondary"
            >
              <GrLanguage className="mr-2" /> <span>Language</span>
            </a>
          </div> */}
          <div className="space-x-12 hidden md:flex items-center ">
            <select
              id="language-menu"
              defaultValue={i18n.language}
              onChange={onChangeLang}
              className="gradientBg hidden lg:flex items-center hover:text-secondary rounded-lg border border-black"
            >
              {LANGUAGES.map(({ code, label }) => (
                <option
                  key={code}
                  value={code}
                  className="bg-black text-white text-center"
                >
                  {label}
                </option>
              ))}
            </select>
          </div>

          {/* Mobile menu-btn */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:text-secondary"
            >
              {isMenuOpen ? (
                <FaXmark className="w-6 h-6 text-primary" />
              ) : (
                <FaBars className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`space-y-4 px-4 pt-24 pb-5 bg-primary text-[#be1212] text-xl border-2 border-[#be1212] rounded-2xl ${
          isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
        }`}
      >
        {navItems.map(({ link, path }) => (
          <a key={link} href={path} className="block hover:text-secondary ">
            {link}
          </a>
        ))}
      </div>
    </>
  );
}

export default NavBar;
