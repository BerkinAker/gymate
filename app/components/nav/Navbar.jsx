'use client'
import Image from "next/image"
import NavbarList from "./NavbarList"
import Logo from "../../images/logo/logo.svg"
import { useState } from "react"
const Navbar = () => {

  const [spin, setSpin] = useState(false)
  const [hamburger, setHamburger] = useState(false)

  // spin animation
  const startSpin = () => {
    setSpin(true)
  }

  const stopSpin = () => {
    setSpin(false)
  }

  // hamburger menu
  const hamburgerMenu = () => {
    setHamburger(!hamburger)
  }

  return (
    <nav className="flex py-5 items-center z-50 justify-between px-[30px] fixed w-full bg-transparent">
      <Image
        src={Logo}
        width={165}
        height={53}
        alt="Picture of the author"
        className="cursor-pointer"
      />
      <NavbarList />
      <div className="flex gap-9 items-center">
        <div className="flex gap-10">
          {/* Mobile hamburger menu */}
          <div className={`flex flex-col absolute top-0 w-full h-screen z-[999999999] bg-white py-16 px-10 text-xl ease-in-out duration-500
          ${hamburger ? "left-0" : "-left-[100%]"}`}>
            {/* Hamburger close button */}
            <i onClick={hamburgerMenu}
              className="fa-solid fa-xmark text-hoverColor text-4xl self-end cursor-pointer"
            >
            </i>
            {/* Hamburger menu links*/}
            <ul className="flex flex-col gap-6 items-center absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
              <li onClick={hamburgerMenu} className="font-medium hover:text-hoverColor ease-in duration-200">
                <a href="#">Ana Sayfa</a>
              </li>
              <li onClick={hamburgerMenu} className="font-medium hover:text-hoverColor ease-in duration-200">
                <a href="#">Hakkımızda</a>
              </li>
              <li onClick={hamburgerMenu} className="font-medium hover:text-hoverColor ease-in duration-200">
                <a href="#">Planlama</a>
              </li>
              <li onClick={hamburgerMenu} className="font-medium hover:text-hoverColor ease-in duration-200">
                <a href="#">Galeri</a>
              </li>
              <li onClick={hamburgerMenu} className="font-medium hover:text-hoverColor ease-in duration-200">
                <a href="#">Blog</a>
              </li>
              <li onClick={hamburgerMenu} className="font-medium hover:text-hoverColor ease-in duration-200">
                <a href="#">İletişim</a>
              </li>
              <li onClick={hamburgerMenu} className="font-medium hover:text-hoverColor ease-in duration-200">
                <a href="#">Fiyatlandırma</a>
              </li>
              <li onClick={hamburgerMenu} className="font-medium hover:text-hoverColor ease-in duration-200">
                <a href="#">Dersler</a>
              </li>
            </ul>
          </div>
          <div className="visible xl:hidden">
            <i onClick={hamburgerMenu} className="fa-bars fa-solid cursor-pointer text-white text-2xl hover:text-hoverColor ease-in duration-200"></i>
          </div>
          <i className="fa-regular fa-user cursor-pointer text-2xl text-white  hover:text-hoverColor ease-in duration-200"></i>
          <i className="fa-regular fa-chart-bar cursor-pointer text-2xl text-white hover:text-hoverColor ease-in duration-200"></i>
        </div>
        <div className="hidden sm:block border-gray-400 border-solid border-2 rounded-md p-2 cursor-pointer">
          <div className="hidden sm:flex items-center gap-3" >
            <i className={`fa-solid fa-plus bg-hoverColor px-[10px] py-2 rounded-md text-white ${spin ? "nav-btn-hover" : ""}`} onMouseEnter={startSpin} onMouseLeave={stopSpin}></i>
            <h3 className="text-sm font-bold uppercase mr-6 text-white">Şimdi katıl</h3>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar