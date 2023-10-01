$(document).ready(function() {
    $('.header__link, .btn').fixedHeaderScroll( {
        headerSelector: 'header',
        offset: 0,
        offset: $('.header').offsetHeight,
        smooth: true,
        smoothDuration: 500,
        smoothEasing: 'swing'
    });

    $('.header__burger, .header__link, #BtnCta1').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $(window).on('scroll', function() {
        $('.container').css({
            opacity: 1,
        })
    });

    $(".details-content").hide();
    $("#DetailsBtn1").click(function(){
        $(".arrow").toggleClass("active-arrow");
        $("#DetailsContent1").fadeToggle(300);
    });
    $("#DetailsBtn2").click(function(){
        $(".arrow").toggleClass("active-arrow");
        $("#DetailsContent2").fadeToggle(300);
    });
    $("#DetailsBtn3").click(function(){
        $(".arrow").toggleClass("active-arrow");
        $("#DetailsContent3").fadeToggle(300);
    });
});