const slides = document.querySelectorAll(".slides img");
const box = document.querySelector(".slides");
let slideIndex = 0;
let intervalId = null;
let models = [];

/* const models = [
    {
        id: 1,
        title: "Rolex - submariner",
        release: 1954,
        img: "/assets/rolex1.png",
        description: "The first Submariner was introduced to the public in 1954 at the Basel Watch Fair. It was the first watch to be waterproof up to 100 metres (330 ft). The Rolex Submariner is considered a classic among wristwatches, manufactured by one of the most widely recognized luxury brands in the world."
    },
    {
        id: 2,
        title: "Rolex - GMT Master 2",
        release: 2007,
        img: "/assets/rolex2.png",
        description: "Leiden, The Netherlands - October 11, 2007: Product shot of a Rolex GMT Master 2 wristwatch for men on white background. This watch has a gold case, a gold strap and is water resistant up to 30 meters."
    },
    {
        id: 3,
        title: "Rolex - submariner - Sea - Dweller",
        release: 2001,
        img: "/assets/rolex3.png",
        description: "Gold is coveted for its lustre and nobility. Steel reinforces strength and reliability. Together, they harmoniously combine the best of their properties A true Rolex signature, Rolesor has featured on Rolex models since the early 1930s, and was trademarked as a name in 1933. It is one of the prominent pillars of the Oyster collection."
    },
] */

$(document).ready(function() {

    $('.menu-item').mouseenter(function() {
        $(this).stop().animate({ fontSize: '24px' }, 200); // Betűméret növelése animációval az egér fölé kerüléskor
    }).mouseleave(function() {
        $(this).stop().animate({ fontSize: '18px' }, 200); // Betűméret visszaállítása animációval az egér elhagyásakor
    });

        $('.rolex-img-banner img').mouseenter(function() {
            $(this).stop().animate({ opacity: 0.7 }, 300); 
        }).mouseleave(function() {
            $(this).stop().animate({ opacity: 1 }, 300); 
        });

    $.ajax({
        url: "model.json", 
        dataType: "json",
        success: function(data) {
            models = data.models;
        },
        error: function(xhr, status, error) {
            console.error("AJAX hiba:", status, error);
        }
    });
});

let choosenModel = models[0];

const currentModelImg = document.querySelector(".model-img");
const currentModelTitle = document.querySelector(".model-title");
const currentRelease = document.querySelector(".model-release");
const currentDescription = document.querySelector(".model-description");

slides.forEach((item, index) => {
    item.addEventListener("click", () => {
        choosenModel = models[index];

        currentModelTitle.textContent = choosenModel.title;
        currentRelease.textContent = choosenModel.release;
        currentModelImg.src = choosenModel.img;
        currentDescription.textContent = choosenModel.description;
    });
});

initializeSlider();
document.addEventListener("DOMContentLoaded",initializeSlider);
function initializeSlider(){
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 8000);
    }
}

function showSlide(index) {

    if (index >= slides.length) {
         slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}
