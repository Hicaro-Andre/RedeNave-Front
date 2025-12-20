import React, { useEffect, useState } from "react";
import logo from "/src/assets/logoRedeNave.png";

import DashboardSection from "./DashboardSection";
import GenericSection from "./GenericSection";

// Tipos
interface Section {
  [key: string]: string;
}

export default function AdminMain() {
  const [activeSection, setActiveSection] = useState<string>("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sections: Section = {
    dashboard: "Dashboard",
    users: "Usuárias",
    courses: "Trilhas",
    events: "Eventos",
    certificates: "Certificados",
    reports: "Relatórios",
    settings: "Configurações",
  };

  // Animação dos números do dashboard
  const animateNumbers = () => {
    const statElements =
      document.querySelectorAll<HTMLElement>(".stat-value");

    statElements.forEach((stat) => {
      const targetStr = stat.getAttribute("data-target");
      const target = targetStr ? parseInt(targetStr) : 0;
      const duration = 1500;
      const increment = target / (duration / 16);
      let current = 0;

      const updateValue = () => {
        current += increment;
        if (current >= target) {
          stat.textContent = target.toLocaleString();
        } else {
          stat.textContent = Math.floor(current).toLocaleString();
          requestAnimationFrame(updateValue);
        }
      };

      updateValue();
    });
  };

  useEffect(() => {
    animateNumbers();
  }, [activeSection]);

  const getIconForSection = (key: string): string => {
    switch (key) {
      case "dashboard":
        return "bi-speedometer2";
      case "users":
        return "bi-people";
      case "courses":
        return "bi-book";
      case "events":
        return "bi-calendar-event";
      case "certificates":
        return "bi-award";
      case "reports":
        return "bi-graph-up";
      case "settings":
        return "bi-gear";
      default:
        return "bi-gear";
    }
  };

  return (
    <div className="layout-wrapper">
      {/* BOTÃO MENU MOBILE */}
      <button
        className={`menu-toggle ${sidebarOpen ? "open" : ""}`}
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <i className={`bi ${sidebarOpen ? "bi-x-lg" : "bi-list"}`}></i>
      </button>

      {/* SIDEBAR */}
      <aside className={`admin-sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header text-center">
          <img src={logo} alt="Rede Nave" className="sidebar-logo" />
          <p className="sidebar-sub text-white">Painel Administrativo</p>
        </div>

        <nav className="sidebar-nav">
          {Object.keys(sections).map((key) => (
            <div
              key={key}
              className={`sidebar-nav-item ${activeSection === key ? "active" : ""
                }`}
              onClick={() => {
                setActiveSection(key);
                setSidebarOpen(false);
              }}
            >
              <i className={`bi ${getIconForSection(key)}`}></i>
              <span>{sections[key]}</span>
            </div>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="sf-user">
            <i className="bi bi-person-circle fs-4"></i>
            <div>
              <div className="fw-bold small">Admin User</div>
              <small className="opacity-75">admin@nave.org</small>
            </div>
          </div>
          <a href="/" className="logout-btn">
            <i className="bi bi-box-arrow-right"></i>
          </a>
        </div>
      </aside>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="admin-content">
        {/* HEADER */}
        <header className="content-header">
          <div className="tx-align">
            <h2 className="fw-bold mb-1">Painel Administrativo</h2>
            <p className="text-muted mb-0">
              Bem-vinda ao painel de controle da Rede NAVE
            </p>
          </div>

          <div>
            <button className="btn btn-outline-primary me-2">
              <i className="bi bi-download"></i> Exportar
            </button>
            <button className="btn btn-primary">
              <i className="bi bi-plus-lg"></i> Novo
            </button>
          </div>
        </header>

        {/* SEÇÕES */}
        {activeSection === "dashboard" && <DashboardSection />}

        {activeSection === "users" && (
          <GenericSection
            title="Gerenciar Usuárias"
            buttonText="Adicionar Usuária"
          />
        )}

        {activeSection === "courses" && (
          <GenericSection
            title="Gerenciar Trilhas"
            buttonText="Criar Trilha"
          />
        )}

        {activeSection === "events" && (
          <GenericSection
            title="Gerenciar Eventos"
            buttonText="Novo Evento"
          />
        )}

        {activeSection === "certificates" && (
          <GenericSection
            title="Certificados"
            buttonText="Emitir Certificado"
          />
        )}

        {activeSection === "reports" && (
          <GenericSection
            title="Relatórios e Análises"
            buttonText="Gerar Relatório"
          />
        )}

        {activeSection === "settings" && (
          <GenericSection
            title="Configurações do Sistema"
            buttonText="Salvar Alterações"
          />
        )}
      </main>
    </div>
  );
}
