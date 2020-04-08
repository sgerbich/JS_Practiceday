$(".stuff").on("click", "p", function (e){
    console.log(e);
    $(this).css({"background-color":"red"})
})