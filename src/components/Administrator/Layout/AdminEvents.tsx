import React from "react";
import "/src/styles/admin.css";

const AdminEvents: React.FC = () => {
  return (
    <section className="admin-events">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="mb-1">Eventos</h2>
          <p className="text-muted mb-0">
            Cadastro e gerenciamento de cursos, eventos e mentorias
          </p>
        </div>

        <button className="btn btn-primary">
          + Novo Evento
        </button>
      </div>

      {/* Cadastro de Evento */}
      <div className="card mb-4">
        <div className="card-header">
          Cadastro de Evento
        </div>

        <div className="card-body">
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Título do Evento</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ex: Oficina de Marketing Digital"
              />
            </div>

            <div className="col-md-3">
              <label className="form-label">Tipo</label>
              <select className="form-select">
                <option>Evento</option>
                <option>Curso</option>
                <option>Mentoria</option>
              </select>
            </div>

            <div className="col-md-3">
              <label className="form-label">Modalidade</label>
              <select className="form-select">
                <option>Online</option>
                <option>Presencial</option>
                <option>YouTube</option>
                <option>Híbrido</option>
              </select>
            </div>

            <div className="col-md-6">
              <label className="form-label">Data</label>
              <input
                type="date"
                className="form-control"
              />
            </div>

            <div className="col-md-3">
              <label className="form-label">Horário</label>
              <input
                type="time"
                className="form-control"
              />
            </div>

            <div className="col-md-3">
              <label className="form-label">Vagas</label>
              <input
                type="number"
                className="form-control"
                placeholder="Ex: 50"
              />
            </div>

            <div className="col-12">
              <label className="form-label">
                Local ou Link do Evento
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Ex: Google Meet / Endereço físico"
              />
            </div>

            <div className="col-md-4">
              <label className="form-label">Status</label>
              <select className="form-select">
                <option>Agendado</option>
                <option>Encerrado</option>
                <option>Cancelado</option>
              </select>
            </div>

            <div className="col-12 text-end">
              <button type="submit" className="btn btn-success">
                Salvar Evento
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Lista de Eventos */}
      <div className="card">
        <div className="card-header">
          Eventos Cadastrados
        </div>

        <div className="card-body">
          <table className="table table-hover align-middle">
            <thead>
              <tr>
                <th>Título</th>
                <th>Tipo</th>
                <th>Data</th>
                <th>Modalidade</th>
                <th>Vagas</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Oficina de Marketing</td>
                <td>Evento</td>
                <td>22/02/2026</td>
                <td>Online</td>
                <td>50</td>
                <td>
                  <span className="badge bg-primary">Agendado</span>
                </td>
                <td className="d-flex gap-2">
                  <button className="btn btn-sm btn-outline-primary">
                    Editar
                  </button>
                  <button className="btn btn-sm btn-outline-secondary">
                    Participantes
                  </button>
                </td>
              </tr>

              <tr>
                <td>Mentoria Financeira</td>
                <td>Mentoria</td>
                <td>10/01/2026</td>
                <td>Presencial</td>
                <td>30</td>
                <td>
                  <span className="badge bg-secondary">Encerrado</span>
                </td>
                <td className="d-flex gap-2">
                  <button className="btn btn-sm btn-outline-primary">
                    Editar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AdminEvents;
