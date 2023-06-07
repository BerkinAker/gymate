'use client'

import Image from "next/image"
import titleBg from "../../images/about/title-bg.svg"
import PrimaryButton from "../PrimaryButton"

const Featured = () => {
  return (
    <>
      <section className="px-6 py-[125px]">
        <div className="container mx-auto max-w-[1240px]">
          {/* feature header */}
          <div className="flex flex-col items-center relative  mb-7">
            <p className="font-semibold text-[15px] text-white relative z-10 uppercase">Öne çıkan sınıflarımız</p>
            <Image
              src={titleBg}
              width={250}
              height={39}
              alt="Title background"
              className="absolute top-[-11px]"
            />
            <p className="text-4xl  text-black font-bold my-7">En Popüler Sınıflar</p>
          </div>
          {/* feature body grid */}
          <div className="flex flex-col lg:grid lg:grid-cols-4 lg:grid-rows-2 gap-5">
            <div className="item-0-div relative">
              <div className="item-0 ease-in duration-[0.4s] p-4"></div>
              <div className="absolute bottom-7 left-6">
                <p className="text-white font-bold text-3xl">Cycling</p>
                <p className="text-white bg-hoverColor px-3 py-[3px] mt-2">Çarşamba: 09:00-10:00</p>
              </div>
            </div>
            <div className="item-1-div relative">
              <div className="item-1 ease-in duration-[0.4s] p-4"></div>
              <div className="absolute bottom-7 left-6">
                <p className="text-white font-bold text-3xl">Crossfit</p>
                <p className="text-white bg-hoverColor px-3 py-[3px] mt-2">Cuma: 10:00-11:00</p>
              </div>
            </div>
            <div className="item-2-div relative">
              <div className="item-2 ease-in duration-[0.4s] p-4"></div>
              <div className="absolute bottom-7 left-6">
                <p className="text-white font-bold text-3xl">Powerlifting</p>
                <p className="text-white bg-hoverColor px-3 py-[3px] mt-2"> Cumartesi: 18:00-20:00</p>
              </div>
            </div>
            <div className="item-3-div relative">
              <div className="item-3 ease-in duration-[0.4s] p-4"></div>
              <div className="absolute bottom-7 left-6">
                <p className="text-white font-bold text-3xl">Meditasyon</p>
                <p className="text-white bg-hoverColor px-3 py-[3px] mt-2"> Salı: 09:00-10:30</p>
              </div>
            </div>
            <div className="item-4-div relative">
              <div className="item-4 ease-in duration-[0.4s] p-4"></div>
              <div className="absolute bottom-7 left-6">
                <p className="text-white font-bold text-3xl">MMA</p>
                <p className="text-white bg-hoverColor px-3 py-[3px] mt-2"> Perşembe: 13:00-15:30</p>
              </div>
            </div>
            <div className="item-5-div relative">
              <div className="item-5 ease-in duration-[0.4s] p-4"></div>
              <div className="absolute bottom-7 left-6">
                <p className="text-white font-bold text-3xl">MMA</p>
                <p className="text-white bg-hoverColor px-3 py-[3px] mt-2"> Perşembe: 13:00-15:30</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-featured-bg bg-no-repeat bg-cover bg-center w-full h-[210px] flex items-center">
        <div className="container max-w-[1240px] mx-auto px-6">
          <div className="flex items-center">
            <h3 className="text-white text-4xl font-bold max-w-[720px] leading-10">
              Sizler İçin Her Zaman En İyi Hizmeti Sunuyoruz
            </h3>
            <PrimaryButton
              color="text-black"
              text="Hemen Başla"
              bgColor='bg-white'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Featured