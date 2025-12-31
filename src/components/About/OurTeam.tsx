export default function OurTeam() {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="fw-bold text-center mb-5">Nossa Equipe</h2>

        <div className="row g-4">

          {/* membro 1 */}
          <div className="col-md-4">
            <div className="team-member">
              <div className="team-photo">
                <img
                  src=""
                  alt="Rosa Costa"
                  className="rounded-circle img-fluid"
                  style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                />
              </div>

              <h5 className="fw-bold mb-1">Rosa Costa</h5>
              <p className="mb-3">Fundadora e Diretora Geral</p>

              <p className="small">
                Empresária com 20 anos de experiência em desenvolvimento social
                e empoderamento feminino.
              </p>

              <div className="social-links">
                <a href="#" className="icon-bg me-2">
                  <i className="bi bi-linkedin fs-5"></i>
                </a>
                <a href="#" className="icon-bg">
                  <i className="bi bi-envelope fs-5"></i>
                </a>
              </div>
            </div>
          </div>

          {/* membro 2 */}
          <div className="col-md-4">
            <div className="team-member">
              <div className="team-photo">
                <img
                  src=""
                  alt="Carla Almeida"
                  className="rounded-circle img-fluid"
                  style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                />
              </div>

              <h5 className="fw-bold mb-1">Carla Almeida</h5>
              <p className="mb-3">Coordenadora Pedagógica</p>

              <p className="small">
                Especialista em gestão financeira e educação empreendedora, com
                mestrado em Administração.
              </p>

              <div className="social-links">
                <a href="#" className="icon-bg me-2">
                  <i className="bi bi-linkedin fs-5"></i>
                </a>
                <a href="#" className="icon-bg">
                  <i className="bi bi-envelope fs-5"></i>
                </a>
              </div>
            </div>
          </div>

          {/* membro 3 */}
          <div className="col-md-4">
            <div className="team-member">
              <div className="team-photo">
                <img
                  src=""
                  alt="Ana Paula Souza"
                  className="rounded-circle img-fluid"
                  style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                />
              </div>

              <h5 className="fw-bold mb-1">Ana Paula Souza</h5>
              <p className="mb-3">Mentora de Marketing</p>

              <p className="small">
                Especialista em marketing digital com foco em pequenos negócios
                e empreendedorismo feminino.
              </p>

              <div className="social-links">
                <a href="#" className="icon-bg me-2">
                  <i className="bi bi-linkedin fs-5"></i>
                </a>
                <a href="#" className="icon-bg">
                  <i className="bi bi-envelope fs-5"></i>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
