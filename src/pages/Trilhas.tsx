import { useState } from 'react'

import "../styles/trilhas.css"

import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import TrilhasHeader from '../components/Trilhas/TrilhasHeader'
import TrilhasFilter from '../components/Trilhas/TrilhasFilter'
import ListaTrilhas from '../components/Trilhas/ListaTrilhas'


function Trilhas() {


  return (
    <>
      <Navbar />
      <TrilhasHeader />
      <TrilhasFilter />
      <ListaTrilhas />
      <Footer />
    </>
  )
}

export default Trilhas
