import React from "react";
import { Link } from "react-router-dom";

export default function CallSection() {
  return (
    <section className="cta-section py-5 text-white text-center">
      <div className="container">
        <h2 className="fw-bold mb-3">Pronta para Transformar seu Negócio?</h2>

        <p className="lead mb-4">
          Junte-se a centenas de mulheres que já transformaram seus empreendimentos
        </p>

        <Link to="/cadastro" className="btn btn-lg px-5">
          Cadastre-se Gratuitamente <i className="bi bi-arrow-right"></i>
        </Link>
      </div>
    </section>
  );
}
