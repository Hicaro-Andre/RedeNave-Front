import React, { useEffect, useState } from "react";
import "/src/styles/admin.css";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../config/firebase";

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  tracksCount?: number;
  progress?: number;
  certificate?: boolean;
};

const AdminUsers: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const snapshot = await getDocs(collection(db, "users"));

    const data: User[] = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<User, "id">),
    }));

    setUsers(data);
  };

  const filteredUsers = users.filter((user) => {
    const matchSearch =
      user.name?.toLowerCase().includes(search.toLowerCase()) ||
      user.email?.toLowerCase().includes(search.toLowerCase());

    const matchStatus = statusFilter
      ? user.status === statusFilter
      : true;

    return matchSearch && matchStatus;
  });

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
            className="form-control w-100 w-md-auto"
            placeholder="Buscar por nome ou email"
            style={{ maxWidth: "280px" }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="form-select w-100 w-md-auto"
            style={{ maxWidth: "220px" }}
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">Status</option>
            <option value="Ativa">Ativa</option>
            <option value="Concluinte">Concluinte</option>
            <option value="Inativa">Inativa</option>
          </select>
        </div>
      </div>

      {/* Tabela */}
      <div className="card">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
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
                {filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name || "-"}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>{user.tracksCount ?? "-"}</td>
                    <td>
                      {user.progress !== undefined
                        ? `${user.progress}%`
                        : "-"}
                    </td>
                    <td>
                      {user.certificate ? (
                        <span className="badge bg-success">Emitido</span>
                      ) : (
                        <span className="badge bg-secondary">Pendente</span>
                      )}
                    </td>
                    <td>
                      <span
                        className={`badge ${user.status === "Ativa"
                          ? "bg-primary"
                          : user.status === "Concluinte"
                            ? "bg-success"
                            : "bg-secondary"
                          }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="d-flex gap-2 flex-wrap">
                      <button className="btn btn-sm btn-outline-primary">
                        Ver
                      </button>
                      <button className="btn btn-sm btn-outline-secondary">
                        Editar
                      </button>
                    </td>
                  </tr>
                ))}

                {filteredUsers.length === 0 && (
                  <tr>
                    <td colSpan={8} className="text-center text-muted py-4">
                      Nenhuma usuária encontrada
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminUsers;
