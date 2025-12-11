import { Link } from "react-router-dom";

export default function CtaSection() {
  const handleContato = () => {
    alert("contato@redenave.org");
  };

  return (
    <section className="cta-section py-5 text-white text-center">
      <div className="container">
        <h2 className="fw-bold mb-3">Faça Parte Dessa Transformação</h2>
        <p className="lead mb-4">
          Juntas, podemos criar um futuro melhor para todas as mulheres
          empreendedoras
        </p>

        <div className="d-flex justify-content-center gap-3">
          <Link to="/cadastro" className="btn btn-lg px-5">
            Cadastre-se Agora
          </Link>

          <button
            className="btn btn-outline-light btn-lg px-5"
            onClick={handleContato}
          >
            Entre em Contato
          </button>
        </div>
      </div>
    </section>
  );
}
