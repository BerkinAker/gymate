import Image from 'next/image'
import { cardDescriptions } from './CardDescriptions'

const AboutCards = () => {
  return (
    <>
      {cardDescriptions.map((card, id) => (
        <div key={id} className="flex flex-col xl:max-w-[380px] w-full bg-white text-center items-center py-12 px-6 shadow-xl rounded-tl-[35px] rounded-br-[35px] transition-all hover:bg-card-bg hover:bg-no-repeat hover:bg-cover hover:text-white cursor-pointer">
          <Image
            src={card.img}
            width={75}
            height={60}
            alt="About cards image"
            className="cursor-pointer mb-3"
          />
          <p className="font-bold text-2xl uppercase mb-4">{card.title}</p>
          <p>{card.description}</p>
        </div>
      ))}
    </>
  )
}

export default AboutCards