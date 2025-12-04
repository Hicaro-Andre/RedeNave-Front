import { useState, useEffect } from "react";

export default function AdminDash() {
  const [activeSection, setActiveSection] = useState("dashboard");

  const sections = {
    dashboard: "Dashboard",
    users: "Usuárias",
    courses: "Trilhas",
    events: "Eventos",
    certificates: "Certificados",
    reports: "Relatórios",
    settings: "Configurações",
  };

  // Para animar os números de estatísticas
  const animateNumbers = () => {
    const statElements = document.querySelectorAll(".stat-value");
    statElements.forEach((stat) => {
      const target = parseInt(stat.dataset.target || "0");
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
  }, []);

  const getIconForSection = (key) => {
    switch (key) {
      case "dashboard": return "bi-speedometer2";
      case "users": return "bi-people";
      case "courses": return "bi-book";
      case "events": return "bi-calendar-event";
      case "certificates": return "bi-award";
      case "reports": return "bi-graph-up";
      case "settings": return "bi-gear";
      default: return "bi-gear";
    }
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="admin-sidebar">
        <div className="sidebar-header text-center">
          <h4 className="fw-bold mb-0">
            <i className="bi bi-shield-check"></i> Admin NAVE
          </h4>
          <small className="d-block mt-2 opacity-75">Painel Administrativo</small>
        </div>

        <nav className="sidebar-nav">
          {Object.keys(sections).map((key) => (
            <div
              key={key}
              className={`sidebar-nav-item ${activeSection === key ? "active" : ""}`}
              onClick={() => setActiveSection(key)}
              style={{ cursor: "pointer" }}
            >
              <i className={`bi ${getIconForSection(key)}`}></i>
              <span>{sections[key]}</span>
            </div>
          ))}
        </nav>

        {/* Footer Sidebar */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "1.5rem",
          borderTop: "1px solid rgba(255,255,255,0.1)"
        }}>
          <div className="d-flex align-items-center gap-2">
            <div style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <i className="bi bi-person-circle fs-4"></i>
            </div>
            <div style={{ flex: 1 }}>
              <div className="fw-bold small">Admin User</div>
              <small className="opacity-75">admin@nave.org</small>
            </div>
            <a href="/" className="text-white" title="Sair">
              <i className="bi bi-box-arrow-right fs-5"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="admin-content">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
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
        </div>

        {/* Sections */}
        {activeSection === "dashboard" && (
          <DashboardSection />
        )}

        {activeSection === "users" && (
          <GenericSection title="Gerenciar Usuárias" buttonText="Adicionar Usuária" />
        )}
        {activeSection === "courses" && (
          <GenericSection title="Gerenciar Trilhas" buttonText="Criar Trilha" />
        )}
        {activeSection === "events" && (
          <GenericSection title="Gerenciar Eventos" buttonText="Novo Evento" />
        )}
        {activeSection === "certificates" && (
          <GenericSection title="Certificados" buttonText="Emitir Certificado" />
        )}
        {activeSection === "reports" && (
          <GenericSection title="Relatórios e Análises" buttonText="Gerar Relatório" />
        )}
        {activeSection === "settings" && (
          <GenericSection title="Configurações do Sistema" buttonText="Salvar Alterações" />
        )}
      </div>
    </div>
  );
}

