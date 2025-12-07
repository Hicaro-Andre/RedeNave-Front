import React, { useState, useEffect } from "react";

export default function CalendarioEventos() {
  const eventos = [
    {
      id: 1,
      titulo: "Workshop: Precificação Inteligente",
      tipo: "Workshop",
      data: "15/11/2025",
      hora: "19:00",
      duracao: "2h",
      vagas: 30,
      inscricoes: 23,
      modalidade: "Online",
      instrutor: "Carla Almeida",
    },
    {
      id: 2,
      titulo: "Feira de Empreendedoras NAVE",
      tipo: "Feira",
      data: "20/11/2025",
      hora: "09:00",
      duracao: "8h",
      vagas: 50,
      inscricoes: 45,
      modalidade: "Presencial",
      local: "Centro Cultural, São Paulo",
    },
    {
      id: 3,
      titulo: "Live: Instagram para Vendas",
      tipo: "Live",
      data: "25/11/2025",
      hora: "20:00",
      duracao: "1h30",
      vagas: 100,
      inscricoes: 78,
      modalidade: "YouTube",
      instrutor: "Ana Paula Souza",
    },
    {
      id: 4,
      titulo: "Workshop: Gestão de Tempo",
      tipo: "Workshop",
      data: "28/11/2025",
      hora: "18:00",
      duracao: "2h",
      vagas: 25,
      inscricoes: 12,
      modalidade: "Online",
    },
    {
      id: 5,
      titulo: "Mentoria: Planejamento 2026",
      tipo: "Mentoria",
      data: "05/12/2025",
      hora: "14:00",
      duracao: "3h",
      vagas: 15,
      inscricoes: 8,
      modalidade: "Híbrido",
    },
  ];

  // ==============================
  // Estados
  // ==============================

  const [mesAtual, setMesAtual] = useState(10); // Novembro = 10 (0 = Jan)
  const [anoAtual, setAnoAtual] = useState(2025);
  const [filtro, setFiltro] = useState("todos");
  const [diasDoMes, setDiasDoMes] = useState([]);

  // ==============================
  // Gerar calendário
  // ==============================

  useEffect(() => {
    gerarCalendario();
  }, [mesAtual, anoAtual]);

  function gerarCalendario() {
    const primeiroDia = new Date(anoAtual, mesAtual, 1).getDay();
    const ultimoDia = new Date(anoAtual, mesAtual + 1, 0).getDate();

    const diasEventos = eventos
      .filter((ev) => ev.data.includes(`/${mesAtual + 1}/`))
      .map((ev) => parseInt(ev.data.split("/")[0]));

    const dias = [];

    // Dias vazios antes
    for (let i = 0; i < primeiroDia; i++) {
      dias.push({ dia: null });
    }

    // Dias do mês
    for (let d = 1; d <= ultimoDia; d++) {
      dias.push({
        dia: d,
        evento: diasEventos.includes(d),
      });
    }

    setDiasDoMes(dias);
  }

  // ==============================
  // Navegação entre meses
  // ==============================

  function changeMonth(direction) {
    let novoMes = mesAtual + direction;
    let novoAno = anoAtual;

    if (novoMes < 0) {
      novoMes = 11;
      novoAno--;
    } else if (novoMes > 11) {
      novoMes = 0;
      novoAno++;
    }

    setMesAtual(novoMes);
    setAnoAtual(novoAno);
  }

  // ==============================
  // Renderizar eventos filtrados
  // ==============================

  const eventosFiltrados =
    filtro === "todos"
      ? eventos
      : eventos.filter((ev) => ev.tipo === filtro);

  function inscreverEvento(titulo) {
    alert(`Inscrito no evento: ${titulo}`);
  }

  const nomeMes = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  // ==============================
  // JSX
  // ==============================

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="fw-bold mb-4 text-center">Calendário de Eventos</h2>

        <div className="row g-4">
          {/* Calendário */}
          <div className="col-lg-5">
            <div className="calendar-container">

              {/* Header */}
              <div className="calendar-header d-flex align-items-center justify-content-between mb-2">
                <button
                  className="btn btn-sm btn-outline-primary"
                  onClick={() => changeMonth(-1)}
                >
                  <i className="bi bi-chevron-left"></i>
                </button>

                <h5 className="fw-bold mb-0">
                  {nomeMes[mesAtual]} {anoAtual}
                </h5>

                <button
                  className="btn btn-sm btn-outline-primary"
                  onClick={() => changeMonth(1)}
                >
                  <i className="bi bi-chevron-right"></i>
                </button>
              </div>

              {/* Dias da Semana */}
              <div
                className="calendar-grid mb-3 d-grid"
                style={{ gridTemplateColumns: "repeat(7, 1fr)" }}
              >
                {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map((d) => (
                  <div key={d} className="text-center fw-bold small">
                    {d}
                  </div>
                ))}
              </div>

              {/* Dias */}
              <div
                className="calendar-grid"
                style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)" }}
              >
                {diasDoMes.map((item, index) => (
                  <div
                    key={index}
                    className={`calendar-day ${
                      item.evento ? "has-event" : ""
                    }`}
                  >
                    {item.dia}
                  </div>
                ))}
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
            {eventosFiltrados.length === 0 && (
              <div className="text-center py-5">
                <i className="bi bi-calendar-x display-1 text-muted"></i>
                <p className="text-muted mt-3">
                  Nenhum evento encontrado nesta categoria.
                </p>
              </div>
            )}

            {eventosFiltrados.map((evento) => {
              const vagasRestantes = evento.vagas - evento.inscricoes;
              const percentual = (evento.inscricoes / evento.vagas) * 100;

              return (
                <div key={evento.id} className="card mb-3">
                  <div className="card-body">
                    <div className="row align-items-center">

                      {/* Data */}
                      <div className="col-md-2 text-center">
                        <div className="bg-primary text-white p-3 rounded">
                          <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
                            {evento.data.split("/")[0]}
                          </div>
                          <div>{nomeMes[mesAtual].slice(0, 3).toUpperCase()}</div>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="col-md-7">
                        <span className="badge bg-info mb-2">{evento.tipo}</span>
                        <h5 className="fw-bold mb-2">{evento.titulo}</h5>
                        <p className="text-muted mb-2 small">
                          <i className="bi bi-clock"></i> {evento.hora} - {evento.duracao} |{" "}
                          <i className="bi bi-laptop"></i> {evento.modalidade}
                        </p>

                        <div className="progress" style={{ height: 5 }}>
                          <div
                            className="progress-bar bg-success"
                            style={{ width: `${percentual}%` }}
                          ></div>
                        </div>
                        <small className="text-muted">
                          {evento.inscricoes}/{evento.vagas} inscritos
                        </small>
                      </div>

                      {/* Botão */}
                      <div className="col-md-3 text-end">
                        <button
                          className="btn btn-primary btn-sm w-100"
                          onClick={() => inscreverEvento(evento.titulo)}
                        >
                          <i className="bi bi-calendar-plus"></i> Inscrever
                        </button>

                        {vagasRestantes <= 5 && (
                          <small className="text-danger d-block mt-2">
                            Últimas vagas!
                          </small>
                        )}
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
