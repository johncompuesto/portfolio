document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("loaded");
});

const scroller = new LocomotiveScroll({
el: document.querySelector('[data-scroll-container]'),
smooth: true
});

document.addEventListener('mousemove', function (event) {
const glowingOrb = document.getElementById('glowingOrb');
const { clientX, clientY } = event;

glowingOrb.style.left = `${clientX}px`;
glowingOrb.style.top = `${clientY}px`;
});

document.addEventListener('DOMContentLoaded', function () {
const glowingOrb = document.getElementById('glowingOrb');
glowingOrb.style.left = `${window.innerWidth / 2}px`;
glowingOrb.style.top = `${window.innerHeight / 2}px`;
});

// New code for navbar opacity
window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  var scrolled = window.scrollY > 0;

  // Adjust the opacity based on the scroll position
  navbar.style.opacity = scrolled ? "0.8" : "1";
});
