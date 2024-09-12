$(document).ready(function(){
    $("#szamologep").submit(function(event){
        event.preventDefault(); 

        var szam1 = parseInt($("#szam1").val());
        var szam2 = parseInt($("#szam2").val());
        var muvelet = $("input[name='muvelet']:checked").val();
        var eredmeny;

        if (isNaN(szam1) || isNaN(szam2)) {
            $("#eredmeny").text("Kérem adjon meg érvényes számokat!");
            return;
        }

        switch(muvelet) {
            case "osszeadas":
                eredmeny = szam1 + szam2;
                break;
            case "kivonas":
                eredmeny = szam1 - szam2;
                break;
            case "szorzas":
                eredmeny = szam1 * szam2;
                break;
            case "osztas":
                if (szam2 === 0) {
                    $("#eredmeny").text("Nullával nem oszthatunk!");
                    return;
                }
                eredmeny = szam1 / szam2;
                break;
            default:
                $("#eredmeny").text("Kérem válasszon műveletet!");
                return;
        }

        $("#eredmeny").text("Eredmény: " + eredmeny);
    });
});
