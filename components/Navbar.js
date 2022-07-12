import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaCameraRetro } from "react-icons/fa";

import { useEffect, useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  // changing navbar color state on scroll down.
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  // toggle menu icon
  const handleNav = () => {
    setNav(!nav);
  };

  // change navbar color on scroll hook.
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ background: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <a className="flex items-center">
            <h1
              style={{ color: `${textColor}` }}
              className="font-bold text-4xl flex p-4"
            >
              Captur
            </h1>
            <FaCameraRetro size={40} 
            style={{ color: `${textColor}` }} onClick={handleNav} />{" "}
          </a>
        </Link>

        <ul style={{ color: `${textColor}` }} className=" hidden sm:flex ">
          <li className="p-4">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4">
            <Link href="/#gallery">Gallary</Link>
          </li>
          <li className="p-4">
            <Link href="/work">Work</Link>
          </li>
          <li className="p-4">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        {/* mobile button */}
        <div
          onClick={handleNav}
          style={{ color: `${textColor}` }}
          className="block sm:hidden z-10"
        >
          {nav ? <AiOutlineClose size={20}
             /> : <AiOutlineMenu size={20} />}
        </div>
        {/* mobile menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen  bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen  bg-black text-center ease-in duration-300 cursor-pointer"
          }
        >
          <ul>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
              <Link href="/">Home</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
              <Link href="/#gallery">Gallery</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
              <Link href="/work">Work</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
