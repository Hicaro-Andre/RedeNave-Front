import React from 'react'
import { Routes, Route } from 'react-router-dom'
// import Navbar from './components/NavBar'
// import Footer from './components/Footer'

import Home from './pages/Home'
import Trilhas from './pages/Trilhas'
import Eventos from './pages/Eventos'
import Sobre from './pages/Sobre'
import Suporte from './pages/Suporte'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Privacy from './pages/PrivacyPolicy'

// import NotFound from './pages/NotFound' // opcional 404

function App() {
  return (
    <>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trilhas" element={<Trilhas />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/suporte" element={<Suporte />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/privacypolicy" element={<Privacy />} />

          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </main>

    </>
  )
}

export default App
