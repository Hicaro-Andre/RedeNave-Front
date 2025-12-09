import React from "react";


import abouthome from "/src/assets/index/abouthome.png";

export default function AboutSection() {
  return (
    <section id="sobre" className="py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* IMAGEM */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img
              src={abouthome}
              alt="Sobre a Rede NAVE"
              className="img-fluid rounded"
            />
          </div>

          {/* TEXTO */}
          <div className="col-lg-6">
            <h2 className="fw-bold mb-4 text-center text-md-start">
              Sobre a Rede NAVE
            </h2>
            <p className="mb-3 text-center text-md-start">
              A Rede NAVE é uma iniciativa dedicada à formação e capacitação de
              mulheres empreendedoras, oferecendo um ambiente virtual integrado
              de aprendizagem.
            </p>

            {/* LISTA DE FEATURES */}
            <div className="feature-list">

              <div className="d-flex mb-3">
                <div className="icon-box rounded me-3 bgbutton">
                  <i className="bi bi-check-lg coloricon"></i>
                </div>
                <div>
                  <h5 className="mb-1">Trilhas Personalizadas</h5>
                  <p className="mb-0">
                    Conteúdos adaptados às necessidades de cada turma
                  </p>
                </div>
              </div>

              <div className="d-flex mb-3">
                <div className="icon-box rounded me-3 bgbutton">
                  <i className="bi bi-check-lg coloricon"></i>
                </div>
                <div>
                  <h5 className="mb-1">Acompanhamento em Tempo Real</h5>
                  <p className="mb-0">
                    Monitore seu progresso e conquiste certificados
                  </p>
                </div>
              </div>

              <div className="d-flex">
                <div className="icon-box rounded me-3 bgbutton">
                  <i className="bi bi-check-lg coloricon"></i>
                </div>
                <div>
                  <h5 className="mb-1">Acesso Flexível</h5>
                  <p className="mb-0">
                    Estude de qualquer lugar, a qualquer hora
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
