// =========================================
// Rede NAVE - JavaScript Principal
// =========================================

'use strict';

// =========================================
// CONFIGURAÇÃO E DADOS
// =========================================

const NAVE_CONFIG = {
    animationDuration: 2000,
    toastDuration: 3000,
    scrollOffset: 50
};

// Dados Mock - Trilhas de Aprendizagem
const trilhas = [
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
        imagem: "images/trilha-financeira.jpg"
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
        imagem: "images/trilha-marketing.jpg"
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
        imagem: "images/trilha-lideranca.jpg"
    }
];

// Dados Mock - Próximos Eventos
const eventos = [
    {
        id: 1,
        titulo: "Workshop: Precificação Inteligente",
        descricao: "Aprenda a calcular o preço ideal para seus produtos.",
        data: "15",
        mes: "NOV",
        horario: "19:00",
        tipo: "Online",
        vagas: 30
    },
    {
        id: 2,
        titulo: "Feira de Empreendedoras NAVE",
        descricao: "Exponha seus produtos e faça networking.",
        data: "20",
        mes: "NOV",
        horario: "09:00",
        tipo: "Presencial",
        vagas: 50
    },
    {
        id: 3,
        titulo: "Live: Instagram para Vendas",
        descricao: "Estratégias práticas para vender pelo Instagram.",
        data: "25",
        mes: "NOV",
        horario: "20:00",
        tipo: "Live",
        vagas: 100
    }
];

// =========================================
// Funções de Renderização
// =========================================

// Renderizar Trilhas na Home
function renderizarTrilhas() {
    const container = document.getElementById('trilhasContainer');
    
    if (!container) return;
    
    container.innerHTML = '';
    
    trilhas.forEach(trilha => {
        const card = `
            <div class="col-md-6 col-lg-4">
                <div class="card trilha-card">
                    <span class="badge bg-${trilha.cor}">${trilha.nivel}</span>
                    <img src="${trilha.imagem}" class="card-img-top" alt="${trilha.titulo}" 
                         onerror="this.src='https://via.placeholder.com/400x200/667eea/ffffff?text=Rede+NAVE'">
                    <div class="card-body">
                        <div class="d-flex align-items-center mb-3">
                            <i class="bi ${trilha.icone} text-${trilha.cor} fs-3 me-2"></i>
                            <h5 class="card-title mb-0">${trilha.titulo}</h5>
                        </div>
                        <p class="card-text text-muted">${trilha.descricao}</p>
                        <div class="d-flex justify-content-between text-muted small mb-3">
                            <span><i class="bi bi-clock"></i> ${trilha.duracao}</span>
                            <span><i class="bi bi-book"></i> ${trilha.modulos} módulos</span>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="text-muted small">
                                <i class="bi bi-people-fill"></i> ${trilha.alunos} alunas
                            </span>
                            <a href="pages/trilha-detalhes.html?id=${trilha.id}" class="btn btn-sm btn-primary">
                                Ver Detalhes <i class="bi bi-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

// Renderizar Eventos na Home
function renderizarEventos() {
    const container = document.getElementById('eventosContainer');
    
    if (!container) return;
    
    container.innerHTML = '';
    
    eventos.forEach(evento => {
        const card = `
            <div class="col-md-6 col-lg-4">
                <div class="card event-card">
                    <div class="row g-0">
                        <div class="col-auto">
                            <div class="event-date">
                                <span class="day">${evento.data}</span>
                                <span class="month">${evento.mes}</span>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card-body">
                                <span class="badge bg-info mb-2">${evento.tipo}</span>
                                <h6 class="card-title fw-bold">${evento.titulo}</h6>
                                <p class="card-text text-muted small mb-2">${evento.descricao}</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <span class="text-muted small">
                                        <i class="bi bi-clock"></i> ${evento.horario}
                                    </span>
                                    <span class="text-muted small">
                                        <i class="bi bi-people"></i> ${evento.vagas} vagas
                                    </span>
                                </div>
                                <button class="btn btn-sm btn-outline-primary mt-3 w-100">
                                    <i class="bi bi-calendar-plus"></i> Inscrever-se
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

// =========================================
// Animações de Scroll
// =========================================
function adicionarAnimacoesScroll() {
    const fadeElements = document.querySelectorAll('.fade-in-section');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);
    
    fadeElements.forEach(element => {
        observer.observe(element);
    });
}

// =========================================
// Navbar Scroll Effect
// =========================================
function navbarScrollEffect() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateNavbar(navbar);
                ticking = false;
            });
            ticking = true;
        }
    });
}

