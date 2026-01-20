import React, { useState, useEffect, useMemo } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";

type CalendarEventsProps = { blok: { title: string } };

interface Evento {
  id?: string;
  titulo: string;
  tipo: string;
  data: string;
  horario: string;
  duracao?: string;
  vagas: number;
  inscricoes?: number;
  modalidade: string;
  instrutor?: string;
  local?: string;
}

export default function CalendarEvents({ blok }: CalendarEventsProps) {
  const [eventos, setEventos] = useState<Evento[]>([]);

  const hoje = new Date();

  const [mesAtual, setMesAtual] = useState(hoje.getMonth());
  const [anoAtual, setAnoAtual] = useState(hoje.getFullYear());

  const [filtro, setFiltro] = useState("todos");
  const [diasDoMes, setDiasDoMes] = useState<any[]>([]);

  const nomeMes = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  // ================= LOAD EVENTS =================
  useEffect(() => {
    const fetchEventos = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "eventos"));
        const data: Evento[] = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...(doc.data() as Evento)
        }));
        setEventos(data);
      } catch (error) {
        console.error("Erro ao carregar eventos:", error);
      }
    };
    fetchEventos();
  }, []);

  // ================= CALENDAR =================
  useEffect(() => {
    gerarCalendario();
  }, [mesAtual, anoAtual, eventos]);

  function gerarCalendario() {
    const primeiroDia = new Date(anoAtual, mesAtual, 1).getDay();
    const ultimoDia = new Date(anoAtual, mesAtual + 1, 0).getDate();

    // pega apenas eventos do mês e ano atual
    const diasEventos = eventos
      .map(ev => new Date(ev.data))
      .filter(
        data =>
          data.getMonth() === mesAtual &&
          data.getFullYear() === anoAtual
      )
      .map(data => data.getDate());

    const dias = [];

    for (let i = 0; i < primeiroDia; i++) {
      dias.push({ dia: null });
    }

    for (let d = 1; d <= ultimoDia; d++) {
      dias.push({
        dia: d,
        evento: diasEventos.includes(d)
      });
    }

    setDiasDoMes(dias);
  }


  function changeMonth(direction: number) {
    let novoMes = mesAtual + direction;
    let novoAno = anoAtual;
    if (novoMes < 0) { novoMes = 11; novoAno--; }
    else if (novoMes > 11) { novoMes = 0; novoAno++; }
    setMesAtual(novoMes);
    setAnoAtual(novoAno);
  }

  // ================= FILTRO + ORDENAÇÃO =================
  const eventosOrdenados = useMemo(() => {
    const lista =
      filtro === "todos"
        ? [...eventos]
        : eventos.filter(ev => ev.tipo === filtro);

    return lista.sort(
      (a, b) =>
        new Date(a.data).getTime() - new Date(b.data).getTime()
    );
  }, [eventos, filtro]);

  function inscreverEvento(titulo: string) {
    alert(`Inscrito no evento: ${titulo}`);
  }

  // ================= JSX =================
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="fw-bold mb-4 text-center">{blok.title}</h2>

        <div className="row g-4">
          {/* Calendário */}
          <div className="col-lg-5">
            <div className="calendar-container">
              <div className="calendar-header d-flex align-items-center justify-content-between mb-2">
                <button className="btn btn-sm btn-outline-primary" onClick={() => changeMonth(-1)}>
                  <i className="bi bi-chevron-left"></i>
                </button>
                <h5 className="fw-bold mb-0">{nomeMes[mesAtual]} {anoAtual}</h5>
                <button className="btn btn-sm btn-outline-primary" onClick={() => changeMonth(1)}>
                  <i className="bi bi-chevron-right"></i>
                </button>
              </div>

              <div className="calendar-grid mb-3 d-grid" style={{ gridTemplateColumns: "repeat(7, 1fr)" }}>
                {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map(d => (
                  <div key={d} className="text-center fw-bold small">{d}</div>
                ))}
              </div>

              <div className="calendar-grid" style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)" }}>
                {diasDoMes.map((item, index) => (
                  <div key={index} className={`calendar-day ${item.evento ? "has-event" : ""}`}>
                    {item.dia}
                  </div>
                ))}
              </div>

              <div className="mt-3">
                <small className="text-muted">
                  <span className="badge day-event">●</span> Dia com evento
                </small>
              </div>
            </div>
          </div>

          {/* Lista de Eventos */}
          <div className="col-lg-7">
            {eventosOrdenados.length === 0 ? (
              <div className="text-center py-5">
                <i className="bi bi-calendar-x display-1 text-muted"></i>
                <p className="text-muted mt-3">Nenhum evento encontrado nesta categoria.</p>
              </div>
            ) : (
              eventosOrdenados.map(evento => {
                const inscricoes = evento.inscricoes || 0;
                const vagasRestantes = evento.vagas - inscricoes;
                const percentual = (inscricoes / evento.vagas) * 100;

                return (
                  <div key={evento.id} className="card mb-3">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-md-2 text-center">
                          <div className="bg-calendar text-white p-3 rounded text-center">
                            <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
                              {new Date(evento.data).getDate()}
                            </div>
                            <div style={{ fontSize: "0.9rem", fontWeight: 600 }}>
                              {new Date(evento.data)
                                .toLocaleString("pt-BR", { month: "short" })
                                .replace(".", "")
                                .toUpperCase()}
                            </div>
                          </div>
                        </div>

                        <div className="col-md-7">
                          <span className="badge bg-calendar mb-2">{evento.tipo}</span>
                          <h5 className="fw-bold mb-2">{evento.titulo}</h5>
                          <p className="text-muted mb-2 small">
                            <i className="bi bi-clock"></i> {evento.horario || "-"} {evento.duracao || "-"} |{" "}
                            <i className="bi bi-laptop"></i> {evento.modalidade || "-"}
                          </p>

                          <div className="progress" style={{ height: 5 }}>
                            <div className="progress-bar bg-success" style={{ width: `${percentual}%` }}></div>
                          </div>
                          <small className="text-muted">{inscricoes}/{evento.vagas} inscritos</small>
                        </div>

                        <div className="col-md-3 text-end">
                          <button
                            className="btn btn-primary btn-sm w-100"
                            onClick={() => inscreverEvento(evento.titulo)}
                          >
                            <i className="bi bi-calendar-plus"></i> Inscrever
                          </button>
                          {vagasRestantes <= 5 && (
                            <small className="text-danger d-block mt-2">Últimas vagas!</small>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
