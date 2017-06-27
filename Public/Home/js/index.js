    $(function(){
        $(".instructor .control ul li").click(function(){
            $(this).siblings().children("dl").css("display","none");
            $(this).children("dl").toggle();
        })

    })







