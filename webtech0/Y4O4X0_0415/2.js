function katIdeBtn() {
    $("#katIdeBtn").each(function(){
        $("p").hide();
    })
}

function elrejtK1() {
    $("ul").each(function() {
        $(this).children("li:lt(2)").hide();
    });
    $("a").hide();
}

function elrejtK2() {
    $("ul").each(function() {
        $(this).children("li:lt(2)").hide();
    });
    $("a, #K2").hide();
}

function elrejtK3(){
    $("ul").each(function(){
        $(this).children("li:lt(2)").hide();
    });
    $("header, a").hide();
}

function elrejtK4(){
    $("ul").each(function(){
        $(this).children("li:lt(2)").hide();
    });
    $("a, #linkszoveg").hide();
}

function elrejtK5(){
    $("ul").each(function(){
        $(this).children("li:lt(2)").hide();
    });
    $("a").hide();
    $("table").each(function(){
        $(this).find("tr:odd").hide();
    });
}