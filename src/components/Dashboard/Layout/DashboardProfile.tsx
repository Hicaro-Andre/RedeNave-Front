import { useEffect, useRef, useState } from "react";
import CropModal from "../Settings/CropModal";

interface DashboardProfileProps {
  fotoPerfil: string | null;
  onChangeFoto: (novaFoto: string) => void;
}

const DashboardProfile: React.FC<DashboardProfileProps> = ({
  fotoPerfil,
  onChangeFoto,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [tempImage, setTempImage] = useState<string | null>(null);
  const [nome, setNome] = useState<string>("");

  useEffect(() => {
    const nomeSalvo = localStorage.getItem("nome");
    if (nomeSalvo) setNome(nomeSalvo);
  }, []);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const imageUrl = URL.createObjectURL(file);
    setTempImage(imageUrl);
    onChangeFoto(imageUrl); // atualiza no estado do DashMain também
  };

  // Avatar final: foto temporária > foto do usuário > avatar padrão com iniciais
  const avatarSrc =
    tempImage ||
    fotoPerfil ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(nome || "Usuário")}&background=6f42c1&color=fff`;

  return (
    <div className="dashboard-section">
      <h2 className="fw-bold mb-4">Meu Perfil 👤</h2>

      <div className="card profile-card p-4">
        {/* HEADER */}
        <div className="profile-header text-center">
          <div
            className="profile-avatar"
            onClick={() => fileInputRef.current?.click()}
          >
            <img src={avatarSrc} alt="Avatar do usuário" />
            <div className="avatar-overlay">
              <i className="bi bi-camera-fill"></i>
              <span>Alterar foto</span>
            </div>
          </div>

          <input
            type="file"
            ref={fileInputRef}
            accept="image/*"
            hidden
            onChange={handleAvatarChange}
          />

          <h5 className="fw-bold mt-3 mb-1">{nome || "Usuário"}</h5>
          <span className="text-muted">Nível 3 • Plano Premium</span>
        </div>

        <hr className="my-4" />

        {/* DADOS */}
        <div className="row g-4">
          <div className="col-md-6">
            <label className="form-label fw-semibold">Nome</label>
            <input
              className="form-control profile-input"
              value={nome || "Usuário"}
              disabled
            />
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold">Email</label>
            <input
              className="form-control profile-input"
              value={localStorage.getItem("email") || ""}
              disabled
            />
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold">Membro desde</label>
            <input
              className="form-control profile-input"
              value="Janeiro 2025"
              disabled
            />
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold">Plano</label>
            <input
              className="form-control profile-input"
              value="Premium"
              disabled
            />
          </div>
        </div>
      </div>

      {/* MODAL DE CROP */}
      {tempImage && (
        <CropModal
          image={tempImage}
          onCancel={() => setTempImage(null)}
          onSave={(croppedImage) => {
            onChangeFoto(croppedImage); // atualiza Sidebar + menu
            setTempImage(null);
          }}
        />
      )}
    </div>
  );
};

export default DashboardProfile;
