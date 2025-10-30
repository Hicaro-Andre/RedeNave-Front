// =========================================
// Rede NAVE - Recursos Avançados
// =========================================

'use strict';

// =========================================
// UTILITÁRIOS E CONFIGURAÇÕES
// =========================================

const NAVE_UTILS = {
    createStyle: (css) => {
        const style = document.createElement('style');
        style.textContent = css;
        document.head.appendChild(style);
        return style;
    },
    
    escapeHtml: (text) => {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
};

// Adicionar animações globais (apenas uma vez)
NAVE_UTILS.createStyle(`
    @keyframes slideInRight {
        from { transform: translateX(400px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(400px); opacity: 0; }
    }
    
    @keyframes scaleIn {
        from { transform: scale(0.7); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`);

// =========================================
// 1. SISTEMA DE NOTIFICAÇÕES TOAST
// =========================================
class ToastNotification {
    constructor() {
        this.container = this.createContainer();
    }
    
    createContainer() {
        let container = document.getElementById('toast-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'toast-container';
            container.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 9999;
                display: flex;
                flex-direction: column;
                gap: 10px;
            `;
            document.body.appendChild(container);
        }
        return container;
    }
    
    show(message, type = 'info', duration = 3000) {
        const colors = {
            success: '#198754',
            error: '#dc3545',
            warning: '#ffc107',
            info: '#0dcaf0'
        };
        
        const icons = {
            success: '✓',
            error: '✕',
            warning: '⚠',
            info: 'ℹ'
        };
        
        const toast = document.createElement('div');
        toast.style.cssText = `
            background: white;
            color: #333;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            box-shadow: 0 5px 25px rgba(0,0,0,0.2);
            display: flex;
            align-items: center;
            gap: 10px;
            min-width: 300px;
            animation: slideInRight 0.3s ease-out;
            border-left: 4px solid ${colors[type]};
        `;
        
        const safeMessage = NAVE_UTILS.escapeHtml(message);
        
        toast.innerHTML = `
            <span style="
                width: 30px;
                height: 30px;
                border-radius: 50%;
                background: ${colors[type]};
                color: white;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
            ">${icons[type]}</span>
            <span style="flex: 1;">${safeMessage}</span>
            <button onclick="this.parentElement.remove()" style="
                background: none;
                border: none;
                font-size: 1.2rem;
                cursor: pointer;
                color: #999;
            ">×</button>
        `;
        
        this.container.appendChild(toast);
        
        setTimeout(() => {
            toast.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => toast.remove(), 300);
        }, duration);
    }
}

const toast = new ToastNotification();

// =========================================
// 2. MODAL DE VÍDEO
// =========================================
class VideoModal {
    constructor() {
        this.modal = null;
        this.createModal();
    }
    
    createModal() {
        const modalHTML = `
            <div id="videoModal" style="
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.9);
                z-index: 10000;
                justify-content: center;
                align-items: center;
            ">
                <div style="position: relative; width: 90%; max-width: 900px;">
                    <button onclick="videoModal.close()" style="
                        position: absolute;
                        top: -40px;
                        right: 0;
                        background: white;
                        border: none;
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        font-size: 1.5rem;
                        cursor: pointer;
                        color: #333;
                    ">×</button>
                    <div id="videoContainer" style="
                        background: black;
                        border-radius: 10px;
                        overflow: hidden;
                        aspect-ratio: 16/9;
                    "></div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        this.modal = document.getElementById('videoModal');
    }
    
    open(videoUrl) {
        const container = document.getElementById('videoContainer');
        
        if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
            const videoId = this.extractYouTubeId(videoUrl);
            container.innerHTML = `
                <iframe width="100%" height="100%" 
                    src="https://www.youtube.com/embed/${videoId}?autoplay=1" 
                    frameborder="0" allowfullscreen>
                </iframe>
            `;
        } else if (videoUrl.includes('vimeo.com')) {
            const videoId = videoUrl.split('/').pop();
            container.innerHTML = `
                <iframe width="100%" height="100%" 
                    src="https://player.vimeo.com/video/${videoId}?autoplay=1" 
                    frameborder="0" allowfullscreen>
                </iframe>
            `;
        } else {
            container.innerHTML = `
                <video width="100%" height="100%" controls autoplay>
                    <source src="${videoUrl}" type="video/mp4">
                </video>
            `;
        }
        
        this.modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
    
    close() {
        document.getElementById('videoContainer').innerHTML = '';
        this.modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    extractYouTubeId(url) {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    }
}

const videoModal = new VideoModal();

// =========================================
// 3. LOADING OVERLAY
// =========================================
class LoadingOverlay {
    constructor() {
        this.overlay = null;
        this.createOverlay();
    }
    
    createOverlay() {
        const overlayHTML = `
            <div id="loadingOverlay" style="
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(255,255,255,0.9);
                backdrop-filter: blur(5px);
                z-index: 9998;
                justify-content: center;
                align-items: center;
            ">
                <div style="text-align: center;">
                    <div style="
                        width: 60px;
                        height: 60px;
                        border: 5px solid #f3f3f3;
                        border-top: 5px solid #667eea;
                        border-radius: 50%;
                        animation: spin 1s linear infinite;
                        margin: 0 auto 20px;
                    "></div>
                    <p style="color: #667eea; font-weight: bold; font-size: 1.2rem;">
                        Carregando...
                    </p>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', overlayHTML);
        this.overlay = document.getElementById('loadingOverlay');
    }
    
    show() {
        this.overlay.style.display = 'flex';
    }
    
    hide() {
        this.overlay.style.display = 'none';
    }
}

const loading = new LoadingOverlay();

// =========================================
// 4. MODAL DE CONFIRMAÇÃO
// =========================================
class ConfirmModal {
    constructor() {
        this.modal = null;
        this.createModal();
    }
    
    createModal() {
        const modalHTML = `
            <div id="confirmModal" style="
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.5);
                z-index: 9999;
                justify-content: center;
                align-items: center;
            ">
                <div style="
                    background: white;
                    padding: 2rem;
                    border-radius: 15px;
                    max-width: 400px;
                    width: 90%;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.3);
                    animation: scaleIn 0.3s ease-out;
                ">
                    <div style="text-align: center; margin-bottom: 1.5rem;">
                        <div id="confirmIcon" style="
                            width: 60px;
                            height: 60px;
                            border-radius: 50%;
                            background: #ffc107;
                            color: white;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 2rem;
                            margin: 0 auto 1rem;
                        ">⚠</div>
                        <h5 id="confirmTitle" style="font-weight: bold; margin-bottom: 0.5rem;">Confirmar Ação</h5>
                        <p id="confirmMessage" style="color: #666; margin: 0;">Tem certeza que deseja continuar?</p>
                    </div>
                    <div style="display: flex; gap: 10px;">
                        <button id="confirmCancel" style="
                            flex: 1;
                            padding: 0.75rem;
                            border: 2px solid #dee2e6;
                            background: white;
                            border-radius: 8px;
                            font-weight: bold;
                            cursor: pointer;
                            transition: all 0.3s;
                        ">Cancelar</button>
                        <button id="confirmOk" style="
                            flex: 1;
                            padding: 0.75rem;
                            border: none;
                            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                            color: white;
                            border-radius: 8px;
                            font-weight: bold;
                            cursor: pointer;
                            transition: all 0.3s;
                        ">Confirmar</button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        this.modal = document.getElementById('confirmModal');
    }
    
    show(options = {}) {
        const {
            title = 'Confirmar Ação',
            message = 'Tem certeza que deseja continuar?',
            icon = '⚠',
            confirmText = 'Confirmar',
            cancelText = 'Cancelar',
            onConfirm = () => {},
            onCancel = () => {}
        } = options;
        
        document.getElementById('confirmTitle').textContent = title;
        document.getElementById('confirmMessage').textContent = message;
        document.getElementById('confirmIcon').textContent = icon;
        document.getElementById('confirmOk').textContent = confirmText;
        document.getElementById('confirmCancel').textContent = cancelText;
        
        this.modal.style.display = 'flex';
        
        const confirmBtn = document.getElementById('confirmOk');
        const cancelBtn = document.getElementById('confirmCancel');
        
        confirmBtn.onclick = () => {
            onConfirm();
            this.hide();
        };
        
        cancelBtn.onclick = () => {
            onCancel();
            this.hide();
        };
        
        this.modal.onclick = (e) => {
            if (e.target === this.modal) {
                this.hide();
            }
        };
    }
    
    hide() {
        this.modal.style.display = 'none';
    }
}

