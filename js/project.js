// header
window.addEventListener("scroll", function () {
  let header = this.document.querySelector("nav");
  header.classList.toggle("active", this.window.scrollY > 0);
});
// menu btn
let nemuBtn = document.querySelector(".menu-btn");
let navList = document.querySelector(".navbav .menu");
let closeBtn = document.querySelector(".menu-btn i");
nemuBtn.addEventListener("click", () => {
  navList.classList.toggle("active");
  closeBtn.classList.toggle("active");
});
// scroll to top
let scrollTop = document.querySelector(".scroll-top-btn");
window.addEventListener("scroll", function () {
  scrollTop.classList.toggle("active", this.window.scrollY > 500);
});
scrollTop.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// slicing
//
// scroll revel
ScrollReveal({
  reset: true,
  distance: "50px",
  duration: 2500,
  delay: 100,
});
ScrollReveal().reveal(".home .text-1 ", {
  delay: 100,
  origin: "bottom",
  interval: 200,
});
ScrollReveal().reveal(".home .text-2 ", {
  delay: 100,
  origin: "bottom",
  interval: 200,
});
ScrollReveal().reveal(".home .text-3 ", {
  delay: 100,
  origin: "bottom",
  interval: 200,
});
// about
ScrollReveal().reveal(".heading-center h2 ", {
  delay: 100,
  origin: "bottom",
  interval: 200,
});
ScrollReveal().reveal(".heading-center span ", {
  delay: 100,
  origin: "bottom",
  interval: 200,
});
ScrollReveal().reveal(".about-img img ", {
  delay: 100,
  origin: "top",
  interval: 200,
});
ScrollReveal().reveal(".about-content h2 ", {
  delay: 100,
  origin: "bottom",
  interval: 200,
});
ScrollReveal().reveal(".about-content p ", {
  delay: 100,
  origin: "bottom",
  interval: 200,
});
ScrollReveal().reveal(".allbtn ", {
  delay: 100,
  origin: "bottom",
  interval: 200,
});
// service
ScrollReveal().reveal(".row ", { delay: 100, origin: "bottom", interval: 200 });
// skills
ScrollReveal().reveal(".contaner-skills .left h2 ", {
  delay: 100,
  origin: "bottom",
  interval: 200,
});
ScrollReveal().reveal(".contaner-skills .left p", {
  delay: 100,
  origin: "bottom",
  interval: 200,
});
ScrollReveal().reveal(".row-skills ", {
  delay: 100,
  origin: "bottom",
  interval: 200,
});
// teams
ScrollReveal().reveal(".contaner-teams .card ", {
  delay: 100,
  origin: "bottom",
  interval: 200,
});

// contact left
ScrollReveal().reveal(" .content-contact .left h2 ", {
  delay: 100,
  origin: "bottom",
  interval: 200,
});
ScrollReveal().reveal(" .content-contact .left p ", {
  delay: 100,
  origin: "bottom",
  interval: 200,
});
// contact right
ScrollReveal().reveal(" .content-contact .left h2 ", {
  delay: 100,
  origin: "bottom",
  interval: 200,
});
ScrollReveal().reveal("  .content-contact .right form .filed  ", {
  delay: 100,
  origin: "bottom",
  interval: 200,
});
ScrollReveal().reveal("  .content-contact .right form .bytton  ", {
  delay: 100,
  origin: "bottom",
  interval: 200,
});
