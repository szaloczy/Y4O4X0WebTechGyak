$(document).ready(function() {
    $('#megjelenit').click(function() {
        $.getJSON('SZK_orarend.json', function(data) {
            $('#orarend').html('<h2>MISKOLCI EGYETEM</h2>');
           
            
            $.each(data, function(index, kurzus) {

                $('#orarend').append('<h3>Telefonszámok</h3>');
                $('#orarend').append('<ul>');
                $.each(kurzus["phone number"], function(key, number) {
                    $('#orarend').append('<li>' + number.type + ': ' + number.number + '</li>');
                });
                $('#orarend').append('</ul>');

                $('#orarend').append('<div class="kurzus">');
                $('#orarend').append('<p><b>Kurzusnév:</b> ' + kurzus.kurzusnev + '</p>');
                $('#orarend').append('<p><b>Oktató:</b> ' + kurzus.oktato + '</p>');
                $('#orarend').append('<p><b>Szak:</b> ' + kurzus.szak + '</p>');
                $('#orarend').append('<p><b>Időpont:</b> <br>' +'Nap:'+ kurzus.idopont.nap + ' <br> Tól:' + kurzus.idopont.tol + ' <br> Ig:' + kurzus.idopont.ig + '</p>');
                $('#orarend').append('<p><b>Helyszín:</b> ' + kurzus.helyszin + '</p>');

               

                $('#orarend').append('</div>');
            });
        });
    });
});
