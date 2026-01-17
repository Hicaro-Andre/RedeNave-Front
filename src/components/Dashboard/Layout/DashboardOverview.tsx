import { useEffect, useState } from "react";


const DashboardOverview = () => {

  const [nome, setNome] = useState<string>("");

  useEffect(() => {
    const nomeSalvo = localStorage.getItem("nome");
    if (nomeSalvo) setNome(nomeSalvo);
  }, []);


  return (
    <div className="dashboard-section">
      <h2 className="fw-bold mb-4">Olá, {nome || "Usuário"}! 👋</h2>
      <p className="text-muted mb-4">
        Bem-vinda de volta! Aqui está um resumo do seu progresso.
      </p>

      {/* Estatísticas */}
      <div className="row g-4 mb-4">
        {[
          { icon: "bi-mortarboard-fill text-primary", number: 3, label: "Cursos Ativos" },
          { icon: "bi-award-fill text-success", number: 2, label: "Concluídos" },
          { icon: "bi-patch-check-fill text-warning", number: 2, label: "Certificados" },
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
      <h4 className="fw-bold mb-3">Continue de onde parou</h4>
      <div className="row g-4 mb-4">
        {[
          {
            title: "Marketing Digital",
            progress: 40,
            module: "Módulo 4 de 10",
            remaining: "48% restantes",
            color: "#3b82f6",
          },
          {
            title: "Gestão Financeira",
            progress: 67,
            module: "Módulo 6 de 10",
            remaining: "29% restantes",
            color: "#10b981",
          },
        ].map((course, idx) => (
          <div key={idx} className="col-md-6">
            <div className="continue-card">

              {/* ESQUERDA */}
              <div className="continue-left">
                <h5 className="fw-bold mb-1">{course.title}</h5>
                <small className="text-muted">{course.module}</small>

                <div className="progress continue-progress">
                  <div
                    className="progress-bar"
                    style={{
                      width: `${course.progress}%`,
                      backgroundColor: course.color,
                    }}
                  />
                </div>

                <small className="text-muted">{course.remaining}</small>
              </div>

              {/* DIREITA */}
              <div className="continue-right">
                <div
                  className="progress-circle"
                  style={{
                    background: `conic-gradient(${course.color} ${course.progress * 3.6}deg, #e5e7eb 0deg)`,
                  }}
                >
                  <span>{course.progress}%</span>
                </div>

                <button className="continue-btn">
                  Continuar →
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Certificados */}
      <h4 className="fw-bold mb-3">Certificados</h4>
      <div className="row g-4">
        {[
          {
            title: "Marketing Digital",
            issuedAt: "10 Jan 2026",
            status: "Disponível",
            color: "success",
          },
          {
            title: "Gestão Financeira",
            issuedAt: "02 Dez 2025",
            status: "Disponível",
            color: "success",
          },
        ].map((certificate, idx) => (
          <div key={idx} className="col-md-4">
            <div className="certificate-card">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div>
                  <h6 className="fw-bold mb-1">{certificate.title}</h6>
                  <small className="text-muted">
                    Emitido em {certificate.issuedAt}
                  </small>
                </div>

                <span className={`badge bg-${certificate.color}`}>
                  {certificate.status}
                </span>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <small className="text-muted">
                  <i className="bi bi-patch-check-fill text-success me-1"></i>
                  Certificado válido
                </small>

                <button className="btn btn-sm btn-outline-primary">
                  <i className="bi bi-download"></i>
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
