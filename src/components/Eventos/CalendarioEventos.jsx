import React from "react";

const CalendarioEventos = () => {
  const changeMonth = (delta) => {
    console.log("Alterar mês em:", delta);
    // Aqui você colocaria a lógica para atualizar o mês
  };

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="fw-bold mb-4 text-center">Calendário de Eventos</h2>

        <div className="row g-4">
          {/* Calendário */}
          <div className="col-lg-5">
            <div className="calendar-container">
              <div className="calendar-header d-flex align-items-center justify-content-between mb-2">
                <button
                  className="btn btn-sm btn-outline-primary"
                  onClick={() => changeMonth(-1)}
                >
                  <i className="bi bi-chevron-left"></i>
                </button>
                <h5 className="fw-bold mb-0" id="currentMonth">
                  Novembro 2025
                </h5>
                <button
                  className="btn btn-sm btn-outline-primary"
                  onClick={() => changeMonth(1)}
                >
                  <i className="bi bi-chevron-right"></i>
                </button>
              </div>

              <div className="calendar-grid mb-3 d-grid" style={{gridTemplateColumns: "repeat(7, 1fr)"}}>
                <div className="text-center fw-bold small">Dom</div>
                <div className="text-center fw-bold small">Seg</div>
                <div className="text-center fw-bold small">Ter</div>
                <div className="text-center fw-bold small">Qua</div>
                <div className="text-center fw-bold small">Qui</div>
                <div className="text-center fw-bold small">Sex</div>
                <div className="text-center fw-bold small">Sáb</div>
              </div>

              <div className="calendar-grid" id="calendarDays">
                {/* Aqui os dias do mês serão gerados dinamicamente via React */}
              </div>

              <div className="mt-3">
                <small className="text-muted">
                  <span className="badge bg-primary">●</span> Dia com evento
                </small>
              </div>
            </div>
          </div>

          {/* Lista de Eventos */}
          <div className="col-lg-7">
            <div id="listaEventos">
              {/* Aqui os eventos do mês serão carregados dinamicamente via React */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendarioEventos;
