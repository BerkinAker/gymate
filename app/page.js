import Image from 'next/image'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Featured from './components/featured/Featured'
import ChooseUs from './components/chooseus/ChooseUs'

export default function Home() {
  return (
  <>
    <Hero />
    <About />
    <Featured />
    <ChooseUs />
  </>
  )
}
