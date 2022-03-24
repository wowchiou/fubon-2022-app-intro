(function () {
  var VIDEO_LIST = [
    {
      title: '富邦學Bar | 市場最佛選股App 富邦智選股',
      id: 'PLWCLOtOO3k',
    },
    {
      title: '富邦學Bar | 10年差370%!?定期定額兩大心法',
      id: 'jQTs5sANSOI',
    },
    {
      title: '富邦學Bar | 你可能不知道的當沖秘密',
      id: 'yEY6rw2QsHA',
    },
    {
      title: '富邦學Bar | 5分鐘了解e點通三大功能',
      id: 'Sey0rTgvE6k',
    },
  ];

  $(function () {
    stopBodyScroll.fixedBody();

    mg.menuActivePage();

    $(document).on('click', '.swiper-slide', function () {
      var videoID = $(this).data('video');
      var videoURL = 'https://www.youtube.com/embed/' + videoID;
      $('#yt-iframe').attr('src', videoURL);
      $('.popup').stop().fadeIn();
      stopBodyScroll.fixedBody();
    });

    $('.popup_close').on('click', function () {
      $('.popup').stop().fadeOut();
      stopBodyScroll.scrollBody();
      $('#yt-iframe').attr('src', '');
    });

    renderVideo();
    setSlider();
  });

  window.onload = function () {
    setTimeout(function () {
      mg.closeLoading();
    }, 300);
  };

  function renderVideo() {
    var VIDEO_TEMPLATE = $('#video-template').html();
    var template = '';
    VIDEO_LIST.forEach(function (video) {
      template += VIDEO_TEMPLATE.replace(/{{title}}/g, video.title).replace(
        /{{id}}/g,
        video.id
      );
    });
    $('#video-wrapper').empty().append(template);
  }

  function setSlider() {
    // slider setting
    var swiper = new Swiper('.swiper', {
      slidesPerView: 1,
      grid: {
        rows: 1,
      },
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        641: {
          slidesPerView: 2,
          grid: {
            rows: 2,
          },
        },
      },
    });
  }
})();
