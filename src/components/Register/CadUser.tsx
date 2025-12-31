import React, { useState, ChangeEvent, FormEvent } from "react";

import logo from "/src/assets/logoRedeNave.png"

interface FormData {
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
  dataNascimento: string;
  cidade: string;
  senha: string;
  confirmarSenha: string;
  tipoNegocio: string;
  tempoNegocio: string;
  interesses: {
    gestao: boolean;
    marketing: boolean;
    vendas: boolean;
    lideranca: boolean;
  };
  comoChegou: string;
  aceitoTermos: boolean;
}

interface FormErrors {
  nome?: string;
  cpf?: string;
  email?: string;
  telefone?: string;
  dataNascimento?: string;
  cidade?: string;
  senha?: string;
  confirmarSenha?: string;
  tipoNegocio?: string;
  aceitoTermos?: string;
  [key: string]: string | undefined;
}

interface ResumoData {
  nome: string;
  email: string;
  telefone: string;
}

interface PayloadData {
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
  dataNascimento: string;
  cidade: string;
  senha: string;
  tipoNegocio: string;
  tempoNegocio: string;
  interesses: string[];
  comoChegou: string;
}

export default function CadUser() {

  const [step, setStep] = useState<number>(1);

  const [form, setForm] = useState<FormData>({
    nome: "",
    cpf: "",
    email: "",
    telefone: "",
    dataNascimento: "",
    cidade: "",
    senha: "",
    confirmarSenha: "",
    tipoNegocio: "",
    tempoNegocio: "",
    interesses: {
      gestao: false,
      marketing: false,
      vendas: false,
      lideranca: false,
    },
    comoChegou: "",
    aceitoTermos: false,
  });

  // Erros de validação por campo
  const [errors, setErrors] = useState<FormErrors>({});

  // Resumo para passo 3
  const [resumo, setResumo] = useState<ResumoData>({
    nome: "",
    email: "",
    telefone: "",
  });

  // Helpers: máscara simples CPF
  const maskCPF = (value: string): string => {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    const part1 = digits.slice(0, 3);
    const part2 = digits.slice(3, 6);
    const part3 = digits.slice(6, 9);
    const part4 = digits.slice(9, 11);
    let out = part1;
    if (part2) out += "." + part2;
    if (part3) out += "." + part3;
    if (part4) out += "-" + part4;
    return out;
  };

  // Máscara simples para telefone (Brasil)
  const maskTelefone = (value: string): string => {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 2) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    if (digits.length <= 10)
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  };

  // Atualiza campo (tratamento para checkboxes de interesses)
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value, type } = e.target;

    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      const checked = target.checked;

      if (id === "aceitoTermos") {
        setForm((prev) => ({ ...prev, aceitoTermos: checked }));
      } else if (id === "interesse1") {
        setForm((prev) => ({ ...prev, interesses: { ...prev.interesses, gestao: checked } }));
      } else if (id === "interesse2") {
        setForm((prev) => ({ ...prev, interesses: { ...prev.interesses, marketing: checked } }));
      } else if (id === "interesse3") {
        setForm((prev) => ({ ...prev, interesses: { ...prev.interesses, vendas: checked } }));
      } else if (id === "interesse4") {
        setForm((prev) => ({ ...prev, interesses: { ...prev.interesses, lideranca: checked } }));
      }
    } else {
      if (id === "cpf") {
        setForm((prev) => ({ ...prev, cpf: maskCPF(value) }));
      } else if (id === "telefone") {
        setForm((prev) => ({ ...prev, telefone: maskTelefone(value) }));
      } else if (id in form) {
        setForm((prev) => ({ ...prev, [id]: value }));
      }
    }
  };

  // Validações por passo
  const validateStep = (s: number): boolean => {
    const newErrors: FormErrors = {};

    if (s === 1) {
      if (!form.nome.trim()) newErrors.nome = "Por favor, insira seu nome.";
      const cpfDigits = form.cpf.replace(/\D/g, "");
      if (!cpfDigits || cpfDigits.length !== 11)
        newErrors.cpf = "Por favor, insira um CPF válido (11 dígitos).";
      if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
        newErrors.email = "Por favor, insira um e-mail válido.";
      const telDigits = form.telefone.replace(/\D/g, "");
      if (!telDigits || telDigits.length < 10)
        newErrors.telefone = "Por favor, insira um telefone válido.";
      if (!form.dataNascimento) newErrors.dataNascimento = "Obrigatório.";
      if (!form.cidade.trim()) newErrors.cidade = "Por favor, insira sua cidade.";
      if (!form.senha || form.senha.length < 6)
        newErrors.senha = "Senha com mínimo 6 caracteres.";
      if (form.senha !== form.confirmarSenha)
        newErrors.confirmarSenha = "As senhas não coincidem.";
    }

    if (s === 2) {
      if (!form.tipoNegocio) newErrors.tipoNegocio = "Selecione uma opção.";
    }

    if (s === 3) {
      if (!form.aceitoTermos) newErrors.aceitoTermos = "Você precisa aceitar os termos.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Avançar passo (valida antes)
  const nextStep = (targetStep: number) => {
    if (!validateStep(step)) return;

    if (targetStep === 3) {
      setResumo({
        nome: form.nome,
        email: form.email,
        telefone: form.telefone,
      });
    }

    setStep(targetStep);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const previousStep = (targetStep: number) => {
    setStep(targetStep);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Submissão final
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateStep(3)) return;

    const payload: PayloadData = {
      nome: form.nome,
      cpf: form.cpf.replace(/\D/g, ""),
      email: form.email,
      telefone: form.telefone.replace(/\D/g, ""),
      dataNascimento: form.dataNascimento,
      cidade: form.cidade,
      senha: form.senha,
      tipoNegocio: form.tipoNegocio,
      tempoNegocio: form.tempoNegocio,
      interesses: Object.keys(form.interesses).filter((k) => form.interesses[k as keyof typeof form.interesses]),
      comoChegou: form.comoChegou,
    };

    console.log("Enviando cadastro:", payload);
    alert("Cadastro realizado com sucesso! Bem-vinda à Rede NAVE! 🎉\n\nVerifique seu e-mail para confirmar o cadastro.");
    window.location.href = "/login";
  };

  // helper para adicionar classe 'is-invalid' se erro existir
  const invalidClass = (field: string): string => (errors[field] ? "is-invalid" : "");

  // JSX do componente (MANTENDO O ESTILO ORIGINAL DO HTML)
  return (
    <div className="cadastro-container">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {/* Primeira Card - Cabeçalho */}
            <div className="cadastro-card bg-card-cad">
              <div className="text-center mb-4">
                <a className="navbar-brand fw-bold" href="./index.html">
                  <img
                    src={logo}
                    alt="Rede Nave"
                    style={{ width: "120px", height: "auto" }}
                  />
                </a>
                <h2 className="fw-bold mt-3" style={{ color: "white" }}>
                  Cadastre-se na Rede NAVE
                </h2>
                <p className="" style={{ color: "white" }}>
                  Preencha seus dados para começar sua jornada empreendedora
                </p>
              </div>
            </div>

            {/* Segunda Card - Formulário */}
            <div className="cadastro-card-two">
              {/* Step Indicator */}
              <div className="step-indicator">
                <div className={`step ${step === 1 ? "active" : ""} ${step > 1 ? "completed" : ""}`}>
                  <div className="step-circle">1</div>
                  <small>Dados Pessoais</small>
                </div>
                <div className={`step ${step === 2 ? "active" : ""} ${step > 2 ? "completed" : ""}`}>
                  <div className="step-circle">2</div>
                  <small>Seu Negócio</small>
                </div>
                <div className={`step ${step === 3 ? "active" : ""}`}>
                  <div className="step-circle">3</div>
                  <small>Confirmação</small>
                </div>
              </div>

              {/* Formulário */}
              <form id="cadastroForm" className="needs-validation" onSubmit={handleSubmit} noValidate>
                {/* Passo 1 */}
                <div className={`step-content ${step !== 1 ? "d-none" : ""}`} id="step1">
                  <h5 className="mb-4">
                    <i className="bi bi-person-circle"></i> Dados Pessoais
                  </h5>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="nome" className="form-label">Nome Completo *</label>
                      <input
                        type="text"
                        className={`form-control ${invalidClass("nome")}`}
                        id="nome"
                        placeholder="Seu nome completo"
                        value={form.nome}
                        onChange={handleChange}
                        required
                      />
                      <div className="invalid-feedback">
                        {errors.nome || "Por favor, insira seu nome."}
                      </div>
                    </div>

                    <div className="col-md-6 mb-3">
                      <label htmlFor="cpf" className="form-label">CPF *</label>
                      <input
                        type="text"
                        className={`form-control ${invalidClass("cpf")}`}
                        id="cpf"
                        placeholder="000.000.000-00"
                        value={form.cpf}
                        onChange={handleChange}
                        required
                      />
                      <div className="invalid-feedback">
                        {errors.cpf || "Por favor, insira um CPF válido."}
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="email" className="form-label">E-mail *</label>
                      <input
                        type="email"
                        className={`form-control ${invalidClass("email")}`}
                        id="email"
                        placeholder="seu@email.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                      <div className="invalid-feedback">
                        {errors.email || "Por favor, insira um e-mail válido."}
                      </div>
                    </div>

                    <div className="col-md-6 mb-3">
                      <label htmlFor="telefone" className="form-label">Telefone/WhatsApp *</label>
                      <input
                        type="tel"
                        className={`form-control ${invalidClass("telefone")}`}
                        id="telefone"
                        placeholder="(00) 00000-0000"
                        value={form.telefone}
                        onChange={handleChange}
                        required
                      />
                      <div className="invalid-feedback">
                        {errors.telefone || "Por favor, insira um telefone válido."}
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="dataNascimento" className="form-label">Data de Nascimento *</label>
                      <input
                        type="date"
                        className={`form-control ${invalidClass("dataNascimento")}`}
                        id="dataNascimento"
                        value={form.dataNascimento}
                        onChange={handleChange}
                        required
                      />
                      <div className="invalid-feedback">
                        {errors.dataNascimento || "Por favor, insira sua data de nascimento."}
                      </div>
                    </div>

                    <div className="col-md-6 mb-3">
                      <label htmlFor="cidade" className="form-label">Cidade/Estado *</label>
                      <input
                        type="text"
                        className={`form-control ${invalidClass("cidade")}`}
                        id="cidade"
                        placeholder="São Paulo/SP"
                        value={form.cidade}
                        onChange={handleChange}
                        required
                      />
                      <div className="invalid-feedback">
                        {errors.cidade || "Por favor, insira sua cidade."}
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="senha" className="form-label">Senha *</label>
                    <input
                      type="password"
                      className={`form-control ${invalidClass("senha")}`}
                      id="senha"
                      placeholder="Mínimo 6 caracteres"
                      value={form.senha}
                      onChange={handleChange}
                      minLength={6}
                      required
                    />
                    <div className="invalid-feedback">
                      {errors.senha || "A senha deve ter no mínimo 6 caracteres."}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="confirmarSenha" className="form-label">Confirmar Senha *</label>
                    <input
                      type="password"
                      className={`form-control ${invalidClass("confirmarSenha")}`}
                      id="confirmarSenha"
                      placeholder="Digite a senha novamente"
                      value={form.confirmarSenha}
                      onChange={handleChange}
                      required
                    />
                    <div className="invalid-feedback">
                      {errors.confirmarSenha || "As senhas não coincidem."}
                    </div>
                  </div>

                  <button type="button" className="btn btn-primary w-100" onClick={() => nextStep(2)}>
                    Próximo <i className="bi bi-arrow-right"></i>
                  </button>
                </div>

                {/* Passo 2 */}
                <div className={`step-content ${step !== 2 ? "d-none" : ""}`} id="step2">
                  <h5 className="mb-4">
                    <i className="bi bi-briefcase"></i> Conte-nos sobre seu Negócio
                  </h5>

                  <div className="mb-3">
                    <label htmlFor="tipoNegocio" className="form-label">Qual seu tipo de negócio? *</label>
                    <select
                      className={`form-select ${invalidClass("tipoNegocio")}`}
                      id="tipoNegocio"
                      value={form.tipoNegocio}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Selecione...</option>
                      <option value="artesanato">Artesanato</option>
                      <option value="alimentacao">Alimentação/Gastronomia</option>
                      <option value="moda">Moda/Confecção</option>
                      <option value="beleza">Beleza/Estética</option>
                      <option value="servicos">Prestação de Serviços</option>
                      <option value="comercio">Comércio</option>
                      <option value="ainda-nao">Ainda não tenho um negócio</option>
                      <option value="outro">Outro</option>
                    </select>
                    <div className="invalid-feedback">
                      {errors.tipoNegocio || "Por favor, selecione uma opção."}
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="tempoNegocio" className="form-label">Há quanto tempo empreende?</label>
                    <select
                      className="form-select"
                      id="tempoNegocio"
                      value={form.tempoNegocio}
                      onChange={handleChange}
                    >
                      <option value="">Selecione...</option>
                      <option value="nao-empreende">Ainda não empreendo</option>
                      <option value="menos-1">Menos de 1 ano</option>
                      <option value="1-3">1 a 3 anos</option>
                      <option value="3-5">3 a 5 anos</option>
                      <option value="mais-5">Mais de 5 anos</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Que tipo de formação você busca? *</label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="interesse1"
                        value="gestao"
                        checked={form.interesses.gestao}
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="interesse1">Gestão Financeira</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="interesse2"
                        value="marketing"
                        checked={form.interesses.marketing}
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="interesse2">Marketing Digital</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="interesse3"
                        value="vendas"
                        checked={form.interesses.vendas}
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="interesse3">Vendas</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="interesse4"
                        value="lideranca"
                        checked={form.interesses.lideranca}
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="interesse4">Liderança</label>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="comoChegou" className="form-label">Como conheceu a Rede NAVE?</label>
                    <select
                      className="form-select"
                      id="comoChegou"
                      value={form.comoChegou}
                      onChange={handleChange}
                    >
                      <option value="">Selecione...</option>
                      <option value="redes-sociais">Redes Sociais</option>
                      <option value="indicacao">Indicação de amiga</option>
                      <option value="google">Pesquisa no Google</option>
                      <option value="evento">Evento presencial</option>
                      <option value="whatsapp">WhatsApp</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>

                  <div className="d-flex gap-2">
                    <button type="button" className="btn btn-outline-secondary w-50" onClick={() => previousStep(1)}>
                      <i className="bi bi-arrow-left"></i> Voltar
                    </button>
                    <button type="button" className="btn btn-primary w-50" onClick={() => nextStep(3)}>
                      Próximo <i className="bi bi-arrow-right"></i>
                    </button>
                  </div>
                </div>

                {/* Passo 3 */}
                <div className={`step-content ${step !== 3 ? "d-none" : ""}`} id="step3">
                  <h5 className="mb-4">
                    <i className="bi bi-check-circle"></i> Confirme seus Dados
                  </h5>

                  <div className="alert info-alert">
                    <i className="bi bi-info-circle"></i>
                    Revise suas informações antes de finalizar o cadastro.
                  </div>

                  <div className="card mb-3">
                    <div className="card-body">
                      <h6 className="card-title fw-bold">Dados Pessoais</h6>
                      <p className="mb-1">
                        <strong>Nome:</strong> <span id="resumoNome">{resumo.nome}</span>
                      </p>
                      <p className="mb-1">
                        <strong>E-mail:</strong> <span id="resumoEmail">{resumo.email}</span>
                      </p>
                      <p className="mb-0">
                        <strong>Telefone:</strong>
                        <span id="resumoTelefone">{resumo.telefone}</span>
                      </p>
                    </div>
                  </div>

                  <div className="form-check mb-4">
                    <input
                      className={`form-check-input ${invalidClass("aceitoTermos")}`}
                      type="checkbox"
                      id="aceitoTermos"
                      checked={form.aceitoTermos}
                      onChange={handleChange}
                      required
                    />
                    <label className="form-check-label" htmlFor="aceitoTermos">
                      Concordo com os
                      <a href="#" target="_blank">Termos de Uso</a> e
                      <a href="#" target="_blank">Política de Privacidade</a> *
                    </label>
                    <div className="invalid-feedback">
                      {errors.aceitoTermos || "Você precisa aceitar os termos."}
                    </div>
                  </div>

                  <div className="d-flex gap-2">
                    <button
                      type="button"
                      className="btn btn-outline-secondary w-50"
                      onClick={() => previousStep(2)}
                    >
                      <i className="bi bi-arrow-left"></i> Voltar
                    </button>
                    <button type="submit" className="btn btn-success w-50">
                      <i className="bi bi-check-lg"></i> Finalizar Cadastro
                    </button>
                  </div>
                </div>
              </form>

              <div className="text-center mt-4">
                <span className="text-muted">Já tem uma conta? </span>
                <a href="/login" className="text-decoration-none fw-bold bg-text">
                  Faça login
                </a>
              </div>
            </div>

            {/* Botão Voltar */}
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