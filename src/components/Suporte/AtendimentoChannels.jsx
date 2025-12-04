import React from "react";

export default function AtendimentoChannels() {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">
          <i className="bi bi-chat-dots"></i> Canais de Atendimento
        </h2>

        <div className="row g-4">

          {/* WhatsApp */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm hover-card bg-card">
              <div className="card-body text-center p-4">
                <div className="mb-3">
                  <i className="bi bi-whatsapp bg-wpp" style={{ fontSize: "3rem" }}></i>
                </div>
                <h5 className="fw-bold">WhatsApp</h5>
                <p className="card-text">Atendimento rápido pelo WhatsApp</p>
                <p className="fw-bold">(11) 98765-4321</p>
                <a
                  href="https://wa.me/5511987654321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success"
                >
                  <i className="bi bi-whatsapp"></i> Iniciar Conversa
                </a>
                <small className="d-block mt-2">Seg-Sex: 9h às 18h</small>
              </div>
            </div>
          </div>

          {/* E-mail */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm hover-card bg-card">
              <div className="card-body text-center p-4">
                <div className="mb-3">
                  <i className="bi bi-envelope bg-email" style={{ fontSize: "3rem" }}></i>
                </div>
                <h5 className="fw-bold">E-mail</h5>
                <p className="card-text">Envie sua dúvida detalhada</p>
                <p className="fw-bold">contato@redenave.org</p>
                <a href="mailto:contato@redenave.org" className="btn btn-primary">
                  <i className="bi bi-envelope"></i> Enviar E-mail
                </a>
                <small className="d-block mt-2">Resposta em até 24h</small>
              </div>
            </div>
          </div>

          {/* Telefone */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm hover-card bg-card">
              <div className="card-body text-center p-4">
                <div className="mb-3">
                  <i className="bi bi-telephone bg-phone" style={{ fontSize: "3rem" }}></i>
                </div>
                <h5 className="fw-bold">Telefone</h5>
                <p className="card-text">Fale diretamente conosco</p>
                <p className="fw-bold">(11) 3456-7890</p>
                <a href="tel:+551134567890" className="btn btn-primary">
                  <i className="bi bi-telephone"></i> Ligar Agora
                </a>
                <small className="d-block mt-2">Seg-Sex: 9h às 18h</small>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
