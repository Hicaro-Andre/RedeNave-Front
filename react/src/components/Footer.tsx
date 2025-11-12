import React from "react";
import "../index.css"

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row g-4">

          {/* ===== Rede NAVE ===== */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">
              <i className="bi bi-rocket-takeoff"></i> Rede NAVE
            </h5>
            <p style={{ color: "#adb5bd" }}>
              Empoderando mulheres empreendedoras através da educação e
              capacitação profissional.
            </p>
            <div className="social-links mt-3">
              <a href="#" className="text-white me-3" title="Facebook">
                <i className="bi bi-facebook fs-4"></i>
              </a>
              <a href="#" className="text-white me-3" title="Instagram">
                <i className="bi bi-instagram fs-4"></i>
              </a>
              <a href="#" className="text-white me-3" title="LinkedIn">
                <i className="bi bi-linkedin fs-4"></i>
              </a>
              <a href="#" className="text-white" title="YouTube">
                <i className="bi bi-youtube fs-4"></i>
              </a>
            </div>
          </div>

          {/* ===== Menu ===== */}
          <div className="col-md-2">
            <h6 className="fw-bold mb-3 text-white">Menu</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="./index.html"
                  className="text-decoration-none"
                  style={{ color: "#adb5bd" }}
                >
                  Início
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="src/pages/trilhas.html"
                  className="text-decoration-none"
                  style={{ color: "#adb5bd" }}
                >
                  Trilhas
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="src/pages/eventos.html"
                  className="text-decoration-none"
                  style={{ color: "#adb5bd" }}
                >
                  Eventos
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="src/pages/sobre.html"
                  className="text-decoration-none"
                  style={{ color: "#adb5bd" }}
                >
                  Sobre
                </a>
              </li>
            </ul>
          </div>

          {/* ===== Suporte ===== */}
          <div className="col-md-3">
            <h6 className="fw-bold mb-3 text-white">Suporte</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="src/pages/suporte.html"
                  className="text-decoration-none"
                  style={{ color: "#adb5bd" }}
                >
                  Perguntas Frequentes
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="src/pages/suporte.html#contato"
                  className="text-decoration-none"
                  style={{ color: "#adb5bd" }}
                >
                  Contato
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="src/pages/suporte.html"
                  className="text-decoration-none"
                  style={{ color: "#adb5bd" }}
                >
                  Central de Ajuda
                </a>
              </li>
            </ul>
          </div>

          {/* ===== Contato ===== */}
          <div className="col-md-3">
            <h6 className="fw-bold mb-3 text-white">Contato</h6>
            <ul className="list-unstyled">
              <li className="mb-2" style={{ color: "#adb5bd" }}>
                <i className="bi bi-envelope"></i> contato@redenave.org
              </li>
              <li className="mb-2" style={{ color: "#adb5bd" }}>
                <i className="bi bi-telephone"></i> (11) 98765-4321
              </li>
              <li className="mb-2">
                <a
                  href="https://wa.me/5511987654321"
                  className="text-decoration-none"
                  style={{ color: "#25d366" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-whatsapp"></i> WhatsApp Suporte
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-4" style={{ borderColor: "#495057" }} />

        <div className="text-center" style={{ color: "#adb5bd" }}>
          <p className="mb-0">
            &copy; 2025 Rede NAVE. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
