import React from "react";

export default function TestimonialsSection() {
  return (
    <section className="py-5">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">O que Nossas Alunas Dizem</h2>
          <p>Histórias reais de transformação</p>
        </div>

        <div className="row g-4">

          {/* Depoimento 1 */}
          <div className="col-md-4">
            <div className="testimonial-card p-4 h-100">
              <div className="rating mb-3">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="bi bi-star-fill text-warning"></i>
                ))}
              </div>

              <p className="mb-3">
                "A Rede NAVE mudou minha vida! Aprendi a gerenciar meu negócio e
                aumentei minhas vendas em 150%."
              </p>

              <div className="d-flex align-items-center">
                <div className="avatar bg-primary text-white rounded-circle me-3">
                  MJ
                </div>
                <div>
                  <h6 className="mb-0 fw-bold">Maria José</h6>
                  <small>Artesã</small>
                </div>
              </div>
            </div>
          </div>

          {/* Depoimento 2 */}
          <div className="col-md-4">
            <div className="testimonial-card p-4 h-100">
              <div className="rating mb-3">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="bi bi-star-fill text-warning"></i>
                ))}
              </div>

              <p className="mb-3">
                "Plataforma incrível! Consegui aprender marketing digital e hoje vendo pelo Instagram."
              </p>

              <div className="d-flex align-items-center">
                <div className="avatar bg-primary text-white rounded-circle me-3">
                  AS
                </div>
                <div>
                  <h6 className="mb-0 fw-bold">Ana Silva</h6>
                  <small>Costureira</small>
                </div>
              </div>
            </div>
          </div>

          {/* Depoimento 3 */}
          <div className="col-md-4">
            <div className="testimonial-card p-4 h-100">
              <div className="rating mb-3">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="bi bi-star-fill text-warning"></i>
                ))}
              </div>

              <p className="mb-3">
                "Os cursos são práticos e direto ao ponto. Aprendi a organizar minhas finanças e a precificar melhor."
              </p>

              <div className="d-flex align-items-center">
                <div className="avatar bg-primary text-white rounded-circle me-3">
                  CL
                </div>
                <div>
                  <h6 className="mb-0 fw-bold">Carla Lima</h6>
                  <small>Confeiteira</small>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
