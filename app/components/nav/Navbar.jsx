'use client'

import Image from "next/image"
import NavbarList from "./NavbarList"
import Logo from "../../images/logo/logo.svg"
import LogoSidebar from "../../images/logo/logo-footer.svg"
import Sidebar1 from "../../images/sidebar/1.jpg"

import { useState } from "react"
const Navbar = () => {

  const [spin, setSpin] = useState(false)
  const [sidebar, setSidebar] = useState(false)
  const [hamburger, setHamburger] = useState(false)
  const [sticky, setSticky] = useState(false)

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

  // sidebar
  const sideBar = () => {
    setSidebar(!sidebar)
  }

  const stickyOrNot = () => {
    if (window.scrollY >= 5) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }

  (typeof window !== 'undefined') && window.addEventListener("scroll", stickyOrNot)

  return (
    <nav className={`flex py-5 items-center z-50 justify-between px-[30px] fixed w-full bg-transparent
    ${sticky ? "!bg-black shadow-xl": ""}`}>
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

          {/* Sidebar gallery menu */}
          <div className={`flex flex-col gap-16 fixed h-screen overflow-x-hidden z-[999999999] bg-white w-full xsm:w-[25rem] top-0 left-0 ease-in duration-500 p-11
          ${sidebar ? "left-0" : "-translate-x-[100%]"}`}>
            {/* Sidebar logo */}
            <div className="flex justify-between items-center">
              <Image
                src={LogoSidebar}
                width={132}
                height={44}
                alt="Sidebar logo"
              />
              <i onClick={sideBar} className="fa-solid fa-xmark text-hoverColor text-3xl cursor-pointer"></i>
            </div>

            {/* Sidebar about */}
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-[20px]">Hakkımızda</h3>
              <p className="">Kim olduğumuzu ve bizi neyin eşsiz kıldığını öğrenin.
                Samimi ve destekleyici bir ortamda her seviyeden fitness
                tutkunu için kişiselleştirilmiş fitness deneyimleri sağlamaya
                kendini adamış, topluluk odaklı bir spor salonuyuz.</p>
            </div>

            {/* Sidebar gallery */}
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-[20px]">Galeri</h3>
              <div className="grid grid-cols-3 grid-rows-2 gap-2">
                <Image
                  src={Sidebar1}
                  width={96}
                  height={93}
                  alt="Sidebar gallery image"
                  className="rounded-lg cursor-pointer"
                />
                <Image
                  src={Sidebar1}
                  width={96}
                  height={93}
                  alt="Sidebar gallery image"
                  className="rounded-lg cursor-pointer"
                />
                <Image
                  src={Sidebar1}
                  width={96}
                  height={93}
                  alt="Sidebar gallery image"
                  className="rounded-lg cursor-pointer"
                />
                <Image
                  src={Sidebar1}
                  width={96}
                  height={93}
                  alt="Sidebar gallery image"
                  className="rounded-lg cursor-pointer"
                />
                <Image
                  src={Sidebar1}
                  width={96}
                  height={93}
                  alt="Sidebar gallery image"
                  className="rounded-lg cursor-pointer"
                />
                <Image
                  src={Sidebar1}
                  width={96}
                  height={93}
                  alt="Sidebar gallery image"
                  className="rounded-lg cursor-pointer"
                />
              </div>
            </div>
            {/* Sidebar contact */}
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-[20px]">İletişim Bilgileri</h3>
              <p className="hover:text-hoverColor ease-in duration-200 cursor-pointer">
                <i className="fa-solid fa-location-dot text-hoverColor cursor-pointer"></i>
                &nbsp; 59 Sokak, İstanbul Türkiye
              </p>
              <p className="hover:text-hoverColor ease-in duration-200 cursor-pointer">
                <i className="fa-solid fa-phone text-hoverColor cursor-pointer"></i>
                &nbsp; +5-678800090
              </p>
              <p className="hover:text-hoverColor ease-in duration-200 cursor-pointer">
                <i className="fa-solid fa-envelope text-hoverColor cursor-pointer"></i>
                &nbsp; gymate@gymail.com
              </p>
            </div>

            {/* Sidebar follow us */}
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-[20px]">Bizi takip edin</h3>
              {/* Socials logo */}
              <div className="flex gap-4">
                <i className="fa-brands fa-facebook text-hoverColor text-5xl py-3 cursor-pointer"></i>
                <i className="fa-brands fa-twitter text-hoverColor text-5xl py-3 cursor-pointer"></i>
                <i className="fa-brands fa-instagram text-hoverColor text-5xl py-3 cursor-pointer"></i>
              </div>
            </div>

          </div>

          <div className="visible xl:hidden">
            <i onClick={hamburgerMenu} className="fa-bars fa-solid cursor-pointer text-white text-2xl hover:text-hoverColor ease-in duration-200"></i>
          </div>
          <i className="fa-regular fa-user cursor-pointer text-2xl text-white  hover:text-hoverColor ease-in duration-200"></i>
          <i onClick={sideBar} className="fa-regular fa-chart-bar cursor-pointer text-2xl text-white hover:text-hoverColor ease-in duration-200"></i>
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