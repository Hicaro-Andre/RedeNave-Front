import React, { useEffect, useRef } from "react";

export default function StatsSection() {
  const refs = useRef([]);

  useEffect(() => {
    const elements = refs.current;

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;

          if (entry.isIntersecting && !el.dataset.animated) {
            el.dataset.animated = "true";
            animateNumber(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    elements.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const animateNumber = (element) => {
    const text = element.textContent.trim();
    const rawNumber = parseInt(text.replace(/\D/g, ""));
    if (isNaN(rawNumber)) return;

    const suffix = text.replace(/[0-9]/g, "");
    const duration = 2000;
    const increment = rawNumber / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;

      if (current >= rawNumber) {
        element.textContent = rawNumber + suffix;
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current) + suffix;
      }
    }, 16);
  };

  return (
    <section className="stats-section py-4 bg-light">
      <div className="container">
        <div className="row text-center">

          <div className="col-md-3 col-6 mb-3 mb-md-0">
            <div className="stat-card-home estatistica">
              <h3
                ref={(el) => (refs.current[0] = el)}
                className="fw-bold mb-0"
              >
                500+
              </h3>
              <p className="mb-0">Mulheres Capacitadas</p>
            </div>
          </div>

          <div className="col-md-3 col-6 mb-3 mb-md-0">
            <div className="stat-card-home estatistica">
              <h3
                ref={(el) => (refs.current[1] = el)}
                className="fw-bold mb-0"
              >
                20+
              </h3>
              <p className="mb-0">Cursos Disponíveis</p>
            </div>
          </div>

          <div className="col-md-3 col-6">
            <div className="stat-card-home estatistica">
              <h3
                ref={(el) => (refs.current[2] = el)}
                className="fw-bold mb-0"
              >
                95%
              </h3>
              <p className="mb-0">Taxa de Satisfação</p>
            </div>
          </div>

          <div className="col-md-3 col-6">
            <div className="stat-card-home estatistica">
              <h3
                ref={(el) => (refs.current[3] = el)}
                className="fw-bold mb-0"
              >
                100%
              </h3>
              <p className="mb-0">Online e Gratuito</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
