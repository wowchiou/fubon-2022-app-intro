(function () {
  var originData = [data_eclick, [], data_smart];
  var dataSource = formateData(originData);
  var currentPage = getPage();
  var currentData = dataSource[currentPage - 1];
  var currentIndex = currentData.tabs[0];
  var mobileType = 'android';
  var isSearch = false;
  var searchData = [];

  $(function () {
    stopBodyScroll.fixedBody();

    mg.menuActivePage();

    setPageActiveClass();

    renderTabs(currentData.tabs, currentPage);

    renderContent(currentData.content);

    $('.back_to_top').on('click', function () {
      $('html,body').animate({ scrollTop: 0 }, 300);
    });

    $(window).scroll(function () {
      if ($(window).scrollTop() > $('.sign').offset().top) {
        return $('.back_to_top').addClass('active');
      }
      $('.back_to_top').removeClass('active');
    });

    $(document).on('click', '.tab', function () {
      var index = $(this).data('index');
      currentIndex = index;
      toggleActive('.tab', this);
      renderContent(currentData.content);
      scrollToTabs();
    });

    $('.sign_btn').on('click', function () {
      var type = $(this).data('type');
      mobileType = type;
      toggleActive('.sign_btn', this);
      if (isSearch) {
        scrollToSign();
        renderSearchContent(searchData);
      } else {
        scrollToTabs();
        renderContent(currentData.content);
      }
    });

    $('#search_text').on('input', function () {
      if (isSearch) {
        showSearchBtn(true);
      }
    });

    $(document).on('submit', '#search_bar', sendSearch);

    $(document).on('click', '.search_btn', sendSearch);

    $(document).on('click', '.close_btn', function () {
      resetSearch();
      renderContent(currentData.content);
    });

    $('.page').on('click', function () {
      var page = $(this).data('page');

      if (page === Number(2)) return;

      toggleActive('.page', this);
      location.hash = '#' + page;
      currentPage = Number(page);
      currentData = dataSource[page - 1];
      currentIndex = currentData.tabs[0];
      resetSearch();
      renderTabs(currentData.tabs, currentPage);
      renderContent(currentData.content);
      scrollToTabs();
    });
  });

  window.onload = function () {
    setTimeout(function () {
      mg.closeLoading();
    }, 300);
  };

  function getPage() {
    var hash = location.hash;
    if (hash === '#1' || hash === '#2' || hash === '#3') {
      return Number(hash.replace('#', ''));
    }
    return 1;
  }

  function setPageActiveClass() {
    $('.page[data-page="' + currentPage + '"]').addClass('active');
  }

  function toggleActive(el, currentEl) {
    $(el).removeClass('active');
    $(currentEl).addClass('active');
  }

  function scrollToTabs() {
    var h = $('.tab_wrap').offset().top - $('#header').height() - 10;
    $('html, body').animate({ scrollTop: h }, 300);
  }

  function scrollToSign() {
    var h = $('.sign').offset().top - $('#header').height() - 5;
    $('html, body').animate({ scrollTop: h }, 300);
  }

  function showSearchBtn(show) {
    if (show) {
      $('.search_btn').show();
      $('.close_btn').hide();
    } else {
      $('.search_btn').hide();
      $('.close_btn').show();
    }
  }

  function showDescription(show) {
    if (show) {
      $('#descriptions').show();
      $('#no_result').hide();
    } else {
      $('#descriptions').empty().hide();
      $('#no_result').show();
    }
  }

  function sendSearch(e) {
    e.preventDefault();
    var searchText = $('#search_text').val().trim();
    if (searchText === '') return;
    isSearch = true;
    searchData = [];
    currentData.content.forEach(function (itm) {
      if (itm.title.indexOf(searchText) !== -1) {
        searchData.push(itm);
        return;
      }

      var isKeywordExists = false;
      for (
        var keywordIndex = 0;
        keywordIndex < itm.keywords.length;
        keywordIndex++
      ) {
        if (searchText.indexOf(itm.keywords[keywordIndex]) !== -1) {
          isKeywordExists = true;
          searchData.push(itm);
          break;
        }
      }
      if (isKeywordExists) return;

      for (
        var mobileTypeIndex = 0;
        mobileTypeIndex < itm[mobileType].length;
        mobileTypeIndex++
      ) {
        if (itm[mobileType][mobileTypeIndex].indexOf(searchText) !== -1) {
          searchData.push(itm);
          break;
        }
      }
    });

    $('.tabs').addClass('active');
    showSearchBtn(false);
    scrollToSign();
    if (searchData.length === 0) {
      showDescription(false);
    } else {
      showDescription(true);
      renderSearchContent(searchData);
    }
  }

  function resetSearch() {
    isSearch = false;
    searchData = [];
    $('#search_text').val('');
    $('.tabs').removeClass('active');
    showSearchBtn(true);
    showDescription(true);
  }

  function renderTabs(data, iconIndex) {
    var tabsTemplate = buildTabsTemplate(data, iconIndex);
    $('#tab_wrapper').empty().append(tabsTemplate);
  }

  function buildTabsTemplate(tabs, iconIndex) {
    var template = '';
    var TABS_TEMPLATE = $('#tabs_template').html();
    var SEARCH_TEMPLATE = $('#search_template').html();
    var iconFileName = 'search-' + iconIndex + '-';
    tabs.forEach(function (tab, idx) {
      var active = idx === 0 ? 'active' : '';
      template += TABS_TEMPLATE.replace(
        /{{icon}}/g,
        iconFileName + (idx + 1) + '.png'
      )
        .replace(/{{text}}/g, tab)
        .replace(/{{active}}/g, active)
        .replace(/{{page}}/g, iconIndex);
    });
    template += SEARCH_TEMPLATE;
    return template;
  }

  function renderContent(data) {
    var renderData = data.filter(function (itm) {
      return itm.index === currentIndex;
    });
    renderDescriptions(renderData, currentPage, mobileType);
  }

  function renderSearchContent(data) {
    renderDescriptions(data, currentPage, mobileType);
  }

  function renderDescriptions(data, page, mobileType) {
    var descriptionsTemplate = buildDescriptionTemplate(data, page, mobileType);
    $('#descriptions').empty().append(descriptionsTemplate);
  }

  function buildDescriptionTemplate(data, page, mobileType) {
    var template = '';
    var DESCRIPTION_TEMPLATE = $('#description_template').html();
    var GUIDE_TEMPLATE = $('#guide_template').html();
    data.forEach(function (itm) {
      var guide_template = '';
      if (itm[mobileType].length <= 3) {
        // 說明圖文數量只有3個以內
        guide_template = '<div class="description">';
        itm[mobileType].forEach(function (guideItem, guideIndex) {
          if (!guideItem) return;
          guide_template += GUIDE_TEMPLATE.replace(/{{page}}/g, page)
            .replace(/{{mobileType}}/g, mobileType)
            .replace(/{{mobile}}/g, mobileType === 'ios' ? 'i' : 'a')
            .replace(/{{descriptionId}}/g, itm.id)
            .replace(/{{guideIndex}}/g, guideIndex + 1)
            .replace(/{{description}}/g, guideItem.trim());
        });
        guide_template += '</div>';
      } else {
        // 說明圖文數量有4個
        var temp = '';
        itm[mobileType].forEach(function (guideItem, guideIndex) {
          if (guideIndex % 2 === 0) {
            temp = '<div class="description">';
          }
          temp += GUIDE_TEMPLATE.replace(/{{page}}/g, page)
            .replace(/{{mobileType}}/g, mobileType)
            .replace(/{{mobile}}/g, mobileType === 'ios' ? 'i' : 'a')
            .replace(/{{descriptionId}}/g, itm.id)
            .replace(/{{guideIndex}}/g, guideIndex + 1)
            .replace(/{{description}}/g, guideItem.trim());
          if (guideIndex % 2 === 1) {
            temp += '</div>';
            guide_template += temp;
          }
        });
      }

      template += DESCRIPTION_TEMPLATE.replace(
        /{{default}}/g,
        isSearch ? '' : 'caption_default'
      )
        .replace(/{{index}}/g, itm.index)
        .replace(/{{title}}/g, itm.title)
        .replace(/{{guide}}/g, guide_template);
    });
    return template;
  }

  function formateData(originData) {
    var newData = [];
    originData.forEach(function (data, idx) {
      var tabs = [];
      var content = [];
      data.forEach(function (itm) {
        if (tabs.indexOf(itm.index) === -1) {
          tabs.push(itm.index);
        }

        var android = [
          itm['android/1'],
          itm['android/2'],
          itm['android/3'],
          itm['android/4'],
        ].filter(function (a) {
          return a;
        });

        var ios = [
          itm['ios/1'],
          itm['ios/2'],
          itm['ios/3'],
          itm['ios/4'],
        ].filter(function (i) {
          return i;
        });

        content.push({
          id: itm.id,
          index: itm.index,
          title: itm.title,
          keywords: itm.keywords.split('、'),
          android: android,
          ios: ios,
        });
      });
      newData.push({ page: idx + 1, tabs: tabs, content: content });
    });
    return newData;
  }
})();
