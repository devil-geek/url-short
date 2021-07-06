import React from "react"
import Boost from "../../components/Boost/Boost"
import Hero from "../../components/Hero/Hero"
import Navbar from "../../components/Navbar/NAvbar"
import Shortener from "../../components/Shortener/Shortener"
import Statics from "../../components/Statics/Statics"

const Main = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Shortener />
      <section>
        <Statics />
      </section>
      <section>
        <Boost />
      </section>
    </main>
  )
}

export default Main
