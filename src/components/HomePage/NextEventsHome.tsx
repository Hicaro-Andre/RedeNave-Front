import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";

type NextEventsHomeProps = {
  blok: {
    title: string;
    description: string;
    button_section_events: string;
  };
};

interface Evento {
  id: string;
  titulo: string;
  descricao: string;
  data: string; // YYYY-MM-DD
  horario: string;
  tipo: "Online" | "Presencial" | "Live";
  vagas: number;
}

declare global {
  interface Window {
    NAVE_ADVANCED?: {
      toast?: {
        show: (
          message: string,
          type: "success" | "error" | "warning" | "info"
        ) => void;
      };
    };
  }
}

export default function NextEventsHome({ blok }: NextEventsHomeProps) {
  const [eventos, setEventos] = useState<Evento[]>([]);

  // ================= LOAD EVENTS =================
  useEffect(() => {
    const fetchEventos = async () => {
      try {
        const snapshot = await getDocs(collection(db, "eventos"));

        const data: Evento[] = snapshot.docs.map(doc => ({
          id: doc.id,
          ...(doc.data() as Evento),
        }));

        const hoje = new Date();

        const eventosOrdenados = data
          .filter(ev => new Date(ev.data) >= hoje) // remove eventos passados
          .sort(
            (a, b) =>
              new Date(a.data).getTime() - new Date(b.data).getTime()
          )
          .slice(0, 3); // apenas os 3 mais próximos

        setEventos(eventosOrdenados);
      } catch (error) {
        console.error("Erro ao carregar eventos:", error);
      }
    };

    fetchEventos();
  }, []);

  // ================= INSCRIÇÃO =================
  const handleInscricao = (titulo: string) => {
    if (window.NAVE_ADVANCED?.toast) {
      window.NAVE_ADVANCED.toast.show(
        `Inscrição solicitada para: ${titulo}`,
        "success"
      );
    } else {
      alert(`Inscrição solicitada para: ${titulo}`);
    }
  };

  // ================= JSX =================
  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">{blok.title}</h2>
          <p>{blok.description}</p>
        </div>

        <div className="row g-4" id="eventosContainer">
          {eventos.map(evento => {
            const dataEvento = new Date(evento.data);

            const dia = dataEvento.getDate();
            const mes = dataEvento
              .toLocaleString("pt-BR", { month: "short" })
              .replace(".", "")
              .toUpperCase();

            return (
              <div key={evento.id} className="col">
                <div className="card event-card">
                  <div className="row g-0">
                    <div className="col-auto">
                      <div className="event-date avacolor">
                        <span className="day">{dia}</span>
                        <span className="month">{mes}</span>
                      </div>
                    </div>

                    <div className="col">
                      <div className="card-body">
                        <span className="badge mb-2 bg-badge">
                          {evento.tipo}
                        </span>

                        <h6 className="card-title fw-bold title-color">
                          {evento.titulo}
                        </h6>

                        <p className="card-text text-muted small mb-2">
                          {evento.descricao}
                        </p>

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
            );
          })}
        </div>

        <div className="text-center mt-4">
          <Link to="/eventos" className="btn btn-lg">
            {blok.button_section_events}{" "}
            <i className="bi bi-calendar-event"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
