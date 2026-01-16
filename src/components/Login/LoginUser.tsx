import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  loginWithEmail,
  loginWithGoogle,
  loginWithFacebook,
} from "../../services/authService";

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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const image =
    typeof blok.logo === "object" && blok.logo?.filename
      ? blok.logo
      : null;

  /** LOGIN EMAIL/SENHA */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!email.trim() || !senha.trim()) {
      setError("Preencha todos os campos.");
      return;
    }

    try {
      setLoading(true);
      await loginWithEmail(email, senha);
      navigate("/dashboard");
    } catch (err: any) {
      console.error(err);
      if (err.code === "auth/user-not-found") {
        setError("Usuário não encontrado.");
      } else if (err.code === "auth/wrong-password") {
        setError("Senha incorreta.");
      } else if (err.code === "auth/invalid-email") {
        setError("E-mail inválido.");
      } else {
        setError("Erro ao fazer login. Tente novamente.");
      }
    } finally {
      setLoading(false);
    }
  };

  /** LOGIN GOOGLE */
  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      setError(null);
      await loginWithGoogle();
      // redirecionamento será feito pelo hook do App
    } catch (err) {
      console.error(err);
      setError("Erro ao iniciar login com Google.");
      setLoading(false);
    }
  };

  /** LOGIN FACEBOOK */
  const handleFacebookLogin = async () => {
    try {
      setLoading(true);
      setError(null);
      await loginWithFacebook();
      // redirecionamento será feito pelo hook do App
    } catch (err) {
      console.error(err);
      setError("Erro ao iniciar login com Facebook.");
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="login-card">
              <div className="row g-0">
                {/* LADO ESQUERDO */}
                <div className="col-md-5 login-image text-white d-none d-md-flex flex-column">
                  <div className="text-center">
                    {image && (
                      <img
                        src={image.filename}
                        alt={image.alt || "Logo"}
                        style={{ width: "100px" }}
                      />
                    )}
                    <h3 className="mt-4 fw-bold">{blok.title}</h3>
                    <p className="mt-3 px-4 text-white">{blok.description}</p>
                  </div>
                </div>

                {/* FORMULÁRIO */}
                <div className="col-md-7">
                  <div className="login-form">
                    <h2 className="fw-bold">{blok.card_title}</h2>
                    <p className="text-muted">{blok.card_description}</p>

                    {error && <div className="alert alert-danger">{error}</div>}

                    <div className="mb-4">
                      <button
                        type="button"
                        className="social-login-btn"
                        onClick={handleGoogleLogin}
                        disabled={loading}
                      >
                        <i className="bi bi-google me-2"></i>
                        {blok.card_login_google}
                      </button>

                      <button
                        type="button"
                        className="social-login-btn"
                        onClick={handleFacebookLogin}
                        disabled={loading}
                      >
                        <i className="bi bi-facebook me-2"></i>
                        {blok.card_login_face}
                      </button>
                    </div>

                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label className="form-label">{blok.form_email}</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder={blok.placeholder_email}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          disabled={loading}
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">{blok.form_senha}</label>
                        <div className="input-group">
                          <input
                            type={showPassword ? "text" : "password"}
                            className="form-control"
                            placeholder={blok.placeholder_senha}
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            disabled={loading}
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

                      <button
                        type="submit"
                        className="btn btn-primary w-100 mb-3"
                        disabled={loading}
                      >
                        {loading ? "Entrando..." : blok.button_card}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-4">
              <Link to="/" className="btn">
                {blok.button_section_home}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
