

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
          // { icon: "bi-lightning-fill text-danger", number: 7, label: "Dias de Streak" },
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
    </div>
  );
};

export default DashboardOverview;
