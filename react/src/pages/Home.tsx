import { useState } from 'react'

import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import HomeHero from '../components/index/HomeHero'
import StatsSection from '../components/index/StatsSection'
import AboutSection from '../components/index/AboutSection'
import TrilhasSection from '../components/index/TrilhasSection'


function Home() {


  return (
    <>
      <Navbar />
      <HomeHero />
      <StatsSection />
      <AboutSection />
      <TrilhasSection />
      <Footer />
    </>
  )
}

export default Home
