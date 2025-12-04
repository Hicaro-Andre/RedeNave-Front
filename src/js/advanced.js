// =========================================
// Rede NAVE - Recursos Avançados
// Otimizado para Bootstrap 5
// =========================================

"use strict";

// =========================================
// UTILITÁRIOS
// =========================================

const NAVE_UTILS = {
  escapeHtml: (text) => {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  },
};

// =========================================
// 1. SISTEMA DE NOTIFICAÇÕES TOAST (Bootstrap Native)
// =========================================
class ToastNotification {
  constructor() {
    this.container = this.createContainer();
  }

  createContainer() {
    let container = document.getElementById("toast-container");
    if (!container) {
      container = document.createElement("div");
      container.id = "toast-container";
      container.className = "toast-container position-fixed top-0 end-0 p-3";
      container.style.zIndex = "9999";
      document.body.appendChild(container);
    }
    return container;
  }

  show(message, type = "info", duration = 3000) {
    if (typeof bootstrap === "undefined") {
      console.error("Bootstrap não carregado");
      return;
    }

    const colors = {
      success: "success",
      error: "danger",
      warning: "warning",
      info: "info",
    };

    const icons = {
      success: "bi-check-circle-fill",
      error: "bi-x-circle-fill",
      warning: "bi-exclamation-triangle-fill",
      info: "bi-info-circle-fill",
    };

    const safeMessage = NAVE_UTILS.escapeHtml(message);

    const toastEl = document.createElement("div");
    toastEl.className = `toast align-items-center text-white bg-${colors[type]} border-0`;
    toastEl.setAttribute("role", "alert");
    toastEl.setAttribute("aria-live", "assertive");
    toastEl.setAttribute("aria-atomic", "true");
    toastEl.innerHTML = `
            <div class="d-flex">
                <div class="toast-body">
                    <i class="bi ${icons[type]} me-2"></i>
                    ${safeMessage}
                </div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" 
                        data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        `;

    this.container.appendChild(toastEl);

    // Usar Bootstrap Toast API
    const toast = new bootstrap.Toast(toastEl, {
      autohide: true,
      delay: duration,
      animation: true,
    });

    toast.show();

    toastEl.addEventListener("hidden.bs.toast", () => {
      toastEl.remove();
    });
  }
}

const toast = new ToastNotification();

// =========================================
// 2. MODAL DE VÍDEO (Bootstrap Modal)
// =========================================
class VideoModal {
  constructor() {
    this.createModal();
  }

  createModal() {
    const modalHTML = `
            <div class="modal fade" id="videoModal" tabindex="-1" aria-labelledby="videoModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="videoModalLabel">Vídeo</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body p-0">
                            <div id="videoContainer" style="aspect-ratio: 16/9; background: black;"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;

    document.body.insertAdjacentHTML("beforeend", modalHTML);
    this.modalElement = document.getElementById("videoModal");
    this.bsModal = new bootstrap.Modal(this.modalElement);

    // Limpar vídeo ao fechar
    this.modalElement.addEventListener("hidden.bs.modal", () => {
      document.getElementById("videoContainer").innerHTML = "";
    });
  }

  open(videoUrl) {
    const container = document.getElementById("videoContainer");

    if (videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be")) {
      const videoId = this.extractYouTubeId(videoUrl);
      container.innerHTML = `
                <iframe width="100%" height="100%" 
                    src="https://www.youtube.com/embed/${videoId}?autoplay=1" 
                    frameborder="0" allowfullscreen>
                </iframe>
            `;
    } else if (videoUrl.includes("vimeo.com")) {
      const videoId = videoUrl.split("/").pop();
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

    this.bsModal.show();
  }

  close() {
    this.bsModal.hide();
  }

  extractYouTubeId(url) {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  }
}

const videoModal = new VideoModal();

// =========================================
// 3. LOADING OVERLAY (Bootstrap Spinner)
// =========================================
class LoadingOverlay {
  constructor() {
    this.createOverlay();
  }

  createOverlay() {
    const overlayHTML = `
            <div id="loadingOverlay" class="modal fade" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content bg-transparent border-0 shadow-none">
                        <div class="modal-body text-center">
                            <div class="spinner-border text-primary" role="status" style="width: 3rem; height: 3rem;">
                                <span class="visually-hidden">Carregando...</span>
                            </div>
                            <p class="text-primary fw-bold mt-3">Carregando...</p>
                        </div>
                    </div>
                </div>
            </div>
        `;

    document.body.insertAdjacentHTML("beforeend", overlayHTML);
    this.modalElement = document.getElementById("loadingOverlay");
    this.bsModal = new bootstrap.Modal(this.modalElement);
  }

  show() {
    this.bsModal.show();
  }

  hide() {
    this.bsModal.hide();
  }
}

const loading = new LoadingOverlay();

// =========================================
// 4. MODAL DE CONFIRMAÇÃO (Bootstrap Modal)
// =========================================
class ConfirmModal {
  constructor() {
    this.createModal();
  }

  createModal() {
    const modalHTML = `
            <div class="modal fade" id="confirmModal" tabindex="-1" aria-labelledby="confirmModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header border-0">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body text-center pb-4">
                            <div id="confirmIcon" class="mb-3">
                                <i class="bi bi-exclamation-triangle-fill text-warning" style="font-size: 4rem;"></i>
                            </div>
                            <h5 id="confirmTitle" class="fw-bold mb-2">Confirmar Ação</h5>
                            <p id="confirmMessage" class="text-muted">Tem certeza que deseja continuar?</p>
                        </div>
                        <div class="modal-footer border-0 justify-content-center">
                            <button type="button" id="confirmCancel" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" id="confirmOk" class="btn btn-primary">Confirmar</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

    document.body.insertAdjacentHTML("beforeend", modalHTML);
    this.modalElement = document.getElementById("confirmModal");
    this.bsModal = new bootstrap.Modal(this.modalElement);
  }

