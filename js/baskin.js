$(document).ready(function(){
var imgs = [];
var sno = 0;
var last = 0;
var swidth = 1345;
 
   $("#main_menu").mouseover(function(){
      $("#menu_drop").css({
         "height":325 
      }); 
   });
    $("#main_menu").mouseleave(function(){
      $("#menu_drop").css({
         "height": 50 
      }); 
   });
    imgs = $("#img_slide img");
    last = imgs.length-1;
    $(imgs[sno]).siblings("img").css({"left" : -swidth});

function next(){
    $(imgs[sno]).siblings("img").css({"left" : -swidth});
    $(imgs[sno]).animate({
        "left" : swidth
    },1000,function(){
        $(this).css({"left" : -swidth});
    });
    sno++;
    if(sno>last) sno=0;
    $(imgs[sno]).animate({
        "left" : 0
    },1000);
}
function prev(){
    $(imgs[sno]).siblings("img").css({"left" : swidth});
    $(imgs[sno]).animate({
        "left" : -swidth
    },1000,function(){
        $(this).css({"left" : swidth});
    });
    sno--;
    if(sno<0) sno=last;
    $(imgs[sno]).animate({
        "left" : 0
    },1000);
}
var slide = setInterval(next,5000);
    
    $(".circle ul li").eq(1).on("click",function(){
        $(".event_img > li").eq(0).stop().animate({"left":"-1200px"});
        $(".event_img > li").eq(1).stop().animate({"left":"-1200px"});
        $(".circle ul li").eq(1).css({"background-color":"#ffd8f3"});
        $(".circle ul li").eq(0).css({"background-color":"#301d17"});
    });
    $(".circle ul li").eq(0).on("click",function(){
        $(".event_img > li").eq(0).stop().animate({"left":"0px"});
        $(".event_img > li").eq(1).stop().animate({"left":"1200px"});
         $(".circle ul li").eq(0).css({"background-color":"#ffd8f3"});
        $(".circle ul li").eq(1).css({"background-color":"#301d17"});
    });
});