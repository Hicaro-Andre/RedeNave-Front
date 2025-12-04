export default function ImpactoNumeros() {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="fw-bold text-center mb-5">Nosso Impacto em Números</h2>

        <div className="row g-4 text-center">

          <div className="col-md-3 col-6">
            <div className="stat-box p-4">
              <h2 className="display-3 fw-bold text-primary mb-0" data-count="500">
                0
              </h2>
              <p className="mb-0">
                Mulheres<br />Capacitadas
              </p>
            </div>
          </div>

          <div className="col-md-3 col-6">
            <div className="stat-box p-4">
              <h2 className="display-3 fw-bold text-success mb-0" data-count="85">
                0
              </h2>
              <p className="mb-0">
                % Taxa de<br />Conclusão
              </p>
            </div>
          </div>

          <div className="col-md-3 col-6">
            <div className="stat-box p-4">
              <h2 className="display-3 fw-bold text-warning mb-0" data-count="250">
                0
              </h2>
              <p className="mb-0">
                Negócios<br />Criados
              </p>
            </div>
          </div>

          <div className="col-md-3 col-6">
            <div className="stat-box p-4">
              <h2 className="display-3 fw-bold text-danger mb-0" data-count="95">
                0
              </h2>
              <p className="mb-0">
                % Satisfação<br />das Alunas
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
