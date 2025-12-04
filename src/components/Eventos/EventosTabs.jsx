import React, { useState } from "react";

const EventosTabs = () => {
  const [filtro, setFiltro] = useState("todos");

  const filtrarEventos = (tipo) => {
    setFiltro(tipo);
    console.log("Filtro selecionado:", tipo);
    // Aqui você pode adicionar lógica para filtrar os eventos
  };

  return (
    <section className="py-4 bg-light">
      <div className="container">
        <ul className="nav nav-pills justify-content-center" id="eventosTabs" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${filtro === "todos" ? "active" : ""}`}
              onClick={() => filtrarEventos("todos")}
            >
              <i className="bi bi-calendar-event"></i> Todos
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${filtro === "Workshop" ? "active" : ""}`}
              onClick={() => filtrarEventos("Workshop")}
            >
              <i className="bi bi-laptop"></i> Workshops
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${filtro === "Live" ? "active" : ""}`}
              onClick={() => filtrarEventos("Live")}
            >
              <i className="bi bi-camera-video"></i> Lives
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${filtro === "Feira" ? "active" : ""}`}
              onClick={() => filtrarEventos("Feira")}
            >
              <i className="bi bi-shop"></i> Feiras
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default EventosTabs;
