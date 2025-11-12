import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
      <div className="container">
        {/* ===== Brand ===== */}
        <a className="navbar-brand fw-bold" href="./index.html">
          <i className="bi bi-rocket-takeoff-fill"></i> Rede NAVE
        </a>

        {/* ===== Botão Toggle (mobile) ===== */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* ===== Menu Offcanvas ===== */}
        <div
          className="offcanvas offcanvas-end text-bg-primary"
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              <i className="bi bi-rocket-takeoff-fill"></i> Rede NAVE
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" end data-bs-dismiss="offcanvas">
                  Início
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/trilhas" data-bs-dismiss="offcanvas">
                  Trilhas
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/eventos" data-bs-dismiss="offcanvas">
                  Eventos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/sobre" data-bs-dismiss="offcanvas">
                  Sobre
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/suporte" data-bs-dismiss="offcanvas">
                  Suporte
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login" data-bs-dismiss="offcanvas">
                  <i className="bi bi-box-arrow-in-right"></i> Entrar
                </NavLink>
              </li>
            </ul>

            <div className="d-flex mt-3 mt-lg-0">
              <NavLink className="btn btn-warning btn-sm ms-2" to="/cadastro" data-bs-dismiss="offcanvas">
                Cadastre-se
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
