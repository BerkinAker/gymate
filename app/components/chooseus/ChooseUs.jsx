import Image from "next/image"
import VideoImage from "../../images/chooseus/main-img.png"
import titleBgRed from "../../images/about/title-bg.svg"

const ChooseUs = () => {
  return (
    <section className="chooseus-section py-[120px]">
      <div className="container relative max-w-[1240px] mx-auto flex flex-row gap-24">
        {/* img - left div*/}
        <div className="min-w-[530px]">
          <Image
            src={VideoImage}
            width={530}
            height={650}
            alt="video choose"
            className=""
          />
        </div>

        <div>
          <p className="text-white text-xl font-bold relative mb-9 z-10">NEDEN BİZİ SEÇMELİSİN</p>
          <Image
            src={titleBgRed}
            width={320}
            height={35}
            alt="bg red"
            className="absolute top-[-15px] right-[330px] z-0"
          />
          <h1 className="text-white font-bold text-4xl mr-24">Vücudunuzun En Sağlıklı Haline Hazır Olun!</h1>
          <p className="text-[#b4b4b4]">
            <b>Gymate</b> olarak kendimizi, istediğiniz vücuda kavuşmanıza yardımcı olmaya adadık.
            Uzman eğitmenlerimiz ve beslenme uzmanlarımız sizlerli bekliyor.
             Kişiselleştirilmiş bir fitness ve beslenme planı oluşturmak için sizinle birlikte
            özel hedeflerinize ulaşmanıza yardımcı olur
          </p>
        </div>
      </div>
    </section>
  )
}

export default ChooseUs