// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();

//     document.querySelector(this.getAttribute("href")).scrollIntoView({
//       behavior: "smooth",
//     });
//   });
// });

document.addEventListener("scroll", () => {
  const header = document.querySelector(".header-transparent");
  const logo = document.getElementById("logo");

  if (window.scrollY > 0) {
    header.classList.add("header-green");
    logo.src = "./img/logo-only.png";
    logo.classList.add("scrolled");
  } else {
    header.classList.remove("header-green");
    logo.src = "./img/logo-words.png";
    logo.classList.remove("scrolled");
  }
});
