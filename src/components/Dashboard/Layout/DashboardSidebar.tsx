import React from "react";

export type DashboardSection =
  | "overview"
  | "cursos"
  | "certificados"
  | "perfil"
  | "configuracoes";

interface DashboardSidebarProps {
  section: DashboardSection;
  onChangeSection: (section: DashboardSection) => void;
  fotoPerfil: string | null;
  onUploadFoto: (novaFoto: string) => void; // ajustado para receber string
  nome: string;
  email: string;
  nivel: number;
  membroDesde: string;
}

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
  const menuItems: { key: DashboardSection; label: string; icon: string }[] =
    [
      { key: "overview", label: "Visão Geral", icon: "bi-house-door" },
      { key: "cursos", label: "Meus Cursos", icon: "bi-book" },
      { key: "certificados", label: "Certificados", icon: "bi-award" },
    ];

  const handleAvatarClick = () => {
    // cria input invisível para upload
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";

    input.onchange = (e: Event) => {
      const target = e.target as HTMLInputElement;
      const file = target.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        onUploadFoto(result); // envia a string para atualizar Sidebar e menu
      };
      reader.readAsDataURL(file);
    };

    input.click();
  };

  return (
    <aside className="dashboard-sidebar">
      {/* FOTO DE PERFIL */}
      <div className="profile-img-container" onClick={handleAvatarClick}>
        {fotoPerfil ? (
          <img src={fotoPerfil} alt="Foto de perfil" className="profile-img" />
        ) : (
          <div className="profile-img initials">
            {nome
              .split(" ")
              .map((n) => n[0])
              .slice(0, 2)
              .join("")}
          </div>
        )}
      </div>

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
            className={`menu-item ${section === item.key ? "active" : ""}`}
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
