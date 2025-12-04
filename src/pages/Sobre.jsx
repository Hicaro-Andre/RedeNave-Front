import { useState } from "react";

import "../index.css"
import '../styles/sobre.css'

import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

import AboutHero from '../components/Sobre/AboutHero'
import ValoresSection from '../components/Sobre/ValoresSection'
import TrajetoriaSection from '../components/Sobre/TrajetoriaSection'
import ImpactoNumeros from '../components/Sobre/ImpactoNumeros'
import NossaEquipe from '../components/Sobre/NossaEquipe'
import Partners from '../components/Sobre/Partners'
import CtaSection from '../components/Sobre/CtaSection'

function Sobre() {
  return (
    <>
      <Navbar />
      <AboutHero />
      <ValoresSection />
      <TrajetoriaSection />
      <ImpactoNumeros />
      <NossaEquipe />
      <Partners />
      <CtaSection />
      <Footer />
    </>
  );
}

export default Sobre;
