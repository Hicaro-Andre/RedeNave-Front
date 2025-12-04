import React from "react";

export default function StatsSection() {
  return (
    <section className="stats-section py-4 bg-light">
      <div className="container">
        <div className="row text-center">

          <div className="col-md-3 col-6 mb-3 mb-md-0">
            <div className="stat-card-home estatistica">
              <h3 className="fw-bold mb-0">500+</h3>
              <p className="mb-0">Mulheres Capacitadas</p>
            </div>
          </div>

          <div className="col-md-3 col-6 mb-3 mb-md-0">
            <div className="stat-card-home estatistica">
              <h3 className="fw-bold mb-0">20+</h3>
              <p className="mb-0">Cursos Disponíveis</p>
            </div>
          </div>

          <div className="col-md-3 col-6">
            <div className="stat-card-home estatistica">
              <h3 className="fw-bold mb-0">95%</h3>
              <p className="mb-0">Taxa de Satisfação</p>
            </div>
          </div>

          <div className="col-md-3 col-6">
            <div className="stat-card-home estatistica">
              <h3 className="fw-bold mb-0">100%</h3>
              <p className="mb-0">Online e Gratuito</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

