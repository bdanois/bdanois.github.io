$(document).ready(function(){
   $(window).scroll(function(){
        $(".header").css("opacity", 1 - $(window).scrollTop() / 500);
        $(".intro-header").css("opacity", 1 - $(window).scrollTop() / 1500);
       $(".interactive-nav").css("opacity", 0 + $(window).scrollTop() / 1500);
    });
});