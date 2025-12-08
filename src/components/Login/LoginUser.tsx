import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "/src/assets/logoRedeNave.png"

export default function LoginUser() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !senha.trim()) {
      alert("Preencha todos os campos.");
      return;
    }

    // Aqui você chamaria a API / backend
    console.log("Email:", email);
    console.log("Senha:", senha);

    alert("Login realizado com sucesso!");
  };

  return (
    <div className="login-container">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="login-card">
              <div className="row g-0">

                {/* Lado esquerdo */}
                <div className="col-md-5 login-image text-white d-none d-md-flex flex-column">
                  <div className="text-center">
                    <img
                      src={logo}
                      alt="Rede Nave"
                      style={{ width: "100px" }}
                    />
                    <h3 className="mt-4 fw-bold">Bem-vinda de volta!</h3>
                    <p className="mt-3 px-4 text-white">
                      Continue sua jornada empreendedora e alcance seus objetivos.
                    </p>
                    <div className="mt-5">
                      <div className="d-flex align-items-center justify-content-center mb-3">
                        <i className="bi bi-check-circle-fill me-2" ></i>
                        <span>Acesso ilimitado aos cursos</span>
                      </div>
                      <div className="d-flex align-items-center justify-content-center mb-3">
                        <i className="bi bi-check-circle-fill me-2"></i>
                        <span>Certificados gratuitos</span>
                      </div>
                      <div className="d-flex align-items-center justify-content-center">
                        <i className="bi bi-check-circle-fill me-2"></i>
                        <span>Suporte personalizado</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Formulário */}
                <div className="col-md-7">
                  <div className="login-form">
                    <div className="text-center mb-4">
                      <h2 className="fw-bold">Entrar na Plataforma</h2>
                      <p className="text-muted">Acesse sua conta para continuar</p>
                    </div>

                    {/* Botões sociais */}
                    <div className="mb-4">
                      <button className="social-login-btn">
                        <i className="bi bi-google me-2" style={{ color: "#6a0dad" }}></i>
                        Continuar com Google
                      </button>

                      <button className="social-login-btn">
                        <i className="bi bi-facebook me-2" style={{ color: "#6a0dad" }}></i>
                        Continuar com Facebook
                      </button>
                    </div>

                    <div className="text-center mb-4">
                      <span className="text-muted">ou entre com seu email</span>
                    </div>

                    <form onSubmit={handleSubmit}>

                      {/* Email */}
                      <div className="mb-3">
                        <label className="form-label">
                          <i className="bi bi-envelope"></i> E-mail
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="seu@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>

                      {/* Senha */}
                      <div className="mb-3">
                        <label className="form-label">
                          <i className="bi bi-lock"></i> Senha
                        </label>

                        <div className="input-group">
                          <input
                            type={showPassword ? "text" : "password"}
                            className="form-control"
                            placeholder="Digite sua senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                          />
                          <button
                            type="button"
                            className="btn btn-outline-secondary"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            <i className={showPassword ? "bi bi-eye-slash" : "bi bi-eye"}></i>
                          </button>
                        </div>
                      </div>

                      {/* Lembrar / Esqueceu senha */}
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="lembrar" />
                          <label className="form-check-label" htmlFor="lembrar">Lembrar-me</label>
                        </div>
                        <a href="#" className="text-decoration-none bg-text">Esqueceu a senha?</a>
                      </div>

                      {/* Botão Entrar */}
                      <button type="submit" className="btn btn-primary w-100 mb-3">
                        <i className="bi bi-box-arrow-in-right"></i> Entrar
                      </button>

                      <div className="text-center">
                        <span className="text-muted">Não tem uma conta? </span>
                        <Link to="/cadastro" className="text-decoration-none fw-bold bg-text">
                          Cadastre-se
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>

              </div>
            </div>

            {/* Voltar */}
            <div className="text-center mt-4">
              <a href="/" className="btn">
                <i className="bi bi-arrow-left"></i> Voltar para Home
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
