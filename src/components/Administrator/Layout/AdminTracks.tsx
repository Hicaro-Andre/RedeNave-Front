import React from "react";
import "/src/styles/admin.css";

const AdminTracks: React.FC = () => {
  return (
    <section className="admin-tracks">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="mb-1">Trilhas</h2>
          <p className="text-muted mb-0">
            Cadastro e gerenciamento de trilhas de aprendizagem
          </p>
        </div>

        <button className="btn btn-primary">
          + Nova Trilha
        </button>
      </div>

      {/* Cadastro da Trilha */}
      <div className="card mb-4">
        <div className="card-header">
          Cadastro de Trilha
        </div>

        <div className="card-body">
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Título da Trilha</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ex: Gestão Financeira para Empreendedoras"
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Área / Categoria</label>
              <select className="form-select">
                <option>Selecione</option>
                <option>Finanças</option>
                <option>Marketing Digital</option>
                <option>Gestão</option>
                <option>Vendas</option>
              </select>
            </div>

            <div className="col-12">
              <label className="form-label">Descrição</label>
              <textarea
                className="form-control"
                rows={3}
                placeholder="Descreva o objetivo da trilha"
              />
            </div>

            <div className="col-md-4">
              <label className="form-label">Nível</label>
              <select className="form-select">
                <option>Básico</option>
                <option>Intermediário</option>
                <option>Avançado</option>
              </select>
            </div>

            <div className="col-md-4">
              <label className="form-label">Carga Horária (h)</label>
              <input
                type="number"
                className="form-control"
                placeholder="Ex: 20"
              />
            </div>

            <div className="col-md-4">
              <label className="form-label">Status</label>
              <select className="form-select">
                <option>Rascunho</option>
                <option>Publicada</option>
                <option>Arquivada</option>
              </select>
            </div>

            <div className="col-12 text-end">
              <button type="submit" className="btn btn-success">
                Salvar Trilha
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Lista de Trilhas */}
      <div className="card">
        <div className="card-header">
          Trilhas Cadastradas
        </div>

        <div className="card-body">
          <table className="table table-hover align-middle">
            <thead>
              <tr>
                <th>Título</th>
                <th>Categoria</th>
                <th>Nível</th>
                <th>Módulos</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Gestão Financeira</td>
                <td>Finanças</td>
                <td>Básico</td>
                <td>5</td>
                <td>
                  <span className="badge bg-success">Publicada</span>
                </td>
                <td className="d-flex gap-2">
                  <button className="btn btn-sm btn-outline-primary">
                    Editar
                  </button>
                  <button className="btn btn-sm btn-outline-secondary">
                    Módulos
                  </button>
                </td>
              </tr>

              <tr>
                <td>Marketing Digital</td>
                <td>Marketing</td>
                <td>Intermediário</td>
                <td>8</td>
                <td>
                  <span className="badge bg-secondary">Rascunho</span>
                </td>
                <td className="d-flex gap-2">
                  <button className="btn btn-sm btn-outline-primary">
                    Editar
                  </button>
                  <button className="btn btn-sm btn-outline-secondary">
                    Módulos
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

export default AdminTracks;
