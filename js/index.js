$(document).ready(function() {
    $('.header__link, .btn').fixedHeaderScroll( {
        headerSelector: 'header',
        offset: 0,
        offset: $('.header').offsetHeight,
        smooth: true,
        smoothDuration: 500,
        smoothEasing: 'swing',
    });

    $('.header__burger, .header__link').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $(window).on('scroll', function() {
        $('#container').css({
            opacity: 0.5,
        })
    });

    $(".details-content").hide();
    $("#DetailsBtn1").click(function(){
        $("#DetailsContent1").fadeToggle(300);
    });
    $("#DetailsBtn2").click(function(){
        $("#DetailsContent2").fadeToggle(300);
    });
    $("#DetailsBtn3").click(function(){
        $("#DetailsContent3").fadeToggle(300);
    });
});