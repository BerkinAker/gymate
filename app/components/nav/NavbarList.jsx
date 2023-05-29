'use client'
const NavbarList = () => {
  return (
    <>
      <ul className="hidden xl:flex gap-5 justify-center items-center font-medium text-white">
        <li className="cursor-pointer hover:text-hoverColor transition-all duration-300">
          <a href="">Ana Sayfa</a>
        </li>
        <li className="cursor-pointer hover:text-hoverColor transition-all duration-300">
          <a href="">Hakkımızda</a>
        </li>
        <li className="cursor-pointer hover:text-hoverColor transition-all duration-300">
          <a href="">Galeri</a>
        </li>
        <li className="cursor-pointer hover:text-hoverColor transition-all duration-300">
          <a href="">Planlama</a>
        </li>
        <li className="cursor-pointer hover:text-hoverColor transition-all duration-300">
          <a href="">Blog</a>
        </li>
        <li className="cursor-pointer hover:text-hoverColor transition-all duration-300">
          <a href="">Fiyatlandırma</a>
        </li>
        <li className="cursor-pointer hover:text-hoverColor transition-all duration-300">
          <a href="">Dersler</a>
        </li>
        <li className="cursor-pointer hover:text-hoverColor transition-all duration-300">
          <a href="">İletişim</a>
        </li>
      </ul>
    </>
    )
}

export default NavbarList