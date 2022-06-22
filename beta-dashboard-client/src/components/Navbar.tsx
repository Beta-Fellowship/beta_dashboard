import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Image from 'next/image'
import React from "react";

import beta_logo from '../../public/beta.png'
import profile from '../../public/profile2.png'

const NavBarItem = ({ title, classprops, extraprops }: { title: any, classprops: any, extraprops:any }) => (
  <div className={`${extraprops}`}>
    <li className={`py-2 px-7 bg-[#0B0B0B] cursor-pointer rounded`}>
      <p className={`${classprops} font-['Poppins'] text-xs`}>{title}</p>
    </li>
  </div>
  
);

const Navbar = ({page}:{page:string}) => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-2 bg-[#0B0B0B] pt-8">
      <div className="md:flex-[0.9] flex-initial justify-center items-center">
        <Image src={beta_logo} alt="Beta Logo" width={100} height={60} className="object-scale-down cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Dashboard", "Earn Points"].map((item, index) => (
          item == page ? <NavBarItem key={item + index} title={item} extraprops="py-0.5 px-0.5 mx-4 rounded-md bg-gradient-to-r from-[#FFD42B] to-[#53A548]" classprops="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD42B] to-[#53A548]" /> : <NavBarItem key={item + index} title={item} extraprops="" classprops="" />
        ))}
        <li className="flex flex-row justify-start mx-4 cursor-pointer space-x-2">
          <Image src={profile} alt="Beta Logo" width={28} height={28} className="object-scale-down cursor-pointer" />
          <p className="bg-[#707070] bg-opacity-40 py-1 px-7 rounded-md cursor-pointer">Angielyz</p>
        </li>
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
              (item, index) => <NavBarItem key={item + index} title={item} extraprops="" classprops="my-2 text-lg" />,
            )}
          </ul>
        )}
      </div>
    </nav>
  )
}

export default Navbar;