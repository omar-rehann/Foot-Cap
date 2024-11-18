let menu = document.querySelector(".fa-bars-staggered");
let alllinks = document.querySelector(".nav");
let up = document.querySelector(".up");

menu.onclick = function() {
    alllinks.classList.toggle("active");
    if (alllinks.classList.contains("active")) {
        menu.classList.add("fa-x");
        menu.classList.remove("fa-bars-staggered");
    } else {
        menu.classList.add("fa-bars-staggered");
        menu.classList.remove("fa-x");
    }
}
window.onscroll = function() {
    if (this.scrollY >= 400) {
        up.classList.add("active");
    } else {
        up.classList.remove("active");

    }
    let links = document.querySelectorAll(".same");
    let sections = document.querySelectorAll(".section")
    sections.forEach((section, index) => {
        let information = section.getBoundingClientRect()
        if (information.top <= window.innerHeight / 2 && information.bottom >= window.innerHeight / 2) {
            links.forEach((e) => {
                e.classList.remove("active")
            })
            links[index].classList.add("active")
        }

    })
}
up.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
}
const sr = ScrollReveal({
    distance: "60px",
    duration: 2500,
    delay: 400,
    reset: true
})
sr.reveal(".landing", { delay: 100, origin: "left" })
sr.reveal(".about", { delay: 100, origin: "left" })
sr.reveal(".product", { delay: 100, origin: "left" })
sr.reveal(".slides", { delay: 100, origin: "left" })
sr.reveal(".contact", { delay: 100, origin: "left" })
sr.reveal(".footer ", { delay: 100, origin: "left" })