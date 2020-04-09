$(document).ready(function(){ 

$("div").mouseover(function(){
    // $("p").remove();
    $(this).find(".words").text("over");
}) .mouseout(function(){
    
    // $("p").remove();
    $(this).find(".words").text("out");
});
});
