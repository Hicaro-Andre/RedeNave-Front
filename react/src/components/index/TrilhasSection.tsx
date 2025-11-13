import React from "react";

const TrilhasSection: React.FC = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* Cabeçalho */}
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">Nossas Trilhas de Aprendizagem</h2>
          <p className="text-muted">
            Escolha a trilha ideal para desenvolver suas habilidades
            empreendedoras
          </p>
        </div>

        {/* Trilhas (dinâmicas futuramente) */}
        <div className="row g-4" id="trilhasContainer">
          {/* As trilhas serão carregadas dinamicamente via React */}
        </div>

        {/* Botão */}
        <div className="text-center mt-4">
          <a href="src/pages/trilhas.html" className="btn btn-primary btn-lg">
            Ver Todas as Trilhas <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrilhasSection;
