export default function ValuesSection() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row g-4">

          <div className="col-md-4">
            <div className="value-card text-center">
              <div className="value-icon">
                <i className="bi bi-bullseye"></i>
              </div>
              <h4 className="fw-bold mb-3">Nossa Missão</h4>
              <p>
                Capacitar mulheres empreendedoras através de formação
                profissional de qualidade, fornecendo ferramentas e conhecimentos
                para o desenvolvimento de negócios sustentáveis e transformadores.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="value-card text-center">
              <div className="value-icon">
                <i className="bi bi-eye"></i>
              </div>
              <h4 className="fw-bold mb-3">Nossa Visão</h4>
              <p>
                Ser referência em educação empreendedora feminina, criando uma
                rede de mulheres capacitadas e conectadas, capazes de gerar impacto
                positivo em suas comunidades e na economia.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="value-card text-center">
              <div className="value-icon">
                <i className="bi bi-heart"></i>
              </div>
              <h4 className="fw-bold mb-3">Nossos Valores</h4>
              <p>
                Empoderamento, solidariedade, inovação, inclusão e sustentabilidade.
                Acreditamos no potencial de cada mulher e no poder da educação para
                transformar realidades.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
