import React from "react";


export default function AboutHero() {
  return (
    <section className="hero-section text-white py-5">
      <div className="container py-5">
        <div className="row align-items-center">

          {/* COLUNA DO TEXTO */}
          <div className="col-lg-6 text-start">
            <h1 className="display-3 fw-bold mb-4">Sobre a Rede Nave</h1>
            <p className="lead mb-4">
              Transformando vidas através da educação empreendedora
            </p>
            <p className="fs-5">
              Somos uma rede dedicada ao empoderamento de mulheres empreendedoras,
              <br />
              oferecendo formação, capacitação e apoio para o desenvolvimento de
              negócios sustentáveis.
            </p>
          </div>

          {/* COLUNA DA IMAGEM */}
          <div className="col-lg-6 d-flex justify-content-center mt-4 mt-lg-0">
            <img
              src=""
              alt="Ilustração mulheres empreendedoras"
              className="img-fluid hero-image"
              style={{ maxWidth: "75%", height: "auto" }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
