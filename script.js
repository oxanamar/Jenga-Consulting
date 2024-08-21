document.addEventListener("scroll", () => {
  const header = document.querySelector(".header-transparent");
  const logo = document.getElementById("logo");

  if (window.scrollY > 0) {
    header.classList.add("header-green");
    logo.src = "./img/logo-only.png";
    logo.classList.add("scrolled");
  } else {
    header.classList.remove("header-green");
    logo.src = "./img/logonew.png";
    logo.classList.remove("scrolled");
  }
});

// Milestines
(function () {
  // Vertical Timeline - by CodyHouse.co
  function VerticalTimeline(element) {
    this.element = element;
    this.blocks = this.element.getElementsByClassName("cd-timeline__block");
    this.images = this.element.getElementsByClassName("cd-timeline__img");
    this.contents = this.element.getElementsByClassName("cd-timeline__content");
    this.offset = 0.8;
    this.hideBlocks();
  }

  VerticalTimeline.prototype.hideBlocks = function () {
    if (!"classList" in document.documentElement) {
      return; // no animation on older browsers
    }
    //hide timeline blocks which are outside the viewport
    var self = this;
    for (var i = 0; i < this.blocks.length; i++) {
      (function (i) {
        if (
          self.blocks[i].getBoundingClientRect().top >
          window.innerHeight * self.offset
        ) {
          self.images[i].classList.add("cd-timeline__img--hidden");
          self.contents[i].classList.add("cd-timeline__content--hidden");
        }
      })(i);
    }
  };

  VerticalTimeline.prototype.showBlocks = function () {
    if (!"classList" in document.documentElement) {
      return;
    }
    var self = this;
    for (var i = 0; i < this.blocks.length; i++) {
      (function (i) {
        if (
          self.contents[i].classList.contains("cd-timeline__content--hidden") &&
          self.blocks[i].getBoundingClientRect().top <=
            window.innerHeight * self.offset
        ) {
          // add bounce-in animation
          self.images[i].classList.add("cd-timeline__img--bounce-in");
          self.contents[i].classList.add("cd-timeline__content--bounce-in");
          self.images[i].classList.remove("cd-timeline__img--hidden");
          self.contents[i].classList.remove("cd-timeline__content--hidden");
        }
      })(i);
    }
  };

  var verticalTimelines = document.getElementsByClassName("js-cd-timeline"),
    verticalTimelinesArray = [],
    scrolling = false;
  if (verticalTimelines.length > 0) {
    for (var i = 0; i < verticalTimelines.length; i++) {
      (function (i) {
        verticalTimelinesArray.push(new VerticalTimeline(verticalTimelines[i]));
      })(i);
    }

    //show timeline blocks on scrolling
    window.addEventListener("scroll", function (event) {
      if (!scrolling) {
        scrolling = true;
        !window.requestAnimationFrame
          ? setTimeout(checkTimelineScroll, 250)
          : window.requestAnimationFrame(checkTimelineScroll);
      }
    });
  }

  function checkTimelineScroll() {
    verticalTimelinesArray.forEach(function (timeline) {
      timeline.showBlocks();
    });
    scrolling = false;
  }
})();

// Hamburger
document
  .getElementById("hamburger-menu")
  .addEventListener("click", function () {
    const nav = document.getElementById("nav");
    const hamburgerIcon = document.getElementById("hamburger-icon");
    const closeIcon = document.getElementById("close-icon");

    nav.classList.toggle("active");

    //Toggle the icons
    if (nav.classList.contains("active")) {
      hamburgerIcon.style.display = "none";
      closeIcon.style.display = "block";
    } else {
      hamburgerIcon.style.display = "block";
      closeIcon.style.display = "none";
    }
  });

//Close menu after clicking on a link
document.querySelectorAll(".menu a").forEach((link) => {
  link.addEventListener("click", function () {
    document.getElementById("nav").classList.remove("active");

    //Reset icons when menu is closed
    document.getElementById("hamburger-icon").style.display = "block";
    document.getElementById("close-icon").style.display = "none";
  });
});

//Close menu when clicking outside of it
document.addEventListener("click", function (event) {
  const nav = document.getElementById("nav");
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const isClickInsideMenu =
    hamburgerMenu.contains(event.target) || nav.contains(event.target);

  //If the click is outside the menu and the menu is open, close it
  if (!isClickInsideMenu && nav.classList.contains("active")) {
    nav.classList.remove("active");

    //Reset the hamburger icon
    document.getElementById("hamburger-icon").style.display = "block";
    document.getElementById("close-icon").style.display = "none";
  }
});
