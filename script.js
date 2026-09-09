/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
        navLinks.classList.toggle("open");

        const isOpen = navLinks.classList.contains("open");

        menuButton.setAttribute("aria-expanded", isOpen);

        const icon = menuButton.querySelector("i");

        if (isOpen) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }
    });
}


/* =====================================================
   CLOSE MOBILE MENU AFTER CLICKING LINK
===================================================== */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        menuButton.setAttribute("aria-expanded", "false");

        const icon = menuButton.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =====================================================
   TYPING EFFECT
===================================================== */

const typingText = document.getElementById("typingText");

const words = [
    "Cyber Security Enthusiast",
    "Penetration Testing",
    "Web Security",
    "Network Security",
    "Ethical Hacking"
];

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;

        if (characterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1400);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 45 : 80
    );

}

typeEffect();


/* =====================================================
   PARTICLES BACKGROUND
===================================================== */

const particleContainer =
    document.getElementById("particles");

const particleCount =
    window.innerWidth < 600 ? 35 : 75;

for (
    let i = 0;
    i < particleCount;
    i++
) {

    const particle =
        document.createElement("span");

    particle.classList.add("particle");

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.top =
        Math.random() * 100 + "%";

    particle.style.animationDuration =
        5 + Math.random() * 10 + "s";

    particle.style.animationDelay =
        Math.random() * 8 + "s";

    particleContainer.appendChild(particle);

}


/* =====================================================
   MOUSE PARALLAX EFFECT
===================================================== */

document.addEventListener("mousemove", event => {

    if (window.innerWidth < 700) {
        return;
    }

    const x =
        event.clientX /
        window.innerWidth -
        0.5;

    const y =
        event.clientY /
        window.innerHeight -
        0.5;

    const glowOne =
        document.querySelector(".glow-one");

    const glowTwo =
        document.querySelector(".glow-two");

    if (glowOne && glowTwo) {

        glowOne.style.transform =
            `translate(${x * 30}px, ${y * 30}px)`;

        glowTwo.style.transform =
            `translate(${-x * 25}px, ${-y * 25}px)`;

    }

});


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll("section");

const navigationItems =
    document.querySelectorAll(
        ".nav-links a"
    );

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

        if (window.scrollY >= sectionTop) {

            currentSection =
                section.id;

        }

    });

    navigationItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


/* =====================================================
   BACK TO TOP BUTTON
===================================================== */

const topButton =
    document.getElementById("topButton");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});


topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");

contactForm.addEventListener("submit", event => {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    /* Validation */

    if (!name || !email || !message) {

        formMessage.textContent =
            "Please fill in all fields.";

        formMessage.style.display =
            "block";

        return;
    }


    /* Email validation */

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        formMessage.textContent =
            "Please enter a valid email address.";

        formMessage.style.display =
            "block";

        return;
    }


    /* Success message */

    formMessage.textContent =
        `Thank you ${name}! Your message has been received.`;

    formMessage.style.display =
        "block";


    /* Clear form */

    contactForm.reset();

});


/* =====================================================
   SMOOTH SCROLL FOR NAVIGATION
===================================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (event) {

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =====================================================
   PROFILE IMAGE ERROR HANDLER
===================================================== */

const profileImage =
    document.querySelector(".profile-image");

if (profileImage) {

    profileImage.addEventListener("error", () => {

        profileImage.src =
            "https://placehold.co/165x165/10040a/ffffff?text=MH";

    });

}


/* =====================================================
   INITIAL PAGE LOAD
===================================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});