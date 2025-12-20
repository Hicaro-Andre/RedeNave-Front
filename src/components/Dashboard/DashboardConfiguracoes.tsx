const DashboardConfiguracoes = () => {
  return (
    <div className="dashboard-section">
      <h2 className="fw-bold mb-4">Configurações ⚙️</h2>

      <div className="card p-4">
        <div className="form-check form-switch mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="notif"
            defaultChecked
          />
          <label className="form-check-label" htmlFor="notif">
            Receber notificações por e-mail
          </label>
        </div>

        <div className="form-check form-switch mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="darkmode"
          />
          <label className="form-check-label" htmlFor="darkmode">
            Modo escuro
          </label>
        </div>

        <button className="btn btn-primary mt-3">
          Salvar alterações
        </button>
      </div>
    </div>
  );
};

export default DashboardConfiguracoes;
