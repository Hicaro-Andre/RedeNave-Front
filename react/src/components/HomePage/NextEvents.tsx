import React from "react";
import { Link } from "react-router-dom";

export default function NextEvents() {
  return (
    <section className="py-5 bg-light">
      <div className="container">

        {/* Título */}
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">Próximos Eventos</h2>
          <p>Participe de nossas oficinas, feiras e lives</p>
        </div>

        {/* Container dos eventos (dinâmico futuramente) */}
        <div className="row g-4" id="eventosContainer">
          {/* Aqui você poderá inserir cards via map, por exemplo: */}
          {/* {eventos.map(evento => <EventoCard ... />)} */}
        </div>

        {/* Botão para página completa */}
        <div className="text-center mt-4">
          <Link to="/eventos" className="btn btn-lg">
            Ver Agenda Completa <i className="bi bi-calendar-event"></i>
          </Link>
        </div>

      </div>
    </section>
  );
}
