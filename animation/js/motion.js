/***********************************************
	* motion,js
	* common.js 에서 실행
************************************************/
function scrollEvent() {
    // except
    if ($('.section').length < 1){
        return;
    } else{
        //scrollMotion();
        //scrollInit();
        imgGif();
        tableToggle();
    }

}
// Init Motion
function scrollInit(){
    $(window).on('scroll', scrollMotion);
    //imgGif();
}
// Add Motion Class
function scrollMotion() {
    var winY, objY, isIn;
    winY = $(window).scrollTop();
    $('.section').find('.motion').each(function () {
        objY = $(this).offset().top;
        isIn = (window.innerHeight > objY - winY) ? true : false;
        if (isIn) { $(this).addClass('is_on') }
        else { $(this).removeClass('is_on') }
    })
}
function imgGif() {
    $('.section').find('.img_secondary').each(function () {
        var obj = $(this).children()
        if (obj.length > 1) {
            setInterval(() => {
                obj.eq(1).toggleClass('fade_out');
            }, 2300);
        };
    })
}
// 상영시간표 list fold/open
function tableToggle() {
    var $btn = $('.btn_toggle');
    var $obj = $('.btn_toggle').siblings('.special_list').find('[data-show="false"]');
    $btn.on('click', function () {
        var isOpen = $obj.css('display')=='none' ? false : true;
        if (isOpen){
            $obj.attr('data-show', 'false');
            $btn.text('펼쳐보기');
        }else{
            $obj.attr('data-show', 'true');
            $btn.text('접기');
        }
    })
}