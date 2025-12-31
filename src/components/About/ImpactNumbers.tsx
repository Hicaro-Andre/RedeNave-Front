import React, { useEffect, useRef } from "react";

export default function ImpactNumbers() {
  const refs = useRef<(HTMLHeadingElement | null)[]>([]);

  useEffect(() => {
    const elements = refs.current.filter((el): el is HTMLHeadingElement => el !== null);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLHeadingElement;

          if (entry.isIntersecting && !el.dataset.animated) {
            el.dataset.animated = "true";
            animateNumber(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const animateNumber = (element: HTMLHeadingElement) => {
    const finalNumber = parseInt(element.getAttribute("data-count") || "");
    if (isNaN(finalNumber)) return;

    const duration = 2000; // 2s
    const increment = finalNumber / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;

      if (current >= finalNumber) {
        element.textContent = finalNumber.toString();
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current).toString();
      }
    }, 16);
  };

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="fw-bold text-center mb-5">Nosso Impacto em Números</h2>

        <div className="row g-4 text-center">

          <div className="col-md-3 col-6">
            <div className="p-4">
              <h2
                className="display-3 fw-bold text-primary mb-0"
                data-count="500"
                ref={(el) => { refs.current[0] = el; }}
              >
                0
              </h2>
              <p className="mb-0">
                Mulheres<br />Capacitadas
              </p>
            </div>
          </div>

          <div className="col-md-3 col-6">
            <div className="p-4">
              <h2
                className="display-3 fw-bold text-success mb-0"
                data-count="85"
                ref={(el) => { refs.current[1] = el; }}
              >
                0
              </h2>
              <p className="mb-0">
                % Taxa de<br />Conclusão
              </p>
            </div>
          </div>

          <div className="col-md-3 col-6">
            <div className="p-4">
              <h2
                className="display-3 fw-bold text-warning mb-0"
                data-count="250"
                ref={(el) => { refs.current[2] = el; }}
              >
                0
              </h2>
              <p className="mb-0">
                Negócios<br />Criados
              </p>
            </div>
          </div>

          <div className="col-md-3 col-6">
            <div className=" p-4">
              <h2
                className="display-3 fw-bold text-danger mb-0"
                data-count="95"
                ref={(el) => { refs.current[3] = el; }}
              >
                0
              </h2>
              <p className="mb-0">
                % Satisfação<br />das Alunas
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}