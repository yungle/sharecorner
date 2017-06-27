
// 铲地
$(".cz_cz a").click(function () {
    $(this).parent().parent().hide();
    var imgsrc = $(this).children().attr("src");//铲子图片
                 $('.crops').attr("src",imgsrc);//拖动的图片
                 $('.crops').css({opacity: '1',display:'block'});//显示图片
                 
                 $('.crops_seed').attr("src",'');//拖动的图片
                 $('.crops_seed').css({opacity: '0',display:'none'});//拖动的图片

                 $('.chuchong').attr('src','');//除虫
                 $('.chuchong').css({opacity: '0',display:'none'});//除虫

                 $('.zhaiqu').attr('src','');//摘取
                 $('.zhaiqu').css({opacity: '1',display:'none'});//摘取

                 $('.chucao').attr('src','');//除草
                 $('.chucao').css({opacity: '0',display:'none'});//除虫

                 $('.jiaoshui').attr('src','');//浇水
                 $('.jiaoshui').css({opacity: '0',display:'none'});//浇水
                 
});
// 种子

$('#seed img').click(function  () {
                 $('.jiaoshui').attr('src','');//浇水
                 $('.jiaoshui').css({opacity: '1',display:'none'});//浇水

                 $('.chucao').attr('src','');//除草
                 $('.chucao').css({opacity: '1',display:'none'});//除草

                 $('.crops').attr("src",'');//拖动的铲子图片
                 $('.crops').css({opacity: '0',display:'none'});//隐藏图片

                 $('.chuchong').attr('src','');//除虫
                 $('.chuchong').css({opacity: '0',display:'none'});//隐藏图片

                 $('.crops_seed').attr("src",'');//拖动的种子图片
                 $('.crops_seed').css({opacity: '0',display:'none'});//隐藏图片

                 $('.zhaiqu').attr('src','');//摘取
                 $('.zhaiqu').css({opacity: '0',display:'none'});//摘取
    $('.lightc').hide();
	var imgsrc = $(this).attr('src');//当前种子图片
                 $('.crops_seed').attr("src",imgsrc);//拖动的种子图片
                 $('.crops_seed').css({opacity: '1',display:'block'});//显示图片

                 
});

//除虫
$('.img4').click(function (event) {
    var imgsrc = $(this).children().children().attr('src');//除虫图
                 $('.chuchong').attr('src',imgsrc);//除虫
                 $('.chuchong').css({opacity: '1',display:'block'});//除虫

                 $('.crops').attr("src",'');//拖动的铲子图片
                 $('.crops').css({opacity: '0',display:'none'});//隐藏图片

                 $('.crops_seed').attr("src",'');//拖动的种子图片
                 $('.crops_seed').css({opacity: '0',display:'none'});//隐藏图片

                 $('.zhaiqu').attr('src','');//摘取
                 $('.zhaiqu').css({opacity: '1',display:'none'});//摘取

                 $('.chucao').attr('src','');//除草
                 $('.chucao').css({opacity: '0',display:'none'});//除虫

                 $('.jiaoshui').attr('src','');//浇水
                 $('.jiaoshui').css({opacity: '0',display:'none'});//浇水
});


//摘取
$('.img6').click(function (event) {
    var imgsrc = $(this).children().children().attr('src');//摘取
                 $('.zhaiqu').attr('src',imgsrc);//摘取
                 $('.zhaiqu').css({opacity: '1',display:'block'});//摘取


                 $('.chuchong').attr('src','');//除虫
                 $('.chuchong').css({opacity: '0',display:'none'});//除虫

                 $('.crops').attr("src",'');//拖动的铲子图片
                 $('.crops').css({opacity: '0',display:'none'});//隐藏图片

                 $('.crops_seed').attr("src",'');//拖动的种子图片
                 $('.crops_seed').css({opacity: '0',display:'none'});//隐藏图片

                 $('.chucao').attr('src','');//除草
                 $('.chucao').css({opacity: '0',display:'none'});//除草

                 $('.jiaoshui').attr('src','');//浇水
                 $('.jiaoshui').css({opacity: '0',display:'none'});//浇水

});

