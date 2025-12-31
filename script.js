const preloader = document.querySelector("[data-preload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});




const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);


const header = document.querySelector("[data-header]")
const backTopBtn = document.querySelector("[data-back-top-btn]")

let lastScrollPos = 0
const hideHeader = function () {
  const isScrollBottom = lastScrollPos < window.scrollY
  if (isScrollBottom) {
    header.classList.add("hide")
  }
  else {
    header.classList.remove("hide")
  }

  lastScrollPos = window.scrollY
}


window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    header.classList.add("active")
    backTopBtn.classList.add("active")
    hideHeader()
  }
  else {
    header.classList.remove("active")
    backTopBtn.classList.remove("active")
  }
})






const heroSlider = document.querySelector("[ data-hero-slider]")
const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]")
const heroSliderPrevBtn = document.querySelector("[data-prev-btn]")
const heroSolierNextBtn = document.querySelector("[data-next-btn]")


let currentSliderPos = 0
let lastActiveSLiderItem = heroSliderItems[0]

const updateSliderPos = function () {
  lastActiveSLiderItem.classList.remove("active")
  heroSliderItems[currentSliderPos].classList.add("active")
  lastActiveSLiderItem = heroSliderItems[currentSliderPos]
}

const sliderNext = function () {
  if (currentSliderPos >= heroSliderItems.length - 1) {
    currentSliderPos = 0
  }
  else {
    currentSliderPos++
  }

  updateSliderPos()
}

heroSolierNextBtn.addEventListener("click", sliderNext)

const sliderPrev = function () {
  if (currentSliderPos <= 0) {
    currentSliderPos = heroSliderItems.length - 1
  }
  else {
    currentSliderPos--
  }

  updateSliderPos()
}
heroSliderPrevBtn.addEventListener("click", sliderPrev)



let autoSliderInterval;
const autoSlide = function () {
  autoSliderInterval = setInterval(function () {
    sliderNext()
  }, 7000)
}

addEventOnElements([heroSolierNextBtn, heroSliderPrevBtn], "mouseover", function () {
  clearInterval(autoSliderInterval)
})

addEventOnElements([heroSolierNextBtn, heroSliderPrevBtn], "mouseout", autoSlide)

window.addEventListener("load", autoSlide)








const parallaxItems = document.querySelectorAll("[ data-parallax-item]")



let x, y;

window.addEventListener("mousemove", function (event) {
  x = (event.clientX / window.innerWidth * 10) - 5
  y = (event.clientY / window.innerHeight * 10) - 5



  x = x - (x * 2)
  y = y - (y * 2)

  for (let i = 0, len = parallaxItems.length; i < len; i++) {
    x = x * Number(parallaxItems[i].dataset.parallaxSpeed)
    y = y * Number(parallaxItems[i].dataset.parallaxSpeed)
    parallaxItems[i].style.transform = `translate3d(${x}px , ${y}px, 0px)`
  }
})




