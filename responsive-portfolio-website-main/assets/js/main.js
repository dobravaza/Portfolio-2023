const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navItem = document.querySelectorAll(".nav__item");
const header = document.getElementById("header");


navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav__menu--open");
  changeIcon();
});


navItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (navMenu.classList.contains("nav__menu--open")) {
      navMenu.classList.remove("nav__menu--open");
      changeIcon();
    }
  });
});

function changeIcon() {
  if (navMenu.classList.contains("nav__menu--open")) {
    navToggle.classList.replace("ri-menu-3-line", "ri-close-line");
  } else {
    navToggle.classList.replace("ri-close-line", "ri-menu-3-line");
  }
}



window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("header--scroll");
  } else {
    header.classList.remove("header--scroll");
  }
});

// Animacje ScrollReveal
const sr = ScrollReveal({
  duration: 700, 
  distance: "50px", 
  delay: 150, 
  reset: false,
});

sr.reveal(".hero__content, .about__content");
sr.reveal(".hero__img", { origin: "top" });

sr.reveal(
  ".hero__info-wrapper, .skills__title, .skills__content, .qualification__name, .qualification__item, .service__card, .project__content, .testimonial__wrapper, .footer__content",
  {
    delay: 300, // Skrócenie opóźnienia animacji
    interval: 70, 
  }
);

sr.reveal(".qualification__footer-text, .contact__content", {
  origin: "left",
});

sr.reveal(".qualification__footer .btn, .contact__btn", { origin: "right" });
