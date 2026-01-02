import React, { useState } from "react";


type ContatoSectionProps = {
  blok: {
    title: string;
    name: string;
    email: string,
    phone: string,
    subject: string,
    message: string,
    placeholder: string,
    agreement: string,
    button_card_form: string,
  }
};


const Toast = ({ data }) => {
  if (!data) return null;

  return (
    <div
      className="toast-container position-fixed top-0 end-0 p-3"
      style={{ zIndex: 2000 }}
    >
      <div
        className={`toast show text-white bg-${data.type === "success" ? "success" : "danger"
          }`}
      >
        <div className="toast-header bg-transparent border-0 text-white">
          <strong className="me-auto">{data.title}</strong>
        </div>
        <div className="toast-body">{data.message}</div>
      </div>
    </div>
  );
};

const LoadingOverlay = ({ active, text }) => {
  if (!active) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.6)",
        zIndex: 1500,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        flexDirection: "column",
      }}
    >
      <div className="spinner-border text-light mb-3" role="status"></div>
      <p className="fw-bold">{text || "Carregando..."}</p>
    </div>
  );
};

export default function ContatoSection({ blok }: ContatoSectionProps) {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
    concordo: false,
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const handleChange = (e) => {
    const target = e.target;
    const { id, value } = target;

    if (target.type === "checkbox") {
      setForm((prev) => ({ ...prev, [id]: target.checked }));
      return;
    }

    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setToast({
        title: "Mensagem Enviada!",
        message: "Sua mensagem foi enviada com sucesso.",
        type: "success",
      });

      setTimeout(() => setToast(null), 5000);

      setForm({
        nome: "",
        email: "",
        telefone: "",
        assunto: "",
        mensagem: "",
        concordo: false,
      });
    }, 2000);
  };

  return (
    <>
      <LoadingOverlay active={loading} text="Enviando sua mensagem..." />
      <Toast data={toast} />

      <section className="py-5" id="contato">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">
            <i className="bi bi-send"></i> {blok.title}
          </h2>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card shadow-lg border-0">
                <div className="card-body p-5 bg-card">
                  <form id="formularioContato" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="nome" className="form-label fw-bold">
                          {blok.name}
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="nome"
                          value={form.nome}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="email" className="form-label fw-bold">
                          {blok.email}
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label
                          htmlFor="telefone"
                          className="form-label fw-bold"
                        >
                          {blok.phone}
                        </label>
                        <input
                          type="tel"
                          className="form-control"
                          id="telefone"
                          placeholder="(11) 98765-4321"
                          value={form.telefone}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="assunto" className="form-label fw-bold">
                          {blok.subject}
                        </label>
                        <select
                          className="form-select"
                          id="assunto"
                          value={form.assunto}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Selecione...</option>
                          <option value="duvida">Dúvida sobre Trilhas</option>
                          <option value="evento">Dúvida sobre Eventos</option>
                          <option value="certificado">
                            Problema com Certificado
                          </option>
                          <option value="tecnico">Problema Técnico</option>
                          <option value="sugestao">Sugestão</option>
                          <option value="outro">Outro</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="mensagem" className="form-label fw-bold">
                        {blok.message}
                      </label>
                      <textarea
                        className="form-control"
                        id="mensagem"
                        rows={5}
                        required
                        placeholder={blok.placeholder}
                        value={form.mensagem}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="concordo"
                        checked={form.concordo}
                        onChange={handleChange}
                        required
                      />
                      <label className="form-check-label" htmlFor="concordo">
                        {blok.agreement}
                      </label>
                    </div>

                    <div className="d-grid">
                      <button type="submit" className="btn btn-primary btn-lg">
                        <i className="bi bi-send"></i> {blok.button_card_form}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
