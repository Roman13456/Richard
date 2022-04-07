$( function() {
    $( "#dialog" ).dialog({
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 1000
        },
        hide: {
            effect: "explode",
            duration: 1000
        }
    });

    $( "#opener" ).on( "click", function() {
        $( "#dialog" ).dialog( "open" );
    });
} );


$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:1
            }
        }
    });
});

    $("#nav").addClass("js").before('<div id="menu">&#9776;</div>');
    $("#menu").click(function(){
    $("#nav").toggle();
});
    $(window).resize(function(){
    if(window.innerWidth > 768) {
    $("#nav").removeAttr("style");
}
});


/* Please ❤ this if you like it! */


(function($) { "use strict";

    //Page cursors

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px",
            t.style.top = n.clientY + "px",
            e.style.left = n.clientX + "px",
            e.style.top = n.clientY + "px",
            i.style.left = n.clientX + "px",
            i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }

    //Navigation

    var app = function () {
        var body = undefined;
        var menu = undefined;
        var menuItems = undefined;
        var init = function init() {
            body = document.querySelector('body');
            menu = document.querySelector('.menu-icon');
            menuItems = document.querySelectorAll('.nav__list-item');
            applyListeners();
        };
        var applyListeners = function applyListeners() {
            menu.addEventListener('click', function () {
                return toggleClass(body, 'nav-active');
            });
        };
        var toggleClass = function toggleClass(element, stringClass) {
            if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
        };
        init();
    }();


    //Switch light/dark

    $("#switch").on('click', function () {
        if ($("body").hasClass("light")) {
            $("body").removeClass("light");
            $("#switch").removeClass("switched");
        }
        else {
            $("body").addClass("light");
            $("#switch").addClass("switched");
        }
    });

})(jQuery);
/*SLICK slider*/
$('.slider').slick({
    slidesToShow: 3,
    dots: false,
    centerPadding: '20px',
    speed: 600,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 320,
            settings: {
                dots: false,
                arrows: false,
                slidesToShow: 2,
            }
        },
     {
            breakpoint: 400,
            settings: {
                dots: true,
                arrows: true,
                slidesToShow: 2,
            }
        },
     {
            breakpoint: 720,
            settings: {
                slidesToShow: 2,
                dots: true,
                arrows: true,
            }
        },
     {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                dots: true,
                arrows: true,
            }
        },
     {
            breakpoint: 1025,
            settings: "unslick",
        },
     ]
});

AOS.init();//turn aos anim on
new WOW().init();










