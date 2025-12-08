import entrelacos from "/src/assets/sobre/entrelaços.png"
import redemulheres from "/src/assets/sobre/redemulheres.png"
import sitinho from "/src/assets/sobre/sitinho.png"
import tecendo from "/src/assets/sobre/tecendo.png"


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
              src={entrelacos}
              alt="ENTRLAÇOS"
              className="img-fluid"
              style={{ maxHeight: '100px' }}
              title="ENTRELAÇOS"
            />
          </div>
          <div className="partner-logo">
            <img
              src={redemulheres}
              alt="REDE MULHERES"
              className="img-fluid"
              style={{ maxHeight: '100px' }}
              title="REDE MULHERES"
            />
          </div>
          <div className="partner-logo">
            <img
              src={sitinho}
              alt="SITINHO"
              className="img-fluid"
              style={{ maxHeight: '100px' }}
              title="SITINHO"
            />
          </div>
          <div className="partner-logo">
            <img
              src={tecendo}
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
