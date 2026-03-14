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

document.querySelectorAll("#menu a").forEach(link => {
    link.addEventListener("click", () => {
        const menu = document.getElementById("menu");
        if (menu) menu.classList.remove("active");
    });
});

// =============================
// FUNÇÕES GENÉRICAS DE MODAL
// =============================
function abrirModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = "flex";
}

function fecharModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = "none";
}

// =============================
// MODAL ASTRONOMIA
// =============================
let slideIndexAstronomia = 0;

function abrirModalAstronomia() {
    abrirModal("modalAstronomia");
    slideIndexAstronomia = 0;
    mostrarSlideAstronomia(slideIndexAstronomia);
}

function fecharModalAstronomia() {
    fecharModal("modalAstronomia");
}

function mudarSlideAstronomia(n) {
    const slides = document.querySelectorAll("#modalAstronomia .slider .slide");
    if (!slides.length) return;

    slideIndexAstronomia += n;
    if (slideIndexAstronomia < 0) slideIndexAstronomia = slides.length - 1;
    if (slideIndexAstronomia >= slides.length) slideIndexAstronomia = 0;

    mostrarSlideAstronomia(slideIndexAstronomia);
}

function mostrarSlideAstronomia(index) {
    const slides = document.querySelectorAll("#modalAstronomia .slider .slide");
    slides.forEach((slide, i) => slide.style.display = i === index ? "block" : "none");
}

// =============================
// MODAL LÓGICA DE PROGRAMAÇÃO
// =============================
let slideIndexLogica = 0;

function abrirModalLogica() {
    abrirModal("modalLogica");
    slideIndexLogica = 0;
    mostrarSlideLogica(slideIndexLogica);
}

function fecharModalLogica() {
    fecharModal("modalLogica");
}

function mudarSlideLogica(n) {
    const slides = document.querySelectorAll("#modalLogica .slider .slide");
    if (!slides.length) return;

    slideIndexLogica += n;
    if (slideIndexLogica < 0) slideIndexLogica = slides.length - 1;
    if (slideIndexLogica >= slides.length) slideIndexLogica = 0;

    mostrarSlideLogica(slideIndexLogica);
}

function mostrarSlideLogica(index) {
    const slides = document.querySelectorAll("#modalLogica .slider .slide");
    slides.forEach((slide, i) => slide.style.display = i === index ? "block" : "none");
}

// =============================
// MODAL RDDEV (sem slider)
// =============================
function abrirModalRD() {
    abrirModal("modal");
}

function fecharModalRD() {
    fecharModal("modal");
}

// =============================
// FECHAR MODAIS CLICANDO FORA
// =============================
window.addEventListener("click", function(event) {
    ["modal", "modalAstronomia", "modalLogica"].forEach(id => {
        const modal = document.getElementById(id);
        if (event.target === modal) modal.style.display = "none";
    });
});

// =============================
// FECHAR MODAIS COM ESC
// =============================
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        ["modal", "modalAstronomia", "modalLogica"].forEach(id => {
            const modal = document.getElementById(id);
            if (modal) modal.style.display = "none";
        });
    }
});
