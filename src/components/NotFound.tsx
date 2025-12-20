import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section
      className="min-vh-100 d-flex align-items-center justify-content-center text-center"
      style={{
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        color: "#fff",
      }}
    >
      <div className="container px-4">
        <h1 className="display-1 fw-bold mb-3">404</h1>

        <h2 className="fw-semibold mb-3">
          Página não encontrada
        </h2>

        <p className="lead mb-4" style={{ maxWidth: "520px", margin: "0 auto" }}>
          O conteúdo que você tentou acessar não existe ou foi movido.
          Mas fique tranquila, você pode continuar sua jornada por aqui 💜
        </p>

        <div className="d-flex gap-3 justify-content-center flex-wrap">
          <Link to="/" className="btn btn-light btn-lg fw-semibold">
            Voltar para o início
          </Link>

          <Link to="/trilhas" className="btn btn-outline-light btn-lg fw-semibold">
            Ver Trilhas
          </Link>
        </div>
      </div>
    </section>
  );
}
