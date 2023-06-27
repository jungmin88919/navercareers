$(function(){

    //메인메뉴호버

    $('.gnb .nav-item').hover(function(){

        if ($(this).find('.sub-list').length) {
            $('.header').addClass('on');
            $(this).find('.sub-list').addClass('on');
        }
    },function(){
        $('.header, .gnb .sub-list').removeClass('on');
    })

    //메인스와이퍼
    const mainSlide = new Swiper(".group-visual", {
        loop: true,
        speed:800,
        touchRatio: 1,
        autoplay: {
            delay: 5000,
        },
        // cssEase: 'cubic-bezier(0.4, 0.0, 0.2, 1)',  
    });

    const peopleSlide = new Swiper(".group-people", {
        speed:800,
        touchRatio: 0,
        slidesPerView:1.1,
        spaceBetween: 30,
        navigation:{
            prevEl:'.prev',
            nextEl:'.next',
        }, 
        breakpoints:{
            768:{
                slidesPerView: 1,
            },
            1025:{
                slidesPerView: 1,
            }
        }
    });

    const benefitSlide = new Swiper(".group-benefit", {
        slidesPerView: 1,
        spaceBetween: 30,
        speed:800,
        navigation:{
            prevEl:'.prev',
            nextEl:'.next',
        }, 
        breakpoints:{
            768:{
                slidesPerView: 1,
            },
            1025:{
                slidesPerView: 3,
            }
        }
    });

    //언어변경 셀렉트박스 제어
    $('.lang-item').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
    })

    //서치박스 셀렉트 박스 제어
    $('.select-unit .select-box').click(function(){
        $(this).toggleClass('active');
    });
    $('.select-unit .select-box').change(function(){
        $(this).css('color','#000000');
    });

    //  관련사이트 셀렉트박스 제어
    $('.site-inner').click(function(){
        $(this).toggleClass('active');
    })


    $('.chk-wrap.all label').click(function(){
        parent = $(this).data('parent');
        isChk = $(this).siblings('input').prop('checked');


        if (isChk) {
            $(parent).find('input').prop('checked',false);
        } else {
            $(parent).find('input').prop('checked',true);
        }
    })


    //1025 ~ 1230 [1025]

    $('.header .btn-menu').click(function(){
        $('.header .side-nav, .header .btn-menu').toggleClass('on')
    })

    $('.header .side-nav .nav-item').click(function(e){
        e.preventDefault();
        if ($(this).find('.sub-list').length) {
            $(this).toggleClass('active');
        }
    })
    $('.header .side-nav .lang .nav-link').click(function(e){
        e.preventDefault();
        if ($('.nav-link').hasClass('active')) {
            $(this).removeClass('active');
            $(this).siblings().addClass('active');
        } else {
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
        }
    })

    //서치박스토글
    $('.filter-item .sub-item a,.filter-item .filter-tree').click(function(e){
        e.preventDefault();
        if ($(this).siblings('ul').length) {
            $(this).parent().toggleClass('active');
        }
    })
    $('.sc-search .group-search2 .btn-search').click(function(e){
        e.preventDefault();
        $(this).siblings('.popup-search').addClass('active');
    })
    $('.sc-search .group-search2 .pop-close').click(function(e){
        e.preventDefault();
        $(this).parent('.popup-search').removeClass('active');
    })
})