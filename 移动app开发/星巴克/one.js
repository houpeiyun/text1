
$("#logo-1").on("click",function () {
    $(".left").css("display","none");
    $(".middle").addClass("action");
    $(".middle-mid").addClass("active");
    $(".right").addClass("right-r");
})
$("#logo-2").on("click",function () {
    $(".left").addClass("action");
    $(".middle-mid").addClass("active-ac");
    /*$(".middle").css("display","none");*/
})