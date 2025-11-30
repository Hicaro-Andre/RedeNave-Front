import React from "react";
import { Link } from "react-router-dom";

export default function TrilhasAprendizagem() {
  return (
    <section className="py-5 bg-light">
      <div className="container">

        {/* Cabeçalho */}
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">Nossas Trilhas de Aprendizagem</h2>
          <p>
            Escolha a trilha ideal para desenvolver suas habilidades empreendedoras
          </p>
        </div>

        {/* Trilhas carregadas futuramente */}
        <div className="row g-4" id="trilhasContainer">
          {/* Aqui você poderá inserir cards usando map:
              {trilhas.map(t => <TrilhaCard key={t.id} ... />)}
          */}
        </div>

        {/* Botão para página completa */}
        <div className="text-center mt-4">
          <Link to="/trilhas" className="btn btn-lg">
            Ver Todas as Trilhas <i className="bi bi-arrow-right"></i>
          </Link>
        </div>

      </div>
    </section>
  );
}
