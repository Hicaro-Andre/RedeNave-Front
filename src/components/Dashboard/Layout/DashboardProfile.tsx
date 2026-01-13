const DashboardProfile = () => {
  return (
    <div className="dashboard-section">
      <h2 className="fw-bold mb-4">Meu Perfil 👤</h2>

      <div className="card p-4">
        <div className="mb-3">
          <label className="form-label fw-bold">Nome</label>
          <input
            type="text"
            className="form-control"
            value="Maria Silva"
            disabled
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Email</label>
          <input
            type="email"
            className="form-control"
            value="maria.silva@email.com"
            disabled
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Nível</label>
          <input
            type="text"
            className="form-control"
            value="Nível 3"
            disabled
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Membro desde</label>
          <input
            type="text"
            className="form-control"
            value="Janeiro 2025"
            disabled
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardProfile;
