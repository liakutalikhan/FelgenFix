$(document).ready(function () {

    // Animation Attribute Data Set

    $('[data-style*="riseUp"]').wrap('<div class="animation_cropper"><div class="crop_content"></div></div>');

    $('[data-style*="animation"]').each(function () {
        $delay = $(this).attr("data-delay");
        $duration = $(this).attr("data-duration");

        if ($delay === "") {

            $delay = 0.5 + "s";
            $(this).css({
                "animation-delay": $delay
            }).parents('.crop_content').css({
                "animation-delay": $delay
            }).children('[data-style*="animation"]').removeAttr('style');
            $(this).removeAttr('data-delay data-duration');

        } else {

            $delay = $delay + "s";
            $(this).css({
                "animation-delay": $delay
            }).parents('.crop_content').css({
                "animation-delay": $delay
            }).children('[data-style*="animation"]').removeAttr('style');
            $(this).removeAttr('data-delay data-duration');
        }
        if ($duration === "") {

            $duration = 0.5 + "s";
            $(this).css({
                "animation-duration": $duration
            }).parents('.crop_content').css({
                "animation-duration": $duration
            }).children('[data-style*="animation"]').removeAttr('style');
            $(this).removeAttr('data-delay data-duration');
        } else {

            $duration = $duration + "s";
            $(this).css({
                "animation-duration": $duration
            }).parents('.crop_content').css({
                "animation-duration": $duration
            }).children('[data-style*="animation"]').removeAttr('style');
            $(this).removeAttr('data-delay data-duration');
        }

    });

    // Animation Attrbute Data Controll End

    // Auto Animation Delay Stytem 


    $('[data-style*="animation-auto"]').each(function () {

        $delayCount = $(this).attr("data-delay-unit");

        $(this).children().each(function () {

            $selected = $(this).index();

            if ($delayCount === "") {

                $delayCount = 0.1;
                $selected = (($selected + 1) * $delayCount) + "s";
                $(this).css({
                    "animation-delay": $selected
                });
                $(this).children().css({
                    "animation-delay": $selected
                });

            } else {

                $delayCount = $delayCount;
                $selected = (($selected + 1) * $delayCount) + "s";
                $(this).css({
                    "animation-delay": $selected
                });
                $(this).children().css({
                    "animation-delay": $selected
                });
            }

        });

        $(this).removeAttr('data-delay-unit');

    });

    // Auto Animation Fix Duration Method


    $('[data-style*="fix-duration"]').each(function () {

        $fixDuration = $(this).attr("data-duration-unit");

        if ($fixDuration === "") {

            $fixDuration = 1 + "s";
            $(this).children().css({
                "animation-duration": $fixDuration
            });
            $(this).children('.animation_cropper').removeAttr('style').children().css({
                "animation-duration": $fixDuration
            });

        } else {

            $fixDuration = $fixDuration + "s";
            $(this).children().css({
                "animation-duration": $fixDuration
            });
            $(this).children('.animation_cropper').removeAttr('style').children().css({
                "animation-duration": $fixDuration
            });

        }

        $(this).removeAttr('data-duration-unit');

    });

    // Sticky Header Fix

    $('[data-style*="sticky"]').wrap('<div class="sticky_nav"></div>');

    $hader_hight = $(".header_navbar").height();

    $(window).scroll(function () {

        if ($(window).scrollTop() < 10) {
            $hader_hight = $('[data-style*="sticky"]:not(.open)').height();
            $(".sticky_nav").height($hader_hight);
        }

        if ($(window).scrollTop() > 10) {
            $('[data-style*="sticky"]').addClass("active");
            setTimeout(addOpen, 100);

            function addOpen() {

                $('[data-style*="sticky"]').addClass("open");
            }
        } else {

            $('[data-style*="sticky"]').removeClass("active");
            $('[data-style*="sticky"]').removeClass("open");
        }

    })


    $(window).resize(function () {
        $hader_hight = $('[data-style*="sticky"].open').height();
        $(".sticky_nav").height($hader_hight);

        if ($(window).scrollTop() < 10) {
            $hader_hight = $('[data-style*="sticky"]:not(.open)').height();
            $(".sticky_nav").height($hader_hight);
        }
    })

    // Sticky Nav Fixed


    // Any type of toggle popup add and remove class open

    $('body header').prepend('<span class="screen" ></span>');

    $('[data-toggle*="open"]').click(function (e) {
        e.preventDefault();
        $selector_button = $(this).attr("data-target");
        $selected_content = $('[data-toggle*="content"]').attr("data-target");

        if ($selector_button == $selected_content) {
            $('[data-toggle*="content"]').toggleClass('open')
        }

        $('[data-toggle*="close"]').toggleClass('open');
        $(".screen").toggleClass("open");
        $("body").css("overflow", "hidden");

    });

    $('[data-toggle*="close"]').click(function (e) {
        e.preventDefault();
        $selector_button = $(this).attr("data-target");
        $selected_content = $('[data-toggle*="content"]').attr("data-target");

        if ($selector_button == $selected_content) {
            $('[data-toggle*="content"]').removeClass('open')
        }

        $(this).toggleClass('open');
        $(".screen").toggleClass("open");
        $("body").css("overflow", "auto");

    });

    $('[class*="screen"]').click(function (e) {
        e.preventDefault();
        $('[data-toggle*="content"]').removeClass('open')
        $('[data-toggle*="close"]').toggleClass('open');
        $(".screen").toggleClass("open");
        $("body").css("overflow", "auto");
    });


    $('.tab_list ul li').click(function (e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
        $('.category_items .tab_content .tab_item').eq($(this).index()).addClass('active').siblings().removeClass('active');
    })

    $('.list_content ul.select li').click(function (e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active').parents().removeClass('active');
        $('.tab_content .content_wrap .tab_box').eq($(this).index()).addClass('active').siblings().removeClass('active');
        $('.list_content ul.current').empty().append($(this).clone());

    })

    $('.close-popup').click(function (e) {
        e.preventDefault();
        $(this).parents('.popup-message').removeClass('active');

    })

    $('.list_content ul.current').click(function (e) {
        e.preventDefault();
        $(this).siblings('ul').toggleClass('active');
    })

    $('.accordion ul li .body').slideUp();
    $('.accordion ul li .head').click(function () {
        $(this).toggleClass('active').siblings().slideToggle();
    });


    $(".details ul li input").focus(function () {
        $(this).parents('li').addClass('active');
    });

    $(".details ul li input").blur(function () {
        $(this).parents('li').removeClass('active');
    });

    // Any type of toggle and popup and add and remove class open



    jarallax(document.querySelectorAll(".jarallax"));

    $(".currency ul li").click(function (e) {
        e.preventDefault();
        $(".selact_item").toggleClass("open");
    });

    $(".selact_item ul li").click(function () {
        var currentele = $(this).html();
        $(".default ul li").html(currentele);
        $(".selact_item").removeClass("open");
    });

    $(".color_swatch .swatch_list li").mouseenter(function (e) {
        e.preventDefault();
        $(this)
            .parents(".product_item")
            .find(".coloured_img")
            .eq($(this).index())
            .css({
                "z-index": "1",
                opacity: "1"
            })
            .siblings()
            .css("z-index", "-1");
    });
    $(".color_swatch .swatch_list li").mouseleave(function (e) {
        e.preventDefault();
        $(this).parents(".product_item").find(".coloured_img").attr("style", "");
    });

});

$(".announcement_slider").slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
});

$(".hero_slider").slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    pauseOnHover: false,
    // cssEase: 'linear'
});

$(".product_slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    asNavFor: ".thumbnail_slider",
});

$(".thumbnail_slider").each(function () {
    $(this).slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: ".product_slider",
        dots: false,
        arrows: false,
        focusOnSelect: true,
    });
});

$(".top_seller_slider").each(function () {
    var next = $(this).siblings(".next_arrow");
    var prev = $(this).siblings(".prev_arrow");
    $(this).slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        nextArrow: next,
        prevArrow: prev,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});