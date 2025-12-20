export default function LoadingSpinner() {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center min-vh-100"
      style={{
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        color: "#fff",
      }}
    >
      <div
        className="spinner-border"
        role="status"
        style={{ width: "3rem", height: "3rem" }}
      >
        <span className="visually-hidden">Carregando...</span>
      </div>

      <p className="mt-4 fw-semibold">
        Carregando conteúdo...
      </p>
    </div>
  );
}
