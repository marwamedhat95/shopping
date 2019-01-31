/*global $, alert, console*/

$(function () {
   
    'use strict';
    

        
 
    
    // Links Add Active Class
    
    $('.nnav li a').click(function () {
       
        $(this).parent().addClass('active').siblings().removeClass('active');
        
    });
         //ScrOll NavBar
        $(".nnav li a").click(function(){
            $("html, body").animate({
                scrollTop: $("#"+ $(this).data("value")).offset().top 
                
            },1000 );
        });
    
          //Tabs
            var tabTitles = ["RENT A CAR","Hire limousine"," Become Partners"];

$(".tabHeader").click(function(){
    $(".tabHeader").removeClass("active1");
    var position = $(this).position();
    var top = position.top;
    $(".active1").css("top",top);  
    $(this).addClass("active1");
    var text = $(this).text().trim();
    switch(text) {
        case "Rent a Car":
            $(".tabTitle").text(tabTitles[0]);
            break;
        case 'Hire limousine':
            $(".tabTitle").text(tabTitles[1]);
            break;
        case 'Become Partners':
            $(".tabTitle").text(tabTitles[2]);
            break;
    
    }
});
    
     // change color 
        var colorLi= $(".color-option ul li")
    $('.gear-check').click(function()
    {
     $('.color-option').fadeToggle();
      });
        colorLi
        .eq(0).css("backgroundColor"," #00021e").end()
        .eq(1).css("backgroundColor"," #9c0404").end()
         .eq(2).css("backgroundColor"," #800c7c").end()
         .eq(3).css("backgroundColor"," #478386").end()
         .eq(4).css("backgroundColor"," #115d1a");
        
        colorLi.click(function(){
                $("link[href*='theme']").attr("href",$(this).attr("data-value"));
            });
                     
      
     
         // Social plus button function
       
    
    // Social plus button function
    $('.plus-button').click(function(){
        $(this).toggleClass('open');
        $('.social-button').toggleClass('active');
    });
    
    
   
          
         // slider swiper
    var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    }); 
   });