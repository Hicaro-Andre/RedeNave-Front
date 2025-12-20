import React from "react";
import { Routes, Route } from "react-router-dom";
import BackToTop from "./components/BackToTop";
import Home from "./pages/Home";
import Trilhas from "./pages/Trilhas";
import Eventos from "./pages/Eventos";
import Sobre from "./pages/Sobre";
import Suporte from "./pages/Suporte";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Privacy from "./pages/PrivacyPolicy";
import Admin from "./pages/Admin";
import DashMain from "./components/Dashboard/DashMain";
import CursoDetalhe from "./components/Cursos/CursoDetalhe";
import NotFound from "./components/NotFound";


function App() {
  return (

    <div className="App">
      <Routes>
        {/* Routes Páginas */}
        <Route path="/" element={<Home />} />
        <Route path="/trilhas" element={<Trilhas />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/suporte" element={<Suporte />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/privacypolicy" element={<Privacy />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/dashboard" element={<DashMain />} />

        {/* Routes Cursos */}
        <Route path="/cursos/:id" element={<CursoDetalhe />} />

        {/* Not Found */}
        <Route path="*" element={<NotFound />} />


      </Routes>

      {/* Botão Voltar ao Topo Global */}
      <BackToTop />
    </div>
  );
}

export default App;