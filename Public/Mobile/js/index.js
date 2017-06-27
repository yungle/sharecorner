$(function(){
	
	// 消除点击延迟js库
	FastClick.attach(document.body);  





$(".type-a span,.type-b span").click(function(){
    $(this).addClass("select").siblings().removeClass("select");
})


$(".footer dl dd.first").on("click", function(e){
    $(".entrywrap").show();
});

// $(".footer dl dd.first").on("click", function(e){
//     $(".entrywrap").show();

//     $(document).on("click", function(){
//         $(".entrywrap").hide();
//     });

//     e.stopPropagation();
// });


$(".entrywrap").on("click", function(e){
    $(".entrywrap").hide();

});


$(".entrywrap .entry").on("click", function(e){
    e.stopPropagation();
});





})










