import { Link } from "react-router-dom";
import logo from "../assets/logoRedeNave.png";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
      <div className="container">

        <Link className="navbar-brand fw-bold" to="/">
          <img src={logo} alt="Rede Nave" style={{ width: "70px", height: "auto" }} />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="offcanvas offcanvas-end menu-mobile"
          tabIndex={-1}
          id="offcanvasNavbar"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title">
              <Link className="navbar-brand fw-bold" to="/">
                <img src={logo} alt="Rede Nave" style={{ width: "70px", height: "auto" }} />
              </Link>
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
                <Link className="nav-link" to="/">Início</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/trilhas">Trilhas</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/eventos">Eventos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sobre">Sobre</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/suporte">Suporte</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  <i className="bi bi-box-arrow-in-right"></i> Entrar
                </Link>
              </li>
            </ul>

            <div className="d-flex mt-3 mt-lg-0">
              <Link className="btn btn-sm ms-2" to="/cadastro">
                Cadastre-se
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