//除草
$('.img5').click(function (event) {
    var imgsrc = $(this).children().children().attr('src');//除草图
                 $('.chucao').attr('src',imgsrc);//除草
                 $('.chucao').css({opacity: '1',display:'block'});//除虫

                 $('.crops').attr("src",'');//拖动的铲子图片
                 $('.crops').css({opacity: '0',display:'none'});//隐藏图片

                 $('.chuchong').attr('src','');//除虫
                 $('.chuchong').css({opacity: '0',display:'none'});//隐藏图片

                 $('.crops_seed').attr("src",'');//拖动的种子图片
                 $('.crops_seed').css({opacity: '0',display:'none'});//隐藏图片

                 $('.zhaiqu').attr('src','');//摘取
                 $('.zhaiqu').css({opacity: '0',display:'none'});//摘取

                 $('.jiaoshui').attr('src','');//浇水
                 $('.jiaoshui').css({opacity: '0',display:'none'});//浇水
});

//浇水
$('.img3').click(function (event) {
    var imgsrc = $(this).children().children().attr('src');//枯地图
                 $('.jiaoshui').attr('src',imgsrc);//浇水
                 $('.jiaoshui').css({opacity: '1',display:'block'});//浇水

                 $('.chucao').attr('src','');//除草
                 $('.chucao').css({opacity: '1',display:'none'});//除草

                 $('.crops').attr("src",'');//拖动的铲子图片
                 $('.crops').css({opacity: '0',display:'none'});//隐藏图片

                 $('.chuchong').attr('src','');//除虫
                 $('.chuchong').css({opacity: '0',display:'none'});//隐藏图片

                 $('.crops_seed').attr("src",'');//拖动的种子图片
                 $('.crops_seed').css({opacity: '0',display:'none'});//隐藏图片

                 $('.zhaiqu').attr('src','');//摘取
                 $('.zhaiqu').css({opacity: '0',display:'none'});//摘取
});
//铲地
$('.img7').click(function (event) {
                 $('.jiaoshui').attr('src','');//浇水
                 $('.jiaoshui').css({opacity: '1',display:'none'});//浇水

                 $('.chucao').attr('src','');//除草
                 $('.chucao').css({opacity: '1',display:'none'});//除草

                 $('.crops').attr("src",'');//拖动的铲子图片
                 $('.crops').css({opacity: '0',display:'none'});//隐藏图片

                 $('.chuchong').attr('src','');//除虫
                 $('.chuchong').css({opacity: '0',display:'none'});//隐藏图片

                 $('.crops_seed').attr("src",'');//拖动的种子图片
                 $('.crops_seed').css({opacity: '0',display:'none'});//隐藏图片

                 $('.zhaiqu').attr('src','');//摘取
                 $('.zhaiqu').css({opacity: '0',display:'none'});//摘取
});
//背包
$('.img8').click(function (event) {
                 $('.jiaoshui').attr('src','');//浇水
                 $('.jiaoshui').css({opacity: '1',display:'none'});//浇水

                 $('.chucao').attr('src','');//除草
                 $('.chucao').css({opacity: '1',display:'none'});//除草

                 $('.crops').attr("src",'');//拖动的铲子图片
                 $('.crops').css({opacity: '0',display:'none'});//隐藏图片

                 $('.chuchong').attr('src','');//除虫
                 $('.chuchong').css({opacity: '0',display:'none'});//隐藏图片

                 $('.crops_seed').attr("src",'');//拖动的种子图片
                 $('.crops_seed').css({opacity: '0',display:'none'});//隐藏图片

                 $('.zhaiqu').attr('src','');//摘取
                 $('.zhaiqu').css({opacity: '0',display:'none'});//摘取
});
//仓库
$('.img2').click(function (event) {
                 $('.jiaoshui').attr('src','');//浇水
                 $('.jiaoshui').css({opacity: '1',display:'none'});//浇水

                 $('.chucao').attr('src','');//除草
                 $('.chucao').css({opacity: '1',display:'none'});//除草

                 $('.crops').attr("src",'');//拖动的铲子图片
                 $('.crops').css({opacity: '0',display:'none'});//隐藏图片

                 $('.chuchong').attr('src','');//除虫
                 $('.chuchong').css({opacity: '0',display:'none'});//隐藏图片

                 $('.crops_seed').attr("src",'');//拖动的种子图片
                 $('.crops_seed').css({opacity: '0',display:'none'});//隐藏图片

                 $('.zhaiqu').attr('src','');//摘取
                 $('.zhaiqu').css({opacity: '0',display:'none'});//摘取
});//商城
$('.img1').click(function (event) {
                 $('.jiaoshui').attr('src','');//浇水
                 $('.jiaoshui').css({opacity: '1',display:'none'});//浇水

                 $('.chucao').attr('src','');//除草
                 $('.chucao').css({opacity: '1',display:'none'});//除草

                 $('.crops').attr("src",'');//拖动的铲子图片
                 $('.crops').css({opacity: '0',display:'none'});//隐藏图片

                 $('.chuchong').attr('src','');//除虫
                 $('.chuchong').css({opacity: '0',display:'none'});//隐藏图片

                 $('.crops_seed').attr("src",'');//拖动的种子图片
                 $('.crops_seed').css({opacity: '0',display:'none'});//隐藏图片

                 $('.zhaiqu').attr('src','');//摘取
                 $('.zhaiqu').css({opacity: '0',display:'none'});//摘取
});
// 种子移动效果
$('body').mousemove(function(event){
    var imgsrc = $('.crops_seed').attr("src");//种植
    var chuchong = $('.chuchong').attr("src");//除虫
    var zhaiqu = $('.zhaiqu').attr("src");//摘取
    var chucao = $('.chucao').attr("src");//除草
    var jiaoshui = $('.jiaoshui').attr("src");//浇水

    if(imgsrc)
    {
        $(".crops_seed").css({"left":event.pageX+5+"px","top":event.pageY-30+"px",'position':'absolute',zIndex:"999"});
    }
    if (chuchong) {
        $(".chuchong").css({"left":event.pageX+15+"px","top":event.pageY-50+"px",'position':'absolute',zIndex:"999"});
    };
    if (zhaiqu) {
        $(".zhaiqu").css({"left":event.pageX+15+"px","top":event.pageY-50+"px",'position':'absolute',zIndex:"999"});
    };
    if (chucao) {
        $(".chucao").css({"left":event.pageX+15+"px","top":event.pageY-50+"px",'position':'absolute',zIndex:"999"});
    };
    if (jiaoshui) {
        $(".jiaoshui").css({"left":event.pageX+15+"px","top":event.pageY-50+"px",'position':'absolute',zIndex:"999"});
    };
});
// 铲子移动效果
$('html').mousemove(function(event){
    var imgsrc = $('.crops').attr("src");
    if(imgsrc)
    {
        $(".crops").css({"left":event.pageX+5+"px","top":event.pageY-70+"px",'position':'absolute',zIndex:"999"})
    }
});

