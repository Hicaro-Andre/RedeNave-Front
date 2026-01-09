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
      <div className="card shadow-sm mb-4">
        <div className="card-header fw-semibold">
          Cadastro de Trilha
        </div>

        <div className="card-body">
          <form className="row g-4">

            {/* Título */}
            <div className="col-md-6">
              <label className="form-label fw-semibold">
                Título da Trilha
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Ex: Gestão Financeira para Empreendedoras"
              />
            </div>

            {/* Nível */}
            <div className="col-md-3">
              <label className="form-label fw-semibold">
                Nível
              </label>
              <select className="form-select">
                <option>Iniciante</option>
                <option>Intermediário</option>
                <option>Avançado</option>
              </select>
            </div>

            {/* Status */}
            <div className="col-md-3">
              <label className="form-label fw-semibold">
                Status
              </label>
              <select className="form-select">
                <option>Rascunho</option>
                <option>Publicada</option>
                <option>Arquivada</option>
              </select>
            </div>

            {/* Descrição */}
            <div className="col-12">
              <label className="form-label fw-semibold">
                Descrição
              </label>
              <textarea
                className="form-control"
                rows={4}
                placeholder="Descreva o objetivo da trilha"
              />
            </div>

            {/* Carga Horária */}
            <div className="col-md-4">
              <label className="form-label fw-semibold">
                Carga Horária (h)
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Ex: 20"
              />
            </div>

            {/* Banner da Trilha */}
            <div className="col-12">
              <label className="form-label fw-semibold">
                Banner da Trilha
              </label>

              <div className="border rounded p-3 text-center bg-light">
                <input
                  type="file"
                  className="form-control"
                  accept="image/*"
                />
                <small className="text-muted d-block mt-2">
                  Recomendado: 1200x400px • JPG ou PNG
                </small>
              </div>
            </div>

            {/* Ações */}
            <div className="col-12 d-flex justify-content-end gap-2">
              <button type="button" className="btn btn-outline-secondary">
                Cancelar
              </button>
              <button type="submit" className="btn btn-success px-4">
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
