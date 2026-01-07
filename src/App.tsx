import { Routes, Route } from "react-router-dom";

import "/src/styles/admin.css"
import "/src/styles/dashboard.css"

import BackToTop from "./components/BackToTop";
import Home from "./pages/Home";
import Trails from "./pages/Trails";
import Events from "./pages/Events";
import About from "./pages/About";
import Support from "./pages/Support";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AdminMain from "./components/Administrator/AdminMain";
import DashMain from "./components/Dashboard/DashMain";
import CourseDetail from "./components/Courses/CourseDetail";
import NotFound from "./components/NotFound";


function App() {

  return (
    <div className="App">
      <Routes>
        {/* Routes Páginas */}
        <Route path="/" element={<Home />} />
        <Route path="/trilhas" element={<Trails />} />
        <Route path="/eventos" element={<Events />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/suporte" element={<Support />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/admin" element={<AdminMain />} />
        <Route path="/dashboard" element={<DashMain />} />

        {/* Routes Cursos */}
        <Route path="/cursos/:id" element={<CourseDetail />} />

        {/* Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Botão Voltar ao Topo Global */}
      <BackToTop />
    </div>
  );
}

export default App;