//金土地铲地
$('.jingtudi .img').click(function  () {
    var clear = $('.crops').attr("src");//铲子图片
    if (clear)
    {
        // 获取已有物种
        var gold_crops = $(this).attr("src");
        if (gold_crops)
        {
           if (confirm('此地有农作物正在生长！确定铲除？')) {
                $(this).attr("src",'');
                $(this).css({opacity: '0'});
           };
        };
    };
});

// 金土地种植
$('.jingtudi a').click(function () {
    var imgsrc = $('.crops_seed').attr("src");
    if(imgsrc)
    {
        // 获取金种子
        var gold_seed = $(".gold_seed").attr("name");
        // 获取已有物种
        var gold_crops = $(this).next().attr("src");
        if (gold_crops)
        {
            alert('此地有农作物正在生长！');
            $('.crops_seed').attr("src",'');
            $('.crops_seed').css({opacity: '0',display:'none'});//隐藏图片
            return false;
        }
        else
        {
            $('.crops_seed').attr("src",'');
            $('.crops_seed').css({opacity: '0',display:'none'});//隐藏图片
            $(this).next().attr("src",gold_seed);
        }
    }
});


// 普通地种植
$('.putong a').click(function  () {
	var imgsrc = $('.crops_seed').attr("src");
	//种植
    if(imgsrc)
    {
        var zhongzitu = $('.zhongzitu').attr("src");//种子图
        var id = $(this).parent().children('.img').attr("id");//在生长的农作物图
        if (id) {
             alert('此地有农作物正在生长！');
            $('.crops_seed').attr("src",'');
            $('.crops_seed').css({opacity: '0',display:"none"});//隐藏图片
            return false;
        }else{
            var zc2 = $(this).parent().children('.img').attr("src");
            if (zc2 == 'images/kc.png') {
                alert('请铲地！');
                return false;
            };
            $('.crops_seed').attr("src",'');
            $('.crops_seed').css({opacity: '0',display:"none"});//隐藏图片

            $(this).parent().children('.img').attr("src",zhongzitu);
            $(this).parent().children('.img').css({opacity:'1',display:'block'});//显示图片
        }
    };
});


