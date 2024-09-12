let htmlcode = document.getElementById('box').innerHTML;
let link = document.getElementById('linkszoveg').innerHTML;
let jelentkezesGomb = false;
$(document).ready(function() {
    $('#szoveg').click(function() {
        alert('HTML kód...');
    })

    $('#html').click(function() {
        alert(htmlcode);
    })

    $('#ertekbtn').click(function() {

        if(jelentkezesGomb) {
            alert('Jelentkezés');
        }

         let ertek1 = $('#ertekszoveg').val();
        alert(`Név: ${ertek1}`);

      
    })

    $('#jelentkezes').click(function (){
        jelentkezesGomb = true;
    })

   /*  $("#paramGombTerulet").click(function(){
        var terulet = prompt("Kérlek add meg a területet:");
        if (terulet !== null) {
            alert("Terület: " + terulet);
        }
    });

    $("#paramGombID").click(function(){
        var id = prompt("Kérlek add meg az attribútumot (ID):");
        if (id !== null) {
            alert("ID: " + id);
        }
    }); */


    $('#parameter').click(function() {
        alert(link);
    })

    
})