'use client'

import AboutCards from "./AboutCards"
import Image from "next/image"
import titleBgRed from "../../images/about/title-bg.svg"
import weightLifterIcon from "../../images/about/weightlifter.png"
import girlImg from "../../images/about/girl-run.png"
import girlRedBg from "../../images/about/girl-redbg.svg"
import girlWind from "../../images/about/wind.png"
import girlText from "../../images/about/girl-side-text.png"
import PrimaryButton from "../PrimaryButton"

const About = () => {
  return (
    <section className="flex flex-col bg-about-bg bg-cover pb-52">
      <div className="container px-10 mx-auto -mt-16 ">
        <div className="flex flex-col xl:flex-row justify-center gap-7">
          <AboutCards />
        </div>

        {/* About second part */}
        <div className="grid grid-cols-1 xl:grid-cols-2 text-center xl:text-left gap-8 max-w-[1240px] mx-auto">
          {/* About text */}
          <div className="relative mt-[105px] flex flex-col items-center xl:items-start ">
            <p className="text-white font-semibod text-[15px] relative font-semibold xl:pl-14 z-10 uppercase mb-8">
              BİZ KİMİZ
            </p>
            <Image
              src={titleBgRed}
              width={188}
              height={30}
              alt="About title bg"
              className="absolute -top-[5px]"
            />
            <h2 className="font-bold text-4xl mb-4">Sağlığınızı ve Vücudunuzu Bir Sonraki Seviyeye Taşıyın</h2>
            <p>Fitness hedeflerinize ulaşmanıza yardımcı olmak için tasarlanmış kapsamlı programımızla sağlığınızı ve vücudunuzu bir sonraki seviyeye taşıyın.</p>
            {/* About footer icons */}
            <div className="flex flex-col sm:flex-row mt-7 mb-[70px] text-center">
              <div className="flex flex-col items-center py-6 px-9">
                <Image
                  src={weightLifterIcon}
                  width={57}
                  height={57}
                  alt="About icons"
                  className="mb-4"
                />
                <h3 className="font-bold text-lg leading-normal">
                  PROFESYONEL <br /> EĞİTMENLER
                </h3>
              </div>
              <div className="flex flex-col items-center py-6 px-9 sm:border-l sm:border-r sm:border-[rgb(0,0,0,0.2)]">
                <Image
                  src={weightLifterIcon}
                  width={57}
                  height={57}
                  alt="About icons"
                  className="mb-4"
                />
                <h3 className="font-bold text-lg leading-normal">
                  PROFESYONEL <br /> EĞİTMENLER
                </h3>
              </div>
              <div className="flex flex-col items-center py-6 px-9">
                <Image
                  src={weightLifterIcon}
                  width={57}
                  height={57}
                  alt="About icons"
                  className="mb-4"
                />
                <h3 className="font-bold text-lg leading-normal">
                  PROFESYONEL <br /> EĞİTMENLER
                </h3>
              </div>
            </div>
            {/* Primary button */}
            <PrimaryButton
              text="Keşfedin"
              bgColor={"bg-[#3f3f3f]"}
              arrowColor="text-white"
              color="text-white"
              hover={"hover:bg-[#FF0336]"}
              classN={"about-primary-button-animation"}
            />
          </div>
          {/* About image (right part)*/}
          <div className="relative hidden xl:block">
            <Image
              src={girlImg}
              width={500}
              height={300}
              alt="About girl image"
              className="w-full h-auto absolute top-[58%] right-[40%] translate-x-[50%] translate-y-[-50%] z-10"
            />
            <Image
              src={girlRedBg}
              width={287}
              height={576}
              alt="About girl image"
              className="absolute h-auto right-[5%] top-[15%]"
            />
            <Image
              src={girlWind}
              width={84}
              height={84}
              alt="About girl wind image"
              className="absolute top-[60%] right-[27%] translate-x-[50%] translate-y-[-50%]"
            />
            <Image
              src={girlText}
              width={95}
              height={565}
              alt="About girl side text image"
              className="absolute top-[65%] right-[80%] translate-x-[50%] translate-y-[-50%]"
              />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About