(function () {
  $(function () {
    stopBodyScroll.fixedBody();

    mg.menuActivePage();

    // slider setting
    var swiper = new Swiper('.slider .swiper-container', {
      slidesPerView: 1,
      spaceBetween: 100,
      navigation: {
        nextEl: '.slider .swiper-button-next',
        prevEl: '.slider .swiper-button-prev',
      },
    });

    // qa slide animate
    $('.q').on('click', function () {
      $(this).toggleClass('active');
      if ($(this).hasClass('active')) {
        return $(this).siblings('.a').stop().slideDown(300);
      }
      $(this).siblings('.a').stop().slideUp(300);
    });

    // tab switch
    $('.tab').on('click', function () {
      $('.tab').removeClass('active');
      $(this).addClass('active');

      var index = $(this).data('index');
      swiper.slideTo(index);

      var sliderPosition = $('.slider').offset().top;
      var headerHeight = $('#header').height();
      $('html,body').animate(
        { scrollTop: sliderPosition - headerHeight - 10 },
        300
      );
    });

    $('.back_to_top').on('click', function () {
      $('html,body').animate({ scrollTop: 0 }, 300);
    });

    swiper.on('slideChange', function () {
      var index = this.realIndex;
      $('.tab').removeClass('active').eq(index).addClass('active');
    });

    $(window).scroll(function () {
      if ($(window).scrollTop() > $('.light .title').offset().top) {
        return $('.back_to_top').addClass('active');
      }
      $('.back_to_top').removeClass('active');
    });
  });

  window.onload = function () {
    setTimeout(function () {
      mg.wowSetting();
      mg.closeLoading();
    }, 300);
  };
})();
