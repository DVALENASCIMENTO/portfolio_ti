/* ================================
   PORTFÓLIO – SCRIPT PRINCIPAL
================================ */

document.addEventListener("DOMContentLoaded", () => {

  /* === ANO AUTOMÁTICO NO FOOTER === */
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  /* === ANIMAÇÃO DE SCROLL (FADE IN) === */
  const fadeElements = document.querySelectorAll(".fade");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.15 }
  );

  fadeElements.forEach((el) => observer.observe(el));

  /* === SCROLL SUAVE PARA ÂNCORAS === */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  /* === EFEITO DE DESTAQUE NOS CARDS === */
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.boxShadow = "0 0 22px rgba(0,234,255,0.6)";
      card.style.transform = "scale(1.01)";
      card.style.transition = "0.3s";
    });

    card.addEventListener("mouseleave", () => {
      card.style.boxShadow = "0 0 15px rgba(0,0,0,0.4)";
      card.style.transform = "scale(1)";
    });
  });

  /* === EFEITO NEON PULSANTE NOS IDIOMAS === */
  const idiomas = document.querySelectorAll(".idioma-neon");

  idiomas.forEach((idioma) => {
    idioma.addEventListener("mouseenter", () => {
      idioma.style.boxShadow = "0 0 25px #00eaff";
    });

    idioma.addEventListener("mouseleave", () => {
      idioma.style.boxShadow = "none";
    });
  });

  /* === SLIDE AUTOMÁTICO DE DEPOIMENTOS === */
const depoimentos = document.querySelectorAll(".depoimento");
let slideIndex = 0;

function trocarDepoimento() {
  depoimentos.forEach(d => d.classList.remove("active"));
  slideIndex = (slideIndex + 1) % depoimentos.length;
  depoimentos[slideIndex].classList.add("active");
}

if (depoimentos.length > 1) {
  setInterval(trocarDepoimento, 5000); // 5 segundos
}


});
