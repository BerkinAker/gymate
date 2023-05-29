'use client'

import Image from "next/image"
import PrimaryButton from "../PrimaryButton"
import TitleBg from "../../images/pricing/titlebg.svg"
const Hero = () => {
  return (
    <>
      <section className="bg-hero-bg w-full h-[110vh] bg-no-repeat bg-cover bg-center text-center md:text-left">
        <div className="container-hero">
          {/* hero section */}
          <div className="max-w-full flex flex-col items-center -right-[12rem] xsm:-right-[14rem] sm:-right-[9rem] md:items-start text-white absolute top-[52%] md:right-[15px] translate-x-[-50%] translate-y-[-50%]">
            <p className="uppercase pl-5 md:pl-12 relative z-10 font-medium text-black mb-5">enerjini keşfet</p>
            <Image
              src={TitleBg}
              width={208}
              height={34}
              alt="titlebg"
              className="absolute w-[50%] -top-2 brightness-0 invert"
            />
            <h1 className="uppercase text-[48px] font-bold mb-10">make your body <br /> <span className="font-light">fit & perfect</span></h1>
            <PrimaryButton
              text="Sınıflarımız"
              bgColor={"bg-white"}
              color={"text-black"}            
            />
          </div>
        </div>
        <div className="hidden md:flex flex-row-reverse -rotate-90 items-center text-white absolute top-2/4 right-0">
          <p className="font-bold tracking-widest uppercase text-lg">paylaş</p>
          <span className="w-9 h-[3px] bg-hoverColor mr-5"></span>
          {/* hero socials */}
          <div className="flex gap-4 mr-5">
          <i className="fa-brands fa-twitter rotate-90 hover:text-hoverColor text-xl cursor-pointer ease-in duration-200"></i>
          <i className="fa-brands fa-linkedin rotate-90 hover:text-hoverColor text-xl cursor-pointer ease-in duration-200"></i>
          <i className="fa-brands fa-facebook rotate-90 hover:text-hoverColor text-xl cursor-pointer ease-in duration-200"></i>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero