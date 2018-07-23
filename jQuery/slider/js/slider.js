jQuery.fn.extend({
    slider:function (option) {
        var defaultOption = {
            timer:1000,
        }
        var newOption = $.extend({},defaultOption,option);
        var content = $("<div class='slider'></div>");
        var sliderList = '<div class="slider-panner sp-1 active"><div>'+
            '<img src="'+newOption.pic[0]+'" alt=""> </div> </div>'+
            '<div class="slider-panner sp-2"> <div>'+
            '<img src="'+newOption.pic[1]+'" alt=""> </div> </div>'+
            '<div class="slider-panner sp-3"> <div>'+
            '<img src="'+newOption.pic[2]+'" alt=""> </div> </div>';
        /*var sliderBtn = ;*/
        content.html(sliderList/*+sliderBtn*/);
        $(this).append(content);


        var index = 0
        setInterval(function () {
            /*if(index ==3){
                index = 0;
            }
            $(".slider-panner").eq(index).addClass("active").siblings().removeClass("active");
            index++;*/
            run(++index);
            index++;
        },1000)
        function run() {
            if(index >=3){
                index = 0;
            }
            $(".slider-panner").eq(index).addClass("active").siblings(".slider-panner").removeClass("active");
        }
    }
});
