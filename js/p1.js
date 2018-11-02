app.pages[1] = (function() {
  var page = {
    init: init,
    onLoad: onLoad,
    onLeave: onLeave,
    dependingTask:'p1',
    isFlipReady: false, //标志页面是否可以翻页, 当页面所有动画运行完之后设置为true,离开页面后再重置为false
    hasBranch: false, //标志页面内是否有分支,默认为false,
  };

  function init() {
    initEvents();
  }

  function initEvents() {
    $('.p1-btn').click(function(){
      $('.page').hide();
      $('.p2').show();
      // app.showPage(2);
    });
  }

  function onLoad() {
    setTimeout(function(){
      page.isFlipReady = true;
      setTimeout(function(){
        $('.p1-textc').fadeIn();
      },500);
      setTimeout(function(){
        $('.p1-textd').fadeIn();
      },1000);
    },1000);
  }

  function onLeave() {
    page.isFlipReady = false;
  }

  return page;
})();


