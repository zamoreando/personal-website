
//
$().ready(function() {

    var d = new Date();
    var n = d.getFullYear();   
    var text="<p>&copy;Copyright" ;
    var design=". Design by Mariana Fuentes Zamorano.</p>";
    var final = text.concat(' ',n,design);

    $('#copyright').html(final);
});