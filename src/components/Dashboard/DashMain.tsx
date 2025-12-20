import { useState } from "react";
import DashboardOverview from "./DashboardOverview";
import DashboardCertificados from "./DashboardCertificados";
import DashboardAtividades from "./DashboardAtividades";
import DashboardRanking from "./DashboardRanking";
import DashboardSidebar, { DashboardSection } from "./DashboardSidebar";
import DashboardPerfil from "./DashboardPerfil";
import DashboardConfiguracoes from "./DashboardConfiguracoes";

export default function DashMain() {
  const [section, setSection] = useState<DashboardSection>("overview");
  const [fotoPerfil, setFotoPerfil] = useState<string | null>(null);

  const handleSection = (name) => {
    setSection(name);
  };

  // ========= FUNÇÃO PARA UPLOAD DA FOTO ==========
  const handleUploadFoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setFotoPerfil(reader.result as string); // salva a foto em base64
      };

      reader.readAsDataURL(file);
    }
  };
  // ===============================================

  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="/">
            <img
              src="/src/assets/logoRedeNave.png"
              alt="Rede Nave"
              style={{ width: "70px", height: "auto" }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Início
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active">Meu Painel</a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  <i className="bi bi-person-circle"></i> Maria Silva
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => setSection("perfil")}
                    >
                      <i className="bi bi-person me-2"></i>
                      Meu Perfil
                    </button>
                  </li>

                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => setSection("configuracoes")}
                    >
                      <i className="bi bi-gear me-2"></i>
                      Configurações
                    </button>
                  </li>

                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      <i className="bi bi-box-arrow-right"></i> Sair
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
          {/* SIDEBAR */}
          <div className="col-lg-3 mb-4">
            <DashboardSidebar
              section={section}
              onChangeSection={setSection}
              fotoPerfil={fotoPerfil}
              onUploadFoto={handleUploadFoto}
              nome="Maria Silva"
              email="maria.silva@email.com"
              nivel={3}
              membroDesde="Janeiro 2025"
            />
          </div>

          {/* MAIN CONTENT */}
          <div className="col-lg-9">
            {/* ============ DashboardOverview ============ */}
            {section === "overview" && <DashboardOverview />}

            {/* CERTIFICADOS */}
            {section === "certificados" && <DashboardCertificados />}

            {/* ATIVIDADES */}
            {section === "atividades" && <DashboardAtividades />}

            {/* RANKING */}
            {section === "ranking" && <DashboardRanking />}

            {/* PERFIL */}
            {section === "perfil" && <DashboardPerfil />}

            {/* CONFIGURAÇÕES */}
            {section === "configuracoes" && <DashboardConfiguracoes />}
          </div>
        </div>
      </div>
    </div>
  );
}
