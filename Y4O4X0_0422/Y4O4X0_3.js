$(document).ready(function(){
    $("#adSzoveg").click(function(){
        $("#box").text("Mérnökinformatikus");
    });

    $("#gomb").click(function(){
        $("#box").text("PTI Gomb");
    });

    $("#ujgomb").click(function(){
        $("#linkszoveg").after("<button>ME GEIK-PTI</button>");
    });

    $("#ujfejlec").click(function(){
        $("body").prepend("<h1>JQuery feladat</h1>");
    });

    $("#ujalcim").click(function(){
        $("#adSzoveg").before("<h4>HTML -Add elements</h4>");
    });

    $("#ujurlapfejlec").click(function(){
        $("form").prepend("<h2>ŰRLAP-Y4O4X0</h2>");
    });
});
