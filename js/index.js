// 功能1：定义全局事件
// 功能2：定义加载函数，框架已经定义好，只需需要手动在 app.loader.init 中添加 加载任务序列;
// 功能3：初始化app


$(function() {
  /***********************************/
  function loading(showPageId, branch) {
    var timeout;
    var interval = 0;
    var flagFakeOver = 0;
    var processNum = 0;
    var randomStep = function( ) {
      var time = 50.0 + 0 | Math.random() * 500;
      timeout = setTimeout(function() {
        processNum += 1.0 + 0 | Math.random() * 5;
        if (processNum >= 79) {
          processNum = 79;
          flagFakeOver = 1;
        }
        setProcess(processNum);
        if(!flagFakeOver){
          randomStep();
        }else{
          clearTimeout(timeout);
        }
      }, time);
    };
    var setProcess = function(n) {
      $('.p0-process').text(n + '%');
    };
    var fakePreload = function() {
      randomStep();
    };

    fakePreload();

    $('.cssloader').hide();
    $('.p0').show();
    
    
    app.loader.init({

      // 在manifest中定义加载序列
      manifest: [{
        id: 'p1',
        selector: '.p1 img',
        imgs:['img/p1_mid.png','img/p1_btna.png','img/bd_icon/bg_1.png','img/bd_icon/bg_2.png','img/bg1.jpg','img/bg2.jpg','img/bd_icon/fenxiang.png','img/bd_icon/male.png','img/bd_icon/female.png','img/bd_icon/p2_up.png','img/bd_icon/p2_down.png','img/bd_icon/p2_hair.png','img/bd_icon/p2_shoes.png','img/man_title/cloth/man-cloth-up1.png','img/man_title/cloth/man-cloth-up2.png','img/man_title/cloth/man-cloth-up3.png','img/man_title/cloth/man-cloth-up4.png','img/man_title/cloth/man-cloth-up5.png','img/man_title/cloth/man-cloth-up6.png','img/man_title/cloth/man-cloth-up7.png','img/man/trousers/man_1.png','img/man/trousers/man_2.png','img/man/trousers/man_3.png','img/man_title/hairstyle/manhairstyle1.png','img/man_title/hairstyle/manhairstyle2.png','img/man_title/hairstyle/manhairstyle3.png','img/man/manshose/shoes_1.png','img/man/manshose/shoes_2.png','img/man/manshose/shoes_3.png','img/man/manshose/shoes_4.png','img/man/manshose/shoes_5.png','img/man/manshose/shoes_6.png','img/woman/cloth/woman-cloth-up1.png','img/woman/cloth/woman-cloth-up2.png','img/woman/cloth/woman-cloth-up3.png','img/woman/cloth/woman-cloth-up4.png','img/woman/trousers/woman-cloth-down1.png','img/woman/trousers/woman-cloth-down2.png','img/woman/trousers/woman-cloth-down3.png','img/woman/trousers/woman-cloth-down4.png','img/woman/hairstyle/womanhairstyle1.png','img/woman/hairstyle/womanhairstyle2.png','img/woman/hairstyle/womanhairstyle3.png','img/woman/hairstyle/womanhairstyle4.png','img/woman/womanshose/womanshose1.png','img/woman/womanshose/womanshose2.png','img/woman/womanshose/womanshose3.png','img/woman/womanshose/womanshose4.png','img/woman/womanshose/womanshose5.png','img/woman/womanshose/womanshose6.png','img/woman/womanshose/womanshose7.png','img/bd_icon/daoju_book.png','img/bd_icon/daoju_decoration.png','img/bd_icon/daoju_file.png','img/bd_icon/daoju_shuma.png','img/bd_icon/daoju_software.png','img/bd_icon/daoju_surround.png','img/daoju/book/book1.png','img/daoju/book/book2.png','img/daoju/book/book3.png','img/daoju/book/book4.png','img/daoju/decoration/decoration1.png','img/daoju/decoration/decoration2.png','img/daoju/decoration/decoration3.png','img/daoju/decoration/decoration4.png','img/daoju/decoration/decoration5.png','img/daoju/decoration/decoration6.png','img/daoju/decoration/decoration7.png','img/daoju/decoration/decoration8.png','img/daoju/decoration/decoration9.png','img/daoju/decoration/decoration10.png','img/daoju/decoration/decoration11.png','img/daoju/decoration/decoration12.png','img/daoju/file/file1.png','img/daoju/file/file2.png','img/daoju/file/file3.png','img/daoju/file/file4.png','img/daoju/file/file5.png','img/daoju/file/file6.png','img/daoju/file/file7.png','img/daoju/file/file8.png','img/daoju/file/file9.png','img/daoju/shuma/shuma1.png','img/daoju/shuma/shuma2.png','img/daoju/shuma/shuma3.png','img/daoju/shuma/shuma4.png','img/daoju/shuma/shuma5.png','img/daoju/shuma/shuma6.png','img/daoju/shuma/shuma7.png','img/daoju/shuma/shuma8.png','img/daoju/shuma/shuma9.png','img/daoju/shuma/shuma10.png','img/daoju/shuma/shuma11.png','img/daoju/software/software1.png','img/daoju/software/software2.png','img/daoju/software/software3.png','img/daoju/software/software4.png','img/daoju/software/software5.png','img/daoju/software/software6.png','img/daoju/surround/surround1.png','img/daoju/surround/surround2.png','img/daoju/surround/surround3.png','img/daoju/surround/surround4.png','img/daoju/surround/surround5.png','img/man/cloth/man-cloth-up1.png','img/man/cloth/man-cloth-up2.png','img/man/cloth/man-cloth-up3.png','img/man/cloth/man-cloth-up4.png','img/man/cloth/man-cloth-up5.png','img/man/cloth/man-cloth-up6.png','img/man/cloth/man-cloth-up7.png','img/man/hairstyle/manhairstyle1.png','img/man/hairstyle/manhairstyle2.png','img/man/hairstyle/manhairstyle3.png','img/man/manshose/shoes_1.png','img/man/manshose/shoes_2.png','img/man/manshose/shoes_3.png','img/man/manshose/shoes_4.png','img/man/manshose/shoes_5.png','img/man/manshose/shoes_6.png','img/man/trousers/man_1.png','img/man/trousers/man_2.png','img/man/trousers/man_3.png','img/man/manbody.png','img/man/manhead.png','img/woman/cloth/woman-cloth-up1.png','img/woman/cloth/woman-cloth-up2.png','img/woman/cloth/woman-cloth-up3.png','img/woman/cloth/woman-cloth-up4.png','img/woman/hairstyle/womanhairstyle1.png','img/woman/hairstyle/womanhairstyle2.png','img/woman/hairstyle/womanhairstyle3.png','img/woman/hairstyle/womanhairstyle4.png','img/woman/trousers/woman-cloth-down1.png','img/woman/trousers/woman-cloth-down2.png','img/woman/trousers/woman-cloth-down3.png','img/woman/trousers/woman-cloth-down4.png','img/woman/womanshose/womanshose1.png','img/woman/womanshose/womanshose2.png','img/woman/womanshose/womanshose3.png','img/woman/womanshose/womanshose4.png','img/woman/womanshose/womanshose5.png','img/woman/womanshose/womanshose6.png','img/woman/womanshose/womanshose7.png','img/woman/womanbody.png','img/woman/womanhead.png',]
      }, {
        id: 'p2',
        selector: '.p2 img',
        imgs:['']
      }, {
        id: 'p3',
        selector: '.p3 img',
        imgs:['']
      }],


      onAllFrontImgLoaded: function(e) {
        clearInterval(interval);
        processNum = 80;
        flagFakeOver = 1;
        clearTimeout(timeout);

        interval = setInterval(function() {
          processNum += 3;
          if (processNum >= 100) {
            processNum = 100;
            clearInterval(interval);
            app.showPage(showPageId, branch);
          }
          setProcess(processNum);
        }, 20);
      },
    });
    app.loader.showPageNo = showPageId;
    app.loader.start('p' + showPageId);

  }

  /************************************/

  function initApp() {
    app.initPages();
    loading(1);
    app.common.initContentBox($('.content'), 5, 3);
  }
  initApp();

});
