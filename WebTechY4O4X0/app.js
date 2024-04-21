const video = document.getElementById("intro");
const  button = document.getElementById("toggleBtn");
const pauseIcon = document.getElementById("pauseIcon");
const playIcon = document.getElementById("playIcon");

document.addEventListener('DOMContentLoaded', function(){
    let form = document.getElementById('popup-form');
    let displayData = document.getElementById("displayData");

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let bornDate = document.getElementById('dateOB').value;
        let gender = document.querySelector('input[name="gender"]:checked').value;

        const dataList = document.querySelector('#watch');
        const options = dataList.querySelectorAll('option');
        let favouriteWatches = [];
        options.forEach(option => {
            favouriteWatches.push(option.value);
        });

        const messageInput = document.querySelector('#message');
        const message = messageInput.value;

        let datasDiv = document.createElement('div');
        datasDiv.innerHTML = '<h3>Your Experiences</h3>'+
                             '<p><strong>Name:</strong> ' + name + '</p>'+
                             '<p><strong>E-mail:</strong> ' + email + '</p>' +
                             '<p><strong>Born date:</strong> ' + bornDate + '</p>' + 
                             '<p><strong>Gender:</strong> ' + gender + '</p>' + 
                             '<p><strong>Favourite watch:</strong> ' + favouriteWatches[0] + '</p>' +
                             '<p><strong>Message:</strong> ' + message + '</p>';
        displayData.appendChild(datasDiv);

        form.style.display='none';
    });
});
function toggleVideo(){
    if (video.paused) {
        video.play();
        playIcon.style.display = "none";
        pauseIcon.style.display = "inline-block";
    } else {
        video.pause();
        playIcon.style.display = "inline-block";
        pauseIcon.style.display = "none";
    }
}

video.addEventListener("click", event => {
    event.preventDefault(); 
});

$(document).ready(function() {

     $('#satisfaction').on('input', function() {
        $('#satisfactionValue').text($(this).val());
    });

    $('.menu-item').mouseenter(function() {
        $(this).stop().animate({ fontSize: '24px' }, 200);
    }).mouseleave(function() {
        $(this).stop().animate({ fontSize: '18px' }, 200); 
    });

    $("#formBtn").click(function() {
        $("#popup-form").fadeIn();
    });

    $(document).mouseup(function(e) {
        let container = $("#popup-form");

        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.fadeOut();
        }
    });

    $("#formBtn").click(function(){
        $(this).animate({opacity: '0.5'}, 'slow').animate({opacity: '1'}, 'slow');
    })

    $('#popup-form').submit(function(e) {
        e.preventDefault();
        $('#error').empty();
        let name = $('#name').val();
        let email = $('#email').val();

        if (name === '') {
            $('#name').css('border', '1px solid red');
            $('#error').text('Name is required');
        } else {
            $('#name').css('border', '1px solid #ccc');
        }

        if (email === '') {
            $('#email').css('border', '1px solid red');
            $('#error').text('Email is required');
        } else if (!isValidEmail(email)) {
            $('#email').css('border', '1px solid red');
            $('#error').text('Invalid email format');
        } else {
            $('#email').css('border', '1px solid #ccc');
        }

        if (name !== '' && isValidEmail(email)) {
            let userData = {
                name: name,
                email: email
            };

            let jsonData = JSON.stringify(userData);

            $('#result').text(jsonData);
        }
    });

    $('.banner').mouseenter(function(){
        $('.banner.text').css('opacity',0.1);
    })
});

function isValidEmail(email) {
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}
