import React from "react";

export default function RecursosAdicionais() {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">
          <i className="bi bi-book"></i> Recursos Adicionais
        </h2>

        <div className="row g-4">

          {/* Card 1 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm hover-card bg-card">
              <div className="card-body text-center p-4">
                <i
                  className="bi bi-journal-text mb-3 bg-doc"
                  style={{ fontSize: "3rem" }}
                ></i>
                <h5 className="card-title fw-bold">Documentação</h5>
                <p className="card-text">
                  Guias completos sobre como usar a plataforma
                </p>
                <a href="#" className="btn">
                  Acessar Documentação
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm hover-card bg-card">
              <div className="card-body text-center p-4">
                <i
                  className="bi bi-play-circle mb-3 bg-video"
                  style={{ fontSize: "3rem" }}
                ></i>
                <h5 className="card-title fw-bold">Tutoriais em Vídeo</h5>
                <p className="card-text">
                  Aprenda com vídeos explicativos passo a passo
                </p>
                <a href="#" className="btn">
                  Ver Tutoriais
                </a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm hover-card bg-card">
              <div className="card-body text-center p-4">
                <i
                  className="bi bi-people mb-3 bg-community"
                  style={{ fontSize: "3rem" }}
                ></i>
                <h5 className="card-title fw-bold">Comunidade</h5>
                <p className="card-text">
                  Participe do nosso fórum e tire dúvidas
                </p>
                <a href="#" className="btn">
                  Entrar na Comunidade
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
