$(document).ready(function() {
    $('#megjelenit').click(function() {
       
        $.getJSON('SZK_orarend1obj.json', function(data) {
            $('#orarend').html('<h2>MISKOLCI EGYETEM</h2>');

            $('#orarend').append('<p><b>Cím:</b> ' + data.cim.code + ' ' + data.cim.city + ' ' + data.cim.street + '</p>');


            $('#orarend').append('<h3>Telefonszámok</h3>');
            $('#orarend').append('<ul>');
            $.each(data["phone number"], function(key, number) {
                $('#orarend').append('<li>' + number.type + ': ' + number.number + '</li>');
            });
            $('#orarend').append('</ul>');

            $('#orarend').append('<h3>MI Órarend 2024 tavasz - részlet</h3>');

            $('#orarend').append('<p><b>Kurzusnév:</b> ' + data.kurzusnev + '</p>');
            $('#orarend').append('<p><b>Oktató:</b> ' + data.oktato + '</p>');
            $('#orarend').append('<p><b>Szak:</b> ' + data.szak + '</p>');
            $('#orarend').append('<p><b>Időpont:</b> <br>' +'Nap:'+ data.idopont.nap + ' <br> Tól:' + data.idopont.tol + ' <br> Ig:' + data.idopont.ig + '</p>');
            $('#orarend').append('<p><b>Helyszín:</b> ' + data.helyszin + '</p>');
        });
    });
});
