const slides = document.querySelectorAll(".slides img");
const box = document.querySelector(".slides");
let slideIndex = 0;
let intervalId = null;
let models = [];

$(document).ready(function() {

    $('.menu-item').mouseenter(function() {
        $(this).stop().animate({ fontSize: '24px' }, 200); 
    }).mouseleave(function() {
        $(this).stop().animate({ fontSize: '18px' }, 200);
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
        currentDescription.textContent = choosenModel.description;
        currentModelImg.src = choosenModel.img;
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
    clearInterval(intervalId);
    slideIndex++;
    showSlide(slideIndex);
}
