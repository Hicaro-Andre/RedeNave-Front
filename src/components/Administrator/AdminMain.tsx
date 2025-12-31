import React, { useEffect, useState } from "react";
import logo from "/src/assets/logoRedeNave.png";

import DashboardSection from "./DashboardSection";
import GenericSection from "./GenericSection";

type AdminAction = "list" | "create";

interface Section {
  [key: string]: string;
}

export default function AdminMain() {
  const [activeSection, setActiveSection] = useState<string>("dashboard");
  const [currentAction, setCurrentAction] = useState<AdminAction>("list");
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

  useEffect(() => {
    if (activeSection === "dashboard") {
      document.querySelectorAll<HTMLElement>(".stat-value").forEach((stat) => {
        const target = Number(stat.dataset.target || 0);
        let current = 0;
        const increment = target / 60;

        const animate = () => {
          current += increment;
          if (current >= target) {
            stat.textContent = target.toLocaleString();
          } else {
            stat.textContent = Math.floor(current).toLocaleString();
            requestAnimationFrame(animate);
          }
        };
        animate();
      });
    }
  }, [activeSection]);

  const showNewButton =
    !["dashboard", "settings"].includes(activeSection);

  const getCreateTitle = () => {
    switch (activeSection) {
      case "users":
        return "Adicionar Usuária";
      case "courses":
        return "Criar Trilha";
      case "events":
        return "Novo Evento";
      case "certificates":
        return "Emitir Certificado";
      case "reports":
        return "Gerar Relatório";
      default:
        return "";
    }
  };

  const renderForm = () => {
    switch (activeSection) {
      /* ================= USUÁRIAS ================= */
      case "users":
        return (
          <>
            <Input label="Nome completo" />
            <Input label="CPF" />
            <Input label="E-mail" type="email" />
            <Input label="Telefone" />
            <Input label="Data de nascimento" type="date" />
            <Input label="Cidade / Estado" />
          </>
        );

      /* ================= TRILHAS ================= */
      case "courses":
        return (
          <>
            <Input label="Título da trilha" />
            <Textarea label="Descrição" />
            <Textarea label="Conteúdo programático" />
            <Input label="Banner do curso" type="file" />
          </>
        );

      /* ================= EVENTOS ================= */
      case "events":
        return (
          <>
            <Input label="Título do evento" />
            <Select
              label="Tipo"
              options={["Feira", "Workshop", "Live"]}
            />
            <Input label="Data" type="date" />
            <Input label="Horário" type="time" />
            <Select
              label="Modo"
              options={["YouTube", "Online", "Presencial"]}
            />
          </>
        );

      /* ================= CERTIFICADOS ================= */
      case "certificates":
        return (
          <>
            <Input label="Usuária" />
            <Input label="Trilha" />
            <Input label="Data de emissão" type="date" />
            <Select
              label="Modelo do certificado"
              options={["Padrão", "Avançado", "Personalizado"]}
            />
          </>
        );

      /* ================= RELATÓRIOS ================= */
      case "reports":
        return (
          <>
            <Select
              label="Tipo de relatório"
              options={[
                "Usuárias",
                "Trilhas",
                "Eventos",
                "Certificados",
              ]}
            />
            <Input label="Período inicial" type="date" />
            <Input label="Período final" type="date" />
            <Select
              label="Formato"
              options={["PDF", "Excel", "CSV"]}
            />
          </>
        );

      /* ================= CONFIGURAÇÕES ================= */
      case "settings":
        return (
          <>
            <Input label="Nome da plataforma" />
            <Input label="E-mail institucional" type="email" />
            <Input label="Telefone de contato" />
            <Input label="URL do site" />
            <Select
              label="Tema"
              options={["Claro", "Escuro", "Automático"]}
            />
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="layout-wrapper">
      <button
        className={`menu-toggle ${sidebarOpen ? "open" : ""}`}
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        ☰
      </button>
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}


      <aside className={`admin-sidebar ${sidebarOpen ? "open" : ""}`}>
        {/* HEADER */}
        <div className="sidebar-header">
          <img src={logo} alt="Rede Nave" className="sidebar-logo" />
          <span className="sidebar-sub">Painel Administrativo</span>
        </div>


        {/* NAV */}
        <nav className="sidebar-nav">
          {Object.keys(sections).map((key) => (
            <div
              key={key}
              className={`sidebar-nav-item ${activeSection === key ? "active" : ""
                }`}
              onClick={() => {
                setActiveSection(key);
                setCurrentAction("list");
                setSidebarOpen(false);
              }}
            >
              <span className="tx-align">{sections[key]}</span>
            </div>
          ))}
        </nav>

        {/* FOOTER */}
        <div className="sidebar-footer">
          <div className="sf-user">
            <div className="sf-avatar">A</div>

            <div className="sf-user-info">
              <span>Admin</span>
              <small>admin@nave.org</small>
            </div>
          </div>

          <a href="/" className="logout-btn">
            <i className="bi bi-box-arrow-right"></i>
          </a>
        </div>

      </aside>


      <main className="admin-content">
        <header className="content-header">
          <h2>{sections[activeSection]}</h2>

          {showNewButton && (
            <button
              className="btn btn-primary"
              onClick={() => setCurrentAction("create")}
            >
              Novo
            </button>
          )}
        </header>

        {activeSection === "dashboard" && <DashboardSection />}

        {currentAction === "list" && activeSection !== "dashboard" && (
          <GenericSection
            title={sections[activeSection]}
            buttonText={getCreateTitle()}
            onAction={() => setCurrentAction("create")}
          />
        )}

        {currentAction === "create" && (
          <div className="table-card">
            <h3 className="fw-bold mb-4">{getCreateTitle()}</h3>

            {renderForm()}

            <div className="d-flex gap-2 mt-4">
              <button
                className="btn btn-secondary"
                onClick={() => setCurrentAction("list")}
              >
                Cancelar
              </button>
              <button className="btn btn-primary">
                Salvar
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

/* ================= COMPONENTES AUXILIARES ================= */

function Input({
  label,
  type = "text",
}: {
  label: string;
  type?: string;
}) {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input type={type} className="form-control" />
    </div>
  );
}

function Textarea({ label }: { label: string }) {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <textarea className="form-control" rows={3} />
    </div>
  );
}

function Select({
  label,
  options,
}: {
  label: string;
  options: string[];
}) {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <select className="form-select">
        {options.map((op) => (
          <option key={op}>{op}</option>
        ))}
      </select>
    </div>
  );
}
