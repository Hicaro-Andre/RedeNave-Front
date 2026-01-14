import { useState } from "react";

import DashboardOverview from "./Layout/DashboardOverview";
import DashboardCourses from "./Layout/DashboardCourses";
import DashboardCertificados from "./Layout/DashboardCertificates";
import DashboardPerfil from "./Layout/DashboardProfile";
import DashboardConfiguracoes from "./Layout/DashboardSettings";
import DashboardSidebar, {
  DashboardSection,
} from "./Layout/DashboardSidebar";

export default function DashMain() {
  // ======================
  // DADOS DO USUÁRIO
  // ======================
  const nome = "Maria Silva";
  const email = "maria.silva@email.com";

  // ======================
  // STATES
  // ======================
  const [section, setSection] = useState<DashboardSection>("overview");
  const [fotoPerfil, setFotoPerfil] = useState<string | null>(null);

  // ======================
  // HANDLERS
  // ======================
  const handleUploadFoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => setFotoPerfil(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleMobileNav = (name: DashboardSection) => {
    setSection(name);

    // fecha menu mobile
    const navbar = document.getElementById("navbarNav");
    if (navbar?.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  };


  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="/">
            <img
              src="/src/assets/logoRedeNave.png"
              alt="Rede Nave"
              style={{ width: 70 }}
            />
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
              {/* INÍCIO */}
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Início
                </a>
              </li>

              {/* MEU PAINEL (DESKTOP) */}
              <li className="nav-item d-none d-lg-block">
                <span className="nav-link active">Meu Painel</span>
              </li>

              {/* MOBILE LINKS */}
              <li className="nav-item d-lg-none">
                <button
                  className={`nav-link ${section === "overview" ? "active" : ""
                    }`}
                  onClick={() => handleMobileNav("overview")}
                >
                  Visão Geral
                </button>
              </li>

              <li className="nav-item d-lg-none">
                <button
                  className={`nav-link ${section === "cursos" ? "active" : ""
                    }`}
                  onClick={() => handleMobileNav("cursos")}
                >
                  Meus Cursos
                </button>
              </li>

              <li className="nav-item d-lg-none">
                <button
                  className={`nav-link ${section === "certificados" ? "active" : ""
                    }`}
                  onClick={() => handleMobileNav("certificados")}
                >
                  Certificados
                </button>
              </li>

              {/* USER DROPDOWN */}
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle d-flex align-items-center gap-2"
                  data-bs-toggle="dropdown"
                >
                  {fotoPerfil ? (
                    <img
                      src={fotoPerfil}
                      alt="Perfil"
                      className="nav-profile-img"
                    />
                  ) : (
                    <div className="nav-profile-img initials">
                      {nome
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </div>
                  )}
                  <span className="nav-user-name">{nome}</span>
                </button>

                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => setSection("perfil")}
                    >
                      <i className="bi bi-person me-2" />
                      Meu Perfil
                    </button>
                  </li>

                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => setSection("configuracoes")}
                    >
                      <i className="bi bi-gear me-2" />
                      Configurações
                    </button>
                  </li>

                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li>
                    <a className="dropdown-item" href="/">
                      <i className="bi bi-box-arrow-right me-2" />
                      Sair
                    </a>
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
          {/* SIDEBAR (DESKTOP) */}
          <div className="col-lg-3 d-none d-lg-block">
            <DashboardSidebar
              section={section}
              onChangeSection={setSection}
              fotoPerfil={fotoPerfil}
              onUploadFoto={handleUploadFoto}
              nome={nome}
              email={email}
              nivel={3}
              membroDesde="Janeiro 2025"
            />
          </div>

          {/* MAIN */}
          <div className="col-lg-9">
            {section === "overview" && <DashboardOverview />}
            {section === "cursos" && <DashboardCourses />}
            {section === "certificados" && <DashboardCertificados />}
            {section === "perfil" && <DashboardPerfil />}
            {section === "configuracoes" && <DashboardConfiguracoes />}
          </div>
        </div>
      </div>
    </>
  );
}
