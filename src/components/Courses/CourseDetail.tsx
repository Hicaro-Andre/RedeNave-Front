import { useParams, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";

import LoadingSpinner from "../LoadingSpinner";
import "/src/styles/coursedetail.css";

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
      "Planejamento de crescimento",
    ],
    conteudo: [
      "Fundamentos da gestão financeira",
      "Custos fixos e variáveis",
      "Fluxo de caixa",
      "Lucro e reinvestimento",
    ],
  },
  {
    id: 2,
    titulo: "Marketing Digital e Redes Sociais",
    descricao:
      "Domine estratégias para vender todos os dias usando as redes sociais.",
    nivel: "Intermediário",
    duracao: "6 semanas",
    modulos: 10,
    alunos: 203,
    imagem: cursomarketing,
    oQueVaiAprender: [
      "Marketing digital na prática",
      "Instagram para negócios",
      "Conteúdo que vende",
      "Funil de vendas",
    ],
    conteudo: [
      "Fundamentos do marketing digital",
      "Posicionamento e branding",
      "Conteúdo estratégico",
      "Métricas e análise",
    ],
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
      "Gestão emocional",
    ],
    conteudo: [
      "Mindset de liderança",
      "Comunicação eficaz",
      "Inteligência emocional",
      "Tomada de decisão",
    ],
  },
];

export default function CourseDetail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  const trilha = trilhas.find((t) => t.id === Number(id));

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingSpinner />;

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
      <section className="course-hero">
        <Container>
          <Row className="align-items-center gy-5">
            <Col lg={6}>
              <span className="badge course-level mb-3">{trilha.nivel}</span>

              <h1 className="course-title mb-3">{trilha.titulo}</h1>

              <p className="course-description mb-4">{trilha.descricao}</p>

              <div className="course-meta mb-4">
                <span>
                  <i className="bi bi-clock"></i> {trilha.duracao}
                </span>
                <span>
                  <i className="bi bi-book"></i> {trilha.modulos} módulos
                </span>
                <span>
                  <i className="bi bi-people-fill"></i> {trilha.alunos} alunas
                </span>
              </div>

              <div className="d-flex gap-3 flex-wrap">
                <Link to="/login" className="btn btn-primary btn-lg">
                  Matricular agora
                </Link>

                <button className="btn btn-outline-primary btn-lg">
                  Ver conteúdo
                </button>
              </div>
            </Col>

            <Col lg={6} className="text-center">
              <div className="course-image-wrapper">
                <img
                  src={trilha.imagem}
                  alt={trilha.titulo}
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CONTEÚDO */}
      <section className="py-5 ">
        <Container>
          <Row className="gy-5">
            <Col lg={6}>
              <h3 className="section-title">O que você vai aprender</h3>

              <ul className="learning-list">
                {trilha.oQueVaiAprender.map((item, index) => (
                  <li key={index}>
                    <i className="bi bi-check-circle-fill"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </Col>

            <Col lg={6}>
              <h3 className="section-title">Conteúdo do curso</h3>

              <div className="accordion accordion-flush">
                {trilha.conteudo.map((item, index) => (
                  <div className="accordion-item" key={index}>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#modulo${index}`}
                      >
                        Módulo {index + 1} — {item}
                      </button>
                    </h2>

                    <div
                      id={`modulo${index}`}
                      className="accordion-collapse collapse"
                    >
                      <div className="accordion-body">
                        Conteúdo prático e aplicado ao mercado.
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA */}
      <section className="course-cta">
        <Container>
          <h2 className="mb-3">
            Pronta para evoluir sua jornada empreendedora?
          </h2>

          <p className="mb-4">
            Conteúdo prático, direto ao ponto e focado em crescimento real.
          </p>

          <div className="d-flex flex-column align-items-center gap-3">
            <Link
              to="/login"
              className="btn btn-primary btn-lg px-5 fw-semibold"
            >
              Quero me matricular{" "}
            </Link>

            <Link
              to="/trilhas"
              className="btn btn-link text-decoration-none course-back-link"
            >
              ← Voltar para trilhas
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
