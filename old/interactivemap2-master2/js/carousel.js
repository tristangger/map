/**
 * Created by t.geiger on 21.06.2017.
 */
$(document).ready(function(){
    // Activate Carousel
    $(".myCarousel").carousel({interval: 6000});

    // Enable Carousel Indicators
    $(".item1").click(function(){
        $(".myCarousel").carousel(0);
    });
    $(".item2").click(function(){
        $(".myCarousel").carousel(1);
    });
    $(".item3").click(function(){
        $(".myCarousel").carousel(2);
    });
    $(".item4").click(function(){
        $(".myCarousel").carousel(3);
    });

    // Enable Carousel Controls
    $(".left").click(function(){
        $(".myCarousel").carousel("prev");
    });
    $(".right").click(function(){
        $(".myCarousel").carousel("next");
    });

    $('.carousel-control').click(function (e) {
        e.preventDefault();
    });
});