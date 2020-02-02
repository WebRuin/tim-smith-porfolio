const toggle = document.querySelector(".toggle");
const body = document.querySelector(".body");
const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");

const today = new Date().getHours();

if (today >= 6 && today <= 19) {
} else {
  body.classList.toggle("dark");
  toggle.classList.toggle("dark-moon");
  moon.classList.toggle("hide");
  sun.classList.toggle("hide");
}

toggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  toggle.classList.toggle("dark-moon");
  moon.classList.toggle("hide");
  sun.classList.toggle("hide");
});
