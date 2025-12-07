import React, { useState, useEffect } from "react";

import cursogestao from "/src/assets/trilhas/cursogestao.png";
import cursomarketing from "/src/assets/trilhas/cursomarketing.jpeg";
import cursolideranca from "/src/assets/trilhas/cursolideranca.jpeg";

// Tipos
interface Trilha {
  id: number;
  titulo: string;
  descricao: string;
  icone: string;
  cor: string;
  duracao: string;
  modulos: number;
  nivel: string;
  alunos: number;
  area: string;
  imagem: string;
  conteudo: string[];
}

// Dados completos das trilhas (do script)
const todasTrilhas: Trilha[] = [
  {
    id: 1,
    titulo: "Gestão Financeira para Empreendedoras",
    descricao: "Aprenda a gerenciar as finanças do seu negócio de forma eficiente.",
    icone: "bi-cash-coin",
    cor: "success",
    duracao: "8 semanas",
    modulos: 12,
    nivel: "Iniciante",
    alunos: 156,
    area: "Gestão",
    imagem: cursogestao,
    conteudo: [
      "Fundamentos de gestão financeira",
      "Fluxo de caixa",
      "Precificação",
      "Controle de despesas",
      "Investimentos",
    ],
  },
  {
    id: 2,
    titulo: "Marketing Digital e Redes Sociais",
    descricao: "Domine as estratégias de marketing digital para impulsionar suas vendas.",
    icone: "bi-megaphone",
    cor: "primary",
    duracao: "6 semanas",
    modulos: 10,
    nivel: "Intermediário",
    alunos: 203,
    area: "Marketing",
    imagem: cursomarketing,
    conteudo: [
      "Introdução ao marketing digital",
      "Instagram para negócios",
      "Facebook e WhatsApp Business",
      "Criação de conteúdo",
      "Anúncios online",
    ],
  },
  {
    id: 3,
    titulo: "Liderança e Desenvolvimento Pessoal",
    descricao: "Desenvolva habilidades de liderança e fortaleça sua mentalidade empreendedora.",
    icone: "bi-trophy",
    cor: "warning",
    duracao: "5 semanas",
    modulos: 8,
    nivel: "Avançado",
    alunos: 98,
    area: "Liderança",
    imagem: cursolideranca,
    conteudo: [
      "Autoconhecimento",
      "Liderança feminina",
      "Gestão de equipe",
      "Comunicação eficaz",
      "Tomada de decisão",
    ],
  },
  {
    id: 4,
    titulo: "Técnicas de Vendas e Atendimento",
    descricao: "Aprimore suas habilidades de vendas e ofereça um atendimento excepcional.",
    icone: "bi-cart-check",
    cor: "info",
    duracao: "4 semanas",
    modulos: 8,
    nivel: "Iniciante",
    alunos: 142,
    area: "Vendas",
    imagem: cursomarketing,
    conteudo: [
      "Fundamentos de vendas",
      "Perfil do cliente",
      "Técnicas de fechamento",
      "Pós-venda",
      "Fidelização",
    ],
  },
  {
    id: 5,
    titulo: "Planejamento Estratégico de Negócios",
    descricao: "Crie um plano de negócios sólido e estabeleça metas alcançáveis.",
    icone: "bi-clipboard-check",
    cor: "danger",
    duracao: "6 semanas",
    modulos: 10,
    nivel: "Intermediário",
    alunos: 87,
    area: "Gestão",
    imagem: cursogestao,
    conteudo: [
      "Análise de mercado",
      "Definição de objetivos",
      "Estratégias de crescimento",
      "Plano de ação",
      "Monitoramento de resultados",
    ],
  },
  {
    id: 6,
    titulo: "E-commerce: Vendendo Online",
    descricao: "Aprenda a vender seus produtos pela internet de forma profissional.",
    icone: "bi-shop",
    cor: "secondary",
    duracao: "7 semanas",
    modulos: 12,
    nivel: "Intermediário",
    alunos: 165,
    area: "Marketing",
    imagem: cursogestao,
    conteudo: [
      "Plataformas de venda",
      "Fotografia de produtos",
      "Descrições persuasivas",
      "Logística e entrega",
      "Atendimento online",
    ],
  },
];

