import { useState } from 'react'

import '../index.css'
import '../styles/eventos.css'

import Navbar from '../components/NavBar'
import Footer from '../components/Footer'

import AgendaHero from '../components/Eventos/AgendaHero'
import EventosTabs from '../components/Eventos/EventosTabs'
import CalendarioEventos from '../components/Eventos/CalendarioEventos'
import ProximoEvento from '../components/Eventos/ProximoEvento'


function Eventos() {

  return (
    <>
      <Navbar />
      <AgendaHero />
      <EventosTabs />
      <ProximoEvento />
      <CalendarioEventos />
      <Footer />
    </>
  )
}

export default Eventos
