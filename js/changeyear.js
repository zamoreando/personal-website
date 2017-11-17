
//
$().ready(function() {

    var d = new Date();
    var n = d.getFullYear();   
    var text="&copy;Copyright" ;
    var design=". Design by Mariana Fuentes Zamorano.";
    var final = text.concat(' ',n,design);

    $('#copyright').html(final);
});