const ListaTrilhas = () => {
  const [trilhasFiltradas, setTrilhasFiltradas] = useState<Trilha[]>(todasTrilhas);
  const [busca, setBusca] = useState("");
  const [nivel, setNivel] = useState("");
  const [area, setArea] = useState("");

  // Aplicar filtros (do script)
  const aplicarFiltros = () => {
    let resultado = todasTrilhas;

    // Filtro de busca
    if (busca) {
      resultado = resultado.filter(
        (t) =>
          t.titulo.toLowerCase().includes(busca.toLowerCase()) ||
          t.descricao.toLowerCase().includes(busca.toLowerCase())
      );
    }

    // Filtro de nível
    if (nivel) {
      resultado = resultado.filter((t) => t.nivel === nivel);
    }

    // Filtro de área
    if (area) {
      resultado = resultado.filter((t) => t.area === area);
    }

    setTrilhasFiltradas(resultado);
  };

  // Aplica filtros quando busca, nivel ou area mudam
  useEffect(() => {
    aplicarFiltros();
  }, [busca, nivel, area]);

  // Inscrever em trilha (do script)
  const inscreverTrilha = (id: number) => {
    const trilha = todasTrilhas.find((t) => t.id === id);
    if (!trilha) return;

    if (window.NAVE_ADVANCED && window.NAVE_ADVANCED.toast) {
      window.NAVE_ADVANCED.toast.show(
        `Inscrição solicitada para: ${trilha.titulo}`,
        "success"
      );
    } else {
      alert(
        `Inscrição na trilha: ${trilha.titulo}\n\nPara se inscrever, você precisa fazer login ou criar uma conta.`
      );
    }
  };

  // Resetar filtros
  const resetarFiltros = () => {
    setBusca("");
    setNivel("");
    setArea("");
  };

  // Handler para erro de imagem
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = "https://via.placeholder.com/400x200/667eea/ffffff?text=Rede+NAVE";
  };

  return (
    <section className="py-5">
      <div className="container">

        {/* Filtros */}
        <div className="row mb-4">
          <div className="col-md-4 mb-3">
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-search"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Buscar trilhas..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <select
              className="form-select"
              value={nivel}
              onChange={(e) => setNivel(e.target.value)}
            >
              <option value="">Todos os níveis</option>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </div>
          <div className="col-md-4 mb-3">
            <select
              className="form-select"
              value={area}
              onChange={(e) => setArea(e.target.value)}
            >
              <option value="">Todas as áreas</option>
              <option value="Gestão">Gestão</option>
              <option value="Marketing">Marketing</option>
              <option value="Liderança">Liderança</option>
              <option value="Vendas">Vendas</option>
            </select>
          </div>
        </div>

        {/* Lista de Trilhas */}
        <div className="row g-4" id="listaTrilhas">
          {trilhasFiltradas.length === 0 ? (
            <div className="col-12 text-center py-5">
              <i className="bi bi-search text-muted" style={{ fontSize: "5rem" }}></i>
              <h4 className="mt-3 text-muted">Nenhuma trilha encontrada</h4>
              <p className="text-muted">Tente ajustar os filtros de busca</p>
              <button className="btn btn-primary mt-3" onClick={resetarFiltros}>
                <i className="bi bi-arrow-counterclockwise"></i> Limpar filtros
              </button>
            </div>
          ) : (
            trilhasFiltradas.map((trilha) => (
              <div key={trilha.id} className="col-md-6 col-lg-4">
                <div className="card trilha-card h-100">
                  <span
                    className={`badge bg-${trilha.cor} position-absolute`}
                    style={{ top: "15px", right: "15px", zIndex: "1" }}
                  >
                    {trilha.nivel}
                  </span>
                  <img
                    src={trilha.imagem}
                    className="card-img-top"
                    alt={trilha.titulo}
                    onError={handleImageError}
                  />
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <i className={`bi ${trilha.icone} text-${trilha.cor} fs-3 me-2`}></i>
                      <h5 className="card-title mb-0">{trilha.titulo}</h5>
                    </div>
                    <p className="card-text text-muted">{trilha.descricao}</p>

                    <div className="mb-3">
                      <small className="text-muted d-block mb-1">
                        <strong>Conteúdo:</strong>
                      </small>
                      <ul className="small text-muted mb-0">
                        {trilha.conteudo.slice(0, 3).map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="d-flex justify-content-between text-muted small mb-3">
                      <span>
                        <i className="bi bi-clock"></i> {trilha.duracao}
                      </span>
                      <span>
                        <i className="bi bi-book"></i> {trilha.modulos} módulos
                      </span>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                      <span className="text-muted small">
                        <i className="bi bi-people-fill"></i> {trilha.alunos} alunas
                      </span>
                      <button
                        className="btn btn-sm btn-primary"
                        onClick={() => inscreverTrilha(trilha.id)}
                      >
                        Inscrever-se <i className="bi bi-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default ListaTrilhas;