// =============================
// EFEITO DE DIGITAÇÃO
// =============================

const text = "Rede de Desenvolvimento";
let index = 0;
const speed = 80;

function typeEffect() {
    const typingElement = document.getElementById("typing");
    if (!typingElement) return;

    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, speed);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);

// =============================
// MENU MOBILE
// =============================

function toggleMenu() {
    const menu = document.getElementById("menu");
    if (menu) menu.classList.toggle("active");
}

// FECHAR MENU AO CLICAR EM UM LINK
document.querySelectorAll("#menu a").forEach(link => {
    link.addEventListener("click", () => {
        const menu = document.getElementById("menu");
        if (menu) menu.classList.remove("active");
    });
});

// =============================
// MODAIS
// =============================

function abrirModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = "flex";
}

function fecharModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = "none";
}

// Funções específicas para Astronomia
function abrirModalAstronomia() {
    abrirModal("modalAstronomia");
}

function fecharModalAstronomia() {
    fecharModal("modalAstronomia");
}

// =============================
// FECHAR MODAL CLICANDO FORA
// =============================

window.addEventListener("click", function(event) {
    const modalRD = document.getElementById("modal");
    const modalAstro = document.getElementById("modalAstronomia");

    if (event.target === modalRD) modalRD.style.display = "none";
    if (event.target === modalAstro) modalAstro.style.display = "none";
});

// =============================
// FECHAR MODAL COM ESC
// =============================

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        const modalRD = document.getElementById("modal");
        const modalAstro = document.getElementById("modalAstronomia");

        if (modalRD) modalRD.style.display = "none";
        if (modalAstro) modalAstro.style.display = "none";
    }
});

// =============================
// SLIDER DO MODAL ASTRONOMIA
// =============================

let slideIndex = 0;

function mudarSlide(n) {
    const slides = document.querySelectorAll("#modalAstronomia .slider .slide");
    if (!slides.length) return;

    slideIndex += n;

    if (slideIndex < 0) slideIndex = slides.length - 1;
    if (slideIndex >= slides.length) slideIndex = 0;

    const slider = document.querySelector("#modalAstronomia .slider");
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Inicializa o slider na primeira imagem
document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector("#modalAstronomia .slider");
    if (slider) slider.style.transform = "translateX(0%)";
});