$('.putong img').click(function  () {
    var imgsrc      = $('.crops_seed').attr("src");//种子图
    var chuchong    = $('.chuchong').attr("src");//除虫
    var zhaiqu      = $('.zhaiqu').attr("src");//摘取
    var jiaoshui    = $('.jiaoshui').attr("src");//浇水
    var chucao      = $('.chucao').attr("src");//除草
    var changzi     = $('.crops').attr("src");//拖动的铲子图片
// 普通地铲地
    if (changzi) {
        var crops   = $(this).parent().children('.img').attr("id");//农作物
        // var zacao = $(this).attr("zacao");//杂草
        if (crops) {
          js_alert("你确定要铲除正在生长的农作物？");
            if (result) {
                $(this).parent().children('.img').attr("src",'');
                $(this).parent().children('.img').attr("id",'');
                $(this).parent().children('.img').css({opacity:'0',display:'none'});//隐藏图片
                $(this).parent().children('.zc2').attr("src",'');
                $(this).parent().children('.zc2').css({opacity:'0',display:'none'});//隐藏图片

                $(this).parent().children('.cz').attr("src",'');
                $(this).parent().children('.cz').css({opacity:'0',display:'none'});//隐藏图片
            };
        }else{
            $(this).parent().children('.img').attr("src",'');
            $(this).parent().children('.img').css({opacity:'0',display:'none'});//隐藏图片
            
            $(this).parent().children('.zc2').attr("src",'');
            $(this).parent().children('.zc2').css({opacity:'0',display:'none'});//隐藏图片

            $(this).parent().children('.cz').attr("src",'');
            $(this).parent().children('.cz').css({opacity:'0',display:'none'});//隐藏图片
        }

    };
    //种植
    if(imgsrc)
    {
        var zhongzitu = $('.zhongzitu').attr("src");//种子图
        var id = $(this).parent().children('.img').attr("id");//在生长的农作物图
        if (id) {
             alert('此地有农作物正在生长！');
            $('.crops_seed').attr("src",'');
            $('.crops_seed').css({opacity: '0',display:"none"});//隐藏图片
            return false;
        }else{
            var zc2 = $(this).parent().children('.img').attr("src");
            if (zc2 == 'images/kc.png') {
                alert('请铲地！');
                return false;
            };
            $(this).parent().children('.img').attr("src",zhongzitu);
            $(this).parent().children('.img').css({opacity:'1',display:'block'});//显示图片
        }
    };


    //除虫
    if (chuchong){

        var cz = $(this).parent().children('.cz').attr("src");//虫子图
        if (cz) {
			$(this).parent().children('.cz').attr("src","");
            $(this).parent().children('.cz').css({opacity:'0',display:'none'});//除虫
            //ajax除虫
        };
    };

    //摘取
    if (zhaiqu) {
        var kucao = $('.kucao').attr("src");//枯草
        var id = $(this).parent().children('.img').attr("id");//在生长的农作物图及id
        if (id) {
            $(this).parent().children('.img').attr("id",'');
            // ajax在这里收获php
            $(this).parent().children('.img').attr("src",kucao);
            $(this).parent().children('.cz').attr("src",'');//除虫
            $(this).parent().children('.cz').css({opacity:'0',display:'none'});//除虫

            $(this).parent().children('.zc2').attr("src",'');//除草
            $(this).parent().children('.zc2').css({opacity:'0',display:'none'});//除草
            
        }
    };

        
     //浇水
        if (jiaoshui) {
          var k = $(this).parent().children('.td').attr("kudi");
          var beijin = $(this).parent().children('.td').attr("beijin");
          if (k) {

            $(this).parent().children('.td').attr("kudi",'');
            //ajax，取消枯地
            $(this).parent().children('.td').css({background:"url('"+beijin+"')"});//替换土地背景图
          };
            
        };

    //除草
    if (chucao) {
        var cc = $(this).parent().children('.zc2').attr("src");//杂草图
        if (cc) {
            $(this).parent().children('.zc2').attr("src","");//除草
            $(this).parent().children('.zc2').css({opacity:'0',display:'none'});//除草
        };
    };


});




