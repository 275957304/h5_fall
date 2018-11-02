app.pages[3] = (function() {

  var page = {
    init: init,
    onLoad: onLoad,
    onLeave: onLeave,
    dependingTask: 'p3',
    isFlipReady: false,
    hasBranch: true,
  };

  function init() {
    initEvents();
  }

  function initEvents() {
    //拖动 放大 缩小 旋转事件
    var one_lock = false,
      x1, y1, x2, y2, imgLeft, imgLeft, imgTop, imgWidth, imgHeight;
      app.zLevelNum = 1;
    var windowWidth = $(window).width(),
      windowHeight = $(window).height(),
      boxHeight = $('.top_zhuangbei.active').height();

    function siteData(name) {
      imgLeft = parseInt(name.css('left'));
      imgTop = imgTop=parseInt(name.css('top'));
      imgWidth = name.width();
      imgHeight = name.height();
    }

    var old_touch, endX, minMaxW, touch1;
    var originalWidth = $('.top_zhuangbei.active').width(),
      originalHeight = $('.top_zhuangbei.active').height(),
      baseScale = parseFloat(originalWidth / originalHeight);
    $('.p2').on('touchstart', '.top_zhuangbei.active', function(event) {
      originalWidth = $('.top_zhuangbei.active').width();
      originalHeight = $('.top_zhuangbei.active').height();
      baseScale = parseFloat(originalWidth / originalHeight);
      var e = event || window.event;
      touch1 = e;

      x1 = touch1.originalEvent.touches[0].pageX;
      y1 = touch1.originalEvent.touches[0].pageY;
      one_lock = true;

      siteData($(this))
      // 判断默认行为是否可以被禁用
      if (event.cancelable) {
        // 判断默认行为是否已经被禁用
        if (!event.defaultPrevented) {
          event.preventDefault();
        }
      }

      $('.p2').on('touchmove', '.top_zhuangbei.active', moveBox);
    });

    $('.p2').on('touchstart', '.top_zhuangbei', function(event) {
      if($(this).hasClass('tab-man')) {
        $('.bottom-head>div').removeClass('on');
        $('.bottom-head>div').eq(2).addClass('on');
        $('.bottom-foot>div').hide();
        $('.bottom-foot .bottom-foot-figure').show();
        $(".figure-ol,.figure-female").hide();
        $(".bottom-male").show();
        $(".bottom-female").hide();
      }else if($(this).hasClass('tab-woman')) {
        $('.bottom-head>div').removeClass('on');
        $('.bottom-head>div').eq(2).addClass('on');
        $('.bottom-foot>div').hide();
        $('.bottom-foot .bottom-foot-figure').show();
        $(".figure-ol,.figure-male").hide();
        $(".bottom-female").show();
        $(".bottom-male").hide();
      }else if($(this).hasClass('tab-zhuangbei')) {
        $('.bottom-head>div').removeClass('on');
        $('.bottom-head>div').eq(3).addClass('on');
        $('.bottom-foot>div').hide();
        $('.bottom-foot .zhuangbei').show();
      }
      app.zLevelNum++;
      $('.top_zhuangbei').removeClass('active');
      $(this).addClass('active').css('z-index',app.zLevelNum);
      originalWidth = $('.top_zhuangbei.active').width();
      originalHeight = $('.top_zhuangbei.active').height();
      baseScale = parseFloat(originalWidth / originalHeight);
      var e = event || window.event;
      touch1 = e;

      x1 = touch1.originalEvent.touches[0].pageX;
      y1 = touch1.originalEvent.touches[0].pageY;
      one_lock = true;

      siteData($(this))
      // 判断默认行为是否可以被禁用
      if (event.cancelable) {
        // 判断默认行为是否已经被禁用
        if (!event.defaultPrevented) {
          event.preventDefault();
        }
      }

      $('.p2').on('touchmove', '.top_zhuangbei.active', moveBox);
    });

    //元素拖动函数
    function moveBox(event) {
      var e = event || window.event;
      touch1 = e;
      x2 = touch1.originalEvent.touches[0].pageX;
      y2 = touch1.originalEvent.touches[0].pageY;
      if (one_lock) {
        imgTop+(y2-y1)<510?$(this).css({
          'left': imgLeft + (x2 - x1),
          'top': imgTop + (y2 - y1)
        }):$(this).css({
          'left': imgLeft + (x2 - x1),
          // 'top':210 原项目
          'top': 510
        })

      }
      if ($(this).offset().top >= windowHeight - boxHeight) {
        $(this).css({
          'top': windowHeight - boxHeight
        });
      }
      if ($(this).offset().top <= 0) {
        $(this).css({
          'top': 0
        });
      }

      // 判断默认行为是否可以被禁用
      if (event.cancelable) {
        // 判断默认行为是否已经被禁用
        if (!event.defaultPrevented) {
          event.preventDefault();
        }
      }
    }
    //元素旋转事件
    var preX, preY; //上一次鼠标点的坐标
    var curX, curY; //本次鼠标点的坐标
    var preAngle; //上一次鼠标点与圆心(150,150)的X轴形成的角度(弧度单位)
    var transferAngle; //当前鼠标点与上一次preAngle之间变化的角度

    var rx = 0,
      ry = 0,
      angleNow = 0;

    //点击事件
    $('.p2').on('touchstart', ".rotate", function(event) {
      var e = event || window.event;
      touch1 = e;

      preX = touch1.originalEvent.touches[0].pageX;
      preY = touch1.originalEvent.touches[0].pageY;
      rx = $(this).parents('.top_zhuangbei').width() / 2 + $(this).parents('.top_zhuangbei').offset().left;
      ry = $(this).parents('.top_zhuangbei').height() / 2 + $(this).parents('.top_zhuangbei').offset().top;
      //计算当前点击的点与圆心(150,150)的X轴的夹角(弧度) --> 上半圆为负(0 ~ -180), 下半圆未正[0 ~ 180]
      preAngle = Math.atan2(preY - ry, preX - rx);
      //获取旋转的初始值

      //移动事件
      $('.p2').on('touchmove', function(event) {
        var e = event || window.event;
        touch1 = e;
        curX = touch1.originalEvent.touches[0].pageX;
        curY = touch1.originalEvent.touches[0].pageY;
        //计算当前点击的点与圆心(150,150)的X轴的夹角(弧度) --> 上半圆为负(0 ~ -180), 下半圆未正[0 ~ 180]
        var curAngle = Math.atan2(curY - ry, curX - rx);
        transferAngle = curAngle - preAngle;
        angleNow += (transferAngle * 180 / Math.PI);

        $('.top_zhuangbei.active').rotate(angleNow);
        preX = curX;
        preY = curY;
        preAngle = curAngle;
        $('.top_zhuangbei.active span.rotate').attr('data-rota', angleNow)
        // event.stopPropagation();
      });
      event.stopPropagation();
    })
    //改变元素大小的事件
    $('.p2').on('touchstart', '.resize', function(event) {
      var e = event || window.event;
      touch1 = e;
      old_touch = touch1.originalEvent.touches[0].pageX;
      one_lock = false;
      $('.p2').on('touchmove', function(event) {
        // $('.p2').off('touchmove','.top_zhuangbei.active');
        // console.log('event',event);
        var e = event || window.event;
        touch1 = e;
        // console.log('e',e);
        // 缩放图片的时候X坐标滑动变化值
        // if(a>=129 && a<=294){
        //   $('.big_img>span:nth-of-type(2)').css()
        // }
        // var aa=parseInt(a);
        // if((aa>=129 && aa<=300) || aa<=-20){
        //   endX =old_touch - touch1.originalEvent.touches[0].pageX;
        // }else{
        //   endX = touch1.originalEvent.touches[0].pageX - old_touch;
        // }
        endX = touch1.originalEvent.touches[0].pageX - old_touch;

        //限制缩放的最小最大值
        if (minMaxW <= 50) {
          minMaxW = 50;
        } else {
          minMaxW = originalWidth + endX;
        }

        $('.top_zhuangbei.active').css({
          'width': minMaxW,
          'height': minMaxW / baseScale,
          'left': imgLeft,
          'top': imgTop
        });
      })
    });
    $('.p2').on('touchend', function(event) {
      $('.p2').off('touchmove');
      one_lock = true;
      //手指移开后保存图片的宽
      originalWidth = $('.top_zhuangbei.active').width();
      //限制最小宽度，再鼠标抬起后，放大图片的宽度
      minMaxW = 131;
    });

    $('.p2').on('touchstart','.remove',function(event){
      // event.stopPropagation();
      if(($(this).parent().hasClass('tab-man')) || ($(this).parent().hasClass('tab-woman'))) {
        setTimeout(function(){
					$(".bottom-head>div").removeClass('on');
      		$(".bottom-head>div").eq(1).addClass('on');
          $('.bottom-foot-human').show();
          $('.bottom-foot-figure').hide();
        },1);

      
      }
      $(this).parent().remove();
    });

    // $('.p2').on('touchend','.top',function(){
    //   $('.top_zhuangbei').removeClass('active');
    // });

    $('.p3-bottom-retry').click(function(){
      $('.bottom').show();
      $('.erweima').hide();
      app.showPage(2);
    });
  }

  function onLoad() {
    setTimeout(function() {
      page.isFlipReady = true;
    }, 1000);
  }

  function onLeave() {
    page.isFlipReady = false;
  }

  return page;
})();