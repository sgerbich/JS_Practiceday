$(document).ready(function(){ 

$("div").hover(function(){
    $("p").remove();
    $(this).append( $("<p>over</p>"));
}, function(){
    
    // $("p").remove();
    $(this).append( $("<p>out</p>"));
});
});