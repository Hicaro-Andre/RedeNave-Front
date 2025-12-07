import { useState } from 'react'

import "../styles/home.css"
import "../styles/animations.css"
import "../index.css"


import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import HomeHero from '../components/HomePage/HomeHero'
import StatsSection from '../components/HomePage/StatsSection'
import AboutSection from '../components/HomePage/AboutSection'
import CallSection from '../components/HomePage/CallSection'
import TestimonialsSection from '../components/HomePage/TestimonialsSection'
import HowItWorks from '../components/HomePage/HowItWorks'
import NextEvents from '../components/HomePage/NextEvents'
import TrilhasAprendizagem from '../components/HomePage/TrilhasAprendizagem'


function Home() {


  return (
    <>
      <Navbar />
      <HomeHero />
      <StatsSection />
      <AboutSection />
      <TrilhasAprendizagem />
      <HowItWorks />
      <NextEvents />
      <TestimonialsSection />
      <CallSection />
      <Footer />
    </>

  )

}

export default Home
