$(document).ready(function(){
    let wW = window.innerWidth;
    let wH = window.innerHeight;
    let scTop = 0;
    const body = $("body");
    const hd = $("#selc-hd");
    let hdH = hd.height();
    const hamBtn = $(".ham-btn");
    const gnbWrap = $("#selc-nav");
    const mgnbWrap = $("#m-selc-nav");
    const depth1 = $(".depth1");
    const depth2 = $(".depth2");
    const mDepth1 = $(".m-depth1");
    const mDepth2 = $(".m-depth2");
    const slideSpeed = 200;
    
    rwd();

    $(window).resize(function(){
        rwd();
        reset();
    });

    function rwd() {
        wW = window.innerWidth;
        wH = window.innerHeight;
        if(wW < 768) {
            body.addClass("mo").removeClass("tb pc");
        } else if(wW >= 768 && wW < 1280) {
            body.addClass("tb").removeClass("mo pc");
        } else {
            body.addClass("pc").removeClass("mo tb");
        }
    }

    function reset() {
        hdH = hd.height();
        gnbReset();
    }

    function gnbReset(){
        if(body.hasClass("mo")){
            body.removeClass("hidden");
            mgnbWrap.removeClass("show");
            mDepth1.removeClass("active");
            mDepth2.stop().slideUp(slideSpeed);
            hamBtn.removeClass("close");
        }
    }

    hamBtn.click(function(){
        if($(this).hasClass("close")){
            gnbReset();
            $(this).removeClass("close");
            body.removeClass("hidden");
        } else {
            body.addClass("hidden");
            $(this).addClass("close");
            mgnbWrap.addClass("show");
        }
    });

    //모바일 GNB 작동
    mDepth1.children("a").click(function(){
        //메인메뉴 활성화(active)
        $(this).parent().siblings().removeClass("active");
        $(this).parent().addClass("active");
        $(this).parent().siblings().find(mDepth2).stop().slideUp(slideSpeed);
        $(this).parent().find(mDepth2).stop().slideDown(400);

    });

    //PC GNB 작동
    //trg(depth1), event(mouseenter), method(fadeIn)

    depth1.on({
        mouseenter: function(){
            if(body.hasClass("pc")) {
                hd.addClass("on");
                $(this).addClass("on");
                depth2.show();
            }
        },
        mouseleave: function(){
            if(body.hasClass("pc")) {
                hd.removeClass("on");
                $(this).removeClass("on");
                depth2.hide();
            }
        }
    });

    //푸터 브랜드 펼침메뉴
    $(".brand-label").click(function(){
        $(".brand-item").toggleClass("active");
        //앵커의 기능 실행을 금지
        return false;
    });

    //offset : 문서로부터 떨어진 위치
    //속성으로는 left, top
    
    $(document).scroll(function(){
        scTop = $(document).scrollTop();
        if(scTop > wH){
            hd.addClass("show");
        } else {
            hd.removeClass("show");
        }
        $(".ani-top").each(function(){
            let offsetTop = $(this).offset().top - wH;
            //console.log(offsetTop);
            if(scTop > offsetTop) {
                $(this).addClass("fade-in");
            } else {
                $(this).removeClass("fade-in");
            }
        });
    });
});