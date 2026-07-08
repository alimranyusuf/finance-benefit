/* ==========================================
   Finance Benefit V1
   script.js
========================================== */

// ==========================
// Current Year in Footer
// ==========================

const yearElement = document.querySelector(".footer p:last-child");

if (yearElement) {
    yearElement.innerHTML = `© ${new Date().getFullYear()} Finance Benefit. All Rights Reserved.`;
}


// ==========================
// Active Navigation on Scroll
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ==========================
// Smooth Button Animation
// ==========================

const buttons = document.querySelectorAll(".btn-primary, .btn-secondary");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-4px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0px)";

    });

});


// ==========================
// Fade-in Cards on Scroll
// ==========================

const cards = document.querySelectorAll(".card, .step, .faq-item");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {
    threshold: 0.15
});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all .8s ease";

    observer.observe(card);

});


// ==========================
// Back To Top Button
// ==========================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.className = "top-btn";

document.body.appendChild(topButton);

topButton.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.style.opacity = "1";
        topButton.style.pointerEvents = "auto";

    } else {

        topButton.style.opacity = "0";
        topButton.style.pointerEvents = "none";

    }

});
