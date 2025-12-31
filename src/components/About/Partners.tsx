

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
            <img
              src=""
              alt="ENTRLAÇOS"
              className="img-fluid"
              style={{ maxHeight: '100px' }}
              title="ENTRELAÇOS"
            />
          </div>
          <div className="partner-logo">
            <img
              src=""
              alt="REDE MULHERES"
              className="img-fluid"
              style={{ maxHeight: '100px' }}
              title="REDE MULHERES"
            />
          </div>
          <div className="partner-logo">
            <img
              src=""
              alt="SITINHO"
              className="img-fluid"
              style={{ maxHeight: '100px' }}
              title="SITINHO"
            />
          </div>
          <div className="partner-logo">
            <img
              src=""
              alt="TECENDO"
              className="img-fluid"
              style={{ maxHeight: '100px' }}
              title="TECENDO"
            />
          </div>
          {/* <div className="partner-logo">
            <h6 className="mb-0">Tech4Good</h6>
          </div> */}
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
