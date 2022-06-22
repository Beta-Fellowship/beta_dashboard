import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Image from 'next/image'
import React from "react";

import beta_logo from '../../public/beta.png'

const NavBarItem = ({ title, classprops }: { title:any, classprops:any }) => (
  <li className={`mx-4 py-1 px-5 cursor-pointer border-solid border-white border-2 rounded-md text-xs ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-2 bg-[#0B0B0B] pt-8">
      <div className="md:flex-[0.9] flex-initial justify-center items-center">
        <Image src={beta_logo} alt="Beta Logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Dashboard", "Earn Points"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
        <li className="bg-slate-300 py-4 px-4 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]"></li>
        <li className="bg-[#707070] py-1 px-7 rounded-md cursor-pointer">Angielyz</li>
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {["Dashboard", "Earn Points"].map(
              (item, index) => <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />,
            )}
          </ul>
        )}
      </div>
    </nav>
  )
}

export default Navbar;