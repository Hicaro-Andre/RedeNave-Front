import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import "/src/styles/admin.css";
import "/src/styles/dashboard.css";

import BackToTop from "./components/BackToTop";
import { ScrollToTop } from "./components/ScrollToTop";

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
import NotFound from "./components/NotFound";
import ForgotPassword from "./components/Login/ForgotPassword";
import ResetPassword from "./components/Login/ResetPassword";
import Course from "./pages/Course";

import { getSocialRedirectResult } from "./services/authService";

// 🔹 Componente wrapper para gerenciar login social global
function AppWrapper() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkSocialLogin = async () => {
      try {
        const result = await getSocialRedirectResult();
        if (result?.user) {
          // Redireciona para dashboard após login social
          navigate("/dashboard");
        }
      } catch (err) {
        console.error("Erro ao finalizar login social:", err);
      }
    };

    checkSocialLogin();
  }, [navigate]);

  return (
    <div className="App">
      <ScrollToTop />

      {/* Rotas principais */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trilhas" element={<Trails />} />
        <Route path="/eventos" element={<Events />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/suporte" element={<Support />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/admin/*" element={<AdminMain />} />
        <Route path="/dashboard/*" element={<DashMain />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/cursos/:id" element={<Course />} />

        {/* Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <BackToTop />
    </div>
  );
}

// 🔹 Componente principal do App
function App() {
  return <AppWrapper />;
}

export default App;
