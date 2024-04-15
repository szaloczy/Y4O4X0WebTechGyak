$(document).ready(() =>{
  
    //Lista két első elemét elrejti
    $("#K1").click(function(){
        $("ul").each(function(){
            $(this).children("li:lt(2)").hide();
        });
        $("a").hide();
    });

    $("#K2").click(function(){
        $("ul").each(function(){
            $(this).children("li:lt(2)").hide();
        });
        $("a, #K2").hide();
    });

    $("#K3").click(function(){
        $("h1, ul").each(function(){
            $(this).hide();
        });
        $("a").hide();
        $("header").hide();
    });

    // K4 gomb: elrejti a lista két első elemét, link szöveget és href-t
    $("#K4").click(function(){
        $("ul").each(function(){
            $(this).children("li:lt(2)").hide();
        });
        $("a").each(function(){
            $(this).text("");
        });
        $("a").hide();
    });
})