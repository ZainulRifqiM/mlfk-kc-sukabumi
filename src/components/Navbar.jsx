import React from "react";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import logo from "../assets/Logo BPJS.png";

const Navbar = () => {
  const navItems = [
    { link: "Faskes", path: "/" },
    { link: "Laporan", path: "laporan" },
    { link: "Form", path: "form" },
    { link: "Evidence", path: "evidence" },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="py-2 fixed w-full top-0 z-30 backdrop-blur-2xl bg-blackBg bg-opacity-80 border-b border-gray-50 shadow-md">
        <div className="max-w-screen-xl flex items-center justify-between md:px-8 p-4 mx-auto ">
          <div className="">
            <img src={logo} alt="Logo" className="w-40" />
          </div>

          <div className="hidden md:flex justify-between space-x-8">
            <ul className="flex space-x-16 items-center">
              {navItems.map((item) => (
                <li
                  key={item.path} // Use a unique key, such as the path
                  className="cursor-pointer text-textColor hover:text-secondaryColor transition duration-300 ease-in-out font-medium hover:underline hover:font-bold"
                >
                  <a href={item.path}>{item.link}</a>
                </li>
              ))}
            </ul>
          </div>
          <button
            className="hidden md:flex py-1 px-2 bg-primaryColor text-[#333] rounded-md hover:font-medium hover:bg-secondaryColor transition duration-300 ease-in-out"
            onClick={() => {
              window.open(
                "https://bpjskesehatano365-my.sharepoint.com/:x:/g/personal/marina_devi_bpjs-kesehatan_go_id/EQVgwy5EjlFGh0zva1ZHF8sBdQBKc2grNs8oiESh8_wWfw?e=7DKZcQ",
                "_blank" // This specifies that the link should open in a new tab
              );
            }}
          >
            Rekap Keluhan
          </button>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-primaryColor font-semibold hover:text-primaryColor focus:outline-none items-center text-xl"
            >
              {isOpen ? <IoIosClose /> : <RxHamburgerMenu />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden fixed h-auto bg-blackBg bg-opacity-80 w-full pb-4">
            <ul className="p-2 space-y-2 px-4 items-center">
              {navItems.map((item) => (
                <li
                  key={item.path} // Use a unique key, such as the path
                  className="cursor-pointer text-textColor hover:text-secondaryColor transition duration-300 ease-in-out font-medium hover:underline hover:font-bold"
                >
                  <a href={item.path}>{item.link}</a>
                </li>
              ))}
              <button
                className="py-1 px-2 bg-primaryColor text-white rounded-md hover:font-medium hover:bg-secondaryColor transition duration-300 ease-in-out"
                onClick={() => {
                  window.open(
                    "https://bpjskesehatano365-my.sharepoint.com/:x:/g/personal/marina_devi_bpjs-kesehatan_go_id/EQVgwy5EjlFGh0zva1ZHF8sBdQBKc2grNs8oiESh8_wWfw?e=7DKZcQ",
                    "_blank" // This specifies that the link should open in a new tab
                  );
                }}
              >
                Rekap Keluhan
              </button>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
