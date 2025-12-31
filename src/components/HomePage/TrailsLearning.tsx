import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import cursogestao from "/src/assets/trilhas/cursogestao.png";
import cursomarketing from "/src/assets/trilhas/cursomarketing.jpeg";
import cursolideranca from "/src/assets/trilhas/cursolideranca.jpeg";


type TrailsLearningProps = {
  blok: {
    title: string;
    description: string;
    button_section_trilhas: string;
  };
};


interface Trilha {
  id: number;
  titulo: string;
  descricao: string;
  icone: string;
  cor: "success" | "primary" | "warning" | string;
  duracao: string;
  modulos: number;
  nivel: string;
  alunos: number;
  progresso: number;
  imagem: string;
}

interface TrilhaCardProps {
  trilha: Trilha;
}

// Dados das trilhas (copiados do main.js)
const trilhas: Trilha[] = [
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
    progresso: 65,
    imagem: cursogestao,
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
    progresso: 85,
    imagem: cursomarketing
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
    progresso: 45,
    imagem: cursolideranca,
  }
];

// Função para animar números (do main.js)
function animarNumero(element: HTMLElement, numero: number, simbolo: string = '', animationDuration: number = 2000) {
  if (isNaN(numero)) return;

  const incremento = numero / (animationDuration / 16);
  let atual = 0;

  const timer = setInterval(() => {
    atual += incremento;
    if (atual >= numero) {
      element.textContent = numero + simbolo;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(atual) + simbolo;
    }
  }, 16);
}

// Função para animar contadores (do main.js)
function animarContadores() {
  const contadores = document.querySelectorAll<HTMLElement>('.stat-card h3');

  const observerOptions: IntersectionObserverInit = {
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
        entry.target.classList.add('animated');
        const text = entry.target.textContent?.trim() || '';
        const numero = parseInt(text.replace(/\D/g, ''));
        const simbolo = text.replace(/[0-9]/g, '');
        animarNumero(entry.target as HTMLElement, numero, simbolo);
      }
    });
  }, observerOptions);

  contadores.forEach(contador => observer.observe(contador));
}

// Componente de Card de Trilha
function TrilhaCard({ trilha }: TrilhaCardProps) {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = 'https://via.placeholder.com/400x200/667eea/ffffff?text=Rede+NAVE';
  };

  return (
    <div className="col">
      <div className="card trilha-card h-100">
        <span
          className={`badge bg-${trilha.cor}`}
          style={{ position: 'absolute', top: '10px', right: '10px' }}
        >
          {trilha.nivel}
        </span>
        <img
          src={trilha.imagem}
          className="card-img-top"
          alt={trilha.titulo}
          onError={handleImageError}
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column">
          <div className="d-flex align-items-center mb-3">
            <i className={`bi ${trilha.icone} text-${trilha.cor} fs-3 me-2`}></i>
            <h5 className="card-title mb-0">{trilha.titulo}</h5>
          </div>
          <p className="card-text text-muted flex-grow-1">{trilha.descricao}</p>
          <div className="d-flex justify-content-between text-muted small mb-2">
            <span><i className="bi bi-clock"></i> {trilha.duracao}</span>
            <span><i className="bi bi-book"></i> {trilha.modulos} módulos</span>
          </div>

          {/* Barra de Progresso Animada */}
          <div className="mb-3">
            <div className="d-flex justify-content-between align-items-center mb-1">
              <small className="text-muted">Popularidade</small>
              <small className="text-muted fw-bold">{trilha.progresso}%</small>
            </div>
            <div className="progress" style={{ height: '8px' }}>
              <div
                className={`progress-bar progress-bar-striped progress-bar-animated bg-${trilha.cor}`}
                role="progressbar"
                style={{ width: `${trilha.progresso}%` }}
                aria-valuenow={trilha.progresso}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center mt-auto">
            <span className="text-muted small">
              <i className="bi bi-people-fill"></i> {trilha.alunos} alunas
            </span>
            <Link to={`/cursos/${trilha.id}`} className="btn btn-sm btn-primary">
              Ver Detalhes <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Componente principal
export default function TrailsLearning({ blok }: TrailsLearningProps) {
  useEffect(() => {
    // Anima os contadores quando o componente montar
    animarContadores();

    // Configura animações de fade-in (do main.js)
    const adicionarAnimacoesScroll = () => {
      const fadeElements = document.querySelectorAll<HTMLElement>('.fade-in-section');

      const observerOptions: IntersectionObserverInit = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade', 'show', 'is-visible');
          }
        });
      }, observerOptions);

      fadeElements.forEach(element => observer.observe(element));

      return () => {
        fadeElements.forEach(element => observer.unobserve(element));
      };
    };

    const cleanup = adicionarAnimacoesScroll();

    return () => {
      cleanup?.();
    };
  }, []);

  return (
    <section className="py-5 fade-in-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">{blok.title}</h2>
          <p>
            {blok.description}
          </p>
        </div>

        <div className="row g-4" id="trilhasContainer">
          {trilhas.map(trilha => (
            <TrilhaCard key={trilha.id} trilha={trilha} />
          ))}
        </div>

        <div className="text-center mt-4">
          <Link to="/trilhas" className="btn btn-lg">
            {blok.button_section_trilhas} <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}