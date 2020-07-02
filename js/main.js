$(document).ready(function(){
    "use strict";

    // header slider 
    $(".slider").slick({
        autoplay:true,
        autoplaySpeed:5000,
        dots:false,
        arrows:true,
        prevArrow:"<button type='button' class='slick-prev'><i class='fa fa-chevron-left'></i></button>",
        nextArrow:"<button type='button' class='slick-next'><i class='fa fa-chevron-right'></i></button>",
        responsive:[
            {breakpoint:767, setting: {dots: false, arrows:false}}
        ]
    });

    // Testimonail Slider 
    $(".testi-slider").slick({
        autoplay:true,
        autoplaySpeed:5000,
        dots:false,
        arrows:false,
        responsive:[
            {breakpoint:767, setting: {dots: false, arrows:false}}
        ]
    });

})