import React, { useState } from "react";

type EventsTabsProps = {
  blok: {
    all_events: string,
    types_events01: string,
    types_events02: string,
    types_events03: string,
  };
};

const EventsTabs = ({ blok }: EventsTabsProps) => {
  const [filtro, setFiltro] = useState("todos");

  const filtrarEventos = (tipo) => {
    setFiltro(tipo);
    console.log("Filtro selecionado:", tipo);
    // Aqui você pode adicionar lógica para filtrar os eventos
  };

  return (
    <section className="py-4 ">
      <div className="container">
        <ul className="nav nav-pills justify-content-center" id="eventosTabs" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${filtro === "todos" ? "active" : ""}`}
              onClick={() => filtrarEventos("todos")}
            >
              <i className="bi bi-calendar-event"></i> {blok.all_events}
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${filtro === "Workshop" ? "active" : ""}`}
              onClick={() => filtrarEventos("Workshop")}
            >
              <i className="bi bi-laptop"></i> {blok.types_events01}
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${filtro === "Live" ? "active" : ""}`}
              onClick={() => filtrarEventos("Live")}
            >
              <i className="bi bi-camera-video"></i> {blok.types_events02}
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${filtro === "Feira" ? "active" : ""}`}
              onClick={() => filtrarEventos("Feira")}
            >
              <i className="bi bi-shop"></i> {blok.types_events03}
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default EventsTabs;
