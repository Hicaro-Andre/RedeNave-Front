export default function Partners() {
  const handleClick = () => {
    alert("Entre em contato: parcerias@redenave.org");
  };

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="fw-bold text-center mb-5">Nossos Parceiros</h2>

        <div className="d-flex flex-wrap justify-content-center align-items-center">
          <div className="partner-logo">
            <h6 className="mb-0">SEBRAE</h6>
          </div>
          <div className="partner-logo">
            <h6 className="mb-0">ONU Mulheres</h6>
          </div>
          <div className="partner-logo">
            <h6 className="mb-0">Banco Social</h6>
          </div>
          <div className="partner-logo">
            <h6 className="mb-0">Instituto Empreender</h6>
          </div>
          <div className="partner-logo">
            <h6 className="mb-0">Tech4Good</h6>
          </div>
        </div>

        <div className="text-center mt-5">
          <h5 className="fw-bold mb-3">Quer ser nosso parceiro?</h5>
          <p className="mb-4">
            Junte-se a nós nessa missão de transformar vidas!
          </p>
          <button
            className="btn btn-primary btn-lg"
            onClick={handleClick}
          >
            <i className="bi bi-handshake"></i> Seja um Parceiro
          </button>
        </div>
      </div>
    </section>
  );
}