// 商城
$('.ul_a>li').mousemove(function(){
    $(this).css({background: '#714b14',  color: '#fff',  fontSize: '14px'}).siblings().css({  fontSize: '12px',
  color: '#a63900',
  background: '#3b1804'});
    $('#contenta>div').eq($(this).index()).show().siblings().hide();
});


// 仓库
$('#uld>li').mousemove(function(){
   $(this).addClass('current').siblings().removeClass('current');
   $('#contentd>div').eq($(this).index()).show().siblings().hide();
});






// 背包
$('#biaoti>li').mousemove(function(){
   $(this).addClass('current').siblings().removeClass('current');
   $('#huafei>div').eq($(this).index()).show().siblings().hide();
});

//机器狗
$('.gou').mousemove(function  () {
    $('#jqr_c').show();
});
$('.gou').mouseout(function  () {
    $('#jqr_c').hide();
});


// 好友
$('#btnCtn2').click(function () {
    $("#floatTools").animate({"right":'0'});
    $('.btnCtn').show();
    $(this).hide();
});

$('#aFloatTools_Hide').click(function () {
    $('#btnCtn2').show();
    $(this).hide();
    $("#floatTools").animate({"right":'-207px'});

});

// 购物
$("#background").click(function () {
    $("#bcm").html("");
    $("#bcm").css("background","url('../images/cs_bg2.png')");
});

//金土地
$('.jingtudi .img').mousemove(function  () {
    $(this).prev().css({background:'url(./images/js2.png)'});
    $(this).next().show();

    $(this).next().css({left:""+event.pageX-100+"px",top:""+event.pageY-300+"px"});
});
$('.jingtudi .img').mouseout(function  () {
    $(this).prev().css({background:'url(./images/js1.png)'});
    $(this).next().hide();
});




//取消
$('body').mousedown(function  (event) {
    var i = event.button;
    if (i==2) {
        $('.crops').attr("src",'');
        $('.crops').css({opacity: '0',display:'none'});
   
        $('.crops_seed').attr("src",'');
        $('.crops_seed').css({opacity: '0',display:'none'});

        $('.chuchong').attr("src",'');
        $('.chuchong').css({opacity: '0',display:'none'});

        $('.chucao').attr("src",'');
        $('.chucao').css({opacity: '0',display:'none'});

        $('.jiaoshui').attr("src",'');
        $('.jiaoshui').css({opacity: '0',display:'none'});

        $('.zhaiqu').attr("src",'');
        $('.zhaiqu').css({opacity: '0',display:'none'});
    };

});

