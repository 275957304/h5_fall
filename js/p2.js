app.pages[2] = (function() {

  var page = {
    init: init,
    onLoad: onLoad,
    onLeave: onLeave,
    dependingTask:'p2',
    isFlipReady: false,
    hasBranch: true,
  };
  
//男生女生状态全局变量,0为男,1为女
var isBoy = 0;

  function init() {
    initEvents();
  }

  function initEvents() {
    initChangeEvents();
    var cur=1;
    $(".bottom-head>div:not(:nth-child("+5+"))").click(function(){

      cur=this.getAttribute('data-index')-1;
      $(".bottom-head>div").removeClass('on');
      this.className="on";
      if(cur == 2){
//    	console.log(isBoy)
      	if($('.active').hasClass('tab-man')){
//    		console.log('男');
      		$(".bottom-foot>div").hide();
	      	$(".bottom-foot>div").eq(cur).show();
	      	$(".bottom-male").show();
      		$(".bottom-female").hide();
      	}else{
//    		console.log('女')
      		$(".bottom-foot>div").hide();
	      	$(".bottom-foot>div").eq(cur).show();
	      	$(".bottom-male").hide();
      		$(".bottom-female").show();
      	}
      }else{
	      $(".bottom-foot>div").hide();
	      $(".bottom-foot>div").eq(cur).show();
	      if($(".bottom-head>div:nth-child("+5+")").attr('data-up')=="false"){
	        $(".bottom").css({'top':'64%'});
	//      $(".bottom-head>div:nth-child("+5+")>span").html("&lsaquo;");
	        $('.p2 .bottom>.bottom-head>div span').css('transform','rotate(0deg)');
	        $(".bottom-head>div:nth-child("+5+")").attr('data-up',"true");
	      }	
      }
      
    });
    $(".bottom-head>div:nth-child("+5+")").click(function(){
//    if(this.getAttribute('data-up')=="true"){
//      $(".bottom").css({'top':'92%'});
//      $(".bottom-head>div:nth-child("+5+")>span").html("&rsaquo;");
//      this.setAttribute('data-up',"false");
//    }else{
//      $(".bottom").css({'top':'60%'});
//      $(".bottom-head>div:nth-child("+5+")>span").html("&lsaquo;");
//      this.setAttribute('data-up',"true");
//    }
      if(this.getAttribute('data-up')=="true"){
        $(".bottom").css({'top':'95.5%'});
        $('.p2 .bottom>.bottom-head>div span').css('transform','rotate(180deg)');
        this.setAttribute('data-up',"false");
      }else{
        $(".bottom").css({'top':'64%'});
        $('.p2 .bottom>.bottom-head>div span').css('transform','rotate(0deg)');
        this.setAttribute('data-up',"true");
      }
    });
    $(".miji").click(function(){
      if(event.target.nodeName=="P"){
        $(".top_miji").css({'display':'block'});
        $(".top_miji").text(event.target.innerText);
      }
    });
    $(".zhuangbei").click(function(){
      if(event.target.nodeName=="IMG"){
        zhuangBei(event.target.getAttribute('src'));
      }
    });
    //点击男孩显示男孩的换装区域
    $(".boy-figure").on("click",function(){
//  	更改全局变量
    	isBoy = 0;
      $(".bottom-female").hide();
      $(".bottom-male").show();
      cur=1;
      $(".bottom-foot>div").hide();
      $(".bottom-foot>div").eq(cur).show();
      $(".bottom-head>div").removeClass('on');
      $(".bottom-head>div").eq(cur).addClass('on');
    });

    //点击女孩显示女孩的换装区域
    $(".girl-figure").on("click",function(){
//  	更改全局变量
    	isBoy = 1;
//  	console.log(isBoy);
      $(".bottom-male").hide();
      $(".bottom-female").show();
      cur=1;
      $(".bottom-foot>div").hide();
      $(".bottom-foot>div").eq(cur).show();
      $(".bottom-head>div").removeClass('on');
      $(".bottom-head>div").eq(cur).addClass('on');
    });
    function zhuangBei(src){
      $('.top_zhuangbei').removeClass('active');
      var str = '';
      str += '<div class="top_zhuangbei active tab-zhuangbei">';
      str += '<img src="img/icon/remove.png" class="icon icon1 remove " />';
      str += '<img src="img/icon/rotate.png" class="icon icon2 rotate " />';
      str += '<img src="img/icon/resize.png" class="icon icon3 resize " />';
      str += '<img class="top-img" src="' + src + '" />'
      str += '</div>';

      $(".top").append(str);
      app.zLevelNum++;
      $('.top_zhuangbei.active').css('z-index',app.zLevelNum);
    }

  }


  function initChangeEvents() {
    $('.select-scene').click(function(){
      var id = $(this).index('.select-scene');
      $('.p2').css({
        'background':'#eaf6fd url(img/bg' + (id + 1) + '.jpg) no-repeat'
      });
      $('.p2').css({
        'background-size':'100% auto'
      });  
    });
    $('.boy-figure').click(function(){
      addBoy();
    });
    $('.girl-figure').click(function(){
      addGirl();
    });
    $('.bottom-male-up-detail img').click(function(){
      var index = $(this).index('.bottom-male-up-detail img');
      if(($('.active').hasClass('tab-man')) || ($('.active').hasClass('tab-woman'))) {
      	$('.active .down-img').attr('src', 'img/man/cloth/man-cloth-up' + (index + 1) + '.png');
      }
    });
    $('.bottom-male-down-detail img').click(function(){
      var index = $(this).index('.bottom-male-down-detail img');
      if(($('.active').hasClass('tab-man')) || ($('.active').hasClass('tab-woman'))) {
      	$('.active .top-img').attr('src', 'img/man/trousers/man_' + (index + 1) + '.png');
      }
    });
    $('.bottom-male-hair-detail img').click(function(){
      var index = $(this).index('.bottom-male-hair-detail img');
      if(($('.active').hasClass('tab-man')) || ($('.active').hasClass('tab-woman'))) {
      	$('.active .hair-img').attr('src', 'img/man/hairstyle/manhairstyle' + (index + 1) + '.png');
      }
    });
    $('.bottom-male-shoes-detail img').click(function(){
      var index = $(this).index('.bottom-male-shoes-detail img');
      if(($('.active').hasClass('tab-man')) || ($('.active').hasClass('tab-woman'))) {
      	$('.active .shoes-img').attr('src', 'img/man/manshose/shoes_' + (index + 1) + '.png');
      }
    });

    $('.bottom-female-up-detail img').click(function(){
      var index = $(this).index('.bottom-female-up-detail img');
      if(($('.active').hasClass('tab-man')) || ($('.active').hasClass('tab-woman'))) {
      	if(index == 2){
		      $('.active .top-img').css('opacity', '0');
	      }else if(index != 2){
		      $('.active .top-img').css('opacity', '1');
	      }
      $('.active .down-img').attr('src', 'img/woman/cloth/woman-cloth-up' + (index + 1) + '.png');
      }
    });
    $('.bottom-female-down-detail img').click(function(){
	      var index = $(this).index('.bottom-female-down-detail img');
	      if(($('.active').hasClass('tab-man')) || ($('.active').hasClass('tab-woman'))) {
	      	$('.active .top-img').attr('src', 'img/woman/trousers/woman-cloth-down' + (index + 1) + '.png');
		      if(index == 0){
		      	$('.active .top-img').css('z-index','3');
		      	$('.active .shoes-img').css('z-index','2');
		      }else{
		      	$('.active .top-img').css('z-index','1');
		      	$('.active .shoes-img').css('z-index','2');
		      }
	      }
	      
    });
    $('.bottom-female-hair-detail img').click(function(){
      var index = $(this).index('.bottom-female-hair-detail img');
      if(($('.active').hasClass('tab-man')) || ($('.active').hasClass('tab-woman'))) {
      	$('.active .hair-img').attr('src', 'img/woman/hairstyle/womanhairstyle' + (index + 1) + '.png');
      }
    });
    $('.bottom-female-shoes-detail img').click(function(){
      var index = $(this).index('.bottom-female-shoes-detail img');
      $('.active .shoes-img').attr('src', 'img/woman/womanshose/womanshose' + (index + 1) + '.png');
      if(($('.active').hasClass('tab-man')) || ($('.active').hasClass('tab-woman'))) {
      }
    });


    $('.p2-photo').one('click',function(){

        
      //隐藏妨碍拍照多余组件
        
        $('.bottom').hide();
        $('.top_zhuangbei').removeClass('active');
        $('.p3-save').hide();
        $('.p3').show();
        $('.erweima').show();
        // $(".p2 .top").css("border-bottom","0px solid transparent");
        $(".p2 .top").css({"border-bottom":"0px solid transparent","height":"100%"});



        var $num =  $(".p3-bottom-callnum-num");
        var widthNum = $(".p3-bottom-callnum-num").width();
        var widthBox = $(".p3-bottom-callnum").width();
        var radio = widthBox/widthNum;
        
        $num.css({
          'transform':'scale('+radio+',1)',
          'transform-origin-x':'0%'
        });

        
      
        html2canvas(document.querySelector(".p2")).then(canvas => {
          //执行拍照
          //document.body.appendChild(canvas);
          // 图片导出为 png 格式
          var type = 'png';
          var imgData = canvas.toDataURL(type);
          $('.p3-save').attr('src',imgData);
          $('.p3-save-hide').attr('src',imgData);
          $('.p2').fadeOut();
          $('.p3-save').show();
        });
    });
    
    
  }

  function addBoy() {
    $('.top_zhuangbei').removeClass('active');
    var str = '';
    str += '<div class="top_zhuangbei tab-man active"><img src="img/icon/remove.png" class="icon icon1 remove "><img src="img/icon/rotate.png" class="icon icon2 rotate "><img src="img/icon/resize.png" class="icon icon3 resize ">';
    str += '<img src="img/man/manhead.png" class="default-img default-head">';
    str += '<img src="img/man/manbody.png" class="default-img">';   
    str += '<img src="img/man/cloth/man-cloth-up1.png" class="down-img">';
    str += '<img src="img/man/trousers/man_1.png" class="top-img man-trousers">';
    str += '<img src="img/man/hairstyle/manhairstyle1.png" class="hair-img">';
    str += '<img src="img/man/manshose/shoes_1.png" class="shoes-img">';
    str += '</div>';
    $('.top').append(str);
    app.zLevelNum++;
      $('.top_zhuangbei.active').css('z-index',app.zLevelNum);
  }
  function addGirl() {
    $('.top_zhuangbei').removeClass('active');
    var str = '';
    str += '<div class="top_zhuangbei tab-woman active"><img src="img/icon/remove.png" class="icon icon1 remove "><img src="img/icon/rotate.png" class="icon icon2 rotate "><img src="img/icon/resize.png" class="icon icon3 resize ">';
    str += '<img src="img/woman/womanhead.png" class="default-img default-head">';
    str += '<img src="img/woman/womanbody.png" class="default-img">';   
    str += '<img src="img/woman/cloth/woman-cloth-up1.png" class="down-img">';
    str += '<img src="img/woman/trousers/woman-cloth-down1.png" class="top-img man-trousers">';
    str += '<img src="img/woman/hairstyle/womanhairstyle1.png" class="hair-img">';
    str += '<img src="img/woman/womanshose/womanshose1.png" class="shoes-img">';
    str += '</div>';
    $('.top').append(str);
    app.zLevelNum++;
      $('.top_zhuangbei.active').css('z-index',app.zLevelNum);
  }



  // 点击男孩上装显示男孩 上装区域
    $(".bottom-maleup").on("click",function(){
       $(".bottom-male-down").hide();
       $(".bottom-male-hair").hide();
       $(".bottom-male-shoes").hide();
       $(".bottom-male-up").css("display","block");
       $(".bottom-maleup").css("background","rgb(239,239,239)");
       $(".bottom-maledown").css("background","rgb(255,255,255)");
       $(".bottom-malehair").css("background","rgb(255,255,255)");
       $(".bottom-maleshoes").css("background","rgb(255,255,255)");
   });

  // 点击男孩下装显示男孩 下装区域
    $(".bottom-maledown").on("click",function(){
      $(".bottom-male-up").css("display","none");
      $(".bottom-male-hair").css("display","none");
      $(".bottom-male-shoes").css("display","none");
      $(".bottom-male-down").css("display","block");
      $(".bottom-maleup").css("background","rgb(255,255,255)");
      $(".bottom-malehair").css("background","rgb(255,255,255)");
      $(".bottom-maleshoes").css("background","rgb(255,255,255)");
      $(".bottom-maledown").css("background","rgb(239,239,239)");
    });
  // 点击男孩发型显示男孩 发型区域
    $(".bottom-malehair").on("click",function(){
      $(".bottom-male-up").css("display","none");
      $(".bottom-male-down").css("display","none");
      $(".bottom-male-shoes").css("display","none");
      $(".bottom-male-hair").css("display","block");
      $(".bottom-maleup").css("background","rgb(255,255,255)");
      $(".bottom-maledown").css("background","rgb(255,255,255)");
      $(".bottom-maleshoes").css("background","rgb(255,255,255)");
      $(".bottom-malehair").css("background","rgb(239,239,239)");
    });
  // 点击男孩鞋子显示男孩 鞋子区域
    $(".bottom-maleshoes").on("click",function(){
      $(".bottom-male-up").css("display","none");
      $(".bottom-male-down").css("display","none");
      $(".bottom-male-hair").css("display","none");
      $(".bottom-male-shoes").css("display","block");
      $(".bottom-maleup").css("background","rgb(255,255,255)");
      $(".bottom-maledown").css("background","rgb(255,255,255)");
      $(".bottom-malehair").css("background","rgb(255,255,255)");
      $(".bottom-maleshoes").css("background","rgb(239,239,239)");
    });
  // 点击女孩上装显示女孩上装区域
    $(".bottom-femaleup").on("click",function(){
       $(".bottom-female-hair").css("display","none");
       $(".bottom-female-down").css("display","none");
       $(".bottom-female-shoes").css("display","none");
       $(".bottom-female-up").css("display","block");
       $(".bottom-femaleup").css("background","rgb(239,239,239)");
       $(".bottom-femalehair").css("background","rgb(255,255,255)");
       $(".bottom-femaledown").css("background","rgb(255,255,255)");
       $(".bottom-femaleshoes").css("background","rgb(255,255,255)");
    });

  // 点击女孩上装显示女孩下装区域
    $(".bottom-femaledown").on("click",function(){
       $(".bottom-female-shoes").css("display","none");
       $(".bottom-female-hair").css("display","none");
       $(".bottom-female-up").css("display","none");
       $(".bottom-female-down").css("display","block");
       $(".bottom-femaleup").css("background","rgb(255,255,255)");
       $(".bottom-femaleshoes").css("background","rgb(255,255,255)");
       $(".bottom-femalehair").css("background","rgb(255,255,255)");
       $(".bottom-femaledown").css("background","rgb(239,239,239)");
    });
  
  // 点击女孩上装显示女孩发型区域
    $(".bottom-femalehair").on("click",function(){
      $(".bottom-female-up").css("display","none");
      $(".bottom-female-down").css("display","none");
      $(".bottom-female-shoes").css("display","none");
      $(".bottom-female-hair").css("display","block");
      $(".bottom-femaleshoes").css("background","rgb(255,255,255)");
      $(".bottom-femaledown").css("background","rgb(255,255,255)");
      $(".bottom-femaleup").css("background","rgb(255,255,255)");
      $(".bottom-femalehair").css("background","rgb(239,239,239)");
    });
  
  // 点击女孩上装显示女孩鞋子区域
    $(".bottom-femaleshoes").on("click",function(){
      $(".bottom-female-up").css("display","none");
      $(".bottom-female-down").css("display","none");
      $(".bottom-female-hair").css("display","none");
      $(".bottom-female-shoes").css("display","block");
      $(".bottom-femaleup").css("background","rgb(255,255,255)");
      $(".bottom-femaledown").css("background","rgb(255,255,255)");
      $(".bottom-femalehair").css("background","rgb(255,255,255)");
      $(".bottom-femaleshoes").css("background","rgb(239,239,239)");
    });

  //点击形象，回到初始状态
    $(".bottom-head>div:eq(1)").on("click",function(){
      //  $(".bottom-male,.bottom-female").hide();
//        $(".bottom-female").hide();
          // $(".figure-ol").show();
//        $(".bottom-male").show();
          
          if(isBoy == 0){
          	$(".bottom-male").show();
          	$(".bottom-female").hide();
          }else if(isBoy == 1){
          	$(".bottom-male").hide();
          	$(".bottom-female").show();
          }
    });


 // 点击道具栏目改变当前样式，显示对应的道具部分内容
 $(".zb-bar-pic1").on("click",function(){
  $(this).css("background-color","rgb(239,239,239)");
  $(".zb-bar-pic2").css("background-color","rgb(255,255,255)");
  $(".zb-bar-pic3").css("background-color","rgb(255,255,255)");
  $(".zb-bar-pic4").css("background-color","rgb(255,255,255)");
  $(".zb-bar-pic5").css("background-color","rgb(255,255,255)");
  $(".zb-bar-pic6").css("background-color","rgb(255,255,255)");
  $(".zb-bar-book").css("display","block");
  $(".zb-bar-decoration").css("display","none");
  $(".zb-bar-file").css("display","none");
  $(".zb-bar-shuma").css("display","none");
  $(".zb-bar-software").css("display","none");
  $(".zb-bar-surround").css("display","none");
});
 $(".zb-bar-pic2").on("click",function(){
  $(this).css("background-color","rgb(239,239,239)");
  $(".zb-bar-pic1").css("background-color","rgb(255,255,255)");
  $(".zb-bar-pic3").css("background-color","rgb(255,255,255)");
  $(".zb-bar-pic4").css("background-color","rgb(255,255,255)");
  $(".zb-bar-pic5").css("background-color","rgb(255,255,255)");
  $(".zb-bar-pic6").css("background-color","rgb(255,255,255)");
  $(".zb-bar-book").css("display","none");
  $(".zb-bar-decoration").css("display","block");
  $(".zb-bar-file").css("display","none");
  $(".zb-bar-shuma").css("display","none");
  $(".zb-bar-software").css("display","none");
  $(".zb-bar-surround").css("display","none");
});
$(".zb-bar-pic3").on("click",function(){
  $(this).css("background-color","rgb(239,239,239)");
  $(".zb-bar-pic1").css("background-color","rgb(255,255,255)");
  $(".zb-bar-pic2").css("background-color","rgb(255,255,255)");
  $(".zb-bar-pic4").css("background-color","rgb(255,255,255)");
  $(".zb-bar-pic5").css("background-color","rgb(255,255,255)");
  $(".zb-bar-pic6").css("background-color","rgb(255,255,255)");
  $(".zb-bar-book").css("display","none");
  $(".zb-bar-decoration").css("display","none");
  $(".zb-bar-file").css("display","block");
  $(".zb-bar-shuma").css("display","none");
  $(".zb-bar-software").css("display","none");
  $(".zb-bar-surround").css("display","none");
});
$(".zb-bar-pic4").on("click",function(){
  $(this).css("background-color","rgb(239,239,239)");
  $(".zb-bar-pic1").css("background-color","rgb(255,255,255)");
  $(".zb-bar-pic2").css("background-color","rgb(255,255,255)");
  $(".zb-bar-pic3").css("background-color","rgb(255,255,255)");
  $(".zb-bar-pic5").css("background-color","rgb(255,255,255)");
  $(".zb-bar-pic6").css("background-color","rgb(255,255,255)");
  $(".zb-bar-book").css("display","none");
  $(".zb-bar-decoration").css("display","none");
  $(".zb-bar-file").css("display","none");
  $(".zb-bar-shuma").css("display","block");
  $(".zb-bar-software").css("display","none");
  $(".zb-bar-surround").css("display","none");
});
$(".zb-bar-pic5").on("click",function(){
  $(this).css("background-color","rgb(239,239,239)");
  $(".zb-bar-pic1").css("background-color","rgb(255,255,255)");
  $(".zb-bar-pic2").css("background-color","rgb(255,255,255)");
  $(".zb-bar-pic3").css("background-color","rgb(255,255,255)");
  $(".zb-bar-pic4").css("background-color","rgb(255,255,255)");
  $(".zb-bar-pic6").css("background-color","rgb(255,255,255)");
  $(".zb-bar-book").css("display","none");
  $(".zb-bar-decoration").css("display","none");
  $(".zb-bar-file").css("display","none");
  $(".zb-bar-shuma").css("display","none");
  $(".zb-bar-software").css("display","block");
  $(".zb-bar-surround").css("display","none");
});
$(".zb-bar-pic6").on("click",function(){
  $(this).css("background-color","rgb(239,239,239)");
  $(".zb-bar-pic1").css("background-color","rgb(255,255,255)");
  $(".zb-bar-pic2").css("background-color","rgb(255,255,255)");
  $(".zb-bar-pic3").css("background-color","rgb(255,255,255)");
  $(".zb-bar-pic4").css("background-color","rgb(255,255,255)");
  $(".zb-bar-pic5").css("background-color","rgb(255,255,255)");
  $(".zb-bar-book").css("display","none");
  $(".zb-bar-decoration").css("display","none");
  $(".zb-bar-file").css("display","none");
  $(".zb-bar-shuma").css("display","none");
  $(".zb-bar-software").css("display","none");
  $(".zb-bar-surround").css("display","block");
});
    // {"code":0,  "errors":null, "msg":"success", "data":{"count":10}, "trace_id":0}


    $(".p3-bottom-share").on("click",function(){
         $(".p3-bottom-info").toggle();
    })
    $(".p3-bottom-info p").on("click",function(){
      $(".p3-bottom-info").hide();
 })

  function onLoad() {
    setTimeout(function(){
      page.isFlipReady = true;
    },1000);
  }

  function onLeave() {
    page.isFlipReady = false;

  }

  return page;
})();
