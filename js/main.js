$(function(){

    //슬라이드이미지
    var n = 0; //0 1 2
    setInterval(function(){
        if(n == 2 ){
            n=0
        }else{
            n++;
        }//if

        pos = n * (-1920) + "px";
        $(".left_move").animate({left : pos},500)

    },3000)//


    //상단팝업
    $(".t_pop_btn").click(function(){
        $(".top_pop").slideUp();
    })//click

    //공지탭 영역
    $(".nn").click(function(){

        var me = $(this).children("h2") //me는 지금 펼쳐진 아이를 의미함, this는 터틀임.
        var frid = $(this).siblings().children("h2") //닫힘. 나머지 형제들은 닫혀줘.

        if(me.hasClass("on") == true){
            me.removeClass("on");
            me.prev().fadeOut();
            me.next().slideUp();
            // 변수 me(=메뉴탭 글자)가 가지고 있는 클래스가 on 이면
            // 이미지 페이드아웃되고 글자는 슬라이드 업 되게 나타나기
        }else  {
            // 그렇지 않으면
            me.addClass("on");
            me.prev().fadeIn();
            me.next().slideDown();


            frid.removeClass("on");
            frid.prev().fadeOut();
            frid.next().slideUp();
            // 형제들은
        }//if
    }) /* click */

    $(".qq").click(function(){

        var me = $(this).children("h2") //me는 지금 펼쳐진 아이를 의미함, this는 터틀임.
        var frid = $(this).siblings().children("h2") //닫힘. 나머지 형제들은 닫혀줘.

        if(me.hasClass("on") == true){
            me.removeClass("on");
            me.prev().fadeOut();
            me.next().slideUp();
            // 변수 me(=메뉴탭 글자)가 가지고 있는 클래스가 on 이면
            // 이미지 페이드아웃되고 글자는 슬라이드 업 되게 나타나기
        }else  {
            // 그렇지 않으면
            me.addClass("on");
            me.prev().fadeIn();
            me.next().slideDown();


            frid.removeClass("on");
            frid.prev().fadeOut();
            frid.next().slideUp();
            // 형제들은
        }//if
    }) /* click */


// 로고를 클릭하면 모든 메뉴 닫히기
    $(".logo").click(function(){
        $(".notice h2").removeClass("on");
        $(".notice img").fadeOut();
        $(".notice p").slideUp();
    })//공지탭 영역


})//Jquery