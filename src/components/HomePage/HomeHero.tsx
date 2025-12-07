import React from "react";

import fotobanner from "/src/assets/index/hero-illustration.jpeg";

export default function HeroSection() {
  return (
    <section className="hero-section text-white text-center py-5">
      <div className="container py-5">
        <div className="row align-items-center">

          {/* Texto */}
          <div className="col-lg-6 text-lg-start">
            <h1 className="display-4 fw-bold mb-4 animate-fade-in">
              Empoderando Mulheres Empreendedoras
            </h1>

            <p className="lead mb-4">
              A Rede NAVE é uma plataforma de formação que oferece capacitação
              empreendedora para mulheres, com trilhas personalizadas e
              acompanhamento completo do seu progresso.
            </p>

            <div className="d-grid d-sm-flex gap-2">
              <a href="/cadastro" className="btn btn-lg px-4">
                <i className="bi bi-person-plus"></i> Começar Agora
              </a>

              <a href="#sobre" className="btn btn-outline-light btn-lg px-4">
                <i className="bi bi-info-circle"></i> Saiba Mais
              </a>
            </div>
          </div>

          {/* Imagem */}
          <div className="col-lg-6 mt-4 mt-lg-0">
            <img
              src={fotobanner}
              alt="Mulheres empreendedoras"
              className="img-fluid"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
