// const locomotiveScroll = new LocomotiveScroll({
//   el: document.querySelector('.main'),
//   smooth: true
// });



let ki = document.querySelector(".elements-container");
let fix = document.querySelector("#fixed-img")
ki.addEventListener("mouseenter", () => {
    fix.style.display = "block";
})

ki.addEventListener("mouseleave", () => {
    fix.style.display = "none";
})

let elem = document.querySelectorAll(".elements");
elem.forEach((e) => {
    e.addEventListener("mouseenter", () => {
        let image = e.getAttribute("data-image")
        fix.style.backgroundImage = `url(${image})`
    })
})

var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });