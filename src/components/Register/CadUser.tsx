import React, { useState, ChangeEvent, FormEvent } from "react";
import logo from "/src/assets/logoRedeNave.png";

type StoryblokAsset = {
  filename: string;
  alt?: string;
};

type CadUserProps = {
  blok: {
    logo?: StoryblokAsset | null;
    title: string;
    description: string;
    title_form: string;
    card_name: string;
    placeholder_name: string;
    card_email: string;
    placeholder_email: string;
    card_phone: string;
    placeholder_phone: string;
    card_data: string;
    card_senha: string;
    placeholder_senha: string;
    card_confirm_senha: string;
    placeholder_confirm_senha: string;
    form_text: string;
    button_card: string;
    account: string;
    login: string;
    button_section_card: string;
  };
};

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  dataNascimento: string;
  senha: string;
  confirmarSenha: string;
  comoChegou: string;
}

interface FormErrors {
  [key: string]: string | undefined;
}

export default function CadUser({ blok }: CadUserProps) {

  const image =
    typeof blok.logo === "object" && blok.logo?.filename
      ? blok.logo
      : null;

  const [form, setForm] = useState<FormData>({
    nome: "",
    email: "",
    telefone: "",
    dataNascimento: "",
    senha: "",
    confirmarSenha: "",
    comoChegou: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  // Máscara simples para telefone
  const maskTelefone = (value: string): string => {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 2) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    if (id === "telefone") {
      setForm((prev) => ({ ...prev, telefone: maskTelefone(value) }));
    } else {
      setForm((prev) => ({ ...prev, [id]: value }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.nome.trim()) newErrors.nome = "Por favor, insira seu nome.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Por favor, insira um e-mail válido.";
    const telDigits = form.telefone.replace(/\D/g, "");
    if (!telDigits || telDigits.length < 10) newErrors.telefone = "Telefone inválido.";
    if (!form.dataNascimento) newErrors.dataNascimento = "Data de nascimento obrigatória.";
    if (!form.senha || form.senha.length < 6) newErrors.senha = "Senha com mínimo 6 caracteres.";
    if (form.senha !== form.confirmarSenha) newErrors.confirmarSenha = "As senhas não coincidem.";
    if (!form.comoChegou) newErrors.comoChegou = "Selecione uma opção.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    console.log("Enviando cadastro:", form);
    alert("Cadastro realizado com sucesso! 🎉");
    window.location.href = "/login";
  };

  const invalidClass = (field: string) => (errors[field] ? "is-invalid" : "");

  return (
    <div className="cadastro-container">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {/* Card Cabeçalho */}
            <div className="cadastro-card bg-card-cad">
              <div className="text-center mb-4">
                <a className="navbar-brand fw-bold" href="/">
                  {image && (
                    <img src={`${image.filename}`} alt={image.alt || "Rede Nave"} style={{ width: "120px", height: "auto" }} />
                  )}
                </a>
                <h2 className="fw-bold mt-3" style={{ color: "white" }}>
                  {blok.title}
                </h2>
                <p style={{ color: "white" }}>
                  {blok.description}
                </p>
              </div>
            </div>

            {/* Card Formulário */}
            <div className="cadastro-card-two">
              <form id="cadastroForm" className="needs-validation" onSubmit={handleSubmit} noValidate>
                <h5 className="mb-4">
                  <i className="bi bi-person-circle"></i> {blok.title_form}
                </h5>

                {/* Linha 1: Nome | E-mail */}
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="nome" className="form-label">{blok.card_name}</label>
                    <input
                      type="text"
                      className={`form-control ${invalidClass("nome")}`}
                      id="nome"
                      placeholder={blok.placeholder_name}
                      value={form.nome}
                      onChange={handleChange}
                      required
                    />
                    <div className="invalid-feedback">{errors.nome}</div>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label">{blok.card_email}</label>
                    <input
                      type="email"
                      className={`form-control ${invalidClass("email")}`}
                      id="email"
                      placeholder={blok.placeholder_email}
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                    <div className="invalid-feedback">{errors.email}</div>
                  </div>
                </div>

                {/* Linha 2: Telefone | Data Nascimento */}
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="telefone" className="form-label">{blok.card_phone}</label>
                    <input
                      type="tel"
                      className={`form-control ${invalidClass("telefone")}`}
                      id="telefone"
                      placeholder={blok.placeholder_phone}
                      value={form.telefone}
                      onChange={handleChange}
                      required
                    />
                    <div className="invalid-feedback">{errors.telefone}</div>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="dataNascimento" className="form-label">{blok.card_data}</label>
                    <input
                      type="date"
                      className={`form-control ${invalidClass("dataNascimento")}`}
                      id="dataNascimento"
                      value={form.dataNascimento}
                      onChange={handleChange}
                      required
                    />
                    <div className="invalid-feedback">{errors.dataNascimento}</div>
                  </div>
                </div>

                {/* Linha 3: Senha | Confirmação */}
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="senha" className="form-label">{blok.card_senha}</label>
                    <input
                      type="password"
                      className={`form-control ${invalidClass("senha")}`}
                      id="senha"
                      placeholder={blok.placeholder_senha}
                      value={form.senha}
                      onChange={handleChange}
                      minLength={6}
                      required
                    />
                    <div className="invalid-feedback">{errors.senha}</div>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="confirmarSenha" className="form-label">{blok.card_confirm_senha}</label>
                    <input
                      type="password"
                      className={`form-control ${invalidClass("confirmarSenha")}`}
                      id="confirmarSenha"
                      placeholder={blok.placeholder_confirm_senha}
                      value={form.confirmarSenha}
                      onChange={handleChange}
                      required
                    />
                    <div className="invalid-feedback">{errors.confirmarSenha}</div>
                  </div>
                </div>

                {/* Linha 4: Como conheceu */}
                <div className="mb-4">
                  <label htmlFor="comoChegou" className="form-label">{blok.form_text}</label>
                  <select
                    className={`form-select ${invalidClass("comoChegou")}`}
                    id="comoChegou"
                    value={form.comoChegou}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecione...</option>
                    <option value="redes-sociais">Redes Sociais</option>
                    <option value="indicacao">Indicação de amiga</option>
                    <option value="google">Pesquisa no Google</option>
                    <option value="evento">Evento presencial</option>
                    <option value="whatsapp">WhatsApp</option>
                    <option value="outro">Outro</option>
                  </select>
                  <div className="invalid-feedback">{errors.comoChegou}</div>
                </div>

                <button type="submit" className="btn btn-success w-100">
                  <i className="bi bi-check-lg"></i> {blok.button_card}
                </button>
              </form>

              <div className="text-center mt-4">
                <span className="text-muted">{blok.account} </span>
                <a href="/login" className="text-decoration-none fw-bold bg-text">{blok.login}</a>
              </div>
            </div>

            <div className="text-center mt-4">
              <a href="/" className="btn">
                <i className="bi bi-arrow-left"></i> {blok.button_section_card}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
