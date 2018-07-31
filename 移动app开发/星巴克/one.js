
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
});
var isrun = true;
var index = 0;
var set1 = setInterval(function () {
    if(isrun){
        index++;
        run(index);
    }
},2000)
function run(ii) {
    var change = -ii * $(".first-one img").width();
    var changes = -ii * $(".first-three img").width();
    /*console.log($(".first-three img").width());*/
    $(".right .first-one").css("transition","all 1s ease");
    $(".right .first-one").css("transform","translate3d("+change+"px,0,0)");
    $(".right .first-three").css("transition","all 1s ease");
    $(".right .first-three").css("transform","translate3d("+changes+"px,0,0)");
    if(ii == 4){
        $(".right .first-one").css("transition","");
        $(".right .first-one").css("transform","translate3d(0,0,0)");
        $(".right .first-three").css("transition","");
        $(".right .first-three").css("transform","translate3d(0,0,0)");
        index = 0;
    }
}

$(".first-two").on("click",function () {
    index++;
    run(index);
});
$(".right .first-two").hover(function () {
    $(this).removeClass("active-acti-a")
    $(this).addClass("active-acti")
},function () {
    $(this).removeClass("active-acti")
    $(this).addClass("active-acti-a")
});
$(".five .scroll-arrow-left").hover(function () {
    $(this).css("transition","all 0.5s ease");
    $(this).css("transform","translateX(-8px)")
},function () {
    $(this).css("transition","all 0.5s ease");
    $(this).css("transform","translateX(0px)")
});
$(".five .scroll-arrow-right").hover(function () {
    $(this).css("transition","all 0.5s ease");
    $(this).css("transform","translateX(8px)")
},function () {
    $(this).css("transition","all 0.5s ease");
    $(this).css("transform","translateX(0px)")
});
$(".right .second img").add(".right .four li").add(".five a").hover(function () {
    $(this).removeClass("active-ac-a")
    $(this).addClass("active-ac")
},function () {
    $(this).removeClass("active-ac")
    $(this).addClass("active-ac-a")
});
$(".right .first").hover(function () {
    isrun = false;
},function () {
    isrun = true;
});

var scrollBar = $(".scroll-items")[0];
$(".scroll-arrow-right").on("click",function () {
    itenRun("left");
});
$(".scroll-arrow-left").on("click",function () {
    itenRun("right");
});
function itenRun(dires) {
    /*console.log(dires)*/
    var scrollLeft = dires =="left" ?scrollBar.scrollLeft +300 :scrollBar.scrollLeft-300;
    $(".scroll-items").animate({
        scrollLeft:scrollLeft
    },500);
}
function showArrow() {
    $(".scroll-arrow-left").add(".scroll-arrow-right").show();
    if(scrollBar.scrollLeft<=0){
        $(".scroll-arrow-left").hide();
    }else if(scrollBar.scrollLeft>= scrollBar.scrollWidth-scrollBar.clientWidth){
        $(".scroll-arrow-right").hide();
    }
}
$(".scroll-items").on("scroll",function () {
    if($(this).data("timer")){
        clearTimeout($(this).data("timer"));
    }
    $(this).data("timer",setTimeout(function () {
        showArrow();
    }))
})


