const nav = document.querySelector(".aside");
const nav__icon = document.querySelector(".navbar");
const home__nav = document.querySelector(".nav__home");
const about__nav = document.querySelector(".nav__about");
const services__nav = document.querySelector(".nav__services");
const portfolio__nav = document.querySelector(".nav__portfolio");
const contact__nav = document.querySelector(".nav__contact");
const home = document.querySelector(".home");
const about = document.querySelector(".about");
const services = document.querySelector(".services");
const portfolio = document.querySelector(".portfolio");
const contact = document.querySelector(".contact");
const more = document.querySelector(".more");
const mode = document.querySelector(".mode");
const Sections = document.querySelectorAll("section");
const h1 = document.querySelector("h1");
const p = document.querySelectorAll("p");
const i_tag = document.querySelectorAll("i");
const h3 = document.querySelectorAll("h3");
const h2 = document.querySelectorAll("h2");
const about__text = document.querySelector(".about__text");
const inputs = document.querySelectorAll("input");
const box = document.querySelectorAll(".box");

let drak__mode = false;
let activator = false;
nav__icon.addEventListener("click", () => {
  if (!activator) {
    nav.classList.add("active");
    activator = true;
  } else if (activator) {
    nav.classList.remove("active");
    activator = false;
  }
});
home__nav.addEventListener("click", () => {
  home.style.display = "flex";
  about.style.display = "none";
  services.style.display = "none";
  portfolio.style.display = "none";
  contact.style.display = "none";
  home__nav.style.backgroundColor = "orange";
  about__nav.style.backgroundColor = "transparent";
  services__nav.style.backgroundColor = "transparent";
  portfolio__nav.style.backgroundColor = "transparent";
  contact__nav.style.backgroundColor = "transparent";
});

about__nav.addEventListener("click", () => {
  home.style.display = "none";
  about.style.display = "flex";
  services.style.display = "none";
  portfolio.style.display = "none";
  contact.style.display = "none";
  about__nav.style.backgroundColor = "orange";
  services__nav.style.backgroundColor = "transparent";
  portfolio__nav.style.backgroundColor = "transparent";
  contact__nav.style.backgroundColor = "transparent";
  home__nav.style.backgroundColor = "transparent";
});

services__nav.addEventListener("click", () => {
  home.style.display = "none";
  about.style.display = "none";
  services.style.display = "flex";
  portfolio.style.display = "none";
  contact.style.display = "none";
  services__nav.style.backgroundColor = "orange";
  portfolio__nav.style.backgroundColor = "transparent";
  contact__nav.style.backgroundColor = "transparent";
  home__nav.style.backgroundColor = "transparent";
  about__nav.style.backgroundColor = "transparent";
});
portfolio__nav.addEventListener("click", () => {
  home.style.display = "none";
  about.style.display = "none";
  services.style.display = "none";
  portfolio.style.display = "flex";
  contact.style.display = "none";
  portfolio__nav.style.backgroundColor = "orange";
  contact__nav.style.backgroundColor = "transparent";
  home__nav.style.backgroundColor = "transparent";
  about__nav.style.backgroundColor = "transparent";
  services__nav.style.backgroundColor = "transparent";
});
contact__nav.addEventListener("click", () => {
  home.style.display = "none";
  about.style.display = "none";
  services.style.display = "none";
  portfolio.style.display = "none";
  contact.style.display = "flex";
  contact__nav.style.backgroundColor = "orange";
  home__nav.style.backgroundColor = "transparent";
  about__nav.style.backgroundColor = "transparent";
  services__nav.style.backgroundColor = "transparent";
  portfolio__nav.style.backgroundColor = "transparent";
});
mode.addEventListener("click", () => {
  if (!drak__mode) {
    for (i = 0; i < Sections.length; i++) {
      Sections[i].style.backgroundColor = "#2a2a31";
    }
    nav.style.backgroundColor = "#12121d";
    h1.style.color = "white";
    for (i = 0; i < p.length; i++) {
      p[i].style.color = "white";
    }
    for (i = 0; i < i_tag.length; i++) {
      i_tag[i].style.color = "white";
    }
    for (i = 0; i < h3.length; i++) h3[i].style.color = "white";
    for (i = 0; i < h2.length; i++) h2[i].style.color = "white";
    drak__mode = true;
    p[0].style.color = "white";
    for (i = 0; i < inputs.length; i++) {
      inputs[i].style.color = "white";
    }

    for (i = 0; i < box.length; i++) {
      box[i].style.backgroundColor = "#302e4d";
    }
  } else {
    for (i = 0; i < Sections.length; i++) {
      Sections[i].style.backgroundColor = "#f2f2fc";
    }
    nav.style.backgroundColor = "#fdf9ff";
    h1.style.color = "#302e4d";
    for (i = 0; i < p.length; i++) {
      p[i].style.color = "#302e4d";
    }
    for (i = 0; i < i_tag.length; i++) {
      i_tag[i].style.color = "#302e4d";
    }
    for (i = 0; i < h3.length; i++) h3[i].style.color = "#302e4d";
    for (i = 0; i < h2.length; i++) h2[i].style.color = "#302e4d";
    drak__mode = false;
    p[0].style.color = "white";
    for (i = 0; i < inputs.length; i++) {
      inputs[i].style.color = "#302e4d";
    }
    for (i = 0; i < box.length; i++) {
      box[i].style.backgroundColor = "#fdf9ff";
    }
  }
});
about__text.addEventListener("click", () => {
  about__text.style.display = "none";
});
more.addEventListener("click", () => {
  about__text.style.display = "flex";
});
