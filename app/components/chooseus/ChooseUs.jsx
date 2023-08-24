import Image from "next/image"
import VideoImage from "../../images/chooseus/main-img.png"
import titleBgRed from "../../images/about/title-bg.svg"
import chooseUsIcon from "../../images/chooseus/chooseus-icon.png"
import PrimaryButton from "../PrimaryButton"

const ChooseUs = () => {
  return (
    <section className="chooseus-section py-[120px]">
      <div className="container relative max-w-[1240px] mx-auto flex flex-col justify-center items-center lg:flex-row gap-24">
        {/* img - left div*/}
        <div className="lg:px-12 px-4 sm:px-0">
          <Image
            src={VideoImage}
            width={530}
            height={650}
            alt="video choose"
            className="h-auto"
          />
        </div>
        <div className="relative max-w-[560px] text-center lg:text-left px-12 lg:px-0">
          <p className="text-white text-xl font-bold relative mb-9 z-10 hidden lg:block">NEDEN BİZİ SEÇMELİSİN</p>
          <Image
            src={titleBgRed}
            width={320}
            height={35}
            alt="bg red"
            className="absolute top-[-10px] right-[275px] z-0 hidden lg:block"
          />
          <h1 className="text-white font-bold text-4xl lg:mr-24 mb-4 lg:mb-0">Vücudunuzun En Sağlıklı Haline Hazır Olun!</h1>
          <p className="text-[#b4b4b4]">
            <b>Gymate</b> olarak kendimizi, istediğiniz vücuda kavuşmanıza yardımcı olmaya adadık.
            Uzman eğitmenlerimiz ve beslenme uzmanlarımız sizlerli bekliyor.
            Kişiselleştirilmiş bir fitness ve beslenme planı oluşturmak için sizinle birlikte
            özel hedeflerinize ulaşmanıza yardımcı olur
          </p>

          <div className="sm:grid sm:grid-cols-2 lg:grid-rows-2 flex flex-col justify-center items-center gap-x-20 gap-y-10 max-w-[27rem] mt-16 md:mt-12 lg:mt-9">
            <div className="flex items-center gap-4">
              <Image
                className="bg-[#2b2b2b] hover:bg-hoverColor ease-in duration-300 rounded-full p-4"
                width={70}
                height={70}
                alt="training icon"
                src={chooseUsIcon}
              />
              <p className="text-white font-semibold max-w-[150px] text-xl">Antrenman Programları</p>
            </div>
            <div className="flex items-center gap-4">
              <Image
                className="bg-[#2b2b2b] hover:bg-hoverColor ease-in duration-300 rounded-full p-4"
                width={70}
                height={70}
                alt="training icon"
                src={chooseUsIcon}
              />
              <p className="text-white font-semibold max-w-[150px] text-xl">Antrenman Programları</p>
            </div>
            <div className="flex items-center gap-4">
              <Image
                className="bg-[#2b2b2b] hover:bg-hoverColor ease-in duration-300 rounded-full p-4"
                width={70}
                height={70}
                alt="training icon"
                src={chooseUsIcon}
              />
              <p className="text-white font-semibold max-w-[150px] text-xl">Antrenman Programları</p>
            </div>
            <div className="flex items-center gap-4">
              <Image
                className="bg-[#2b2b2b] hover:bg-hoverColor ease-in duration-300 rounded-full p-4"
                width={70}
                height={70}
                alt="training icon"
                src={chooseUsIcon}
              />
              <p className="text-white font-semibold max-w-[150px] text-xl">Antrenman Programları</p>
            </div>
            <PrimaryButton
              color="text-white"
              text="Sınıflarımız"
              bgColor={"bg-[#7a7a7a]"}
              arrowColor={"text-white"}
              hover={"hover:bg-hoverColor"}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChooseUs