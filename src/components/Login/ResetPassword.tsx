import React, { useState } from "react";


const ResetPassword: React.FC = () => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      setError("Preencha todos os campos.");
      return;
    }

    if (password.length < 6) {
      setError("A senha deve ter no mínimo 6 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    setError("");
    setSuccess(true);

    // 🔐 Integração futura com API
    // onSubmit({ password })
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-12 col-sm-10 col-md-8 col-lg-5">
          <div className="new-password-card">
            <h2 className="mb-2">Nova senha</h2>
            <p className="mb-4">
              Crie uma nova senha para sua conta.
            </p>

            {success ? (
              <div className="alert alert-success text-center">
                Senha definida com sucesso!
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-3 text-start">
                  <label className="form-label">
                    Nova senha
                  </label>
                  <input
                    type="password"
                    className="form-control new-password-input"
                    placeholder="Digite sua nova senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="mb-3 text-start">
                  <label className="form-label">
                    Confirmar senha
                  </label>
                  <input
                    type="password"
                    className="form-control new-password-input"
                    placeholder="Confirme sua nova senha"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>

                {error && (
                  <div className="alert alert-danger py-2">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  className="btn new-password-btn w-100"
                >
                  Salvar senha
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
