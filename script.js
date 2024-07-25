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

  if (window.scrollY > 0) {
    header.classList.add("header-green");
  } else {
    header.classList.remove("header-green");
  }
});
