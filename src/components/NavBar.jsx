import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/logoRedeNave.png";

export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [scrollProgress, setScrollProgress] = useState(0);

  // Verifica se um link está ativo
  const isActive = (path) => {
    if (path === "/") {
      return currentPath === "/";
    }
    return currentPath.startsWith(path);
  };

  // Fecha o offcanvas quando um link é clicado
  const closeOffcanvas = () => {
    const offcanvas = document.getElementById("offcanvasNavbar");
    if (offcanvas) {
      const bsOffcanvas = window.bootstrap?.Offcanvas?.getInstance(offcanvas);
      if (bsOffcanvas) {
        bsOffcanvas.hide();
      }
    }
  };

  useEffect(() => {
    // =========================================
    // 1. BARRA DE PROGRESSO DO SCROLL (initScrollProgress)
    // =========================================
    const initScrollProgress = () => {
      // Verifica se já existe a barra
      let progressBar = document.querySelector(".scroll-progress-bar");
      
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
            
            // Atualiza o estado e o elemento DOM
            setScrollProgress(progress);
            progressBar.style.width = progress + "%";
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener("scroll", updateScrollProgress);
      
      // Retorna função de limpeza
      return () => {
        window.removeEventListener("scroll", updateScrollProgress);
      };
    };

    // =========================================
    // 2. EFEITO DE SCROLL NA NAVBAR (navbarScrollEffect)
    // =========================================
    const navbarScrollEffect = () => {
      const navbar = document.querySelector('.navbar');
      if (!navbar) return;

      const scrollOffset = 50;
      let ticking = false;

      const updateNavbar = () => {
        const scrolled = window.scrollY > scrollOffset;
        navbar.style.padding = scrolled ? '0.5rem 0' : '1rem 0';
        navbar.style.boxShadow = scrolled 
          ? '0 4px 15px rgba(0, 0, 0, 0.15)' 
          : '0 2px 10px rgba(0, 0, 0, 0.1)';
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

      window.addEventListener('scroll', handleScroll);
      updateNavbar(); // Aplica o efeito inicial
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    };

    // =========================================
    // 3. SMOOTH SCROLL PARA LINKS ÂNCORA
    // =========================================
    const setupSmoothScroll = () => {
      const anchorLinks = document.querySelectorAll('a[href^="#"]');
      anchorLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          const href = this.getAttribute('href');
          
          // Ignora # vazio ou links do Bootstrap
          if (href === '#' || this.hasAttribute('data-bs-toggle')) {
            return;
          }
          
          e.preventDefault();
          const target = document.querySelector(href);
          
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });
      
      return () => {
        anchorLinks.forEach(anchor => {
          anchor.removeEventListener('click', null);
        });
      };
    };

    // =========================================
    // 4. INICIALIZA BOOTSTRAP COMPONENTS
    // =========================================
    const initBootstrapComponents = () => {
      if (typeof bootstrap === 'undefined') return;
      
      // Tooltips
      const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
      [...tooltipTriggerList].forEach(tooltipTriggerEl => {
        new bootstrap.Tooltip(tooltipTriggerEl, { animation: true });
      });
      
      // Popovers
      const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
      [...popoverTriggerList].forEach(popoverTriggerEl => {
        new bootstrap.Popover(popoverTriggerEl, { animation: true });
      });
    };

    // =========================================
    // EXECUTA TODAS AS FUNÇÕES
    // =========================================
    const cleanupScrollProgress = initScrollProgress();
    const cleanupNavbarEffect = navbarScrollEffect();
    const cleanupSmoothScroll = setupSmoothScroll();
    
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initBootstrapComponents);
    } else {
      initBootstrapComponents();
    }

    // =========================================
    // LIMPEZA AO DESMONTAR
    // =========================================
    return () => {
      cleanupScrollProgress?.();
      cleanupNavbarEffect?.();
      cleanupSmoothScroll?.();
    };
  }, []);

  return (
    <>
      {/* Barra de Progresso do Scroll (Elemento DOM) */}
      <div 
        className="scroll-progress-bar"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '3px',
          background: 'linear-gradient(180deg, #5b119a, #7c19d1)',
          width: `${scrollProgress}%`,
          zIndex: 9999,
          transition: 'width 0.1s ease-out'
        }}
        aria-hidden="true"
      />

      {/* Navbar Principal */}
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
                <Link className="navbar-brand fw-bold" to="/" onClick={closeOffcanvas}>
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
                  <Link 
                    className={`nav-link ${isActive("/") ? "active" : ""}`}
                    to="/"
                    onClick={closeOffcanvas}
                  >
                    Início
                  </Link>
                </li>
                <li className="nav-item">
                  <Link 
                    className={`nav-link ${isActive("/trilhas") ? "active" : ""}`}
                    to="/trilhas"
                    onClick={closeOffcanvas}
                  >
                    Trilhas
                  </Link>
                </li>
                <li className="nav-item">
                  <Link 
                    className={`nav-link ${isActive("/eventos") ? "active" : ""}`}
                    to="/eventos"
                    onClick={closeOffcanvas}
                  >
                    Eventos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link 
                    className={`nav-link ${isActive("/sobre") ? "active" : ""}`}
                    to="/sobre"
                    onClick={closeOffcanvas}
                  >
                    Sobre
                  </Link>
                </li>
                <li className="nav-item">
                  <Link 
                    className={`nav-link ${isActive("/suporte") ? "active" : ""}`}
                    to="/suporte"
                    onClick={closeOffcanvas}
                  >
                    Suporte
                  </Link>
                </li>
                <li className="nav-item">
                  <Link 
                    className={`nav-link ${isActive("/login") ? "active" : ""}`}
                    to="/login"
                    onClick={closeOffcanvas}
                  >
                    <i className="bi bi-box-arrow-in-right"></i> Entrar
                  </Link>
                </li>
              </ul>

              <div className="d-flex mt-3 mt-lg-0">
                <Link 
                  className={`btn btn-sm ms-2 ${isActive("/cadastro") ? "active" : ""}`}
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