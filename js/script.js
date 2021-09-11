//==============================================================================================================
//Responsive
$(window).resize(function(event){
        adaptiveFunction();
    }
);

function adaptiveHeader(w,h) {
    let menuBody = $('.menu__body');
    let menuList = $('.menu__list');

    if(w<767.98){
        if (!menuList.hasClass('done')) {
            menuList.addClass('done').appendTo(menuBody);
        }
    }
    else{
        if (menuList.hasClass('done')) {
            menuList.removeClass('done').appendTo(menuBody);
        }
    }
}

function adaptiveFunction() {
    let w=$(window).outerWidth();
    let h=$(window).outerHeight();
    adaptiveHeader(w,h);
}
adaptiveFunction();
//==============================================================================================================
//Add classes on itemMenu click
let itemMenu = document.querySelector('.menu__item');
let menuBody = document.querySelector('.menu__body');

if (itemMenu != null) {
    itemMenu.addEventListener("click", function (e) {
        menuBody.classList.toggle('_active');
        document.body.classList.toggle('_lock');
        itemMenu.classList.toggle('_active');
    });
}
//==========================================
//Remove classes on menuLink click
let menuLinks = document.querySelectorAll('._goto-block');

menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick);
});

function onMenuLinkClick() {
    document.body.classList.remove('_lock');
    menuBody.classList.remove('_active');
    itemMenu.classList.remove('_active');
}
//==============================================================================================================
//Slick (regular settings)
@@include('slick.min.js')
//==========================================
//Slick
$(document).ready(function(){
    $('.testimonials-slider__body').slick({
        centerMode: true,
        centerPadding: '330px',
        slidesToShow: 1,
        dots: false,
        responsive: [
            {
                breakpoint: 1460,
                settings: {
                    centerPadding: '0',
                }
            }
        ]
    });
});
//==========================================
$(document).ready(function(){
    $('.blog-slider__body').slick({
        dots: false,
        arrows: false,
        slidesToShow: 3,
        infinite: false,
        responsive: [
            {
                breakpoint: 1460,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1.5,
                }
            },
            {
                breakpoint: 376,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true,
                }
            }
        ]
    });
});
//==========================================
$(document).ready(function(){
    $('.press-slider__body').slick({
        dots: false,
        slidesToShow: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 767.98,
                settings: {
                    slidesToShow: 0.5,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 0,
                    speed: 18000,
                    cssEase: 'linear',
                }
            }
        ]
    });
});