const confirmModal = new ConfirmModal();

// =========================================
// 5. SEARCH BAR AVANÇADA
// =========================================
function initAdvancedSearch() {
    const searchInputs = document.querySelectorAll('[data-search]');
    
    searchInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const targetSelector = input.getAttribute('data-search');
            const items = document.querySelectorAll(targetSelector);
            
            items.forEach(item => {
                const text = item.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    item.style.display = '';
                    item.style.animation = 'fadeIn 0.3s';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// =========================================
// 6. SCROLL PROGRESS BAR (Otimizado)
// =========================================
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress-bar';
    progressBar.setAttribute('aria-hidden', 'true');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
        width: 0%;
        z-index: 9999;
        transition: width 0.1s ease-out;
    `;
    document.body.appendChild(progressBar);
    
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const scrolled = (window.scrollY / windowHeight) * 100;
                progressBar.style.width = Math.min(scrolled, 100) + '%';
                ticking = false;
            });
            ticking = true;
        }
    });
}

// =========================================
// 7. LAZY LOADING DE IMAGENS
// =========================================
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    if (images.length === 0) return;
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// =========================================
// 8. BACK TO TOP BUTTON (Otimizado)
// =========================================
function initBackToTop() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'back-to-top-btn';
    button.setAttribute('aria-label', 'Voltar ao topo');
    button.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        background: #ffc107;
        color: #333;
        font-size: 1.5rem;
        font-weight: bold;
        cursor: pointer;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        z-index: 9997;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        transform: translateY(10px);
    `;
    
    let isVisible = false;
    let ticking = false;
    
    button.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    
    button.onmouseenter = () => button.style.transform = 'translateY(0) scale(1.1)';
    button.onmouseleave = () => button.style.transform = 'translateY(0) scale(1)';
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const shouldShow = window.scrollY > 300;
                
                if (shouldShow !== isVisible) {
                    isVisible = shouldShow;
                    button.style.opacity = shouldShow ? '1' : '0';
                    button.style.visibility = shouldShow ? 'visible' : 'hidden';
                    button.style.transform = shouldShow ? 'translateY(0)' : 'translateY(10px)';
                }
                
                ticking = false;
            });
            ticking = true;
        }
    });
    
    document.body.appendChild(button);
}

// =========================================
// 9. TYPING EFFECT
// =========================================
function typeWriter(element, text, speed = 50) {
    if (!element || !text) return;
    
    let i = 0;
    element.textContent = '';
    
    const type = () => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    };
    
    type();
}

// =========================================
// INICIALIZAÇÃO E EXPORTS
// =========================================
function inicializarRecursosAvancados() {
    try {
        initScrollProgress();
        initLazyLoading();
        initBackToTop();
        initAdvancedSearch();
        
        console.log('✓ Recursos avançados carregados!');
    } catch (error) {
        console.error('✗ Erro ao carregar recursos avançados:', error);
    }
}

document.addEventListener('DOMContentLoaded', inicializarRecursosAvancados);

// Exportar para uso global (window object)
window.NAVE_ADVANCED = {
    toast,
    videoModal,
    loading,
    confirmModal,
    typeWriter,
    utils: NAVE_UTILS
};
