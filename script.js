document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

document.addEventListener("scroll", () => {
  const header = document.querySelector(".header-transparent");

  if (window.scrollY > 0) {
    header.classList.add("header-gray");
  } else {
    header.classList.remove("header-gray");
  }
});
