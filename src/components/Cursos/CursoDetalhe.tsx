import { useParams, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";

import LoadingSpinner from "../LoadingSpinner";

import cursogestao from "/src/assets/trilhas/cursogestao.png";
import cursomarketing from "/src/assets/trilhas/cursomarketing.jpeg";
import cursolideranca from "/src/assets/trilhas/cursolideranca.jpeg";

const trilhas = [
  {
    id: 1,
    titulo: "Gestão Financeira para Empreendedoras",
    descricao: "Aprenda a gerenciar as finanças do seu negócio com segurança.",
    nivel: "Iniciante",
    duracao: "8 semanas",
    modulos: 12,
    alunos: 156,
    imagem: cursogestao,
    oQueVaiAprender: [
      "Controle de fluxo de caixa",
      "Precificação correta",
      "Organização financeira",
      "Planejamento de crescimento"
    ],
    conteudo: [
      "Fundamentos da gestão financeira",
      "Custos fixos e variáveis",
      "Fluxo de caixa",
      "Lucro e reinvestimento"
    ]
  },
  {
    id: 2,
    titulo: "Marketing Digital e Redes Sociais",
    descricao: "Domine estratégias para vender todos os dias usando as redes sociais.",
    nivel: "Intermediário",
    duracao: "6 semanas",
    modulos: 10,
    alunos: 203,
    imagem: cursomarketing,
    oQueVaiAprender: [
      "Marketing digital na prática",
      "Instagram para negócios",
      "Conteúdo que vende",
      "Funil de vendas"
    ],
    conteudo: [
      "Fundamentos do marketing digital",
      "Posicionamento e branding",
      "Conteúdo estratégico",
      "Métricas e análise"
    ]
  },
  {
    id: 3,
    titulo: "Liderança e Desenvolvimento Pessoal",
    descricao: "Desenvolva mentalidade, liderança e autoconfiança.",
    nivel: "Avançado",
    duracao: "5 semanas",
    modulos: 8,
    alunos: 98,
    imagem: cursolideranca,
    oQueVaiAprender: [
      "Liderança feminina",
      "Autoconhecimento",
      "Comunicação assertiva",
      "Gestão emocional"
    ],
    conteudo: [
      "Mindset de liderança",
      "Comunicação eficaz",
      "Inteligência emocional",
      "Tomada de decisão"
    ]
  }
];

export default function CursoDetalhe() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  const trilha = trilhas.find(t => t.id === Number(id));

  useEffect(() => {
    // Simula carregamento de API
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // Spinner primeiro
  if (loading) {
    return <LoadingSpinner />;
  }

  // Not Found depois do loading
  if (!trilha) {
    return (
      <Container className="py-5 text-center">
        <h3>Trilha não encontrada</h3>
        <Link to="/" className="btn btn-primary mt-3">
          Voltar
        </Link>
      </Container>
    );
  }

  return (
    <>
      {/* HERO */}
      <section
        className="py-5 text-white"
        style={{
          background: "linear-gradient(135deg, #111827, #1f2937)",
        }}
      >
        <Container>
          <Row className="align-items-center gy-5">
            {/* TEXTO */}
            <Col lg={6}>
              <span className="badge bg-warning text-dark mb-3 px-3 py-2">
                {trilha.nivel}
              </span>

              <h1 className="fw-bold display-5 mb-3">
                {trilha.titulo}
              </h1>

              <p className="lead text-light opacity-75 mb-4">
                {trilha.descricao}
              </p>

              <div className="d-flex flex-wrap gap-4 small text-light opacity-75 mb-4">
                <span>
                  <i className="bi bi-clock me-2"></i>
                  {trilha.duracao}
                </span>
                <span>
                  <i className="bi bi-book me-2"></i>
                  {trilha.modulos} módulos
                </span>
                <span>
                  <i className="bi bi-people-fill me-2"></i>
                  {trilha.alunos} alunas
                </span>
              </div>

              <div className="d-flex gap-3 flex-wrap">
                <button className="btn btn-warning btn-lg fw-bold px-4">
                  Matricular agora
                </button>

                <button className="btn btn-outline-light btn-lg px-4">
                  Ver conteúdo
                </button>
              </div>
            </Col>

            {/* IMAGEM DO CURSO */}
            <Col lg={6} className="text-center">
              <div
                className="p-4 rounded-4"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(6px)",
                }}
              >
                <img
                  src={trilha.imagem}
                  alt={trilha.titulo}
                  className="img-fluid"
                  style={{
                    maxHeight: "360px",
                    width: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CONTEÚDO */}
      <section className="py-5">
        <Container>
          <Row className="gy-5">
            {/* O QUE VAI APRENDER */}
            <Col lg={6}>
              <h3 className="fw-bold mb-4">
                O que você vai aprender
              </h3>

              <ul className="list-unstyled">
                {trilha.oQueVaiAprender.map((item, index) => (
                  <li key={index} className="d-flex mb-3">
                    <i className="bi bi-check-circle-fill text-success fs-5 me-3"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Col>

            {/* CONTEÚDO DO CURSO */}
            <Col lg={6}>
              <h3 className="fw-bold mb-4">
                Conteúdo do curso
              </h3>

              <div className="accordion accordion-flush">
                {trilha.conteudo.map((item, index) => (
                  <div className="accordion-item" key={index}>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed fw-semibold"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#modulo${index}`}
                      >
                        Módulo {index + 1}
                        <span className="ms-2 text-muted fw-normal">
                          — {item}
                        </span>
                      </button>
                    </h2>

                    <div
                      id={`modulo${index}`}
                      className="accordion-collapse collapse"
                    >
                      <div className="accordion-body text-muted">
                        Conteúdo prático, estratégico e aplicado
                        a situações reais do mercado.
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA FINAL */}
      <section className="py-5 bg-light text-center">
        <Container>
          <h2 className="fw-bold mb-3">
            Pronta para evoluir sua jornada empreendedora?
          </h2>

          <p className="text-muted mb-4">
            Aprenda com conteúdo prático, focado em aplicação real
            e crescimento sustentável.
          </p>

          <button className="btn btn-primary btn-lg fw-bold px-5">
            Quero me matricular
          </button>
        </Container>
      </section>
    </>
  );


}
