import React from "react";
import { Link } from "react-router-dom";

interface Evento {
  id: number;
  titulo: string;
  descricao: string;
  data: string;
  mes: string;
  horario: string;
  tipo: "Online" | "Presencial" | "Live";
  vagas: number;
}

declare global {
  interface Window {
    NAVE_ADVANCED?: {
      toast?: {
        show: (message: string, type: 'success' | 'error' | 'warning' | 'info') => void;
      };
    };
  }
}

export default function NextEvents() {
  const eventos: Evento[] = [
    {
      id: 1,
      titulo: "Workshop: Precificação Inteligente",
      descricao: "Aprenda a calcular o preço ideal para seus produtos.",
      data: "15",
      mes: "NOV",
      horario: "19:00",
      tipo: "Online",
      vagas: 30
    },
    {
      id: 2,
      titulo: "Feira de Empreendedoras NAVE",
      descricao: "Exponha seus produtos e faça networking.",
      data: "20",
      mes: "NOV",
      horario: "09:00",
      tipo: "Presencial",
      vagas: 50
    },
    {
      id: 3,
      titulo: "Live: Instagram para Vendas",
      descricao: "Estratégias práticas para vender pelo Instagram.",
      data: "25",
      mes: "NOV",
      horario: "20:00",
      tipo: "Live",
      vagas: 100
    }
  ];

  const handleInscricao = (titulo: string) => {
    if (window.NAVE_ADVANCED && window.NAVE_ADVANCED.toast) {
      window.NAVE_ADVANCED.toast.show(
        `Inscrição solicitada para: ${titulo}`,
        'success'
      );
    } else {
      alert(`Inscrição solicitada para: ${titulo}`);
    }
  };

  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">Próximos Eventos</h2>
          <p className="">Participe de nossas oficinas, feiras e lives</p>
        </div>

        <div className="row g-4" id="eventosContainer">
          {eventos.map((evento) => (
            <div key={evento.id} className="col">
              <div className="card event-card">
                <div className="row g-0">
                  <div className="col-auto">
                    <div className="event-date avacolor">
                      <span className="day">{evento.data}</span>
                      <span className="month">{evento.mes}</span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card-body">
                      <span className="badge mb-2 bg-badge">{evento.tipo}</span>
                      <h6 className="card-title fw-bold title-color">{evento.titulo}</h6>
                      <p className="card-text text-muted small mb-2">{evento.descricao}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="text-muted small">
                          <i className="bi bi-clock"></i> {evento.horario}
                        </span>
                        <span className="text-muted small">
                          <i className="bi bi-people"></i> {evento.vagas} vagas
                        </span>
                      </div>
                      <button
                        className="btn btn-sm btn-outline-primary mt-3 w-100"
                        onClick={() => handleInscricao(evento.titulo)}
                      >
                        <i className="bi bi-calendar-plus"></i> Inscrever-se
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <Link to="/eventos" className="btn btn-lg">
            Ver Agenda Completa <i className="bi bi-calendar-event"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}