$(document).ready(function() {
    $('#megjelenit').click(function() {
       
        $.getJSON('Y4O4X0_orarend1obj.json', function(data) {
            $('#orarend').html('<h2>Órarend</h2>');

            $('#orarend').append('<p><b>Kurzusnév:</b> ' + data.kurzusnev + '</p>');
            $('#orarend').append('<p><b>Oktató:</b> ' + data.oktato + '</p>');
            $('#orarend').append('<p><b>Szak:</b> ' + data.szak + '</p>');
            $('#orarend').append('<p><b>Időpont:</b> ' + data.idopont.nap + ' ' + data.idopont.tol + ' - ' + data.idopont.ig + '</p>');
            $('#orarend').append('<p><b>Helyszín:</b> ' + data.helyszin + '</p>');

            $('#orarend').append('<h2>Cím</h2>');
            $('#orarend').append('<p><b>Cím:</b> ' + data.cim.code + ' ' + data.cim.city + ' ' + data.cim.street + '</p>');

            $('#orarend').append('<h2>Telefonszámok</h2>');
            $('#orarend').append('<ul>');
            $.each(data["phone number"], function(key, number) {
                $('#orarend').append('<li>' + number.type + ': ' + number.number + '</li>');
            });
            $('#orarend').append('</ul>');
        });
    });
});
