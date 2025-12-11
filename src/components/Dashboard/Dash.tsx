import { useState } from "react";

export default function Dash() {
  const [section, setSection] = useState("overview");
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
                    <a className="dropdown-item">
                      <i className="bi bi-person"></i> Meu Perfil
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item">
                      <i className="bi bi-gear"></i> Configurações
                    </a>
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
            <div className="dashboard-sidebar">

              {/* FOTO DE PERFIL COM OVERLAY */}
              <label className="profile-img-container" htmlFor="upload-foto">

                {fotoPerfil ? (
                  <img src={fotoPerfil} alt="Foto de perfil" className="profile-img" />
                ) : (
                  <div className="profile-img initials">MS</div>
                )}

                {/* OVERLAY */}
                <div className="profile-overlay">
                  <i className="bi bi-camera-fill me-2"></i> Alterar foto
                </div>
              </label>

              {/* INPUT ESCONDIDO */}
              <input
                type="file"
                id="upload-foto"
                accept="image/*"
                onChange={handleUploadFoto}
                style={{ display: "none" }}
              />


              <h5 className="text-center fw-bold">Maria Silva</h5>
              <p className="text-center text-muted small">
                maria.silva@email.com
              </p>

              <div className="text-center mb-4">
                <span className="badge bg-warning text-dark px-3 py-2">
                  <i className="bi bi-trophy"></i> Nível 3
                </span>
              </div>

              <hr />

              {/* MENU */}
              {["overview", "cursos", "certificados", "atividades", "ranking"].map(
                (item) => {
                  const icons = {
                    overview: "bi-house-door",
                    cursos: "bi-book",
                    certificados: "bi-award",
                    atividades: "bi-list-check",
                    ranking: "bi-graph-up",
                  };
                  const labels = {
                    overview: "Visão Geral",
                    cursos: "Meus Cursos",
                    certificados: "Certificados",
                    atividades: "Atividades",
                    ranking: "Ranking",
                  };
                  return (
                    <div
                      key={item}
                      className={`menu-item ${section === item ? "active" : ""
                        }`}
                      onClick={() => handleSection(item)}
                    >
                      <i className={`bi ${icons[item]}`}></i> {labels[item]}
                    </div>
                  );
                }
              )}

              <hr />
              <div className="text-center">
                <small className="text-muted">Membro desde</small>
                <p className="fw-bold mb-0">Janeiro 2025</p>
              </div>
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="col-lg-9">
            {/* ============ OVERVIEW ============ */}
            {section === "overview" && (
              <div className="dashboard-section">
                <h2 className="fw-bold mb-4">Olá, Maria! 👋</h2>
                <p className="text-muted mb-4">
                  Bem-vinda de volta! Aqui está um resumo do seu progresso.
                </p>

                {/* Estatísticas */}
                <div className="row g-4 mb-4">
                  {[
                    {
                      icon: "bi-book-fill text-primary",
                      number: 3,
                      label: "Cursos Ativos",
                    },
                    {
                      icon: "bi-check-circle-fill text-success",
                      number: 2,
                      label: "Concluídos",
                    },
                    {
                      icon: "bi-award-fill text-warning",
                      number: 2,
                      label: "Certificados",
                    },
                    {
                      icon: "bi-lightning-fill text-danger",
                      number: 7,
                      label: "Dias de Streak",
                    },
                  ].map((stat, idx) => (
                    <div key={idx} className="col-md-3">
                      <div className="stat-box text-center">
                        <i
                          className={`bi ${stat.icon}`}
                          style={{ fontSize: "2.5rem" }}
                        ></i>
                        <h3 className="fw-bold mt-3 mb-0">{stat.number}</h3>
                        <p className="text-muted mb-0">{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Continue Aprendendo */}
                <h4 className="fw-bold mb-3">Continue Aprendendo</h4>
                <div className="row g-4 mb-4">
                  {[
                    {
                      title: "Marketing Digital",
                      progress: 40,
                      module: "Módulo 4 de 10",
                      hours: "3h restantes",
                      btnClass: "btn-primary",
                    },
                    {
                      title: "Gestão Financeira",
                      progress: 67,
                      module: "Módulo 8 de 12",
                      hours: "2h restantes",
                      btnClass: "btn-success",
                    },
                  ].map((course, idx) => (
                    <div key={idx} className="col-md-6">
                      <div className="curso-progress-card">
                        <div className="d-flex justify-content-between align-items-start mb-3">
                          <div>
                            <h5 className="fw-bold mb-1">{course.title}</h5>
                            <small className="text-muted">{course.module}</small>
                          </div>
                          <span
                            className={`badge bg-${course.btnClass.split("-")[1]
                              }`}
                          >
                            {course.progress}%
                          </span>
                        </div>
                        <div className="progress mb-3" style={{ height: "10px" }}>
                          <div
                            className={`progress-bar bg-${course.btnClass.split("-")[1]
                              }`}
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <small className="text-muted">
                            <i className="bi bi-clock"></i> {course.hours}
                          </small>
                          <button className={`btn btn-sm ${course.btnClass}`}>
                            Continuar <i className="bi bi-play-fill"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Conquistas */}
                <h4 className="fw-bold mb-3">Conquistas Recentes 🏆</h4>
                <div className="row g-4 mb-4">
                  {[
                    {
                      emoji: "🎯",
                      title: "Primeira Trilha",
                      desc: "Completou seu primeiro curso",
                      bg: "bg-warning",
                    },
                    {
                      emoji: "🔥",
                      title: "7 Dias Seguidos",
                      desc: "Acessou 7 dias consecutivos",
                      bg: "bg-success",
                    },
                    {
                      emoji: "⭐",
                      title: "Avaliação 5 Estrelas",
                      desc: "Avaliou um curso com 5 estrelas",
                      bg: "bg-info",
                    },
                    {
                      emoji: "👥",
                      title: "Networking",
                      desc: "Conectou-se com 10 alunas",
                      bg: "bg-danger",
                    },
                  ].map((c, idx) => (
                    <div key={idx} className="col-md-3 text-center">
                      <div className={`badge-conquista ${c.bg}`}>{c.emoji}</div>
                      <h6 className="mt-2 fw-bold">{c.title}</h6>
                      <small className="text-muted">{c.desc}</small>
                    </div>
                  ))}
                </div>

                {/* Atividades */}
                <h4 className="fw-bold mb-3">Próximas Atividades 📅</h4>
                {[
                  {
                    title: "Workshop: Precificação Inteligente",
                    date: "15 Nov, 19:00",
                    type: "Online",
                    badge: "bg-warning",
                    status: "Inscrita",
                  },
                  {
                    title: "Entrega: Plano de Marketing",
                    date: "18 Nov, 23:59",
                    badge: "bg-danger",
                    status: "Pendente",
                  },
                  {
                    title: "Live: Instagram para Vendas",
                    date: "25 Nov, 20:00",
                    type: "YouTube",
                    badge: "bg-info",
                    status: "Lembrete",
                  },
                ].map((act, idx) => (
                  <div key={idx} className="atividade-item mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h6 className="fw-bold mb-1">{act.title}</h6>
                        <small className="text-muted">
                          <i className="bi bi-calendar"></i> {act.date}{" "}
                          {act.type && `|`}{" "}
                          {act.type &&
                            (act.type === "Online" ? (
                              <i className="bi bi-laptop"></i>
                            ) : (
                              <i className="bi bi-camera-video"></i>
                            ))}{" "}
                          {act.type && act.type}
                        </small>
                      </div>
                      <span className={`badge ${act.badge}`}>
                        {act.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* CERTIFICADOS */}
            {section === "certificados" && (
              <div className="dashboard-section">
                <h2 className="fw-bold mb-4">Meus Certificados 🎓</h2>
                <div className="row g-4">
                  {[
                    {
                      title: "Gestão Financeira Básica",
                      date: "15 de Outubro de 2025",
                      hours: 40,
                      bg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    },
                    {
                      title: "Fundamentos de Vendas",
                      date: "28 de Setembro de 2025",
                      hours: 32,
                      bg: "linear-gradient(135deg, #198754 0%, #20c997 100%)",
                    },
                  ].map((cert, idx) => (
                    <div key={idx} className="col-md-6">
                      <div className="card h-100">
                        <div
                          className="card-body text-center p-4"
                          style={{
                            background: cert.bg,
                            color: "white",
                            borderRadius: "15px",
                          }}
                        >
                          <i
                            className="bi bi-award"
                            style={{ fontSize: "4rem" }}
                          ></i>
                          <h4 className="fw-bold mt-3">{cert.title}</h4>
                          <p className="mb-3">Concluído em {cert.date}</p>
                          <p className="small mb-3">
                            Carga horária: {cert.hours} horas
                          </p>
                          <button className="btn btn-light">
                            <i className="bi bi-download"></i> Baixar
                            Certificado
                          </button>
                          <button className="btn btn-outline-light ms-2">
                            <i className="bi bi-share"></i> Compartilhar
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ATIVIDADES */}
            {section === "atividades" && (
              <div className="dashboard-section">
                <h2 className="fw-bold mb-4">Próximas Atividades 📅</h2>
                <p className="text-muted">
                  Todas as atividades futuras da plataforma.
                </p>
              </div>
            )}

            {/* RANKING */}
            {section === "ranking" && (
              <div className="dashboard-section">
                <h2 className="fw-bold mb-4">Ranking 📊</h2>
                <p className="text-muted">
                  Ranking dos melhores alunos da plataforma (exemplo).
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
