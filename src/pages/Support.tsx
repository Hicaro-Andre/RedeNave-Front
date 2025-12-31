import { useState } from 'react'

import "../index.css"
import "../styles/support.css"

import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import SupportHeader from '../components/Support/SupportHeader'
import SupportSearch from '../components/Support/SupportSearch'
import ServiceChannels from '../components/Support/ServiceChannels'
import FAQ from '../components/Support/FAQ'
import AdditionalResources from '../components/Support/AdditionalResources'
import ContatoSection from '../components/Support/ContatoSection'
import Chatbot from '../components/Chatbot/Chatbot'




function Support() {

  return (
    <>
      <Navbar />
      <SupportHeader />
      <SupportSearch />
      <ServiceChannels />
      <FAQ />
      <ContatoSection />
      <AdditionalResources />
      <Chatbot />
      <Footer />
    </>
  )
}

export default Support