  show(options = {}) {
    const {
      title = "Confirmar Ação",
      message = "Tem certeza que deseja continuar?",
      confirmText = "Confirmar",
      cancelText = "Cancelar",
      onConfirm = () => {},
      onCancel = () => {},
    } = options;

    document.getElementById("confirmTitle").textContent = title;
    document.getElementById("confirmMessage").textContent = message;
    document.getElementById("confirmOk").textContent = confirmText;
    document.getElementById("confirmCancel").textContent = cancelText;

    const confirmBtn = document.getElementById("confirmOk");
    const cancelBtn = document.getElementById("confirmCancel");

    // Remove event listeners anteriores
    const newConfirmBtn = confirmBtn.cloneNode(true);
    const newCancelBtn = cancelBtn.cloneNode(true);
    confirmBtn.parentNode.replaceChild(newConfirmBtn, confirmBtn);
    cancelBtn.parentNode.replaceChild(newCancelBtn, cancelBtn);

    newConfirmBtn.onclick = () => {
      onConfirm();
      this.bsModal.hide();
    };

    newCancelBtn.onclick = () => {
      onCancel();
      this.bsModal.hide();
    };

    this.bsModal.show();
  }

  hide() {
    this.bsModal.hide();
  }
}

const confirmModal = new ConfirmModal();

// =========================================
// 5. SEARCH BAR AVANÇADA
// =========================================
function initAdvancedSearch() {
  const searchInputs = document.querySelectorAll("[data-search]");

  searchInputs.forEach((input) => {
    input.addEventListener("input", (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const targetSelector = input.getAttribute("data-search");
      const items = document.querySelectorAll(targetSelector);

      items.forEach((item) => {
        const text = item.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
          item.style.display = "";
          item.style.animation = "fadeIn 0.3s";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
}

// =========================================
// 6. SCROLL PROGRESS BAR (Otimizado)
// =========================================
function initScrollProgress() {
  const progressBar = document.createElement("div");
  progressBar.className = "scroll-progress-bar";
  progressBar.setAttribute("aria-hidden", "true");
  progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(180deg, #5b119a, #7c19d1);

        width: 0%;
        z-index: 9999;
        transition: width 0.1s ease-out;
    `;
  document.body.appendChild(progressBar);

  let ticking = false;

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const windowHeight =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = Math.min(scrolled, 100) + "%";
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
  const images = document.querySelectorAll("img[data-src]");
  if (images.length === 0) return;

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.getAttribute("data-src");
        img.removeAttribute("data-src");
        img.classList.add("loaded");
        observer.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
}

// =========================================
// 8. BACK TO TOP BUTTON (Otimizado)
// =========================================
function initBackToTop() {
  const button = document.createElement("button");
  button.innerHTML = "↑";
  button.className = "back-to-top-btn";
  button.setAttribute("aria-label", "Voltar ao topo");
  button.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        background: #6A0DAD;
        color: #DEC9E7;
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

  button.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  button.onmouseenter = () =>
    (button.style.transform = "translateY(0) scale(1.1)");
  button.onmouseleave = () =>
    (button.style.transform = "translateY(0) scale(1)");

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const shouldShow = window.scrollY > 300;

        if (shouldShow !== isVisible) {
          isVisible = shouldShow;
          button.style.opacity = shouldShow ? "1" : "0";
          button.style.visibility = shouldShow ? "visible" : "hidden";
          button.style.transform = shouldShow
            ? "translateY(0)"
            : "translateY(10px)";
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
  element.textContent = "";

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
  } catch (error) {
    console.error("Erro ao carregar recursos avançados:", error);
  }
}

document.addEventListener("DOMContentLoaded", inicializarRecursosAvancados);

// Exportar para uso global (window object)
window.NAVE_ADVANCED = {
  toast,
  videoModal,
  loading,
  confirmModal,
  typeWriter,
  utils: NAVE_UTILS,
};