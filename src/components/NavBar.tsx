import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "/src/assets/logoRedeNave.png";
import { useAuth } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

export default function Navbar() {
  const isMobile = window.innerWidth < 992;
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const [scrollProgress, setScrollProgress] = useState(0);

  const { user, loading } = useAuth();

  // Evita flicker
  if (loading) return null;

  const isActive = (path: string) => {
    if (path === "/") return currentPath === "/";
    return currentPath.startsWith(path);
  };

  const closeOffcanvas = () => {
    if (typeof window === "undefined") return;

    const offcanvas = document.getElementById("offcanvasNavbar");
    const bs = (window as any).bootstrap;

    if (offcanvas && bs?.Offcanvas) {
      const instance = bs.Offcanvas.getInstance(offcanvas);
      instance?.hide();
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    closeOffcanvas();
    navigate("/");
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const navbar = document.querySelector(".navbar") as HTMLElement | null;
    const scrollOffset = 50;

    const onScroll = () => {
      // ===== Barra de progresso =====
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress =
        height > 0 ? Math.min((window.scrollY / height) * 100, 100) : 0;

      setScrollProgress(progress);

      // ===== Efeito navbar =====
      if (!navbar) return;

      const scrolled = window.scrollY > scrollOffset;

      navbar.style.padding = scrolled ? "0.5rem 0" : "1rem 0";
      navbar.style.boxShadow = scrolled
        ? "0 4px 15px rgba(0,0,0,0.15)"
        : "0 2px 10px rgba(0,0,0,0.1)";
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      {/* Barra de progresso */}
      <div
        className="scroll-progress-bar"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "3px",
          width: `${scrollProgress}%`,
          background: "linear-gradient(180deg, #5b119a, #7c19d1)",
          zIndex: 9999,
          transition: "width 0.1s ease-out",
        }}
        aria-hidden
      />

      <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            <img src={logo} alt="Rede Nave" style={{ width: "70px" }} />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="offcanvas offcanvas-end menu-mobile" id="offcanvasNavbar">
            <div className="offcanvas-header">
              <Link className="navbar-brand fw-bold" to="/" onClick={closeOffcanvas}>
                <img src={logo} alt="Rede Nave" style={{ width: "70px" }} />
              </Link>
              <button className="btn-close btn-close-white" data-bs-dismiss="offcanvas" />
            </div>

            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                {[
                  { path: "/", label: "Início" },
                  { path: "/trilhas", label: "Trilhas" },
                  { path: "/eventos", label: "Eventos" },
                  { path: "/sobre", label: "Sobre" },
                  { path: "/suporte", label: "Suporte" },
                ].map(item => (
                  <li key={item.path} className="nav-item">
                    <Link
                      className={`nav-link ${isActive(item.path) ? "active" : ""}`}
                      to={item.path}
                      onClick={closeOffcanvas}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}

                {!user && (
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${isActive("/login") ? "active" : ""}`}
                      to="/login"
                      onClick={closeOffcanvas}
                    >
                      <i className="bi bi-box-arrow-in-right"></i> Entrar
                    </Link>
                  </li>
                )}

                {user && (
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${isActive("/dashboard") ? "active" : ""}`}
                      to="/dashboard"
                      onClick={closeOffcanvas}
                    >
                      Meu Painel
                    </Link>
                  </li>
                )}
              </ul>

              <div className="d-flex align-items-center mt-3 mt-lg-0">
                {!user && (
                  <Link
                    className={`btn btn-sm ms-2 ${isActive("/cadastro") ? "active" : ""}`}
                    to="/cadastro"
                    onClick={closeOffcanvas}
                  >
                    Cadastre-se
                  </Link>
                )}

                {user && (
                  <>
                    {/* ================= DESKTOP ================= */}
                    {!isMobile && (
                      <div className="dropdown ms-3 d-flex align-items-center">
                        <button
                          className="btn p-0 border-0 d-flex align-items-center justify-content-center"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          style={{
                            background: "transparent",
                            lineHeight: 0,
                          }}
                        >
                          <div
                            className="d-flex align-items-center justify-content-center rounded-circle"
                            style={{
                              width: 38,
                              height: 38,
                              border: "2px solid rgba(255,255,255,0.25)",
                            }}
                          >
                            {user.photoURL ? (
                              <img
                                src={user.photoURL}
                                alt="Avatar"
                                className="rounded-circle"
                                style={{ width: 32, height: 32, objectFit: "cover" }}
                              />
                            ) : (
                              <span style={{ fontSize: 14, fontWeight: 600, color: "#fff" }}>
                                {user.email?.charAt(0).toUpperCase()}
                              </span>
                            )}
                          </div>
                        </button>

                        <ul className="dropdown-menu dropdown-menu-end mt-2">
                          <li>
                            <Link className="dropdown-item" to="/perfil">
                              Meu Perfil
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="/configuracoes">
                              Configurações
                            </Link>
                          </li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li>
                            <button className="dropdown-item" onClick={handleLogout}>
                              Sair
                            </button>
                          </li>
                        </ul>
                      </div>
                    )}

                    {/* ================= MOBILE ================= */}
                    {isMobile && (
                      <div className=" border-top pt-3">
                        <div className="d-flex align-items-center mb-3">
                          {user.photoURL ? (
                            <img
                              src={user.photoURL}
                              alt="Avatar"
                              className="rounded-circle me-2"
                              style={{ width: 36, height: 36, objectFit: "cover" }}
                            />
                          ) : (
                            <div
                              className="rounded-circle bg-secondary text-white d-flex justify-content-center align-items-center me-2"
                              style={{ width: 36, height: 36 }}
                            >
                              {user.email?.charAt(0).toUpperCase()}
                            </div>
                          )}
                          <strong className="text-white">{user.email}</strong>
                        </div>

                        <ul className="navbar-nav">
                          <li className="nav-item">
                            <Link className="nav-link" to="/perfil" onClick={closeOffcanvas}>
                              Meu Perfil
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              className="nav-link"
                              to="/configuracoes"
                              onClick={closeOffcanvas}
                            >
                              Configurações
                            </Link>
                          </li>
                          <li className="nav-item">
                            <button
                              className="nav-link btn btn-link text-start"
                              onClick={handleLogout}
                            >
                              Sair
                            </button>
                          </li>
                        </ul>
                      </div>
                    )}
                  </>
                )}


              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
