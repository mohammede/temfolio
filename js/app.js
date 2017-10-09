$(function () {
    "use strict";
    var primaryColor = "#16a085";
    /*------ end change color pattern ------*/
    /*------ start site header ------*/
    var header = $("#site-header");
    header.css('height', $(window).height() + "px");
    header.find('.slider-inner').css({
        'height': $(window).height() / 2 + "px"
    });
    $(window).bind('resize', function () {
        $("#site-header").css('height', $(window).height() + "px");
        header.find('.slider-inner').css({
            'height': $(window).height() / 2 + "px"
        });
    });
    /*------ end site header ------*/

    /*------ start trigger plugins ------*/
    $("#site-logos .owl-carousel").owlCarousel({
        loop: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            720: {
                items: 5
            },
            992: {
                items: 6
            }
        },
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: false,
        dots: false
    });
    $("#site-testimonials .owl-carousel").owlCarousel({
        loop: true,
        items: 1,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        dots: true
    });
    $("#site-header").find(".owl-carousel").owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:2000,
        mouseDrag: false,
        dots:false,
        autoplayHoverPause: false,
        margin:0,
        items:1,
        animateOut: 'slideOutUp',
        animateIn: 'slideInUp'
    });
    var mixer = mixitup(".mixitup");
    /*------ end trigger plugins ------*/
    $(window).scroll(function () {
        if ($(window).scrollTop() > $("#site-about").offset().top - $("#site-nav").height()) {
            $("#site-nav").addClass("fixed-top");
        } else {
            $("#site-nav").removeClass("fixed-top");
        }
    });
    $("#site-header").find('.btn-secondary').on("click",function () {
        $("html,body").animate({
            scrollTop: $("#site-about").offset().top - 250 + 'px'
        }, {
            duration: 1200,
            easing: "easeInOutExpo"
        });
    });
    $(".navbar li").on("click", function (event) {
        var headerHeight = $('#site-nav').outerHeight();
        $("html,body").animate({
            scrollTop: $($(this).find('a').attr("href")).offset().top -60 + 'px'
        }, {
            duration: 1200,
            easing: "easeInOutExpo"
        });
    });
    $(".portfolio-nav a").on("click", function (e) {
        e.preventDefault();
        $(".portfolio-nav a").removeClass("active");
        $(this).addClass("active");
    });

    $("#site-skills").waypoint(function () {
        var progress = $(".progress-bar");
        var tooltip = $(".tooltip");
        if (progress.width() === 0) {
            progress.each(function () {
                $(this).animate({
                    width: $(this).attr('aria-valuenow') + '%'
                }, 'slow');
            });
            tooltip.each(function () {
                console.log($(this).find(".tooltip-inner").text());
                $(this).animate({
                    left: $(this).find(".tooltip-inner").text().trim()
                },"slow");
            });
        }
    }, {
        offset: '50%'
    });

    $("#site-about").waypoint(function () {
        $("#site-about").find(".title,.brief").addClass("slideInDown animated");
    },{
        offset : "80%"
    });
    $(".about-animated").waypoint(function () {
        $(".about-animated > div:nth-of-type(1)").addClass("slideInLeft animated");
        $(".about-animated > div:nth-of-type(2)").addClass("slideInUp animated");
        $(".about-animated > div:nth-of-type(3)").addClass("slideInRight animated");
    },{
        offset : "80%"
    });
    $("#site-services").waypoint(function () {
        $("#site-services").find(".title,.brief").addClass("slideInUp animated");
    },{
        offset : "80%"
    });
    $(".services-animated").waypoint(function () {
        $(".services-animated > div:nth-of-type(odd)").addClass("slideInLeft animated");
        $(".services-animated > div:nth-of-type(even)").addClass("slideInRight animated");
    },{
        offset : "80%"
    });
    $("#site-skills").waypoint(function () {
        $("#site-skills").find(".title").addClass("slideInDown animated");
    },{
        offset : "80%"
    });
    $("#site-team").waypoint(function () {
        $("#site-team").find(".title,.brief").addClass("slideInUp animated");
    },{
        offset : "80%"
    });
    $(".team-animated").waypoint(function () {
        $(".team-animated > div:nth-of-type(1)").addClass("slideInLeft animated");
        $(".team-animated > div:nth-of-type(2)").addClass("slideInUp animated");
        $(".team-animated > div:nth-of-type(3)").addClass("slideInRight animated");
    },{
        offset : "80%"
    });
    $("#site-portfolio").waypoint(function () {
        $("#site-portfolio").find(".title,.brief").addClass("slideInDown animated");
        $("#site-portfolio").find(".nav").addClass("slideInUp animated");
    },{
        offset : "80%"
    });
    $("#site-testimonials").waypoint(function () {
        $("#site-testimonials").find(".title,.brief").addClass("slideInDown animated");
        $("#site-testimonials").find(".owl-carousel").addClass("slideInUp animated");
    },{
        offset : "80%"
    });
    $("#site-pricing").waypoint(function () {
        $("#site-pricing").find(".title,.brief").addClass("slideInDown animated");
    },{
        offset : "80%"
    });
    $(".pricing-animated").waypoint(function () {
        $(".pricing-animated > div:nth-of-type(1)").addClass("slideInLeft animated");
        $(".pricing-animated > div:nth-of-type(2)").addClass("slideInUp animated");
        $(".pricing-animated > div:nth-of-type(3)").addClass("slideInRight animated");
    },{
        offset : "80%"
    });
    $("#site-touch").waypoint(function () {
        $("#site-touch").find(".title").addClass("slideInDown animated");
    },{
        offset : "80%"
    });
    $(".touch-animated").waypoint(function () {
        $(".touch-animated > div:nth-of-type(1)").addClass("slideInLeft animated");
        $(".touch-animated > div:nth-of-type(2)").addClass("slideInRight animated");
    },{
        offset : "80%"
    });
    $(".footer-animated").waypoint(function () {
        $(".footer-animated").addClass("bounceInUp animated");
    },{
        offset : "100%"
    });
});
