$(function () {

    $('#Main__content').fullpage({
        anchors: ['main', 'sub01', 'sub02'],
        navigation: false,
        css3: false,
        //반응형에서 fullpage 안하기.
        responsiveWidth: 700,
        //넘치는 부분 스크롤 하기.
        //scrollOverflow: true,
        //아랜 속도 부분... https://jqueryui.com/easing/ 참고.
        //easing: 'easeOutBounce',
        //easingCss3: 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
        afterRender: function () {
            $('.Main__content .section').eq(0).addClass('on');
        },
        afterLoad: function (lnk, idx) {
            console.log(lnk, idx);
            // $('.gnb li').eq(idx - 1).addClass('on').siblings().removeClass('on');
            $('.Main__content .section').eq(idx - 1).addClass('on').siblings().removeClass('on');
        },
        onLeave: function (idx, nidx, dir) {
            $('.gnb li').eq(nidx - 1).addClass('on').siblings().removeClass('on');
            console.log(idx, nidx, dir);

            if (dir == 'up') {
                $('.header').addClass('on')
            } else {
                $('.header').removeClass('on')
            }

        }
    });



    $('.visual__slide').on('init afterChange', function (e, s, idx) {
        const current = $('.visual__slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
        $('.main__visual .dots__').addClass('on');
        $('.main__visual .dots__ span').text(idx ? "0" + (idx + 1) : "01");
        $('.main__visual .dots__ strong').text("0" + s.slideCount);

    });

    $('.visual__slide').on('beforeChange', function () {
        $('.main__visual .dots__').removeClass('on');
    });

    $('.visual__slide').slick({
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
    });




    $('.preminu_slide').on('init afterChange', function (e, s, idx) {
        const current = $('.preminu_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
    });



    $('.preminu_slide').slick({
        arrows: false,
        slidesToShow: 4,
        speed: 100,
        pauseOnHover: false,
        pauseOnFocus: false,
    });






})