

            //-----------SCROLL FEATURE
$(document).ready(function(){

    var typed = new Typed('.element', {
        strings: ["Welcome to my interactive resume.", "Scroll to continue."],
        typeSpeed: 40
      });

    $(window).scroll(function(){
        $(".header").css("opacity", 1 - $(window).scrollTop() / 500);
        $(".interactive-nav").css("opacity", 0 + $(window).scrollTop() / 1500);
    });
    $(".button-1").click(function(){
        $("#step-1").slideToggle();
    });

    $(".button-2").click(function(){
        $("#step-2").slideToggle();
    });

    $(".button-3").click(function(){
        $("#step-3").slideToggle();
    });

    $(".button-4").click(function(){
        $("#step-4").slideToggle();
    });

    $(".button-5").click(function(){
        $("#step-5").slideToggle();
    });

    $(".button-6").click(function(){
        $("#step-6").slideToggle();
    });
    $(".button-7").click(function(){
        $("#step-7").slideToggle();
    });
});