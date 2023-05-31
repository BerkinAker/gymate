'use client'

import AboutCards from "./AboutCards"

const About = () => {
  return (
    <section>
      <div className="container px-10 mx-auto -mt-32 ">
        <div className="flex flex-col xl:flex-row justify-center gap-7">
          <AboutCards />
        </div>
      </div>
    </section>
  )
}

export default About