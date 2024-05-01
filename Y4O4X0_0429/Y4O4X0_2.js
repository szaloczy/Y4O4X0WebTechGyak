$(document).ready(function() {
    $('#megjelenit').click(function() {
        $.getJSON("Y4O4X0_orarend.json", function(data) {
            let orarendHTML = "<h2>Órarend</h2><table><thead><tr><th>Kurzusnév</th><th>Időpont</th><th>Helyszín</th><th>Oktató</th></tr></thead><tbody>";
            $.each(data["SZK orarend"].kurzus, function(key, kurzus) {
                orarendHTML += "<tr><td>" + kurzus.kurzusnev + "</td><td>" + kurzus.idopont.nap + " " + kurzus.idopont.tol + ":00 - " + kurzus.idopont.ig + ":00</td><td>" + kurzus.helyszin + "</td><td>" + kurzus.oktato + "</td></tr>";
            });

            
            orarendHTML += "</tbody></table>";
            $("#orarend").html(orarendHTML);

            let cimHTML = "<h2>Cím</h2><p>" + data.cim.street + ", " + data.cim.city + " " + data.cim.code + "</p>";
            $("#cim").html(cimHTML);

            let telefonHTML = "<h2>Telefonszámok</h2><ul>";
            $.each(data["phone number"], function(key, number) {
                telefonHTML += "<li>" + number.type + ": " + number.number + "</li>";
            });

            telefonHTML += "</ul>";
            $("#telefon").html(telefonHTML);
        });
}) 
});