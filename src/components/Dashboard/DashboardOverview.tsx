

const DashboardOverview = () => {
  return (
    <div className="dashboard-section">
      <h2 className="fw-bold mb-4">Olá, Maria! 👋</h2>
      <p className="text-muted mb-4">
        Bem-vinda de volta! Aqui está um resumo do seu progresso.
      </p>

      {/* Estatísticas */}
      <div className="row g-4 mb-4">
        {[
          { icon: "bi-book-fill text-primary", number: 3, label: "Cursos Ativos" },
          { icon: "bi-check-circle-fill text-success", number: 2, label: "Concluídos" },
          { icon: "bi-award-fill text-warning", number: 2, label: "Certificados" },
          { icon: "bi-lightning-fill text-danger", number: 7, label: "Dias de Streak" },
        ].map((stat, idx) => (
          <div key={idx} className="col-md-3">
            <div className="stat-box text-center">
              <i className={`bi ${stat.icon}`} style={{ fontSize: "2.5rem" }}></i>
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
            color: "primary",
          },
          {
            title: "Gestão Financeira",
            progress: 67,
            module: "Módulo 8 de 12",
            hours: "2h restantes",
            color: "success",
          },
        ].map((course, idx) => (
          <div key={idx} className="col-md-6">
            <div className="curso-progress-card">
              <div className="d-flex justify-content-between mb-3">
                <div>
                  <h5 className="fw-bold mb-1">{course.title}</h5>
                  <small className="text-muted">{course.module}</small>
                </div>
                <span className={`badge bg-${course.color}`}>
                  {course.progress}%
                </span>
              </div>

              <div className="progress mb-3" style={{ height: "10px" }}>
                <div
                  className={`progress-bar bg-${course.color}`}
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>

              <div className="d-flex justify-content-between">
                <small className="text-muted">
                  <i className="bi bi-clock"></i> {course.hours}
                </small>
                <button className={`btn btn-sm btn-${course.color}`}>
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
          { emoji: "🎯", title: "Primeira Trilha", desc: "Completou seu primeiro curso", bg: "bg-warning" },
          { emoji: "🔥", title: "7 Dias Seguidos", desc: "Acessou 7 dias consecutivos", bg: "bg-success" },
          { emoji: "⭐", title: "Avaliação 5 Estrelas", desc: "Avaliou um curso com 5 estrelas", bg: "bg-info" },
          { emoji: "👥", title: "Networking", desc: "Conectou-se com 10 alunas", bg: "bg-danger" },
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
        { title: "Workshop: Precificação Inteligente", date: "15 Nov, 19:00", badge: "bg-warning", status: "Inscrita" },
        { title: "Entrega: Plano de Marketing", date: "18 Nov, 23:59", badge: "bg-danger", status: "Pendente" },
        { title: "Live: Instagram para Vendas", date: "25 Nov, 20:00", badge: "bg-info", status: "Lembrete" },
      ].map((act, idx) => (
        <div key={idx} className="atividade-item mb-3">
          <div className="d-flex justify-content-between">
            <div>
              <h6 className="fw-bold mb-1">{act.title}</h6>
              <small className="text-muted">
                <i className="bi bi-calendar"></i> {act.date}
              </small>
            </div>
            <span className={`badge ${act.badge}`}>{act.status}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardOverview;
