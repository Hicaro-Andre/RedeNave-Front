import React from "react";
import { Link } from "react-router-dom";


const ForgotPassword: React.FC = () => {
  return (
    <div className="forgot-container">
      <div className="container">
        <div className="row justify-content-center align-items-center min-vh-100">
          <div className="col-12 col-sm-10 col-md-8 col-lg-5">
            <div className="forgot-card">
              <h2 className="mb-3">Esqueceu sua senha?</h2>
              <p className="mb-4">
                Informe seu e-mail cadastrado e enviaremos um link para redefinir
                sua senha.
              </p>

              <form>
                <div className="mb-3 text-start">
                  <label htmlFor="email" className="form-label">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control forgot-input"
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn forgot-btn w-100"
                >
                  Enviar link de recuperação
                </button>
              </form>

              <div className="forgot-footer mt-4">
                <Link to="/login">← Voltar para o login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
