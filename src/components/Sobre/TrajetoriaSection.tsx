export default function TrajetoriaSection() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="fw-bold text-center mb-5">Nossa Trajetória</h2>

        <div className="timeline">

          <div className="timeline-item">
            <div className="timeline-content">
              <span className="badge bg-primary mb-2">2020</span>
              <h5 className="fw-bold">Fundação da Rede NAVE</h5>
              <p className="mb-0">
                Início do projeto com o objetivo de capacitar mulheres
                empreendedoras em comunidades vulneráveis, oferecendo cursos
                presenciais de gestão básica.
              </p>
            </div>
            <div className="timeline-icon">
              <i className="bi bi-flag"></i>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <span className="badge bg-primary mb-2">2021</span>
              <h5 className="fw-bold">Expansão Digital</h5>
              <p className="mb-0">
                Adaptação para o formato híbrido devido à pandemia. Início das
                formações online via Google Meet e WhatsApp. Alcançamos 200 alunas.
              </p>
            </div>
            <div className="timeline-icon">
              <i className="bi bi-laptop"></i>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <span className="badge bg-primary mb-2">2022</span>
              <h5 className="fw-bold">Parcerias Estratégicas</h5>
              <p className="mb-0">
                Firmamos parcerias com empresas e organizações sociais,
                expandindo nosso alcance e oferecendo mais recursos às empreendedoras.
              </p>
            </div>
            <div className="timeline-icon">
              <i className="bi bi-people"></i>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <span className="badge bg-primary mb-2">2023</span>
              <h5 className="fw-bold">Certificação Reconhecida</h5>
              <p className="mb-0">
                Nossos certificados passaram a ser reconhecidos por instituições
                parceiras. Mais de 400 mulheres capacitadas até o momento.
              </p>
            </div>
            <div className="timeline-icon">
              <i className="bi bi-award"></i>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <span className="badge bg-success mb-2">2025</span>
              <h5 className="fw-bold">Plataforma Digital</h5>
              <p className="mb-0">
                Lançamento da plataforma online integrada, reunindo todos os
                materiais e recursos em um único lugar. Nova fase da Rede NAVE!
              </p>
            </div>
            <div className="timeline-icon">
              <i className="bi bi-rocket-takeoff"></i>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
