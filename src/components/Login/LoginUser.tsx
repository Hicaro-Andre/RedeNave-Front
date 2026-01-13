import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "/src/assets/logoRedeNave.png";

type StoryblokAsset = {
  filename: string;
  alt?: string;
};

type LoginUserProps = {
  blok: {
    logo?: StoryblokAsset | null;
    title: string;
    description: string;
    topics01: string;
    topics02: string;
    topics03: string;
    card_title: string;
    card_description: string;
    card_login_google: string;
    card_login_face: string;
    or: string;
    form_email: string;
    placeholder_email: string;
    form_senha: string;
    placeholder_senha: string;
    remind_me: string;
    forgot_your_password: string;
    button_card: string;
    not_count: string;
    cad: string;
    button_section_home: string;
  };
};

export default function LoginUser({ blok }: LoginUserProps) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const image =
    typeof blok.logo === "object" && blok.logo?.filename ? blok.logo : null;

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
                    {image && (
                      <img
                        src={`${image.filename}`}
                        alt={image.alt || "Rede Nave"}
                        style={{ width: "100px" }}
                      />
                    )}
                    <h3 className="mt-4 fw-bold">{blok.title}</h3>
                    <p className="mt-3 px-4 text-white">{blok.description}</p>
                    <div className="mt-5">
                      <div className="d-flex align-items-center justify-content-center mb-3">
                        <i className="bi bi-check-circle-fill me-2"></i>
                        <span>{blok.topics01}</span>
                      </div>
                      <div className="d-flex align-items-center justify-content-center mb-3">
                        <i className="bi bi-check-circle-fill me-2"></i>
                        <span>{blok.topics02}</span>
                      </div>
                      <div className="d-flex align-items-center justify-content-center">
                        <i className="bi bi-check-circle-fill me-2"></i>
                        <span>{blok.topics03}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Formulário */}
                <div className="col-md-7">
                  <div className="login-form">
                    <div className="text-center mb-4">
                      <h2 className="fw-bold">{blok.card_title}</h2>
                      <p className="text-muted">{blok.card_description}</p>
                    </div>

                    {/* Botões sociais */}
                    <div className="mb-4">
                      <button className="social-login-btn">
                        <i
                          className="bi bi-google me-2"
                          style={{ color: "#6a0dad" }}
                        ></i>
                        {blok.card_login_google}
                      </button>

                      <button className="social-login-btn">
                        <i
                          className="bi bi-facebook me-2"
                          style={{ color: "#6a0dad" }}
                        ></i>
                        {blok.card_login_face}
                      </button>
                    </div>

                    <div className="text-center mb-4">
                      <span className="text-muted">{blok.or}</span>
                    </div>

                    <form onSubmit={handleSubmit}>
                      {/* Email */}
                      <div className="mb-3">
                        <label className="form-label">
                          <i className="bi bi-envelope"></i> {blok.form_email}
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder={blok.placeholder_email}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>

                      {/* Senha */}
                      <div className="mb-3">
                        <label className="form-label">
                          <i className="bi bi-lock"></i> {blok.form_senha}
                        </label>

                        <div className="input-group">
                          <input
                            type={showPassword ? "text" : "password"}
                            className="form-control"
                            placeholder={blok.placeholder_senha}
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                          />
                          <button
                            type="button"
                            className="btn btn-outline-secondary"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            <i
                              className={
                                showPassword ? "bi bi-eye-slash" : "bi bi-eye"
                              }
                            ></i>
                          </button>
                        </div>
                      </div>

                      {/* Lembrar / Esqueceu senha */}
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="lembrar"
                          />
                          <label className="form-check-label" htmlFor="lembrar">
                            {blok.remind_me}
                          </label>
                        </div>
                        <Link to="/forgot" className="text-decoration-none bg-text">
                          {blok.forgot_your_password}
                        </Link>
                      </div>

                      {/* Botão Entrar */}
                      <button
                        type="submit"
                        className="btn btn-primary w-100 mb-3"
                      >
                        <i className="bi bi-box-arrow-in-right"></i>{" "}
                        {blok.button_card}
                      </button>

                      <div className="text-center">
                        <span className="text-muted">{blok.not_count} </span>
                        <Link
                          to="/cadastro"
                          className="text-decoration-none fw-bold bg-text"
                        >
                          {blok.cad}
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
                <i className="bi bi-arrow-left"></i> {blok.button_section_home}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