function updateNavbar(navbar) {
    const scrolled = window.scrollY > NAVE_CONFIG.scrollOffset;
    navbar.style.padding = scrolled ? '0.5rem 0' : '1rem 0';
    navbar.style.boxShadow = scrolled 
        ? '0 4px 15px rgba(0, 0, 0, 0.15)' 
        : '0 2px 10px rgba(0, 0, 0, 0.1)';
}

// =========================================
// Smooth Scroll para Links Âncora
// =========================================
function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Ignora # vazio ou links do Bootstrap (collapse, dropdown, etc)
            if (href === '#' || this.hasAttribute('data-bs-toggle')) {
                return;
            }
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// =========================================
// Formulários - Validação Simples
// =========================================
function configurarValidacaoFormularios() {
    const forms = document.querySelectorAll('.needs-validation');
    
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            
            form.classList.add('was-validated');
        }, false);
    });
}

// =========================================
// Toast de Notificações (usando Bootstrap)
// =========================================
function mostrarNotificacao(mensagem, tipo = 'success') {
    if (typeof bootstrap === 'undefined') {
        console.warn('Bootstrap não carregado. Notificação não exibida:', mensagem);
        return;
    }
    
    const toastContainer = document.querySelector('.toast-container') || createToastContainer();
    
    const toastElement = createToastElement(mensagem, tipo);
    toastContainer.appendChild(toastElement);
    
    const bsToast = new bootstrap.Toast(toastElement, {
        autohide: true,
        delay: NAVE_CONFIG.toastDuration
    });
    
    bsToast.show();
    
    toastElement.addEventListener('hidden.bs.toast', () => {
        toastElement.remove();
    });
}

function createToastContainer() {
    const container = document.createElement('div');
    container.className = 'toast-container position-fixed bottom-0 end-0 p-3';
    container.style.zIndex = '9999';
    document.body.appendChild(container);
    return container;
}

function createToastElement(mensagem, tipo) {
    const toast = document.createElement('div');
    toast.className = `toast align-items-center text-white bg-${tipo} border-0`;
    toast.setAttribute('role', 'alert');
    toast.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">${mensagem}</div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
        </div>
    `;
    return toast;
}

// =========================================
// Contador Animado para Estatísticas
// =========================================
function animarContadores() {
    const contadores = document.querySelectorAll('.stat-card h3');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                animarNumero(entry.target);
            }
        });
    }, observerOptions);
    
    contadores.forEach(contador => observer.observe(contador));
}

function animarNumero(element) {
    const text = element.textContent.trim();
    const numero = parseInt(text.replace(/\D/g, ''));
    
    if (isNaN(numero)) return;
    
    const simbolo = text.replace(/[0-9]/g, '');
    const incremento = numero / (NAVE_CONFIG.animationDuration / 16);
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

// =========================================
// Inicialização e Performance
// =========================================
function inicializarTooltips() {
    if (typeof bootstrap === 'undefined') return;
    
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    [...tooltipTriggerList].forEach(tooltipTriggerEl => {
        new bootstrap.Tooltip(tooltipTriggerEl);
    });
}

function inicializarAplicacao() {
    try {
        // Renderizar conteúdo dinâmico
        renderizarTrilhas();
        renderizarEventos();
        
        // Configurar efeitos e animações
        navbarScrollEffect();
        smoothScroll();
        adicionarAnimacoesScroll();
        animarContadores();
        configurarValidacaoFormularios();
        inicializarTooltips();
        
        console.log('✓ Rede NAVE - Plataforma carregada com sucesso!');
    } catch (error) {
        console.error('✗ Erro ao inicializar aplicação:', error);
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', inicializarAplicacao);

// =========================================
// Exportar dados para outras páginas
// =========================================
window.NAVE_DATA = {
    trilhas,
    eventos,
    mostrarNotificacao
};
