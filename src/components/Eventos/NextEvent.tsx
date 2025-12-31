import React from "react";

type NextEventProps = {
  blok: {
    title: string;
    badge: string,
    button_card_event: string
  };
};

const NextEvent = ({ blok }: NextEventProps) => {
  const inscreverEvento = (nomeEvento) => {
    console.log(`Inscrição para o evento: ${nomeEvento}`);
    // Aqui você pode colocar a lógica real de inscrição
  };

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="fw-bold mb-4 text-center">{blok.title}</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="event-header">
              <div className="row align-items-center">
                <div className="col-md-8">
                  <span className="badge bg-warning text-dark mb-2">
                    {blok.badge}
                  </span>
                  <h3 className="fw-bold mb-3">
                    Precificação Inteligente para Empreendedoras
                  </h3>
                  <p className="mb-3 text-white">
                    <i className="bi bi-calendar"></i> 15 de Novembro, 2025
                    <br />
                    <i className="bi bi-clock"></i> 19:00 - 21:00 (Horário de
                    Brasília)
                    <br />
                    <i className="bi bi-laptop"></i> Online via Google Meet
                  </p>
                </div>
                <div className="col-md-4 text-center">
                  <div className="countdown-timer">
                    {/* essa parte não entra no cms */}
                    <h6 className="mb-3">Começa em:</h6>
                    <div id="countdown" className="d-flex justify-content-center">
                      <div className="time-unit mx-2">
                        <span className="time-value" id="days">15</span>
                        <span className="time-label">Dias</span>
                      </div>
                      <div className="time-unit mx-2">
                        <span className="time-value" id="hours">23</span>
                        <span className="time-label">Horas</span>
                      </div>
                      <div className="time-unit mx-2">
                        <span className="time-value" id="minutes">45</span>
                        <span className="time-label">Min</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center text-md-start">
                <button
                  className="btn btn-outline-light btn-lg mt-3"
                  onClick={() =>
                    inscreverEvento("Precificação Inteligente")
                  }
                >
                  <i className="bi bi-calendar-plus"></i> {blok.button_card_event}
                </button>
              </div>
            </div>

            <div
              className="bg-white p-4"
              style={{ borderRadius: "0 0 15px 15px" }}
            >
              <h5 className="fw-bold mb-3 text-center text-md-start">
                Sobre o Evento
              </h5>
              <p className="text-center text-md-start">
                Aprenda a calcular o preço ideal para seus produtos ou serviços! Neste
                workshop, você descobrirá como precificar de forma estratégica, considerando
                custos, margem de lucro e valor percebido pelo cliente.
              </p>
              <h6 className="fw-bold mt-4 mb-3 text-center text-md-start">
                O que você vai aprender:
              </h6>
              <ul>
                <li>Como calcular todos os custos do seu produto/serviço</li>
                <li>Definir margem de lucro adequada</li>
                <li>Estratégias de precificação competitiva</li>
                <li>Quando e como fazer promoções sem prejuízo</li>
              </ul>

              <div className="d-flex align-items-center mt-4">
                <div className="me-3">
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "1.5rem",
                    }}
                  >
                    CA
                  </div>
                </div>
                <div>
                  <h6 className="fw-bold mb-0">Carla Almeida</h6>
                  <small>Especialista em Gestão Financeira</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextEvent;
