const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector(".navbar");

hamburguer.addEventListener("click", () => nav.classList.toggle("active"));
