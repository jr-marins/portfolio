// ANO AUTOMÁTICO
document.getElementById("year").textContent = new Date().getFullYear();

// EFEITO DIGITAÇÃO
const text = "Desenvolvedor Backend em Formação";
const typingElement = document.getElementById("typing");

let index = 0;

function typeEffect() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 60);
    }
}

typeEffect();

// SCROLL REVEAL
const sections = document.querySelectorAll(".secao");

function revealOnScroll() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const trigger = window.innerHeight - 100;

        if (sectionTop < trigger && sectionTop > -section.offsetHeight) {
            section.classList.add("show");
        } else {
            section.classList.remove("show");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

// MENU MOBILE
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});