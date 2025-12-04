import React from "react";

export default function HowItWorks() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">Como Funciona?</h2>
          <p>Comece sua jornada empreendedora em 4 passos simples</p>
        </div>

        <div className="row g-4">
          {/* Passo 1 */}
          <div className="col-md-6 col-lg-3">
            <div className="step-card text-center p-4 h-100">
              <div className="step-number heroincolor">1</div>
              <i className="bi bi-person-plus-fill display-4 mb-3 iconcolor"></i>
              <h5 className="fw-bold mb-3">Cadastre-se</h5>
              <p>Crie sua conta gratuitamente em poucos minutos</p>
            </div>
          </div>

          {/* Passo 2 */}
          <div className="col-md-6 col-lg-3">
            <div className="step-card text-center p-4 h-100">
              <div className="step-number heroincolor">2</div>
              <i className="bi bi-map-fill display-4 mb-3 iconcolor"></i>
              <h5 className="fw-bold mb-3">Escolha sua Trilha</h5>
              <p>Selecione a trilha que melhor se adapta aos seus objetivos</p>
            </div>
          </div>

          {/* Passo 3 */}
          <div className="col-md-6 col-lg-3">
            <div className="step-card text-center p-4 h-100">
              <div className="step-number heroincolor">3</div>
              <i className="bi bi-book-fill display-4 mb-3 iconcolor"></i>
              <h5 className="fw-bold mb-3">Estude no seu Ritmo</h5>
              <p>Acesse vídeos, apostilas e materiais de apoio</p>
            </div>
          </div>

          {/* Passo 4 */}
          <div className="col-md-6 col-lg-3">
            <div className="step-card text-center p-4 h-100">
              <div className="step-number heroincolor">4</div>
              <i className="bi bi-trophy-fill display-4 mb-3 iconcolor"></i>
              <h5 className="fw-bold mb-3">Conquiste seu Certificado</h5>
              <p>Complete as atividades e receba seu certificado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