//鼠标经过高亮
$('.putong a').mousemove(function  () {
    $(this).next().show();
    $(this).css({opacity: '0.7'});
});
$('.putong a').mouseout(function  () {
    $(this).next().hide();
    $(this).css({opacity: '1'});
});
//鼠标经过高亮
$('.putong .img').mousemove(function  () {
    $(this).prev().show();
    $(this).prev().prev().css({opacity: '0.7'});
});
$('.putong .img').mouseout(function  () {
    $(this).prev().hide();
    $(this).prev().prev().css({opacity: '1'});
});
$('.putong .cz').mousemove(function  () {
    $(this).prev().prev().show();
    $(this).prev().prev().prev().css({opacity: '0.7'});
});
$('.putong .cz').mouseout(function  () {
    $(this).prev().prev().hide();
    $(this).prev().prev().prev().css({opacity: '1'});
});
$('.putong .zc2').mousemove(function  () {
    $(this).prev().prev().prev().show();
    $(this).prev().prev().prev().prev().css({opacity: '0.7'});
});
$('.putong .zc2').mouseout(function  () {
    $(this).prev().prev().prev().hide();
    $(this).prev().prev().prev().prev().css({opacity: '1'});
});





function js_alert(tex,link,time)
{
    // $("<div id='html_cursor'><p id='plabel'></p><div id='finish'>确定</div><div id='finish2'>取消</div></div>").appendTo('body');//他里面
    
    $("#finish").show();
    $("#finish2").show();
    $("#html_cursor").show();

    // $("#html_cursor").css({
    //                 width: '164px',
    //                 height: '100px',
    //                 textAlign: 'center',
    //                 position:'absolute',
    //                 cursor:'pointer',
    //                 borderRadius: '5px',
    //                 // boxShadow: '1px 1px 6px 5px rgb(200, 200, 200)',
    //                 opacity: '1',
    //                 zIndex:'99999',
    //                 color:'red',
    //                 background:'#fff'
    //             });
    // $("#finish").css({
    //                 width: '60px',
    //                 height: '25px',
    //                 textAlign: 'center',
    //                 cursor:'pointer',
    //                 lineHeight: '25px',
    //                 borderRadius: '5px',
    //                 position:'relative',
    //                 bottom: '-18px',
    //                 left: '7px',
    //                 float:'left',
    //                 color:'#fff',
    //                 background:'green'
    //             });
    // $("#finish2").css({
    //                 width: '60px',
    //                 height: '25px',
    //                 lineHeight: '25px',
    //                 textAlign: 'center',
    //                 position:'relative',
    //                 bottom: '-18px',
    //                 right: '7px',
    //                 float:'right',
    //                 cursor:'pointer',
    //                 borderRadius: '5px',
    //                 color:'#fff',
    //                 background:'red'
    //             });

    var window_width1 = $("body").width()-$("#html_cursor").width();
    var window_height1 = $("body").height()-$("#html_cursor").height();
    var l = parseInt(event.screenX);
    if (l>window_width1) {

        var l = parseInt(event.screenX)-$("#html_cursor").width();
    };

    var t = parseInt(event.pageY)+20;
    if (t>window_height1) {
        var t = parseInt(event.pageY)-$("#html_cursor").height()-20;
    };
    
    $("#html_cursor").css("left",l);
    $("#html_cursor").css("top",t);


    

    // $("#html_cursor").click(function(){
    //     $(this).hide();
    //     $("#finish").hide();
    // });
    $("#finish").click(function () {
        $("#html_cursor").hide();
        return true;
    });
    $("#finish2").click(function () {
        $("#html_cursor").hide();
        return false;
    });

    
    var testdiv = $("#plabel");
    testdiv.html(""+tex+"");
    // if (time) {
    //     function  fout() {
    //         $("#html_cursor").fadeOut(1000);
    //         $("#finish").fadeOut(1000);
    //     }
    //     setTimeout(fout,3000);
    // };
    
    
}










