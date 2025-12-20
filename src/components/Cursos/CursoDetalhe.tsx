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

  // 👉 Spinner primeiro
  if (loading) {
    return <LoadingSpinner />;
  }

  // 👉 Not Found depois do loading
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
          background: `linear-gradient(135deg, rgba(102,126,234,.9), rgba(118,75,162,.9)), url(${trilha.imagem}) center/cover`
        }}
      >
        <Container>
          <Row className="align-items-center">
            <Col md={8}>
              <span className="badge bg-light text-dark mb-3">
                {trilha.nivel}
              </span>

              <h1 className="fw-bold">{trilha.titulo}</h1>

              <p className="lead mt-3">{trilha.descricao}</p>

              <div className="d-flex gap-4 mt-4 flex-wrap">
                <span><i className="bi bi-clock"></i> {trilha.duracao}</span>
                <span><i className="bi bi-book"></i> {trilha.modulos} módulos</span>
                <span><i className="bi bi-people-fill"></i> {trilha.alunos} alunas</span>
              </div>
            </Col>

            <Col md={4} className="text-md-end mt-4 mt-md-0">
              <button className="btn btn-lg btn-warning fw-bold">
                Matricule-se agora
              </button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CONTEÚDO */}
      <section className="py-5">
        <Container>
          <Row>
            <Col md={6}>
              <h3 className="fw-bold mb-3">O que você vai aprender</h3>
              <ul className="list-unstyled">
                {trilha.oQueVaiAprender.map((item, index) => (
                  <li key={index} className="mb-2">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </Col>

            <Col md={6}>
              <h3 className="fw-bold mb-3">Conteúdo do curso</h3>
              <div className="accordion" id="accordionCurso">
                {trilha.conteudo.map((item, index) => (
                  <div className="accordion-item" key={index}>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#modulo${index}`}
                      >
                        Módulo {index + 1} – {item}
                      </button>
                    </h2>
                    <div
                      id={`modulo${index}`}
                      className="accordion-collapse collapse"
                    >
                      <div className="accordion-body">
                        Conteúdo prático e estratégico para aplicação real.
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
          <button className="btn btn-lg btn-primary">
            Quero me matricular
          </button>
        </Container>
      </section>
    </>
  );
}
