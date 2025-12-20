import React from "react";

interface Certificado {
  title: string;
  date: string;
  hours: number;
  bg: string;
}

const DashboardCertificados: React.FC = () => {
  const certificados: Certificado[] = [
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
  ];

  return (
    <div className="dashboard-section">
      <h2 className="fw-bold mb-4">Meus Certificados 🎓</h2>

      <div className="row g-4">
        {certificados.map((cert, idx) => (
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
                <i className="bi bi-award" style={{ fontSize: "4rem" }} />

                <h4 className="fw-bold mt-3">{cert.title}</h4>
                <p className="mb-2">Concluído em {cert.date}</p>
                <p className="small mb-4">
                  Carga horária: {cert.hours} horas
                </p>

                <button className="btn btn-light">
                  <i className="bi bi-download" /> Baixar Certificado
                </button>
                <button className="btn btn-outline-light ms-2">
                  <i className="bi bi-share" /> Compartilhar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardCertificados;
