import { useState } from 'react'

import "../index.css"
import "../styles/suporte.css"

import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import SupportHeader from '../components/Suporte/SupportHeader'
import SupportSearch from '../components/Suporte/SupportSearch'
import AtendimentoChannels from '../components/Suporte/AtendimentoChannels'
import FAQ from '../components/Suporte/FAQ'
import RecursosAdicionais from '../components/Suporte/RecursosAdicionais'
import ContatoSection from '../components/Suporte/ContatoSection'
import Chatbot from '../components/Chatbot/Chatbot'


function Suporte() {

  return (
    <>
      <Navbar />
      <SupportHeader />
      <SupportSearch />
      <AtendimentoChannels />
      <FAQ />
      <ContatoSection />
      <RecursosAdicionais />
      <Chatbot />
      <Footer />
    </>
  )
}

export default Suporte
