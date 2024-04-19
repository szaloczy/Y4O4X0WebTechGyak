const video = document.getElementById("intro");
const  button = document.getElementById("toggleBtn");
const pauseIcon = document.getElementById("pauseIcon");
const playIcon = document.getElementById("playIcon");

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
    event.preventDefault(); // Megakadályozza a videó leállítását a kattintással
});

$(document).ready(function() {

   

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

    // Form validation
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
            // Create JSON object
            let userData = {
                name: name,
                email: email
            };

            // Convert JSON object to string
            let jsonData = JSON.stringify(userData);

            // Display result
            $('#result').text(jsonData);

            // AJAX call to save JSON data
            $.ajax({
                url: 'data.json',
                type: 'POST',
                contentType: 'application/json',
                data: jsonData,
                success: function(response) {
                    console.log('Data saved successfully:', response);
                },
                error: function(xhr, status, error) {
                    console.error('Error saving data:', error);
                }
            });
        }
    });

    // AJAX call to load JSON data
    $.ajax({
        url: 'data.json',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            console.log('Data loaded successfully:', data);
            // Display loaded data on the page
            $('#loadedData').text(JSON.stringify(data));
        },
        error: function(xhr, status, error) {
            console.error('Error loading data:', error);
        }
    });
});

// Function to validate email format
function isValidEmail(email) {
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

