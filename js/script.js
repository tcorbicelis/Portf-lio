// EFEITO DE DIGITAÇÃO

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


// MENU MOBILE

function toggleMenu() {

const menu = document.getElementById("menu");

menu.classList.toggle("active");

}


// FECHAR MENU AO CLICAR EM UM LINK (MOBILE)

document.querySelectorAll("#menu a").forEach(link => {

link.addEventListener("click", () => {

const menu = document.getElementById("menu");

menu.classList.remove("active");

});

});


// MODAL PROJETO RDdev

function abrirModal() {

const modal = document.getElementById("modal");

modal.style.display = "flex";

}

function fecharModal() {

const modal = document.getElementById("modal");

modal.style.display = "none";

}


// FECHAR MODAL CLICANDO FORA

window.onclick = function(event) {

const modal = document.getElementById("modal");

if (event.target === modal) {

modal.style.display = "none";

}

};