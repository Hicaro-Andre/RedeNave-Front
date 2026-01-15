import React from "react";
import "/src/styles/admin.css";

const AdminUsers: React.FC = () => {
  return (

    <section className="admin-users">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="mb-1">Usuárias</h2>
          <p className="text-muted mb-0">
            Gerencie participantes e acompanhe o progresso nas trilhas
          </p>
        </div>
      </div>

      {/* Filtros */}
      <div className="card mb-4">
        <div className="card-body d-flex gap-3 flex-wrap">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar por nome ou email"
            style={{ maxWidth: "280px" }}
          />

          <select className="form-select" style={{ maxWidth: "220px" }}>
            <option>Status</option>
            <option>Ativa</option>
            <option>Concluinte</option>
            <option>Inativa</option>
          </select>
        </div>
      </div>

      {/* Tabela */}
      <div className="card">
        <div className="card-body">
          <table className="table table-hover align-middle">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Tipo</th>
                <th>Trilhas</th>
                <th>Progresso</th>
                <th>Certificado</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Ana Souza</td>
                <td>ana@email.com</td>
                <td>Participante</td>
                <td>3</td>
                <td>75%</td>
                <td>
                  <span className="badge bg-secondary">Pendente</span>
                </td>
                <td>
                  <span className="badge bg-primary">Ativa</span>
                </td>
                <td className="d-flex gap-2">
                  <button className="btn btn-sm btn-outline-primary">
                    Ver
                  </button>
                  <button className="btn btn-sm btn-outline-secondary">
                    Editar
                  </button>
                </td>
              </tr>

              <tr>
                <td>Maria Lima</td>
                <td>maria@email.com</td>
                <td>Participante</td>
                <td>5</td>
                <td>100%</td>
                <td>
                  <span className="badge bg-success">Emitido</span>
                </td>
                <td>
                  <span className="badge bg-success">Concluinte</span>
                </td>
                <td className="d-flex gap-2">
                  <button className="btn btn-sm btn-outline-primary">
                    Ver
                  </button>
                  <button className="btn btn-sm btn-outline-secondary">
                    Editar
                  </button>
                </td>
              </tr>

              <tr>
                <td>Juliana Rocha</td>
                <td>juliana@email.com</td>
                <td>Equipe Técnica</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>
                  <span className="badge bg-dark">Admin</span>
                </td>
                <td className="d-flex gap-2">
                  <button className="btn btn-sm btn-outline-primary">
                    Ver
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

export default AdminUsers;
