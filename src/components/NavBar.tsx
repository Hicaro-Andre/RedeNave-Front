import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "/src/assets/logoRedeNave.png";

export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  // Verifica se um link está ativo
  const isActive = (path: string): boolean => {
    if (path === "/") {
      return currentPath === "/";
    }
    return currentPath.startsWith(path);
  };

  // Fecha o offcanvas quando um link é clicado
  const closeOffcanvas = () => {
    const offcanvas = document.getElementById("offcanvasNavbar") as HTMLElement | null;
    if (offcanvas) {
      const bsOffcanvas = (window as any).bootstrap?.Offcanvas?.getInstance(offcanvas);
      if (bsOffcanvas) {
        bsOffcanvas.hide();
      }
    }
  };

  useEffect(() => {
    // =========================================
    // 1. BARRA DE PROGRESSO DO SCROLL
    // =========================================
    const initScrollProgress = () => {
      let progressBar = document.querySelector(".scroll-progress-bar") as HTMLElement | null;

      if (!progressBar) {
        progressBar = document.createElement("div");
        progressBar.className = "scroll-progress-bar";
        progressBar.setAttribute("aria-hidden", "true");
        progressBar.style.cssText = `
          position: fixed;
          top: 0;
          left: 0;
          height: 3px;
          background: linear-gradient(180deg, #5b119a, #7c19d1);
          width: 0%;
          z-index: 9999;
          transition: width 0.1s ease-out;
        `;
        document.body.appendChild(progressBar);
      }

      let ticking = false;

      const updateScrollProgress = () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const windowHeight =
              document.documentElement.scrollHeight -
              document.documentElement.clientHeight;

            const scrolled = (window.scrollY / windowHeight) * 100;
            const progress = Math.min(scrolled, 100);

            setScrollProgress(progress);
            progressBar!.style.width = progress + "%";
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener("scroll", updateScrollProgress);

      return () => {
        window.removeEventListener("scroll", updateScrollProgress);
      };
    };

    // =========================================
    // 2. EFEITO DE SCROLL NA NAVBAR
    // =========================================
    const navbarScrollEffect = () => {
      const navbar = document.querySelector(".navbar") as HTMLElement | null;
      if (!navbar) return;

      const scrollOffset = 50;
      let ticking = false;

      const updateNavbar = () => {
        const scrolled = window.scrollY > scrollOffset;
        navbar.style.padding = scrolled ? "0.5rem 0" : "1rem 0";
        navbar.style.boxShadow = scrolled
          ? "0 4px 15px rgba(0, 0, 0, 0.15)"
          : "0 2px 10px rgba(0, 0, 0, 0.1)";
      };

      const handleScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            updateNavbar();
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener("scroll", handleScroll);
      updateNavbar();

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    };

    // =========================================
    // 3. SMOOTH SCROLL PARA LINKS ÂNCORA
    // =========================================
    const setupSmoothScroll = () => {
      const anchorLinks = document.querySelectorAll('a[href^="#"]');

      anchorLinks.forEach(anchor => {
        anchor.addEventListener("click", function (e) {
          const href = (this as HTMLAnchorElement).getAttribute("href");

          if (href === "#" || (this as HTMLElement).hasAttribute("data-bs-toggle")) {
            return;
          }

          e.preventDefault();
          const target = document.querySelector(href!);

          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        });
      });

      return () => {
        anchorLinks.forEach(anchor => {
          anchor.removeEventListener("click", null as any);
        });
      };
    };

    // =========================================
    // 4. Inicializa Componentes Bootstrap
    // =========================================
    const initBootstrapComponents = () => {
      const bs = (window as any).bootstrap;
      if (!bs) return;

      document
        .querySelectorAll("[data-bs-toggle='tooltip']")
        .forEach(el => new bs.Tooltip(el));

      document
        .querySelectorAll("[data-bs-toggle='popover']")
        .forEach(el => new bs.Popover(el));
    };

    const cleanupScrollProgress = initScrollProgress();
    const cleanupNavbarEffect = navbarScrollEffect();
    const cleanupSmoothScroll = setupSmoothScroll();

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initBootstrapComponents);
    } else {
      initBootstrapComponents();
    }

    return () => {
      cleanupScrollProgress?.();
      cleanupNavbarEffect?.();
      cleanupSmoothScroll?.();
    };
  }, []);

  return (
    <>
      {/* Barra do progresso */}
      <div
        className="scroll-progress-bar"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "3px",
          background: "linear-gradient(180deg, #5b119a, #7c19d1)",
          width: `${scrollProgress}%`,
          zIndex: 9999,
          transition: "width 0.1s ease-out",
        }}
        aria-hidden="true"
      />

      {/* Navbar */}
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
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="offcanvas offcanvas-end menu-mobile" id="offcanvasNavbar">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title">
                <Link className="navbar-brand fw-bold" to="/" onClick={closeOffcanvas}>
                  <img src={logo} alt="Rede Nave" style={{ width: "70px", height: "auto" }} />
                </Link>
              </h5>

              <button className="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
            </div>

            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                {[
                  { path: "/", label: "Início" },
                  { path: "/trilhas", label: "Trilhas" },
                  { path: "/eventos", label: "Eventos" },
                  { path: "/sobre", label: "Sobre" },
                  { path: "/suporte", label: "Suporte" },
                  { path: "/login", label: "Entrar", icon: "bi bi-box-arrow-in-right" },
                ].map(item => (
                  <li key={item.path} className="nav-item">
                    <Link
                      className={`nav-link ${isActive(item.path) ? "active" : ""}`}
                      to={item.path}
                      onClick={closeOffcanvas}
                    >
                      {item.icon && <i className={item.icon}></i>} {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="d-flex mt-3 mt-lg-0">
                <Link
                  className={`btn  btn-sm ms-2 ${isActive("/cadastro") ? "active" : ""}`}
                  to="/cadastro"
                  onClick={closeOffcanvas}
                >
                  Cadastre-se
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
