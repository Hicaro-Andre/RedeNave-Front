import React from "react";

const HomeHero: React.FC = () => {
  return (
    <section className="hero-section text-white text-center py-5">
      <div className="container py-5">
        <div className="row align-items-center">
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
              <a
                href="src/pages/cadastro.html"
                className="btn btn-warning btn-lg px-4"
              >
                <i className="bi bi-person-plus"></i> Começar Agora
              </a>
              <a href="#sobre" className="btn btn-outline-light btn-lg px-4">
                <i className="bi bi-info-circle"></i> Saiba Mais
              </a>
            </div>
          </div>

          <div className="col-lg-6 mt-4 mt-lg-0">
            <img
              src="src/assets/index/hero-illustration.jpeg"
              alt="Mulheres empreendedoras"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
