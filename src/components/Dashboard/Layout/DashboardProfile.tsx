import { useRef, useState } from "react";
import CropModal from "../Settings/CropModal";

const DEFAULT_AVATAR =
  "https://ui-avatars.com/api/?name=Maria+Silva&background=6f42c1&color=fff";

const DashboardProfile = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [avatar, setAvatar] = useState<string>(DEFAULT_AVATAR);
  const [tempImage, setTempImage] = useState<string | null>(null);

  // Quando o usuário escolhe uma imagem
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setTempImage(imageUrl); // abre o modal de crop
  };

  return (
    <div className="dashboard-section">
      <h2 className="fw-bold mb-4">Meu Perfil 👤</h2>

      <div className="card profile-card p-4">
        {/* ================= Header do Perfil ================= */}
        <div className="profile-header text-center">
          <div
            className="profile-avatar"
            onClick={() => fileInputRef.current?.click()}
          >
            <img src={avatar} alt="Avatar do usuário" />

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

          <h5 className="fw-bold mt-3 mb-1">Maria Silva</h5>
          <span className="text-muted">Nível 3 • Plano Premium</span>
        </div>

        <hr className="my-4" />

        {/* ================= Dados do Usuário ================= */}
        <div className="row g-4">
          <div className="col-md-6">
            <label className="form-label fw-semibold">Nome</label>
            <input
              className="form-control profile-input"
              value="Maria Silva"
              disabled
            />
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold">Email</label>
            <input
              className="form-control profile-input"
              value="maria.silva@email.com"
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

      {/* ================= Modal de Crop ================= */}
      {tempImage && (
        <CropModal
          image={tempImage}
          onCancel={() => setTempImage(null)}
          onSave={(croppedImage) => {
            setAvatar(croppedImage);
            setTempImage(null);
          }}
        />
      )}
    </div>
  );
};

export default DashboardProfile;
