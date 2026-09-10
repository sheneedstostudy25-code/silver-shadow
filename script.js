// ================= MOBILE MENU =================

function toggleMenu() {

    const nav = document.getElementById("navMenu");

    nav.classList.toggle("active");

}


// Close menu after clicking a link

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        document.getElementById("navMenu")
            .classList.remove("active");

    });

});


// ================= BARCODE ANIMATION =================

const barcodeBars =
    document.querySelectorAll(".barcode span");

let scanning = false;

function barcodeScan() {

    if (!scanning) {

        scanning = true;

        barcodeBars.forEach((bar, index) => {

            bar.style.transform = "scaleY(0.5)";

            setTimeout(() => {

                bar.style.transform = "scaleY(1)";

            }, index * 60);

        });

        setTimeout(() => {

            scanning = false;

        }, 1000);

    }

}


// Scan every 4 seconds

setInterval(barcodeScan, 4000);


// ================= SCROLL REVEAL =================

const revealElements = document.querySelectorAll(
    ".service-card, .solution-item, .why-grid > div, .about-content, .about-card, .contact-card"
);


const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


// ================= PHONE CONFIRMATION =================

const phoneLinks = document.querySelectorAll(
    'a[href^="tel:"]'
);

phoneLinks.forEach(link => {

    link.addEventListener("click", () => {

        console.log(
            "Calling Silver Shadow: 077 350 4729"
        );

    });

});
