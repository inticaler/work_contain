$(function () {
    // banner
    $(document).ready(function (e) {
        $dragBln = false;
        $(".banner-img").touchSlider({
            flexible: true,
            speed: 200,

            delay: 5000,
            btn_prev: $(".arrow-left"),
            btn_next: $(".arrow-right"),
            paging: $(".banner-icons li"),
            counter: function (e) {
                $(".banner-icons li").removeClass("on").eq(e.current - 1).addClass("on");
            }
        });
        $(".banner-img").bind("mousedown", function () {
            $dragBln = false;
        })
        $(".banner-img").bind("dragstart", function () {
            $dragBln = true;
        })
        $(".banner a").click(function () {
            if (!$dragBln) {
                return true;
            }
        })
        timers = setInterval(function () {
            $(".arrow-left").click();
        }, 5000);
        $(".banner").hover(function () {
            clearInterval(timers);
        }, function () {
            timers = setInterval(function () {
                $(".arrow-right").click();
            }, 5000);
        })
        $(".banner-img").bind("touchstart", function () {
            clearInterval(timers);
        }).bind("touchend", function () {
            timers = setInterval(function () {
                $(".arrow-right").click();
            }, 5000);
        })
    });

    //sidebar
    $(function () {
        $(".sidebar").hide();
        $(window).bind('scroll', function () {
            if ($(window).scrollTop() <= 90) {
                $(".sidebar").hide();
            } else {
                $(".sidebar").show();
            }
        });
        $(".sidebar").bind("click", function () {
            $('html, body').animate({
                scrollTop: 0
            }, 300);
        });
    });

    // 动画
    $(function () {
        new WOW().init();
    })

    //手机端导航
    $('.nav-btn').click(function () {
        $('.nav-list').toggleClass('show')
    });
    
});