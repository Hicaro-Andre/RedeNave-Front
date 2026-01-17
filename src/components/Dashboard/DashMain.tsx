import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";

import logo from "/src/assets/logoRedeNave.png";

import DashboardOverview from "./Layout/DashboardOverview";
import DashboardCourses from "./Layout/DashboardCourses";
import DashboardCertificados from "./Layout/DashboardCertificates";
import DashboardProfile from "./Layout/DashboardProfile";
import DashboardConfiguracoes from "./Layout/DashboardSettings";
import DashboardSidebar, {
  DashboardSection,
} from "./Layout/DashboardSidebar";

export default function DashMain() {
  const nome = "Maria Silva";
  const email = "maria.silva@email.com";

  const [section, setSection] = useState<DashboardSection>("overview");
  const [fotoPerfil, setFotoPerfil] = useState<string | null>(null);

  const navigate = useNavigate();

  // Carrega foto do localStorage ao iniciar
  useEffect(() => {
    const fotoSalva = localStorage.getItem("fotoPerfil");
    if (fotoSalva) setFotoPerfil(fotoSalva);
  }, []);

  // Fecha menu mobile
  const closeMobileMenu = () => {
    const navbar = document.getElementById("navbarNav");
    if (navbar?.classList.contains("show")) navbar.classList.remove("show");
  };

  const handleSectionChange = (name: DashboardSection) => {
    setSection(name);
    closeMobileMenu();
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="/">
            <img src={logo} alt="Rede Nave" style={{ width: 70 }} />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Início
                </a>
              </li>

              <li className="nav-item d-none d-lg-block">
                <span className="nav-link active">Meu Painel</span>
              </li>

              {/* MOBILE LINKS */}
              <li className="nav-item d-lg-none">
                <button
                  className={`nav-link ${section === "overview" ? "active" : ""}`}
                  onClick={() => handleSectionChange("overview")}
                >
                  Visão Geral
                </button>
              </li>
              <li className="nav-item d-lg-none">
                <button
                  className={`nav-link ${section === "cursos" ? "active" : ""}`}
                  onClick={() => handleSectionChange("cursos")}
                >
                  Meus Cursos
                </button>
              </li>
              <li className="nav-item d-lg-none">
                <button
                  className={`nav-link ${section === "certificados" ? "active" : ""}`}
                  onClick={() => handleSectionChange("certificados")}
                >
                  Certificados
                </button>
              </li>

              <div className="separator"></div>

              {/* USER DROPDOWN */}
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle d-flex align-items-center gap-2"
                  data-bs-toggle="dropdown"
                >
                  {fotoPerfil ? (
                    <img src={fotoPerfil} alt="Perfil" className="nav-profile-img" />
                  ) : (
                    <div className="nav-profile-img initials">
                      {nome.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                    </div>
                  )}
                  <span className="nav-user-name">{nome}</span>
                </button>

                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleSectionChange("perfil")}
                    >
                      <i className="bi bi-person me-2" />
                      Meu Perfil
                    </button>
                  </li>

                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleSectionChange("configuracoes")}
                    >
                      <i className="bi bi-gear me-2" />
                      Configurações
                    </button>
                  </li>

                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li>
                    <button className="dropdown-item" onClick={handleLogout}>
                      <i className="bi bi-box-arrow-right me-2" />
                      Sair
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* DASHBOARD */}
      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-lg-3 d-none d-lg-block">
            <DashboardSidebar
              section={section}
              onChangeSection={setSection}
              fotoPerfil={fotoPerfil}
              onUploadFoto={(novaFoto: string) => {
                setFotoPerfil(novaFoto);
                localStorage.setItem("fotoPerfil", novaFoto);
              }}
              nome={nome}
              email={email}
              nivel={3}
              membroDesde="Janeiro 2025"
            />
          </div>

          <div className="col-lg-9">
            {section === "overview" && <DashboardOverview />}
            {section === "cursos" && <DashboardCourses />}
            {section === "certificados" && <DashboardCertificados />}
            {section === "perfil" && (
              <DashboardProfile
                fotoPerfil={fotoPerfil}
                onChangeFoto={(novaFoto) => {
                  setFotoPerfil(novaFoto);
                  localStorage.setItem("fotoPerfil", novaFoto);
                }}
              />
            )}
            {section === "configuracoes" && <DashboardConfiguracoes />}
          </div>
        </div>
      </div>
    </>
  );
}
