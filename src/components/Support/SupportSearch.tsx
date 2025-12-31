import React from "react";

export default function SupportSearch() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-lg border-0">
              <div className="card-body p-4 bg-card">
                <h4 className="text-center mb-4">
                  <i className="bi bi-search"></i> Como podemos ajudar?
                </h4>

                <div className="input-group input-group-lg">
                  <input
                    type="text"
                    className="form-control custom-focus"
                    placeholder="Digite sua dúvida aqui..."
                    id="busca-suporte"
                  />
                  <button className="btn btn-remove-active" type="button">
                    <i className="bi bi-search"></i> Buscar
                  </button>
                </div>

                <div className="mt-3 text-center">
                  <small>
                    Tópicos populares:{" "}
                    <a href="#faq" className="text-decoration-none custom-txt">
                      Inscrição
                    </a>
                    ,{" "}
                    <a href="#faq" className="text-decoration-none custom-txt">
                      Certificados
                    </a>
                    ,{" "}
                    <a href="#faq" className="text-decoration-none custom-txt">
                      Pagamentos
                    </a>
                  </small>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
