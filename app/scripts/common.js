window.fbAsyncInit = function () {
  FB.init({
    appId: '615882259824730',
    cookie: true,
    xfbml: true,
    version: 'v12.0',
  });

  FB.AppEvents.logPageView();
};

(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk.js';
  fjs.parentNode.insertBefore(js, fjs);
})(document, 'script', 'facebook-jssdk');

var stopBodyScroll;
var mg = {};

$(function () {
  var StopBodyScroll = (function () {
    var instance = null;

    function StopBodyScroll() {
      this.pageTop = 0;
      this.body = document.body;
    }

    StopBodyScroll.prototype.fixedBody = function () {
      this.pageTop = window.scrollY;
      this.body.style.position = 'fixed';
      this.body.style.top = -this.pageTop + 'px';
    };

    StopBodyScroll.prototype.scrollBody = function () {
      this.body.style.position = '';
      this.body.style.top = '';
      window.scrollTo(0, this.pageTop);
    };

    return function () {
      if (!instance) {
        instance = new StopBodyScroll();
      }

      return instance;
    };
  })();

  stopBodyScroll = new StopBodyScroll();

  mg.menuActivePage = function () {
    var bodyClass = $('body').attr('class');
    $('.menu_' + bodyClass).addClass('active');
  };

  mg.closeLoading = function () {
    $('.loading').hide();
    stopBodyScroll.scrollBody();
  };

  mg.wowSetting = function () {
    var wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true,
      duration: '3s',
    });
    wow.init();
  };

  mg.getBrowserVersion = function () {
    return {
      versions: (function () {
        var u = window.navigator.userAgent;
        var app = window.navigator.appVersion;
        return {
          mobile: !!u.match(/AppleWebKit.*Mobile.*/),
          webApp: u.indexOf('Safari') == -1,
          fbapp: u.indexOf('FBAV') > -1 || u.indexOf('FBAN') > -1,
          line: u.indexOf('Line') > -1,
          instagram: u.indexOf('Instagram') > -1,
          ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
        };
      })(),
      language: (
        window.navigator.browserLanguage || window.navigator.language
      ).toLowerCase(),
    };
  };

  $('.menu_toggle').on('click', function () {
    $('#header').toggleClass('active');
    if ($('#header').hasClass('active')) {
      $('#menu').stop().fadeIn(300);
      stopBodyScroll.fixedBody();
      return;
    }
    $('#menu').stop().fadeOut(300);
    stopBodyScroll.scrollBody();
  });

  $('#header.active .menu_btn.arrow').on('click', function () {
    var SUB_MENU = $(this).find('.submenu');
    SUB_MENU.toggleClass('active');
    if (SUB_MENU.hasClass('active')) {
      return SUB_MENU.show();
    }
    SUB_MENU.hide();
  });

  window.matchMedia('(max-width: 1060px)').addListener(function (e) {
    $('#header').removeClass('active');
    if (e.matches) {
      $('#menu').hide();
      return;
    }
    $('#menu').show();
    stopBodyScroll.scrollBody();
  });

  $('.fb_share').on('click', function () {
    var url = location.href;
    fbShare(url, function (res) {
      console.log(res);
    });
  });

  $('.line_share').attr(
    'href',
    'https://social-plugins.line.me/lineit/share?url=' +
      encodeURIComponent(location.href)
  );
});

function fbShare(url, callback) {
  FB.ui(
    {
      method: 'share',
      display: 'popup',
      href: url,
      // hashtag: '',
    },
    function (response) {
      callback && typeof callback === 'function' && callback(response);
    }
  );
}