// DashboardSection Component
function DashboardSection() {
  const stats = [
    {
      icon: "bi-people-fill",
      value: 1247,
      label: "Usuárias Ativas",
      color: "#2196f3",
      bg: "#e3f2fd",
      small: "+12% este mês",
      smallColor: "text-success"
    },
    {
      icon: "bi-book-fill",
      value: 42,
      label: "Trilhas Disponíveis",
      color: "#9c27b0",
      bg: "#f3e5f5",
      small: "+3 novas",
      smallColor: "text-success"
    },
    {
      icon: "bi-award-fill",
      value: 856,
      label: "Certificados Emitidos",
      color: "#ff9800",
      bg: "#fff3e0",
      small: "+45 esta semana",
      smallColor: "text-success"
    },
    {
      icon: "bi-calendar-check-fill",
      value: 28,
      label: "Eventos Agendados",
      color: "#4caf50",
      bg: "#e8f5e9",
      small: "5 esta semana",
      smallColor: "text-info"
    },
  ];

  const quickActions = [
    { icon: "bi-person-plus", color: "text-primary", title: "Nova Usuária", subtitle: "Cadastrar nova aluna" },
    { icon: "bi-plus-circle", color: "text-success", title: "Nova Trilha", subtitle: "Criar curso novo" },
    { icon: "bi-calendar-plus", color: "text-warning", title: "Novo Evento", subtitle: "Agendar workshop" },
    { icon: "bi-file-earmark-text", color: "text-danger", title: "Gerar Relatório", subtitle: "Exportar dados" },
  ];

  const latestRegistrations = [
    {
      name: "Maria Silva",
      initials: "MS",
      email: "maria@email.com",
      trail: "Gestão Financeira",
      date: "Hoje, 10:30",
      status: "Ativa",
      statusColor: "bg-success"
    },
    {
      name: "Ana Paula",
      initials: "AP",
      email: "ana@email.com",
      trail: "Marketing Digital",
      date: "Ontem, 15:20",
      status: "Pendente",
      statusColor: "bg-warning text-dark"
    },
    {
      name: "Juliana Costa",
      initials: "JC",
      email: "juliana@email.com",
      trail: "Liderança",
      date: "25/10/2025",
      status: "Ativa",
      statusColor: "bg-success"
    },
  ];

  const activities = [
    { icon: "bi-person-check", color: "text-primary", title: "Nova usuária aprovada", subtitle: "Carla Santos foi aprovada", time: "5 min atrás" },
    { icon: "bi-award", color: "text-success", title: "Certificado emitido", subtitle: "Paula Lima completou trilha", time: "1 hora atrás" },
    { icon: "bi-calendar-plus", color: "text-warning", title: "Novo evento criado", subtitle: "Workshop de Precificação", time: "2 horas atrás" },
    { icon: "bi-file-earmark-text", color: "text-info", title: "Relatório gerado", subtitle: "Relatório mensal de outubro", time: "3 horas atrás" },
  ];

  return (
    <>
      {/* Estatísticas */}
      <div className="row g-3 mb-4">
        {stats.map((s, i) => (
          <div key={i} className="col-md-3">
            <div className="stat-card">
              <div className="stat-icon" style={{ background: s.bg, color: s.color }}>
                <i className={`bi ${s.icon}`}></i>
              </div>
              <div className="stat-value" data-target={s.value}>0</div>
              <div className="stat-label">{s.label}</div>
              <div className="mt-2">
                <small className={s.smallColor}>
                  <i className="bi bi-arrow-up"></i> {s.small}
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Ações rápidas */}
      <div className="row g-3 mb-4">
        {quickActions.map((q, i) => (
          <div key={i} className="col-md-3">
            <div className="quick-action-btn">
              <i className={`bi ${q.icon} fs-2 ${q.color} mb-2`}></i>
              <div className="fw-bold">{q.title}</div>
              <small className="text-muted">{q.subtitle}</small>
            </div>
          </div>
        ))}
      </div>

      {/* Tabelas */}
      <div className="row g-3">
        <div className="col-lg-8">
          <div className="table-card">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fw-bold mb-0">Últimas Inscrições</h5>
              <a href="#" className="text-decoration-none">Ver todas <i className="bi bi-arrow-right"></i></a>
            </div>
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Trilha</th>
                    <th>Data</th>
                    <th>Status</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {latestRegistrations.map((reg, idx) => (
                    <tr key={idx}>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <div style={{
                            width: "35px",
                            height: "35px",
                            borderRadius: "50%",
                            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            fontWeight: "bold"
                          }}>
                            {reg.initials}
                          </div>
                          <div>
                            <div className="fw-bold">{reg.name}</div>
                            <small className="text-muted">{reg.email}</small>
                          </div>
                        </div>
                      </td>
                      <td>{reg.trail}</td>
                      <td>{reg.date}</td>
                      <td>
                        <span className={`badge-status ${reg.statusColor}`}>
                          {reg.status}
                        </span>
                      </td>
                      <td>
                        <button className="btn btn-sm btn-outline-primary">
                          <i className="bi bi-eye"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="table-card">
            <h5 className="fw-bold mb-3">Atividade Recente</h5>
            <div className="activity-feed">
              {activities.map((act, i) => (
                <div key={i} className="activity-item mb-3 pb-3 border-bottom">
                  <div className="d-flex gap-2">
                    <div className={act.color}>
                      <i className={`bi ${act.icon} fs-5`}></i>
                    </div>
                    <div>
                      <div className="fw-bold small">{act.title}</div>
                      <small className="text-muted">{act.subtitle}</small>
                      <div className="text-muted" style={{ fontSize: "0.75rem" }}>
                        {act.time}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Generic Section Component
function GenericSection({ title, buttonText }) {
  return (
    <div className="table-card">
      <h3 className="fw-bold mb-4">{title}</h3>
      <p className="text-muted">Conteúdo da seção {title.toLowerCase()}...</p>
      <button className="btn btn-primary">{buttonText}</button>
    </div>
  );
}