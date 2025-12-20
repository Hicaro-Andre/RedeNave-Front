import React from "react";

/* =======================
   TIPOS
======================= */
export type DashboardSection =
  | "overview"
  | "cursos"
  | "certificados"
  | "atividades"
  | "ranking"
  | "perfil"
  | "configuracoes";


interface DashboardSidebarProps {
  section: DashboardSection;
  onChangeSection: (section: DashboardSection) => void;
  fotoPerfil: string | null;
  onUploadFoto: (event: React.ChangeEvent<HTMLInputElement>) => void;
  nome: string;
  email: string;
  nivel: number;
  membroDesde: string;
}

/* =======================
   COMPONENTE
======================= */
const DashboardSidebar: React.FC<DashboardSidebarProps> = ({
  section,
  onChangeSection,
  fotoPerfil,
  onUploadFoto,
  nome,
  email,
  nivel,
  membroDesde,
}) => {
  const menuItems: {
    key: DashboardSection;
    label: string;
    icon: string;
  }[] = [
      { key: "overview", label: "Visão Geral", icon: "bi-house-door" },
      { key: "cursos", label: "Meus Cursos", icon: "bi-book" },
      { key: "certificados", label: "Certificados", icon: "bi-award" },
      { key: "atividades", label: "Atividades", icon: "bi-list-check" },
      { key: "ranking", label: "Ranking", icon: "bi-graph-up" },
    ];

  return (
    <aside className="dashboard-sidebar">
      {/* FOTO DE PERFIL */}
      <label className="profile-img-container" htmlFor="upload-foto">
        {fotoPerfil ? (
          <img
            src={fotoPerfil}
            alt="Foto de perfil"
            className="profile-img"
          />
        ) : (
          <div className="profile-img initials">
            {nome
              .split(" ")
              .map((n) => n[0])
              .slice(0, 2)
              .join("")}
          </div>
        )}

        {/* OVERLAY */}
        <div className="profile-overlay">
          <i className="bi bi-camera-fill me-2"></i>
          Alterar foto
        </div>
      </label>

      {/* INPUT ESCONDIDO */}
      <input
        type="file"
        id="upload-foto"
        accept="image/*"
        onChange={onUploadFoto}
        style={{ display: "none" }}
      />

      {/* INFO USUÁRIO */}
      <h5 className="text-center fw-bold mt-3">{nome}</h5>
      <p className="text-center text-muted small">{email}</p>

      <div className="text-center mb-4">
        <span className="badge bg-warning text-dark px-3 py-2">
          <i className="bi bi-trophy me-1"></i> Nível {nivel}
        </span>
      </div>

      <hr />

      {/* MENU */}
      <nav>
        {menuItems.map((item) => (
          <div
            key={item.key}
            className={`menu-item ${section === item.key ? "active" : ""
              }`}
            onClick={() => onChangeSection(item.key)}
          >
            <i className={`bi ${item.icon}`}></i>
            <span>{item.label}</span>
          </div>
        ))}
      </nav>

      <hr />

      {/* FOOTER */}
      <div className="text-center">
        <small className="text-muted">Membro desde</small>
        <p className="fw-bold mb-0">{membroDesde}</p>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
